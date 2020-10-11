//This is to ensure that we can see the entirety of the store

export default {
    doctorReducer: {
        doctors: []
    },
    patientReducer: {
        patients: []
    },
    documentsReducer: {
        documents: []
    },

    selectedDocumentReducer: {
        document: undefined
    },

    apiReducer: {
        apiCallsInProgress: 0
    }

};
