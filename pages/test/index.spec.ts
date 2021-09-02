// Dependencies
import { mount } from '@vue/test-utils';

// Under test
// @ts-ignore
import Home from '@/pages';

describe('Home page', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Home, {
      stubs: {
        EstateList: true,
      }
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
