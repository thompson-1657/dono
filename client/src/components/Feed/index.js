import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.css'
import API from '../../utils/API'


const Feed = () => {

  const [post, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  function loadPosts() {
    API.getPosts()
      .then(res =>
        // console.log(res.data)
        setPosts(res.data)

      )
      //   .then(console.log(data))
      .catch(err => console.log(err));
  };


  // function handleConnectSubmit(event) {
  //   event.preventDefault()
  //   console.log("click")
  // }

  return (
    <>
      <h2 className="posts">
        General community posts
        </h2>

      {post.length ? (
        <div className="card">
          {post.map(posts => {
            return (
              <Card className="main">
                <Card.Body>{posts.date}</Card.Body>
                <Card.Body>{posts.text}</Card.Body>

                <Link to="/connect"><Button 
                // onClick={handleConnectSubmit}
                as="input" 
                type="submit" 
                value="Connect" 
                
                /></Link>{' '}
              </Card>
            )
          })}
        </div>

      ) : (
        <h3>No Posts to Display</h3>
      )}






    </>

  )
}

export default Feed