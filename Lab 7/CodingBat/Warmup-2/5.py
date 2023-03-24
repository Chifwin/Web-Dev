def last2(str):
  res = 0
  for i in range(len(str)-2):
    res += (str[i:i+2] == str[-2:])
  return res
