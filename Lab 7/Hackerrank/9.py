# https://www.hackerrank.com/challenges/maximize-it/problem
from itertools import product
k, m = map(int, input().split())
ar = [list(map(int, input().split()))[1:] for i in range(k)]
print(max(sum((i*i)%m for i in p)%m for p in product(*ar)))