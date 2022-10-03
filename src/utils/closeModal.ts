import { config} from "../config";

export const closeModal =  () => {
    const modal = document.getElementById(config.modalId)
    if(modal) {
        modal.remove();
    }
}