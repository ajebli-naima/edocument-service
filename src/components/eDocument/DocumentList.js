import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



//const titleFormatter = (cell, row) => {
  //return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
//};



class DocumentList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {


        return (
            <BootstrapTable data={this.props.documents}  selectRow={this.selectRowProp}  options={this.options} bordered={true} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="doctorId"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Doctor
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="patientId"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                   Patient
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="symptoms"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    symptoms
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="diagnosis"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Diagnosis
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="allergies"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Allergies
                </TableHeaderColumn> 

                <TableHeaderColumn 
                    dataField="treatment"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                  Treatment
                </TableHeaderColumn>   

                <TableHeaderColumn 
                    dataField="medicines"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Medicines
                </TableHeaderColumn>   

                <TableHeaderColumn 
                    dataField="weight"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                   Weight
                </TableHeaderColumn>   
            </BootstrapTable>
        );
    }

}



export default DocumentList;
