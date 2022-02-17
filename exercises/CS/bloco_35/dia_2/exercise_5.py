# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.

def has_divisor(n, i, j):
    if i > j:
        return False
    elif n % i == 0:
        return True
    else:
        return has_divisor(n,i + 1,j)

def is_prime(n):
    return n > 1 and not(has_divisor(n, 2, n - 1))


print(is_prime(10))
