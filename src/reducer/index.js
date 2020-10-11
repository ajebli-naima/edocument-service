import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import documentsReducer from './documentsReducer';
import selectedDocumentReducer from './selectedDocumentReducer';
import doctorReducer from './doctorReducer';
import patientReducer from './patientReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    documentsReducer,
    selectedDocumentReducer,
    doctorReducer,
    patientReducer,
    apiReducer,
    form: formReducer    
});


