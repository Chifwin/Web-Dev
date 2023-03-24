# https://www.hackerrank.com/challenges/merge-the-tools/problem
def merge_the_tools(string, k):
    for i in range(len(string)//k):
        st = set()
        res = ''
        for c in string[i*k:i*k+k]:
            if c not in st:
                st.add(c)
                res += c
        print(res)

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)