"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
var printTeacher = function (firstName, lastName) {
    return firstName[0] + ". " + lastName;
};
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return "" + this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
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
