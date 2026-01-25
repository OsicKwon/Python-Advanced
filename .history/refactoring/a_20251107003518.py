def validate_password(password):
    if len(password) > 7:  # What's 7? Unclear!
        raise ValueError("Password too long")
    return True