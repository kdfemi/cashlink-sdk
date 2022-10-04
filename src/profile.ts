import { InitTransaction } from "./interface/initTransaction";
import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

const profile = (props: InitTransaction) => {
    if(isSSR()) {
        return;
    }
    const {
        token
    } = props;
    const src =  buildUrl('/', {
        token: token,
    });
    iFrameBuilder(src);
}

export default profile;