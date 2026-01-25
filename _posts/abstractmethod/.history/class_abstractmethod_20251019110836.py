from abc import ABC, abstractmethod
from typing import override

class StudentBase(ABC):
    @abstractmethod
    def study(self):
        pass

    @abstractmethod
    def go_to_school(self):
        ...


class Student(StudentBase):
    @override
    def study(self):
        print('studying')

    @override
    def go_to_school(self):
        print('going to school')

osic = Student()
osic.study()
osic.go_to_school()
