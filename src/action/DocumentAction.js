import * as ActionType from './ActionType';
import DocumentApi from '../api/DocumentApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



export const getDocumentsResponse = documents => ({
    type: ActionType.GET_DOCUMENTS_RESPONSE,
    documents
});



export function getDocumentsAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return DocumentApi.getAllDocuments()
            .then(documents => {
                dispatch(getDocumentsResponse(documents));
            }).catch(error => {
                throw error;
            });
    };
}



export const addNewDocumentResponse = () => ({
    type: ActionType.ADD_NEW_DOCUMENT_RESPONSE
});



export const updateExistingDocumentResponse = () => ({
    type: ActionType.UPDATE_EXISTING_DOCUMENT_RESPONSE
});



export function saveDocumentAction(documentBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        return DocumentApi.saveDocument(documentBeingAddedOrEdited)
            .then(() => {
                if (documentBeingAddedOrEdited.id) {
                    dispatch(updateExistingDocumentResponse());
                } else {
                    dispatch(addNewDocumentResponse());
                }
            }).then(() => {
                dispatch(getDocumentsAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}



export const getDocumentResponse = documentFound => ({
    type: ActionType.GET_DOCUMENT_RESPONSE,
    document: documentFound
});



export function getDocumentAction(documentId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return DocumentApi.getDocument(documentId)
            .then(document => {
                dispatch(getDocumentResponse(document));
            }).catch(error => {
                throw error;
            });
    };
}



export const deleteDocumentResponse = () => ({
    type: ActionType.DELETE_DOCUMENT_RESPONSE
});



export function deleteDocumentAction(documentId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return DocumentApi.deleteDocument(documentId)
            .then(() => {
                dispatch(deleteDocumentResponse());
            }).then(() => {
                dispatch(getDocumentsAction());
            }).catch(error => {
                throw error;
            });
    };
}