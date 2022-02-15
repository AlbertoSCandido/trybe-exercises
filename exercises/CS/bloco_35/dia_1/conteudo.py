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