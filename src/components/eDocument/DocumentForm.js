import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const DocumentForm = ({ handleSubmit, pristine, reset, submitting, heading, doctors, patients, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>
            
            <Field
                name="patientId"
                label="Enter Patient Id"
                placeholder="Enter the Patient unique ID"
                options={patients}
                component={SelectInput}
            />
            <Field
                name="doctorId"
                label="Enter doctor Id"
                placeholder="Enter the doctor unique ID"
                options={doctors}
                component={SelectInput}
            />

            <Field
                type="text"
                name="symptoms"
                label="Symptoms"
                placeholder="Symptoms of the Patient"
                component={FieldInput}
            />

            <Field
                type="text"
                name="diagnosis"
                label="Diagnosis"
                placeholder="Diagnosis of the Patient"
                component={FieldInput}
            />
            <Field
                type="text"
                name="allergies"
                label="Allergies"
                placeholder="Allergies of the Patient"
                component={FieldInput}
            />
            <Field
                type="text"
                name="treatment"
                label="Treatment"
                placeholder="Treatment of the Patient"
                component={FieldInput}
            />
            <Field
                type="text"
                name="medicines"
                label="Medicines"
                placeholder="Medicines of the Patient"
                component={FieldInput}
            />
            <Field
                type="text"
                name="weight"
                label="Weight"
                placeholder="Weight"
                component={FieldInput}
            />
            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.symptoms) {
        errors.symptoms = 'Required';
    }

    if (!values.diagnosis) {
        errors.diagnosis = 'Required';
    }

    if (!values.allergies) {
        errors.allergies = 'Required';
    }
    if (!values.treatment) {
        errors.treatment = 'Required';
    }
    if (!values.medicines) {
        errors.medicines = 'Required';
    }
    if (!values.weight) {
        errors.weight = 'Required';
    }
    if (!values.doctorId) {
        errors.doctorId = 'Required';
    }
    if (!values.patientId) {
        errors.patientId = 'Required';
    }
    return errors;
};



export default reduxForm({
    form: 'DocumentForm',
    validate
})(DocumentForm);
