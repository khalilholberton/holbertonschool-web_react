import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const myObj = fromJS(object);

  return myObj.getIn(array, undefined);
}
