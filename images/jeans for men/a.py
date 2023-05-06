from glob import glob
import os
s = '<img src="../../images/jeans for men/'
files = glob("*.jpg", recursive=True)
for i in files:
    s = s + i + '">'
    print(s)
    s = '<img src="../../images/jeans for men/'
