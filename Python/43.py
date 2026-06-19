import configparser

class Config:
    pass

class DatabaseConfig(Config):
    def load_config(self):
        config = configparser.ConfigParser()
        config.read("db.ini")

        if "DATABASE" in config:
            db = config["DATABASE"]

            required = ["host", "user", "password"]

            for key in required:
                if key not in db:
                    print(f"Missing {key}")
                    return

            print("Database Configuration Loaded")
            print("Host:", db["host"])
            print("User:", db["user"])

db = DatabaseConfig()
db.load_config()