def sum67(nums):
  s = 0
  flag = False
  for i in nums:
    if flag:
      if i == 7:
        flag = False
    else:
      if i == 6:
        flag = True
      else:
        s += i
  return s
