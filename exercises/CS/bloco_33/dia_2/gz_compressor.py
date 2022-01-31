import gzip
from serializer import Serializer

class GzCompressor(Serializer):
    '''Um método estático é chamado diretamente da classe,
    sem uma instância, e NÃO ACESSA nenhum atributo ou método da classe!'''
    @staticmethod
    def compress(file_name):
        '''Como métodos estáticos não acessam classe nem instância,
        o Python não dá a eles nenhum primeiro parâmetro'''
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)