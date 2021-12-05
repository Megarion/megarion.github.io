import csv

def new(file, header):
    f = open(file, 'a')
    write = csv.writer(f, delimiter=',', lineterminator='\n')
    write.writerow(header)

    f.close()
    return None

# Utility to create a new csv file