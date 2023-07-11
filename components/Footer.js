import styles from '../app/page.module.css'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerBlock}>
        <h3>Costumer Care</h3>
        <ul>
          <Link href="" style={{display:'block'}}>Contact Us</Link>
          <Link href="" style={{display:'block'}}>Shipping</Link>
          <Link href="" style={{display:'block'}}>Order Status</Link>
          <Link href=""style={{display:'block'}}>Return Policy</Link>
          <Link href="" style={{display:'block'}}>FAQ</Link>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>Brand Ambassador</h3>
        <ul>
          <Link href="" style={{display:'block'}}>Do you have what it takes?</Link>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>What people say about us?</h3>
        <ul>
          <Link href="" style={{display:'block'}}>Reviews</Link>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h3>Where we at?</h3>
        <ul>
          <Link href="" style={{display:'block'}}>237 W 42nd St, New York, NY 10036</Link>
        </ul>
      </div>
      <div className={styles.footerBlock}>
      <h3>Be the first to know</h3>
        <div className={styles.emailForm}>
          <label></label>
          <input type='email' placeholder='Enter your email'/>
          <button type='button' >Subscribe</button>
        </div>
        <ul>
          <Link href="" style={{display:'block'}}>Facebook</Link>
          <Link href="" style={{display:'block'}}>Instagram</Link>
          <Link href="" style={{display:'block'}}>Twitter</Link>
          <Link href="" style={{display:'block'}}>TikTok</Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer