# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum ( mdc ) de dois inteiros.

def find_mdc(num_1, num_2):
    if num_2 == 0:
        return num_1
    return find_mdc(num_2, num_1 % num_2)


print(find_mdc(50,20))