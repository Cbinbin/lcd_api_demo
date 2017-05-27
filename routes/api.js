const router = require('express').Router()

router.get('/', (req, res)=> {
  res.send({
    api: 'http://localhost:2000'
  })
})

module.exports = router