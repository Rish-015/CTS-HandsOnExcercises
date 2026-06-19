def check_even_odd(number):
    if not isinstance(number, int):
        return "Invalid Input"

    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

number = 17
print(check_even_odd(number))