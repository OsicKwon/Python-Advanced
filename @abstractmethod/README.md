Abstract Base Class (abc)


# Code


## Abstract Class

```python
from abc import ABC, abstractmethod
 
class StudentBase(ABC):
    @abstractmethod
    def study(self):
        pass
 
    @abstractmethod
    def go_to_school(self):
        ...
```

-   'pass' or '&#x2026;' are used as placeholders for method bodies in abstract methods.


## Concrete Class

```python
class Student(StudentBase):
    def study(self):
        print('studying')

    def go_to_school(self):
        print('going to school')
```


## Usage Example

```python
james = Student()
james.study()
james.go_to_school()
```

    studying
    going to school


## Full Code

```python

from abc import ABC, abstractmethod
 
class StudentBase(ABC):
    @abstractmethod
    def study(self):
        pass
 
    @abstractmethod
    def go_to_school(self):
        ...

class Student(StudentBase):
    def study(self):
        print('studying')

    def go_to_school(self):
        print('going to school')

james = Student()
james.study()
james.go_to_school()
	
```

    studying
    going to school


# AI advice
