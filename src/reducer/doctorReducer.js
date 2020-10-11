import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const doctorReducer = (state = initialState.doctorReducer, action) => {
    switch(action.type) {
        case ActionType.GET_DOCTORS_RESPONSE:
            return {...state, doctors: Object.assign([], action.doctors)};

        default: return state;
    }
};


export default doctorReducer;