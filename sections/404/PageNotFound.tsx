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
    link?: string;
}

export default function PageNotFound({ title, subTitle, link }: Props) {
    return (
        <div class="mainContainer flex flex-col-reverse py-20">
            <div>
                <img class="mx-auto" src={asset("/image/404.png")} width={400} height={400} />
            </div>

            <div>
                <span class="text-5xl leading-[52px] md:text-6xl" dangerouslySetInnerHTML={{__html: title}} />
                <span class="text-base block pt-3 py-6 font-light md:text-xl" dangerouslySetInnerHTML={{__html: subTitle}} />
            </div>
        </div>
    )
}