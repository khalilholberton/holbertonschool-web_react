var student1 = {
    firstName: "lionel",
    lastName: "messi",
    age: 33,
    location: "Barcelona"
};
var student2 = {
    firstName: "amine",
    lastName: "benamor",
    age: 44,
    location: "Tunis"
};
var studentList = [student1, student2];
var table = document.createElement("table");
document.body.appendChild(table);
var thead = document.createElement("thead");
thead.innerHTML = "<tr><th>firstName</th><th>location</th></tr>";
table.appendChild(thead);
var tbody = document.createElement("tbody");
table.appendChild(tbody);
for (var x = 0; x < studentList.length; x++) {
    var row = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    th1.innerHTML = studentList[x].firstName;
    th2.innerHTML = studentList[x].location;
    row.appendChild(th1);
    row.appendChild(th2);
    tbody.appendChild(row);
}
