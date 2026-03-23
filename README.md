# Small Te*AI*ching

**Un menú de herramientas docentes con IA para la educación superior**
Facultad de Medicina · Universidad de Valladolid · EduMed

---

## ¿Qué es Small TeAIching?

Small Te*AI*ching es una adaptación para la inteligencia artificial del método **Small Teaching** de James M. Lang — un enfoque pedagógico basado en introducir cambios pequeños, realistas y basados en la ciencia del aprendizaje, que tengan un impacto real en el aula sin necesidad de rediseñar toda la docencia.

La propuesta se organiza como un **menú de cocina lenta** (*slow cooking*): frente a la "Fast AI" que resuelve todo de inmediato, la **Slow AI** devuelve el esfuerzo al estudiante y usa la tecnología para amplificar el pensamiento, no para sustituirlo.

> *Para que aprobar no sea más fácil que aprender.*

---

## Filosofía: Slow AI

La Slow AI propone un uso de la inteligencia artificial basado en la **fricción cognitiva** — el esfuerzo mental necesario para que el aprendizaje sea duradero. Sus principios fundamentales son:

- **Del cerebro al LLM**: primero el intento humano; la IA entra como espejo, crítico o guía.
- **Se evalúa proceso y resultado**: justificación, alternativas, límites, verificación.
- **Hacer visible el pensamiento**: "¿por qué esto y no otra cosa?"
- **Sin atajos**: evitar reescrituras completas; exigir iteraciones y defensa cuando sea evaluable.
- **Reglas claras de uso**: anonimizar datos, declarar el uso de IA, no compartir información sensible.

---

## Estructura del menú

Las herramientas se organizan en cinco tiempos, siguiendo la **Taxonomía de Bloom**:

| Tiempo | Momento | Foco cognitivo |
|--------|---------|----------------|
| 🥗 **Entrantes** | Pre-clase | Recordar y comprender |
| 🍲 **Primer plato** | En clase | Comprender y aplicar |
| 🥘 **Segundo plato** | Trabajo del estudiante | Aplicar, analizar, evaluar y crear |
| 🍰 **Postres** | Post-clase | Evaluación formativa y metacognición |
| ☕ **Sobremesa** | Después | Transferencia a la práctica profesional |

---

## Páginas del proyecto

| Página | Descripción | URL |
|--------|-------------|-----|
| **Inicio** | Menú principal con todas las herramientas | `/` |
| **¿Slow AI o Fast AI?** | Marco conceptual y filosofía del proyecto | `/slowai/` |
| **Entrantes** | Herramientas para el estudio previo a clase | `/entrantes/` |
| **Primer plato** | Dinámicas sincrónicas en el aula | `/primer_plato/` |
| **Segundo plato** | Actividades de producción del estudiante | `/segundo_plato/` |
| **Postres** | Evaluación formativa y reflexión | `/postres/` |
| **Sobremesa** | Transferencia y práctica profesional | `/sobremesa/` |
| **Las recetas del Chef** | Creación de asistentes y vibecoding | `/recetas/` |
| **La leyenda de la bibliotecarIA** | Aproximación literaria al funcionamiento de la IA | `/bibliotecaria/` |
| **Diccionario de términos sobre IA** | Glosario de conceptos, prompts y filosofía 4D | `/diccionario/` |

---

## Las 5 reglas de la Slow AI

1. **Tú primero** — antes de pedirle algo a la IA, elabora tu propia respuesta.
2. **Itera y mejora el prompt** — la calidad de la respuesta depende de la calidad de la pregunta.
3. **Privacidad y datos** — no compartas datos personales ni materiales protegidos.
4. **¿Cuánto aprenden realmente?** — asegúrate de que la actividad trabaja la competencia que quieres desarrollar.
5. **Control de calidad antes de usar en clase** — verifica precisión, objetivo docente, privacidad, ética y claridad antes de llevar cualquier material generado al aula.

---

## Las 4D de la Fluidez en IA

Marco de referencia de Rick Dakan y Joe Feller para un uso competente, ético y efectivo de la IA:

| Competencia | Descripción |
|-------------|-------------|
| **Delegación** | Decidir qué hace el ser humano, qué hace la IA y qué hacemos juntos. |
| **Descripción** | Comunicar eficazmente los objetivos — no dar órdenes, sino mantener una conversación colaborativa. |
| **Discernimiento** | Evaluar críticamente los resultados: detectar errores, reconocer aciertos, mejorar la colaboración. |
| **Diligencia** | Uso ético, transparente y responsable en todas las fases. La responsabilidad última siempre es humana. |

> *Referencia: Dakan, R. & Feller, J. (2025). Framework for AI Fluency. Ringling College of Art and Design / University College Cork. Licencia CC BY-NC-SA 4.0.*
> Curso disponible en [AI Fluency for Educators · Anthropic Academy](https://anthropic.skilljar.com/ai-fluency-for-educators)

---

## Tecnología

La webapp está construida como sitio estático en **GitHub Pages**:

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Fuentes: [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin) + [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) (Google Fonts)
- Imágenes en formato `.avif` con fallback a iconos SVG
- Colores institucionales UVa: azul Pantone 654C `#003973` · rojo Pantone 207C `#c60046`
- Diseño responsive · accesible · sin dependencias externas

### Estructura de archivos

```
smallteaiching/
├── index.html              # Página principal (menú)
├── style.css               # Estilos globales compartidos
├── images/                 # Imágenes .avif de cada sección
├── assests/pdfs/           # PDFs descargables
├── slowai/index.html
├── entrantes/index.html
├── primer_plato/index.html
├── segundo_plato/index.html
├── postres/index.html
├── sobremesa/index.html
├── recetas/index.html
├── bibliotecaria/index.html
└── diccionario/index.html
```

---

## Créditos y licencia

Desarrollado por el grupo **EduMed** de la Facultad de Medicina de la Universidad de Valladolid.

Webapp construida con el soporte de **Claude Sonnet** (Anthropic) · Marzo 2026

Basado en:
- *Small Teaching* — James M. Lang (2016)
- *AI Fluency for Educators* — Rick Dakan & Joe Feller / Anthropic Academy (2025)

Licencia: [MIT](https://opensource.org/licenses/MIT)
