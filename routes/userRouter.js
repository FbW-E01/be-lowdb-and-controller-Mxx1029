import express from 'express';
import { usersGet, usersPost, usersPut, usersDelete } from '../controllers/userController.js';
import { usersReqHandler } from '../middlewares/usersReqHandler.js';

const usersRouter = express.Router();

// Add middleware JUST for the user routes
usersRouter.use(usersReqHandler);

usersRouter.get("/", usersGet);
usersRouter.post("/", usersPost);
usersRouter.put("/:id", usersPut);
usersRouter.delete("/:id", usersDelete);

// first try to get something
// userRouter.get("/", (req, res) => { res.send("Users root path"); });
// userRouter.post("/", (req, res) => { res.send("Users root path POST") });
// userRouter.get("/about", (req, res) => { res.send("Users About path") });
// userRouter.get("/details", (req, res, next) => {
//     // Local error handler
//     try {
//         res.send(details);
//     } catch (err) {
//         console.log("Whoops!!!!!!!!!!!!!!!!!!");
//         console.log("Attempted to print details, this sometimes fails!!!!");

//         err.message = "Getting details failed, this just fails sometimes, sowwy";
//         next(err);
//     }
// });

export default usersRouter;