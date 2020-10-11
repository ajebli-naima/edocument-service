import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const patientReducer = (state = initialState.patientReducer, action) => {
    switch(action.type) {
        case ActionType.GET_PATIENTS_RESPONSE:
            return {...state, patients: Object.assign([], action.patients)};

        default: return state;
    }
};


export default patientReducer;