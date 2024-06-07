// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const Post = require('../models/postModel.js');
const User = require('../models/UserModel.js');
const Comments= require('../models/commentsModel.js')


const users = [
  {
    username: "student1",
    email: "student1234@gmail.com",
    password: "1234567",
    age: 23,
  },
  {
    username:"student2",
    email:"student34@gmail.com",
    password:"23456",
    age:21
    },
    {
    username:"student3",
    email:"student5@gmail.com",
    password:"29876",
    age:21
    },
    {
    username:"student4",
    email:"student45@gmail.com",
    password:"8790",
    age:21
    }
];

const posts = [
  {
    title: "Star Wars",
    content: "its really cool",
    author: 'Josh',
  },
  {
    title: "MongoDB",
    content: "its a database",
    author: "Per Scholas",
  },
  {
    title: "Dogs are Cool",
    content: "Do i really need to explain??",
    author: "Doglover123",
    comments: [
      {
        content: "you so right",
        author: "dogsdogsdogs",
      },
      {
        content: "true true",
        author: "albert",
      },
    ],
  },
];

async function seed() {
  try {
    //Delete pre-existing data new data with no repeated data
    await Post.deleteMany({});
    await User.deleteMany({});

    const createdPosts = await Post.create(posts);

    console.log('Posts: ', createdPosts);

    const createdUsers = await User.create(users);

    console.log('Users: ', createdUsers);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();