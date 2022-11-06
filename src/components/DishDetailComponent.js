import React from 'react';
//eslint-disable-next-line
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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

  function RenderComments({comments}){
    if (comments != null){
      return(
          <div className='col-sm-12 col-md-5 m-1'>
            <h4>Comments</h4>
            {comments.map((comment) => {
              var date = new Date(comment.date)
              return(
                <div key = {comment.DishId}>
                  <br/>
                  {comment.comment}
                  <br/>
                  <br/>
                  {"-- " + comment.author}, {date.toDateString()}
                </div>
              );
            })}
          </div>
      );
    }
    else{
      return(
        <div/>
      );
    }


  }

  const DishDetail = (props) => {
    if (props.dish != null)
      return(
        <div className='container'>
          <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
              <h3>{props.dish.name}</h3>
              <hr/>
            </div>
          </div>
          <div className='row'>
              <RenderDish dish = {props.dish}/>
              <RenderComments comments = {props.comments}/>
          </div>
        </div>
      );
  }

export default DishDetail;
