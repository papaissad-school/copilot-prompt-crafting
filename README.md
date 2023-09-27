![copilot](docs/images/copilot.png)
# Copilot Prompt Crafting

An exercise Repo for Copilot Prompt-Crafting, to complement the Copilot Fundamentals Training (L100)

## Learning Objectives

Practice some Prompt Crafting with GitHub Copilot Chat.

---

## Prerequisites

- 

---

## DEMO 1

### Zero-shot 

```
Write me unit tests for all the operations in my calculator.js file
```

### One-Shot
 ```
 Write me unit tests for all the operations in my calculator.js file
Use the following example: test(‘adds 1 + 2 to equal 3’, () => ( expect(calculate(1, 2 ‘+’)).toBe(3); });
```
---

## DEMO 2 

### Zero-shot 
```
Can you create an HTML calculator for me?
```

### One-Shot

```
Can you create an HTML calculator for me? Use the following example:  
<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
  </head>
<body> 
```

---

## DEMO 3

### Zero-shot 

```
Can you write me the code for a snake game?
```

### One-Shot

```
Can you write me the code for a snake game? 
Example: Ensure that there is a leaderboard mechanic
```
---

## DEMO 4 - [Leetcode](https://leetcode.com) 

- Login to [Leetcode](leetcode.com) and pick one of the exercises
- Copy the full exercise description in to GitHub Copilot Chat, with the request for a specific language.
- Submit the suggested code to [Leetcode](leetcode.com), let's see if it succeeds and with what score.
