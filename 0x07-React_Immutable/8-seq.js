import { Seq } from 'immutable';

function capitalLetter(string) {
  return string.trim().replace(/^\w/, (c) => c.toUpperCase());
}

export default function printBestStudents(object) {
  let seq = Seq(object);
  console.log(seq
    .filter((st) => st.score > 70)
    .map((st) => {
      const { firstName, lastName } = st;
      return {
        ...st,
        firstName: capitalLetter(firstName),
        lastName: capitalLetter(lastName),
      };
    })
    .toJS());
}
