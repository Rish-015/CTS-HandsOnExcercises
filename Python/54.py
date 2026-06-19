class Product:
    def __init__(self, name):
        self.name = name

class Perishable(Product):
    pass

class Electronics(Product):
    pass

inventory = {
    "Milk": 5,
    "Laptop": 20,
    "Bread": 3
}

low_stock = set()

for item, stock in inventory.items():
    if stock < 10:
        low_stock.add(item)

print("Inventory")

for item, stock in inventory.items():
    print(item, stock)

print("\nLow Stock Alerts")

for item in low_stock:
    print(item)