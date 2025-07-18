interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kelvin",
  lastName: "Wanye",
  age: 18,
  location: "Utah",
};

const student2: Student = {
  firstName: "Rose",
  lastName: "Doe",
  age: 23,
  location: "New york",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

table.border = "1";
table.style.borderCollapse = "collapse";
table.style.width = "50%";

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  nameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);