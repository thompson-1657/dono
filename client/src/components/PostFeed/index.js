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


const PostFeed = () => {

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
                //   console.log(res.data)
            )
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

    return (
        <>

            <h2 className="title">
                General community posts
        </h2>

            {post.length ? (
                <div className="card">
                    {post.map(posts => {
                        return (
                            <div>
                                {posts.placeid === placeid &&

                                    <Card className="main">
                                        <Card.Body className="create">Created by: {posts.email}</Card.Body>
                                        <Card.Body className="create">{posts.date.split("T")[0]}<hr /></Card.Body>
                                        <Card.Body>{posts.text}</Card.Body>
                                        {/* <Card.Body>{posts.description}</Card.Body> */}

                                        <Link to="/connect"><Buttons
                                            // onClick={handleConnectSubmit}
                                            as="input"
                                            type="submit"
                                            value="Connect"

                                        >Connect</Buttons></Link>{' '}

                                        {/* <p><img name="id" 
              <Card className="main ">
                <Card.Body className="create">Created by: {posts.email}</Card.Body>
                <Card.Body className="create">{posts.date}<hr /></Card.Body>
                <Card.Body>{posts.text}</Card.Body>
                {/* <Card.Body>{posts.description}</Card.Body> */}

                                        {/* <Link to="/connect"><Buttons 
                // onClick={handleConnectSubmit}
                as="input" 
                type="submit" 
                value="Connect" 
                
                >Connect</Buttons></Link>{' '} */}
                                        {posts.firebaseId === currentUser.uid &&
                                            <BsTrashFill
                                                className="trash"
                                                name="id"
                                                onClick={() => handleDeletePostClick(posts._id)}
                                                style={{ width: "20px", height: "20px", marginTop: "5px", marginRight: "10px" }} />}
                                        {/* <p><img name="id" 
                  onClick={() => handleDeletePostClick(posts._id)} 
                  src="/icons/delete.png" />{'  '} </p> */}
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

export default PostFeed