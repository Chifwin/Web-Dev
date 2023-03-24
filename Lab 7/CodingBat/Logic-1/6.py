def alarm_clock(day, vacation):
  if abs(day - 3) == 3:
    if vacation:
      return "off"
  elif not vacation:
    return "7:00"
  return "10:00"
