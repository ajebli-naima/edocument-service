import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


const selectedDocumentReducer = (state = initialState.selectedDocumentReducer, action) => {
    switch(action.type) {

        case ActionType.GET_DOCUMENT_RESPONSE: {
            return {
                ...state,
                document: _.assign(action.document)
            };
        }


        default: { return state; }
    }
};


export default selectedDocumentReducer;