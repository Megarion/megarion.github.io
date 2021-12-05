import csv

def read_file(file):
    f = open(file, 'r')

    read = csv.reader(f, delimiter=',', lineterminator='\n')
    data = []
    for row in read:
        data.append(row)

    f.close()
    return data

# Utility to return the data of a csv file