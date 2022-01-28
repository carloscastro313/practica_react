import Entrada from "../components/entrada";
import Layout from "../components/Layout";

const Blog = ({ entradas }) => {
  console.log(entradas);
  return (
    <div>
      <Layout pagina={"Blog"}>
        <main className="contenedor">
          <h2 className="heading">blog</h2>
          <div>
            {entradas.map((entrada) => (
              <Entrada key={entrada.id} entrada={entrada} />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const url = "http://localhost:1337/blogs";
  const resp = await fetch(url);
  const entradas = await resp.json();

  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
