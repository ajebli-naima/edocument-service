export const doctorsFormattedForDropdown = doctors => {
    if (!doctors) {
        return;
    }

    return doctors.map(doctor => {
        return {
            value: doctor.id,
            text: `${doctor.firstName} ${doctor.lastName}`
        };
    });
};

export const patientsFormattedForDropdown = patients => {
    if (!patients) {
        return;
    }

    return patients.map(patient => {
        return {
            value: patient.id,
            text: `${patient.firstName} ${patient.lastName}`
        };
    });
};