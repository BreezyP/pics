import React from 'react';

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

class CardDetail extends React.Component {

    render() {
        return (
            <div className='col-3 mt-3'>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1447&q=80" alt="Card image cap"/>
                    <CardBody>
                        <CardText>{this.props.img}Some quick example text to build on the card title and make up the bulk of the card's
                            content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CardDetail;