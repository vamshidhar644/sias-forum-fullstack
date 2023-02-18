const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// login user
const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.login(userName, password);

    // create a token
    const token = createToken(user._id);

    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const username = user.userName;

    res
      .status(200)
      .json({ firstName, lastName, email, username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { firstName, lastName, userName, email, password } = req.body;

  try {
    const user = await User.signup(
      firstName,
      lastName,
      userName,
      email,
      password
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ firstName, lastName, userName, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
