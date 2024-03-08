export interface Props {
  tags: string[] | undefined;
}

export default function TagList({ tags }: Props) {
  if (tags) {
    return (
      <div class="flex gap-2 items-center md:justify-center font-semibold">
        {tags.map((tag) => {
          return (
            <a
              href="#"
              class="px-2 py-1 bg-[#64DEE5] text-white mt-4 rounded-sm text-sm"
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
