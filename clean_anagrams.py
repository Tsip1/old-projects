from collections import defaultdict

def clean_anagram(sentence):
    anagrams = defaultdict(list)
    for word in sentence:
        print(sentence)
        key = "".join(sorted(word))
        print(key)
        if len(anagrams[key]) >= 1:
            sentence.remove(word)
        else:
            anagrams[key].append(key)

    for key, anagram in anagrams.items():
        print(key, anagram)


def main():
    words_list = ["you", "ouy", "yuo", "oyu", "uyo", "uoy"]
    print(words_list, '\n')
    clean_anagram(words_list)
    print(words_list)

main()
