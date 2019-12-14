import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import loadingPic from '../images/dogHugs.gif'
import { withRouter } from 'react-router-dom';

class FavoritesPage extends Component {

   render() {
      return(
         <div id="loading-background">
            {/* <h1 style={{color: 'white'}}>Sorry, we are under construction</h1> */}
            <Image id='loading-pic' style={{width: 500+'px'}} src={loadingPic}/>
            {/* <Image id='loading-pic' src={loadingPic}/> */}
         </div>
      )
   }
} 

export default withRouter(FavoritesPage);