import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import ParagraphOne from '@/components/Content/ParagraphOne';
import { para1 } from '@/constants/paragraphOne';

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container mx-auto">
        <ParagraphOne para={para1} />
      </div>
    </>
  );
}
