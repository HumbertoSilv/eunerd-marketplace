import { Router } from "express";
import CreateMarketPlaceListController from "../controller/marketPlaceListController";

const marketPlacelistRouter = Router();

marketPlacelistRouter.post("/", (request, response) => {
    const createMarketPlaceList = new CreateMarketPlaceListController();
    createMarketPlaceList.handle(request, response);
});

export default marketPlacelistRouter;