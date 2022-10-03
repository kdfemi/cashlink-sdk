import { config } from "./config";
import { InitTransaction } from "./interface/initTransaction";
import { isSSR } from "./utils";
import { buildUrl } from "./utils/queryBuilder";

const transact = (props: InitTransaction) => {
    if(isSSR()) {
        return;
    }
    const {
        amount = 0, 
        orderType, 
        token
    } = props;
    const iframe = document.createElement('iframe');
    iframe.height = '100%';
    iframe.width = '100%';
    iframe.src =  buildUrl('/demo', {
        token: token,
        amount: amount,
        orderType: orderType
    });
    iframe.style.backgroundColor = 'rgba(0,0,0,0,0)';
    const modal = document.createElement('div');
    modal.style.position = 'fixed'
    modal.style.left = '0';
    modal.style.right = '0';
    modal.style.top = '0';
    modal.style.bottom = '0';
    modal.style.backgroundColor = 'rgba(0,0,0,0,0)';
    modal.id = config.modalId;

    const body = document.getElementsByTagName('body')[0];
    
    modal.appendChild(iframe);
    body.appendChild(modal);

}

export default transact;