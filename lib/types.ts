export type Book = {
  id: string;
  title: string;
  author: string;
  highlightsCount: number;
  highlights: Highlight[];
  createdAt: Date;
};

export type Highlight = {
  text: string;
  createdAt: Date;
};
