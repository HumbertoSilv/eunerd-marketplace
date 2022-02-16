import { Router } from "express";
import CreateMarketPlaceListController from "../controller/marketPlaceListController";
import validateSchema from "../middlewares/validateSchema";
import { marketPlaceSchema } from "../middlewares/schemas";


const marketPlacelistRouter = Router();

marketPlacelistRouter.post("/", validateSchema(marketPlaceSchema), (request, response) => {
    const createMarketPlaceList = new CreateMarketPlaceListController();
    createMarketPlaceList.handle(request, response);
});

export default marketPlacelistRouter;