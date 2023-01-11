import { ExternInitTransaction } from "./interface/externInitTransaction";
import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

/**
 * Initiate Transaction has a 3rd party
 * @param props External transaction request body
 * @returns 
 */
const transactExternal = (props: ExternInitTransaction) => {
    if(isSSR()) {
        return;
    }
    const {
        token,
        chatToken,
        orderId,
        ecosystem,
        ...params
    } = props;

    const src =  buildUrl('external/:token/:orderId/:extChatToken', {
        token: token,
        extChatToken: chatToken,
        orderId,
        ecosystem: ecosystem,
        ...params
    });
    iFrameBuilder(src);
}

export default transactExternal;