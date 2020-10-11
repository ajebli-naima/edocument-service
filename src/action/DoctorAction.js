import * as ActionType from './ActionType';
import DoctorApi from '../api/DoctorApi';
import { ApiCallBeginAction } from './ApiAction';


export const getDoctorsResponse = doctors => ({
    type: ActionType.GET_DOCTORS_RESPONSE,
    doctors
});



export function getDoctorsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return DoctorApi.getAllDoctors()
            .then(doctors => {
                dispatch(getDoctorsResponse(doctors));
            }).catch(error => {
                throw error;
            });
    };
}
