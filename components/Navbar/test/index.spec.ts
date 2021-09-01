// Dependencies
import { mount } from '@vue/test-utils';

// Under test
// @ts-ignore
import Navbar from '@/components/Navbar';

// Mocks
jest.mock('@/components/HausIcon');

describe('HausIcon.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Navbar, {
      stubs: {
        NuxtLink: true,
        HausIcon: true
      }
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should render menu items correctly', () => {
    expect(wrapper.findAll('li')).toHaveLength(4);
  });
});
