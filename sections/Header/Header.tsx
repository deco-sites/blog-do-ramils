import { ImageWidget } from "apps/admin/widgets.ts";

import Image from "apps/website/components/Image.tsx";

export interface Props {
  image: {
    url: ImageWidget;
    alt: string;
    title?: string;
  };
  isHomeHeader?: boolean;
}

export default function Header({ image, isHomeHeader }: Props) {
  return (
    <header
      className={`border-b-2 ${
        isHomeHeader ? "border-[#000]" : "border-[#F9F9F9]"
      }`}
    >
      <div className={"mainContainerHome py-4"}>
        <a
          href="/"
          title={image.title ? image.title : "Ir para Página Inicial"}
        >
          <Image
            className={"IconHouse"}
            alt={image.alt}
            src={image.url}
            loading="eager"
            width={40}
            height={40}
          />
        </a>
      </div>
    </header>
  );
}
