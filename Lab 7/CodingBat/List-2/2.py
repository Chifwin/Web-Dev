def big_diff(nums):
  mn, mx = nums[0], nums[0]
  for i in nums:
    mn = min(mn, i)
    mx = max(mx, i)
  return mx - mn