import Cover from "@/components/mainPage/cover";
import FeedBacks from "@/components/mainPage/feedBacks";
import Services from "@/components/mainPage/services";
import Work from "@/components/mainPage/work";
import Layout from "@/styles/layout";

export default function IndexPage() {
  return (
    <Layout >
      <Cover />
      <Work />
      <Services />
      <FeedBacks />
    </Layout>
  );
}