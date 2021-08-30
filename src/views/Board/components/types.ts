export type CardType = {
  title: string;
  description?: string;
};

export type ListType = {
  title: string;
  cards: CardType[];
};
