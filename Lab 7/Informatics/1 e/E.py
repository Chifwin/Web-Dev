def is_prime(x):
    for i in range(2, int(x**0.5)+1):
        if x%i == 0:
            return False
    return True
print("prime" if is_prime(int(input())) else "composite")