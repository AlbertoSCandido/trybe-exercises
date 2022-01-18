import re
import sys
# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:
def print_name():
    name = input("Digite seu nome: ")
    for letter in name:
        print(letter)


# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido, por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros, no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.
def sum_numbers():
    numbers = input("Digite seus números separados por espaço: ")
    list_numbers = numbers.split()
    sum = 0
    for number in list_numbers:
        if number.isdigit():
            sum += int(number)
        else:
            return f"Erro ao somar valores, {number} é um valor inválido"
    return sum        


# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre mantendo somente as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.
def search_aproved_students():
    with open("estudantes.txt", "r") as file:
        students = file.readlines()
        with open("aprovados.txt", "w") as file_aproved:
            for student in students:
                student_info = student.split(" ")
                if int(student_info[1]) >= 6:
                    file_aproved.write(f"{student_info[0]} {student_info[1]}\n")


search_aproved_students()