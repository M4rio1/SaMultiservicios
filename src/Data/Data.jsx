const data = [
  {
    id: 1,
    image:
      "https://contabilidadfinanzas.com/wp-content/uploads/2023/11/contabilidad-de-cooperativas-en-guatemala.jpg",
    title:
      "Guía completa para entender el Impuesto Sobre la Renta (ISR) en Guatemala",
    category: "Impuestos en Guatemala",
    description:
      "Guía completa para entender el Impuesto Sobre la Renta (ISR) en Guatemala y cómo aplicarlo correctamente. Aprende cómo calcular el ISR, cómo aplicarlo en diferentes situaciones, cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Dec 17, 2024",
    ReadingTime: "5 min read",
  },
  {
    id: 2,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Fradix-ui-styling-with-css%2Fimage.png&w=1080&q=75",
    title:
      "La importancia de la contabilidad en pequeñas y medianas empresas (PYMES)",
    category: "Contabilidad Empresarial",
    description:
      "La importancia de la contabilidad en pequeñas y medianas empresas (PYMES) y cómo aplicarla en diferentes situaciones para mejorar la transparencia y la eficiencia.",
    date: "Published on Dec 14, 2021",
    ReadingTime: "3 min read",
  },
  {
    id: 3,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ffractional-svg-stars-css%2Fimage.png&w=1080&q=75",
    title:
      "Reformas fiscales en Guatemala para 2024: Cambios clave que debes conocer",
    category: "Reformas Fiscales y Legislación",
    description:
      "Reformas fiscales en Guatemala para 2024: Cambios clave que debes conocer y cómo aplicarlas correctamente en tu negocio para mejorar la transparencia y la eficiencia.",
    date: "Published on Sep 06, 2021",
    ReadingTime: "4 min read",
  },
  {
    id: 4,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Fresponsive-animation-framer-motion%2Fimage.png&w=1080&q=75",
    title: "Cómo crear un presupuesto financiero efectivo para tu empresa",
    category: "Asesoría Financiera y Planeación",
    description:
      "Cómo crear un presupuesto financiero efectivo para tu empresa y cómo aplicarlo en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes.",
    date: "Published on Jun 09, 2021",
    ReadingTime: "3 min read",
  },
  {
    id: 5,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Fbuilding-a-notion-blog-with-public-api%2Fimage.png&w=1080&q=75",
    title: "Obligaciones legales básicas para empresarios en Guatemala",
    category: "Cumplimiento Legal y Obligaciones Empresariales",
    description:
      "Obligaciones legales básicas para empresarios en Guatemala y cómo aplicarlas en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on May 16, 2021",
    ReadingTime: "10 min read",
  },
  {
    id: 6,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Fmapbox-static-image-api%2Fimage.png&w=1920&q=75",
    title:
      "Cómo inscribir una empresa en la SAT Guatemala: Requisitos y pasos clave",
    category: "SAT Guatemala: Procesos y Requisitos",
    description:
      "Cómo inscribir una empresa en la SAT Guatemala: Requisitos y pasos clave y cómo aplicarlos en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on May 09, 2021",
    ReadingTime: "8 min read",
  },
  {
    id: 7,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title:
      "Eventos contables y financieros más importantes en Guatemala para 2024",
    category: "Eventos y Noticias Contables en Guatemala",
    description:
      "Eventos contables y financieros más importantes en Guatemala para 2024 y cómo aplicarlos en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 8,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title:
      "Deducibles de impuestos en Guatemala: Cómo aprovecharlos para tu declaración anual",
    category: "Impuestos en Guatemala",
    description:
      "Deducibles de impuestos en Guatemala: Cómo aprovecharlos para tu declaración anual y cómo aplicarlos en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 9,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title: "Pasos para implementar un sistema contable efectivo en tu empresa",
    category: "Contabilidad Empresarial",
    description:
      "Pasos para implementar un sistema contable efectivo en tu empresa y cómo aplicarlo en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 10,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title:
      "Ley del IVA en Guatemala: Reglas actualizadas y cómo aplicarlas correctamente",
    category: "Reformas Fiscales y Legislación",
    description:
      "Ley del IVA en Guatemala: Reglas actualizadas y cómo aplicarlas correctamente en tu negocio para mejorar la transparencia y la eficiencia.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 11,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title: "5 consejos para optimizar el flujo de caja en tu negocio",
    category: "Asesoría Financiera y Planeación",
    description:
      "5 consejos para optimizar el flujo de caja en tu negocio y cómo aplicarlos en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 12,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title:
      "Multas empresariales en Guatemala: Cómo evitarlas con un buen asesor contable",
    category: "Cumplimiento Legal y Obligaciones Empresariales",
    description:
      "Multas empresariales en Guatemala: Cómo evitarlas con un buen asesor contable y cómo aplicarlas en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 13,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title: "Cómo obtener y usar tu firma electrónica en la SAT Guatemala",
    category: "SAT Guatemala: Procesos y Requisitos",
    description:
      "Cómo obtener y usar tu firma electrónica en la SAT Guatemala y cómo aplicarla en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
  {
    id: 14,
    image:
      "https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
    title: "Noticias recientes sobre contabilidad y finanzas en Guatemala",
    category: "Eventos y Noticias Contables en Guatemala",
    description:
      "Noticias recientes sobre contabilidad y finanzas en Guatemala y cómo aplicarlas en diferentes situaciones para mejorar la transparencia y la eficiencia en tu negocio y en tus clientes y cómo identificar los riesgos y cómo evitarlos.",
    date: "Published on Apr 19, 2021",
    ReadingTime: "9 min read",
  },
];

export default data;
