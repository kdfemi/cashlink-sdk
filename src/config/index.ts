import { isSSR } from "../utils";



export const config = {
    // TODO: change
    url: 'http://localhost:3002/v2',
    modalId: 'cahslink_modal',
    origin: isSSR() ? '' : window.location.origin,
    closeEvent: 'caslink-close'
}