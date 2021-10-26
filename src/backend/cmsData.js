// import bgHero1Mobile from './cmsAssets/heroes/hero1bgmobile.jpg';
import bgHero1Mobile from './cmsAssets/heroes/hero1bgmobile.webp';
import bgHero2Mobile from './cmsAssets/heroes/hero2bgmobile.webp';
import style1MusicMobile from './cmsAssets/productsStyles/musicStyles/1.webp';
import style2MusicMobile from './cmsAssets/productsStyles/musicStyles/2.webp';
import style3MusicMobile from './cmsAssets/productsStyles/musicStyles/3.webp';
import style4MusicMobile from './cmsAssets/productsStyles/musicStyles/4.webp';
import style1MovieMobile from './cmsAssets/productsStyles/moviesStyles/1.webp';
import style2MovieMobile from './cmsAssets/productsStyles/moviesStyles/2.webp';
import style3MovieMobile from './cmsAssets/productsStyles/moviesStyles/3.webp';
import style4MovieMobile from './cmsAssets/productsStyles/moviesStyles/4.webp';

export const heroData = [
  {
    name: 'hero1',
    bgMobile: bgHero1Mobile,
    bgDesktop: bgHero1Mobile,
  },
  {
    name: 'hero2',
    bgMobile: bgHero2Mobile,
    bgDesktop: bgHero2Mobile,
  },
];

export const products = {
  styles: {
    music: [
      {
        name: 'Style #1',
        img: {
          mobile: style1MusicMobile,
          desktop: style1MusicMobile,
          largeDesktop: style1MusicMobile,
        },
        sizes: [
          { size: 'a5', price: '19.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a2', price: '49.99' },
        ],
      },
      {
        name: 'Style #2',
        img: {
          mobile: style2MusicMobile,
          desktop: style2MusicMobile,
          largeDesktop: style2MusicMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
      {
        name: 'Style #3',
        img: {
          mobile: style3MusicMobile,
          desktop: style3MusicMobile,
          largeDesktop: style3MusicMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
      {
        name: 'Style #4',
        img: {
          mobile: style4MusicMobile,
          desktop: style4MusicMobile,
          largeDesktop: style4MusicMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
    ],
    movies: [
      {
        name: 'Style #1',
        img: {
          mobile: style1MovieMobile,
          desktop: style1MovieMobile,
          largeDesktop: style1MovieMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
      {
        name: 'Style #2',
        img: {
          mobile: style2MovieMobile,
          desktop: style2MovieMobile,
          largeDesktop: style2MovieMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
      {
        name: 'Style #3',
        img: {
          mobile: style3MovieMobile,
          desktop: style3MovieMobile,
          largeDesktop: style3MovieMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
      {
        name: 'Style #4',
        img: {
          mobile: style4MovieMobile,
          desktop: style4MovieMobile,
          largeDesktop: style4MovieMobile,
        },
        sizes: [
          { size: 'a2', price: '49.99' },
          { size: 'a3', price: '39.99' },
          { size: 'a4', price: '29.99' },
          { size: 'a5', price: '19.99' },
        ],
      },
    ],
  },
  posters: [],
};
