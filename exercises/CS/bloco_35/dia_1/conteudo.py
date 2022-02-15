# Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
def multiply_array(numbers):
    result = 0
    for number in numbers:
            result *= number

    return result

# Ordem de Complexidade (complexidade de tempo) = O(n) - linear
# complexidade de espaço = O(1) - constante

def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1,2,3,4,5]

multiply_arrays(meu_array, meu_array)


# Exercício 2: Para desembaraçar a sopa de letrinhas que a seção anterior criou, meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!


# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³) !
def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = list(range(1, 200))
multiply_arrays(meu_array, meu_array, meu_array)



# Exercício 4: Imagine que você recebe dois arrays de tamanho igual, array1 e array2 . Para cada elemento do array1 , realize uma busca binária no array2 . Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n) , ou O(n log n) .
# Se cada busca binária tem uma complexidade O(log n) e fazemos n buscas, sendo cada uma nessa complexidade, a complexidade final é O(n * log n) .

# A estrutura deve estar ordenada para que a busca binária funcione
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print("Subarray in step {}: {}".format(step, str(array[start: end + 1])))
        step = step + 1
        mid = (start + end) // 2

        if element == array[mid]:
            return mid

        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return - 1


print(binary_search_iterative(data, 2))