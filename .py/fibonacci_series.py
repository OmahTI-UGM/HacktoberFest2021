def fibonacci(num):
    num1 = 0
    num2 = 1
    s = 0
    for i in range(num):
        s = num1 + num2
        num1 = num2
        num2 = s
    return num2

p = int(input('fibonacci: '))

if __name__ == "__main__":
    print(f'result: {fibonacci(p)}')
