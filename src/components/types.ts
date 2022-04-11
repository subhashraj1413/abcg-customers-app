import { ReactNode } from "react";

export type CardType = {
    title: string;
    date: number;
    imgUrl: string;
    content?: ReactNode
  };
  