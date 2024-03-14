import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CkhaQydD.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"menu-button\"),e=document.querySelector(\".list\");t.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")});\n"}],"styles":[{"type":"external","src":"/_astro/index.By5VG33a.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/kevin/dev/porfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DmObE3_J.mjs","/src/pages/index.astro":"chunks/pages/index_xFgWmUFh.mjs","\u0000@astrojs-manifest":"manifest_DCYmiUZS.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_lmuGh2IY.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Dto_q_Qb.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Astro.astro?raw":"chunks/Astro_SinE7zNU.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/AzureDevops.astro?raw":"chunks/AzureDevops_BQ2T6HV0.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/CSS.astro?raw":"chunks/CSS_DvpM4yMl.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Docker.astro?raw":"chunks/Docker_DyQS1RU_.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Express.astro?raw":"chunks/Express_BJMeglYS.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Git.astro?raw":"chunks/Git_-M1s5RNF.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/GitHub.astro?raw":"chunks/GitHub_CIUepli4.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/GraphQL.astro?raw":"chunks/GraphQL_C6EAQLI6.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/HTML.astro?raw":"chunks/HTML_DqcH9paQ.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/JavaScript.astro?raw":"chunks/JavaScript_CS23cp9L.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/MySQL.astro?raw":"chunks/MySQL_BkQApB6r.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Next.astro?raw":"chunks/Next_-Yo7D8yB.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Node.astro?raw":"chunks/Node_ChewpINX.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/React.astro?raw":"chunks/React_Crq8CNsX.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/SQLServer.astro?raw":"chunks/SQLServer_ZGye2j4V.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Tailwind.astro?raw":"chunks/Tailwind_31mcobcH.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/TypeScript.astro?raw":"chunks/TypeScript_DHEMncCj.mjs","C:/Users/kevin/dev/porfolio/public/skills-icons/Vue.astro?raw":"chunks/Vue_B49wX0eC.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CUqspevK.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/index.By5VG33a.css","/favicon.svg","/cv/cv_en_es.pdf","/icons/ArrowRight.astro","/icons/Backpack.astro","/icons/Bars.astro","/icons/Book.astro","/icons/Briefcase.astro","/icons/Certificate.astro","/icons/Github.astro","/icons/Laptop.astro","/icons/LinkedIn.astro","/icons/Mail.astro","/icons/School.astro","/icons/Stack.astro","/img/ecommerce.webp","/img/movies.webp","/img/quizz.webp","/img/tt.webp","/skills-icons/Astro.astro","/skills-icons/AzureDevops.astro","/skills-icons/CSS.astro","/skills-icons/Docker.astro","/skills-icons/Express.astro","/skills-icons/Git.astro","/skills-icons/GitHub.astro","/skills-icons/GraphQL.astro","/skills-icons/HTML.astro","/skills-icons/JavaScript.astro","/skills-icons/MySQL.astro","/skills-icons/Next.astro","/skills-icons/Node.astro","/skills-icons/React.astro","/skills-icons/SQLServer.astro","/skills-icons/Tailwind.astro","/skills-icons/TypeScript.astro","/skills-icons/Vue.astro"],"buildFormat":"directory"});

export { manifest };
