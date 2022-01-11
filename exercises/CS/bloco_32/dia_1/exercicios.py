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

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def square(n):
    for i in range(n):
        acc = ''
        for j in range(n):
            acc += '*'
            if j == n - 1:
                print(acc)

        
def draw_square(n):
    for row in range(n):
        print(n * '*')


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
def biggest_name(list):
    biggest = list[0]
    for i in list:
        if len(biggest) < len(i):
            biggest = i
    return biggest


