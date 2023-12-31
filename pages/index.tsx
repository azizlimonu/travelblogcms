import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sanityClient, urlFor } from '../sanity';
import { Post } from "../typing";

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts);

  return (
    <div>
      <Head>
        <title>Travel Blog | Explore All Over The World</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}
        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto py-20 px-4">Posts will go here</div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}


export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  author -> {
    name,
    image
  },
    description,
   mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts
    }
  }
};