type UserType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type ReviewsType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserType;
}
