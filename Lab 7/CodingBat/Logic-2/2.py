def lone_sum(a, b, c):
  res = a+b+c
  if a == b or a == c:
    res -= 2*a
    if b == c:
      res -= a
  elif b == c:
    res -= 2*b
  return res
