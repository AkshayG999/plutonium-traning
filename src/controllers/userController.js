const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// __________User Registration_______________________
const createUser = async function (req, res) {
try{
  let data = req.body;
  let array=Object.keys(data).length
  if(array==0) 
          return res.status(400).send({status:false , msg:"Fill some neccessary Info "})
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
}
catch(err){
  res.send({error:err.message})
}
};

//___________User Login & Create Login Token______________
const loginUser = async function (req, res) {
try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({status: false,msg: "username or the password is not corerct"});

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);  //response header 
  res.status(201).send({ status: true, token: token });
  }
  catch(err){
    res.status(500).send({error:message})
  }
};

//________Get User Data ___________________________
const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
}
catch(err){
  res.send({error:message})
}
};

//_________Update User Info______________________________
const updateUser = async function (req, res) {
 try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the dbgit 
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.send({ status: "UserData is Updated", data: updatedUser });
}
catch(err){
  res.send({error:err.message})
  
}
};


//_____________Delete User___________________________________
const deleteUser = async function (req, res) {
try{
  let tokan = req.headers.isdeleted
  let userid = req.params
  let id = userid.userId
  let userId = await userModel.findById(id)
  userId.isdeleted = tokan
  await userModel.findOneAndUpdate({ _id: id }, { $set: { isDeleted: tokan } })
  res.status(200).send({ status: true, msg: "your data is successfully deleted" })
}
catch(err){
  res.status(500).send({error:message})
}
}

//_____________Add Message Post_________________________________________
const postMessage = async function (req, res) {
try{
  let message = req.body.message
  let user = await userModel.findById(req.params.userId)
  if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}
catch(err){
  res.send({error:message})
}
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
