export interface IBeerModel {
    id: number;
    name: string;
    description: string;
    image_url: string;
  }

  export interface IBeerModelRequest {
    page: number;
    per_page: number;
  }

  export interface IStateBeersTypes {
    beers: IBeerModel[];
    loading: boolean;
    error?: string;
    currentPage: number
}

export interface IStateTypes {
  Beers: IStateBeersTypes
}