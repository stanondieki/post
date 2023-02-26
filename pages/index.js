import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../global/styles/utils.module.css';

export default function Home() 
{
  return (
    
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>
    <section className={utilStyles.headingMd}>
      <p>Am Stanley, follow my media handles to reach me out.  </p>
      <p>
        This is a sample next website - I'll build another site like this on {''}
        <a href='https://nextjs.org/learn'> Next.js </a>
      </p>
    </section>
    </Layout>

  )
}
