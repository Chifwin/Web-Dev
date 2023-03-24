# https://www.hackerrank.com/challenges/compress-the-string/problem
from itertools import groupby
print(" ".join(f"({sum(len(j) for j in ar)}, {i})" for (i, ar) in groupby(input())))