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

router.post('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    solved: req.user.solved,
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

// router.post('/api/users/chall', (req, res) => {
//   const chall = new Challenge(req.body);

//   chall.save((err, uesrInfo) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).json({ success: true });
//   });
// });

router.post('/api/users/challs', auth, (req, res) => {
  const challs = new Challenges(req.body);
  if (res.status(200).json({ success: true })) {
    challs.save();
  }
  // console.log(challs);
});

router.get('/api/users/challs', auth, (req, res) => {
  const challs = new Challenges(req.body);
  // console.log(challs);
  // Challenges.find((v) => v.id);
  // const todo = challs.find((todo) => todo.id == req.params.id);
  Challenges.find(
    {},
    'title category description point solves',

    function (err, cb) {
      if (!err) {
        res.status(200).send(cb);
      } else {
        throw err;
      }
    }
  );
});

router.patch('/api/users/challs/:_id', (req, res) => {
  Challenges.findOneAndUpdate(
    { _id: req.params._id },
    { isSolved: 1 },
    function (err, cb) {
      if (!err) {
        res.status(200).json({ isSolved: true });
      } else {
        res.send('실패스');
      }
    }
  );
});

router.post(`/api/users/submit/:_id`, auth, (req, res) => {
  let challId = req.body.solved; // challId 문제번호
  Challenges.find({}, 'id solves flag', function (err, cb) {
    const filtering = cb.filter((v) => challId.includes(v._id));
    if (!err) {
      if (filtering) {
        if (filtering[0].flag === req.body.flag) {
          console.log('정답');
          User.findOneAndUpdate(
            { _id: req.params._id },
            { $push: { solved: challId } },
            function (err, cb) {
              res.status(200).json({ success: true });
              // console.log(cb);
            }
          );
        } else {
          res.send({ success: false });
        }
      } else {
        console.log('false');
      }
    } else {
      throw err;
    }
  });
});

// User.findOneAndUpdate(
//   { _id: req.params._id },
//   { $push: { solved: challId } }, // 유저에게 challId값 push
//   function (err, cb) {
//     if (!err) {
//       res.status(200).json('ads');
//     } else {
//       throw err;
//     }
//   }
//   );

module.exports = router;
