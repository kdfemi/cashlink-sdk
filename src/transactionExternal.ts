import { ExternInitTransaction } from "./interface/externInitTransaction";
import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

const transactExternal = (props: ExternInitTransaction) => {
    if(isSSR()) {
        return;
    }
    const {
        token,
        chatToken,
        requestId
    } = props;

    const src =  buildUrl('external/:token/:requestId/:extChatToken', {
        token: token,
        extChatToken: chatToken,
        requestId
    });
    iFrameBuilder(src);
}

export default transactExternal;