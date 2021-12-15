import styles from '../../styles/Batman.module.css';
import Link from 'next/link'
export const getStaticProps = async () => {   //runs at build time as the app is built and components rendered. doesnt run in the browser, only at build time.
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return{
        props:{ batman : data }
       
    }
}
const Batman = ({batman}) => {

    return ( 
        <div>
            <h1 className={styles.title}>All Batfans</h1>
            <Link href={'/batman/id'}>
            <a className={styles.single}>
                        <h3>Clark Kent</h3>
                    </a>
            </Link>
            
            {batman.map(batfan => (
                <Link href={'/batman/' + batfan.id} key={batfan.id}>
                     
                    <a className={styles.single}>
                        <h3> {batfan.name}</h3>
                    </a>
                   
                </Link>
            ))}
        </div>
     );
}
 
export default Batman;