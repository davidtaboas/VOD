import { schema } from 'normalizr';

const metadataSchema = new schema.Entity(
  'metadata',
  {},
  { idAttribute: 'name' }
);

const contentSchema = new schema.Entity('contents');

const parentalRatingSchema = new schema.Entity(
  'parentalRatings',
  {},
  { idAttribute: 'scheme' }
);

// const imageSchema = new schema.Entity('images');

const categorySchema = new schema.Entity('categories');

const movieSchema = new schema.Entity('movies', {
  metadata: [metadataSchema],
  contents: [contentSchema],
  parentalRatings: [parentalRatingSchema],
  // images: [imageSchema], // has no sense at this time for one image for cover
  categories: [categorySchema]
});

export const movieListSchema = new schema.Object({
  entries: [movieSchema]
});
