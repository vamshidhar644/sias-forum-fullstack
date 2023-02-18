const User = require('../models/userModel');

// login user
const loginUser = async (req, res) => {
  const {userName, password} = req.body

    try{
        const user = await User.login(userName, password) 

        // create a token
        // const token = createToken(user._id)

        res.status(200).json({userName, user})
    }catch(error){
        res.status(400).json({error: error.message})
    }
};

// signup user
const signupUser = async (req, res) => {
  const { firstName, lastName,userName, email, password } = req.body;

  try {
    const user = await User.signup(firstName, lastName,userName, email, password)

    res.status(200).json({ userName, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //   res.json({ mssg: 'signup user' });
};

module.exports = { loginUser, signupUser };
