import { config } from "./config";
import { isSSR } from "./utils";
import { closeModal } from "./utils/closeModal";

let cashLinkInit = false;

const init = (isDev = false) => {
    if(!isSSR()) {
        if(cashLinkInit) {
            window.removeEventListener('message', onMessageHandler)
        }
        cashLinkInit = true;
    
        window.addEventListener('message', onMessageHandler, false)
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
        closeModal();
    }
};

export default init;