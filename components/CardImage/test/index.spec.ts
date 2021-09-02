// Dependencies
import { mount } from '@vue/test-utils';

// Under test
// @ts-ignore
import CardImage from '@/components/CardImage';

describe('CardImage.vue', () => {
  let wrapper: any;
  const images: String[] = ['fake.jpg', 'test.jpg'];

  beforeEach(() => {
    wrapper = mount(CardImage, {
      stubs: {
        'nuxt-img': true,
      },
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should render empty estate', () => {
    expect(wrapper.findAll('img')).toHaveLength(1);
  });

  it('should render card images', async () => {
    await wrapper.setProps({ images });
    expect(wrapper.findAll('div')).toHaveLength(3);
  });
});
