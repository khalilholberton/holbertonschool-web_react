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
const studentList: Student[] = [student1, student2];

let tableHtml: string = `<table>
<tr>
  <th>First name</th>
  <th>Location</th>
</tr>
`;
studentList.forEach((student) => {
  tableHtml += `<tr>
        <td>${student.firstName}</td>
        <td>${student.location}</td>
    </tr>`;
});

tableHtml += "</table>";
document.write(tableHtml);
