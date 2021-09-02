// Dependencies
import { mount } from '@vue/test-utils';

// Interfaces
import { IRealEstates } from '~/services/realEstates/interfaces';

// Under test
// @ts-ignore
import EstateInfo from '@/components/EstateInfo';

describe('EstateInfo.vue', () => {
  let wrapper: any;
  const estate: IRealEstates = {
    id: 'fakeid',
    name: 'testing estate',
    covers: ['test.jpg'],
  };

  beforeEach(() => {
    wrapper = mount(EstateInfo, {
      stubs: {
        CardImage: true,
      },
      propsData: { estate }
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should render correctly', () => {
    expect(wrapper.findAll('p')).toHaveLength(2);
    expect(wrapper.find('p').text()).toEqual(estate.name);
  });
});
