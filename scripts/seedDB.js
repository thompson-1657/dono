const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dono_db");

const postsSeed = [
    {
        text: "I would like to collect coats in my neighborhood",
        date: new Date(Date.now())
    },
    {
        text: "I want to donate food this weekend at my restaurant",
        date: new Date(Date.now())
    }
]

const userSeed = 
    {
        password: "123456789",
        email: "jon.doe@gmail.com"
        
    }


const runSeeder = async () => {

    try {
        await db.User.deleteMany({})
        await db.Post.deleteMany({})

        const posts = await db.Post.insertMany(postsSeed)

        // const users = await db.User.insertMany(userSeed)

        const postIds = posts.map(post => post._id)
      
        const finalUserData = {
            ...userSeed,
            posts: postIds
        }
        
        const user = await db.User.create(finalUserData)

        await db.Post.updateMany({}, { 
            user: user._id
        })
        
    } catch(err) {
        throw new err
    }
    process.exit()
}

runSeeder()
