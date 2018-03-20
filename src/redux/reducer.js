import * as Constants from '../constants'

const forms = [ 
  {
    name: 'Transit1',
    data: {
      name: 'Bras Basah station',
      description: 'Walk West 300m on Bras Basah road and turn left',
      coordinates: [103.8507941, 1.2969443]
    }
  }, 
  {
    name: 'Transit2',
    data:{
      name: 'SMU bus stop',
      description: 'Walk South 50m on Bencoolen street',
      coordinates: [103.849509, 1.29787479]
    }
  },
  {
    name: 'Transit3',
    data:{
      name: 'Singapore Management University',
      description: 'Walk West on Stamford road for 250m',
      coordinates: [103.8489246, 1.2972822]
    }
  },
  {
    name: 'Destination',
    data: {
      name: 'XYZ Technologies',
      description: '',
      coordinates: [103.849271, 1.29675123]
    }
  }
]

const initialState: State = {
  forms
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.CHANGE:
      let newForms = new Array();
      for (let index = 0; index < state.forms.length; index++) {
        newForms.push(state.forms[index]);
        if (index === action.index) {
          if (action.field in Constants.COORDINATE_KEY_MAP) {
            let coordinates = newForms[index].data.coordinates;
            let coordinateKey = Constants.COORDINATE_KEY_MAP[action.field];
            coordinates[coordinateKey] = parseFloat(action.value);
            newForms[index].data.coordinates = coordinates
          } else {
            newForms[index].data[action.field] = action.value;
          }
        }
      }
      console.log(newForms);
      return Object.assign({}, {
        forms: newForms
      });
    default:
      return state;
  }
}

export { reducer, initialState };
