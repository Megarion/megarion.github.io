import csv
import os
from function.util.read import read_file
from function.util.clear import clear_folder


def gen(input_file, template_file, output_path):
    clear_folder(output_path)
    template = open(template_file, "r")
    input = read_file(input_file)

    header = []
    for row in input:
        header = row
        break

    output = template.read()
    for row in range(1, len(input)):
        o = output

        # SPECIAL REPLACES
        o = o.replace("$$ENTRY_NUMBER", str(row))

        for h in range(0, len(header)):
            o = o.replace("$" + header[h], input[row][h])

        if not os.path.exists(f"{output_path}/{row}/"):
            os.makedirs(f"{output_path}/{row}/")
        f = open(
            f"{output_path}/{row}/index{os.path.splitext(template_file)[1]}", 'w')
        f.write(o)

    template.close()

# Main generator
