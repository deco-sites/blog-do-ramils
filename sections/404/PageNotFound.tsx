import { asset } from "$fresh/runtime.ts";

export interface Props {
  /**
   * @format html
   */
  title: string;
  /**
   * @format html
   */
  subTitle: string;
  button?: {
    link: string;
    text: string;
  };
}

export default function PageNotFound({ title, subTitle, button }: Props) {
  return (
    <div class="mainContainer flex flex-col-reverse py-20">
      <div>
        <img
          class="mx-auto"
          src={asset("/image/404.png")}
          width={400}
          height={400}
        />
      </div>

      <div>
        <span
          class="text-5xl leading-[52px] md:text-6xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span
          class="text-base block pt-3 py-6 font-light md:text-xl"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />

        {button
          ? (
            <a
              href={button.link}
              title={button.text}
              class="bg-[#afe2ff] h-8 flex items-center justify-center text-white rounded-sm mx-auto max-w-[300px] font-semibold mb-12 md:mb-20 hover:bg-[#87c8ee]"
            >
              <button>{button.text}</button>
            </a>
          )
          : ""}
      </div>
    </div>
  );
}
