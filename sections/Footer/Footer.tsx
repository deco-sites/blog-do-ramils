import { ImageWidget } from "apps/admin/widgets.ts";

import Image from "apps/website/components/Image.tsx";

export interface Props {
  socialMedias: {
    icon: ImageWidget;
    altText: string;
    title?: string;
    link: string;
  }[];
  myPhoto: {
    myPhotoImage: ImageWidget;
  };
}

export default function Footer({ socialMedias, myPhoto }: Props) {
  return (
    <div className="bg-[#F9F9F9] py-14">
      <div className="mainContainer sm:flex justify-between items-end">
        <div>
          <Image
            className="rounded-[50%]"
            src={myPhoto.myPhotoImage}
            loading="lazy"
            height={67}
            width={67}
            alt="Foto de Ramilson Silva"
          />

          <p className="mt-8 text-base text-[#525252] font-light leading-5">
            Olá, sou o <span className="font-bold">Ramilson</span>.{" "}
            <br />Atuo como Dev FrontEnd<br />e também cuido desse Blog aqui.
          </p>
        </div>

        <div className="pt-9 flex gap-2 sm:gap-4">
          {socialMedias.map((socialMedia) => {
            return (
              <a
                href={socialMedia.link}
                title={socialMedia.title}
                target="_blank"
              >
                <Image
                  src={socialMedia.icon}
                  loading="lazy"
                  height={25}
                  width={25}
                  alt={socialMedia.altText}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
