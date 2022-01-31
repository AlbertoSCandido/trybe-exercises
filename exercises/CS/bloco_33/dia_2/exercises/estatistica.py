# Exercício 2: Defina uma classe Estatistica que calcule média, mediana e moda de uma lista de números.


class Estatistica:
    def __init__(self, lista=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]):
        self.lista = lista
    
    def media(self):
        return sum(self.lista) / len(self.lista)
    
    def mediana(self):
        if len(self.lista) % 2 == 0:
            return (self.lista[len(self.lista) // 2] + self.lista[len(self.lista) // 2 - 1]) / 2
        else:
            return self.lista[len(self.lista) // 2]
    
    def moda(self):
        moda = 0
        maior_contagem = 0
        for numero in self.lista:
            contagem = self.lista.count(numero)
            if contagem > maior_contagem:
                moda = numero
                maior_contagem = contagem
        return moda


estatistica = Estatistica([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9, 9, 10])
print(estatistica.media())
print(estatistica.mediana())
print(estatistica.moda())