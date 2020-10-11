import * as ActionType from './ActionType';
import PatientApi from '../api/PatientApi';
import { ApiCallBeginAction } from './ApiAction';


export const getPatientsResponse = patients => ({
    type: ActionType.GET_PATIENTS_RESPONSE,
    patients
});



export function getPatientsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return PatientApi.getAllPatients()
            .then(patients => {
                dispatch(getPatientsResponse(patients));
            }).catch(error => {
                throw error;
            });
    };
}
