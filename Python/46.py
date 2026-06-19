import requests

url = "https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=205525b90e7e3062dfd22bf81e3d0636&units=metric"

try:
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()

        temperature = data["main"]["temp"]
        condition = data["weather"][0]["description"]

        print("Temperature:", temperature, "°C")
        print("Condition:", condition)

    elif response.status_code == 404:
        print("City not found")

    else:
        print("Error:", response.status_code)

except requests.exceptions.RequestException:
    print("Network Error")