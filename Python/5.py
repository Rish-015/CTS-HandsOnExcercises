def display_coordinates(coords):
    if len(coords) != 2:
        return "Invalid Coordinates"

    x, y = coords
    print(f"X Coordinate: {x}")
    print(f"Y Coordinate: {y}")

display_coordinates((10, 20))