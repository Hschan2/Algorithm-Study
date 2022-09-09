import re

test = ""

test = test.lower()

test = re.sub('[=+,#/\?:^$@*\"※~&%ㆍ!』\\‘|\(\)\[\]\<\>`\'…》]', '', test)

while '..' in test:
    test = test.replace('..', '.')

if test:
    if test[0] == '.':
        test = test[1:]
    if test[-1] == '.':
        test = test[:-1]
else:
    test = 'a'

if len(test) > 15:
    test = test[0:15]

while len(test) < 3:
    test += test[-1]

if test:
    if test[0] == '.':
        test = test[1:]
    if test[-1] == '.':
        test = test[:-1]

print(test)