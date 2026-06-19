score = 88

if 0 <= score <= 100:
    if score >= 80:
        grade = "A"
    elif score >= 60:
        grade = "B"
    else:
        grade = "C"

    print("Grade:", grade)
else:
    print("Invalid Score")