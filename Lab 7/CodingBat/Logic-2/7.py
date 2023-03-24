def make_chocolate(small, big, goal):
  goal -= 5*min(goal//5, big)
  if goal > small:
    return -1
  return min(goal, small)