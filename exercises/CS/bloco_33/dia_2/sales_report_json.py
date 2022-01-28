from sales_report import SalesReport
import json

class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)


meu_relatorio_de_vendas = SalesReportJSON('meu_relatorio2')

# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!

meu_relatorio_de_vendas.serialize()
