def calculate_net_salary(salary, tax_rate):
    if salary < 0 or not (0 <= tax_rate <= 1):
        return "Invalid Input"

    net_salary = salary - (salary * tax_rate)
    return f"Net Salary: {net_salary:.2f}"

salary = 75000.5
tax_rate = 0.18

print(calculate_net_salary(salary, tax_rate))