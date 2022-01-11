# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def bigNumber(n1, n2):
    if n1 < n2:
        return n2
    elif n1 > n2:
        return n1
    else:
        return "Os números são iguais"


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(list):
    sum = 0
    for i in list:
        sum += i
    return sum / len(list)

