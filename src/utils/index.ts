import { MarketPlaceItem } from "../types";
/**
* Receive an Array of type MarketPlaceItem[] and sort first by category and then expiration date.
*/
export const sortMarketPlace = (marketPlaceList: MarketPlaceItem[]) => {  
    marketPlaceList.sort((a, b) => {
        if(a.category > b.category) return -1
        return 0;

    }).sort((a, b): any => {
        let x = new Date(a.expiresAt),
            y = new Date(b.expiresAt);
        return x > y;

    });
};