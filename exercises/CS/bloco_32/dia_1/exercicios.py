# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def bigNumber(n1, n2):
    if n1 < n2:
        return n2
    elif n1 > n2:
        return n1
    else:
        return "Os números são iguais"


