class Employee:
    def __init__(self, name):
        self.name = name

    def display(self):
        print("Employee Name:", self.name)

emp1 = Employee("Rahul")
emp2 = Employee("Priya")
emp3 = Employee("Aadhithya")

emp1.display()
emp2.display()
emp3.display()