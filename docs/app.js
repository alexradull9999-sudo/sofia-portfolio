const MEDIA_ROOT = "./media/21 SPACE";

const categories = [
  { name: "Архитектура", slug: "architecture" },
  { name: "Интерьеры", slug: "interiors" },
  { name: "Развитие территорий", slug: "territories" },
];

const projects = [
  {
    slug: "university",
    title: "Образовательный центр",
    category: "Архитектура",
    description: "Общественное здание с пластичной линией кровли и открытыми видами на окружающий ландшафт.",
    facts: { type: "-", year: "-", city: "-", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/02 Архитектура/универ/001 визуализация.webp`,
    images: [
      "001 визуализация.webp", "008 визуализация.webp", "002 формообразование.webp",
      "003 план_1 этаж.webp", "004 план_2 этаж.webp", "005 фасады универ.webp",
      "006 фасады универ.webp", "007 ситуационный план.webp",
    ].map((file) => `${MEDIA_ROOT}/02 Архитектура/универ/${file}`),
  },
  {
    slug: "townhouse",
    title: "Таунхаус",
    category: "Архитектура",
    description: "Жилая секционная застройка с ритмичным фасадом, приватными входами и спокойной природной палитрой.",
    facts: { type: "-", year: "-", city: "-", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/02 Архитектура/таунхаус/01 фасад таунхаус.webp`,
    images: [
      "01 фасад таунхаус.webp", "02 вид таунхаус.webp", "03 разрез таунхаус.webp",
      "таунхаус1 этаж_page-0001.webp", "таунхаус 2 этаж_page-0001.webp",
    ].map((file) => `${MEDIA_ROOT}/02 Архитектура/таунхаус/${file}`),
  },
  {
    slug: "camp",
    title: "Пансионат",
    category: "Архитектура",
    description: "Загородная резиденция для частной школы верховой езды. Здание из газобетона с отделкой штукатуркой и планкеном спроектировано с учётом требований к эвакуации для общественных объектов.",
    facts: { type: "Эскизный проект", year: "2017", city: "Московская область", area: "-", note: "Первый реализованный проект" },
    cover: `${MEDIA_ROOT}/02 Архитектура/лагерь/лагерь визуалка.webp`,
    images: [
      "лагерь визуалка.webp", "фото_лагерь.webp", "стройка_лагерь.webp", "лагерь_1 этаж.webp",
      "лагерь_2 этаж.webp", "фасад_юг_лагерь.webp", "фасады чб.webp", "фаскад север чб.webp",
    ].map((file) => `${MEDIA_ROOT}/02 Архитектура/лагерь/${file}`),
  },
  {
    slug: "jane-jacobs",
    title: "Дом Джейн Джейкобс",
    category: "Архитектура",
    description: "Концепция дома-галереи основана на принципах книги Джейн Джейкобс «Жизнь и смерть больших американских городов». Смешение функций, активные первые этажи и разновысотная застройка поддерживают городские сообщества и естественный социальный контроль.",
    facts: { type: "Концепция", year: "2018", city: "Москва", area: "-", note: "Концепция по принципам Джейн Джейкобс" },
    cover: `${MEDIA_ROOT}/02 Архитектура/Джейн Джейкобс/Фасад 1-2 ночь.webp`,
    images: [
      "Фасад 1-2 ночь.webp", "Фасад 2-1_день.webp", "Фасад А-Л.webp", "Фасад Л-А_день.webp",
      "генплан.webp", "План 1 этажа.webp", "План 2 этажа.webp", "План 3 этажа.webp",
      "План 4 этажа.webp", "План 5 этажа.webp", "План кровли.webp",
    ].map((file) => `${MEDIA_ROOT}/02 Архитектура/Джейн Джейкобс/${file}`),
  },
  {
    slug: "hostel",
    title: "Хостел",
    category: "Архитектура",
    description: "Компактный жилой объём с регулярной фасадной системой и выразительной входной группой.",
    facts: { type: "-", year: "-", city: "-", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/02 Архитектура/хостел/визуализация хостел.webp`,
    images: ["визуализация хостел.webp", "хостел фасады (1).webp", "хостел фасады (2).webp"]
      .map((file) => `${MEDIA_ROOT}/02 Архитектура/хостел/${file}`),
  },
  {
    slug: "grill-house",
    title: "Гриль-хаус",
    category: "Архитектура",
    description: "Небольшой павильон для отдыха с открытой планировкой и визуальной связью с ландшафтом.",
    facts: { type: "-", year: "-", city: "-", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/02 Архитектура/гриль-хаус/15.webp`,
    images: ["15.webp", "6.webp", "9.webp", "с1.webp", "с2.webp", "с3.webp", "с4.webp"]
      .map((file) => `${MEDIA_ROOT}/02 Архитектура/гриль-хаус/${file}`),
  },
  {
    slug: "korolev",
    title: "Квартира в Королёве",
    category: "Интерьеры",
    description: "Светлый жилой интерьер с мягкой нейтральной палитрой, графичными деталями и прозрачными границами между комнатами.",
    facts: { type: "-", year: "-", city: "Королёв", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/03 Интерьеры/королёв/01.webp`,
    images: [
      "01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp", "07.webp", "08.webp",
      "09.webp", "10.webp", "11.webp", "королев_планировка.webp", "королев_план монтажа.webp",
    ].map((file) => `${MEDIA_ROOT}/03 Интерьеры/королёв/${file}`),
  },
  {
    slug: "youth-center",
    title: "Ресурсный молодёжный центр",
    category: "Интерьеры",
    description: "Многофункциональный общественный интерьер с понятной навигацией и яркими цветовыми акцентами.",
    facts: { type: "-", year: "-", city: "-", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/03 Интерьеры/ресурсный молодежный центр/01 приемная.webp`,
    images: [
      "01 приемная.webp", "02 кафетерий 1.webp", "03 кафетерий 2.webp", "04 кабинет.webp",
      "05 коридор.webp", "06 опен с зоной отдыха.webp", "конференц.webp", "конференц 2.webp",
      "номер_оранж.webp", "номер_серый.webp", "номер_синий.webp", "фасады.webp",
    ].map((file) => `${MEDIA_ROOT}/03 Интерьеры/ресурсный молодежный центр/${file}`),
  },
  {
    slug: "kursk-room",
    title: "Комната в Курске",
    category: "Интерьеры",
    description: "Небольшое приватное пространство, организованное через вертикальное хранение, мягкий свет и спокойную палитру.",
    facts: { type: "-", year: "-", city: "Курск", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/03 Интерьеры/комната курск/01 виз.webp`,
    images: ["01 виз.webp", "02 виз.webp", "03 виз.webp", "курск_комната.webp"]
      .map((file) => `${MEDIA_ROOT}/03 Интерьеры/комната курск/${file}`),
  },
  {
    slug: "ivangorod",
    title: "Набережная Ивангорода",
    category: "Развитие территорий",
    description: "Проект раскрывает идентичность Ивангорода через материалы и образы места: камень крепости переосмыслен в бетоне и габионах, графика Ивана Билибина — в рисунке мощения, а история лесопильного завода и речных причалов — в архитектуре мастерских.",
    facts: { type: "Конкурсная концепция", year: "2023", city: "Ивангород, Ленинградская область", area: "30 000 м²", note: "Главный архитектор проекта; победитель Всероссийского конкурса" },
    cover: `${MEDIA_ROOT}/01 развитие территорий/Ивангород набережная/Ивангород_коллаж.webp`,
    images: [
      `${MEDIA_ROOT}/01 развитие территорий/Ивангород набережная/Ивангород_коллаж.webp`,
      `${MEDIA_ROOT}/01 развитие территорий/Ивангород набережная/Ивангород_коллаж_без фона.webp`,
    ],
  },
  {
    slug: "barnaul",
    title: "КРТ в Барнауле",
    category: "Развитие территорий",
    description: "Концепция комплексного развития территории опирается на стандарт КБ Стрелка и учитывает соседство аэропорта, торгового центра и ипподрома. Общественный каркас, транспортная сеть и разные типы малоэтажной застройки формируют связанную городскую среду.",
    facts: { type: "Концепция КРТ", year: "-", city: "Барнаул", area: "369,2 га", note: "Высотность застройки — 1–5 этажей" },
    cover: `${MEDIA_ROOT}/01 развитие территорий/крт барнаул/10 сравнение застроек.webp`,
    images: [
      "01 общие данные.webp", "02 окружающая застройка.webp", "03 охранные зоны.webp",
      "04 сводная схема граданализа.webp", "05 ценности.webp", "06 технико-экономические показатели проекта.webp",
      "07 общественный каркас.webp", "08 транспорт.webp", "09 типы застройки.webp", "10 сравнение застроек.webp",
    ].map((file) => `${MEDIA_ROOT}/01 развитие территорий/крт барнаул/${file}`),
  },
  {
    slug: "medovy",
    title: "Посёлок Медовый",
    category: "Развитие территорий",
    description: "Генеральный план жилой территории с иерархией улиц, общественными пространствами и природным каркасом.",
    facts: { type: "Генеральный план", year: "-", city: "-", area: "-", note: "-" },
    cover: `${MEDIA_ROOT}/01 развитие территорий/медовый/медовый генплан.webp`,
    images: [`${MEDIA_ROOT}/01 развитие территорий/медовый/медовый генплан.webp`],
  },
];

const layoutClasses = ["layout-a", "layout-b", "layout-c", "layout-d", "layout-e", "layout-f"];
const factLabels = [
  ["type", "Тип проекта"], ["year", "Год"], ["city", "Город"],
  ["area", "Площадь"], ["note", "Примечание"],
];

const mosaic = document.querySelector("#projects");
const projectDialog = document.querySelector("#projectDialog");
const projectGallery = document.querySelector("#projectGallery");
const projectTitle = document.querySelector("#projectTitle");
const projectIndex = document.querySelector("#projectIndex");
const projectCategory = document.querySelector("#projectCategory");
const projectDescription = document.querySelector("#projectDescription");
const projectFacts = document.querySelector("#projectFacts");
let activeProject = 0;

function asset(path) {
  return encodeURI(path);
}

function renderMosaic() {
  categories.forEach((category, categoryIndex) => {
    const categoryProjects = projects.filter((project) => project.category === category.name);
    const section = document.createElement("section");
    section.className = "portfolio-section";
    section.id = category.slug;
    section.setAttribute("aria-labelledby", `${category.slug}-title`);

    const header = document.createElement("header");
    header.className = "portfolio-section__header";
    header.innerHTML = `<h2 id="${category.slug}-title">${category.name}</h2><span>${String(categoryIndex + 1).padStart(2, "0")} / ${String(categories.length).padStart(2, "0")}</span>`;

    const grid = document.createElement("div");
    grid.className = "portfolio-grid";

    categoryProjects.forEach((project, categoryProjectIndex) => {
      const index = projects.indexOf(project);
      const card = document.createElement("button");
      card.className = `project-card ${layoutClasses[categoryProjectIndex]}`;
      card.type = "button";
      card.dataset.project = String(index);
      card.setAttribute("aria-label", `Открыть проект «${project.title}»`);

      const image = document.createElement("img");
      image.src = asset(project.cover);
      image.alt = `${project.title} — ${project.category}`;
      image.loading = index < 2 ? "eager" : "lazy";
      image.decoding = "async";

      const label = document.createElement("span");
      label.className = "project-card__label";
      label.innerHTML = `<span class="project-card__title">${project.title}</span><span class="project-card__number">${String(index + 1).padStart(2, "0")}</span>`;
      card.append(image, label);
      grid.append(card);
    });

    section.append(header, grid);
    mosaic.append(section);
  });
}

function renderFacts(facts) {
  const fragment = document.createDocumentFragment();
  factLabels.forEach(([key, label]) => {
    const row = document.createElement("div");
    row.className = `project-fact project-fact--${key}`;
    const term = document.createElement("dt");
    term.textContent = label;
    const value = document.createElement("dd");
    value.textContent = facts[key];
    row.append(term, value);
    fragment.append(row);
  });
  projectFacts.replaceChildren(fragment);
}

function renderProject(index) {
  activeProject = (index + projects.length) % projects.length;
  const project = projects[activeProject];
  projectTitle.textContent = project.title;
  projectIndex.textContent = `${String(activeProject + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  projectCategory.textContent = project.category;
  projectDescription.textContent = project.description;
  renderFacts(project.facts);
  projectGallery.replaceChildren();

  project.images.forEach((source, imageIndex) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = asset(source);
    image.alt = `${project.title}, изображение ${imageIndex + 1}`;
    image.loading = imageIndex === 0 ? "eager" : "lazy";
    image.decoding = "async";
    const caption = document.createElement("figcaption");
    caption.innerHTML = `<span>${project.title}</span><span>${String(imageIndex + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}</span>`;
    figure.append(image, caption);
    projectGallery.append(figure);
  });

  projectDialog.scrollTop = 0;
  if (projectDialog.open) updateProjectUrl(activeProject);
}

function openProject(index) {
  renderProject(index);
  projectDialog.showModal();
  document.body.classList.add("is-dialog-open");
  updateProjectUrl(activeProject);
}

function closeDialog(dialog) {
  dialog.close();
  if (![projectDialog, ...document.querySelectorAll(".info-dialog")].some((item) => item.open)) {
    document.body.classList.remove("is-dialog-open");
  }
}

function updateProjectUrl(index = null) {
  const url = new URL(window.location.href);
  url.searchParams.delete("view");
  if (index === null) url.searchParams.delete("project");
  else url.searchParams.set("project", projects[index].slug);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function updateViewUrl(view = null) {
  const url = new URL(window.location.href);
  url.searchParams.delete("project");
  if (view === null) url.searchParams.delete("view");
  else url.searchParams.set("view", view);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

mosaic.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project]");
  if (card) openProject(Number(card.dataset.project));
});

document.querySelector("[data-close-project]").addEventListener("click", () => closeDialog(projectDialog));
document.querySelector("[data-project-prev]").addEventListener("click", () => renderProject(activeProject - 1));
document.querySelector("[data-project-next]").addEventListener("click", () => renderProject(activeProject + 1));

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.querySelector(`#${button.dataset.open}Dialog`);
    dialog.showModal();
    document.body.classList.add("is-dialog-open");
    updateViewUrl(button.dataset.open === "about" ? "info" : "contacts");
  });
});

document.querySelectorAll("[data-close-info]").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.closest("dialog")));
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog && dialog.classList.contains("info-dialog")) closeDialog(dialog);
  });
  dialog.addEventListener("close", () => {
    if (dialog === projectDialog) updateProjectUrl();
    if (dialog.classList.contains("info-dialog")) updateViewUrl();
    if (![projectDialog, ...document.querySelectorAll(".info-dialog")].some((item) => item.open)) {
      document.body.classList.remove("is-dialog-open");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (!projectDialog.open) return;
  if (event.key === "ArrowLeft") renderProject(activeProject - 1);
  if (event.key === "ArrowRight") renderProject(activeProject + 1);
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderMosaic();

const requestedProject = new URLSearchParams(window.location.search).get("project");
const requestedProjectIndex = projects.findIndex((project) => project.slug === requestedProject);
if (requestedProjectIndex >= 0) openProject(requestedProjectIndex);

const requestedView = new URLSearchParams(window.location.search).get("view");
if (requestedProjectIndex < 0 && requestedView === "info") {
  document.querySelector("#aboutDialog").showModal();
  document.body.classList.add("is-dialog-open");
}
if (requestedProjectIndex < 0 && requestedView === "contacts") {
  document.querySelector("#contactsDialog").showModal();
  document.body.classList.add("is-dialog-open");
}

window.addEventListener("load", () => {
  window.setTimeout(() => document.body.classList.add("is-ready"), 220);
});
