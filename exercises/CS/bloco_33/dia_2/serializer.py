from abc import ABC, abstractmethod

class Serializer(ABC):
    @abstractmethod
    def serialize(cls, data):
        raise NotImplementedError