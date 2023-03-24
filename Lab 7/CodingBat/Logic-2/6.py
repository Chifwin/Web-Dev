def close_far(a, b, c):
  def pos(a, b, c):
    return abs(a-b) <= 1 and abs(a-c) > 1 and abs(b-c) > 1
  return pos(a, b, c) ^ pos(a, c, b)
