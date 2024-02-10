export interface Props {
  titleH1: string;
}

export default function Title({ titleH1 }: Props) {
  return (
    <div className="pt-8">
      <h1 className="text-3xl sm:text-4xl text-left sm:text-center xl:text-4xl">
        {titleH1}
      </h1>
    </div>
  );
}
