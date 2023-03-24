def no_teen_sum(a, b, c):
  def fix_teen(n):
    if abs(n - 16) <= 3 and n != 15 and n != 16:
      return 0
    return n
  return sum(fix_teen(i) for i in (a, b, c))
