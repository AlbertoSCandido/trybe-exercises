# Exercício 3 Dado um array de números inteiros que representam produtos em um e-commerce. Verifique quantos produtos formam boas combinações, considerando que uma boa combinação é quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:
# Copiar
# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.


# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.

def get_number_of_good_combinations(products):
    count = 0
    for index in range(len(products)):
        for second_index in range(index):
            if products[index] == products[second_index]:
                count += 1
    return count

print(get_number_of_good_combinations([1, 3, 1, 1, 2, 3]))
print(get_number_of_good_combinations([1, 1, 2, 3]))


# gabarito
# def good_pairs(numbers):
#     answer = 0
#     i = 0
#     size = len(numbers)
#     for i in range(size):
#         for j in range(i + 1, size):
#             if numbers[i] == numbers[j]:
#                 answer += 1
#     return answer