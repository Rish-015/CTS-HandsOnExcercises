import json

class Employee:
    def __init__(self, emp_id, name, salary):
        self.emp_id = emp_id
        self.name = name
        self.salary = salary

    def __str__(self):
        return f"{self.emp_id} - {self.name} - ₹{self.salary}"

employees = {
    "E101": Employee("E101", "Rahul", 50000),
    "E102": Employee("E102", "Priya", 60000)
}

data = {}

for emp_id, emp in employees.items():
    data[emp_id] = {
        "name": emp.name,
        "salary": emp.salary
    }

with open("emps.json", "w") as file:
    json.dump(data, file, indent=4)

with open("emps.json", "r") as file:
    loaded_data = json.load(file)

print("Employee Records:")
for emp_id, details in loaded_data.items():
    print(emp_id, details)