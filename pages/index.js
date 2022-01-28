import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout pagina={"inicio"}>
        <h1 className="heading">Inicio</h1>
      </Layout>
    </div>
  );
}
