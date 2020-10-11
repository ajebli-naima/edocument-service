import SERVER from './serverUrl';

const SERVER_URL = `${SERVER}/edocuments`;

class DocumentApi {
  static getAllDocuments() {
    return fetch(SERVER_URL).then(response => response.json());
  }

  static saveDocument(document) {
    if (document.id) {
      return fetch(`${SERVER_URL}/${document.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',
        body: JSON.stringify(document)
      }).then(response => response.json());
    } else {
      return fetch(SERVER_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(document)
      }).then(response => response.json());
    }
  }

  static deleteDocument(documentId) {
    return fetch(`${SERVER_URL}/${documentId}`, { method: 'delete' });
  }


  static getDocument(documentId) {
    return fetch(`${SERVER_URL}/${documentId}`).then(response => response.json());
  }

}

export default DocumentApi;
