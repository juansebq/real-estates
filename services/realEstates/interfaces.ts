interface IRealEstatesDataAttributes {
  name: string;
  'real_estate_ids': number[];
}

interface IRealEstatesData {
  id: string;
  attributes: IRealEstatesDataAttributes;
}

interface IRealEstateDetailAttributes {
  'gallery_urls': Array<String>
}

interface IRealEstateDetail {
  id: string,
  attributes: IRealEstateDetailAttributes
}

export interface IRealEstatesResponse {
 data: IRealEstatesData[],
 included: IRealEstateDetail[]
}

export interface IRealEstates {
  id: string,
  name: string,
  covers: Array<String>
 }
