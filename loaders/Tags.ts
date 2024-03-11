export interface Tag {
  name: string;
  color: string;
}

export interface LoaderTags {
  tags: Tag[];
}

export default function ({ tags }: LoaderTags): Tag[] {
  return tags;
}
