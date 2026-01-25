from abc import ABC, abstractmethod
 
class StudentBase(ABC):
    @abstractmethod
    def study(self):
        pass
 
    @abstractmethod
    def go_to_school(self):
        ...

from typing import override
	
class Student(StudentBase):
    @override
    def study(self):
        print('studying')

    @override
    def go_to_school(self):
        print('going to school')

james = Student()
james.study()
james.go_to_school()
