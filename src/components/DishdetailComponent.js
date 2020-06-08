import React, { Component } from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardBody,
  Cardtitle
} from "reactstrap";

class DishDetail extends Component {
  renderComments(comments) {
    if (comments == null) {
      return <div />;
    }
    const cmts = comments.map(comment => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              date: "2-digit"
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>comments</h4>
        <ul className="list unstyled">{cmts}</ul>
      </div>
    );
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div />;
    }
  }
  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div />;
    }
    
    return (
      <div className="row">
         {this.renderDish(dish)};
         {this.renderComments(dish.comments)};
      </div>
    );
  }
}
export default DishDetail;
