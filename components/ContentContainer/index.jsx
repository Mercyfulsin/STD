import TopNavigation from '../TopNavigation';
import Footer from '../Footer';
import Head from 'next/head';

const ContentContainer = ({tnText, title, content}) => {
  return (
    <div className='content-container'>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopNavigation title={tnText}/>
      <div className='content-list'>
        {content}
      </div>
      <Footer />
    </div>
  );
};

export default ContentContainer;
