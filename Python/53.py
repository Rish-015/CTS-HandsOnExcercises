from datetime import datetime

class Task:
    def __init__(self, name, due_date, priority):
        self.name = name
        self.due_date = datetime.strptime(due_date, "%Y-%m-%d")
        self.priority = priority

tasks = [
    Task("Project", "2026-06-25", 1),
    Task("Assignment", "2026-06-10", 2),
    Task("Exam Prep", "2026-06-15", 1)
]

tasks.sort(key=lambda x: x.due_date)

today = datetime.now()

print("Task Schedule")

for task in tasks:
    print(task.name, task.due_date.date())

print("\nOverdue Tasks")

for task in tasks:
    if task.due_date < today:
        print(task.name)