# Abstract Base Class (ABC) with Override Decorator


## Abstract Base Class (ABC)

Abstract Base Classes (ABCs) in Python are a way to define interfaces when other techniques like duck typing are not sufficient.

> Duck typing is a concept related to dynamic typing in programming languages. It means that the type or class of an object is less important than the methods it defines or the way it behaves.

They allow us to create a blueprint for other classes, ensuring that derived classes implement specific methods.

```python
from abc import ABC, abstractmethod
 
class StudentBase(ABC):
	"""Abstract base class for Student"""
	
    @abstractmethod
    def study(self):
        pass
 
    @abstractmethod
    def go_to_school(self):
        ...
```

-   'pass' or '&#x2026;' is used as a placeholder for method bodies in abstract methods.


## Override Decorator

Override decorator is used to **indicate** that <span class="underline">a method is intended to override a method in a base class</span>. This <span class="underline">helps catch errors</span> where the method signature does not match any method in the base class.

In this case, the 'Student' class inherits from 'StudentBase' and provides concrete implementations for the abstract methods 'study' and 'go\_to\_school' with the @override decorator.

```python
from typing import override

class Student(StudentBase):
	""" Subclass implementing abstract methods """

    @override
    def study(self):
        print('studying')

    @override
    def go_to_school(self):
        print('going to school')
```

-   The two methods 'study' and 'go\_to\_school' are implemented in the 'Student' class.
-   They must be implemented; otherwise, instantiating 'Student' would raise a TypeError.


## Usage Example

```python
osic = Student()
osic.study()  # print: studying
osic.go_to_school()  # print: going to school
```

    studying
    going to school


## Full Code

```python

from abc import ABC, abstractmethod
 
class StudentBase(ABC):
	"""Abstract base class for Student"""
	
    @abstractmethod
    def study(self):
        pass
 
    @abstractmethod
    def go_to_school(self):
        ...

from typing import override

class Student(StudentBase):
	""" Subclass implementing abstract methods """

    @override
    def study(self):
        print('studying')

    @override
    def go_to_school(self):
        print('going to school')

osic = Student()
osic.study()  # print: studying
osic.go_to_school()  # print: going to school
	
```


# Error Example


## Missing 'study' Method Implementation

An abstract metod must be implemented in the derived class. If not, attempting to instantiate the derived class will raise a TypeError.

```python
import sys
import traceback

from abc import ABC, abstractmethod
from typing import override

try:
    class StudentBase(ABC):
        @abstractmethod
        def study(self):
            pass

    class Student(StudentBase):
        def play_game(self):  # missing 'study' method
            print("playing a game")

    osic = Student()
except Exception:
    traceback.print_exc(file=sys.stdout)
```

    Traceback (most recent call last):
      File "/tmp/babel-NBPiPC/python-NAkSZ3", line 17, in <module>
        osic = Student()
    TypeError: Can't instantiate abstract class Student without an implementation for abstract method 'study'

-   'study' method is not implemented in the 'Student' class, leading to a TypeError when trying to instantiate it.


# AI explanation


## General

-   **Purpose:** It's like a template for behavior in object-oriented programming (OOP). `=Grok4-Fast=`

-   **Summary:** 

| Feature             | Description                                 |
|------------------- |------------------------------------------- |
| \`ABC\`             | Prevents direct instantiation of base class |
| \`@abstractmethod\` | Enforces implementation in subclasses       |
| \`@override\`       | Validates method overrides (Python ≥ 3.12) |
| \`&#x2026;\`        | Equivalent to \`pass\` (used as a no-op)    |

`=ChatGPT=`


## @abstractmethod

-   A decorator that marks a method as abstract. If a subclass doesn't implement it, you'll get a runtime error when trying to instantiate the subclass. `=Grok4-Fast=`

-   Abstract classes prevent incomplete implementations, promoting consistent interfaces across subclasses. `=Grok4-Fast=`


## @override

-   The @override decorator (Python 3.12+) is a nice addition that helps catch errors if you misspell a method name. `=Claude Sonet 4.5=`

-   It serves a similar purpose to *Java’s @Override* `=Perfelxity=`

-   @override is a nice-to-have for maintainable code. `=Grok4-Fast=`

-   It's **optional** but improves code documentation and catches errors early. `=Grok4-Fast=`

-   This helps prevent mistakes (e.g., typos in method names) and is ignored at runtime but useful for static analysis. `=Grok4-Fast=`

-   If you misspell an overridden method name (e.g., you write studiy()) and mark it with @override, the type checker (like MyPy) will raise an error before runtime, telling you that `no method` named studiy exists in StudentBase. This prevents silent, **hard-to-find bugs** during refactoring. `=Gemini 2.5 Flash=`

-   In **large codebases** or **frameworks** where accidental method mismatches (like typos) can lead to silent broken behavior. `=Perflexity=`


## Other notes

-   **&#x2026; (Ellipsis):** is used instead of pass; both are valid placeholders for **"do nothing."** `=Grok4-Fast=`


# References

-   <https://docs.python.org/3/library/abc.html>
-   <https://peps.python.org/pep-0698/#include-the-name-of-the-ancestor-class-being-overridden>
-   <https://velog.io/@jk01019/python-abc-abc.abstractmethod>
-   <https://medium.com/@changja00/dangling-python-override-438779efc562>
-   <https://xangmin.tistory.com/161>
