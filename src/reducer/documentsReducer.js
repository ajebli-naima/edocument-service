import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const documentsReducer = (state = initialState.documentsReducer, action) => {
    switch(action.type) {
        case ActionType.GET_DOCUMENTS_RESPONSE: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.courses into a new array.
            // The return object is a copy of state and overwrites the state.courses with a fresh clone of action.courses
            return {
                ...state, 
                documents: _.assign(action.documents)
            };
        }


        default: { return state; }
    }
};



export default documentsReducer;