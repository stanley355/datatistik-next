import { Metadata } from "next";
import { HeadlineNews } from "./_components";

export const metadata: Metadata = {
  title:
    "datatistik.com - Berita hari ini di Indonesia, terkini dan terpercaya.",
};

export default function News() {
  return (
    <div>
      hai
      <HeadlineNews />
    </div>
  );
}
