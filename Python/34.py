employees = {
    "IT": {
        "Rahul": 50000,
        "Priya": 60000
    },
    "HR": {
        "Anu": 45000
    }
}

department = "IT"
employee = "Priya"

if department in employees:
    if employee in employees[department]:
        print("Salary:", employees[department][employee])
    else:
        print("Employee not found")
else:
    print("Department not found")