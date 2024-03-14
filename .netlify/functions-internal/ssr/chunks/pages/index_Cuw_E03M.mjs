/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot, h as renderComponent, s as spreadAttributes, l as Fragment, u as unescapeHTML } from '../astro_isHDpYVE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_CGqBB3BD.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$l = createAstro();
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mt-4 gap-4 lg:justify-normal lg:order-2"> <span class=" inline-block h-0 w-[30px] border border-secondary lg:ml-[180px]"></span> <span${addAttribute(`inline-block ${Astro2.props.class}`, "class")}>${renderSlot($$result, $$slots["default"])}</span> <span class=" inline-block h-0 w-[30px] border border-secondary lg:hidden"></span> </div>`;
}, "C:/Users/kevin/dev/porfolio/src/components/SectionTitle.astro", void 0);

const $$Astro$k = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<section class="section text-center mb-6 mt-20"> <div class="max-w-[1024px] mx-auto p-4 flex flex-col gap-6 mt-4"> <div class="flex flex-col"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "class": " text-sm text-primary" }, { "default": ($$result2) => renderTemplate`
HELLO
` })} <div class="mt-6"> <a class="uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 transition-all" href="../../public/cv/cv_en_es.pdf" download="cv_en_es.pdf">Download cv</a> </div> </div> <h1 class="text-4xl md:text-6xl lg:text-8xl text-primary">Software <span class="text-secondary">Web</span></h1> <h2 class="text-4xl md:text-6xl lg:text-8xl text-primary">Developer</h2> <h2 class="text-xl text-secondary">Kevin Moreno</h2> <div class="flex items-center justify-center mt-6 gap-6 md:gap-10 lg:gap-20"> <div class=""> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-36" href="https://github.com/KevG1t" target="_blank" rel="noreferrer">GitHub</a> </div> <div> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-36" href="https://www.linkedin.com/in/kevin-corrales-44a9731aa/" target="_blank" rel="noreferrer">LinkedIn</a> </div> </div> </div> </section>`;
}, "C:/Users/kevin/dev/porfolio/src/sections/Home.astro", void 0);

const $$Astro$j = createAstro();
const $$CardBase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$CardBase;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group bg-bg-primary rounded-sm flex p-4 flex-col items-center border border-black/50 gap-4 text-secondary w-auto h-auto sm:h-[200px] hover:scale-105 hover:shadow-lg hover:shadow-black/50 transition-all"> ${renderSlot($$result, $$slots["default"])} </article> `;
}, "C:/Users/kevin/dev/porfolio/src/components/CardBase.astro", void 0);

const $$Astro$i = createAstro();
const $$Book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Book;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path><path d="M3 6l0 13"></path><path d="M12 6l0 13"></path><path d="M21 6l0 13"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Book.astro", void 0);

const $$Astro$h = createAstro();
const $$Laptop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Laptop;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 19l18 0"></path><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Laptop.astro", void 0);

const $$Astro$g = createAstro();
const $$Stack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Stack;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1"></path><path d="M8 16h8"></path><path d="M8.322 12.582l7.956 .836"></path><path d="M8.787 9.168l7.826 1.664"></path><path d="M10.096 5.764l7.608 2.472"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Stack.astro", void 0);

const $$Astro$f = createAstro();
const $$School = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$School;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"></path><path d="M22 9 12 5 2 9l10 4 10-4v6"></path><path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/School.astro", void 0);

const $$Astro$e = createAstro();
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Briefcase.astro", void 0);

const $$Astro$d = createAstro();
const $$Backpack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Backpack;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z"></path><path d="M10 6v-1a2 2 0 1 1 4 0v1"></path><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path><path d="M11 10h2"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Backpack.astro", void 0);

const $$Astro$c = createAstro();
const $$Certificate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Certificate;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path><path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path><path d="M6 9l12 0"></path><path d="M6 12l3 0"></path><path d="M6 15l2 0"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Certificate.astro", void 0);

