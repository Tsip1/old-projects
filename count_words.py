def word_count(sentence):
    punctuation_marks = '''!()-[]{};:'",<>./?@#$%^&*_~'''
    for i in sentence.lower():
        if i in punctuation_marks:
            sentence = sentence.replace(i, "")

    counts = dict()
    words = sentence.split()

    for word in words:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1

    return counts


def main():
    sentence_to_send = 'I hope that? a study of very long sentences will arm you with strategies ' \
                       'that are almost as diverse as the sentences themselves, ' \
                       'such as: starting each clause with the same word, tilting with dependent clauses ' \
                       'toward a revelation at the end, padding with parenthetical, ' \
                       'showing great latitude toward standard punctuation, ' \
                       'rabbit-trailing away from the initial subject' \
                       'encapsulating an entire life, and lastly, ' \
                       'as this sentence is, celebrating the list. ' \
                       'that that that that that that'
    print(word_count(sentence_to_send))
