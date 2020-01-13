import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

renderDish(dish) {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
}

renderComments(comments) {

	if (!comments) {
		return (
				<div></div>
			);
	} 
	else {
		return(
			<div>
				<h4> Comments </h4>
				<ul className="list-unstyled">
					{comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author}, {comment.date} </p>
                                </li>
                            );
                        })}
				</ul>
			</div>
		);

	}
}

render() {
	const dish=this.props.dish;
	if (dish != null) {
          return (
						<div className="row">
							<div className="col-12 col-md-5 m-1">
										{this.renderDish(dish)}
							</div>
							<div className="col-12 col-md-5 m-1">
										{this.renderComments(dish.comments)}
							</div>
						</div>
							           
					);
         }
        else {
            return(
                <div></div>
            );
         }
	
}
}

export default Dishdetail;