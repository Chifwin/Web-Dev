# https://www.hackerrank.com/challenges/the-minion-game/problem
def minion_game(string):
    l, r = 0,0
    for i in range(len(string)):
        if string[i] in "AEIOU":
            r += len(string) - i
        else:
            l += len(string) - i
    if r == l:
        print("Draw")
    elif r > l:
        print("Kevin", r)
    else:
        print("Stuart", l)

if __name__ == '__main__':
    s = input()
    minion_game(s)