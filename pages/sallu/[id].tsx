export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((item: any) => {
    return {
      params: { id: item.id + "" },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  console.log({ data });
  return {
    props: { response: data },
  };
};

const Detail = ({ response }: any) => {
  return (
    <div>
      <h1>Detail Page </h1>
      <h3>{response.id}</h3>
      <h3>{response.name}</h3>
      <br />
      <i>{response.name}</i>
      <br />
      <i>{response.username}</i>
      <br />
      <i>{response.email}</i>
    </div>
  );
};

export default Detail;
