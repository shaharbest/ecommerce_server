module.exports = (req, res, next) => {
    if (req.query.admin !== 'true')
        return res.sendStatus(401);

    next();
};