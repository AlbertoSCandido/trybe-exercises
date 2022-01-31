# Exercício 1
# Atributos:
# volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
# canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
# tamanho - será inicializado com o valor do parâmetro;
# ligada - será inicializado com o valor de False , pois está inicialmente desligado.
# Todos os atributos devem ser privados.
# Métodos:
# aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
# diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
# modificar_canal - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção ( ValueError ) caso o valor esteja fora dos limites;
# ligar_desligar - alterna o estado da TV entre ligado e desligado ( True / False ).

class Tv:
    def __init__(self, tamanho = 50):
        self._volume = 50
        self._canal = 1
        self._tamanho = tamanho
        self._ligada = False
    
    def aumentar_volume(self):
        if self._volume < 99:
            self._volume += 1
        else:
            self._volume = 99
    
    def diminuir_volume(self):
        if self._volume > 0:
            self._volume -= 1
        else:
            self._volume = 0
    
    def modificar_canal(self, canal):
        if canal > 0 and canal <= self._tamanho:
            self._canal = canal
        else:
            raise ValueError('Canal fora do intervalo permitido')

    def ligar_desligar(self):
        self._ligada = not self._ligada
