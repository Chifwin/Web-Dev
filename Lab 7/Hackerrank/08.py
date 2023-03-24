# https://www.hackerrank.com/challenges/iterables-and-iterators/problem
from math import comb
from itertools import combinations
n = int(input())
ar = input().split()
k = int(input())
print(sum(('a' in i) for i in combinations(ar, k)) / comb(n, k))