const $$Astro$b = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="section bg-bg-secondary p-6" id="about"> <div class="max-w-[1024px] mx-auto"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "class": "text-2xl text-secondary font-bold" }, { "default": ($$result2) => renderTemplate`
About me
` })} <div class="flex flex-col gap-6 mt-6 items-center text-center justify-center px-8"> <p class="text-primary text-sm text-balance">"Hello! I'm a passionate front-end web developer 💻 with an insatiable thirst for knowledge and a deep passion for creating exceptional digital experiences. My journey in the world of web development began as a self-taught enthusiast, which has made me a strong believer in the power of self-discipline and self-education📚.</p> <p class="text-primary text-sm text-balance">I have invested countless hours learning the latest technologies and development techniques, always seeking to push my limits and expand my skill set."</p> </div> <div class="my-6"> <h3 class="text-center text-2xl text-secondary font-bold my-10">Resume</h3> </div> <di class="grid grid-cols-1 gap-6 md:grid-cols-2"> <div class="flex flex-col gap-6 items-center"> <div class="flex gap-4 items-center text-secondary"> ${renderComponent($$result, "Backpack", $$Backpack, { "class": "w-10 h-10" })} <h3 class="text-center text-2xl text-text-neutral font-bold">Education:</h3> </div> ${renderComponent($$result, "CardBase", $$CardBase, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "School", $$School, { "class": "w-10 h-10" })} <span class="uppercase text-base font-bold text-primary group-hover:text-secondary">university</span> <p class="text-sm text-primary text-balance text-center"> <span class="text-secondary">+5</span> years studying computer engineering, at the national engineering university (UNI RUSB) Managua Nicaragua. learning about programming, databases and everything about software development.
</p> ` })} ${renderComponent($$result, "CardBase", $$CardBase, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Certificate", $$Certificate, { "class": "w-10 h-10" })} <span class="uppercase text-base font-bold text-primary group-hover:text-secondary">cs50</span> <p class="text-sm text-primary text-balance text-center">
In parallel with the university, it offers an exclusive course at Harvard University where I learned everything about programming logic and web development.
</p> ` })} ${renderComponent($$result, "CardBase", $$CardBase, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Certificate", $$Certificate, { "class": "w-10 h-10" })} <span class="uppercase text-base font-bold text-primary group-hover:text-secondary">Arcitura education inc</span> <p class="text-sm text-primary text-balance text-center">I took a non-practical course on Big data where I learned all the basic and advanced concepts about Big data, certifying me as a Big data consultant and Big data professional.</p> ` })} </div> <div class="flex flex-col gap-6 items-center"> <div class="flex gap-4 items-center text-secondary"> ${renderComponent($$result, "Briefcase", $$Briefcase, { "class": "w-10 h-10" })} <h3 class="text-center text-2xl text-text-neutral font-bold">Experience:</h3> </div> ${renderComponent($$result, "CardBase", $$CardBase, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Book", $$Book, { "class": "w-10 h-10" })} <span class="uppercase text-base font-bold text-primary group-hover:text-secondary">self-taught</span> <p class="text-sm text-primary text-balance text-center"> <span class="text-secondary">+5</span> Years being self-taught, developing web pages and polishing my knowledge, also learning what was taught at the university from which I graduated as a computer engineer.
</p> ` })} ${renderComponent($$result, "CardBase", $$CardBase, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Laptop", $$Laptop, { "class": "w-10 h-10" })} <span class="uppercase text-base font-bold text-primary group-hover:text-secondary">internship</span> <p class="text-sm text-primary text-balance text-center"> <span class="text-secondary">+6</span> Months as a remote intern at the consulting company <a href="https://www.linkedin.com/company/coderland-by-dominion/" target="_blank" rel="noreferrer" class="text-secondary underline underline-offset-2">Coderland By Dominion</a> in Panama where I learned collaborative work and participated in several projects as a frontend developer.
</p> ` })} ${renderComponent($$result, "CardBase", $$CardBase, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "class": "w-10 h-10" })} <span class="uppercase text-base font-bold text-primary group-hover:text-secondary">full stack</span> <p class="text-sm text-primary text-balance text-center">Currently I am individually developing software for the company <span class="text-secondary">"Aurora Santa Fe S.A"</span> located in Costa Rica which consists of an IPTV service. This project will be used as a thesis project.</p> ` })} </div> </di></div> </section>`;
}, "C:/Users/kevin/dev/porfolio/src/sections/About.astro", void 0);

