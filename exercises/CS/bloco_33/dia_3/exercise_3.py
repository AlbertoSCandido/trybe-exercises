# Exercício 3: Com o baralho tradicional pronto, implemente agora uma subclasse de Baralho chamada BaralhoInverso , que produz um iterador para fornecer as cartas na ordem inversa, ou seja, sem embaralhar, a primeira carta deve ser o <K de paus> em vez do <A de copas> , como acontece na implementação atual.

from collections.abc import Iterator, Iterable

class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%%s de %s>' % (self.valor, self.naipe)

class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = -1

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta

class BaralhoInverso(Baralho):
    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)
