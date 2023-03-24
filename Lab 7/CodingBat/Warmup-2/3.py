def string_bits(str):
  res = ""
  for i in range(0, len(str), 2):
    res += str[i]
  return res
