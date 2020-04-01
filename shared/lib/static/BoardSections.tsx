import { IBoardSection } from "../types/BoardSection";
import { IBoardCredentials } from "../types/BoardCredentials";
import BoardName from "../types/BoardName";
import * as R from "ramda";

export const japaneseCultureSection: IBoardSection = {
  name: "j a p a n e s e",
  boardList: [
    { name: "a n i m e", link: "/a", shortName: BoardName.a },
    { name: "t e c h", link: "/g", shortName: BoardName.g },
    { name: "f o o d", link: "/ck", shortName: BoardName.ck },
  ]
};

export const techSection: IBoardSection = {
  name: "i n t e r e s t s",
  boardList: [
    { name: "m a n g o", link: "/m", shortName: BoardName.m },
    { name: "h i s t o r y", link: "/his", shortName: BoardName.his },
    { name: "a r t w o r k", link: "/aw", shortName: BoardName.aw }
  ]
};

export const miscSection: IBoardSection = {
  name: "c r e a t i v e",
  boardList: [
    { name: "c o s p l a y", link: "/c", shortName: BoardName.c },
    { name: "v i d y a", link: "/vg", shortName: BoardName.vg },
    { name: "m u s i c", link: "/mu", shortName: BoardName.mu }
  ]
};

// export const anotherSection: IBoardSection = {
//     name: "a n o t h e r",
//     boardList: [
//       { name: "m e c h a", link: "/mech", shortName: BoardName.mech },
//       { name: "m a t h", link: "/sci", shortName: BoardName.sci },
//       { name: "d e s i g n", link: "/d", shortName: BoardName.d }
//     ]
// };

export const allSections: IBoardSection[] = [japaneseCultureSection, techSection, miscSection];
export const allBoards: IBoardCredentials[] = R.flatten(allSections.map(x => x.boardList));