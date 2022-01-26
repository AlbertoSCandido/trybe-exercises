import re

# Exercício 2 Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa 69 5683. Claro que existem alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.
# Copiar
# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9
# Exemplo de entrada:
# Copiar
# 1-HOME-SWEET-HOME
# MY-MISERABLE-JOB
# Saídas correspondentes:
# Copiar
# 1-4663-79338-4663
# 69-647372253-562

def encrypt(text):
    if text == "":
        return ""
    encryptor = [
        ("abc", "2"),
        ("def", "3"),
        ("ghi", "4"),
        ("jkl", "5"),
        ("mno", "6"),
        ("pqrs", "7"),
        ("tuv", "8"),
        ("wxyz", "9")
    ]
    result = ""
    for letter in text:
        for i in encryptor:
            if letter in i[0]:
                result += i[1]                
    return result


print(encrypt("abcdsadasdsa"))