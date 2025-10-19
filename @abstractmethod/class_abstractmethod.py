from abc import ABC, abstractmethod
from typing import override

class StudentBase(ABC):
    """Abstract base class for Student"""

    @abstractmethod
    def study(self):
        pass

    @abstractmethod
    def go_to_school(self):
        ...


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
