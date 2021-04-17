import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import API from '../utils/API'


import Chat from '../components/Chat'
import Navbar from '../components/Navbar'

const Connect = ({children}) => {


  const [post, setPosts] = useState([])



  useEffect(() => {
    loadPosts()
  }, [post])

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
                <Card key={posts._id} className="main">
                  <Card.Body date={posts.date}>{posts.date}</Card.Body>
                  <Card.Body text={posts.text}>{posts.text}</Card.Body>
                  {/* <Card.Body description={posts.description}>{posts.description}</Card.Body> */}

                  <Chat postId={posts._id} />

                  {posts.chats.map(chat => {
                    return (
                      <ul>{chat}</ul>
                    )
                  })}
                </Card>
              )
            })}
          </div>

        ) : (
          <h3>No Posts to Display</h3>
        )}
        {/* <Chat /> */}
      </Container>
    </>
  )
}

// onChange={handleFormChange}
// onClick={() => handleSubmitClick(post._id)}
export default Connect