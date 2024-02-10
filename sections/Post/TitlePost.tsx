export interface Props {
  titlePost: string;
}

export default function Title({ titlePost }: Props) {
  return (
    <div className="pt-8">
      <h1 className="text-3xl sm:text-4xl text-left sm:text-center xl:text-4xl">
        {titlePost}
      </h1>
    </div>
  );
}
