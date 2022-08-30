const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (req, res) {
  
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    }); 
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);  //response header 
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let tokan = req.headers["x-auth-token"];
  if (!tokan) tokan = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!tokan) return res.send({ status: false, msg: "token must be present" });

  console.log(tokan);

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: "UserData is Updated", data: updatedUser });
};

const deleteUser = async function (req, res) {
  let tokan = req.headers.isdeleted
  let userid = req.params
  let id = userid.userId
  let userId = await userModel.findById(id)
  userId.isdeleted = tokan
  await userModel.findOneAndUpdate({ _id: id }, { $set: { isDeleted: tokan } })
  res.send({ status: true, msg: "your data is successfully deleted" })
}


const postMessage = async function (req, res) {
  let message = req.body.message

  // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
