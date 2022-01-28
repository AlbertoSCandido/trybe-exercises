from sales_report import SalesReport
import csv

class SalesReportCSV(SalesReport):
    def serialize(self):
        with open (self.export_file + '.csv', 'w') as file:
            writer = csv.DictWriter(file, fieldnames=self.build()[0].keys())
            writer.writeheader()
            csv.DictWriter(file, fieldnames=self.build()[0].keys()).writerows(self.build())


meu_relatorio_de_vendas = SalesReportCSV('meu_relatorio2')
meu_relatorio_de_vendas.serialize()