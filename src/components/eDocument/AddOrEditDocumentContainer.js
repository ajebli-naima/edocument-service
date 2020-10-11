import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as documentAction from '../../action/DocumentAction';
import * as patientAction from '../../action/PatientAction';
import * as doctorAction from '../../action/DoctorAction';
import DocumentForm from './DocumentForm'; // eslint-disable-line import/no-named-as-default
import { patientsFormattedForDropdown, doctorsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


export class AddOrEditDocumentContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getDocumentAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });

        this.props.action.getPatientsAction()
            .catch(error => {
                toastr.error(error);
            });

        this.props.action.getDoctorsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const document = {
            id: values.id,
            symptoms :  values.symptoms ,
            diagnosis:  values.diagnosis,
            doctorId :  values.doctorId,
            patientId :  values.patientId,
            allergies : values.allergies  ,
            treatment : values.treatment ,
            medicines : values.medicines,
            weight : values.weight
        };

        this.props.action.saveDocumentAction(document)
            .then(() => {
                toastr.success('Document saved');
                this.props.history.push('/');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                <DocumentForm
                    heading={heading}
                    patients={this.props.patients}
                    doctors={this.props.doctors}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const documentId = ownProps.match.params.id; //from the path '/document/:id'

    if (documentId && state.selectedDocumentReducer.document && documentId === state.selectedDocumentReducer.document.id) {
        return {
            initialValues: state.selectedDocumentReducer.document,
            doctors: doctorsFormattedForDropdown(state.doctorReducer.doctors),
            patients: patientsFormattedForDropdown(state.patientReducer.patients)
        };
    } else {
        return {
            doctors: doctorsFormattedForDropdown(state.doctorReducer.doctors),
            patients: patientsFormattedForDropdown(state.patientReducer.patients)
        };
    }
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...patientAction, ...doctorAction, ...documentAction }, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditDocumentContainer);  