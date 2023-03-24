def make_bricks(small, big, goal):
  goal -= 5*min(big, goal//5)
  return goal <= small