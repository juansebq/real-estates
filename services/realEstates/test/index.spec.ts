// Dependencies
import fetchMock from 'jest-fetch-mock';

// Under test
import realEstatesService from '../index';

describe('RealEstatesService', () => {
  const estate = {
    id: 'fakeid',
    attributes: {
      name: 'Test Apto',
      real_estate_ids: [1],
    },
  };
  const includedDetail = {
    id: '1',
    attributes: {
      gallery_urls: ['photo.jpg'],
    },
  };
  const response = {
    data: [estate],
    included: [includedDetail],
  };
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify(response));
  });

  it('should get collection list', async () => {
    const list = await realEstatesService.getCollectionList();
    const { id, attributes: { name } } = estate;
    const { attributes: { gallery_urls: covers } } = includedDetail;

    expect(list).toEqual([{ id, name, covers }])
  });
});
