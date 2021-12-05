from function.util.write import write_row

from function.gen.main_gen import gen

from datetime import date

# write_row("secret/data/file.csv",[["the second", "hi", date.today().strftime("%b-%d-%Y")]])

gen("secret/data/file.csv", "secret/templates/template.html", "secret/entry")
