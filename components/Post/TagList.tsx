import type { Tag } from "$store/loaders/Tags.ts";

export interface Props {
  allTags: Tag[];
  tags: string[] | undefined;
}

export default function TagList({ tags, allTags }: Props) {
  if (tags) {
    return (
      <div class="flex gap-2 items-center md:justify-center font-semibold">
        {tags.map((tag) => {
          const filtered = allTags.filter((loaderTag) => loaderTag.name == tag);
          return (
            <a
              href="#"
              class={`px-2 py-1 bg-[#64DEE5] text-white mt-4 rounded-sm text-sm`}
              style={`background-color: ${filtered[0].color}`}
            >
              {tag}
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
