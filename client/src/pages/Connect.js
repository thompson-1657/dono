import React, { useState, useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
// import ChatRoom from "../components/ChatRoom"
import API from '../utils/API'
import "../App.css"
import { useAuth } from "../contexts/AuthContexts"


import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import { BsTrashFill } from 'react-icons/bs'


// import Post from '../components/Post'

const Connect = ({ children }) => {

  const [post, setPosts] = useState([])
  const { currentUser } = useAuth()


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

  const [donation, setDonations] = useState([])

  useEffect(() => {
    loadDonations()
  }, [donation])

  function loadDonations() {
    API.getDonations()
      .then(res =>
        // console.log(res.data)
        setDonations(res.data)

      )
      //   .then(console.log(data))
      .catch(err => console.log(err));
  };

  const handleDeletePostClick = (id) => {
    // console.log("click")
    // console.log(id)
    API.deletePost(id)
      .then(res => {
        console.log(res)
      })
  }

  const handleDeleteDonationClick = (id) => {
    // console.log("click")
    // console.log(id)
    API.deleteDonation(id)
      .then(res => {
        console.log(res)
      })
  }


  return (
    <>
      <Navbar />
      <Container className="postContainer">
        {post.length ? (
                    <div className="title">
          <h2 className="titleh2">Community Posts</h2>

          <div className="card">
            {post.map(posts => {
              return (
                <Card key={posts._id} className="main">
                  <Card.Body className="create">Post created by: {posts.email}</Card.Body>

                  <Card.Body className="create" date={posts.date}>Date Added: {posts.date} <hr /></Card.Body>
                  <Card.Body  text={posts.text}>{posts.text}</Card.Body>
                  {/* <Card.Body description={posts.description}>{posts.description}</Card.Body> */}

                  <Chat className="bg" postId={posts._id} />
                  <div className="msg">Chat history</div>
                  {posts.chats.map(chat => {
                    return (
                      <div className="bg">
                      <ul className="msg">{chat}</ul></div>
                    )
                  })}
                  {posts.firebaseId === currentUser.uid &&
                    <BsTrashFill name="id"
                      onClick={() => handleDeletePostClick(posts._id)}
                      style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                </Card>
              )
            })}
          </div>
          </div>

        ) : (
          <h3>No Posts to Display</h3>
        )}


        {donation.length ? (
          <div className="title">
          <h2 className="titleh2">Donations</h2>
          <div className="card">
            {donation.map(donations => {
              return (
                <Card key={donations._id} className="main">
                  <Card.Body className="create">Donation posted by: {donations.email}</Card.Body>

                  <Card.Body className="create" date={donations.date}>Date Added: {donations.date}<hr /></Card.Body>
                  <Card.Body  className="card-title" title={donations.title}>{donations.title}</Card.Body>
                  <Card.Body description={donations.description}>
                    Item description: {donations.description}</Card.Body>

                  {donations.firebaseId === currentUser.uid &&
                    <BsTrashFill name="id"
                      onClick={() => handleDeleteDonationClick(donations._id)}
                      style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                  <Chat className="bg" donationId={donations._id} />
                  <div className="msg">Chat history</div>

                  {donations.chats.map(chat => {
                    return (
                     
                      <div className="bg">
                        
                      <ul className="msg">{chat}</ul>
                      </div>
                      
                    )
                  })}
                </Card>
              )
            })}
          </div>
          </div>

        ) : (
          <h3>No donations to Display</h3>
        )}
        {/* <Chat /> */}

      </Container>
    </>
  )
}

// onChange={handleFormChange}
// onClick={() => handleSubmitClick(post._id)}
export default Connect