const skills = [
  {
    name: "React",
    path: "/public/skills-icons/React.astro",
    stack: "fr"
  },
  {
    name: "Vue",
    path: "/public/skills-icons/Vue.astro",
    stack: "fr"
  },
  {
    name: "Next",
    path: "/public/skills-icons/Next.astro",
    stack: "fr"
  },
  {
    name: "Astro",
    path: "/public/skills-icons/Astro.astro",
    stack: "fr"
  },
  {
    name: "HTML",
    path: "/public/skills-icons/HTML.astro",
    stack: "fr"
  },
  {
    name: "CSS",
    path: "/public/skills-icons/CSS.astro",
    stack: "fr"
  },
  {
    name: "JavaScript",
    path: "/public/skills-icons/JavaScript.astro",
    stack: "fr"
  },
  {
    name: "TypeScript",
    path: "/public/skills-icons/TypeScript.astro",
    stack: "fr"
  },
  {
    name: "Tailwind",
    path: "/public/skills-icons/Tailwind.astro",
    stack: "fr"
  },
  {
    name: "Docker",
    path: "/public/skills-icons/Docker.astro",
    stack: "t"
  },
  {
    name: "Git",
    path: "/public/skills-icons/Git.astro",
    stack: "t"
  },
  {
    name: "GitHub",
    path: "/public/skills-icons/GitHub.astro",
    stack: "t"
  },
  {
    name: "AzureDevops",
    path: "/public/skills-icons/AzureDevops.astro",
    stack: "t"
  },
  {
    name: "Node",
    path: "/public/skills-icons/Node.astro",
    stack: "bk"
  },
  {
    name: "Express",
    path: "/public/skills-icons/Express.astro",
    stack: "bk"
  },
  {
    name: "MySQL",
    path: "/public/skills-icons/MySQL.astro",
    stack: "bk"
  },
  {
    name: "SQLServer",
    path: "/public/skills-icons/SQLServer.astro",
    stack: "bk"
  },
  {
    name: "GraphQL",
    path: "/public/skills-icons/GraphQL.astro",
    stack: "bk"
  }
];

const $$Astro$a = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon, ...attributes } = Astro2.props;
  const { default: innerHTML } = await import(`/public/skills-icons/${icon}.astro?raw`);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { ...attributes }, { "default": ($$result2) => renderTemplate`${unescapeHTML(innerHTML)}` })}`;
}, "C:/Users/kevin/dev/porfolio/src/components/Icon.astro", void 0);

const $$Astro$9 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="section bg-bg-primary p-6" id="skills"> <div class="max-w-[1024px] mx-auto"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "class": "text-2xl text-secondary font-bold" }, { "default": ($$result2) => renderTemplate`
Skills
` })} <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-2 mt-10 lg:px-20"> <div class="flex flex-col gap-4 row-span-2"> <h3 class="uppercase text-base font-bold text-primary">Frontend</h3> <div class="grid flex-1 rounded-sm items-center grid-cols-3 py-6 gap-6 border border-black/50 hover:scale-105 transition-all hover:shadow-lg hover:shadow-black/50"> ${skills.map(({ name, stack }) => {
    return stack === "fr" ? renderTemplate`<div class="flex flex-col gap-2 items-center"> <div class="w-10 h-10"> ${renderComponent($$result, "Icon", $$Icon, { "icon": name })} </div> <span class="text-sm text-primary text-center">${name}</span> </div>` : null;
  })} </div> </div> <div class="flex flex-col gap-4"> <h3 class="uppercase text-base font-bold text-primary">Backend</h3> <div class="grid grid-cols-2 flex-1 items-center lg:grid-cols-5 py-6 gap-4 border border-black/50 hover:scale-105 rounded-sm transition-all hover:shadow-lg hover:shadow-black/50 "> ${skills.map(({ name, stack }) => {
    return stack === "bk" ? renderTemplate`<div class="flex flex-col gap-2 items-center"> <div class="w-10 h-10"> ${renderComponent($$result, "Icon", $$Icon, { "icon": name })} </div> <span class="text-sm text-primary text-center">${name}</span> </div>` : null;
  })} </div> </div> <div class="flex flex-col gap-4"> <h3 class="uppercase text-base font-bold text-primary">Tools</h3> <div class="grid grid-cols-2 flex-1 items-center py-6 gap-4 border border-black/50 hover:scale-105 transition-all rounded-sm hover:shadow-lg hover:shadow-black/50"> ${skills.map(({ name, stack }) => {
    return stack === "t" ? renderTemplate`<div class="flex flex-col gap-2 items-center"> <div class="w-10 h-10"> ${renderComponent($$result, "Icon", $$Icon, { "icon": name })} </div> <span class="text-sm text-primary text-center">${name}</span> </div>` : null;
  })} </div> </div> </div> </div> </section>`;
}, "C:/Users/kevin/dev/porfolio/src/sections/Skills.astro", void 0);

