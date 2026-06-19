
import shutil
import os

copied = set()

source_files = ["sample1.txt", "sample2.txt"]

backup_folder = "backup"

os.makedirs(backup_folder, exist_ok=True)

for file in source_files:
    try:
        if file not in copied:
            shutil.copy(file, backup_folder)

            copied.add(file)

            with open("backup.log", "a") as log:
                log.write(f"Copied: {file}\n")

    except FileNotFoundError:
        print(f"{file} not found")

    except PermissionError:
        print(f"No permission for {file}")