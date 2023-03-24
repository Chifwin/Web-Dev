def combo_string(a, b):
  short = a
  long = b
  if len(short) > len(long):
    short, long = long, short
  return short+long+short
