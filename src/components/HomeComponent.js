import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}){
  return(
    <Card>
      <CardImg src={item.image} alt={item.name}/>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {/*if item.designation exists then render the designation as card subtitle, else render as null*/}
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props){
  return(
    <div className = 'container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.dish}/>
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.promotion}/>
        </div>
        <div className='col-12 col-md m-1'>
          <RenderCard item={props.leader}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
