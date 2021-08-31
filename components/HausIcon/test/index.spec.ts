// Dependencies
import { mount } from '@vue/test-utils';

// Under test
// @ts-ignore
import HausIcon from '@/components/HausIcon';

describe('HausIcon.vue', () => {
  let wrapper: any;
  const propsData = {
    iconName: 'fake',
    customIconStyle: 'test class',
  };

  beforeEach(() => {
    wrapper = mount(HausIcon, { propsData });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should concat icon name with custom styles', () => {
    const iconClasses = wrapper.find('span').classes().join(' ');
    const result = `icon-${propsData.iconName} ${propsData.customIconStyle}`;

    expect(iconClasses).toEqual(result);
  });

  it('should not show badge', async () => {
    await wrapper.setProps({ hasBadge: false });
    expect(wrapper.findAll('span')).toHaveLength(1);
  });
});
