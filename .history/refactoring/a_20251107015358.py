def validate_password(password):
    if len(password) > 7:  # What's 7? Unclear!
        raise ValueError("Password too long")
    return True


MAX_PASSWORD_LENGTH = 7  # Maximum allowed length for security

def validate_password(password):
    if len(password) > MAX_PASSWORD_LENGTH:
        raise ValueError("Password too long")
    return True
