export const metadata = {
  title: "반낭코 - Bannangco",
  description: "반낭코 공식 홈페이지",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import PastServices from "@/components/past-services";
import Announcements from "@/components/announcements";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <PastServices />
      <Features />
      <Announcements />
    </>
  );
}
