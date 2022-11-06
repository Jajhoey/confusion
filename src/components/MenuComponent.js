import React from 'react';
//eslint-disable-next-line
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

  //MenuComponent is now a functional component. It is no longer a class component like Main
  //Usually functions are camelCase but user defined components should be Uppercase
  function RenderMenuItems({dish, onClick}){
    return(
      <Card>
        {/*Backquotes are used here in the link, this will pass the dish as params to use in other components*/}
        <Link to = {`/menu/${dish.id}`}>
          {/*Self closing CardImg tag below. This is JSX comment syntax btw*/}
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
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
        <RenderMenuItems dish = {dish}/>
      </div>
    );
  });

  return(
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
          <hr/>
        </div>
      </div>
      <div className='row'>
        {menu}
      </div>
    </div>
  );
}




export default Menu;
