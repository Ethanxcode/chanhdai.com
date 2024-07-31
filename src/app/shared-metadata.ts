import { USER } from "@/containers/profile/constants";

export const APP_INFO = {
  baseURL: "https://chanhdai.com",
  title: `${USER.fullName}`,
  description:
    "I am passionate about software creativity. I am currently working at Simplamo, Quaric, and ZaDark.",
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, chanhdai, chanh dai, iamncdai, quaric, zadark, nguyễn chánh đại, chánh đại",
};

export const openGraphImage = {
  images: [
    {
      url: "/images/meta-image.jpeg",
      width: 1200,
      height: 630,
      alt: `${USER.fullName}'s cover image`,
    },
  ],
};
