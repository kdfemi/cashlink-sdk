import { isSSR } from "../utils";


/**
 * @ignore
 * App configuration
 */
export const config = {
    /**
     * Link to prod
     * @type {String}
     */
    url: process.env.CASH_LINK_URL,
    /**
     * Link to staging
     * @type {String}
     */
    staging_url: process.env.CASH_LINK_URL_STAGING,
    /**
     * Html ```id``` attribute for the displayed modal
     * @type {String}
     */
    modalId: 'cash_link_modal',
    /**
     * the iframe parent url
     * @type {String} 
     */
    origin: isSSR() ? '' : window.location.origin,
    /**
     * Event emitted by cashlink to the parent 
     * @type {String}
     */
    closeEvent: 'cash_link_close'
}