import styles from './NavBar.module.scss'

const NavBar = () => (
  <div className={styles.container}>
    <div className={styles.NavBar}>
      <a href='/'><i className={styles.HomeIcon + ' fa fa-tasks '}></i></a>
      <div className={styles.links}>
        <a href='/' className={styles.link}>Home</a>
        <a href='/about' className={styles.link}>About</a>
        <a href='/favorite' className={styles.link}>Favorite</a>
      </div>
   </div>
   </div>
);

export default NavBar;