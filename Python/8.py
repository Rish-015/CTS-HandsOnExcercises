def salary_details(salaries):
    if not salaries:
        return "Empty List"

    highest = max(salaries)
    lowest = min(salaries)

    print(f"Highest Salary: {highest}")
    print(f"Lowest Salary: {lowest}")

salary_list = [50000, 75000, 62000, 95000]

salary_details(salary_list)