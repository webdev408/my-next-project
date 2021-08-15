import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to my Portfolio</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          cupiditate tempore ex, expedita voluptates, a vitae illum eos odio
          sapiente est aliquam commodi, vel deserunt autem animi eveniet
          architecto eligendi. A saepe iste eos at nemo accusantium aspernatur
          adipisci praesentium. Qui esse minus totam praesentium ullam excepturi
          explicabo nulla similique dolores nam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, unde at? Asperiores, expedita eos autem hic, quibusdam
          facere similique, recusandae quidem delectus adipisci nemo atque nulla
          sint ullam. Odio iure illo similique dignissimos commodi explicabo,
          quod praesentium tempore voluptatibus sapiente ipsa cumque omnis iusto
          officiis obcaecati at eius maiores et aspernatur! Voluptatibus ipsam
          ipsa vitae, doloremque repudiandae sint dolore officia quae tempore.
        </p>
        <Link href="/resources">
          <a className={styles.btn}>See Resource List</a>
        </Link>
      </div>
    </>
  );
}
