```javascript
<script>
    let myArray = [16, 1, 8, 24, 41, 7, 22];

    function mySort(x, y) {
        // return x - y; // sort in ascending order
        return y - x; // sort in descending order
    }

    document.write(myArray.sort(mySort));
    document.write('<br>');
</script>
```

1. **`let myArray = [16, 1, 8, 24, 41, 7, 22];`**: This line initializes an array named `myArray` with some numerical values.

2. **`function mySort(x, y) { ... }`**: This defines a custom sorting function named `mySort`. This function takes two parameters `x` and `y`, which represent elements of the array being sorted. The purpose of this function is to determine the sorting order of `x` and `y`. 

3. **Sorting logic**:
   - The line `return y - x;` inside `mySort` sorts the array in descending order. This means that larger elements will appear before smaller ones after sorting.
   - If you uncomment the line `// return x - y;`, it will sort the array in ascending order, meaning smaller elements will appear before larger ones.

4. **`document.write(myArray.sort(mySort));`**: This line sorts the `myArray` using the custom sorting function `mySort` and then writes the sorted array to the document. The `sort()` method sorts the elements of the array in place and returns the sorted array.

5. **`document.write('<br>');`**: This line writes a line break (`<br>`) to the document, ensuring that the sorted array is displayed on a new line.

In summary, this code sorts the `myArray` array in descending order and displays the sorted array on the webpage. You can customize the sorting order by modifying the logic inside the `mySort` function.