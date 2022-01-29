# Exercício 3: Que tal agora relembrarmos o exercício das figuras geométricas?

class FiguraGeometrica:
    def __init__(self):
        self.area = 0
        self.perimetro = 0


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        super().__init__()
        self.lado = lado
        self.area = self.lado ** 2
        self.perimetro = self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        super().__init__()
        self.base = base
        self.altura = altura
        self.area = self.base * self.altura
        self.perimetro = (self.base * 2) + (self.altura * 2)
    

class Circulo:
    def __init__(self, raio):
        self.raio = raio
        self.area = 3.14 * (self.raio ** 2)
        self.perimetro = 2 * 3.14 * self.raio
