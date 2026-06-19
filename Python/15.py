user = "admin"
pwd = "pass123"

if user != "":
    if pwd != "":
        if user == "admin":
            if pwd == "pass123":
                print("Login Successful")
            else:
                print("Wrong Password")
        else:
            print("Invalid Username")
    else:
        print("Password Cannot Be Empty")
else:
    print("Username Cannot Be Empty")