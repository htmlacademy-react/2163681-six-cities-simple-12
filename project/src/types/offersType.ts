type HostTypeMocks = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type CityLocationTypeMocks = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityTypeMocks = {
  // latitude: number;
  location: CityLocationTypeMocks;
  name: string;
}

export type OffersType = {
  bedrooms: number;
  city: CityTypeMocks;
  description: string;
  goods: string[];
  host: HostTypeMocks;
  id: number;
  images: string[];
  isPremium: boolean;
  location: CityLocationTypeMocks;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

