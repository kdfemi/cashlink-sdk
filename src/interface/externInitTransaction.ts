/**
 * External transaction initialization props
 * @interface
 */
export interface ExternInitTransaction {
    [ key: string]: any;
    /**
     * Authentication token from Cashlink
     */
    token: string;
    /**
     * The id of the order the user created
     */
    orderId: string;
    /**
     * Token required for user to able to chat with merchant
     */
    chatToken: string;
    /**
     * Ecosystem
     */
    ecosystem: string
}