import React from 'react';

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

class CardDetail extends React.Component {
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            console.log(this.imageRef.current.clientHeight);
        })
    }


    render() {
        return (
                <Card className='col-3 mx-3 mb-3'>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img ref={this.imageRef} width="100%" src={this.props.img} alt="Card image cap"/>
                    <CardBody>
                        <CardText>{this.props.img}Some quick example text to build on the card title and make up the bulk of the card's
                            content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
        );
    }
}

export default CardDetail;