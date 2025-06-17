
# DocYa

## Resumen del Proyecto

DocYa es una aplicación móvil desarrollada con Ionic y Angular, orientada a facilitar la gestión de salud de pacientes y cuidadores. En esta primera entrega se implementa el 50% del contenido de la app, permitiendo la navegación entre perfiles de usuario, acceso a información médica relevante, visualización de medicinas y video-consultas, así como la gestión de alertas.

---

## Componentes Nuevos Utilizados

En cumplimiento de la pauta, se incorporaron y usaron correctamente dos componentes nuevos de Ionic:

- **ion-badge**: Utilizado en la página de Video Consulta para mostrar el estado de la conexión.
- **ion-chip**: Agregado en Video Consulta para destacar la opción de "Ayuda" junto al nombre del doctor.

Ambos componentes se integraron en la interfaz para mejorar la experiencia visual y la interacción del usuario.

---

## Estructura y Funcionalidades Principales

- **Home**: Pantalla de bienvenida donde el usuario elige si es paciente o cuidador, con opciones de registro y login social.
- **Paciente**: Panel principal con accesos directos a video-consulta, medicinas, doctor y citas, además de un botón de emergencia.
- **Mis Medicinas**: Visualización de la próxima medicina, historial de medicinas del día y estado (pendiente, tomado, perdido).
- **Video Consulta**: Interfaz para videollamada, con indicadores de conexión y controles de llamada.
- **Cuidador**: Panel para el cuidador, mostrando datos vitales del paciente y acceso a alertas.
- **Alertas**: Historial y configuración de alertas importantes para el paciente/cuidador.
- **Calendario**: Agenda para guardar eventos del cuidador.

---

## ¿Cómo se enfrentó el desarrollo?

- Se planificó la estructura de rutas y módulos, agregando nuevas páginas y componentes.
- Se integraron los componentes nuevos (`ion-badge` y `ion-chip`) en la página de Video Consulta.
- Se priorizó cumplir con el 50% del contenido total de la app, asegurando navegación funcional y pantallas clave.

---

## Problemas enfrentados y soluciones

- **Pérdida de archivos:** Por un problema de sincronización de iCloud con Windows, perdí todos los trabajos de este semestre y solo pude rescatar las imágenes. Este inconveniente me ayudó a comprender mejor los problemas que impedían generar nuevas páginas. Al comenzar nuevamente, descubrí que si eliminaba algunos de los archivos generados automáticamente (.ts) y cambiaba de `loadChildren` a `loadComponent`, además de importar `NavController` para declarar los constructores necesarios para redireccionar cada página, podía solucionar los errores y avanzar con el desarrollo.
- **Navegación entre páginas:** Se resolvió utilizando el sistema de rutas de Angular y el servicio `NavController`.
- **Visualización de estados de medicinas:** Se implementaron iconos y estilos personalizados para cada estado.
- **Gestión de componentes nuevos:** Se revisó la documentación oficial de Ionic para integrar correctamente `ion-badge` y `ion-chip`.

---