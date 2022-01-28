from sales_report import SalesReport
from zip_compressor import ZipCompressor
import json

class SalesReportJSON(SalesReport):
    # Nós não reimplementamos o get_export_file_name
    # mas como ele usa um atributo de classe pra pegar a extensão
    # só de redefinir o atributo já vamos conseguir mudar o resultado!
    FILE_EXTENSION = '.json'

    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_length(self):
        return len(self.build())

meu_relatorio_de_vendas = SalesReportJSON('meu_relatorio2', ZipCompressor)

# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!

meu_relatorio_de_vendas.serialize()
print(meu_relatorio_de_vendas.get_length())
meu_relatorio_de_vendas.compress()
