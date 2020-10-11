import SERVER from './serverUrl';
const SERVER_URL = `${SERVER}/doctors`;

class DoctorApi {
  static getAllDoctors() {
    return fetch(SERVER_URL 
    ).then(response => response.json());
  }
}

export default DoctorApi;
