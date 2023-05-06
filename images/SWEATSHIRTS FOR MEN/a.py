from glob import glob
import pyperclip
import time
import os
s = '<img src="../../images/SWEATSHIRTS FOR MEN/'
files = glob("*.jpg", recursive=True)
for i in files:
    s = s + i + '">'
    print(s)
    pyperclip.copy(s)
    time.sleep(5)
    s = '<img src="../../images/SWEATSHIRTS FOR MEN/'
