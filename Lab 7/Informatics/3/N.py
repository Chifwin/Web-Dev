pos, neg, zer = 0, 0, 0
for i in (int(input()) for i in range(int(input()))):
    if i > 0:
        pos += 1
    elif i < 0:
        neg += 1
    else:
        zer += 1
print(zer, pos, neg)