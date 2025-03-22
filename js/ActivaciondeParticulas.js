particlesJS( 
    {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  } 
)

document.addEventListener("scroll", function () {
  // Obtener la altura de la ventana del navegador
  const windowHeight = window.innerHeight;

  // Variables que controlan el porcentaje de desvanecimiento
  const startFadePercentage = 20; // Porcentaje en que el texto comienza a volverse visible (20%)
  const fullOpacityPercentage = 100; // Porcentaje donde el texto será completamente opaco (50%)

  // Convertir los porcentajes en píxeles
  const startFadePx = (startFadePercentage / 100) * windowHeight;
  const fullOpacityPx = (fullOpacityPercentage / 100) * windowHeight;

  // Variable que controla el rango de desvanecimiento
  const fadeRangeFactor = 5.0; // Ajusta este valor para cambiar el rango (puedes poner 2, 1.8, etc.)

  // Seleccionar todos los elementos que deseas ajustar la opacidad
  const elements = document.querySelectorAll('.contenido-descripcion, .seccion');

  elements.forEach(element => {
      // Obtener la posición del elemento relativo a la ventana
      const elementRect = element.getBoundingClientRect();
      const elementCenter = (elementRect.top + elementRect.bottom) / 2;

      // Calcular la distancia del centro del elemento al centro de la ventana con el factor de rango
      const distanceToCenter = Math.abs(windowHeight / fadeRangeFactor - elementCenter);

      // Si el elemento está dentro del rango de desvanecimiento
      if (elementRect.top >= startFadePx && elementRect.top <= fullOpacityPx) {
          // Calcular el progreso de desvanecimiento de forma proporcional
          const progress = (elementRect.top - startFadePx) / (fullOpacityPx - startFadePx);

          // Invertir el progreso para que cuanto más cerca esté del centro, más opaco sea
          const opacity = 1 - progress; // De 0 (comienza a aparecer) a 1 (totalmente opaco)
          element.style.opacity = opacity;
      } else if (elementRect.top < startFadePx) {
          // Si el elemento ya pasó el punto de inicio, es completamente visible
          element.style.opacity = 1;
      } else {
          // Si el elemento aún no ha alcanzado el punto de inicio, es completamente invisible
          element.style.opacity = 0;
      }

      // Calcular la opacidad en función de la distancia al centro para hacer el desvanecimiento más suave
      const maxDistance = windowHeight / .50; // Distancia máxima para la transición completa
      const additionalOpacity = 1 - (distanceToCenter / maxDistance);

      // Aplicar el valor de opacidad ajustado con el fadeRangeFactor
      element.style.opacity = Math.max(Math.min(element.style.opacity, additionalOpacity), 0);
  });
});






