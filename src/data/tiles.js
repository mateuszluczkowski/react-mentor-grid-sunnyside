import transformPicture from "assets/img/desktop/image-transform.jpg";
import standOutPicture from "assets/img/desktop/image-stand-out.jpg";
import graphicDesignPicture from "assets/img/desktop/image-graphic-design.jpg";
import photographyPicture from "assets/img/desktop/image-photography.jpg";

import transformPictureMobile from "assets/img/mobile/image-transform.jpg";
import standOutPictureMobile from "assets/img/mobile/image-stand-out.jpg";
import graphicDesignPictureMobile from "assets/img/mobile/image-graphic-design.jpg";
import photographyPictureMobile from "assets/img/mobile/image-photography.jpg";

export const backgroundTiles = [
   {},
   { desktop: transformPicture, mobile: transformPictureMobile },
   { desktop: standOutPicture, mobile: standOutPictureMobile },
   {},
   { desktop: graphicDesignPicture, mobile: graphicDesignPictureMobile },
   { desktop: photographyPicture, mobile: photographyPictureMobile },
];

export const tiles = [
   {
      id: 1,
      grid: "tile1",
      backgroundIndex: 0,
      text: {
         title: "Transform your brand",
         text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
         button: "Learn more",
      },
   },
   {
      id: 2,
      grid: "tile2",
      backgroundIndex: 1,
      text: {
         title: "",
         text: "",
         button: "",
      },
   },
   {
      id: 3,
      grid: "tile3",
      backgroundIndex: 2,
      text: {
         title: "",
         text: "",
         button: "",
      },
   },
   {
      id: 4,
      grid: "tile4",
      backgroundIndex: 3,
      text: {
         title: "Stand out to the right audience",
         text: "Using a collaborative formula of designers, researchres, photographers, videograpgers, and copywriters, we'll build and extend your brand in digital places.",
         button: "Learn more",
      },
   },
   {
      id: 5,
      grid: "tile5",
      backgroundIndex: 4,
      text: {
         title: "Graphic Design",
         text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.",
         button: "",
      },
   },
   {
      id: 6,
      grid: "tile6",
      backgroundIndex: 5,
      text: {
         title: "Photography",
         text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
         button: "",
      },
   },
];
