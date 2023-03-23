import { shopCart, shop } from '@/public/icons'

import {
  main1,
  main2,
  main3,
  main4,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  OtherImgs1,
  OtherImgs2,
  Toster1,
  Toster2,
  LampBlue1,
  LampBlue2,
  PulpUnit1,
  PulpUnit2,
  ModernGold1,
  ModernGold2,
  CleaningOil1,
  CleaningOil2,
  BlackAndWhite1,
  BlackAndWhite2,
  BodyOil1,
  BodyOil2,
  Shelf1,
  Shelf2,
  Vase1,
  Vase2,
  ChairBoom1,
  ChairBoom2,
  BlackLamp1,
  BlackLamp2,
  GoldenLamp1,
  GoldenLamp2,
  Cotton1,
  Cotton2,
  WoodChair1,
  WoodChair2,
  Copenhagen1,
  Copenhagen2,
  Cam1,
  Cam2,
  TableLamp1,
  TableLamp2,
  MatLamp1,
  MatLamp2,
  Comfy1,
  Comfy2,
} from '@/public/img'

export const navlinks = [
  {
    id: 'shop',
    name: 'Shop',
    link: '/categories',
    icon: shop,
  },
  {
    id: 'cart',
    name: 'Cart',
    link: '/cart',
    icon: shopCart,
  },
]

export const categories = [
  {
    id: 1,
    name: 'All',
    link: '/categories',
  },
  {
    id: 2,
    name: 'Furnitures',
    link: '/categories/furnitures',
  },
  {
    id: 3,
    name: 'Electronics',
    link: '/categories/electronics',
  },
  {
    id: 4,
    name: 'Lamps',
    link: '/categories/lamps',
  },
  {
    id: 5,
    name: 'Kitchen',
    link: '/categories/kitchen',
  },
  {
    id: 6,
    name: 'Chairs',
    link: '/categories/chairs',
  },
  {
    id: 7,
    name: 'SkinCare',
    link: '/categories/skincare',
  },
]

export const featured = [
  {
    id: 'img1',
    link: '/categories/furnitures',
    image: main1,
    name: 'Live Comfortably',
    style: 'grid-one',
  },
  {
    id: 'img2',
    link: '/categories/skin-care',
    image: main2,
    name: 'Skincare',
    style: 'grid-two',
  },
  {
    id: 'img3',
    link: '/categories/kitchen',
    image: main3,
    name: 'Kitchen',
    style: 'grid-four',
  },
  {
    id: 'img4',
    link: '/categories/electronics',
    image: main4,
    name: 'Electronics',
    style: 'grid-four-low',
  },
]

