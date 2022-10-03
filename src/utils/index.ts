export const isSSR = () => {
    if(typeof window === 'undefined') {
       return true;
    } else {
        return false;
    }
}