# https://www.hackerrank.com/challenges/matrix-script/problem
import re
n, m = map(int, input().split())
mat = [input() for _ in range(n)]
print(re.sub(r"\b\W+\b", " ", "".join(mat[i][j] for j in range(m) for i in range(n))))