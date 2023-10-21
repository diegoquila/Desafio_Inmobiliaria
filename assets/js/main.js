const propiedades_venta = [
  {
    nombre: "Casa de descanso. ",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCu-_NNs0_ke2lk7NeGNalQPfvLZKXR1FFA&usqp=CAU",
    descripcion: "Casa de descanso a orillas del lago Panguipulli.",
    ubicacion: "Panguipulli Km 12",
    habitaciones: 6,
    costo: 200000000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Casa de veraneo",
    src: "https://www.farocarranza.cl/wp-content/uploads/2023/01/Casa-en-Pelluhue-en-Venta-con-Vista-al-Mar-sector-Lomas-de-Farr-Drone-11-1200x840.jpg",
    descripcion: "Chonchi Km 6",
    ubicacion:
      "Casa de veraneo, a 6 Km de la ciudad de Chonchi y a 12 Km de la ciudad de Castro",
    habitaciones: 3,
    costo: 150000000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Casa Pucón",
    src: "https://static.wixstatic.com/media/d46f21_3eca7ca7b30a4b5ebf491ccf58799bae~mv2.jpg/v1/fill/w_560,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d46f21_3eca7ca7b30a4b5ebf491ccf58799bae~mv2.jpg",
    descripcion: "Hermosa casa ubicad en plena ciudad de Pucón",
    ubicacion: "Camino Internacional 1064",
    habitaciones: 4,
    costo: 500000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa San Fabián De Alico",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230601/2604302/m_wm_2023060132421712651.jpg",
    descripcion:
      "Hermosa casa ubicadad en la hermosa locacalidad cordillerana de San Fabián de Alico.",
    ubicacion: "Camino al Puente el Inglés Km 25",
    habitaciones: 5,
    costo: 200000000,
    smoke: false,
    pets: true,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Casa Colonial",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhnxUoMWNKrzGL_t9TReWeozaPEPRsHCO9A&usqp=CAU",
    descripcion:
      "Hermosa casa estilo colonial, ubicada en la hermosa localidad de Quilvo",
    ubicacion: "Quilvo S/N Km 5",
    habitaciones: 4,
    costo: 500000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Casa Arquitectónica",
    src: "https://imgs.nestimg.com/arriendo_gran_casa_con_gran_quincho_8870092584701844259.jpg",
    descripcion:
      "Hermosa casa estilo arquitectónico ubicado en plena ciudad de Viña del Mar",
    ubicacion: "San Ignacio del Bosque, 599",
    habitaciones: 2,
    costo: 250000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Casa Playa",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/473015038.jpg?k=27a0d16e70adbf52e210e9e2da010bd87361417ed462ca6607e8d8797933f0e5&o=&hp=1",
    descripcion:
      "Hermosa casa ubicada a orilla de playa en la localidad de Iloca",
    ubicacion: "Calle El Estero S/N Km 5",
    habitaciones: 2,
    costo: 150000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento del Elqui",
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230601/2604302/m_wm_2023060132421712651.jpg",
    descripcion:
      "Hermosa casa ubicada en medio del espectacular Valle del Elqui",
    ubicacion: "El Elqui S/n Km 15",
    habitaciones: 2,
    costo: 200000,
    smoke: false,
    pets: true,
  },
];

function mostrar_propiedades(tipo, propiedades, es_home) {
  console.log(tipo);
  const caja = document.getElementById(tipo);
  console.log(caja);
  let html = "";

  propiedades.forEach((element, index) => {
    if (es_home || index + 1 <= 3) {
      html += `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${element.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${element.nombre}
                </h5>
                <p class="card-text">
                  ${element.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${element.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    element.habitaciones
                  } Habitaciones |
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${element.costo}</p>
                <p class="text-${element.smoke ? "success" : "danger"}">
                  <i class="fas fa-smoking-ban"></i> ${
                    element.smoke ? "Se permite fumar" : "No se permite fumar"
                  }
                </p>
                <p class="text-${element.pets ? "success" : "danger"}">
                  <i class="fa-solid fa-ban"></i> ${
                    element.pets
                      ? "Se permiten mascotas"
                      : "No se permiten mascotas"
                  }
                </p>
              </div>
            </div>
          </div>`;
    }
  });

  console.log(html);
  caja.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  const es_home = document.location.pathname != "/index.html";

  if (document.getElementById("propiedades-venta")) {
    mostrar_propiedades("propiedades-venta", propiedades_venta, es_home);
  }
  if (document.getElementById("propiedades-alquiler")) {
    mostrar_propiedades("propiedades-alquiler", propiedades_alquiler, es_home);
  }
});
