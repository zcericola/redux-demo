const users = require("../models/users");

const login = (req, res, next) => {
  const { session } = req;
  const { username, password } = req.body;
  console.log('username: ',username,'password: ', password);

  const user = users.find(
    user => user.username === username && user.password === password
  );

  if (user) {
    session.user.username = user.username;
    res.status(200).json(session.user);
  } else {
    res.status(500).json("Unauthorized.");
  }
};

const getUser = (req, res, next) => {
  const { session } = req;
  res.status(200).json(session.user);
};

const signout = (req, res, next) => {
    const {session} = req;
    session.destroy();
    res.status(200).json('Session has been destroyed.');


}

module.exports = {
  getUser,
  login,
  signout
};
