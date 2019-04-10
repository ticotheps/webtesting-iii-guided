# Testing III Notes

## What to Test?

- Happy Path
    - Does it render without failing?
    - Does it render the expected output?
    - Does it render with the correct values based on props/state?
    - Does it handle events correctly?
    - What about invalid input?

- Edge/Corner Cases
    -Does it do the right thing when passed an invalid input?
    -Group all similar assertions together
        -Object/string/array/undefined? ===> is not a number

## Good Unit Tests

- They are independent of other tests
- They run FAST (milliseconds; not seconds)
= They test ONE thing/assumption (or one unit of functionality)
    = Don't have unnecessary assertions