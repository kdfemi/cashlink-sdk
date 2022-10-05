import { config} from "../config";

/**
 * @ignore
 * Close Cashlink popup
 */
export const closeModal =  () => {
    const modal = document.getElementById(config.modalId)
    if(modal) {
        modal.remove();
    }
}