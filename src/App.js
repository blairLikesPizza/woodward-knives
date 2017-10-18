import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Subheader from './components/Subheader/Subheader.js'
// import Private from './components/Private/Private.js';
// import { getUserInfo } from './ducks/reducer.js';
// import { connect } from 'react-redux';

class App extends Component {
  // constructor(props) {
  //       super(props);
        
  //       this.state = {
  //           userInfo: {}
  //       }
  //   }

  //   componentDidMount(){
  //      this.props.getUserInfo();
  //   }
 
  render() {
    // const user = this.props.user;
    return (
      
      <div className="App">
        
        <div className="header">
          
        <Header />
        <Subheader />
        
        </div>
        
        
        
        {/* <div className=''>
               
                { user.id ? <img className='avatar' src={user.img} alt=""/> : null }
                <p>Username: { user.id ? user.user_name : null }</p>
                
            </div> 
        */}
        
           {router}
           
           <div className="footer">
           <Footer />
           </div>
      </div>
    );
  }
}

// function mapStateToProps(state){
//     console.log("state from App", state)
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps, { getUserInfo })(App);
export default App;