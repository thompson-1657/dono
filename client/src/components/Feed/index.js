import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.css'
import API from '../../utils/API'
import Buttons from "../Buttons"


const Feed = (props) => {

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
  // function handleConnectSubmit(event) {
  //   event.preventDefault()
  //   console.log("click")
  // }

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
      <h2 className="posts">
        General community posts
        </h2>

      {post.length ? (
        <div className="card">
          {post.map(posts => {
            return (
              <Card className="main conatiner">
                <Card.Body>{posts.date}</Card.Body>
                <Card.Body>{posts.text}</Card.Body>
                {/* <Card.Body>{posts.description}</Card.Body> */}

                <Link to="/connect"><Buttons 
                // onClick={handleConnectSubmit}
                as="input" 
                type="submit" 
                value="Connect" 
                
                >Connect</Buttons></Link>{' '}
                  <p><img name="id" 
                  onClick={() => handleDeletePostClick(posts._id)} 
                  src="/icons/delete.png" style={{width:"10%", height:"10%"}} />{'  '} </p>
              </Card>
            )
          })}
        </div>

      ) : (
        <h3>No Posts to Display</h3>
      )}



<h2 className="posts">
        Donation posts
        </h2>

      {donation.length ? (
        <div className="card">
          {donation.map(donations => {
            return (
              <Card className="main">
                <Card.Body>{donations.date}</Card.Body>
                <Card.Body>{donations.title}</Card.Body>
                <Card.Body>{donations.description}</Card.Body>

                <Link to="/connect"><Buttons 
                // onClick={handleConnectSubmit}
                as="input" 
                type="submit" 
                value="Connect" 
                
                >Connect</Buttons></Link>{' '}
                    <p><img name="id" 
                  onClick={() => handleDeleteDonationClick(donations._id)} 
                  src="/icons/delete.png" style={{width:"10%", height:"10%"}} />{'  '} </p>
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