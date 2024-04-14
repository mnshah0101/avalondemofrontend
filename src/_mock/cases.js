import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Citizens United v. FEC',
  'Fairfax County v. Leach-lewis',
  'USA v. Antun Lewis',
  'Goss v. Lopez',
  'People v. Wright',
  'P. v McDaniel',
  'Mieles v. Ronald McDonald House',
];

const POST_URLS = [
  'https://upload.wikimedia.org/wikipedia/commons/f/f3/Seal_of_the_United_States_Supreme_Court.svg',
  'https://irp.cdn-website.com/31dae137/dms3rep/multi/Color.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Seal_of_the_Supreme_Court_of_Ohio.svg/640px-Seal_of_the_Supreme_Court_of_Ohio.svg.png',
  'https://pbs.twimg.com/media/FtD3TzPacAER6C8.png',
  'https://pbs.twimg.com/media/FtD3TzPacAER6C8.png',
  'https://upload.wikimedia.org/wikipedia/commons/3/3f/New_York_Unified_Court_System_seal.svg',
];

export const posts = [...Array(POST_URLS.length)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: POST_URLS[index],
  title: POST_TITLES[index],
  favorite: faker.number.int(99999),
}));
