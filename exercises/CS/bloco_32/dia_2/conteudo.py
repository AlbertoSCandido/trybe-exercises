import re
import sys
# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:
def print_name():
    name = input("Digite seu nome: ")
    for letter in name:
        print(letter)


# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.
def sum_numbers(list):
    sum = 0
    for number in list:
        try:
            sum += int(number)
        except ValueError:
            return f"Erro ao somar valores, {number} é um valor inválido"
    return sum        
    
print(sum_numbers([1, 5, 5]))
print(sum_numbers([1, 5, "a", "b", "c"]))