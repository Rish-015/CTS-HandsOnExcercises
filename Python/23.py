import math

radius = 7

if radius > 0:
    area = math.pi * radius ** 2
    print(f"Area of Circle: {area:.2f}")
else:
    print("Invalid Radius")