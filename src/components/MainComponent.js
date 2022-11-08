import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render(){
    const HomePage = () => {
      //filter() is creating an array of length 1, hence the [0] passed within function to return the singular item of that array
      return(<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((p) => p.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />);
    }

    const DishWithID = ({match}) => {
      return (
        //parseInt's second parameter is specifying to parse to an integer of base 10
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    const AboutUs = () => {
      return (
        <About leaders = {this.state.leaders}/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}/>
          {/**/}
          <Route path ='/menu/:dishId' component={DishWithID}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
          <Route exact path='/contactus' component={Contact}/>
          <Route exact path='/aboutus' component={AboutUs}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );
  }
 }

export default Main;
