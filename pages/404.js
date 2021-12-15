import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter(); // router.go, router.push
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
   return ( 
        <div className="not-found">
            <h1> Ooops...</h1>
            <Image className='image' src="/spider-man-shocked.gif" alt="spiderman shocked gif" />
            <h2>That page can not be found</h2>
            
            <p>Go back to the <Link href='/'> 
                 <a>Homepage </a>
                 </Link>
                 </p>
        </div>
     );
}
 
export default NotFound;