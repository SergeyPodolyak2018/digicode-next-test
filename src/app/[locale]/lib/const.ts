export const PATH = {
  dog: 'https://api.thedogapi.com/v1',
  cat: 'https://api.thecatapi.com/v1',
};
export const SUB_PATH = {
  breads: '/breeds',
};

export const LINKS = [
  { name: 'home', href: '/' },
  {
    name: 'all',
    href: '/breed/all',
  },
  { name: 'cats', href: '/breed/cats' },
  { name: 'dogs', href: '/breed/dogs' },
];

export const IMAGES = {
  cat: `${PATH.cat}/images/search`,
  dog: `${PATH.dog}/images/search`,
};
export const LINK_TO_UNIT = {
  cat: '/breed/cats/',
  dog: '/breed/dogs/',
};
export const BREED_FIEDLS = {
  cat: ['name'],
  dog: ['name'],
};

export const UNIT_FIELDS = {
  cat: [
    'name',
    'origin',
    'life_span',
    'adaptability',
    'affection_level',
    'child_friendly',
    'energy_level',
    'grooming',
    'social_needs',
  ],
  dog: [
    'name',
    'origin',
    'life_span',
    'adaptability',
    'affection_level',
    'child_friendly',
    'energy_level',
    'grooming',
    'social_needs',
  ],
};
