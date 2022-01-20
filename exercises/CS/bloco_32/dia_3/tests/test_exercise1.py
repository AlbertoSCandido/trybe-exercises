from exercise1 import fizz_buzz

# exercise 1
# def fizz_buzz(number)
def test_if_fizz_buzz_called_with_0_returns_empty_list():
    assert fizz_buzz(0) == []


def test_if_fizz_buzz_called_with_number_lower_then_0():
    assert fizz_buzz(-1) == []


def test_if_fizz_buzz_called_with_number_higher_then_0():
    assert fizz_buzz(1) == [1]


def test_if_fizz_buzz_called_with_number_higher_then_0_and_returns_list_with_1_and_fizz():
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_if_fizz_buzz_called_with_number_higher_then_0_and_returns_list_with_1_and_fizz_and_buzz():
    assert fizz_buzz(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]