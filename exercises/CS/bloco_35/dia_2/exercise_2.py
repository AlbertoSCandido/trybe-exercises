# Exercício 2: Transforme o algoritmo criado no exercicio 1 em recursivo.


def count_even_numbers(n):
    if n == 1:
        return 0
    if n % 2 == 0:
        return 1 + count_even_numbers(n - 1)
    return count_even_numbers(n - 1)


print(count_even_numbers(10))