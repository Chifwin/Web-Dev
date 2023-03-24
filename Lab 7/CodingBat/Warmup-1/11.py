def front_back(str):
  if len(str) < 2:
    return str
  return str[-1] + str[1:-1] + str[0]