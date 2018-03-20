import { store } from './store'
import * as Constants from '../constants'

export function setActiveOption(value, name) {
  console.log(name);
  const position = name.split('-')[0];
  const field = name.split('-')[1];
  const index = Constants.NAME_KEY_MAP[position];
  store.dispatch({
    type: Constants.CHANGE,
    value: value,
    field: field,
    index: index,
    name: name
  });
}
