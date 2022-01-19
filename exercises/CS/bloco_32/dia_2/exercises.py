import random
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


# print_name("PEDRO")


# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .
# def word_game():
#     fruit_list = ["banana", "apple", "orange", "tomato", "peach"]
#     word = random.choice(fruit_list)
#     scrambled_word = "".join(random.sample(word, len(word)))
#     print(f"The word is: {scrambled_word}")
#     for i in range(3):
#         print("Tentativa", i + 1)
#         guess = input("Escolha uma palavra: ")
#         if guess == word:
#             print("Você acertou!")
#             break
#         else:
#             print("Você errou!")
#     print("A palavra era:", word)

# word_game()

# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.
def word_game():
    try:
        with open("fruit_list.txt", "r") as file:
            fruit_list = [fruit[:-1] for fruit in file.readlines()]
            word = random.choice(fruit_list)
            scrambled_word = "".join(random.sample(word, len(word)))
            print(f"The word is: {scrambled_word}")
            for i in range(3):
                print("Tentativa", i + 1)
                guess = input("Escolha uma palavra: ")
                if guess == word:
                    print("Você acertou!")
                    break
                else:
                    print("Você errou!")
            print("A palavra era:", word)
    except FileNotFoundError:
        print("Arquivo não encontrado!")

word_game()