import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Image alt='batman logo'src='/batman.png' width={128} height={77} />
            </div>
            <div className='links'>
            <Link href='/'><a>Home</a></Link> 
            <Link href='/about'><a>About</a></Link> 
            <Link href='/batman'><a>Batfans List</a></Link> 
            </div>
                 
        </nav>
    )
}

export default Navbar
