import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <p className={styles.paragraph}>Lorem Ipsum</p>
    </div>
  );
};

  export default About;