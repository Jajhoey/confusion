import React from 'react';
//eslint-disable-next-line
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

  //MenuComponent is now a functional component. It is no longer a class component like Main
  //Usually functions are camelCase but user defined components should be Uppercase
  function RenderMenuItems({dish, onClick}){
    return(
      <Card onClick = {() => onClick(dish.id)}>
      {/*Self closing CardImg tag below. This is JSX comment syntax btw*/}
      <CardImg width='100%' src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Card>
    );
  }

//Map function will return a list of the dish objects
//The key is needed in React to create a list
//Card class is from reactstrap
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key = {dish.id} className='col-12 col-md-5 m-1'>
        <RenderMenuItems dish = {dish} onClick = {props.onClick}/>
      </div>
    );
  });

  return(
    <div className='container'>
      <div className='row'>
        {menu}
      </div>
    </div>
  );
}




export default Menu;
