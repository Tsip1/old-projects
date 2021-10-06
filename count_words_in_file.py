from count_words import word_count


def count_words_in_file(file_name):
    count = dict()
    fp = open(file_name, "r")
    for line in fp:
        count.update(word_count(line))

    return count


def main():
    print("=====start here=====")
    print(count_words_in_file("/home/atm/PycharmProjects/tic-tac-toe/txt.txt"))
    print("=====end here=====")


main()


