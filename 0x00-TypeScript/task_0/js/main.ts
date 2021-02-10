interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "lionel",
  lastName: "messi",
  age: 33,
  location: "Barcelona",
};
const student2: Student = {
  firstName: "amine",
  lastName: "benamor",
  age: 44,
  location: "Tunis",
};
const studentList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
studentList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const fName = document.createElement("td");
  const loc = document.createElement("td");
  fName.textContent = student.firstName;
  loc.textContent = student.location;
  row.appendChild(fName);
  row.appendChild(loc);
});
document.body.appendChild(table);
