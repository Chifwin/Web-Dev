# https://www.hackerrank.com/challenges/most-commons/problem
if __name__ == '__main__':
    s = input()
    d = dict()
    for i in s:
        d[i] = d.get(i, 0) + 1
    print("\n".join(f"{i} {cnt}" for i, cnt in sorted(d.items(), key=lambda x: (-x[1], x[0]))[:3]))