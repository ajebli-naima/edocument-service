import SERVER from './serverUrl';
const SERVER_URL = `${SERVER}/patients`;

class PatientApi {
  static getAllPatients() {
    return fetch(SERVER_URL).then(response => response.json());
  }
}

export default PatientApi;
