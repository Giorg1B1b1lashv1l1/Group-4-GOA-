def replace_dots(s):
    for char in s:
        if char==".":
            return s.replace("." , "-")

    for char in s:
        if char!=".":
            return s

    if s=="":
        return '""'
        
print(replace_dots(""))