import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as documentAction from '../../action/DocumentAction';
import DocumentList from './DocumentList';


export class DocumentListContainer extends React.Component {

    constructor() {
        super();

        this.state = {selectedDocumentId: undefined};

        this.handleAddDocument= this.handleAddDocument.bind(this);
        this.handleEditDocument= this.handleEditDocument.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    componentDidMount() {
        this.props.action.getDocumentsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleAddDocument() {
        this.props.history.push('/edocuments');
    }



    handleEditDocument() {
        const selectedDocumentId = this.state.selectedDocumentId;

        if (selectedDocumentId) {
            this.setState({selectedDocumentId: undefined});            
            this.props.history.push(`/edocuments/${selectedDocumentId}`);
        }        
    }



    handleDelete() {
        const selectedDocumentId = this.state.selectedDocumentId;

        if (selectedDocumentId) {
            this.setState({selectedDocumentId: undefined});                        
            this.props.action.deleteDocumentAction(selectedDocumentId) 
            .then(() => {
                toastr.info('Document deleted'); 
            }).catch(error => {
                    toastr.error(error);
                });
        }
    }



    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedDocumentId: row.id});
        }
    }



    render() {
        const { documents } = this.props;

        if (!documents) {
            return (
                <div>Loading...</div>
            );
        }

        return (
         
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Documents list</h1>                        
                    </div>
                </div>
                <tr class="table-light">...</tr>
                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                        <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleAddDocument}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>
                            
                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleEditDocument}                                
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>                                

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>
                        </div>
                    </div>
                </div>
                <tr class="table-light">...</tr>
                <div className="row">
                    <div className="col">
                        <DocumentList documents={documents} handleRowSelect={this.handleRowSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    documents: state.documentsReducer.documents
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(documentAction, dispatch)

});



export default connect(mapStateToProps, mapDispatchToProps)(DocumentListContainer);
