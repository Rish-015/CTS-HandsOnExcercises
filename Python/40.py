class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    @classmethod
    def from_string(cls, emp_str):
        name, salary = emp_str.split(",")
        return cls(name, int(salary))

    def display(self):
        print("Name:", self.name)
        print("Salary:", self.salary)

emp = Employee.from_string("Shubh,75000")

emp.display()