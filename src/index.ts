import init from './int';
import profile from './profile';
import transact from './transaction';
import demo from './demo';

const methods = {
    init: init,
    transact: transact,
    profile: profile,
}

if(process.env.CASH_LINK_DEMO === 'Y') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    methods.demo = demo
}

export default methods;