import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div className="home-wrap">
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <div className="my-name">Evgeniy Boyko</div>
            </div>
        );
    }
  }
  
  export default Home;