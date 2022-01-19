# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
# Entrada:
# Copiar
# PEDRO
# Saída:
# Copiar
# PEDRO
# PEDR
# PED
# PE
# P
def print_name(name):
    for index in range(len(name), 0, -1):
        print(name[:index])

print_name("PEDRO")