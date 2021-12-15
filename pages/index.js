import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Batman List | Home</title>
      <meta name='keywords' content ='batman' />
    </Head>

    <div className="">
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit optio autem perferendis laudantium molestiae molestias, ad, praesentium repudiandae explicabo earum laborum ratione natus perspiciatis nam in quam quidem debitis nemo.</p>
      <Link href='/batman'>
      <a className={styles.btn}>
        See Batman fans list
      </a>
      </Link>
    </div>
    </>
  )
}
