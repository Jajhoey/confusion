import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    const HomePage = () => {
      return(<Home/>);
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Redirect to='/home'/>
        </Switch>
        {/*filter() is creating an array of length 1, hence the [0] passed within function to return the singular item of that array*/}
        <DishDetail selectedDish = {this.state.selectedDish}
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
 }

export default Main;
