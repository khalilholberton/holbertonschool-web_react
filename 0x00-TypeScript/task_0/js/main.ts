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

const table = document.createElement("table") as HTMLTableElement;

document.body.appendChild(table);

const thead: HTMLTableSectionElement = document.createElement("thead");
thead.innerHTML = "<tr><th>firstName</th><th>location</th></tr>";
table.appendChild(thead);
const tbody: HTMLTableSectionElement = document.createElement("tbody");
table.appendChild(tbody);
for (let x: number = 0; x < studentList.length; x++) {
  const row: HTMLTableRowElement = document.createElement("tr");
  const th1: HTMLTableCellElement = document.createElement("th");
  const th2: HTMLTableCellElement = document.createElement("th");
  th1.innerHTML = studentList[x].firstName;
  th2.innerHTML = studentList[x].location;
  row.appendChild(th1);
  row.appendChild(th2);

  tbody.appendChild(row);
}
