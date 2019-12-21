import * as React from "react"


const createRow = (row) => <tr>{row.map(createCell)}</tr>;
const createCell = (value) => <td>{value}</td>;

const SectionWithTable = ({title, tableComponents}) => {


    return (
        <div className="description-with-title">
            <h2>{title}</h2>
            <table>
                <tbody>
                {tableComponents.map(createRow)}
                </tbody>
            </table>
        </div>
    )
};


export default SectionWithTable;