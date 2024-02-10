export interface Props {
  releaseDate: Date;
  author: string;
}

export default function ReleaseInfos({ releaseDate, author }: Props) {
  /*
    function formatDate(date) {
        let dateSplitted = date.split('-');

        let day = dateSplitted[2].split('T')[0];
        let month = dateSplitted[1];
        let year =  dateSplitted[0];

        return `${day}/${month}/${year}`
    }
    */

  return (
    <div className="pt-4 flex items-center justify-center">
      <p className="text-sm text-[#898888]">{releaseDate}</p>
      <div className="h-[5px] w-[5px] rounded-[50%] bg-[#cac8c8] mx-3" />
      <p className="text-sm text-[#898888] font-extralight">{author}</p>
    </div>
  );
}
