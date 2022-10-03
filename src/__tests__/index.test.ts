import CashlinkSdk from '../index';

describe('Test sdk index', (): void => {
  test('open', (): void => {
    expect(CashlinkSdk).toMatchSnapshot();
  });

});