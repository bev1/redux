import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'react-js-search';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      initialUsers: []
    };
  }
  componentWillMount() {
      this.props.getUsers();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.users.users !== false){
      this.setState({ 
        users: nextProps.users.users,
        initialUsers: nextProps.users.users
      });
    }
  }
  onSearchChange(term,hits) {
    let res = this.state.initialUsers.filter(x => Object.values(x).join(' ').toLowerCase().includes(term.toLowerCase()));
    this.setState({ users: res });
  }
  render() {
    return (
      <div className="users-wrap">
        <SearchBar 
          onSearchTextChange={(term,hits) => {this.onSearchChange(term,hits)}}
          onSearchButtonClick={(term,hits) => {this.onSearchChange(term,hits)}}
          placeHolderText={"Search here..."}
          data={this.state.initialUsers}
        />
      {
        this.props.users.isFetching ?
        <div className="preloader"><div className="loader"></div></div> : <div>
        <div className='row'>
          {this.state.users.map((item, index) => {
            return <div className='col-md-4' key={index}>
              <p>{item.name.toUpperCase()}</p>
              <p>Username: {item.username}</p>
              <p>Company: {item.company.name}</p>
              <p>Email: {item.email}</p>
              <p>Phone: {item.phone}</p>
            </div>
          })}
        </div>
        </div>
      }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Users);