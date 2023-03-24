def count_hi(str):
  res = 0
  for i in range(len(str)-1):
    res += str[i:i+2] == 'hi'
  return res
