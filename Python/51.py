import hashlib

class URLShortener:

    def __init__(self):
        self.urls = {}

    def shorten(self, url):
        short = hashlib.md5(url.encode()).hexdigest()[:6]

        self.urls[short] = url

        return short

    def lookup(self, short):
        return self.urls.get(short, "URL Not Found")

shortener = URLShortener()

short_url = shortener.shorten("https://www.google.com")

print("Short Code:", short_url)

print("Original URL:", shortener.lookup(short_url))