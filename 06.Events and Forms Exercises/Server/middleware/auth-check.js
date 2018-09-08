const jwt = require('jsonwebtoken')
const usersData = require('../data/users')

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }

  const token = req.headers.authorization.split(' ')[1]

  return jwt.verify(token, 's0m3 r4nd0m str1ng', (err, decoded) => {

    if (err) { return res.status(401).end() }

    const userId = decoded.sub

    const user = usersData.findById(userId)
    if (!user) {
      return res.status(401).end()
    }

    req.user = user

    return next()
  })
}