export const products = [
  {
    id: 1,
    category: 'chair',
    img: Img1,
    description: 'Little Armchair Sheepskin',
    price: 986,
    otherImgs: [OtherImgs1, OtherImgs2],
    specs:
      'Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.',
    texture: 'Sheep Skin',
    weight: '15kg',
    size: '150cm x 70cm',
  },
  {
    id: 2,
    category: 'kitchen',
    img: Img2,
    description: 'Pop-Up Toaster',
    price: 45,
    otherImgs: [Toster1, Toster2],
    specs:
      ' The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.',
    texture: 'Plastic',
    weight: '3.5kg',
    size: '20xm x 10cm',
  },
  {
    id: 3,
    category: 'lamp',
    img: Img3,
    description: 'Lamp Light Blue',
    price: 79,
    otherImgs: [LampBlue1, LampBlue2],
    specs:
      'The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.',
    texture: 'Plastic',
    weight: '2kg',
    size: '15cm x 15cm',
  },
  {
    id: 4,
    category: 'furniture',
    img: Img4,
    description: 'Pulp Unit - 5 Compartments',
    price: 254,
    otherImgs: [PulpUnit1, PulpUnit2],
    specs:
      'Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside.',
    texture: 'Wood',
    weight: '45kg',
    size: '250cm x 60cm',
  },
  {
    id: 5,
    category: 'lamp',
    img: Img5,
    description: 'Golden Modern Light',
    price: 189,
    otherImgs: [ModernGold1, ModernGold2],
    specs:
      'Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.',
    texture: 'Plastic',
    weight: '3kg',
    size: '20cm x 20cm',
  },
  {
    id: 6,
    category: 'skin-care',
    img: Img6,
    description: 'Body Oil 200ml',
    price: 67,
    otherImgs: [CleaningOil1, CleaningOil2],
    specs:
      'Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water',
    texture: 'Liquid',
    weight: '200ml',
    size: '10cm x 5cm',
  },
  {
    id: 7,
    category: 'lamp',
    img: Img7,
    description: 'Black and White Lamp',
    price: 220,
    otherImgs: [BlackAndWhite1, BlackAndWhite2],
    specs:
      'Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off.',
    texture: 'Plastic',
    weight: '6kg',
    size: '20cm x 20cm',
  },
  {
    id: 8,
    category: 'furniture',
    img: Img8,
    description: 'Gejst Shelf A Black Ash/Black',
    price: 115,
    otherImgs: [Shelf1, Shelf2],
    specs:
      'Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.',
    texture: 'Wood',
    weight: '10kg',
    size: '60cm x 20cm',
  },
  {
    id: 9,
    category: 'furniture',
    img: Img9,
    description: 'Cube Lolo Vase Black',
    price: 161,
    otherImgs: [Vase1, Vase2],
    specs:
      'Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.',
    texture: 'Ceramics',
    weight: '12kg',
    size: '45cm x 15cm',
  },
  {
    id: 10,
    category: 'chair',
    img: Img10,
    description: 'Traditional Armchair',
    price: 89,
    otherImgs: [ChairBoom1, ChairBoom2],
    specs:
      "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
    texture: 'Wood',
    weight: '8kg',
    size: '60cm x 40cm',
  },
  {
    id: 11,
    category: 'lamp',
    img: Img11,
    description: 'The Sun Pendant Black',
    price: 160,
    otherImgs: [BlackLamp1, BlackLamp2],
    specs:
      'The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting . ',
    texture: 'Plastic',
    weight: '4kg',
    size: '20cm x 20cm',
  },
  {
    id: 12,
    category: 'lamp',
    img: Img12,
    description: 'Simple Golden Lamp',
    price: 220,
    otherImgs: [GoldenLamp1, GoldenLamp2],
    specs:
      'Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.',
    texture: 'Plastic',
    weight: '4kg',
    size: '15cm x 15cm',
  },
  {
    id: 13,
    category: 'skin-care',
    img: Img13,
    description: 'Unbleached Cotton Pads 180',
    price: 33,
    otherImgs: [Cotton1, Cotton2],
    specs:
      'Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.',
    texture: 'Cotton',
    weight: '180g',
    size: '20cm x 10cm',
  },
  {
    id: 14,
    category: 'chair',
    img: Img14,
    description: 'Oak Spanish Chair',
    price: 520,
    otherImgs: [WoodChair1, WoodChair2],
    specs:
      'When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.',
    texture: 'Wood',
    weight: '15kg',
    size: '60cm x 30cm',
  },
  {
    id: 15,
    category: 'chair',
    img: Img15,
    description: 'Copenhagen Armchair',
    price: 330,
    otherImgs: [Copenhagen1, Copenhagen2],
    specs:
      'Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs. ',
    texture: 'Wood',
    weight: '14kg',
    size: '65cm x 35cm',
  },
  {
    id: 16,
    category: 'electronic',
    img: Img16,
    description: 'Anti Dark Light',
    price: 120,
    otherImgs: [Cam1, Cam2],
    specs:
      'Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling',
    texture: 'Metal',
    weight: '2kg',
    size: '15cm x 10cm',
  },
  {
    id: 17,
    category: 'lamp',
    img: Img17,
    description: 'Table Lamp',
    price: 75,
    otherImgs: [TableLamp1, TableLamp2],
    specs:
      "The lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
    texture: 'Metal',
    weight: '5kg',
    size: '25cm x 15cm',
  },
  {
    id: 18,
    category: 'lamp',
    img: Img18,
    description: 'Mat Black Lamp',
    price: 175,
    otherImgs: [MatLamp1, MatLamp2],
    specs:
      'Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.',
    texture: 'Metal',
    weight: '6kg',
    size: '20cm x 15cm',
  },
  {
    id: 19,
    category: 'chair',
    img: Img19,
    description: 'Comfy Chair',
    price: 119,
    otherImgs: [Comfy1, Comfy2],
    specs:
      "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
    texture: 'Comfy Material',
    weight: '25kg',
    size: '60cm x 30cm',
  },
  {
    id: 20,
    category: 'skin-care',
    img: Img20,
    description: 'Body Oil 50ml',
    price: 45,
    otherImgs: [BodyOil1, BodyOil2],
    specs:
      'Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.',
    texture: 'Liquid',
    weight: '50ml',
    size: '10cm x 5cm',
  },
]
