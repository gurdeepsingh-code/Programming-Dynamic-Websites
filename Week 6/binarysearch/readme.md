# Binary Search Algorithm Explanation

Binary search is a divide-and-conquer algorithm used to efficiently locate a target value within a sorted array.

## Algorithm Steps:

1. **Initialization:**
   - Start with a sorted array.
   - Set two pointers, `low` and `high`, to the first and last indices of the array, respectively.

2. **Search Process:**
   - Calculate the middle index of the array: `mid = Math.floor((low + high) / 2)`.
   - Compare the target value with the element at the middle index:
     - If the target matches the middle element, the search is successful, and the algorithm returns the index of the middle element.
     - If the target is less than the middle element, update `high` to `mid - 1`, narrowing down the search to the lower half of the array.
     - If the target is greater than the middle element, update `low` to `mid + 1`, narrowing down the search to the upper half of the array.
   - Repeat this process until the target value is found or until `low` is greater than `high`, indicating that the target value is not in the array.

3. **Termination:**
   - If the target value is found during the search process, return its index.
   - If the target value is not found, return a special value (e.g., -1) to indicate that it's not in the array.

## Visual Representation:

Let's illustrate the binary search process with an example:

Consider the sorted array:
[3, 5, 8, 12, 16, 18, 21, 25, 27, 30]

### Target value: 
`18`

### Initial State:
- `low` = 0 (index of the first element)
- `high` = 9 (index of the last element)
- `mid` = 4 (index of the middle element)

### Search Process:
- **Step 1:** Compare `array[mid]` (16) with the target (18). Since 18 > 16, update `low` to `mid + 1`.
- **Step 2:** Calculate new `mid`: `mid = Math.floor((low + high) / 2)`. New `mid` = 7 (index of 25).
- **Step 3:** Compare `array[mid]` (25) with the target (18). Since 18 < 25, update `high` to `mid - 1`.
- **Step 4:** Calculate new `mid`: `mid = Math.floor((low + high) / 2)`. New `mid` = 5 (index of 18).
- **Step 5:** Compare `array[mid]` (18) with the target (18). The target is found.

### Termination:
- Return index 5 (index of 18).

### Javascript code:
```javascript
   let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack", "Kelly", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Ryan", "Sophia", "Tyler"];
   let emails = ["alice@example.com", "bob@example.com", "charlie@example.com", "david@example.com", "emma@example.com", "frank@example.com", "grace@example.com", "henry@example.com", "ivy@example.com", "jack@example.com", "kelly@example.com", "liam@example.com", "mia@example.com", "noah@example.com", "olivia@example.com", "peter@example.com", "quinn@example.com", "ryan@example.com", "sophia@example.com", "tyler@example.com"];
   let GPAs = [3.8, 3.5, 3.9, 3.2, 3.7, 3.6, 4.0, 3.4, 3.9, 3.3, 3.8, 3.6, 3.9, 3.7, 3.5, 3.2, 3.6, 3.9, 3.8, 3.7];

   function binarySearch() {
      let low = 0;
      let N = names.length;
      let high = N - 1;
      let found = false;
      let key = prompt("Who are you looking for?");
      let resultContainer = document.getElementById('result');

      while (low <= high) {
         let mid = Math.floor((low + high) / 2);
         if (key === names[mid]) {
               found = true;
               resultContainer.innerHTML = "Student: " + names[mid] + "<br>" + "Email: " + emails[mid] + "<br>" + "GPA: " + GPAs[mid];
               break;
         } else if (key < names[mid]) {
               high = mid - 1;
         } else {
               low = mid + 1;
         }
      }

      if (!found) {
         resultContainer.innerHTML = "Student record not found.";
      }
   }
```

## Time and Space Complexity:

- **Time Complexity:** The time complexity of binary search is O(log n), where n is the number of elements in the array. This is because the algorithm divides the search space in half with each iteration.
  
- **Space Complexity:** The space complexity of binary search is O(1), indicating that it uses a constant amount of extra space regardless of the size of the input array. This is because the algorithm only requires a few variables for bookkeeping, such as `low`, `high`, and `mid`. No additional data structures are used.