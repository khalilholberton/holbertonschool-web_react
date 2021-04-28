import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  const listOne = List(page1);
  const listTwo = List(page2);

  return listOne.concat(listTwo);
}

export function mergeElements(page1, page2) {
  const mapOne = Map(page1);
  const mapTwo = Map(page2);

  return mapOne.merge(mapTwo);
}
