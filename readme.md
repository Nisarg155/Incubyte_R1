
# String Calculator

---

## Completed Tasks

### Task 1: Return 0 for Empty String
- Input: `""`  
- Output: `0`

### Task 2: Return Number for Single Input
- Input: `"5"`  
- Output: `5`

### Task 3: Return Sum of Two Numbers
- Input: `"1,2"`  
- Output: `3`

### Task 4: Support New Line Between Numbers
- Input: `"1\n2,3"`  
- Output: `6`

### Task 5: Throw Exception on Negative Numbers
- Input: `"-1"`  
- Throws: `negatives not allowed : -1`

### Task 6: Throw Exception on Multiple Negative Numbers, Show All
- Input: `"-1,-2,-3"`  
- Throws: `negatives not allowed : -1,-2,-3`

### Task 9: Ignore Numbers Greater Than 1000
- Input: `"2,1001"`  
- Output: `2`  
- Logic: Any number strictly greater than 1000 is ignored in the sum.

---

## Test Framework

- Testing Library: Jest
- To run tests:
  ```bash
  npm install
  npm run test
---
## Development Approach

This project follows the Test-Driven Development (TDD) methodology using the classic:

### Red → Green → Refactor Cycle

1. Red: Write a failing test to define the desired behavior.
2. Green: Write the minimal amount of code necessary to pass the test.
3. Refactor: Clean up the code for readability and efficiency, while ensuring all tests still pass.


---

## Project Structure

```
├── src/
│   └── calculator.js          # StringCalculator implementation
├── __test__/
│   └── calculator.spec.js     # Jest test cases
├── package.json
└── readme.md
```

---

