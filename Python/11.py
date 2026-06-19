kg = float(input("Enter weight in kilograms: "))

if kg > 0:
    lbs = kg * 2.20462
    print(f"Weight in pounds: {lbs:.2f}")
else:
    print("Invalid weight")