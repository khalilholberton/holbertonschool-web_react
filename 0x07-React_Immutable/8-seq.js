import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const filST = Seq(object)
    .filter((grade) => grade.score > 70)
    .map((student) => {
      const obST = {
        ...student,
        firstName: capitalize(student.firstName),
        lastName: capitalize(student.lastName),
      };
      return obST;
    });

  filST = filST.toJS();

  console.log(filST);
}
