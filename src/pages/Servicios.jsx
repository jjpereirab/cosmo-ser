import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

const frentes = [
  {
    icon: "fa-solid fa-seedling",
    title: "Huertas",
    text: "Es el corazón de nuestro trabajo: sembramos huertas en cualquier espacio —un balcón, un patio, un colegio o un terreno— e integramos la recolección de aguas lluvias, el compostaje y el lombricultivo para cerrar un ciclo que cuida la tierra y a quienes la habitan.",
  },
  {
    icon: "fa-solid fa-bugs",
    title: "Apicultura",
    text: "Protegemos a las abejas instalando apiarios en Bogotá y en sectores urbanos y rurales, acompañamos su cuidado y disfrutamos, en comunidad, de la miel que nos regalan.",
  },
  {
    icon: "fa-solid fa-tree",
    title: "Restauración ecológica",
    text: "Combinamos la siembra de especies forestales con frutales para restaurar suelos y paisajes, y devolverle a la ciudad sombra, flores y alimento.",
  },
  {
    icon: "fa-solid fa-chalkboard-user",
    title: "Aprendizaje y acompañamiento",
    text: "Impartimos talleres y acompañamos a instituciones, fundaciones y organizaciones que quieran sumarse a la ruralización de lo humano, para que estos saberes se multipliquen en comunidad.",
  },
];

function Servicios() {
  usePageTitle("Servicios | Cosmo ser");

  return (
    <>
      <section id="servicios" className="page-hero">
        <p className="eyebrow">Trabajo que brota en comunidad</p>
        <h1 className="page-title">Lo que cultivamos juntos</h1>
        <p className="page-lead">
          Somos un grupo de personas que impulsa prácticas y saberes
          alternativos en torno a la agricultura urbana: de los saberes
          campesinos que aún viven en la memoria nacen huertas, abejas, árboles
          y aprendizajes compartidos.
        </p>
      </section>


      <section className="video" aria-labelledby="video-title">
        <header className="section-head">
          <p className="eyebrow">Nuestra historia</p>
          <h2 id="video-title" className="section-title">
            ¿De dónde nace CosmoSer?
          </h2>
          <p className="section-sub">
            Hace años venimos pensando en la necesidad de recuperar saberes
            campesinos que se están perdiendo —las semillas, el abono, el
            suelo, las abejas y las flores— para mejorar el entorno que
            habitamos. Este video cuenta esa historia.
          </p>
        </header>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/QWczc6G-Tgk"
            title="Así nace CosmoSer — Ruralicemos lo humano"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>


      <section className="works" aria-labelledby="frentes-title">
        <header className="section-head">
          <p className="eyebrow">Nuestros frentes de trabajo</p>
          <h2 id="frentes-title" className="section-title">
            Manos que siembran, cuidan y enseñan
          </h2>
          <p className="section-sub">
            Si algo puede germinar, germinará: solo hace falta crear las
            condiciones y acompañar el camino.
          </p>
        </header>
        <ul className="works-grid">
          {frentes.map((frente) => (
            <li className="work-card" key={frente.title}>
              <i className={`work-icon ${frente.icon}`} aria-hidden="true"></i>
              <h3>{frente.title}</h3>
              <p>{frente.text}</p>
            </li>
          ))}
        </ul>
      </section>


      <section className="vision" aria-labelledby="vision-title">
        <p className="eyebrow">Nuestra visión</p>
        <h2 id="vision-title" className="section-title">
          Una visión que se camina en colectivo
        </h2>
        <p className="vision-text">
          Creemos que la ruralización de lo humano sucede cuando muchas manos
          se juntan. Queremos que estas prácticas de cuidado se expandan como
          las raíces de un buen árbol y que cada vez más personas encuentren en
          la tierra un motivo para sembrar.
        </p>
        <div className="vision-actions">
          <Link to="/#contacto" className="btn btn-primary">
            ¿Quieres sumarte?
          </Link>
          <Link to="/#inicio" className="btn btn-outline">
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}

export default Servicios;