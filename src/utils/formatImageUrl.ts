export type ImageSize =
  | "w45"
  | "w92"
  | "w154"
  | "w185"
  | "w300"
  | "w342"
  | "w500"
  | "w780"
  | "w1280"
  | "original";

export interface Configuration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: ImageSize[];
    logo_sizes: ImageSize[];
    poster_sizes: ImageSize[];
    profile_sizes: ImageSize[];
    still_sizes: ImageSize[];
  };
}

export const formatImageUrl = (
  imagePath?: string | null,
  configuration?: Configuration,
  size: ImageSize = "w185",
): string | undefined => {
  if (!imagePath || !configuration) return undefined;
  return `${configuration.images.base_url}${size}${imagePath}`;
};
