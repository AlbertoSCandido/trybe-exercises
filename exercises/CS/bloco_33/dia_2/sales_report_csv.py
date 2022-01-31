from sales_report import SalesReport
import csv

class SalesReportCSV(SalesReport):
    # Nós não reimplementamos o get_export_file_name
    # mas como ele usa um atributo de classe pra pegar a extensão
    # só de redefinir o atributo já vamos conseguir mudar o resultado!
    FILE_EXTENSION = '.json'

    def serialize(self):
        with open (self.export_file + '.csv', 'w') as file:
            writer = csv.DictWriter(file, fieldnames=self.build()[0].keys())
            writer.writeheader()
            csv.DictWriter(file, fieldnames=self.build()[0].keys()).writerows(self.build())


meu_relatorio_de_vendas = SalesReportCSV('meu_relatorio2')
meu_relatorio_de_vendas.serialize()