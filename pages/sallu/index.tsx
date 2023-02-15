import Head from "next/head";
import Link from "next/link";
import style from "./sallu.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { salman: data },
  };
};

const Sallu = ({ salman }: any) => {
  return (
    <>
      <Head>
        <title>Mr_Sallu || All Data</title>
      </Head>
      <h2>Sallu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        accusantium praesentium architecto, laudantium distinctio odio laborum
        modi quae, cumque earum, placeat est? Dolorum dolorem aliquid excepturi
        asperiores repellat obcaecati pariatur!
      </p>
      {salman.map((item: any, index: number) => {
        return (
          <Link href={`/sallu/${item.id}`} key={index} className={style.single}>
            <h3>{item.id}</h3>
            <br />
            <i>{item.name}</i>
            <br />
            <i>{item.username}</i>
            <br />
            <i>{item.email}</i>
            <br />
            <i style={{ marginBottom: "10px" }}>{item.email}</i>
          </Link>
        );
      })}
    </>
  );
};

export default Sallu;
