import init from './int';
import profile from './profile';
import transact from './transaction';
import demo from './demo';
import transactExternal from './transactionExternal';

const methods = {
    init: init,
    transact: transact,
    transactExternal: transactExternal,
    profile: profile,
}

if(process.env.CASH_LINK_DEMO === 'Y') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    methods.demo = demo
}

export default methods;