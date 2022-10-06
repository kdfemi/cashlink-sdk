import { config } from "../config";

/**
 * 
 * @param src iframe url
 * @param showFrame if the iframe should be immediately appended to the body
 * @returns {HTMLDivElement} the iframe popup element
 */
const iFrameBuilder = (src: string, showFrame = true) => {
    const iframe = document.createElement('iframe');
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    iframe.src =  src;
    iframe.style.backgroundColor = 'transparent';
    const modal = document.createElement('div');
    modal.style.position = 'fixed'
    modal.style.zIndex = '99999999'
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
        const div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || 
              document.getElementsByTagName('script')[0];
              div.innerHTML = '&shy;<style> iframe { visibility: hidden; } </style>';

            ref.parentNode?.insertBefore(div, ref);

        
        /*
            2. When window loads, remove that CSS, 
            making iframe visible again
        */
        
        iframe.onload = function() {
            div.parentNode?.removeChild(div);
        }
    }
    return modal;
    
};

export default iFrameBuilder;