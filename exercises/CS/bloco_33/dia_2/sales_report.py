from abc import ABC, abstractmethod
import gzip
import json

from gz_compressor import GzCompressor

class SalesReport(ABC):
    # Aqui temos um atributo de classe!
    FILE_EXTENSION = ''

    # Nossa classe agora espera *instâncias* de compressor como um parâmetro.
    # Temos um valor padrão para suportar o código que usava as SalesReport
    # sem parâmetros -- não precisa correr pra re-escrever nada ;)
    def __init__(self, export_file, compressor=GzCompressor):
        self.export_file = export_file
        self.compressor = compressor


    def get_export_file_name(self):
      # Aqui usamos o atributo de classe
      # Vai fazer mais sentido nas classes herdeiras!
      return self.export_file + self.FILE_EXTENSION


    def build(self):
        return [
            {
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
            },
            {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
            }
        ]
    
    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())

    @abstractmethod
    def get_length(self):
        raise NotImplementedError

    @abstractmethod
    def serialize(self):
        raise NotImplementedError
