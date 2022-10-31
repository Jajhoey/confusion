import DishDetail from '../components/DishDetailComponent';
import React, {Component} from 'react';
//eslint-disable-next-line
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish){
    this.setState({selectedDish: dish});
  }

  render(){
    //Map function will return a list of the dish objects
    //The key is needed in React to create a list
    //Card class is from reactstrap

    const menu = this.props.dishes.map((dish) => {
      return (
        <div key = {dish.id} className='col-12 col-md-5 m-1'>
          <Card onClick={() => this.onDishSelect(dish)}>
              {/*Self closing CardImg tag below. This is JSX comment syntax btw*/}
              <CardImg width='100%' src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return(
      <div className='container'>
        <div className='row'>
          {menu}
          <DishDetail selectedDish = {this.state.selectedDish}/>
        </div>
      </div>
    );
  }
}

export default Menu;
