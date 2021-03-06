import React, { useState, useEffect } from 'react'
import { Container, Card, Image } from 'react-bootstrap'
import API from '../utils/API'
import { useAuth } from "../contexts/AuthContexts"
import { useGeo } from "../contexts/GeoContext"
import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import { BsTrashFill } from 'react-icons/bs'
import "../App.css"

const Connect = ({ children }) => {

  const [post, setPosts] = useState([])
  const { currentUser } = useAuth()
  const { placeid } = useGeo()

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
        setDonations(res.data)

      )
      .catch(err => console.log(err));
  };

  const handleDeletePostClick = (id) => {
    API.deletePost(id)
      .then(res => {
        console.log(res)
      })
  }

  const handleDeleteDonationClick = (id) => {
    API.deleteDonation(id)
      .then(res => {
        console.log(res)
      })
  }


  return (
    <>
      <Navbar />
      <Container className="postContainer">
      <h2 className="title ">Community Posts</h2>

        {post.length ? (
          <div className="card title card-shadow">
            {post.map(posts => {
              return (
                <div >
                  {posts.placeid === placeid &&
                    <Card key={posts._id} className="main">
                      <Card.Body className="create">Post created by: {posts.email}</Card.Body>

                      <Card.Body className="create" date={posts.date}>{posts.date.split("T")[0]}<hr /></Card.Body>
                      <Card.Body text={posts.text}>{posts.text}</Card.Body>
                      <Chat postId={posts._id} />
                      <div className="msg">Chat History</div>
                      {posts.chats.map(chat => {
                        return (
                          <div className="bg">
                          <ul className="msg">{chat}</ul>
                          </div>
                        )
                      })}
                      {posts.firebaseId === currentUser.uid &&
                        <BsTrashFill name="id"
                          onClick={() => handleDeletePostClick(posts._id)}
                          style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                    </Card>
            }</div>
              )
            })}
          </div>

        ) : (
          <h3>No Posts to Display</h3>
        )}


        {donation.length ? (
          <>
          <h2 className="title">Donations</h2>
          <div className="card title card-shadow">
            {donation.map(donations => {
              return (
                <div>
                {donations.placeid === placeid &&
                <Card key={donations._id} className="main">
                  <Card.Body className="create">Donation posted by: {donations.email}</Card.Body>

                  <Card.Body className="create" date={donations.date}>{donations.date.split("T")[0]}<hr /></Card.Body>
                  <Card.Body title={donations.title} className="card-title">{donations.title}</Card.Body>
                  {donations.imageURL &&
                    <Card.Img src={donations.imageURL} style={
                      {  display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "50%"}
                      } as={Image} fluid={true} alt="Card image" />}
                  <Card.Body description={donations.description}>{donations.description}</Card.Body>

                  {donations.firebaseId === currentUser.uid &&
                    <BsTrashFill name="id"
                      onClick={() => handleDeleteDonationClick(donations._id)}
                      style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                  <Chat donationId={donations._id} />
                  <div className="msg">
                    Chat History
                  </div>
                  {donations.chats.map(chat => {
                    return (
                      <div className="bg">
                      <ul className="msg">{chat}</ul>
                      </div>
                    )
                  })}
                </Card>
                }
                </div>
              )
            })}
          </div>

            </>
        ) : (
          <h3>No donations to Display</h3>
        )}

      </Container>
    </>
  )
}

export default Connect