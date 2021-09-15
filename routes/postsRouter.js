import express from 'express';
import { postsGet, postsPost, postsPut, postsDelete } from '../controllers/postsController.js';
import { postsReqHandler } from '../middlewares/postsReqHandler.js';

const postsRouter = express.Router();

// Add middleware JUST for the posts routes
postsRouter.use(postsReqHandler);

postsRouter.get("/", postsGet);
postsRouter.post("/", postsPost);
postsRouter.put("/:id", postsPut);
postsRouter.delete("/:id", postsDelete);

export default postsRouter;