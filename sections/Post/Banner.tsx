import { ImageWidget } from "apps/admin/widgets.ts";

import Image from "apps/website/components/Image.tsx";

export interface Props {
  bannerImage: {
    image: ImageWidget;
    altText?: string;
  };
}

export default function Banner({ bannerImage }: Props) {
  return (
    <div>
      <Image
        className="w-[100%] h-[100%] rounded object-top object-cover block"
        alt={bannerImage.altText ? bannerImage.altText : ""}
        src={bannerImage.image}
        loading="eager"
        width={960}
        height={480}
      />
    </div>
  );
}
