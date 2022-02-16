# Exercício 1: Fibonacci: Ligue o cronômetro, e faça a medição de quanto tempo você leva para resolver este problema. Se demorar mais de 10 minutos, pare! Seu tempo acabou.

import re


def fibonacci(n):
    initial = [0,1]
    while len(initial) != n:
        initial.append(initial[-1] + initial[-2])
    print(initial)
    return initial[-1]


print(fibonacci(10))