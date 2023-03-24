def sum13(nums):
  s = 0
  for i in range(len(nums)):
    if nums[i] == 13 or (i and nums[i-1] == 13):
      continue
    s += nums[i]
  return s