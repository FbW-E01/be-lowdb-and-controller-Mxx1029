export const usersReqHandler = (req, res, next) => {
    console.log(" [UsersRoute] " + req.method + " " + req.url);
    next();
}