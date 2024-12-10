import JWT from 'jsonwebtoken'

const auth = (req, res, next) => {
    let token = req.headers['authorization']
    if (!token) {
        res.send({ status: 401, "Authoriztion": "Unauthorized" })

    }
    const decode = JWT.verify(token, '@#123')
    req.user = decode
    next()

}

export default auth