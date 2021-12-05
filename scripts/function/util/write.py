import csv
from os import write


def write_row(file, row):
    f = open(file, 'a')

    write = csv.writer(f, delimiter=',', lineterminator='\n')
    for i in row:
        write.writerow(i)

    f.close()
    return None

# Utility to write rows to a csv file