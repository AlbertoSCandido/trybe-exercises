from zipfile import ZipFile

from serializer import Serializer


class ZipCompressor(Serializer):
    FILE_PATH = './'

    '''Um método de classe é chamado diretamente da classe,
    sem uma instância, e ACESSA algum atributo ou método da classe!'''
    @classmethod
    def compress(cls, file_name):
        '''Repare que, acima, o atributo cls é como o self: o
        cls é a própria classe, passada automaticamente para
        um método de classe, enquanto o self é a instância'''
        with ZipFile(cls.FILE_PATH + file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)