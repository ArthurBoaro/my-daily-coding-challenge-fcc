def get_longest_substring(s):

    longest_sub_s = ""

    for i in range(len(s)):
        for j in range(i+1, len(s)+1):
            sub_s = s[i:j]
            if s.find(sub_s, i + 1) != -1:
                if len(sub_s) > len(longest_sub_s):
                    longest_sub_s = sub_s

    return longest_sub_s