export type Link = {
  name: string;
  url: string;
  description?: string;
};

declare module "#app" {
  interface NuxtPageMeta {
    title?: string;
    description?: string;
  }
}
