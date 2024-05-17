array1 = [1,3,2,4,5]
array2 = [11,13,12,14]

for i in array2:
    array1.append(i)
print('Merged array:',array1)
for i in range(len(array1)):
    for j in range(i+1,len(array1)):
        if array1[i] < array1[j]:
            array1[i],array1[j] = array1[j],array1[i]
print("Sorted array:",array1)

