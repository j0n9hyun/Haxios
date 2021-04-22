const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { Challenge } = require('../models/Challenge');
const { Challenges } = require('../models/Challenges');
const { auth } = require('../middleware/auth');
const { json } = require('express');

/* GET home page. */
router.get('/', function (req, res) {
  res.send('index page');
});

router.post('/api/users/register', function (req, res) {
  const user = new User(req.body);
  user.save((err, uesrInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
  console.log(user);
});

router.post('/api/users/login', function (req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일 없음',
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: '비밀번호 매치 안됨' });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

router.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    // lastname: req.user.lastname,
    // image: req.user.image,
  });
});

router.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

router.get('/api/users/test', auth, (req, res) => {
  const chall = new Challenge(req.body);
  chall.save((err, uesrInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
  console.log(chall);
});

router.post('/api/users/chall', (req, res) => {
  const chall = new Challenge(req.body);

  chall.save((err, uesrInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
  // res.status(200).json({
  //   title: chall.title,
  //   category: chall.category,
  //   description: chall.description,
  //   point: chall.point,
  //   flag: chall.title,
  //   solves: chall.solves,
  // });
});

router.post('/api/users/challs', (req, res) => {
  const challs = new Challenges(req.body);
  if (res.status(200).json('하이')) {
    challs.save();
  }
  console.log(challs);
});

router.get('/api/users/challs', auth, (req, res) => {
  Challenges.find({}, function (err, cb) {
    if (!err) {
      res.status(200).json(cb);
    } else {
      throw err;
    }
  });
});

module.exports = router;
