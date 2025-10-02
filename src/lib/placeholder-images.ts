import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imagePath: string; // Changed from imageUrl to imagePath for local images
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
