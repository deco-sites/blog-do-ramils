export interface Props {
  releaseDate: string;
  author: string;
}

export default function ReleaseInfos({ releaseDate, author }: Props) {
  return (
    <div className="pt-4 flex items-center justify-center">
      <p className="text-sm text-[#898888]">{releaseDate}</p>
      <div className="h-[5px] w-[5px] rounded-[50%] bg-[#cac8c8] mx-3" />
      <p className="text-sm text-[#898888] font-extralight">{author}</p>
    </div>
  );
}
