import React from 'react';
//eslint-disable-next-line
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



  function RenderDish({dish}){
    if (dish != null){
      return (
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  function RenderComments({dish}){
    var heading = null;
    var comments = null;

    if (dish != null){
      heading = "Comments";
      comments = dish.comments.map((comment) => {
        var date = new Date(comment.date)
        return(
          <div key = {comment.id}>
            <br/>
            {comment.comment}
            <br/>
            <br/>
            {"-- " + comment.author}, {date.toDateString()}
          </div>
        );
      });
    }

    return(
        <div className='col-sm-12 col-md-5 m-1'>
          <h4>{heading}</h4>
          {comments}
        </div>
    );
  }

  const DishDetail = (props) => {
    return(
      <div className='container'>
        <div className='row'>
            <RenderDish dish = {props.dish}/>
            <RenderComments dish = {props.dish}/>
        </div>
      </div>
    );
  }

export default DishDetail;
