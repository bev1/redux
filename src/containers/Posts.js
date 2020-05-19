import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 10
    };
  }
  componentWillMount() {
    if(!this.props.posts.posts.length) {
      this.props.getPosts();
    }
  }
  shiftPage(page) {
    this.setState({ currentPage: +page });
  }
  render() {
    let posts = this.props.posts.posts;
    const pages = [1,2,3,4,5,6,7,8,9,10]
    return (
      <div className="posts-wrap">
        {
          this.props.posts.isFetching ?
          <div className="preloader"><div className="loader"></div></div> : <div>
          <div className='row'>
            {posts.slice(this.state.currentPage -10, this.state.currentPage).map((item, index) => {
              return <div className='col-md-4' key={index}>
                <p>{item.title.toUpperCase()}</p>
                <p>{item.body}</p>
              </div>
            })}
          </div>
          <ul className='pagination'>
            {
              pages.map(item => {
                return <li className='pag-item' key={item} onClick={(e) => this.shiftPage(`${item}0`)}>{item}</li>
              })
            }
          </ul></div>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Posts);