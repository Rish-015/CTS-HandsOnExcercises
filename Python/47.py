def calculate(a, b, op):
    try:
        if op == '+':
            return a + b
        elif op == '-':
            return a - b
        elif op == '*':
            return a * b
        elif op == '/':
            return a / b
        else:
            return "Invalid Operator"

    except ZeroDivisionError:
        return "Cannot divide by zero"

try:
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    op = input("Enter operator (+,-,*,/): ")

    print("Result =", calculate(a, b, op))

except ValueError:
    print("Invalid Number")