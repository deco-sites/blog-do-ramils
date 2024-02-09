export interface Props {
  title: string;
  subTitle: string;
}

export default function Banner({ title, subTitle }: Props) {
  return (
    <div className="w-[100vw]">
      <h1>{title}</h1>
    </div>
  );
}
