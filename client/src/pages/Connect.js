import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import API from '../utils/API'


import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

const Connect = () => {
  
  
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

  return (
    <>
    <Container>
        <Navbar />
        {post.length ? (
        <div className="card">
          {post.map(posts => {
            return (
              <Card className="main">
                <Card.Body>{posts.date}</Card.Body>
                <Card.Body>{posts.text}</Card.Body>

              </Card>
            )
          })}
        </div>

      ) : (
        <h3>No Posts to Display</h3>
      )}
        <Chat />
        </Container>
    </>
    )}
    
      export default Connect