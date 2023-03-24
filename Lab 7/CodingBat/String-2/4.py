def count_code(str):
  res = 0
  for i in range(len(str)-3):
    res += str[i:i+2] == 'co' and str[i+3] == 'e'
  return res
