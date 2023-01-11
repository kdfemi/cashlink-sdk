import { OrderType } from "./orderType";

/**
 * Transaction initialization props
 * @interface
 */
export interface InitTransaction {
    [ key: string]: any;
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
    /**
     * Ecosystem
     */
    ecosystem: string
}