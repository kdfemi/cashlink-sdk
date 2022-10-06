import { config } from "../config";

/**
 * 
 * @param src iframe url
 * @param showFrame if the iframe should be immediately appended to the body
 * @returns {HTMLDivElement} the iframe popup element
 */
const iFrameBuilder = (src: string, showFrame = true) => {
    const iframe = document.createElement('iframe');
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div id="${config.loaderId}" style="position:absolute ; display: flex; justify-content: center; align-items: center; width: 100%; top: 0; left:0; height: 100%;">
            <div style="background-color: white; height: 240px; width: 240px; display: flex; justify-content: center; align-items: center; border-radius: 8px">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation: rotate 2s infinite;">
                    <path d="M42.3873 4.05543C30.4886 7.80562 20.0955 15.252 12.7181 25.3127C5.34069 35.3734 1.36325 47.5243 1.36365 60C1.36365 92.3836 27.6164 118.636 60 118.636C86.8555 118.636 110.084 100.432 116.752 74.8036C117.025 73.7533 116.87 72.6375 116.321 71.7015C115.772 70.7655 114.873 70.0861 113.823 69.8127C112.772 69.5393 111.657 69.6943 110.721 70.2436C109.785 70.7929 109.105 71.6915 108.832 72.7418C103.099 94.7863 83.1082 110.455 60 110.455C32.1355 110.455 9.54547 87.8645 9.54547 60C9.54547 37.8082 24 18.4172 44.8418 11.8636C45.8773 11.5381 46.741 10.8146 47.243 9.85231C47.745 8.89 47.8441 7.76767 47.5186 6.73224C47.1931 5.69682 46.4697 4.8331 45.5074 4.3311C44.545 3.8291 43.4227 3.72993 42.3873 4.05543Z" fill="#60269E"/>
                </svg>
            </div>
        </div>`;
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
    modal.insertBefore(loader, iframe);
    if(showFrame) {
        const body = document.getElementsByTagName('body')[0];
        body.appendChild(modal);
        const div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || 
              document.getElementsByTagName('script')[0];
              div.innerHTML = `&shy;<style> 
                iframe { visibility: hidden; }
                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                      }
                    
                    100% {
                        transform: rotate(360deg);
                    }
                }
                </style>
            `;

            ref.parentNode?.insertBefore(div, ref);

        
        /*
            2. When window loads, remove that CSS, 
            making iframe visible again
        */
        
        iframe.onload = function() {
            div.parentNode?.removeChild(div);
            loader.remove();
        }
    }
    return modal;
    
};

export default iFrameBuilder;