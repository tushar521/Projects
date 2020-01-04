module.exports = {
  login: login
}

function login(req, res) {
 UserService.loginData(req.body, (error, response) => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    res.send('Data Found')
  })
  
}