# refactoring

![img](./img/abstract_override.png "This is a caption")


## extract magic numbers & strings

```python
def validate_password(password):
    if len(password) > 7:  # What's 7? Unclear!
        raise ValueError("Password too long")
    return True
```

```python
MAX_PASSWORD_LENGTH = 7  # Maximum allowed length for security

def validate_password(password):
    if len(password) > MAX_PASSWORD_LENGTH:
        raise ValueError("Password too long")
    return True
```

    >>>


# References
