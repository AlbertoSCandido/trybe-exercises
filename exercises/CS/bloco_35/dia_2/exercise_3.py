# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.

def find_biggest_number(array):
    if len(array) == 1:
        return array[0]
    biggest = find_biggest_number(array[:len(array)-1])
    if array[-1] > biggest:
        return array[-1]
    return biggest


print(find_biggest_number([6,1,2,3,9]))