/**
 * Check if method is called in a browser
 * @returns {Boolean} if called on browser
 */
export const isSSR = () => {
    if(typeof window === 'undefined') {
       return true;
    } else {
        return false;
    }
}