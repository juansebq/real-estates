// Dependencies
import { mount } from '@vue/test-utils';

// Under test
// @ts-ignore
import NewListOption from '@/components/NewListOption';

describe('NewListOption.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(NewListOption, {
      stubs: {
        HausIcon: true
      }
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should render correctly', () => {
    expect(wrapper.findAll('div')).toHaveLength(2);
    expect(wrapper.findAll('p')).toHaveLength(1);

  });
});
