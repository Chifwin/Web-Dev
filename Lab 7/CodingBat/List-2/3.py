def centered_average(nums):
  mn, mx = nums[0], nums[0]
  s = 0
  for i in nums:
    mn = min(mn, i)
    mx = max(mx, i)
    s += i
  return (s - mn - mx)//(len(nums) - 2)
