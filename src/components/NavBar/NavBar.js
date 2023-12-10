import styles from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => (
  <div className={styles.container}>
    <div className={styles.NavBar}>
      <Link to='/'><i className={styles.HomeIcon + ' fa fa-tasks '}></i></Link>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Home</NavLink>
        <NavLink to="/favorite" className={(({ isActive }) => isActive ? styles.linkActive : undefined)}>Favorite</NavLink>
        <NavLink to="/about" className={(({ isActive }) => isActive ? styles.linkActive : undefined)}>About</NavLink>
      </div>
   </div>
   </div>
);

export default NavBar;
