/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_isHDpYVE.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body id="home"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/kevin/dev/porfolio/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Portfolio personal", "title": "P\xE1gina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl text-text-accent text-center">404</h1> ` })}`;
}, "C:/Users/kevin/dev/porfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/kevin/dev/porfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };