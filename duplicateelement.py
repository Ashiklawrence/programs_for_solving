array = [1,2,2,3,4,5,5,6,7,7]
uniquearray = set(array)
count = 0
for i in uniquearray:
    x = array.count(i)
    if x > 1:
        count = count+1
print('Count of duplicate elements',count)