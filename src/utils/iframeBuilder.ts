import { config } from "../config";

const iFrameBuilder = (src: string, showFrame = true) => {
    const iframe = document.createElement('iframe');
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    iframe.src =  src;
    iframe.style.backgroundColor = 'transparent';
    const modal = document.createElement('div');
    modal.style.position = 'fixed'
    modal.style.left = '0';
    modal.style.right = '0';
    modal.style.top = '0';
    modal.style.bottom = '0';
    modal.style.backgroundColor = 'transparent';
    modal.id = config.modalId;
    modal.appendChild(iframe);

    if(showFrame) {
        const body = document.getElementsByTagName('body')[0];
        body.appendChild(modal);
    }
    return modal;
    
};

export default iFrameBuilder;