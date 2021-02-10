interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
export const StudentClass: StudentConstructor = class StudentClass
  implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return `${this.firstName}`;
  }
};
/*
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
*/
