import { ImageWidget } from "apps/admin/widgets.ts";

import Image from "apps/website/components/Image.tsx";

export interface Props {
    image: {
        url: ImageWidget;
        alt: string;
        title?: string;
    };
}

export default function Header({image}: Props) {
    return (
        <header className={`border-b-2 border-[#F9F9F9]`}>
            <div className={'mainContainerHome py-4'}>
                <Image className={'homeIcon'} alt={image.alt} src={image.url} loading='eager' width={40} height={40} title={image.title ? image.title : ''} />
            </div>
        </header>
    )
}