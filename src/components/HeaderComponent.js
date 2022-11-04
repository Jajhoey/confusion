import React, {Component} from 'react';
import {NavbarBrand, Navbar, Jumbotron} from 'reactstrap';

class Header extends Component {

  render(){
    return(
      //This is a React fragment, this is useful so we dont add extra nodes in the DOM, such as <div></div>
      <React.Fragment>
        <Navbar dark>
          <div className = 'container'>
            <NavbarBrand href = '/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-5 col-sm-6'>
              <h1>Ristorante Con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
