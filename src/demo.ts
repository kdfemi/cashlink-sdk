import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

const demo = (isExternal = false) => {
    if(isSSR()) {
        return;
    }
    const src =  buildUrl(isExternal ? 'external/demo' : '/demo');

    iFrameBuilder(src);
}

export default demo;