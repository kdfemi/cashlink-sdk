import { IProfile } from "./interface/iprofile";
import { isSSR } from "./utils";
import iFrameBuilder from "./utils/iframeBuilder";
import { buildUrl } from "./utils/queryBuilder";

/**
 * Open Cashlink Profile
 * @param {IProfile} props profile request body
 * @returns {Void}
 */
const profile = (props: IProfile) => {
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