import { config } from "./config";
import { isSSR } from "./utils";
import { closeModal } from "./utils/closeModal";

let cashLinkInit = false;

/**
 * Method called before any other method, it get's the Cashlink popup ready
 * @param isDev if should show Cashlink dev environment
 * @returns {Boolean} if Widget initialization was successful
 */
const init = (isDev = false) => {
    if(!isSSR()) {
        if(cashLinkInit) {
            window.removeEventListener('message', onMessageHandler)
            window.removeEventListener('popstate', onPopStateHandler)
        }
        cashLinkInit = true;
    
        window.addEventListener('message', onMessageHandler, false)
        window.addEventListener('popstate', onPopStateHandler, false)
    }
    if(isDev) {
        localStorage.setItem('CASH_LINK_ENV', 'dev')
    } else {
        localStorage.setItem('CASH_LINK_ENV', 'prod')
    }
    return cashLinkInit;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onMessageHandler = (e: MessageEvent<any>) => {
    if(e.data === config.closeEvent) {
        window.removeEventListener('popstate', onPopStateHandler);
        closeModal();
    }
};

const onPopStateHandler = (_e: PopStateEvent) => {
    if(document.getElementById(config.modalId)) {
        history.go(1);
    }
    // if(e.data === config.closeEvent) {
    //     closeModal();
    // }
};

export default init;