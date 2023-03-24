def round_sum(a, b, c):
  def round10(num):
    return num//10*10 + (num%10 >= 5)*10
  return sum(round10(i) for i in (a, b, c))
