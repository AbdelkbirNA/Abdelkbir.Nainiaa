"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  InstapaperShareButton,
  InstapaperIcon,
} from "react-share";

interface SocialShareProps {
  url: string;
  title: string;
  tags?: string[];
}

export default function SocialShare({ url, title, tags }: SocialShareProps) {
  return (
    <div className="flex gap-4 my-8">
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <InstapaperShareButton url={url} title={title}>
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
    </div>
  );
}
