const jsSHA = require('jssha')
  , jwt = require('jsonwebtoken')
  , msg = require('./msg')
var raw = ''
  , salt = ''

class check {
  
  raw(router) {
    router.use('*', (req, res, next) => {
      var encryptedRaw = req.query.raw 
        , shaObj = new jsSHA('SHA-1', 'TEXT')
      shaObj.update(raw)
      if(shaObj.getHash('HEX') === encryptedRaw) next()
      else res.send({code: msg.checkraw[0], errMsg: msg.checkraw[1], data: {} })
    })
  }

  token(router) {
    router.use('*', (req, res, next) => {
      var token = req.query.token
      jwt.verify(token, salt, (err, decoded) => {
        if (!err) { 
          req.decoded = decoded
          next()
        } else res.send({code: msg.checktoken[0], errMsg: msg.checktoken[1], data: {} })
      })
    })
  }

}

module.exports = check