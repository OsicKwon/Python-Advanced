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
