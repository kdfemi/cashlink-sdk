import { OrderType } from "./orderType";

export interface InitTransaction {
    amount?: number; 
    orderType: OrderType;
    token: string;
}