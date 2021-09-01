// Interfaces
import { IRealEstatesResponse, IRealEstates } from './interfaces';

const BASE_URL ='https://lh-real-estates-challenge-api.herokuapp.com/real-estates';

class RealEstatesService {
  private collectionMapper(response: IRealEstatesResponse): IRealEstates[] {
    const { data, included } = response;
    const mappedColection: IRealEstates[] = data.map((item) => {
      const { id, attributes } = item;
      const { name, real_estate_ids: realEstateIds } = attributes;
      const covers: String[] = included
        .filter(({ id }) => realEstateIds.includes(+id))
        .map(({ attributes: { gallery_urls: galleryUrls } }) => galleryUrls[0])

      return {
        id,
        name,
        covers
      }
    });

    return mappedColection;
  }

  public async getCollectionList(): Promise<IRealEstates[]> {
    const response: Response = await fetch(BASE_URL);
    const formattedResponse: IRealEstatesResponse = await response.json();
    return this.collectionMapper(formattedResponse);
  }
}

export default new RealEstatesService();
