# Exercício 1: Fibonacci: Ligue o cronômetro, e faça a medição de quanto tempo você leva para resolver este problema. Se demorar mais de 10 minutos, pare! Seu tempo acabou.

import re


def fibonacci(n):
    initial = [0,1]
    while len(initial) != n:
        initial.append(initial[-1] + initial[-2])
    print(initial)
    return initial[-1]


# print(fibonacci(10))


def fibonacci2(n):
    if n < 2:
        return n
    else:
        return fibonacci2(n-1) + fibonacci2(n-2)

# print(fibonacci2(10))


# Exercício 2: ReverseCorp Ligue seu cronômetro de novo, e tente desenvolver esta solução, utilizando a iteração. (Se demorar mais que 10 minutos, pare, e prossiga com o conteúdo!)

def reverse_array(array):
    new_array = []
    for element in array[::-1]:
        new_array.append(element)
    return new_array


# print(reverse_array([1, 2, 3, 4, 5]))

# iterativo
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list

# recursivo
def reverse_recursive(list):
    if len(list) < 2:
        return list
    else:
        return reverse_recursive(list[1:]) + [list[0]]


# print(reverse_recursive([5, 4, 3, 2, 1]))


# Exercício 3: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.
def recursive_sum(n):
    if n == 1:
        return 1
    else: 
        return n + recursive_sum(n-1)

print(recursive_sum(5))