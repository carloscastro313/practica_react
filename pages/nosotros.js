import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import imagenNosotros from "../public/img/nosotros.jpg";
import styles from "../styles/Nosotros.module.css";
const Nosotros = () => {
  return (
    <div>
      <Layout pagina={"Nosotros"}>
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image
              src={imagenNosotros}
              width={600}
              height={450}
              alt="Guitarra"
              layout="responsive"
            />
            <div className={styles.parrafo}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ornare augue id tellus tempor mollis. Etiam ullamcorper eros
                vitae porttitor suscipit. Curabitur a interdum enim, eget mollis
                elit. Donec gravida varius lectus, ut hendrerit lectus congue
                at. Proin elementum metus at ullamcorper posuere. Praesent
                efficitur elit mollis dolor bibendum, blandit ornare quam
                auctor. Aenean posuere pulvinar nunc. Quisque ac tortor non
                lectus tincidunt ornare sit amet nec justo. In fringilla, est
                vel varius mollis, nulla augue lobortis est, malesuada cursus
                nibh mauris faucibus nulla. Curabitur sit amet velit quis turpis
                pellentesque euismod. Donec mauris enim, aliquam vel metus
                lacinia, laoreet imperdiet risus. Praesent ultricies lacus eget
                velit sollicitudin cursus. Fusce condimentum auctor semper.
                Phasellus id arcu et quam mollis pellentesque et ac ex. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Curabitur nec luctus quam. Fusce in
                sagittis nisi. Nam laoreet risus facilisis, rutrum nisl vel,
                laoreet ante. Phasellus iaculis sapien a sem suscipit
                scelerisque a mollis turpis. Curabitur congue mi ac tellus
                varius volutpat vestibulum sed libero. Proin sit amet augue
                enim. Sed nibh nisi, lacinia eu pretium quis, ultricies quis
                arcu.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Nosotros;
