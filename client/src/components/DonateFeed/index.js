import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.css'
import '../../App.css'
import API from '../../utils/API'
import Buttons from "../Buttons"
import { BsTrashFill } from 'react-icons/bs'
import { useAuth } from "../../contexts/AuthContexts"
import { useGeo } from "../../contexts/GeoContext"



const DonateFeed = () => {
    const [post, setPosts] = useState([])
    const { currentUser } = useAuth()
    const { placeid } = useGeo()
  
    // const isCreator = true
  
    useEffect(() => {
      loadPosts()
    }, [post])
  
    function loadPosts() {
      API.getPosts()
        .then(res =>
          setPosts(res.data)
  
        )
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

    <h2 className="title">
      Donation posts
      </h2>

    {donation.length ? (
      <div className="card">
        {donation.map(donations => {
          return (

            <div>
              {donations.placeid === placeid &&
              <Card className="main">
                <Card.Body className="create">Donation posted by: {donations.email}</Card.Body>
                <Card.Body className="create">{donations.date}<hr /></Card.Body>
                <Card.Body className="card-title">{donations.title}</Card.Body>
                <Card.Body>{donations.description}</Card.Body>

                <Link to="/connect"><Buttons
                  // onClick={handleConnectSubmit}
                  as="input"
                  type="submit"
                  value="Connect"

                >Connect</Buttons></Link>{' '}
                {donations.firebaseId === currentUser.uid &&
                  <BsTrashFill name="id"
                    onClick={() => handleDeleteDonationClick(donations._id)}
                    style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                {/* <img name="id" 

            <Card className="main">
              <Card.Body className="create">Donation posted by: {donations.email}</Card.Body>
              <Card.Body className="create">{donations.date}<hr /></Card.Body>
              <Card.Body className="card-title">{donations.title}</Card.Body>
              <Card.Body>{donations.description}</Card.Body>

              <Link to="/connect"><Buttons 
              // onClick={handleConnectSubmit}
              as="input" 
              type="submit" 
              value="Connect" 
              
              className="feed">Connect</Buttons></Link>{' '}
              {donations.firebaseId === currentUser.uid &&
                <BsTrashFill name="id" 
                onClick={() => handleDeleteDonationClick(donations._id)} 
                style={{width:"20px", height:"20px", marginTop:"5px", marginRight:"10px"}}/>}
                  {/* <img name="id" 

                onClick={() => handleDeleteDonationClick(donations._id)} 
                src="/icons/delete.png" style={{width:"10%", height:"10%"}} />{'  '}  */}
              </Card>
        }
            </div>
          )
        })}
      </div>

    ) : (
      <h3>No Posts to Display</h3>
    )}
    </>
    )
}





export default DonateFeed