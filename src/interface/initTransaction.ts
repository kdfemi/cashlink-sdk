import { OrderType } from "./orderType.enum";

export interface InitTransaction {
    amount?: number; 
    orderType: OrderType;
    token: string;
}