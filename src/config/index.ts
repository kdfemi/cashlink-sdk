import { isSSR } from "../utils";



export const config = {
    url: process.env.CASH_LINK_URL,
    staging_url: process.env.CASH_LINK_URL_STAGING,
    modalId: 'cash_link_modal',
    origin: isSSR() ? '' : window.location.origin,
    closeEvent: 'cash_link_close'
}