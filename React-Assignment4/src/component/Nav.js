import React, { Component } from 'react'
import axios from 'axios'
import './myfile.css'
import Blink from 'react-blink-text';
import { APIKEY, URL } from './variable'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'

class Nav extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    setInterval(() => {	  
    axios.get(`${URL}${APIKEY}`)
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.articles.slice(0,5)
        });
      })}, 5000);
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='left' key={post.title}>
		<div className="post card">
		<div className="card-content">
               		<a href={post.url}>{post.title}</a>
		</div>
		</div>
	  </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
	  <Link to="/" style={{color: 'blue'}}>Return to Homepage</Link>  
	  <Blink color='Red' text="Headlines">
          </Blink>
          {postList}
      </div>
    )
  }
}

export default Nav
