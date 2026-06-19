from tabulate import tabulate

temp = float(input("Enter Temperature: "))

choice = input("Convert from (C/F/K): ").upper()

data = []

if choice == "C":
    data.append(["Fahrenheit", temp * 9/5 + 32])
    data.append(["Kelvin", temp + 273.15])

elif choice == "F":
    data.append(["Celsius", (temp - 32) * 5/9])
    data.append(["Kelvin", (temp - 32) * 5/9 + 273.15])

elif choice == "K":
    data.append(["Celsius", temp - 273.15])
    data.append(["Fahrenheit", (temp - 273.15) * 9/5 + 32])

print(tabulate(data,
               headers=["Scale", "Value"],
               floatfmt=".2f"))