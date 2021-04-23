const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dono_db");

const postsSeed = [
    {
        text: "I would like to collect coats in my neighborhood",
        chats: [
            "test@test.com: I have a coat", "test@test.com: I can help collect some too"
        ],
        date: new Date(Date.now()),
        email: "test@test.com",
        placeid: "place.7434989446701850"
    },
    {
        text: "I want to donate food this weekend at my restaurant",
        chats: [
            "test@test.com: I will share with my friends", "test@test.com: Thank you, looking forward to lunch!"
        ],
        date: new Date(Date.now()),
        email: "test@test.com",
        placeid: "place.7434989446701850"
    }
]

const userSeed =
{
    email: "jon.doe@gmail.com",
    placeid: "place.7434989446701850",
    firebaseId: "12345",
    // channels: ["1"]
}

const donateSeed = [
    {
        title: "Crib",
        description: "Ikea crib, 2 years old",
        typeOfDonation: "Utility",
        chats: [
            "test@test.com: I will share with my friends", "test@test.com: Thank you, looking forward to lunch!"
        ],
        date: new Date(Date.now()),
        email: "test@test.com",
        placeid: "place.7434989446701850"
    },
    {
        title: "Formula",
        description: "Newborn, target brand",
        typeOfDonation: "Parishable",
        chats: [
            "test@test.com: I will share with my friends", "test@test.com: Thank you, looking forward to lunch!"
        ],
        date: new Date(Date.now()),
        email: "test@test.com",
        placeid: "place.7434989446701850"
    }

]


const pollSeed = [
    {
        text: "Baby crib",
        typeOfDonation: "Utility",
        date: new Date(Date.now()),
        email: "test@test.com",
        placeid: "place.7434989446701850"
    },
    {
        text: "Baby food",
        typeOfDonation: "Parishable",
        date: new Date(Date.now()),
        email: "test@test.com",
        placeid: "place.7434989446701850"
    }
]

// const channelSeed = [
//     {
//         text: "Channel title",
//         date: new Date(Date.now())
//     },
//     {
//         text: "Next channel title",
//         date: new Date(Date.now())
//     }
// ]

const runSeeder = async () => {

    try {
        await db.User.deleteMany({})
        await db.Post.deleteMany({})
        await db.Donate.deleteMany({})
        await db.Poll.deleteMany({})
        // await db.Channel.deleteMany({})

        console.log("hi")

        const posts = await db.Post.insertMany(postsSeed)
        console.log(posts)

        const donations = await db.Donate.insertMany(donateSeed)
        console.log(donations)

        const polls = await db.Poll.insertMany(pollSeed)
        console.log(polls)

        // const channels = await db.Channel.insertMany(channelSeed)

        // console.log(channels)

        const postIds = posts.map(post => post._id)

        const donationIds = donations.map(donate => donate._id)

        const pollIds = polls.map(poll => poll._id)

        // const channelIds = channels.map(channel => channel._id)

        const finalUserData = {
            ...userSeed,
            posts: postIds,
            donations: donationIds,
            polls: pollIds,
            // channels: channelIds
        }

        const user = await db.User.create(finalUserData)

        await db.Post.updateMany({}, {
            user: user._id,
            // placeid: user.placeid
        })

        await db.Donate.updateMany({}, {
            user: user._id,
            // placeid: user.placeid
        })

        await db.Poll.updateMany({}, {
            user: user._id,
            // placeid: user.placeid
        })

        // await db.Channel.updateMany({}, {
        //     user: user._id,
        //     placeid: user.placeid
        // })

    } catch (err) {
        throw new err
    }
    process.exit()
}

runSeeder()
