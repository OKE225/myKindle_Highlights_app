declare module "@sole/kindle-clippings-parser" {
  export type KindleClipping = {
    title: string;
    highlights: { text: string; metadata: string }[];
  };

  export function parse(input: string): KindleClipping[];
}

