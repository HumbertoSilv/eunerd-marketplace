import { EntityRepository, Repository } from "typeorm";
import MarketPlaceItem from "../models/marketPlaceItemModel";

@EntityRepository(MarketPlaceItem)
export default class MarketPlaceItemRepository extends Repository<MarketPlaceItem> {};