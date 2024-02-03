# Regular Expressions Explained with JavaScript Test Cases

## Literal Characters:
Literal characters match themselves.

### Test Case:
```javascript
const regex = /hello/;
console.log(regex.test("hello")); // true
console.log(regex.test("world")); // false
```

## Metacharacters:
Metacharacters have special meanings in regular expressions.

### Test Case:
```javascript
const regex = /a.c/;
console.log(regex.test("abc")); // true
console.log(regex.test("axc")); // true
console.log(regex.test("a\n")); // false
```

## Character Classes:
Character classes represent sets of characters.

### Test Case:
```javascript
const regex = /[aeiou]/;
console.log(regex.test("hello")); // true
console.log(regex.test("world")); // false
```

## Quantifiers:
Quantifiers specify how many occurrences of the preceding element are allowed to match.

### Test Case:
```javascript
const regex = /go*/;
console.log(regex.test("g")); // true
console.log(regex.test("go")); // true
console.log(regex.test("goo")); // true
console.log(regex.test("hello")); // false
```

## Anchors:
Anchors specify positions in the string.

### Test Case:
```javascript
const regex = /^hello$/;
console.log(regex.test("hello")); // true
console.log(regex.test("world")); // false
```

## Groups and Capturing:
Parentheses are used to group parts of a regular expression and capture the matched text for later use.

### Test Case:
```javascript
const regex = /(\d{2})-(\d{2})-(\d{4})/;
const match = "25-12-2023".match(regex);
console.log(match[0]); // "25-12-2023"
console.log(match[1]); // "25"
console.log(match[2]); // "12"
console.log(match[3]); // "2023"
```

## Modifiers:
Modifiers change the behavior of the regex.

### Test Case:
```javascript
const regex = /hello/i;
console.log(regex.test("Hello")); // true
console.log(regex.test("HELLO")); // true
console.log(regex.test("world")); // false
```

## Escaping:
Backslash is used to escape metacharacters if you want to match them literally.

### Test Case:
```javascript
const regex = /a\./;
console.log(regex.test("a.")); // true
console.log(regex.test("ax")); // false
```

## Greedy vs. Non-Greedy Matching:
Quantifiers are greedy by default.

### Test Case:
```javascript
const regex = /".*"/;
console.log(regex.test('"hello" world')); // true
console.log(regex.test('"hello" "world"')); // true
```

## Lookaheads and Lookbehinds:
Lookaheads and lookbehinds assert patterns without consuming characters.

### Test Case:
```javascript
const regex = /hello(?= world)/;
console.log(regex.test("hello")); // false
console.log(regex.test("hello world")); // true
```

## Boundary Matchers:
Boundary matchers match positions rather than characters.

### Test Case:
```javascript
const regex = /\bhello\b/;
console.log(regex.test("hello")); // true
console.log(regex.test("hello world")); // true
console.log(regex.test("say hello")); // false
```

## Unicode and Multibyte Characters:
Regex engines often support Unicode characters.

### Test Case:
```javascript
const regex = /[\u4E00-\u9FA5]/; // Chinese characters range
console.log(regex.test("你好")); // true
console.log(regex.test("hello")); // false
```