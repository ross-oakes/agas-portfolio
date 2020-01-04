import * as React from "react"
import {Col, Container, Row} from "reactstrap";


const createRow = (row) => <Row>{row.map(createCell)}</Row>;
const createCell = (value) => <Col>{value}</Col>;

const SectionWithTable = ({title, tableComponents}) => {

    return (
        <div className="description-with-title">
            <h2>{title}</h2>
            <Container>
                {tableComponents.map(createRow)}
            </Container>
        </div>
    )
};


export default SectionWithTable;