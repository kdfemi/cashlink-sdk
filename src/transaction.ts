import { InitTransaction } from "./interface/initTransaction";
import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

/**
 * Start transaction
 * @param {InitTransaction} props Transaction request body
 * @returns {Void}
 */
const transact = (props: InitTransaction) => {
    if(isSSR()) {
        return;
    }
    const {
        amount = 0, 
        orderType, 
        token
    } = props;
    const src =  buildUrl('/', {
        token: token,
        amount: amount,
        orderType: orderType
    });
    iFrameBuilder(src);
}

export default transact;