import { OrderType } from "./orderType";

/**
 * Transaction initialization props
 * @interface
 */
export interface InitTransaction {
    /**
     * Order amount
     */
    amount?: number;
    /**
     * Order type
     */ 
    orderType: OrderType;
    /**
     * Authentication token
     */
    token: string;
}