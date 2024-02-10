import Image from "apps/website/components/Image.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  image: ImageWidget;
  altText?: string;
}

export default function Banner({ image, altText }: Props) {
  return (
    <div>
      <Image
        className="w-[100%] h-[100%] rounded object-top object-cover block"
        alt={altText ? altText : ""}
        src={image}
        loading="eager"
        width={960}
        height={480}
      />
    </div>
  );
}
