from enum import Enum


class Category(Enum):
    A = 1
    B = 2
    C = 3


def calculate_tax(category, income):
    if category == Category.A:
        discount = 10
    elif category == Category.B:
        discount = 5
    else:
        discount = 0
    return income * (100 - discount) / 100