const $$Astro$8 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section class="section bg-bg-secondary p-6" id="projects"> <div class="max-w-[1024px] mx-auto"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "class": "text-2xl text-secondary font-bold" }, { "default": ($$result2) => renderTemplate`
Projects
` })} <div class="flex flex-col gap-6 mt-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center border-b-4 border-bg-primary py-14 md:p-0"> <img class=" 0" style="ba" src="../../public//img/ecommerce.webp" alt="ecommerce de productos varios"> <div class="flex flex-col gap-4"> <h3 class="uppercase text-base font-bold text-primary text-center md:text-left">ECOMMERCE</h3> <div class="flex gap-4 justify-center md:justify-start"> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://github.com/KevG1t/e-commerce-react" target="_blank" rel="noreferrer">Code</a> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://e-commerce-react-chi-ruby.vercel.app/" target="_blank" rel="noreferrer">Demo</a> </div> <p class="text-sm text-primary text-balance text-center md:text-left">In this project I tested my knowledge in TypeScript and global state management.</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center border-b-4 border-bg-primary py-14 md:p-0"> <img class="md:order-2" src="../../public//img/movies.webp" alt="ecommerce de productos varios"> <div class="flex flex-col gap-4"> <h3 class="uppercase text-base text-center md:text-right font-bold text-primary">SEARCH MOVIES</h3> <div class="flex gap-4 justify-center md:justify-end"> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://github.com/KevG1t/Movies_Search" target="_blank" rel="noreferrer">Code</a> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://kevg1t.github.io/Movies_Search/" target="_blank" rel="noreferrer">Demo</a> </div> <p class="text-sm text-primary text-balance text-center md:text-right">With this project I tested my knowledge of hooks and learned how to create a debounce for search engines.</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center border-b-4 border-bg-primary py-14 md:p-0"> <img class="" src="../../public//img/quizz.webp" alt="ecommerce de productos varios"> <div class="flex flex-col gap-4"> <h3 class="uppercase text-base text-center md:text-left font-bold text-primary">Quizz</h3> <div class="flex gap-4 justify-center md:justify-start"> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://github.com/KevG1t/JavaScriptQuizz" target="_blank" rel="noreferrer">Code</a> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://kevg1t.github.io/JavaScriptQuizz/" target="_blank" rel="noreferrer">Demo</a> </div> <p class="text-sm text-primary text-balance text-center md:text-left">A simple project where I tested the Zustand global state manager.
</p> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-14 md:p-0"> <img class="md:order-2" src="../../public//img/tt.webp" alt="ecommerce de productos varios"> <div class="flex flex-col gap-4"> <h3 class="uppercase text-base text-center md:text-right font-bold text-primary">TIC TAC TOE ONLINE</h3> <div class="flex gap-4 justify-center md:justify-end"> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://github.com/KevG1t/tic-tac-toe-online" target="_blank" rel="noreferrer">Code</a> <a class="transition-all uppercase inline-block text-bg-primary text-sm bg-secondary rounded-sm px-4 py-2 hover:outline hover:bg-amber-200 w-fit" href="https://tic-tac-toe-online-nine.vercel.app/" target="_blank" rel="noreferrer">Demo</a> </div> <p class="text-sm text-primary text-balance text-center md:text-right">In this project I put all my knowledge about React and Node JS to the test on the backend side where I created an API with socket io.</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/kevin/dev/porfolio/src/sections/Projects.astro", void 0);

