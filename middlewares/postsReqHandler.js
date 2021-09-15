export const postsReqHandler = (req, res, next) => {
    console.log(" [PostsRoute] " + req.method + " " + req.url);
    next();
};