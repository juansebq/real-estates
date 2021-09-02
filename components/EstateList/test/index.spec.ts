// Dependencies
import { shallowMount } from '@vue/test-utils';

// Services
import realEstatesService from '~/services/realEstates';

// Under test
// @ts-ignore
import EstateList from '@/components/EstateList';

describe('EstateList.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    jest.spyOn(realEstatesService, 'getCollectionList').mockResolvedValue([]);
    wrapper = shallowMount(EstateList, {
      stubs: {
        EstateInfo: true,
        NewListOption: true
      }
    });
  });

  it('should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('should get collection list', async () => {
    await EstateList.options.fetch.call(wrapper.vm);
    expect(realEstatesService.getCollectionList).toHaveBeenCalled();
  })
});