const navList = [
  {
    name: "Home",
    label: "home",
    path: "#home"
  },
  {
    name: "About",
    label: "about",
    path: "#about"
  },
  {
    name: "Skills",
    label: "skills",
    path: "#skills"
  },
  {
    name: "Projects",
    label: "projects",
    path: "#projects"
  },
  {
    name: "Contact",
    label: "contact",
    path: "mailto:kevinantonioc13@gmail.com"
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate(_a || (_a = __template(["", '<nav class="lg:w-[400px]"> <ul class="list hidden flex flex-col max-w-[200px] bg-bg-secondary h-60 px-6 py-2 gap-4 justify-around absolute right-6 top-20 rounded-md border-2 border-slate-700/50 lg:flex-row lg:flex lg:max-w-full lg:h-full lg:static lg:rounded-none lg:border-none lg:bg-transparent"> ', ' </ul> </nav> <!-- <script>\n  document.addEventListener("astro:page-load", () => {\n    const sections = document.querySelectorAll("section")\n    const navItems = document.querySelectorAll("header nav > ul > li a")\n\n    const callback = (entries: any[]) => {\n      entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n          navItems.forEach((item) => {\n            if (item.getAttribute("aria-label") == entry.target.id) {\n              item.classList.add("text-seconday")\n            } else {\n              item.classList.remove("text-seconday")\n            }\n          })\n        }\n      })\n    }\n\n    const observer = new IntersectionObserver(callback, {\n      root: null,\n      rootMargin: "0px",\n      threshold: 0.3,\n    })\n\n    sections.forEach((section) => {\n      observer.observe(section)\n    })\n\n    // Cleanup function\n    document.onvisibilitychange = () => {\n      if (document.visibilityState === "hidden") {\n        observer.disconnect()\n      } else {\n        sections.forEach((section) => {\n          observer.observe(section)\n        })\n      }\n    }\n  })\n<\/script> -->'])), maybeRenderHead(), navList.map((item) => renderTemplate`<li> <a${addAttribute(item.label, "aria-label")} class="realtive text-sm transition text-primary uppercase hover:text-secondary hover:underline hover:underline-offset-8"${addAttribute(item.path, "href")}>${item.name}</a> </li>`));
}, "C:/Users/kevin/dev/porfolio/src/components/Navbar.astro", void 0);

const $$Astro$6 = createAstro();
const $$Bars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Bars;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-secondary"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path> </svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Bars.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto w-full flex justify-end lg:justify-center items-center p-4 fixed top-0 z-10 " data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-3ef6ksr2": true })} <button id="menu-button" class="flex items-center h-10 w-10 z-40 lg:hidden" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Bars", $$Bars, { "data-astro-cid-3ef6ksr2": true })} </button> </header>  `;
}, "C:/Users/kevin/dev/porfolio/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props.class)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Mail.astro", void 0);

const $$Astro$3 = createAstro();
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/Github.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="" viewBox="0 0 512 512"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>`;
}, "C:/Users/kevin/dev/porfolio/public/icons/LinkedIn.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<section class="section p-10 border-t border-secondary bg-bg-primary"> <div class="max-w-[1024px] mx-auto p-4 flex flex-col md:flex-row gap-10 items-center justify-between md:px-20"> <div class="flex flex-col gap-4 items-center md:items-start"> <div class="text-secondary flex gap-2"> ${renderComponent($$result, "Mail", $$Mail, {})} <a href="mailto:kevinantonioc13@gmail.com" class="text-primary hover:underline hover:underline-offset-4 hover:text-secondary">Contacto</a> </div> <div class="flex items-center gap-2"> <span class="hidden md:inline-block h-0 w-[20px] border border-primary opacity-50"></span> <span class="text-base text-center text-secondary">Kevin Moreno</span> </div> <div class="flex items-center gap-2"> <span class="hidden md:inline-block h-0 w-[20px] border border-primary opacity-50"></span> <span class="text-base text-center text-secondary">+505 84935993</span> </div> </div> <div class="grid grid-cols-2 text-secondary gap-6"> <a class="h-10 w-10" href="https://github.com/KevG1t" target="_blank" rel="noreferrer"> ${renderComponent($$result, "Github", $$Github, {})} </a> <a class="h-10 w-10" href="https://www.linkedin.com/in/kevin-corrales-44a9731aa/" target="_blank" rel="noreferrer"> ${renderComponent($$result, "LinkedIn", $$LinkedIn, {})} </a> </div> </div> </section>`;
}, "C:/Users/kevin/dev/porfolio/src/sections/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Home", $$Home, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/kevin/dev/porfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/kevin/dev/porfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
