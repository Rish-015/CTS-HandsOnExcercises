import json

students = {}

def add_grade(name, grade):
    if 0 <= grade <= 100:
        students.setdefault(name, []).append(grade)

def calculate_gpa(name):
    grades = students[name]
    return sum(grades) / len(grades)

add_grade("Rahul", 85)
add_grade("Rahul", 90)

add_grade("Priya", 95)
add_grade("Priya", 80)

for student in students:
    print(student, "GPA:", calculate_gpa(student))

class_average = sum(
    calculate_gpa(student)
    for student in students
) / len(students)

print("Class Average:", class_average)

with open("grades.json", "w") as file:
    json.dump(students, file)