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

## Good Unit Tests

- Independent of other tests
- Run fast (milliseconds; not seconds)
= Tests ONE thing, one unit of functionality
= Don't have unnecessary assertions