# DocYa

## Resumen del Proyecto

DocYa es una aplicación móvil desarrollada con Ionic y Angular, orientada a facilitar la gestión de salud de pacientes y cuidadores.

A lo largo de dos etapas, se implementaron y mejoraron funcionalidades clave, cumpliendo con los requisitos de la asignatura y asegurando una navegación fluida, gestión de información médica y visualización de citas y alertas.

---

## Etapa 1: Primera Entrega (50% de la App)

### Funcionalidades Implementadas

- **Home**: Selección de perfil (paciente/cuidador), registro y login social.
- **Paciente**: Panel principal con accesos a video-consulta, medicinas, doctor, citas y botón de emergencia.
- **Mis Medicinas**: Visualización de próximas medicinas, historial y estado.
- **Video Consulta**: Videollamada, indicadores de conexión y controles.
- **Cuidador**: Panel con datos vitales y acceso a alertas.
- **Alertas**: Historial y configuración para paciente/cuidador.
- **Calendario**: Agenda para eventos del cuidador.

### Componentes Nuevos Utilizados

- **ion-badge**: Estado de conexión en Video Consulta.
- **ion-chip**: Opción de "Ayuda" junto al nombre del doctor.

### Problemas enfrentados y soluciones

- **Pérdida de archivos**: Por problemas de sincronización, debí rehacer parte del trabajo, lo que me permitió comprender mejor la estructura y solucionar errores previos.
- **Navegación**: Uso de rutas de Angular y `NavController`.
- **Visualización de estados**: Iconos y estilos personalizados en medicinas.
- **Gestión de componentes nuevos**: Integración correcta revisando la documentación oficial de Ionic.

---


## Etapa 2: Segunda Entrega (100% y APK)

### Mejoras y Nuevas Funcionalidades

- **Página Mi Doctor**: Implementada para mostrar información relevante del médico tratante.
- **Página Mis Citas**: Ahora lista todas las citas del usuario (médico, enfermera, farmacia). Se eliminó la foto del médico y se adaptó la interfaz para mostrar solo información relevante.
- **Estructura HTML revisada**: Corrección de errores de cierre de etiquetas y mejor organización del código.
- **Generalización de la gestión de citas**: Se creó una interfaz genérica para distintos tipos de citas, no solo médicas.
- **Integración de navegación**: Barra de navegación mejorada para acceso rápido a Home, Agenda, Alertas y Ajustes.
- **Botón de Emergencia con enlace telefónico**:  
  Se implementó un botón de emergencia en el panel del paciente, que permite realizar una llamada directa al número de emergencia configurado (por ejemplo, +56966693501).
  - **Ubicación del código**: `src/app/pages/paciente/paciente.page.ts`
  - **Plugin utilizado**: `@awesome-cordova-plugins/call-number`
  - **Funcionamiento**: Al presionar el botón, la app invoca el método `callNumber.callNumber()`, realizando la llamada telefónica. El número es modificable según necesidad.
  - **Nota**: El botón fue probado y funciona correctamente en la aplicación, siempre que el dispositivo tenga permisos para llamadas y el plugin esté correctamente instalado y sincronizado.

---

### Componentes nuevos utilizados

- **IonCard**: Para mostrar el resumen de alertas y cada cita en Mis Citas.
- **IonChip**: Para identificar visualmente el estado de las alertas.
- **IonList e IonItem**: Para listas interactivas de alertas y agrupación de tarjetas de citas.
- **IonButton**: Para acciones rápidas como marcar alertas o volver al inicio.
- **IonLabel**: Para mostrar información clara en las tarjetas de citas.
- **Notificaciones locales**: Para enviar recordatorios automáticos de alertas y eventos importantes.

---

#### Notificaciones locales en la página de Alertas

- **Funcionalidad:**  
  En la página de Alertas, la aplicación utiliza notificaciones locales para recordar al usuario sobre eventos importantes o alertas configuradas. Cuando se agenda una alerta, la app programa una notificación que se mostrará en el dispositivo, incluso si la aplicación está en segundo plano (dependiendo de los permisos y configuración del dispositivo).

- **Permisos requeridos:**  
  Al instalar la app, es posible que se solicite al usuario el permiso para mostrar notificaciones. Es importante aceptar este permiso para que las alertas funcionen correctamente.  
  *(En Android 13 o superior, el sistema pedirá el permiso automáticamente. En versiones anteriores, las notificaciones funcionan sin pedir permiso explícito.)*

- **Plugin utilizado:**  
  Se utilizó el plugin `@capacitor/local-notifications` para gestionar la programación y envío de notificaciones locales.

- **Ubicación del código:**  
  El manejo de notificaciones se encuentra en:  
  `src/app/pages/alertas/alertas.page.ts`

---

### Problemas enfrentados y soluciones

- **Actualización automática de contadores de alertas**: Uso de getters para actualización reactiva.
- **Visualización clara de estados**: Colores y chips para facilitar la comprensión visual.
- **Generalización de las citas**: Lógica adaptada para mostrar diferentes tipos de citas.
- **Errores de cierre de etiquetas HTML**: Revisión y corrección para evitar errores de compilación.
- **Generación del APK**: Seguí la documentación oficial de Ionic y Capacitor para asegurar la correcta construcción del archivo APK.

---

## Comandos utilizados para actualizar las modificaciones y sincronizar con Android

- **`ionic build`**  
  **¿Cuándo usarlo?**  
  Cada vez que realices cambios en el código fuente de tu app (HTML, CSS, TypeScript, imágenes, etc.).  
  **¿Para qué sirve?**  
  Compila y construye la aplicación, generando la carpeta `/www` con los archivos actualizados que serán usados por Capacitor.

- **`ionic cap add android`**  
  **¿Cuándo usarlo?**  
  Solo la primera vez que quieres agregar la plataforma Android a tu proyecto.  
  **¿Para qué sirve?**  
  Crea el proyecto nativo de Android dentro de tu aplicación Ionic.

- **`ionic cap sync android`** / **`npx cap sync android`**  
  **¿Cuándo usarlo?**  
  Después de cada compilación (`ionic build`) o cuando agregues/quites plugins nativos.  
  **¿Para qué sirve?**  
  Sincroniza los archivos y configuraciones actualizadas de tu aplicación web con el proyecto nativo de Android.

- **`ionic cap open android`** / **`npx cap open android`**  
  **¿Cuándo usarlo?**  
  Cuando quieras abrir el proyecto de Android en Android Studio para compilar, ejecutar en emulador/dispositivo físico, o generar el APK.  
  **¿Para qué sirve?**  
  Lanza Android Studio con el proyecto listo para pruebas o generación de instaladores.

---

### **Resumen del flujo recomendado después de cada cambio:**

1. Realiza tus modificaciones en el código.
2. Ejecuta `ionic build` para compilar los cambios.
3. Ejecuta `ionic cap sync android` para sincronizar los cambios con Android.
4. Ejecuta `ionic cap open android` para abrir el proyecto en Android Studio y probar o generar el APK.

---

## Instalación y ejecución

1. Clona el repositorio desde GitHub.
2. Instala las dependencias con `npm install`.
3. Sigue el flujo de comandos descrito arriba para compilar y sincronizar.
4. Abre el proyecto en Android Studio y ejecuta en un dispositivo físico o emulador.
5. ¡Listo! La app debería funcionar correctamente, incluyendo las notificaciones locales y el botón de llamada de emergencia.

---

## Notas finales


- El APK generado se encuentra en la carpeta correspondiente del proyecto Android (`android/app/build/outputs/apk/debug/app-debug.apk`).

---
