var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2023'
const nodemailer = require('nodemailer');
app.use(cors())

const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb'
});


app.post('/register', jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      'INSERT INTO users (email, password, fname, lname) VALUES (?, ?, ?, ?)',
      [req.body.email, hash, req.body.fname, req.body.lname],
      function (err, results, fields) {
        if (err) {
          res.json({ status: 'error', message: err });
        } else {
          res.json({ status: 'ok' });
        }
      }
    );
  });
})

app.post('/login', jsonParser, function (req, res, next) {
  connection.execute(
    'SELECT * FROM users WHERE email=?',
    [req.body.email],
    function (err, users, fields) {
      if (err) { res.json({ status: 'error', message: err }); return }
      if (users.length == 0) { res.json({ status: 'error', message: 'no user found' }); return }
      bcrypt.compare(req.body.password, users[0].password, function (err, isLogin) {
        if (isLogin) {
          var token = jwt.sign({ email: users[0].email, userid: users[0].userid }, secret);
          res.json({ status: 'ok', message: 'login success', token,role:users[0].role })
        } else {
          res.json({ status: 'error', message: 'login failed' })
        }
      });
    }
  );
})


app.post('/authen', jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, secret);
    res.json({ status: 'ok', decoded })
  } catch (err) {
    res.json({ status: 'error', message: err.massage })
  }
})

app.post('/tickets', jsonParser, function (req, res, next) {
  const tickets = req.body.dto
  var decoded = jwt.verify(tickets.token, secret);
  connection.execute(
    'INSERT INTO tickets (userid, stationFrom, stationTo, date, payment, ticketCount, price) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [decoded.userid, tickets.stationFrom, tickets.stationTo, tickets.date, tickets.payment, tickets.ticketCount, tickets.price],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
      } else {
        res.json({ status: 'ok' });
      }
    }
  );
})

app.get('/showtickets', jsonParser, function (req, res, next) {
  var decoded = jwt.verify(req.query.token, secret);
  connection.execute(
    "SELECT stationFrom, stationTo, date_format(date,'%d/%m/%Y') as date, payment, ticketCount, price from tickets where userid=? ",
    [decoded.userid],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
      } else {
        res.json({ status: 'ok', results: results });
      }
    }
  );
})

app.post('/contactus', jsonParser, function (req, res, next) {
  const contactus = req.body
  var decoded = jwt.verify(contactus.token, secret);
  connection.execute(
    'INSERT INTO contactus (userid, name, email, message) VALUES (?, ?, ?, ?)',
    [decoded.userid, contactus.name, contactus.email, contactus.message],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
      } else {
        res.json({ status: 'ok' });
      }
    }
  );
})

function generateResetToken(userName, uniqueId) {
  const timeStamp = Date.now(); // Include a timestamp
  const token = jwt.sign({ userName, uniqueId, timeStamp }, secret, { expiresIn: '24h' });
  return token;
}
// ฟังก์ชันส่ง email
function sendResetEmail(email, token) {
  // หากคลิกลิงค์จะนำทางไปยัง Path อีก
  const resetLink = `http://localhost:3000/resetpassword?token=${token}`;
  const tranSporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "pakkaradakhongtheng@gmail.com",
      pass: "eczg kznv jwoz datu"
    }
  });

  // เนื้อหาภายใน email
  const mailOptions = {
    from: `sender`,
    to: email,
    subject: 'Password Reset',
    html: `
      <br>
      <div>HI! ${email}</div>
      <br>
      <div>You can click this <a href="${resetLink}">link</a> to reset your password </div>
      <div>Please do this request within 24 hours.</div>
      <div>If you don't request a password reset. You don't need to take any action. And you can ignore about this e-mail.</div>
      <br>
      <br>
      `

  };

  tranSporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.post('/forgotpassword', jsonParser, function (req, res, next) {
  const email = req.body.email
  const uniqueId = Math.random().toString(36).substring(7);
  console.log(email)
  connection.execute(
    'SELECT userid from users WHERE email like ?',
    [email],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
      }
      // ถ้า result ไม่เป็น array และน้อยกว่า 0 จะส่ง error กลับไป ในกรณีที่ไม่เจอรหัสพนักงานจากอีเมลล์ที่ถูกส่งมา 
      if (!(Array.isArray(results) && results.length > 0)) {
        console.error('No results or unexpected structure:', results);
        return callBack(new Error('No results or unexpected structure'), null);
      }
      const userResult = results[0].userid;
      const d = new Date();
      console.log(userResult)
      connection.execute(
        'UPDATE forgotpassword set status=? WHERE email like ? and status=?',
        [1, email + '%', 0],
        function (err, result, fields) {
          if (err) {
            res.json({ status: 'error', message: err });
          }
          connection.execute(
            'INSERT INTO forgotpassword (userid, email, date, status, uniqueid ) VALUES (?, ?, ?, ?, ?)',
            [userResult, email, d.toISOString(), 0, uniqueId],
            function (err, results, fields) {
              if (err) {
                res.json({ status: 'error', message: err });
              } else {
                const resetToken = generateResetToken(userResult, uniqueId);
                sendResetEmail(email, resetToken);
                res.json({ status: 'ok' });
              }
            }
          );
        }
      );
    }
  );
})
// ฟังก์ชัน has รหัสผ่านก่อนบันทึกลงสู่ฐานข้อมูล
const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};
// ฟังก์ชันเปรียบเทียบรหัสผ่านปกติและรหัสผ่านที่ hash แล้วว่าตรงกันหรือไม่
const comparePasswords = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}
app.post('/resetpassword', jsonParser, async function (req, res, next) {
  const password = req.body.password;
  const token = req.body.token;

  try {
    const hashedPassword = await hashPassword(password);
    const isPasswordMatch = await comparePasswords(password, hashedPassword);

    if (isPasswordMatch) {
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
          return res.status(401).send('Invalid token');
        }

        const { userName, uniqueId, timeStamp } = decoded;
        console.log(userName);

        try {
          // Correct the parameter to use hashedPassword instead of hashPassword
          await connection.execute(
            'UPDATE users SET password = ? WHERE userid = ?',
            [hashedPassword, userName],
            function (err, results, fields) {
              if (err) {
                res.json({ status: 'error', message: err });
              } else {
                res.json({ status: 'ok' });
              }
            }
          );
        } catch (error) {
          res.json({ status: 'error', message: error.message });
        }
      });
    } else {
      res.json({ status: 'error', message: 'Password does not match' });
    }
  } catch (error) {
    res.json({ status: 'error', message: error.message });
  }
});

app.get('/showinfoadmin', jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT users.fname, users.lname, users.email, tickets.stationFrom, tickets.stationTo, date_format(tickets.Date,'%d/%m/%Y') as date,tickets.payment,tickets.ticketCount,tickets.price from tickets INNER JOIN users ON tickets.userid = users.userid ORDER BY tickets.Date DESC",
    [],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err });
      }
      connection.execute(
        "SELECT name,email,message FROM contactus",
        [],
        function (err, result, fields) {
          if (err) {
            res.json({ status: 'error', message: err });
          } else {
            res.json({ status: 'ok', results: results , result:result });
          }
        }
      );
    }
  );
})


app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})