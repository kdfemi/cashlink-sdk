import { config} from "../config";

/**
 * @ignore
 * Close Cashlink popup
 */
export const closeModal =  () => {
    const modal = document.getElementById(config.modalId)
    if(modal) {
        const body = document.getElementsByTagName('body')[0];
        if(body.dataset.chashLinkOverride) {
            body.style.overflow = body.dataset.chashLinkOverride;
        } else {
            body.style.overflow = ''
        }
        const event = new CustomEvent(config.closeEvent, { bubbles: true });
        window.dispatchEvent(event);
        modal.remove();
    
       
    }
}