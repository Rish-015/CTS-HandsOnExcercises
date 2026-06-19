class Employee:
    def __init__(self):
        self.salary = 0

    def set_salary(self, salary):
        self.salary = salary
        return self

    def apply_raise(self, amount):
        self.salary += amount
        return self

    def display(self):
        print("Final Salary:", self.salary)
        return self

emp = Employee()

emp.set_salary(50000).apply_raise(5000).display()