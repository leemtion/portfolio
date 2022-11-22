import express from "express";
import {TermsofService, Privacy} from "../controllers/termController.js"
import {home} from "../controllers/termController.js"


const rootRouter = express.Router();


rootRouter.get("/", protectorMiddleware, home);
rootRouter.route("/termsofservice").get(TermsofService);
rootRouter.route("/privacy").get(Privacy);



// rootRouter.get("/search", search);



export default rootRouter;