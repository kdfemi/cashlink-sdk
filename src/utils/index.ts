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

/**
 * Get highest and lowest zIndex
 * @returns {Promise<number[]>} return [highestZIndex, lowestZIndex]
 */
export const zIndexRange = () => {
    const promise = new Promise<Array<number>>((resolve, reject) => {
        try {
            let highestZ = 0;
            let lowestZ = 0;
            let oneFound = false;
            const divs = document.getElementsByTagName('*');
        
            if( ! divs.length ) { 
                return resolve([highestZ,lowestZ]); 
            }
        
            for( let i = 0; i < divs.length; i ++ ) {
                const hTMLElement = divs[i] as HTMLElement;
                if( hTMLElement?.style?.position && hTMLElement?.style?.zIndex ) {
                    if( ! oneFound ) { 
                        highestZ = lowestZ = parseInt(hTMLElement?.style?.zIndex);
                        oneFound = true;
                    }
                    else {
                        const ii = parseInt(hTMLElement?.style?.zIndex);
                        if( ii > highestZ ) { highestZ = ii; }
                        if( ii < lowestZ ) { lowestZ = ii; }
                    }
                }
            }
            return resolve([highestZ,lowestZ]);
        } catch (err) {
            reject(err);
        }
    });
    
    return promise;
}


