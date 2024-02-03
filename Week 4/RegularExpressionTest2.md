## Real-World Use Cases of Regular Expressions in JavaScript

### 1. **Input Validation:**
Regular expressions are often used to validate user input, such as email addresses, phone numbers, and passwords.

**Example: Email Validation**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("example@email.com")); // true
console.log(emailRegex.test("invalid-email")); // false
```

### 2. **Data Extraction:**
Regular expressions can be used to extract specific patterns or data from strings, such as extracting URLs from text.

**Example: Extracting URLs**
```javascript
const text = "Visit my website at https://example.com or https://example.org";
const urlRegex = /(https?:\/\/[^\s]+)/g;
const urls = text.match(urlRegex);
console.log(urls); // ["https://example.com", "https://example.org"]
```

### 3. **Replacing Text:**
Regular expressions are useful for replacing specific patterns or text within a string.

**Example: Masking Credit Card Numbers**
```javascript
const creditCardNumber = "1234 5678 9012 3456";
const maskedNumber = creditCardNumber.replace(/\d(?=\d{4})/g, "*");
console.log(maskedNumber); // "**** **** **** 3456"
```

### 4. **Parsing Data:**
Regular expressions can help parse structured data formats like CSV or log files.

**Example: Parsing CSV Data**
```javascript
const csvData = "John,Doe,30\nJane,Smith,25\n";
const csvRegex = /([^,\n]+),([^,\n]+),(\d+)/g;
let match;
while ((match = csvRegex.exec(csvData)) !== null) {
  console.log(`Name: ${match[1]} ${match[2]}, Age: ${match[3]}`);
}
// Output:
// Name: John Doe, Age: 30
// Name: Jane Smith, Age: 25
```

### 5. **URL Routing in Web Applications:**
Regular expressions can be used for routing URLs in web applications to determine which page or component to render.

**Example: URL Routing**
```javascript
const routes = [
  { path: /^\/$/, component: "Home" },
  { path: /^\/about$/, component: "About" },
  { path: /^\/blog\/(\d+)$/, component: "BlogPost" },
  // More route definitions...
];

const currentPath = "/blog/123";
const matchedRoute = routes.find(route => route.path.test(currentPath));
console.log(matchedRoute ? matchedRoute.component : "404 Not Found"); // "BlogPost"
```

### 6. **Search and Highlight Text:**
Regular expressions can help search for specific keywords within text and highlight them.

**Example: Search and Highlight Text**
```javascript
const searchText = "The quick brown fox jumps over the lazy dog";
const searchTerm = "fox";
const regex = new RegExp(searchTerm, "gi");
const highlightedText = searchText.replace(regex, match => `<span style="background-color: yellow;">${match}</span>`);
console.log(highlightedText);
// Output: "The quick brown <span style="background-color: yellow;">fox</span> jumps over the lazy dog"
```
