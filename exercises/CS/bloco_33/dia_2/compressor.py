from abc import ABC, abstractmethod

class Compressor(ABC):
    def __init__(self, filepath='./'):
        self.filepath = filepath

    @abstractmethod
    def compress(self, file_name):
        raise NotImplementedError