import { InitTransaction } from "./interface/initTransaction";
import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

const transact = (props: InitTransaction, isExternal = false) => {
    if(isSSR()) {
        return;
    }
    const {
        amount = 0, 
        orderType, 
        token
    } = props;
    const src =  buildUrl(isExternal ? 'external' : '/', {
        token: token,
        amount: amount,
        orderType: orderType
    });
    iFrameBuilder(src);
    // const iframe = document.createElement('iframe');
    // iframe.height = '100%';
    // iframe.width = '100%';
    // iframe.src =  buildUrl('/', {
    //     token: token,
    //     amount: amount,
    //     orderType: orderType
    // });
    // iframe.style.backgroundColor = 'rgba(0,0,0,0,0)';
    // const modal = document.createElement('div');
    // modal.style.position = 'fixed'
    // modal.style.left = '0';
    // modal.style.right = '0';
    // modal.style.top = '0';
    // modal.style.bottom = '0';
    // modal.style.backgroundColor = 'rgba(0,0,0,0,0)';
    // modal.id = config.modalId;

    // const body = document.getElementsByTagName('body')[0];
    
    // modal.appendChild(iframe);
    // body.appendChild(modal);

}

export default transact;