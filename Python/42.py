import statistics

try:
    with open("sales.txt", "r") as file:
        sales = [float(line.strip()) for line in file]

    print("Mean:", statistics.mean(sales))
    print("Median:", statistics.median(sales))

except FileNotFoundError:
    print("sales.txt not found")

except ValueError:
    print("Invalid data in file")