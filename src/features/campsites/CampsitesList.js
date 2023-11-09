import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites); //adding () invokes the function, but we don't want that right now just the function itself so removed this after selectAllCampsites()
    console.log('campsites', campsites);

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col md="5" className="m-4" key={campsite.id} >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row> 
    )
}

export default CampsitesList;