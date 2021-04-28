import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const mapOne = Map(page1);
  const mapTwo = Map(page2);

  return (mapOne.mergeDeep(mapTwo));
}
