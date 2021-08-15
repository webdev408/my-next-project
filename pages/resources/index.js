import styles from "../../styles/resources.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { resources: data },
  };
};

const Skills = ({ resources }) => {
  return (
    <div>
      <h1>All Tech Skills</h1>
      {resources.map((resource) => (
        <Link href={"/resources/" + resource.id} key={resource.id}>
          <a className={styles.single}>
            <h3>{resource.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Skills;
