
from abc import ABC
from typing import override


class StudentBase(ABC):
    """Abstract base class for Student."""

    def study(self):
        """Study method."""
        pass


class Student(StudentBase):
    """Subclass implementing abstract methods."""

    @override
    def studie(self):
        """Wrongly overridden method."""
        print("studying")


osic = Student()
osic.study()  # print: studying
osic.go_to_school()  # print: going to school
