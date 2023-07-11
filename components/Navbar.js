import Link from "next/link"
import Image from "next/image"
import styles from '../app/page.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'


const Navbar = () => {
  return ( 
      <nav className={styles.navContainer}>
            <div className={styles.topNavContainer}>
                  {/* add the logo  */}
                  {/* <Image
                  href="/"
                  width={50}
                  height={50}
                  alt="logo"
                  /> */}
                  <h1>USEME</h1>
            </div>
            <ul className={styles.topNavLinks}>
                  <Link href="/"><AiOutlineUser color="#000" size={28}/></Link>
                  <Link href="/"><AiOutlineSearch color="#000" size={28}/></Link>
                  <Link href="/"><BsBag color="#000" size={28}/></Link>
            </ul>
       </nav>
  )
}

export default Navbar