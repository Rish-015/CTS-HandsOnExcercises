try:
    file = open("output/greeting.txt", "r")

    content = file.read()

    print(content)

    file.close()

except FileNotFoundError:
    print("File not found")