const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { Challenge } = require('../models/Challenge');
const { Challenges } = require('../models/Challenges');
const { auth } = require('../middleware/auth');
const { json } = require('express');
const path = require('path');
const csrf = require('csurf');

const csrfProtection = csrf({
  cookie: { key: 'visitor', httpOnly: true, secure: true },
});
function getCurrentDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var today = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();
  return new Date(
    Date.UTC(year, month, today, hours, minutes, seconds, milliseconds)
  );
}

router.get('/api/token', csrfProtection, function (req, res) {
  let token = req.csrfToken();
  res.json(token);
});

router.post('/api/users/register', csrfProtection, function (req, res) {
  const user = new User(req.body);

  user.save((err, uesrInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post('/api/users/login', csrfProtection, function (req, res) {
  User.findOneAndUpdate(
    { email: req.body.email },
    { last_logged: getCurrentDate() },
    (err, user) => {
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: '이메일 없음',
        });
      }

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: '비밀번호 매치 안됨',
          });
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res
            .cookie('x_auth', user.token, {
              httpOnly: true,
              secure: true,
            })
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      });
    }
  );
});

router.post('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    seq: req.user.seq,
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    solved: req.user.solved,
    totalPoint: req.user.totalPoint,
    last_updated: req.user.last_updated,
    last_logged: req.user.last_logged,
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

router.post('/api/users/challs', auth, csrfProtection, (req, res) => {
  const challs = new Challenges(req.body);
  if (res.status(200).json({ success: true })) {
    challs.save();
  }
});

router.get('/api/users/challs', auth, (req, res) => {
  const challs = new Challenges(req.body);
  Challenges.find(
    {},
    'title category description point solves file link',

    function (err, cb) {
      if (!err) {
        res.status(200).send(cb);
      } else {
        throw err;
      }
    }
  );
});

router.patch('/api/users/challs/:_id', auth, (req, res) => {
  Challenges.findOneAndUpdate(
    { _id: req.params._id },
    { isSolved: 1 },
    function (err, cb) {
      if (!err) {
        res.status(200).json({ isSolved: true });
      } else {
        res.send('failed');
      }
    }
  );
});

router.post(`/api/users/submit/:_id`, auth, (req, res) => {
  let challId = req.body.solved; // challId 문제번호
  Challenges.find({}, '_id solves flag point', function (err, cb) {
    const filtering = cb.filter((v) => challId.includes(v._id));

    if (!err) {
      if (filtering) {
        if (filtering[0].flag === req.body.flag) {
          console.log('정답');
          User.findOneAndUpdate(
            { _id: req.params._id },
            {
              last_updated: getCurrentDate(),
              upsert: true,
              $push: { solved: challId },
              $inc: {
                totalPoint: filtering[0].point,
              },
            },
            function (err, cb) {
              res.status(200).json({ success: true });
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

router.post('/api/users/list', auth, (req, res) => {
  User.find(
    {},
    '_id name totalPoint last_updated',
    { sort: { totalPoint: -1, last_updated: 1 } },
    function (err, cb) {
      res.status(200).json(cb);
    }
  );
});

router.post('/api/users/logged', auth, (req, res) => {
  User.find(
    {},
    '_id name totalPoint last_updated last_logged',
    { sort: { last_logged: -1 } },
    function (err, cb) {
      res.status(200).json(cb);
    }
  );
});

router.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

module.exports = router;
