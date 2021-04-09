const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dono_db");

const postsSeed = [
    {
        post: "I would like to collect coats in my neighborhood",
        date: new Date(Date.now())
    },
    {
        post: "I want to donate food this weekend at my restaurant",
        date: new Date(Date.now())
    }
]

const userSeed = [
    {
        email: "jon.doe@gmail.com",
        password: "123456789"
    }
]

const runSeeder = async () => {

    try {
        await db.User.deleteMany({})
        await db.Post.deleteMany({})
        const posts = await db.Post.insertMany(postsSeed)
        await db.User.insertMany(userSeed)

        const postIds = posts.map(post => post._id)
      
        const finalUserData = {
            ...userSeed,
            posts: postIds
        }
        
        const user = await db.User.updateMany(finalUserData)
        await db.Post.updateMany({ user: user._id })

    } catch(err) {
        throw new err
    }
    process.exit()
}

runSeeder()
