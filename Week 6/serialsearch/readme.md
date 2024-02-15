# Serial Search Algorithm Explanation

Serial search, also known as linear search, is a straightforward algorithm used to find a target value within an array by sequentially checking each element.

## Algorithm Steps:

1. **Initialization:**
   - Start with an unsorted or sorted array.
   - Initialize a variable `found` to 0, indicating that the target value has not been found yet.

2. **Search Process:**
   - Begin by iterating through each element of the array, starting from the first element.
   - Compare each element with the target value:
     - If the current element matches the target value, set `found` to 1 and exit the loop.
     - If the current element does not match the target value, continue to the next element.
   - Repeat this process until the target value is found or until the end of the array is reached.

3. **Termination:**
   - If the target value is found during the search process, return its index or any relevant information.
   - If the target value is not found after iterating through the entire array, return a special value (e.g., -1) to indicate that it's not present in the array.

## Visual Representation:

Let's illustrate the serial search process with an example:

Consider the array:
["blue", "green", "yellow", "red", "orange", "purple", "black", "white", "*"]

### Target value: 
`"red"`

### Search Process:
- **Step 1:** Start with the first element ("blue"). Compare it with the target color ("red"). Since "red" doesn't match "blue", move to the next element.
- **Step 2:** Continue this process until the target color is found or until the end of the array is reached.

### Termination:
- If the target color is found (e.g., at index 3), display a message indicating that the color is available.
- If the target color is not found, display a message indicating that the color is not available.

### Javascript code:
```javascript
   function srchColor() {
      let colors = new Array("blue", "green", "yellow", "red", "orange", "purple", "black", "white", "*");
      let index = 0;
      let found = 0;
      let searchKey = prompt("What color shirt do you want?");
      
      while ((found == 0) && (colors[index] != "*")) {
         if (colors[index] == searchKey) {
               found = 1;
               index++;
         } else {
               index++;
         }
      }
      
      if (found == 1) {
         document.getElementById('result').innerHTML = (colors[index-1] + " is available. Your " + colors[index-1] + " shirt will be ordered.");
      } else {
         document.getElementById('result').innerHTML = ("Shirt not available in " + searchKey + ".");
      }
   }
```

## Time and Space Complexity:

- **Time Complexity:** The time complexity of the serial search algorithm is O(n), where n is the number of elements in the array. This is because, in the worst-case scenario, the algorithm may need to iterate through all elements of the array to find the target value.

- **Space Complexity:** The space complexity of the serial search algorithm is O(1), indicating that it uses a constant amount of extra space regardless of the size of the input array. This is because the algorithm does not require any additional data structures or memory allocation beyond a few variables for bookkeeping.