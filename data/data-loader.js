/**
 * data-loader.js
 * Small teAIching · SlowAI
 * 
 * Lógica central de carga de datos desde los archivos JSON.
 * Incluye en cualquier página HTML así:
 *   <script src="data/data-loader.js"></script>
 * 
 * USO BÁSICO:
 *   const datos = await SmallTeAIching.cargar('entrantes');
 * 
 * USO AVANZADO (cargar todo el menú a la vez):
 *   const menu = await SmallTeAIching.cargarMenu();
 */

const SmallTeAIching = (() => {

  // ─── Configuración ───────────────────────────────────────────────────────
  // Cambia esta ruta si mueves la carpeta data
  const BASE_URL = './data/';

  const SECCIONES = [
    'entrantes',
    'primer_plato',
    'segundo_plato',
    'postres',
    'sobremesa'
  ];

  // ─── Caché interna (evita descargas repetidas) ───────────────────────────
  const _cache = {};

  // ─── Función principal de carga ──────────────────────────────────────────
  /**
   * Carga un JSON del menú por su nombre.
   * @param {string} seccion - Nombre del archivo sin extensión
   *   Valores válidos: 'entrantes', 'primer_plato', 'segundo_plato', 'postres', 'sobremesa'
   * @returns {Promise<Object>} Los datos del JSON
   */
  async function cargar(seccion) {
    if (!SECCIONES.includes(seccion)) {
      console.error(`[SmallTeAIching] Sección desconocida: "${seccion}". Valores válidos: ${SECCIONES.join(', ')}`);
      return null;
    }

    // Si ya está en caché, devolver directamente
    if (_cache[seccion]) return _cache[seccion];

    try {
      const respuesta = await fetch(`${BASE_URL}${seccion}.json`);
      if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
      const datos = await respuesta.json();
      _cache[seccion] = datos;
      return datos;
    } catch (error) {
      console.error(`[SmallTeAIching] Error al cargar ${seccion}.json:`, error.message);
      return null;
    }
  }

  /**
   * Carga todas las secciones del menú a la vez.
   * @returns {Promise<Object>} Objeto con todas las secciones { entrantes, primer_plato, ... }
   */
  async function cargarMenu() {
    const promesas = SECCIONES.map(s => cargar(s).then(datos => ({ [s]: datos })));
    const resultados = await Promise.all(promesas);
    return Object.assign({}, ...resultados);
  }

  // ─── Helpers de renderizado ──────────────────────────────────────────────

  /**
   * Renderiza el prompt de una ficha en formato listo para copiar.
   * Devuelve el texto del prompt limpio (sin etiquetas HTML).
   */
  function obtenerPrompt(ficha) {
    return ficha.prompt || '';
  }

  /**
   * Devuelve el color de la fricción según el nivel.
   * Útil para aplicar clases CSS o estilos.
   */
  function colorFriccion(friccion) {
    if (!friccion) return 'gray';
    const llamas = (friccion.match(/🔥/g) || []).length;
    if (llamas === 1) return 'green';
    if (llamas === 2) return 'orange';
    if (llamas >= 3) return 'red';
    return 'gray';
  }

  /**
   * Devuelve el texto de fricción legible para accesibilidad.
   */
  function textoFriccion(friccion) {
    if (!friccion) return 'No especificada';
    const llamas = (friccion.match(/🔥/g) || []).length;
    if (llamas === 1) return 'Baja';
    if (llamas === 2) return 'Media';
    if (llamas >= 3) return 'Alta';
    return friccion;
  }

  // ─── API pública ─────────────────────────────────────────────────────────
  return {
    cargar,
    cargarMenu,
    obtenerPrompt,
    colorFriccion,
    textoFriccion,
    SECCIONES
  };

})();

// ─── Auto-inicialización opcional ─────────────────────────────────────────
// Si la página tiene un atributo data-seccion en el <body>,
// carga automáticamente esa sección y la expone como window.datosPagina
document.addEventListener('DOMContentLoaded', async () => {
  const seccion = document.body.dataset.seccion;
  if (seccion) {
    window.datosPagina = await SmallTeAIching.cargar(seccion);
    // Dispara un evento personalizado para que la página sepa que los datos están listos
    document.dispatchEvent(new CustomEvent('datosListos', { detail: window.datosPagina }));
  }
});
