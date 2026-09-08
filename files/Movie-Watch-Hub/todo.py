todos = []

while True:
    print("\nWhat would you like to do?")
    print("1. Add a task")
    print("2. View tasks")
    print("3. Remove a task")
    print("4. Quit")

    choice = input("> ")

    if choice == "1":
        task = input("What's the task? ")
        todos.append(task)
        print(f"Added: {task}")

    elif choice == "2":
        if len(todos) == 0:
            print("No tasks yet!")
        else:
            print("\nYour tasks:")
            for i, task in enumerate(todos, 1):
                print(f"  {i}. {task}")

    elif choice == "3":
        if len(todos) == 0:
            print("No tasks to remove!")
        else:
            print("\nYour tasks:")
            for i, task in enumerate(todos, 1):
                print(f"  {i}. {task}")
            number = input("Which number do you want to remove? ")
            index = int(number) - 1
            removed = todos.pop(index)
            print(f"Removed: {removed}")

    elif choice == "4":
        print("Goodbye!")
        break
