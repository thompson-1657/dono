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

const donateSeed = [
    {
        text: "I have a crib to donate",
        typeOfDonation: "Utility",
        date: new Date(Date.now()),
    },
    {
        text: "I have extra formula",
        typeOfDonation: "Parishable",
        date: new Date(Date.now()),
    }

]

const runSeeder = async () => {

    console.log(donateSeed)
    try {
        await db.User.deleteMany({})
        await db.Post.deleteMany({})
        await db.Donate.deleteMany({})

        const posts = await db.Post.insertMany(postsSeed)

        const donations = await db.Donate.insertMany(donateSeed)

        const postIds = posts.map(post => post._id)

        const donationIds = donations.map(donate => donate._id)

        const finalUserData = {
            ...userSeed,
            posts: postIds,
            donations: donationIds
        }

        const user = await db.User.create(finalUserData)

        await db.Post.updateMany({}, {
            user: user._id
        })

        await db.Donate.updateMany({}, {
            user: user._id
        })

    } catch (err) {
        throw new err
    }
    process.exit()
}

runSeeder()
