from glob import glob
import pyperclip
import time
import os
s = '<img src="../../images/men trackpants/'
files = glob("*.jpg", recursive=True)
for i in files:
    s = s + i + '">'
    print(s)
    pyperclip.copy(s)
    time.sleep(10)
    s =  '<img src="../../images/men trackpants/'
