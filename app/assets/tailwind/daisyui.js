/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/daisyui@5.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var o = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
];
const r = (() => {
  let r = !0;
  return (e, t, a, c) => {
    const {
      logs: i = !0,
      root: n = ":root",
      themes: l = ["light --default", "dark --prefersdark"],
      include: s,
      exclude: d,
      prefix: b = "",
    } = e || {};
    !1 !== i &&
      r &&
      (console.log(
        `${atob("Lyoh")} ${decodeURIComponent("%F0%9F%8C%BC")} ${atob(
          "ZGFpc3lVSQ=="
        )} ${c} ${atob("Ki8=")}`
      ),
      (r = !1));
    const u = (o, r) => {
      const e = a[o];
      if (e) {
        let a = `${n}:has(input.theme-controller[value=${o}]:checked),[data-theme=${o}]`;
        r.includes("--default") && (a = `:where(${n}),${a}`),
          t({ [a]: e }),
          r.includes("--prefersdark") &&
            t({ "@media (prefers-color-scheme: dark)": { [n]: e } });
      }
    };
    if ("all" === l)
      a.light && u("light", ["--default"]),
        a.dark && t({ "@media (prefers-color-scheme: dark)": { [n]: a.dark } }),
        o.forEach((o) => {
          a[o] && u(o, []);
        });
    else if (l) {
      const o = Array.isArray(l) ? l : [l];
      o.forEach((o) => {
        const [r, ...e] = o.split(" ");
        e.includes("--default") && u(r, ["--default"]);
      }),
        o.forEach((o) => {
          const [r, ...e] = o.split(" ");
          e.includes("--prefersdark") &&
            t({ "@media (prefers-color-scheme: dark)": { [n]: a[r] } });
        }),
        o.forEach((o) => {
          const [r] = o.split(" ");
          u(r, []);
        });
    }
    return { include: s, exclude: d, prefix: b };
  };
})();
var e = {
    colors: {
      "base-100": "var(--color-base-100)",
      "base-200": "var(--color-base-200)",
      "base-300": "var(--color-base-300)",
      "base-content": "var(--color-base-content)",
      primary: "var(--color-primary)",
      "primary-content": "var(--color-primary-content)",
      secondary: "var(--color-secondary)",
      "secondary-content": "var(--color-secondary-content)",
      accent: "var(--color-accent)",
      "accent-content": "var(--color-accent-content)",
      neutral: "var(--color-neutral)",
      "neutral-content": "var(--color-neutral-content)",
      info: "var(--color-info)",
      "info-content": "var(--color-info-content)",
      success: "var(--color-success)",
      "success-content": "var(--color-success-content)",
      warning: "var(--color-warning)",
      "warning-content": "var(--color-warning-content)",
      error: "var(--color-error)",
      "error-content": "var(--color-error-content)",
    },
    borderRadius: {
      selector: "var(--radius-selector)",
      field: "var(--radius-field)",
      box: "var(--radius-box)",
    },
  },
  t = {
    caramellatte: {
      "color-scheme": "light",
      "--color-base-100": "oklch(98% 0.016 73.684)",
      "--color-base-200": "oklch(95% 0.038 75.164)",
      "--color-base-300": "oklch(90% 0.076 70.697)",
      "--color-base-content": "oklch(40% 0.123 38.172)",
      "--color-primary": "oklch(0% 0 0)",
      "--color-primary-content": "oklch(100% 0 0)",
      "--color-secondary": "oklch(22.45% 0.075 37.85)",
      "--color-secondary-content": "oklch(90% 0.076 70.697)",
      "--color-accent": "oklch(46.44% 0.111 37.85)",
      "--color-accent-content": "oklch(90% 0.076 70.697)",
      "--color-neutral": "oklch(55% 0.195 38.402)",
      "--color-neutral-content": "oklch(98% 0.016 73.684)",
      "--color-info": "oklch(42% 0.199 265.638)",
      "--color-info-content": "oklch(90% 0.076 70.697)",
      "--color-success": "oklch(43% 0.095 166.913)",
      "--color-success-content": "oklch(90% 0.076 70.697)",
      "--color-warning": "oklch(82% 0.189 84.429)",
      "--color-warning-content": "oklch(41% 0.112 45.904)",
      "--color-error": "oklch(70% 0.191 22.216)",
      "--color-error-content": "oklch(39% 0.141 25.723)",
      "--radius-selector": "2rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "2px",
      "--depth": "1",
      "--noise": "1",
    },
    halloween: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(21% 0.006 56.043)",
      "--color-base-200": "oklch(14% 0.004 49.25)",
      "--color-base-300": "oklch(0% 0 0)",
      "--color-base-content": "oklch(84.955% 0 0)",
      "--color-primary": "oklch(77.48% 0.204 60.62)",
      "--color-primary-content": "oklch(19.693% 0.004 196.779)",
      "--color-secondary": "oklch(45.98% 0.248 305.03)",
      "--color-secondary-content": "oklch(89.196% 0.049 305.03)",
      "--color-accent": "oklch(64.8% 0.223 136.073)",
      "--color-accent-content": "oklch(0% 0 0)",
      "--color-neutral": "oklch(24.371% 0.046 65.681)",
      "--color-neutral-content": "oklch(84.874% 0.009 65.681)",
      "--color-info": "oklch(54.615% 0.215 262.88)",
      "--color-info-content": "oklch(90.923% 0.043 262.88)",
      "--color-success": "oklch(62.705% 0.169 149.213)",
      "--color-success-content": "oklch(12.541% 0.033 149.213)",
      "--color-warning": "oklch(66.584% 0.157 58.318)",
      "--color-warning-content": "oklch(13.316% 0.031 58.318)",
      "--color-error": "oklch(65.72% 0.199 27.33)",
      "--color-error-content": "oklch(13.144% 0.039 27.33)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    forest: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(20.84% 0.008 17.911)",
      "--color-base-200": "oklch(18.522% 0.007 17.911)",
      "--color-base-300": "oklch(16.203% 0.007 17.911)",
      "--color-base-content": "oklch(83.768% 0.001 17.911)",
      "--color-primary": "oklch(68.628% 0.185 148.958)",
      "--color-primary-content": "oklch(0% 0 0)",
      "--color-secondary": "oklch(69.776% 0.135 168.327)",
      "--color-secondary-content": "oklch(13.955% 0.027 168.327)",
      "--color-accent": "oklch(70.628% 0.119 185.713)",
      "--color-accent-content": "oklch(14.125% 0.023 185.713)",
      "--color-neutral": "oklch(30.698% 0.039 171.364)",
      "--color-neutral-content": "oklch(86.139% 0.007 171.364)",
      "--color-info": "oklch(72.06% 0.191 231.6)",
      "--color-info-content": "oklch(0% 0 0)",
      "--color-success": "oklch(64.8% 0.15 160)",
      "--color-success-content": "oklch(0% 0 0)",
      "--color-warning": "oklch(84.71% 0.199 83.87)",
      "--color-warning-content": "oklch(0% 0 0)",
      "--color-error": "oklch(71.76% 0.221 22.18)",
      "--color-error-content": "oklch(0% 0 0)",
      "--radius-selector": "1rem",
      "--radius-field": "2rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    corporate: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(93% 0 0)",
      "--color-base-300": "oklch(86% 0 0)",
      "--color-base-content": "oklch(22.389% 0.031 278.072)",
      "--color-primary": "oklch(58% 0.158 241.966)",
      "--color-primary-content": "oklch(100% 0 0)",
      "--color-secondary": "oklch(55% 0.046 257.417)",
      "--color-secondary-content": "oklch(100% 0 0)",
      "--color-accent": "oklch(60% 0.118 184.704)",
      "--color-accent-content": "oklch(100% 0 0)",
      "--color-neutral": "oklch(0% 0 0)",
      "--color-neutral-content": "oklch(100% 0 0)",
      "--color-info": "oklch(60% 0.126 221.723)",
      "--color-info-content": "oklch(100% 0 0)",
      "--color-success": "oklch(62% 0.194 149.214)",
      "--color-success-content": "oklch(100% 0 0)",
      "--color-warning": "oklch(85% 0.199 91.936)",
      "--color-warning-content": "oklch(0% 0 0)",
      "--color-error": "oklch(70% 0.191 22.216)",
      "--color-error-content": "oklch(0% 0 0)",
      "--radius-selector": "0.25rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.25rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    sunset: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(22% 0.019 237.69)",
      "--color-base-200": "oklch(20% 0.019 237.69)",
      "--color-base-300": "oklch(18% 0.019 237.69)",
      "--color-base-content": "oklch(77.383% 0.043 245.096)",
      "--color-primary": "oklch(74.703% 0.158 39.947)",
      "--color-primary-content": "oklch(14.94% 0.031 39.947)",
      "--color-secondary": "oklch(72.537% 0.177 2.72)",
      "--color-secondary-content": "oklch(14.507% 0.035 2.72)",
      "--color-accent": "oklch(71.294% 0.166 299.844)",
      "--color-accent-content": "oklch(14.258% 0.033 299.844)",
      "--color-neutral": "oklch(26% 0.019 237.69)",
      "--color-neutral-content": "oklch(70% 0.019 237.69)",
      "--color-info": "oklch(85.559% 0.085 206.015)",
      "--color-info-content": "oklch(17.111% 0.017 206.015)",
      "--color-success": "oklch(85.56% 0.085 144.778)",
      "--color-success-content": "oklch(17.112% 0.017 144.778)",
      "--color-warning": "oklch(85.569% 0.084 74.427)",
      "--color-warning-content": "oklch(17.113% 0.016 74.427)",
      "--color-error": "oklch(85.511% 0.078 16.886)",
      "--color-error-content": "oklch(17.102% 0.015 16.886)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    pastel: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(98.462% 0.001 247.838)",
      "--color-base-300": "oklch(92.462% 0.001 247.838)",
      "--color-base-content": "oklch(20% 0 0)",
      "--color-primary": "oklch(90% 0.063 306.703)",
      "--color-primary-content": "oklch(49% 0.265 301.924)",
      "--color-secondary": "oklch(89% 0.058 10.001)",
      "--color-secondary-content": "oklch(51% 0.222 16.935)",
      "--color-accent": "oklch(90% 0.093 164.15)",
      "--color-accent-content": "oklch(50% 0.118 165.612)",
      "--color-neutral": "oklch(55% 0.046 257.417)",
      "--color-neutral-content": "oklch(92% 0.013 255.508)",
      "--color-info": "oklch(86% 0.127 207.078)",
      "--color-info-content": "oklch(52% 0.105 223.128)",
      "--color-success": "oklch(87% 0.15 154.449)",
      "--color-success-content": "oklch(52% 0.154 150.069)",
      "--color-warning": "oklch(83% 0.128 66.29)",
      "--color-warning-content": "oklch(55% 0.195 38.402)",
      "--color-error": "oklch(80% 0.114 19.571)",
      "--color-error-content": "oklch(50% 0.213 27.518)",
      "--radius-selector": "1rem",
      "--radius-field": "2rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "2px",
      "--depth": "0",
      "--noise": "0",
    },
    winter: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(97.466% 0.011 259.822)",
      "--color-base-300": "oklch(93.268% 0.016 262.751)",
      "--color-base-content": "oklch(41.886% 0.053 255.824)",
      "--color-primary": "oklch(56.86% 0.255 257.57)",
      "--color-primary-content": "oklch(91.372% 0.051 257.57)",
      "--color-secondary": "oklch(42.551% 0.161 282.339)",
      "--color-secondary-content": "oklch(88.51% 0.032 282.339)",
      "--color-accent": "oklch(59.939% 0.191 335.171)",
      "--color-accent-content": "oklch(11.988% 0.038 335.171)",
      "--color-neutral": "oklch(19.616% 0.063 257.651)",
      "--color-neutral-content": "oklch(83.923% 0.012 257.651)",
      "--color-info": "oklch(88.127% 0.085 214.515)",
      "--color-info-content": "oklch(17.625% 0.017 214.515)",
      "--color-success": "oklch(80.494% 0.077 197.823)",
      "--color-success-content": "oklch(16.098% 0.015 197.823)",
      "--color-warning": "oklch(89.172% 0.045 71.47)",
      "--color-warning-content": "oklch(17.834% 0.009 71.47)",
      "--color-error": "oklch(73.092% 0.11 20.076)",
      "--color-error-content": "oklch(14.618% 0.022 20.076)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    nord: {
      "color-scheme": "light",
      "--color-base-100": "oklch(95.127% 0.007 260.731)",
      "--color-base-200": "oklch(93.299% 0.01 261.788)",
      "--color-base-300": "oklch(89.925% 0.016 262.749)",
      "--color-base-content": "oklch(32.437% 0.022 264.182)",
      "--color-primary": "oklch(59.435% 0.077 254.027)",
      "--color-primary-content": "oklch(11.887% 0.015 254.027)",
      "--color-secondary": "oklch(69.651% 0.059 248.687)",
      "--color-secondary-content": "oklch(13.93% 0.011 248.687)",
      "--color-accent": "oklch(77.464% 0.062 217.469)",
      "--color-accent-content": "oklch(15.492% 0.012 217.469)",
      "--color-neutral": "oklch(45.229% 0.035 264.131)",
      "--color-neutral-content": "oklch(89.925% 0.016 262.749)",
      "--color-info": "oklch(69.207% 0.062 332.664)",
      "--color-info-content": "oklch(13.841% 0.012 332.664)",
      "--color-success": "oklch(76.827% 0.074 131.063)",
      "--color-success-content": "oklch(15.365% 0.014 131.063)",
      "--color-warning": "oklch(85.486% 0.089 84.093)",
      "--color-warning-content": "oklch(17.097% 0.017 84.093)",
      "--color-error": "oklch(60.61% 0.12 15.341)",
      "--color-error-content": "oklch(12.122% 0.024 15.341)",
      "--radius-selector": "1rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.5rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    retro: {
      "color-scheme": "light",
      "--color-base-100": "oklch(91.637% 0.034 90.515)",
      "--color-base-200": "oklch(88.272% 0.049 91.774)",
      "--color-base-300": "oklch(84.133% 0.065 90.856)",
      "--color-base-content": "oklch(41% 0.112 45.904)",
      "--color-primary": "oklch(80% 0.114 19.571)",
      "--color-primary-content": "oklch(39% 0.141 25.723)",
      "--color-secondary": "oklch(92% 0.084 155.995)",
      "--color-secondary-content": "oklch(44% 0.119 151.328)",
      "--color-accent": "oklch(68% 0.162 75.834)",
      "--color-accent-content": "oklch(41% 0.112 45.904)",
      "--color-neutral": "oklch(44% 0.011 73.639)",
      "--color-neutral-content": "oklch(86% 0.005 56.366)",
      "--color-info": "oklch(58% 0.158 241.966)",
      "--color-info-content": "oklch(96% 0.059 95.617)",
      "--color-success": "oklch(51% 0.096 186.391)",
      "--color-success-content": "oklch(96% 0.059 95.617)",
      "--color-warning": "oklch(64% 0.222 41.116)",
      "--color-warning-content": "oklch(96% 0.059 95.617)",
      "--color-error": "oklch(70% 0.191 22.216)",
      "--color-error-content": "oklch(40% 0.123 38.172)",
      "--radius-selector": "0.25rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.5rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    silk: {
      "color-scheme": "light",
      "--color-base-100": "oklch(97% 0.0035 67.78)",
      "--color-base-200": "oklch(95% 0.0081 61.42)",
      "--color-base-300": "oklch(90% 0.0081 61.42)",
      "--color-base-content": "oklch(40% 0.0081 61.42)",
      "--color-primary": "oklch(23.27% 0.0249 284.3)",
      "--color-primary-content": "oklch(94.22% 0.2505 117.44)",
      "--color-secondary": "oklch(23.27% 0.0249 284.3)",
      "--color-secondary-content": "oklch(73.92% 0.2135 50.94)",
      "--color-accent": "oklch(23.27% 0.0249 284.3)",
      "--color-accent-content": "oklch(88.92% 0.2061 189.9)",
      "--color-neutral": "oklch(20% 0 0)",
      "--color-neutral-content": "oklch(80% 0.0081 61.42)",
      "--color-info": "oklch(80.39% 0.1148 241.68)",
      "--color-info-content": "oklch(30.39% 0.1148 241.68)",
      "--color-success": "oklch(83.92% 0.0901 136.87)",
      "--color-success-content": "oklch(23.92% 0.0901 136.87)",
      "--color-warning": "oklch(83.92% 0.1085 80)",
      "--color-warning-content": "oklch(43.92% 0.1085 80)",
      "--color-error": "oklch(75.1% 0.1814 22.37)",
      "--color-error-content": "oklch(35.1% 0.1814 22.37)",
      "--radius-selector": "2rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "2px",
      "--depth": "1",
      "--noise": "0",
    },
    lofi: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(97% 0 0)",
      "--color-base-300": "oklch(94% 0 0)",
      "--color-base-content": "oklch(0% 0 0)",
      "--color-primary": "oklch(15.906% 0 0)",
      "--color-primary-content": "oklch(100% 0 0)",
      "--color-secondary": "oklch(21.455% 0.001 17.278)",
      "--color-secondary-content": "oklch(100% 0 0)",
      "--color-accent": "oklch(26.861% 0 0)",
      "--color-accent-content": "oklch(100% 0 0)",
      "--color-neutral": "oklch(0% 0 0)",
      "--color-neutral-content": "oklch(100% 0 0)",
      "--color-info": "oklch(79.54% 0.103 205.9)",
      "--color-info-content": "oklch(15.908% 0.02 205.9)",
      "--color-success": "oklch(90.13% 0.153 164.14)",
      "--color-success-content": "oklch(18.026% 0.03 164.14)",
      "--color-warning": "oklch(88.37% 0.135 79.94)",
      "--color-warning-content": "oklch(17.674% 0.027 79.94)",
      "--color-error": "oklch(78.66% 0.15 28.47)",
      "--color-error-content": "oklch(15.732% 0.03 28.47)",
      "--radius-selector": "2rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.5rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    coffee: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(24% 0.023 329.708)",
      "--color-base-200": "oklch(21% 0.021 329.708)",
      "--color-base-300": "oklch(16% 0.019 329.708)",
      "--color-base-content": "oklch(72.354% 0.092 79.129)",
      "--color-primary": "oklch(71.996% 0.123 62.756)",
      "--color-primary-content": "oklch(14.399% 0.024 62.756)",
      "--color-secondary": "oklch(34.465% 0.029 199.194)",
      "--color-secondary-content": "oklch(86.893% 0.005 199.194)",
      "--color-accent": "oklch(42.621% 0.074 224.389)",
      "--color-accent-content": "oklch(88.524% 0.014 224.389)",
      "--color-neutral": "oklch(16.51% 0.015 326.261)",
      "--color-neutral-content": "oklch(83.302% 0.003 326.261)",
      "--color-info": "oklch(79.49% 0.063 184.558)",
      "--color-info-content": "oklch(15.898% 0.012 184.558)",
      "--color-success": "oklch(74.722% 0.072 131.116)",
      "--color-success-content": "oklch(14.944% 0.014 131.116)",
      "--color-warning": "oklch(88.15% 0.14 87.722)",
      "--color-warning-content": "oklch(17.63% 0.028 87.722)",
      "--color-error": "oklch(77.318% 0.128 31.871)",
      "--color-error-content": "oklch(15.463% 0.025 31.871)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    aqua: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(37% 0.146 265.522)",
      "--color-base-200": "oklch(28% 0.091 267.935)",
      "--color-base-300": "oklch(22% 0.091 267.935)",
      "--color-base-content": "oklch(90% 0.058 230.902)",
      "--color-primary": "oklch(85.661% 0.144 198.645)",
      "--color-primary-content": "oklch(40.124% 0.068 197.603)",
      "--color-secondary": "oklch(60.682% 0.108 309.782)",
      "--color-secondary-content": "oklch(96% 0.016 293.756)",
      "--color-accent": "oklch(93.426% 0.102 94.555)",
      "--color-accent-content": "oklch(18.685% 0.02 94.555)",
      "--color-neutral": "oklch(27% 0.146 265.522)",
      "--color-neutral-content": "oklch(80% 0.146 265.522)",
      "--color-info": "oklch(54.615% 0.215 262.88)",
      "--color-info-content": "oklch(90.923% 0.043 262.88)",
      "--color-success": "oklch(62.705% 0.169 149.213)",
      "--color-success-content": "oklch(12.541% 0.033 149.213)",
      "--color-warning": "oklch(66.584% 0.157 58.318)",
      "--color-warning-content": "oklch(27% 0.077 45.635)",
      "--color-error": "oklch(73.95% 0.19 27.33)",
      "--color-error-content": "oklch(14.79% 0.038 27.33)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    wireframe: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(97% 0 0)",
      "--color-base-300": "oklch(94% 0 0)",
      "--color-base-content": "oklch(20% 0 0)",
      "--color-primary": "oklch(87% 0 0)",
      "--color-primary-content": "oklch(26% 0 0)",
      "--color-secondary": "oklch(87% 0 0)",
      "--color-secondary-content": "oklch(26% 0 0)",
      "--color-accent": "oklch(87% 0 0)",
      "--color-accent-content": "oklch(26% 0 0)",
      "--color-neutral": "oklch(87% 0 0)",
      "--color-neutral-content": "oklch(26% 0 0)",
      "--color-info": "oklch(44% 0.11 240.79)",
      "--color-info-content": "oklch(90% 0.058 230.902)",
      "--color-success": "oklch(43% 0.095 166.913)",
      "--color-success-content": "oklch(90% 0.093 164.15)",
      "--color-warning": "oklch(47% 0.137 46.201)",
      "--color-warning-content": "oklch(92% 0.12 95.746)",
      "--color-error": "oklch(44% 0.177 26.899)",
      "--color-error-content": "oklch(88% 0.062 18.334)",
      "--radius-selector": "0rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.25rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    acid: {
      "color-scheme": "light",
      "--color-base-100": "oklch(98% 0 0)",
      "--color-base-200": "oklch(95% 0 0)",
      "--color-base-300": "oklch(91% 0 0)",
      "--color-base-content": "oklch(0% 0 0)",
      "--color-primary": "oklch(71.9% 0.357 330.759)",
      "--color-primary-content": "oklch(14.38% 0.071 330.759)",
      "--color-secondary": "oklch(73.37% 0.224 48.25)",
      "--color-secondary-content": "oklch(14.674% 0.044 48.25)",
      "--color-accent": "oklch(92.78% 0.264 122.962)",
      "--color-accent-content": "oklch(18.556% 0.052 122.962)",
      "--color-neutral": "oklch(21.31% 0.128 278.68)",
      "--color-neutral-content": "oklch(84.262% 0.025 278.68)",
      "--color-info": "oklch(60.72% 0.227 252.05)",
      "--color-info-content": "oklch(12.144% 0.045 252.05)",
      "--color-success": "oklch(85.72% 0.266 158.53)",
      "--color-success-content": "oklch(17.144% 0.053 158.53)",
      "--color-warning": "oklch(91.01% 0.212 100.5)",
      "--color-warning-content": "oklch(18.202% 0.042 100.5)",
      "--color-error": "oklch(64.84% 0.293 29.349)",
      "--color-error-content": "oklch(12.968% 0.058 29.349)",
      "--radius-selector": "1rem",
      "--radius-field": "1rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    lemonade: {
      "color-scheme": "light",
      "--color-base-100": "oklch(98.71% 0.02 123.72)",
      "--color-base-200": "oklch(91.8% 0.018 123.72)",
      "--color-base-300": "oklch(84.89% 0.017 123.72)",
      "--color-base-content": "oklch(19.742% 0.004 123.72)",
      "--color-primary": "oklch(58.92% 0.199 134.6)",
      "--color-primary-content": "oklch(11.784% 0.039 134.6)",
      "--color-secondary": "oklch(77.75% 0.196 111.09)",
      "--color-secondary-content": "oklch(15.55% 0.039 111.09)",
      "--color-accent": "oklch(85.39% 0.201 100.73)",
      "--color-accent-content": "oklch(17.078% 0.04 100.73)",
      "--color-neutral": "oklch(30.98% 0.075 108.6)",
      "--color-neutral-content": "oklch(86.196% 0.015 108.6)",
      "--color-info": "oklch(86.19% 0.047 224.14)",
      "--color-info-content": "oklch(17.238% 0.009 224.14)",
      "--color-success": "oklch(86.19% 0.047 157.85)",
      "--color-success-content": "oklch(17.238% 0.009 157.85)",
      "--color-warning": "oklch(86.19% 0.047 102.15)",
      "--color-warning-content": "oklch(17.238% 0.009 102.15)",
      "--color-error": "oklch(86.19% 0.047 25.85)",
      "--color-error-content": "oklch(17.238% 0.009 25.85)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    business: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(24.353% 0 0)",
      "--color-base-200": "oklch(22.648% 0 0)",
      "--color-base-300": "oklch(20.944% 0 0)",
      "--color-base-content": "oklch(84.87% 0 0)",
      "--color-primary": "oklch(41.703% 0.099 251.473)",
      "--color-primary-content": "oklch(88.34% 0.019 251.473)",
      "--color-secondary": "oklch(64.092% 0.027 229.389)",
      "--color-secondary-content": "oklch(12.818% 0.005 229.389)",
      "--color-accent": "oklch(67.271% 0.167 35.791)",
      "--color-accent-content": "oklch(13.454% 0.033 35.791)",
      "--color-neutral": "oklch(27.441% 0.013 253.041)",
      "--color-neutral-content": "oklch(85.488% 0.002 253.041)",
      "--color-info": "oklch(62.616% 0.143 240.033)",
      "--color-info-content": "oklch(12.523% 0.028 240.033)",
      "--color-success": "oklch(70.226% 0.094 156.596)",
      "--color-success-content": "oklch(14.045% 0.018 156.596)",
      "--color-warning": "oklch(77.482% 0.115 81.519)",
      "--color-warning-content": "oklch(15.496% 0.023 81.519)",
      "--color-error": "oklch(51.61% 0.146 29.674)",
      "--color-error-content": "oklch(90.322% 0.029 29.674)",
      "--radius-selector": "0rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.25rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    abyss: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(20% 0.08 209)",
      "--color-base-200": "oklch(15% 0.08 209)",
      "--color-base-300": "oklch(10% 0.08 209)",
      "--color-base-content": "oklch(90% 0.076 70.697)",
      "--color-primary": "oklch(92% 0.2653 125)",
      "--color-primary-content": "oklch(50% 0.2653 125)",
      "--color-secondary": "oklch(83.27% 0.0764 298.3)",
      "--color-secondary-content": "oklch(43.27% 0.0764 298.3)",
      "--color-accent": "oklch(43% 0 0)",
      "--color-accent-content": "oklch(98% 0 0)",
      "--color-neutral": "oklch(30% 0.08 209)",
      "--color-neutral-content": "oklch(90% 0.076 70.697)",
      "--color-info": "oklch(74% 0.16 232.661)",
      "--color-info-content": "oklch(29% 0.066 243.157)",
      "--color-success": "oklch(79% 0.209 151.711)",
      "--color-success-content": "oklch(26% 0.065 152.934)",
      "--color-warning": "oklch(84.8% 0.1962 84.62)",
      "--color-warning-content": "oklch(44.8% 0.1962 84.62)",
      "--color-error": "oklch(65% 0.1985 24.22)",
      "--color-error-content": "oklch(27% 0.1985 24.22)",
      "--radius-selector": "2rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.5rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    fantasy: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(93% 0 0)",
      "--color-base-300": "oklch(86% 0 0)",
      "--color-base-content": "oklch(27.807% 0.029 256.847)",
      "--color-primary": "oklch(37.45% 0.189 325.02)",
      "--color-primary-content": "oklch(87.49% 0.037 325.02)",
      "--color-secondary": "oklch(53.92% 0.162 241.36)",
      "--color-secondary-content": "oklch(90.784% 0.032 241.36)",
      "--color-accent": "oklch(75.98% 0.204 56.72)",
      "--color-accent-content": "oklch(15.196% 0.04 56.72)",
      "--color-neutral": "oklch(27.807% 0.029 256.847)",
      "--color-neutral-content": "oklch(85.561% 0.005 256.847)",
      "--color-info": "oklch(72.06% 0.191 231.6)",
      "--color-info-content": "oklch(0% 0 0)",
      "--color-success": "oklch(64.8% 0.15 160)",
      "--color-success-content": "oklch(0% 0 0)",
      "--color-warning": "oklch(84.71% 0.199 83.87)",
      "--color-warning-content": "oklch(0% 0 0)",
      "--color-error": "oklch(71.76% 0.221 22.18)",
      "--color-error-content": "oklch(0% 0 0)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    dark: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(25.33% 0.016 252.42)",
      "--color-base-200": "oklch(23.26% 0.014 253.1)",
      "--color-base-300": "oklch(21.15% 0.012 254.09)",
      "--color-base-content": "oklch(97.807% 0.029 256.847)",
      "--color-primary": "oklch(58% 0.233 277.117)",
      "--color-primary-content": "oklch(96% 0.018 272.314)",
      "--color-secondary": "oklch(65% 0.241 354.308)",
      "--color-secondary-content": "oklch(94% 0.028 342.258)",
      "--color-accent": "oklch(77% 0.152 181.912)",
      "--color-accent-content": "oklch(38% 0.063 188.416)",
      "--color-neutral": "oklch(14% 0.005 285.823)",
      "--color-neutral-content": "oklch(92% 0.004 286.32)",
      "--color-info": "oklch(74% 0.16 232.661)",
      "--color-info-content": "oklch(29% 0.066 243.157)",
      "--color-success": "oklch(76% 0.177 163.223)",
      "--color-success-content": "oklch(37% 0.077 168.94)",
      "--color-warning": "oklch(82% 0.189 84.429)",
      "--color-warning-content": "oklch(41% 0.112 45.904)",
      "--color-error": "oklch(71% 0.194 13.428)",
      "--color-error-content": "oklch(27% 0.105 12.094)",
      "--radius-selector": "0.5rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.5rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    cmyk: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(95% 0 0)",
      "--color-base-300": "oklch(90% 0 0)",
      "--color-base-content": "oklch(20% 0 0)",
      "--color-primary": "oklch(71.772% 0.133 239.443)",
      "--color-primary-content": "oklch(14.354% 0.026 239.443)",
      "--color-secondary": "oklch(64.476% 0.202 359.339)",
      "--color-secondary-content": "oklch(12.895% 0.04 359.339)",
      "--color-accent": "oklch(94.228% 0.189 105.306)",
      "--color-accent-content": "oklch(18.845% 0.037 105.306)",
      "--color-neutral": "oklch(21.778% 0 0)",
      "--color-neutral-content": "oklch(84.355% 0 0)",
      "--color-info": "oklch(68.475% 0.094 217.284)",
      "--color-info-content": "oklch(13.695% 0.018 217.284)",
      "--color-success": "oklch(46.949% 0.162 321.406)",
      "--color-success-content": "oklch(89.389% 0.032 321.406)",
      "--color-warning": "oklch(71.236% 0.159 52.023)",
      "--color-warning-content": "oklch(14.247% 0.031 52.023)",
      "--color-error": "oklch(62.013% 0.208 28.717)",
      "--color-error-content": "oklch(12.402% 0.041 28.717)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    emerald: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(93% 0 0)",
      "--color-base-300": "oklch(86% 0 0)",
      "--color-base-content": "oklch(35.519% 0.032 262.988)",
      "--color-primary": "oklch(76.662% 0.135 153.45)",
      "--color-primary-content": "oklch(33.387% 0.04 162.24)",
      "--color-secondary": "oklch(61.302% 0.202 261.294)",
      "--color-secondary-content": "oklch(100% 0 0)",
      "--color-accent": "oklch(72.772% 0.149 33.2)",
      "--color-accent-content": "oklch(0% 0 0)",
      "--color-neutral": "oklch(35.519% 0.032 262.988)",
      "--color-neutral-content": "oklch(98.462% 0.001 247.838)",
      "--color-info": "oklch(72.06% 0.191 231.6)",
      "--color-info-content": "oklch(0% 0 0)",
      "--color-success": "oklch(64.8% 0.15 160)",
      "--color-success-content": "oklch(0% 0 0)",
      "--color-warning": "oklch(84.71% 0.199 83.87)",
      "--color-warning-content": "oklch(0% 0 0)",
      "--color-error": "oklch(71.76% 0.221 22.18)",
      "--color-error-content": "oklch(0% 0 0)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    dracula: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(28.822% 0.022 277.508)",
      "--color-base-200": "oklch(26.805% 0.02 277.508)",
      "--color-base-300": "oklch(24.787% 0.019 277.508)",
      "--color-base-content": "oklch(97.747% 0.007 106.545)",
      "--color-primary": "oklch(75.461% 0.183 346.812)",
      "--color-primary-content": "oklch(15.092% 0.036 346.812)",
      "--color-secondary": "oklch(74.202% 0.148 301.883)",
      "--color-secondary-content": "oklch(14.84% 0.029 301.883)",
      "--color-accent": "oklch(83.392% 0.124 66.558)",
      "--color-accent-content": "oklch(16.678% 0.024 66.558)",
      "--color-neutral": "oklch(39.445% 0.032 275.524)",
      "--color-neutral-content": "oklch(87.889% 0.006 275.524)",
      "--color-info": "oklch(88.263% 0.093 212.846)",
      "--color-info-content": "oklch(17.652% 0.018 212.846)",
      "--color-success": "oklch(87.099% 0.219 148.024)",
      "--color-success-content": "oklch(17.419% 0.043 148.024)",
      "--color-warning": "oklch(95.533% 0.134 112.757)",
      "--color-warning-content": "oklch(19.106% 0.026 112.757)",
      "--color-error": "oklch(68.22% 0.206 24.43)",
      "--color-error-content": "oklch(13.644% 0.041 24.43)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    black: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(0% 0 0)",
      "--color-base-200": "oklch(19% 0 0)",
      "--color-base-300": "oklch(22% 0 0)",
      "--color-base-content": "oklch(87.609% 0 0)",
      "--color-primary": "oklch(35% 0 0)",
      "--color-primary-content": "oklch(100% 0 0)",
      "--color-secondary": "oklch(35% 0 0)",
      "--color-secondary-content": "oklch(100% 0 0)",
      "--color-accent": "oklch(35% 0 0)",
      "--color-accent-content": "oklch(100% 0 0)",
      "--color-neutral": "oklch(35% 0 0)",
      "--color-neutral-content": "oklch(100% 0 0)",
      "--color-info": "oklch(45.201% 0.313 264.052)",
      "--color-info-content": "oklch(89.04% 0.062 264.052)",
      "--color-success": "oklch(51.975% 0.176 142.495)",
      "--color-success-content": "oklch(90.395% 0.035 142.495)",
      "--color-warning": "oklch(96.798% 0.211 109.769)",
      "--color-warning-content": "oklch(19.359% 0.042 109.769)",
      "--color-error": "oklch(62.795% 0.257 29.233)",
      "--color-error-content": "oklch(12.559% 0.051 29.233)",
      "--radius-selector": "0rem",
      "--radius-field": "0rem",
      "--radius-box": "0rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    night: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(20.768% 0.039 265.754)",
      "--color-base-200": "oklch(19.314% 0.037 265.754)",
      "--color-base-300": "oklch(17.86% 0.034 265.754)",
      "--color-base-content": "oklch(84.153% 0.007 265.754)",
      "--color-primary": "oklch(75.351% 0.138 232.661)",
      "--color-primary-content": "oklch(15.07% 0.027 232.661)",
      "--color-secondary": "oklch(68.011% 0.158 276.934)",
      "--color-secondary-content": "oklch(13.602% 0.031 276.934)",
      "--color-accent": "oklch(72.36% 0.176 350.048)",
      "--color-accent-content": "oklch(14.472% 0.035 350.048)",
      "--color-neutral": "oklch(27.949% 0.036 260.03)",
      "--color-neutral-content": "oklch(85.589% 0.007 260.03)",
      "--color-info": "oklch(68.455% 0.148 237.251)",
      "--color-info-content": "oklch(0% 0 0)",
      "--color-success": "oklch(78.452% 0.132 181.911)",
      "--color-success-content": "oklch(15.69% 0.026 181.911)",
      "--color-warning": "oklch(83.242% 0.139 82.95)",
      "--color-warning-content": "oklch(16.648% 0.027 82.95)",
      "--color-error": "oklch(71.785% 0.17 13.118)",
      "--color-error-content": "oklch(14.357% 0.034 13.118)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    autumn: {
      "color-scheme": "light",
      "--color-base-100": "oklch(95.814% 0 0)",
      "--color-base-200": "oklch(89.107% 0 0)",
      "--color-base-300": "oklch(82.4% 0 0)",
      "--color-base-content": "oklch(19.162% 0 0)",
      "--color-primary": "oklch(40.723% 0.161 17.53)",
      "--color-primary-content": "oklch(88.144% 0.032 17.53)",
      "--color-secondary": "oklch(61.676% 0.169 23.865)",
      "--color-secondary-content": "oklch(12.335% 0.033 23.865)",
      "--color-accent": "oklch(73.425% 0.094 60.729)",
      "--color-accent-content": "oklch(14.685% 0.018 60.729)",
      "--color-neutral": "oklch(54.367% 0.037 51.902)",
      "--color-neutral-content": "oklch(90.873% 0.007 51.902)",
      "--color-info": "oklch(69.224% 0.097 207.284)",
      "--color-info-content": "oklch(13.844% 0.019 207.284)",
      "--color-success": "oklch(60.995% 0.08 174.616)",
      "--color-success-content": "oklch(12.199% 0.016 174.616)",
      "--color-warning": "oklch(70.081% 0.164 56.844)",
      "--color-warning-content": "oklch(14.016% 0.032 56.844)",
      "--color-error": "oklch(53.07% 0.241 24.16)",
      "--color-error-content": "oklch(90.614% 0.048 24.16)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    cyberpunk: {
      "color-scheme": "light",
      "--color-base-100": "oklch(94.51% 0.179 104.32)",
      "--color-base-200": "oklch(91.51% 0.179 104.32)",
      "--color-base-300": "oklch(85.51% 0.179 104.32)",
      "--color-base-content": "oklch(0% 0 0)",
      "--color-primary": "oklch(74.22% 0.209 6.35)",
      "--color-primary-content": "oklch(14.844% 0.041 6.35)",
      "--color-secondary": "oklch(83.33% 0.184 204.72)",
      "--color-secondary-content": "oklch(16.666% 0.036 204.72)",
      "--color-accent": "oklch(71.86% 0.217 310.43)",
      "--color-accent-content": "oklch(14.372% 0.043 310.43)",
      "--color-neutral": "oklch(23.04% 0.065 269.31)",
      "--color-neutral-content": "oklch(94.51% 0.179 104.32)",
      "--color-info": "oklch(72.06% 0.191 231.6)",
      "--color-info-content": "oklch(0% 0 0)",
      "--color-success": "oklch(64.8% 0.15 160)",
      "--color-success-content": "oklch(0% 0 0)",
      "--color-warning": "oklch(84.71% 0.199 83.87)",
      "--color-warning-content": "oklch(0% 0 0)",
      "--color-error": "oklch(71.76% 0.221 22.18)",
      "--color-error-content": "oklch(0% 0 0)",
      "--radius-selector": "0rem",
      "--radius-field": "0rem",
      "--radius-box": "0rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    bumblebee: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(97% 0 0)",
      "--color-base-300": "oklch(92% 0 0)",
      "--color-base-content": "oklch(20% 0 0)",
      "--color-primary": "oklch(85% 0.199 91.936)",
      "--color-primary-content": "oklch(42% 0.095 57.708)",
      "--color-secondary": "oklch(75% 0.183 55.934)",
      "--color-secondary-content": "oklch(40% 0.123 38.172)",
      "--color-accent": "oklch(0% 0 0)",
      "--color-accent-content": "oklch(100% 0 0)",
      "--color-neutral": "oklch(37% 0.01 67.558)",
      "--color-neutral-content": "oklch(92% 0.003 48.717)",
      "--color-info": "oklch(74% 0.16 232.661)",
      "--color-info-content": "oklch(39% 0.09 240.876)",
      "--color-success": "oklch(76% 0.177 163.223)",
      "--color-success-content": "oklch(37% 0.077 168.94)",
      "--color-warning": "oklch(82% 0.189 84.429)",
      "--color-warning-content": "oklch(41% 0.112 45.904)",
      "--color-error": "oklch(70% 0.191 22.216)",
      "--color-error-content": "oklch(39% 0.141 25.723)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    valentine: {
      "color-scheme": "light",
      "--color-base-100": "oklch(97% 0.014 343.198)",
      "--color-base-200": "oklch(94% 0.028 342.258)",
      "--color-base-300": "oklch(89% 0.061 343.231)",
      "--color-base-content": "oklch(52% 0.223 3.958)",
      "--color-primary": "oklch(65% 0.241 354.308)",
      "--color-primary-content": "oklch(100% 0 0)",
      "--color-secondary": "oklch(62% 0.265 303.9)",
      "--color-secondary-content": "oklch(97% 0.014 308.299)",
      "--color-accent": "oklch(82% 0.111 230.318)",
      "--color-accent-content": "oklch(39% 0.09 240.876)",
      "--color-neutral": "oklch(40% 0.153 2.432)",
      "--color-neutral-content": "oklch(89% 0.061 343.231)",
      "--color-info": "oklch(86% 0.127 207.078)",
      "--color-info-content": "oklch(44% 0.11 240.79)",
      "--color-success": "oklch(84% 0.143 164.978)",
      "--color-success-content": "oklch(43% 0.095 166.913)",
      "--color-warning": "oklch(75% 0.183 55.934)",
      "--color-warning-content": "oklch(26% 0.079 36.259)",
      "--color-error": "oklch(63% 0.237 25.331)",
      "--color-error-content": "oklch(97% 0.013 17.38)",
      "--radius-selector": "1rem",
      "--radius-field": "2rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    cupcake: {
      "color-scheme": "light",
      "--color-base-100": "oklch(97.788% 0.004 56.375)",
      "--color-base-200": "oklch(93.982% 0.007 61.449)",
      "--color-base-300": "oklch(91.586% 0.006 53.44)",
      "--color-base-content": "oklch(23.574% 0.066 313.189)",
      "--color-primary": "oklch(85% 0.138 181.071)",
      "--color-primary-content": "oklch(43% 0.078 188.216)",
      "--color-secondary": "oklch(89% 0.061 343.231)",
      "--color-secondary-content": "oklch(45% 0.187 3.815)",
      "--color-accent": "oklch(90% 0.076 70.697)",
      "--color-accent-content": "oklch(47% 0.157 37.304)",
      "--color-neutral": "oklch(27% 0.006 286.033)",
      "--color-neutral-content": "oklch(92% 0.004 286.32)",
      "--color-info": "oklch(68% 0.169 237.323)",
      "--color-info-content": "oklch(29% 0.066 243.157)",
      "--color-success": "oklch(69% 0.17 162.48)",
      "--color-success-content": "oklch(26% 0.051 172.552)",
      "--color-warning": "oklch(79% 0.184 86.047)",
      "--color-warning-content": "oklch(28% 0.066 53.813)",
      "--color-error": "oklch(64% 0.246 16.439)",
      "--color-error-content": "oklch(27% 0.105 12.094)",
      "--radius-selector": "1rem",
      "--radius-field": "2rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "2px",
      "--depth": "1",
      "--noise": "0",
    },
    dim: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(30.857% 0.023 264.149)",
      "--color-base-200": "oklch(28.036% 0.019 264.182)",
      "--color-base-300": "oklch(26.346% 0.018 262.177)",
      "--color-base-content": "oklch(82.901% 0.031 222.959)",
      "--color-primary": "oklch(86.133% 0.141 139.549)",
      "--color-primary-content": "oklch(17.226% 0.028 139.549)",
      "--color-secondary": "oklch(73.375% 0.165 35.353)",
      "--color-secondary-content": "oklch(14.675% 0.033 35.353)",
      "--color-accent": "oklch(74.229% 0.133 311.379)",
      "--color-accent-content": "oklch(14.845% 0.026 311.379)",
      "--color-neutral": "oklch(24.731% 0.02 264.094)",
      "--color-neutral-content": "oklch(82.901% 0.031 222.959)",
      "--color-info": "oklch(86.078% 0.142 206.182)",
      "--color-info-content": "oklch(17.215% 0.028 206.182)",
      "--color-success": "oklch(86.171% 0.142 166.534)",
      "--color-success-content": "oklch(17.234% 0.028 166.534)",
      "--color-warning": "oklch(86.163% 0.142 94.818)",
      "--color-warning-content": "oklch(17.232% 0.028 94.818)",
      "--color-error": "oklch(82.418% 0.099 33.756)",
      "--color-error-content": "oklch(16.483% 0.019 33.756)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    garden: {
      "color-scheme": "light",
      "--color-base-100": "oklch(92.951% 0.002 17.197)",
      "--color-base-200": "oklch(86.445% 0.002 17.197)",
      "--color-base-300": "oklch(79.938% 0.001 17.197)",
      "--color-base-content": "oklch(16.961% 0.001 17.32)",
      "--color-primary": "oklch(62.45% 0.278 3.836)",
      "--color-primary-content": "oklch(100% 0 0)",
      "--color-secondary": "oklch(48.495% 0.11 355.095)",
      "--color-secondary-content": "oklch(89.699% 0.022 355.095)",
      "--color-accent": "oklch(56.273% 0.054 154.39)",
      "--color-accent-content": "oklch(100% 0 0)",
      "--color-neutral": "oklch(24.155% 0.049 89.07)",
      "--color-neutral-content": "oklch(92.951% 0.002 17.197)",
      "--color-info": "oklch(72.06% 0.191 231.6)",
      "--color-info-content": "oklch(0% 0 0)",
      "--color-success": "oklch(64.8% 0.15 160)",
      "--color-success-content": "oklch(0% 0 0)",
      "--color-warning": "oklch(84.71% 0.199 83.87)",
      "--color-warning-content": "oklch(0% 0 0)",
      "--color-error": "oklch(71.76% 0.221 22.18)",
      "--color-error-content": "oklch(0% 0 0)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
    light: {
      "color-scheme": "light",
      "--color-base-100": "oklch(100% 0 0)",
      "--color-base-200": "oklch(98% 0 0)",
      "--color-base-300": "oklch(95% 0 0)",
      "--color-base-content": "oklch(21% 0.006 285.885)",
      "--color-primary": "oklch(45% 0.24 277.023)",
      "--color-primary-content": "oklch(93% 0.034 272.788)",
      "--color-secondary": "oklch(65% 0.241 354.308)",
      "--color-secondary-content": "oklch(94% 0.028 342.258)",
      "--color-accent": "oklch(77% 0.152 181.912)",
      "--color-accent-content": "oklch(38% 0.063 188.416)",
      "--color-neutral": "oklch(14% 0.005 285.823)",
      "--color-neutral-content": "oklch(92% 0.004 286.32)",
      "--color-info": "oklch(74% 0.16 232.661)",
      "--color-info-content": "oklch(29% 0.066 243.157)",
      "--color-success": "oklch(76% 0.177 163.223)",
      "--color-success-content": "oklch(37% 0.077 168.94)",
      "--color-warning": "oklch(82% 0.189 84.429)",
      "--color-warning-content": "oklch(41% 0.112 45.904)",
      "--color-error": "oklch(71% 0.194 13.428)",
      "--color-error-content": "oklch(27% 0.105 12.094)",
      "--radius-selector": "0.5rem",
      "--radius-field": "0.25rem",
      "--radius-box": "0.5rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    luxury: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(14.076% 0.004 285.822)",
      "--color-base-200": "oklch(20.219% 0.004 308.229)",
      "--color-base-300": "oklch(23.219% 0.004 308.229)",
      "--color-base-content": "oklch(75.687% 0.123 76.89)",
      "--color-primary": "oklch(100% 0 0)",
      "--color-primary-content": "oklch(20% 0 0)",
      "--color-secondary": "oklch(27.581% 0.064 261.069)",
      "--color-secondary-content": "oklch(85.516% 0.012 261.069)",
      "--color-accent": "oklch(36.674% 0.051 338.825)",
      "--color-accent-content": "oklch(87.334% 0.01 338.825)",
      "--color-neutral": "oklch(24.27% 0.057 59.825)",
      "--color-neutral-content": "oklch(93.203% 0.089 90.861)",
      "--color-info": "oklch(79.061% 0.121 237.133)",
      "--color-info-content": "oklch(15.812% 0.024 237.133)",
      "--color-success": "oklch(78.119% 0.192 132.154)",
      "--color-success-content": "oklch(15.623% 0.038 132.154)",
      "--color-warning": "oklch(86.127% 0.136 102.891)",
      "--color-warning-content": "oklch(17.225% 0.027 102.891)",
      "--color-error": "oklch(71.753% 0.176 22.568)",
      "--color-error-content": "oklch(14.35% 0.035 22.568)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "1",
      "--noise": "0",
    },
    synthwave: {
      "color-scheme": "dark",
      "--color-base-100": "oklch(15% 0.09 281.288)",
      "--color-base-200": "oklch(20% 0.09 281.288)",
      "--color-base-300": "oklch(25% 0.09 281.288)",
      "--color-base-content": "oklch(78% 0.115 274.713)",
      "--color-primary": "oklch(71% 0.202 349.761)",
      "--color-primary-content": "oklch(28% 0.109 3.907)",
      "--color-secondary": "oklch(82% 0.111 230.318)",
      "--color-secondary-content": "oklch(29% 0.066 243.157)",
      "--color-accent": "oklch(75% 0.183 55.934)",
      "--color-accent-content": "oklch(26% 0.079 36.259)",
      "--color-neutral": "oklch(45% 0.24 277.023)",
      "--color-neutral-content": "oklch(87% 0.065 274.039)",
      "--color-info": "oklch(74% 0.16 232.661)",
      "--color-info-content": "oklch(29% 0.066 243.157)",
      "--color-success": "oklch(77% 0.152 181.912)",
      "--color-success-content": "oklch(27% 0.046 192.524)",
      "--color-warning": "oklch(90% 0.182 98.111)",
      "--color-warning-content": "oklch(42% 0.095 57.708)",
      "--color-error": "oklch(73.7% 0.121 32.639)",
      "--color-error-content": "oklch(23.501% 0.096 290.329)",
      "--radius-selector": "1rem",
      "--radius-field": "0.5rem",
      "--radius-box": "1rem",
      "--size-selector": "0.25rem",
      "--size-field": "0.25rem",
      "--border": "1px",
      "--depth": "0",
      "--noise": "0",
    },
  },
  a = {
    ":root": {
      "--fx-noise":
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E\")",
    },
    ".chat": {
      "--mask-chat":
        "url(\"data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e\")",
    },
  };
const c = ["color-", "size-", "radius-", "border", "depth", "noise"],
  i = (o, r) => !!o.startsWith("tw") || r.some((r) => o.startsWith(r)),
  n = (o, r) => (o.startsWith(".") ? `.${r}${o.slice(1)}` : o),
  l = (o, r, e) => {
    const t = r ? `&.${r}` : "";
    if (!r) return o;
    if (o.startsWith("--")) {
      return `--${((o, r, e) => (i(o, e) ? o : `${r}${o}`))(o.slice(2), r, e)}`;
    }
    if (o.startsWith("@") || o.startsWith("[")) return o;
    if (o.startsWith("&"))
      return o.match(/:[a-z-]+\(/)
        ? o.replace(/\.([\w-]+)/g, `.${r}$1`)
        : o.startsWith("&.")
        ? `${t}${o.slice(2)}`
        : o.replace(/\.([\w-]+)/g, `.${r}$1`);
    if (o.startsWith(":")) return o.replace(/\.([\w-]+)/g, `.${r}$1`);
    if (
      o.includes(".") &&
      !o.includes(" ") &&
      !o.includes(">") &&
      !o.includes("+") &&
      !o.includes("~")
    )
      return o
        .split(".")
        .filter(Boolean)
        .map((o) => r + o)
        .join(".")
        .replace(/^/, ".");
    if (o.includes(">") || o.includes("+") || o.includes("~"))
      return o
        .split(/\s*([>+~])\s*/)
        .map((o) =>
          (o = o.trim()).includes(":where") ||
          o.includes(":not") ||
          o.includes(":has") ||
          o.match(/:[a-z-]+\(/)
            ? o.replace(/\.([\w-]+)(?=[\s:)])/g, `.${r}$1`)
            : ">" === o || "+" === o || "~" === o
            ? ` ${o} `
            : o.startsWith(".")
            ? n(o, r)
            : o
        )
        .join("");
    if (o.includes(" "))
      return o
        .split(/\s+/)
        .map((o) => (o.startsWith(".") ? n(o, r) : o))
        .join(" ");
    if (o.includes(":")) {
      const [e, ...t] = o.split(":");
      return e.startsWith(".")
        ? `${n(e, r)}:${t.join(":")}`
        : o.replace(/\.([\w-]+)/g, `.${r}$1`);
    }
    return o.startsWith(".") ? n(o, r) : o;
  },
  s = (o, r, e) =>
    o.replace(/var\(--([^)]+)\)/g, (o, t) => (i(t, e) ? o : `var(--${r}${t})`)),
  d = (o, r, e) =>
    Array.isArray(o)
      ? ((o, r, e) =>
          o.map((o) =>
            "string" == typeof o
              ? o.startsWith(".")
                ? r
                  ? `.${r}${o.slice(1)}`
                  : o
                : s(o, r, e)
              : o
          ))(o, r, e)
      : "object" == typeof o && null !== o
      ? b(o, r, e)
      : "string" == typeof o
      ? s(o, r, e)
      : o,
  b = (o, r, e = c) =>
    Object.entries(o).reduce(
      (o, [t, a]) => ((o[l(t, r, e)] = d(a, r, e)), o),
      {}
    );
var u = {
    ":root,\n[data-theme]": {
      "background-color": "var(--root-bg, var(--color-base-100))",
      color: "var(--color-base-content)",
    },
  },
  p = {
    ":where(\n  :root:has(\n      .modal-open,\n      .modal[open],\n      .modal:target,\n      .modal-toggle:checked,\n      .drawer:not(.drawer-open) > .drawer-toggle:checked\n    )\n)":
      {
        "scrollbar-gutter": "stable",
        "background-image":
          "linear-gradient(var(--color-base-100), var(--color-base-100))",
        "--root-bg":
          "color-mix(in srgb, var(--color-base-100), oklch(0% 0 0) 40%)",
      },
  },
  h = {
    "@property --radialprogress": {
      syntax: '"<percentage>"',
      inherits: "true",
      "initial-value": "0%",
    },
  },
  m = {
    ':root:has( .modal-open, .modal[open], .modal:target, .modal-toggle:checked, .drawer:not([class*="drawer-open"]) > .drawer-toggle:checked )':
      { overflow: "hidden" },
  },
  g = {
    ":root": {
      "scrollbar-color": "color-mix(in oklch, currentColor 35%, #0000) #0000",
    },
  },
  v = {
    ".kbd": {
      display: "inline-flex",
      "align-items": "center",
      "justify-content": "center",
      "border-radius": "var(--radius-field)",
      "background-color": "var(--color-base-200)",
      "vertical-align": "middle",
      "padding-left": "0.5em",
      "padding-right": "0.5em",
      border:
        "var(--border) solid color-mix(in srgb, var(--color-base-content) 20%, #0000)",
      "border-bottom":
        "calc(var(--border) + 1px) solid color-mix(in srgb, var(--color-base-content) 20%, #0000)",
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      "font-size": "0.875rem",
      height: "var(--size)",
      "min-width": "var(--size)",
    },
    ".kbd-xs": {
      "--size": "calc(var(--size-selector, 0.25rem) * 4)",
      "font-size": "0.625rem",
    },
    ".kbd-sm": {
      "--size": "calc(var(--size-selector, 0.25rem) * 5)",
      "font-size": "0.75rem",
    },
    ".kbd-md": {
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      "font-size": "0.875rem",
    },
    ".kbd-lg": {
      "--size": "calc(var(--size-selector, 0.25rem) * 7)",
      "font-size": "1rem",
    },
    ".kbd-xl": {
      "--size": "calc(var(--size-selector, 0.25rem) * 8)",
      "font-size": "1.125rem",
    },
  },
  f = {
    ".dropdown": {
      position: "relative",
      display: "inline-block",
      "position-area": "var(--anchor-v, bottom) var(--anchor-h, span-right)",
      "& > *:not(summary):focus": {
        "outline-style": "none",
        "@media (forced-colors: active)": {
          outline: "2px solid transparent",
          "outline-offset": "2px",
        },
      },
      ".dropdown-content": { position: "absolute" },
      "&:not(details, .dropdown-open, .dropdown-hover:hover, :focus-within)": {
        ".dropdown-content": {
          display: "none",
          "transform-origin": "top",
          opacity: "0%",
          scale: "95%",
        },
      },
      "&[popover], .dropdown-content": {
        "@starting-style": [{ scale: "95%" }, { opacity: 0 }],
        "z-index": 999,
        animation: "dropdown 0.2s",
        "transition-property": "opacity, scale, display",
        "transition-behavior": "allow-discrete",
        "transition-duration": "0.2s",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      "&.dropdown-open, &:not(.dropdown-hover):focus, &:focus-within": {
        "> [tabindex]:first-child": { "pointer-events": "none" },
        ".dropdown-content": { opacity: "100%" },
      },
      "&.dropdown-hover:hover": {
        ".dropdown-content": { opacity: "100%", scale: "100%" },
      },
      "&:is(details)": {
        summary: { "&::-webkit-details-marker": { display: "none" } },
      },
      "&.dropdown-open, &:focus, &:focus-within": {
        ".dropdown-content": { scale: "100%" },
      },
      "&:where([popover])": { background: "#0000" },
      "&[popover]": {
        position: "fixed",
        color: "inherit",
        "@supports not (position-area: bottom)": {
          margin: "auto",
          "&.dropdown-open:not(:popover-open)": {
            display: "none",
            "transform-origin": "top",
            opacity: "0%",
            scale: "95%",
          },
          "&::backdrop": {
            "background-color": "color-mix(in oklab, #000 30%, #0000)",
          },
        },
        "&:not(.dropdown-open, :popover-open)": {
          display: "none",
          "transform-origin": "top",
          opacity: "0%",
          scale: "95%",
        },
      },
    },
    ".dropdown-start": {
      "--anchor-h": "span-right",
      ":where(.dropdown-content)": { "inset-inline-end": "auto" },
      "&.dropdown-left": {
        "--anchor-h": "left",
        "--anchor-v": "span-bottom",
        ".dropdown-content": { top: "calc(0.25rem * 0)", bottom: "auto" },
      },
      "&.dropdown-right": {
        "--anchor-h": "right",
        "--anchor-v": "span-bottom",
        ".dropdown-content": { top: "calc(0.25rem * 0)", bottom: "auto" },
      },
    },
    ".dropdown-center": {
      "--anchor-h": "center",
      ":where(.dropdown-content)": {
        "inset-inline-end": "calc(1/2 * 100%)",
        translate: "50% 0",
      },
      "&.dropdown-left": {
        "--anchor-h": "left",
        "--anchor-v": "center",
        ".dropdown-content": {
          top: "auto",
          bottom: "calc(1/2 * 100%)",
          translate: "0 50%",
        },
      },
      "&.dropdown-right": {
        "--anchor-h": "right",
        "--anchor-v": "center",
        ".dropdown-content": {
          top: "auto",
          bottom: "calc(1/2 * 100%)",
          translate: "0 50%",
        },
      },
    },
    ".dropdown-end": {
      "--anchor-h": "span-left",
      ":where(.dropdown-content)": { "inset-inline-end": "calc(0.25rem * 0)" },
      "&.dropdown-left": {
        "--anchor-h": "left",
        "--anchor-v": "span-top",
        ".dropdown-content": { top: "auto", bottom: "calc(0.25rem * 0)" },
      },
      "&.dropdown-right": {
        "--anchor-h": "right",
        "--anchor-v": "span-top",
        ".dropdown-content": { top: "auto", bottom: "calc(0.25rem * 0)" },
      },
    },
    ".dropdown-left": {
      "--anchor-h": "left",
      "--anchor-v": "span-bottom",
      ".dropdown-content": {
        "inset-inline-end": "100%",
        top: "calc(0.25rem * 0)",
        bottom: "auto",
        "transform-origin": "right",
      },
    },
    ".dropdown-right": {
      "--anchor-h": "right",
      "--anchor-v": "span-bottom",
      ".dropdown-content": {
        "inset-inline-start": "100%",
        top: "calc(0.25rem * 0)",
        bottom: "auto",
        "transform-origin": "left",
      },
    },
    ".dropdown-bottom": {
      "--anchor-v": "bottom",
      ".dropdown-content": {
        top: "100%",
        bottom: "auto",
        "transform-origin": "top",
      },
    },
    ".dropdown-top": {
      "--anchor-v": "top",
      ".dropdown-content": {
        top: "auto",
        bottom: "100%",
        "transform-origin": "bottom",
      },
    },
    "@keyframes dropdown": { "0%": { opacity: 0 } },
  },
  k = {
    ".navbar": {
      display: "flex",
      width: "100%",
      "align-items": "center",
      padding: "0.5rem",
      "min-height": "4rem",
    },
    ".navbar-start": {
      display: "inline-flex",
      "align-items": "center",
      width: "50%",
      "justify-content": "flex-start",
    },
    ".navbar-center": {
      display: "inline-flex",
      "align-items": "center",
      "flex-shrink": 0,
    },
    ".navbar-end": {
      display: "inline-flex",
      "align-items": "center",
      width: "50%",
      "justify-content": "flex-end",
    },
  },
  x = {
    ".drawer": {
      position: "relative",
      display: "grid",
      width: "100%",
      "grid-auto-columns": "max-content auto",
    },
    ".drawer-content": {
      "grid-column-start": "2",
      "grid-row-start": "1",
      "min-width": "calc(0.25rem * 0)",
    },
    ".drawer-side": {
      "pointer-events": "none",
      visibility: "hidden",
      position: "fixed",
      "inset-inline-start": "calc(0.25rem * 0)",
      top: "calc(0.25rem * 0)",
      "grid-column-start": "1",
      "grid-row-start": "1",
      display: "grid",
      width: "100%",
      "grid-template-columns": "repeat(1, minmax(0, 1fr))",
      "grid-template-rows": "repeat(1, minmax(0, 1fr))",
      "align-items": "flex-start",
      "justify-items": "start",
      "overflow-x": "hidden",
      "overflow-y": "hidden",
      "overscroll-behavior": "contain",
      opacity: "0%",
      transition:
        "opacity 0.2s ease-out 0.1s allow-discrete, visibility 0.3s ease-out 0.1s allow-discrete",
      height: ["100vh", "100dvh"],
      "> .drawer-overlay": {
        position: "sticky",
        top: "calc(0.25rem * 0)",
        cursor: "pointer",
        "place-self": "stretch",
        "background-color": "oklch(0% 0 0 / 40%)",
      },
      "> *": { "grid-column-start": "1", "grid-row-start": "1" },
      "> *:not(.drawer-overlay)": {
        "will-change": "transform",
        transition: "translate 0.3s ease-out",
        translate: "-100%",
        '[dir="rtl"] &': { translate: "100%" },
      },
    },
    ".drawer-toggle": {
      position: "fixed",
      height: "calc(0.25rem * 0)",
      width: "calc(0.25rem * 0)",
      appearance: "none",
      opacity: "0%",
      "&:checked": {
        "& ~ .drawer-side": {
          "pointer-events": "auto",
          visibility: "visible",
          "overflow-y": "auto",
          opacity: "100%",
          "& > *:not(.drawer-overlay)": { translate: "0%" },
        },
      },
      "&:focus-visible ~ .drawer-content label.drawer-button": {
        outline: "2px solid",
        "outline-offset": "2px",
      },
    },
    ".drawer-end": {
      "grid-auto-columns": "auto max-content",
      "> .drawer-toggle": {
        "& ~ .drawer-content": { "grid-column-start": "1" },
        "& ~ .drawer-side": {
          "grid-column-start": "2",
          "justify-items": "end",
        },
        "& ~ .drawer-side > *:not(.drawer-overlay)": {
          translate: "100%",
          '[dir="rtl"] &': { translate: "-100%" },
        },
        "&:checked ~ .drawer-side > *:not(.drawer-overlay)": {
          translate: "0%",
        },
      },
    },
    ".drawer-open": {
      "> .drawer-side": { "overflow-y": "auto" },
      "> .drawer-toggle": {
        display: "none",
        "& ~ .drawer-side": {
          "pointer-events": "auto",
          visibility: "visible",
          position: "sticky",
          display: "block",
          width: "auto",
          "overscroll-behavior": "auto",
          opacity: "100%",
          "& > .drawer-overlay": {
            cursor: "default",
            "background-color": "transparent",
          },
          "& > *:not(.drawer-overlay)": {
            translate: "0%",
            '[dir="rtl"] &': { translate: "0%" },
          },
        },
        "&:checked ~ .drawer-side": {
          "pointer-events": "auto",
          visibility: "visible",
        },
      },
    },
  },
  w = {
    ".footer": {
      display: "grid",
      width: "100%",
      "grid-auto-flow": "row",
      "place-items": "start",
      "column-gap": "calc(0.25rem * 4)",
      "row-gap": "calc(0.25rem * 10)",
      "font-size": "0.875rem",
      "line-height": "1.25rem",
      "& > *": {
        display: "grid",
        "place-items": "start",
        gap: "calc(0.25rem * 2)",
      },
      "&.footer-center": {
        "grid-auto-flow": "column dense",
        "place-items": "center",
        "text-align": "center",
        "& > *": { "place-items": "center" },
      },
    },
    ".footer-title": {
      "margin-bottom": "calc(0.25rem * 2)",
      "text-transform": "uppercase",
      opacity: "60%",
      "font-weight": 600,
    },
    ".footer-horizontal": {
      "grid-auto-flow": "column",
      "&.footer-center": { "grid-auto-flow": "row dense" },
    },
    ".footer-vertical": {
      "grid-auto-flow": "row",
      "&.footer-center": { "grid-auto-flow": "column dense" },
    },
  },
  y = {
    ".tooltip": {
      position: "relative",
      display: "inline-block",
      "--tt-bg": "var(--color-neutral)",
      "--tt-off": "calc(100% + 0.5rem)",
      "--tt-tail": "calc(100% + 1px + 0.25rem)",
      "> :where(.tooltip-content), &[data-tip]:before": {
        position: "absolute",
        "max-width": "20rem",
        "border-radius": "var(--radius-field)",
        "padding-inline": "calc(0.25rem * 2)",
        "padding-block": "calc(0.25rem * 1)",
        "text-align": "center",
        "white-space": "normal",
        color: "var(--color-neutral-content)",
        opacity: "0%",
        "font-size": "0.875rem",
        "line-height": "1.25em",
        transition:
          "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1) 75ms, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1) 75ms",
        "background-color": "var(--tt-bg)",
        width: "max-content",
        "pointer-events": "none",
        "z-index": 1,
        "--tw-content": "attr(data-tip)",
        content: "var(--tw-content)",
      },
      "&:after": {
        position: ["absolute", "absolute"],
        opacity: "0%",
        "background-color": "var(--tt-bg)",
        transition:
          "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1) 75ms, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1) 75ms",
        content: '""',
        "pointer-events": "none",
        width: "0.625rem",
        height: "0.25rem",
        display: "block",
        "mask-repeat": "no-repeat",
        "mask-position": "-1px 0",
        "--mask-tooltip":
          "url(\"data:image/svg+xml,%3Csvg width='10' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.500009 1C3.5 1 3.00001 4 5.00001 4C7 4 6.5 1 9.5 1C10 1 10 0.499897 10 0H0C-1.99338e-08 0.5 0 1 0.500009 1Z' fill='black'/%3E%3C/svg%3E%0A\")",
        "mask-image": "var(--mask-tooltip)",
      },
      "&.tooltip-open, &[data-tip]:hover, &:hover, &:has(:focus-visible)": {
        "> .tooltip-content, &[data-tip]:before, &:after": {
          opacity: "100%",
          "--tt-pos": "0rem",
          transition:
            "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      },
    },
    ".tooltip, .tooltip-top": {
      "> .tooltip-content, &[data-tip]:before": {
        transform: "translateX(-50%) translateY(var(--tt-pos, 0.25rem))",
        inset: "auto auto var(--tt-off) 50%",
      },
      "&:after": {
        transform: "translateX(-50%) translateY(var(--tt-pos, 0.25rem))",
        inset: "auto auto var(--tt-tail) 50%",
      },
    },
    ".tooltip-bottom": {
      "> .tooltip-content, &[data-tip]:before": {
        transform: "translateX(-50%) translateY(var(--tt-pos, -0.25rem))",
        inset: "var(--tt-off) auto auto 50%",
      },
      "&:after": {
        transform:
          "translateX(-50%) translateY(var(--tt-pos, -0.25rem)) rotate(180deg)",
        inset: "var(--tt-tail) auto auto 50%",
      },
    },
    ".tooltip-left": {
      "> .tooltip-content, &[data-tip]:before": {
        transform:
          "translateX(calc(var(--tt-pos, 0.25rem) - 0.25rem)) translateY(-50%)",
        inset: "50% var(--tt-off) auto auto",
      },
      "&:after": {
        transform:
          "translateX(var(--tt-pos, 0.25rem)) translateY(-50%) rotate(-90deg)",
        inset: "50% calc(var(--tt-tail) + 1px) auto auto",
      },
    },
    ".tooltip-right": {
      "> .tooltip-content, &[data-tip]:before": {
        transform:
          "translateX(calc(var(--tt-pos, -0.25rem) + 0.25rem)) translateY(-50%)",
        inset: "50% auto auto var(--tt-off)",
      },
      "&:after": {
        transform:
          "translateX(var(--tt-pos, -0.25rem)) translateY(-50%) rotate(90deg)",
        inset: "50% auto auto calc(var(--tt-tail) + 1px)",
      },
    },
    ".tooltip-primary": {
      "--tt-bg": "var(--color-primary)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-primary-content)",
      },
    },
    ".tooltip-secondary": {
      "--tt-bg": "var(--color-secondary)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-secondary-content)",
      },
    },
    ".tooltip-accent": {
      "--tt-bg": "var(--color-accent)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-accent-content)",
      },
    },
    ".tooltip-info": {
      "--tt-bg": "var(--color-info)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-info-content)",
      },
    },
    ".tooltip-success": {
      "--tt-bg": "var(--color-success)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-success-content)",
      },
    },
    ".tooltip-warning": {
      "--tt-bg": "var(--color-warning)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-warning-content)",
      },
    },
    ".tooltip-error": {
      "--tt-bg": "var(--color-error)",
      "> .tooltip-content, &[data-tip]:before": {
        color: "var(--color-error-content)",
      },
    },
  },
  z = {
    ".rating": {
      position: "relative",
      display: "inline-flex",
      "vertical-align": "middle",
      "& input": { border: "none", appearance: "none" },
      ":where(*)": {
        animation: "rating 0.25s ease-out",
        height: "calc(0.25rem * 6)",
        width: "calc(0.25rem * 6)",
        "border-radius": "0",
        "background-color": "var(--color-base-content)",
        opacity: "20%",
        "&:is(input)": { cursor: "pointer" },
      },
      "& .rating-hidden": {
        width: "calc(0.25rem * 2)",
        "background-color": "transparent",
      },
      'input[type="radio"]:checked': { "background-image": "none" },
      "*": {
        '&:checked, &[aria-checked="true"], &[aria-current="true"], &:has(~ *:checked, ~ *[aria-checked="true"], ~ *[aria-current="true"])':
          { opacity: "100%" },
        "&:focus-visible": { transition: "scale 0.2s ease-out", scale: "1.1" },
      },
      "& *:active:focus": { animation: "none", scale: "1.1" },
      "&.rating-xs :where(*:not(.rating-hidden))": {
        width: "calc(0.25rem * 4)",
        height: "calc(0.25rem * 4)",
      },
      "&.rating-sm :where(*:not(.rating-hidden))": {
        width: "calc(0.25rem * 5)",
        height: "calc(0.25rem * 5)",
      },
      "&.rating-md :where(*:not(.rating-hidden))": {
        width: "calc(0.25rem * 6)",
        height: "calc(0.25rem * 6)",
      },
      "&.rating-lg :where(*:not(.rating-hidden))": {
        width: "calc(0.25rem * 7)",
        height: "calc(0.25rem * 7)",
      },
      "&.rating-xl :where(*:not(.rating-hidden))": {
        width: "calc(0.25rem * 8)",
        height: "calc(0.25rem * 8)",
      },
    },
    ".rating-half": {
      ":where(*:not(.rating-hidden))": { width: "calc(0.25rem * 3)" },
      "&.rating-xs *:not(.rating-hidden)": { width: "calc(0.25rem * 2)" },
      "&.rating-sm *:not(.rating-hidden)": { width: "calc(0.25rem * 2.5)" },
      "&.rating-md *:not(.rating-hidden)": { width: "calc(0.25rem * 3)" },
      "&.rating-lg *:not(.rating-hidden)": { width: ".875rem" },
      "&.rating-xl *:not(.rating-hidden)": { width: "calc(0.25rem * 4)" },
    },
    "@keyframes rating": {
      "0%, 40%": { scale: "1.1", filter: "brightness(1.05) contrast(1.05)" },
    },
  },
  C = {
    ".cally": {
      "font-size": "0.7rem",
      "&::part(container)": { padding: "0.5rem 1rem", "user-select": "none" },
      "::part(th)": { "font-weight": "normal", "block-size": "auto" },
      "&::part(header)": { direction: "ltr" },
      "::part(head)": { opacity: 0.5, "font-size": "0.7rem" },
      "&::part(button)": {
        "border-radius": "var(--radius-field)",
        border: "none",
        padding: "0.5rem",
        background: "#0000",
      },
      "&::part(button):hover": { background: "var(--color-base-200)" },
      "::part(day)": {
        "border-radius": "var(--radius-field)",
        "font-size": "0.7rem",
      },
      "::part(button day today)": {
        background: "var(--color-primary)",
        color: "var(--color-primary-content)",
      },
      "::part(selected)": {
        color: "var(--color-base-100)",
        background: "var(--color-base-content)",
        "border-radius": "var(--radius-field)",
      },
      "::part(range-inner)": { "border-radius": "0" },
      "::part(range-start)": {
        "border-start-end-radius": "0",
        "border-end-end-radius": "0",
      },
      "::part(range-end)": {
        "border-start-start-radius": "0",
        "border-end-start-radius": "0",
      },
      "::part(range-start range-end)": {
        "border-radius": "var(--radius-field)",
      },
      "calendar-month": { width: "100%" },
    },
    ".react-day-picker": {
      "user-select": "none",
      "background-color": "var(--color-base-100)",
      "border-radius": "var(--radius-box)",
      border: "var(--border) solid var(--color-base-200)",
      "font-size": "0.75rem",
      display: "inline-block",
      position: "relative",
      overflow: "clip",
      '&[dir="rtl"]': {
        ".rdp-nav": {
          ".rdp-chevron": {
            "transform-origin": "50%",
            transform: "rotate(180deg)",
          },
        },
      },
      "*": { "box-sizing": "border-box" },
      ".rdp-day": {
        width: "2.25rem",
        height: "2.25rem",
        "text-align": "center",
      },
      ".rdp-day_button": {
        cursor: "pointer",
        font: "inherit",
        color: "inherit",
        width: "2.25rem",
        height: "2.25rem",
        border: "2px solid #0000",
        "border-radius": "var(--radius-field)",
        background: "0 0",
        "justify-content": "center",
        "align-items": "center",
        margin: "0",
        padding: "0",
        display: "flex",
        "&:disabled": { cursor: "revert" },
        "&:hover": { "background-color": "var(--color-base-200)" },
      },
      ".rdp-caption_label": {
        "z-index": 1,
        "white-space": "nowrap",
        border: "0",
        "align-items": "center",
        display: "inline-flex",
        position: "relative",
      },
      ".rdp-button_next": {
        "border-radius": "var(--radius-field)",
        "&:hover": { "background-color": "var(--color-base-200)" },
      },
      ".rdp-button_previous": {
        "border-radius": "var(--radius-field)",
        "&:hover": { "background-color": "var(--color-base-200)" },
      },
      ".rdp-button_next,\n  .rdp-button_previous": {
        cursor: "pointer",
        font: "inherit",
        color: "inherit",
        appearance: "none",
        width: "2.25rem",
        height: "2.25rem",
        background: "0 0",
        border: "none",
        "justify-content": "center",
        "align-items": "center",
        margin: "0",
        padding: "0",
        display: "inline-flex",
        position: "relative",
        "&:disabled": { cursor: "revert", opacity: 0.5 },
      },
      ".rdp-chevron": {
        fill: "var(--color-base-content)",
        width: "1rem",
        height: "1rem",
        display: "inline-block",
      },
      ".rdp-dropdowns": {
        "align-items": "center",
        gap: "0.5rem",
        display: "inline-flex",
        position: "relative",
      },
      ".rdp-dropdown": {
        "z-index": 2,
        opacity: 0,
        appearance: "none",
        cursor: "inherit",
        "line-height": "inherit",
        border: "none",
        width: "100%",
        margin: "0",
        padding: "0",
        position: "absolute",
        "inset-block": "0",
        "inset-inline-start": "0",
        "&:focus-visible": {
          "~ .rdp-caption_label": {
            outline: [
              "5px auto highlight",
              "5px auto -webkit-focus-ring-color",
            ],
          },
        },
      },
      ".rdp-dropdown_root": {
        "align-items": "center",
        display: "inline-flex",
        position: "relative",
        '&[data-disabled="true"]': { ".rdp-chevron": { opacity: 0.5 } },
      },
      ".rdp-month_caption": {
        height: "2.75rem",
        "font-size": "0.75rem",
        "font-weight": "inherit",
        "place-content": "center",
        display: "flex",
      },
      ".rdp-months": {
        gap: "2rem",
        "flex-wrap": "wrap",
        "max-width": "fit-content",
        padding: "0.5rem",
        display: "flex",
        position: "relative",
      },
      ".rdp-month_grid": { "border-collapse": "collapse" },
      ".rdp-nav": {
        height: "2.75rem",
        "inset-block-start": "0",
        "inset-inline-end": "0",
        "justify-content": "space-between",
        "align-items": "center",
        width: "100%",
        "padding-inline": "0.5rem",
        display: "flex",
        position: "absolute",
        top: "0.25rem",
      },
      ".rdp-weekday": {
        opacity: 0.6,
        padding: "0.5rem 0rem",
        "text-align": "center",
        "font-size": "smaller",
        "font-weight": 500,
      },
      ".rdp-week_number": {
        opacity: 0.6,
        height: "2.25rem",
        width: "2.25rem",
        border: "none",
        "border-radius": "100%",
        "text-align": "center",
        "font-size": "small",
        "font-weight": 400,
      },
      ".rdp-today:not(.rdp-outside)": {
        ".rdp-day_button": {
          background: "var(--color-primary)",
          color: "var(--color-primary-content)",
        },
      },
      ".rdp-selected": {
        "font-weight": "inherit",
        "font-size": "0.75rem",
        ".rdp-day_button": {
          color: "var(--color-base-100)",
          "background-color": "var(--color-base-content)",
          "border-radius": "var(--radius-field)",
          border: "none",
          "&:hover": { "background-color": "var(--color-base-content)" },
        },
      },
      ".rdp-outside": { opacity: 0.75 },
      ".rdp-disabled": { opacity: 0.5 },
      ".rdp-hidden": {
        visibility: "hidden",
        color: "var(--color-base-content)",
      },
      ".rdp-range_start": {
        ".rdp-day_button": {
          "border-radius": "var(--radius-field) 0 0 var(--radius-field)",
        },
      },
      ".rdp-range_start .rdp-day_button": {
        "background-color": "var(--color-base-content)",
        color: "var(--color-base-content)",
      },
      ".rdp-range_middle": { "background-color": "var(--color-base-200)" },
      ".rdp-range_middle .rdp-day_button": {
        border: "unset",
        "border-radius": "unset",
        color: "inherit",
      },
      ".rdp-range_end": {
        color: "var(--color-base-content)",
        ".rdp-day_button": {
          "border-radius": "0 var(--radius-field) var(--radius-field) 0",
        },
      },
      ".rdp-range_end .rdp-day_button": {
        color: "var(--color-base-content)",
        "background-color": "var(--color-base-content)",
      },
      ".rdp-range_start.rdp-range_end": { background: "revert" },
      ".rdp-focusable": { cursor: "pointer" },
      ".rdp-footer": {
        "border-top": "var(--border) solid var(--color-base-200)",
        padding: "0.5rem",
      },
    },
    ".pika-single": {
      "&:is(div)": {
        "user-select": "none",
        "font-size": "0.75rem",
        "z-index": 999,
        display: "inline-block",
        position: "relative",
        color: "var(--color-base-content)",
        "background-color": "var(--color-base-100)",
        "border-radius": "var(--radius-box)",
        border: "var(--border) solid var(--color-base-200)",
        padding: "0.5rem",
        "&:before,\n    &:after": { content: '""', display: "table" },
        "&:after": { clear: "both" },
        "&.is-hidden": { display: "none" },
        "&.is-bound": { position: "absolute" },
        ".pika-lendar": { "css-float": "left" },
        ".pika-title": {
          position: "relative",
          "text-align": "center",
          select: {
            cursor: "pointer",
            position: "absolute",
            "z-index": 999,
            margin: "0",
            left: "0",
            top: "5px",
            opacity: 0,
          },
        },
        ".pika-label": {
          display: "inline-block",
          position: "relative",
          "z-index": 999,
          overflow: "hidden",
          margin: "0",
          padding: "5px 3px",
          "background-color": "var(--color-base-100)",
        },
        ".pika-prev,\n    .pika-next": {
          display: "block",
          cursor: "pointer",
          position: "absolute",
          top: "0",
          outline: "none",
          border: "0",
          width: "2.25rem",
          height: "2.25rem",
          color: "#0000",
          "font-size": "1.2em",
          "border-radius": "var(--radius-field)",
          "&:hover": { "background-color": "var(--color-base-200)" },
          "&.is-disabled": { cursor: "default", opacity: 0.2 },
          "&:before": {
            display: "inline-block",
            width: "2.25rem",
            height: "2.25rem",
            "line-height": 2.25,
            color: "var(--color-base-content)",
          },
        },
        ".pika-prev": { left: "0", "&:before": { content: '"‹"' } },
        ".pika-next": { right: "0", "&:before": { content: '"›"' } },
        ".pika-select": { display: "inline-block" },
        ".pika-table": {
          width: "100%",
          "border-collapse": "collapse",
          "border-spacing": "0",
          border: "0",
          "th,\n      td": { padding: "0" },
          th: {
            opacity: 0.6,
            "text-align": "center",
            width: "2.25rem",
            height: "2.25rem",
          },
        },
        ".pika-button": {
          cursor: "pointer",
          display: "block",
          outline: "none",
          border: "0",
          margin: "0",
          width: "2.25rem",
          height: "2.25rem",
          padding: "5px",
          "text-align": ["right", "center"],
        },
        ".pika-week": { color: "var(--color-base-content)" },
        ".is-today": {
          ".pika-button": {
            background: "var(--color-primary)",
            color: "var(--color-primary-content)",
          },
        },
        ".is-selected,\n    .has-event": {
          ".pika-button": {
            "&,\n        &:hover": {
              color: "var(--color-base-100)",
              "background-color": "var(--color-base-content)",
              "border-radius": "var(--radius-field)",
            },
          },
        },
        ".has-event": {
          ".pika-button": { background: "var(--color-base-primary)" },
        },
        ".is-disabled,\n    .is-inrange": {
          ".pika-button": { background: "var(--color-base-primary)" },
        },
        ".is-startrange": {
          ".pika-button": {
            color: "var(--color-base-100)",
            background: "var(--color-base-content)",
            "border-radius": "var(--radius-field)",
          },
        },
        ".is-endrange": {
          ".pika-button": {
            color: "var(--color-base-100)",
            background: "var(--color-base-content)",
            "border-radius": "var(--radius-field)",
          },
        },
        ".is-disabled": {
          ".pika-button": {
            "pointer-events": "none",
            cursor: "default",
            color: "var(--color-base-content)",
            opacity: 0.3,
          },
        },
        ".is-outside-current-month": {
          ".pika-button": { color: "var(--color-base-content)", opacity: 0.3 },
        },
        ".is-selection-disabled": {
          "pointer-events": "none",
          cursor: "default",
        },
        ".pika-button:hover,\n    .pika-row.pick-whole-week:hover .pika-button":
          {
            color: "var(--color-base-content)",
            "background-color": "var(--color-base-200)",
            "border-radius": "var(--radius-field)",
          },
        ".pika-table abbr": {
          "text-decoration": "none",
          "font-weight": "normal",
        },
      },
    },
  },
  j = {
    ".radio": {
      position: "relative",
      "flex-shrink": 0,
      cursor: "pointer",
      appearance: "none",
      "border-radius": "calc(infinity * 1px)",
      padding: "calc(0.25rem * 1)",
      "vertical-align": "middle",
      border:
        "var(--border) solid var(--input-color, color-mix(in srgb, currentColor 20%, #0000))",
      "box-shadow": "0 1px oklch(0% 0 0 / calc(var(--depth) * 0.1)) inset",
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      width: "var(--size)",
      height: "var(--size)",
      color: "var(--input-color, currentColor)",
      "&:before": {
        display: "block",
        width: "100%",
        height: "100%",
        "border-radius": "calc(infinity * 1px)",
        "--tw-content": '""',
        content: "var(--tw-content)",
        "background-size": "auto, calc(var(--noise) * 100%)",
        "background-image": "none, var(--fx-noise)",
      },
      "&:focus-visible": { outline: "2px solid currentColor" },
      '&:checked, &[aria-checked="true"]': {
        animation: "radio 0.2s ease-out",
        "border-color": "currentColor",
        "background-color": "var(--color-base-100)",
        "&:before": {
          "background-color": "currentColor",
          "@media print": [
            { outline: ".25rem solid" },
            { "outline-offset": "-1rem" },
          ],
          "box-shadow":
            "0 -1px oklch(0% 0 0 / calc(var(--depth) * 0.1)) inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 1px oklch(0% 0 0 / calc(var(--depth) * 0.1))",
          "@media (forced-colors: active)": {
            "outline-style": "var(--tw-outline-style)",
            "outline-width": "1px",
            "outline-offset": "calc(1px * -1)",
          },
        },
      },
    },
    ".radio-primary": { "--input-color": "var(--color-primary)" },
    ".radio-secondary": { "--input-color": "var(--color-secondary)" },
    ".radio-accent": { "--input-color": "var(--color-accent)" },
    ".radio-neutral": { "--input-color": "var(--color-neutral)" },
    ".radio-info": { "--input-color": "var(--color-info)" },
    ".radio-success": { "--input-color": "var(--color-success)" },
    ".radio-warning": { "--input-color": "var(--color-warning)" },
    ".radio-error": { "--input-color": "var(--color-error)" },
    ".radio:disabled": { cursor: "not-allowed", opacity: "20%" },
    ".radio-xs": {
      padding: "0.125rem",
      '&:is([type="radio"])': {
        "--size": "calc(var(--size-selector, 0.25rem) * 4)",
      },
    },
    ".radio-sm": {
      padding: "0.1875rem",
      '&:is([type="radio"])': {
        "--size": "calc(var(--size-selector, 0.25rem) * 5)",
      },
    },
    ".radio-md": {
      padding: "0.25rem",
      '&:is([type="radio"])': {
        "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      },
    },
    ".radio-lg": {
      padding: "0.3125rem",
      '&:is([type="radio"])': {
        "--size": "calc(var(--size-selector, 0.25rem) * 7)",
      },
    },
    ".radio-xl": {
      padding: "0.375rem",
      '&:is([type="radio"])': {
        "--size": "calc(var(--size-selector, 0.25rem) * 8)",
      },
    },
    "@keyframes radio": { "0%": { padding: "5px" }, "50%": { padding: "3px" } },
  },
  A = {
    ".card": {
      position: "relative",
      display: "flex",
      "flex-direction": "column",
      "border-radius": "var(--radius-box)",
      "outline-width": "2px",
      transition: "outline 0.2s ease-in-out",
      outline: "0 solid #0000",
      "outline-offset": "2px",
      "&:focus": {
        "outline-style": "none",
        "@media (forced-colors: active)": {
          outline: "2px solid transparent",
          "outline-offset": "2px",
        },
      },
      "&:focus-visible": { "outline-color": "currentColor" },
      ":where(figure:first-child)": {
        overflow: "hidden",
        "border-start-start-radius": "inherit",
        "border-start-end-radius": "inherit",
        "border-end-start-radius": "unset",
        "border-end-end-radius": "unset",
      },
      ":where(figure:last-child)": {
        overflow: "hidden",
        "border-start-start-radius": "unset",
        "border-start-end-radius": "unset",
        "border-end-start-radius": "inherit",
        "border-end-end-radius": "inherit",
      },
      "&:where(.card-border)": {
        border: "var(--border) solid var(--color-base-200)",
      },
      "&:where(.card-dash)": {
        border: "var(--border) dashed var(--color-base-200)",
      },
      "&.image-full": {
        display: "grid",
        "&:before": {
          position: "relative",
          "grid-column-start": "1",
          "grid-row-start": "1",
          "border-radius": "var(--radius-box)",
          "background-color": "var(--color-neutral)",
          opacity: "75%",
          content: '""',
        },
        "> *": { "grid-column-start": "1", "grid-row-start": "1" },
        "> .card-body": {
          position: "relative",
          color: "var(--color-neutral-content)",
        },
        ":where(figure)": { overflow: "hidden", "border-radius": "inherit" },
        "> figure img": { height: "100%", "object-fit": "cover" },
      },
      figure: {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      },
      '&:has(> input:is(input[type="checkbox"], input[type="radio"]))': {
        cursor: "pointer",
        "user-select": "none",
      },
      "&:has(> :checked)": { outline: "2px solid currentColor" },
    },
    ".card-title": {
      display: "flex",
      "align-items": "center",
      gap: "calc(0.25rem * 2)",
      "font-size": "var(--cardtitle-fs, 1.125rem)",
      "font-weight": 600,
    },
    ".card-body": {
      display: "flex",
      flex: "auto",
      "flex-direction": "column",
      gap: "calc(0.25rem * 2)",
      padding: "var(--card-p, 1.5rem)",
      "font-size": "var(--card-fs, 0.875rem)",
      ":where(p)": { "flex-grow": 1 },
    },
    ".card-actions": {
      display: "flex",
      "flex-wrap": "wrap",
      "align-items": "flex-start",
      gap: "calc(0.25rem * 2)",
    },
    ".card-xs": {
      ".card-body": { "--card-p": "0.5rem", "--card-fs": "0.6875rem" },
      ".card-title": { "--cardtitle-fs": "0.875rem" },
    },
    ".card-sm": {
      ".card-body": { "--card-p": "1rem", "--card-fs": "0.75rem" },
      ".card-title": { "--cardtitle-fs": "1rem" },
    },
    ".card-md": {
      ".card-body": { "--card-p": "1.5rem", "--card-fs": "0.875rem" },
      ".card-title": { "--cardtitle-fs": "1.125rem" },
    },
    ".card-lg": {
      ".card-body": { "--card-p": "2rem", "--card-fs": "1rem" },
      ".card-title": { "--cardtitle-fs": "1.25rem" },
    },
    ".card-xl": {
      ".card-body": { "--card-p": "2.5rem", "--card-fs": "1.125rem" },
      ".card-title": { "--cardtitle-fs": "1.375rem" },
    },
    ".card-side": {
      "align-items": "stretch",
      "flex-direction": "row",
      ":where(figure:first-child)": {
        overflow: "hidden",
        "border-start-start-radius": "inherit",
        "border-start-end-radius": "unset",
        "border-end-start-radius": "inherit",
        "border-end-end-radius": "unset",
      },
      ":where(figure:last-child)": {
        overflow: "hidden",
        "border-start-start-radius": "unset",
        "border-start-end-radius": "inherit",
        "border-end-start-radius": "unset",
        "border-end-end-radius": "inherit",
      },
      "figure > *": { "max-width": "unset" },
      ":where(figure > *)": {
        width: "100%",
        height: "100%",
        "object-fit": "cover",
      },
    },
  },
  E = {
    ".validator": {
      "&:user-valid, &:has(:user-valid)": {
        '&, &:focus, &:checked, &[aria-checked="true"], &:focus-within': {
          "--input-color": "var(--color-success)",
        },
      },
      "&:user-invalid, &:has(:user-invalid)": {
        '&, &:focus, &:checked, &[aria-checked="true"], &:focus-within': {
          "--input-color": "var(--color-error)",
        },
        "& ~ .validator-hint": {
          visibility: "visible",
          display: "block",
          color: "var(--color-error)",
        },
      },
      "& ~ .validator-hint": { visibility: "hidden" },
    },
    ".validator-hint": {
      "margin-top": "calc(0.25rem * 2)",
      "font-size": "var(--text-xs)",
      "line-height": "var(--tw-leading, var(--text-xs--line-height))",
    },
  },
  $ = {
    ".loading": {
      "pointer-events": "none",
      display: "inline-block",
      "aspect-ratio": "1 / 1",
      "background-color": "currentColor",
      "vertical-align": "middle",
      width: "calc(var(--size-selector, 0.25rem) * 6)",
      "mask-size": "100%",
      "mask-repeat": "no-repeat",
      "mask-position": "center",
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E\")",
    },
    ".loading-spinner": {
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E\")",
    },
    ".loading-dots": {
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1'/%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1' begin='0.1s'/%3E%3C/circle%3E%3Ccircle cx='20' cy='12' r='3'%3E%3Canimate attributeName='cy' values='12;6;12;12' keyTimes='0;0.286;0.571;1' dur='1.05s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1' begin='0.2s'/%3E%3C/circle%3E%3C/svg%3E\")",
    },
    ".loading-ring": {
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' stroke='white'%3E%3Cg fill='none' fill-rule='evenodd' stroke-width='2'%3E%3Ccircle cx='22' cy='22' r='1'%3E%3Canimate attributeName='r' begin='0s' dur='1.8s' values='1;20' calcMode='spline' keyTimes='0;1' keySplines='0.165,0.84,0.44,1' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-opacity' begin='0s' dur='1.8s' values='1;0' calcMode='spline' keyTimes='0;1' keySplines='0.3,0.61,0.355,1' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='1'%3E%3Canimate attributeName='r' begin='-0.9s' dur='1.8s' values='1;20' calcMode='spline' keyTimes='0;1' keySplines='0.165,0.84,0.44,1' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-opacity' begin='-0.9s' dur='1.8s' values='1;0' calcMode='spline' keyTimes='0;1' keySplines='0.3,0.61,0.355,1' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E\")",
    },
    ".loading-ball": {
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='12' cy='5' rx='4' ry='4'%3E%3Canimate attributeName='cy' values='5;20;20.5;20;5' keyTimes='0;0.469;0.5;0.531;1' dur='.8s' repeatCount='indefinite' keySplines='.33,0,.66,.33;.33,.66,.66,1'/%3E%3Canimate attributeName='rx' values='4;4;4.8;4;4' keyTimes='0;0.469;0.5;0.531;1' dur='.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='ry' values='4;4;3;4;4' keyTimes='0;0.469;0.5;0.531;1' dur='.8s' repeatCount='indefinite'/%3E%3C/ellipse%3E%3C/svg%3E\")",
    },
    ".loading-bars": {
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='6' height='22'%3E%3Canimate attributeName='y' values='1;5;1' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='height' values='22;14;22' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='1;0.2;1' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect x='9' y='1' width='6' height='22'%3E%3Canimate attributeName='y' values='1;5;1' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite' begin='-0.65s'/%3E%3Canimate attributeName='height' values='22;14;22' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite' begin='-0.65s'/%3E%3Canimate attributeName='opacity' values='1;0.2;1' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite' begin='-0.65s'/%3E%3C/rect%3E%3Crect x='17' y='1' width='6' height='22'%3E%3Canimate attributeName='y' values='1;5;1' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite' begin='-0.5s'/%3E%3Canimate attributeName='height' values='22;14;22' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite' begin='-0.5s'/%3E%3Canimate attributeName='opacity' values='1;0.2;1' keyTimes='0;0.938;1' dur='.8s' repeatCount='indefinite' begin='-0.5s'/%3E%3C/rect%3E%3C/svg%3E\")",
    },
    ".loading-infinity": {
      "mask-image":
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='shape-rendering:auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cpath fill='none' stroke='black' stroke-width='10' stroke-dasharray='205.271 51.318' d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z' stroke-linecap='round' style='transform:scale(0.8);transform-origin:50px 50px'%3E%3Canimate attributeName='stroke-dashoffset' repeatCount='indefinite' dur='2s' keyTimes='0;1' values='0;256.589'/%3E%3C/path%3E%3C/svg%3E\")",
    },
    ".loading-xs": { width: "calc(var(--size-selector, 0.25rem) * 4)" },
    ".loading-sm": { width: "calc(var(--size-selector, 0.25rem) * 5)" },
    ".loading-md": { width: "calc(var(--size-selector, 0.25rem) * 6)" },
    ".loading-lg": { width: "calc(var(--size-selector, 0.25rem) * 7)" },
    ".loading-xl": { width: "calc(var(--size-selector, 0.25rem) * 8)" },
  },
  T = {
    ".indicator": {
      position: "relative",
      display: "inline-flex",
      width: "max-content",
      ":where(.indicator-item)": {
        "z-index": 1,
        position: "absolute",
        "white-space": "nowrap",
        top: "var(--inidicator-t, 0)",
        bottom: "var(--inidicator-b, auto)",
        left: "var(--inidicator-s, auto)",
        right: "var(--inidicator-e, 0)",
        translate: "var(--inidicator-x, 50%) var(--indicator-y, -50%)",
      },
    },
    ".indicator-start": {
      "--inidicator-s": "0",
      "--inidicator-e": "auto",
      "--inidicator-x": "-50%",
    },
    ".indicator-center": {
      "--inidicator-s": "50%",
      "--inidicator-e": "50%",
      "--inidicator-x": "-50%",
      '[dir="rtl"] &': { "--inidicator-x": "50%" },
    },
    ".indicator-end": {
      "--inidicator-s": "auto",
      "--inidicator-e": "0",
      "--inidicator-x": "50%",
    },
    ".indicator-bottom": {
      "--inidicator-t": "auto",
      "--inidicator-b": "0",
      "--indicator-y": "50%",
    },
    ".indicator-middle": {
      "--inidicator-t": "50%",
      "--inidicator-b": "50%",
      "--indicator-y": "-50%",
    },
    ".indicator-top": {
      "--inidicator-t": "0",
      "--inidicator-b": "auto",
      "--indicator-y": "-50%",
    },
  },
  _ = {
    ".radial-progress": {
      position: "relative",
      display: "inline-grid",
      height: "var(--size)",
      width: "var(--size)",
      "place-content": "center",
      "border-radius": "calc(infinity * 1px)",
      "background-color": "transparent",
      "vertical-align": "middle",
      "box-sizing": "content-box",
      "--value": "0",
      "--size": "5rem",
      "--thickness": "calc(var(--size) / 10)",
      "--radialprogress": "calc(var(--value) * 1%)",
      transition: "--radialprogress 0.3s linear",
      "&:before": {
        position: "absolute",
        inset: "calc(0.25rem * 0)",
        "border-radius": "calc(infinity * 1px)",
        content: '""',
        background:
          "radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor var(--radialprogress), #0000 0)",
        "webkit-mask":
          "radial-gradient( farthest-side, #0000 calc(100% - var(--thickness)), #000 calc(100% + 0.5px - var(--thickness)) )",
        mask: "radial-gradient( farthest-side, #0000 calc(100% - var(--thickness)), #000 calc(100% + 0.5px - var(--thickness)) )",
      },
      "&:after": {
        position: "absolute",
        "border-radius": "calc(infinity * 1px)",
        "background-color": "currentColor",
        transition: "transform 0.3s linear",
        content: '""',
        inset: "calc(50% - var(--thickness) / 2)",
        transform:
          "rotate(calc(var(--value) * 3.6deg - 90deg)) translate(calc(var(--size) / 2 - 50%))",
      },
    },
  },
  N = {
    ".progress": {
      position: "relative",
      height: "calc(0.25rem * 2)",
      width: "100%",
      appearance: "none",
      overflow: "hidden",
      "border-radius": "var(--radius-box)",
      "background-color": "color-mix(in oklab, currentColor 20%, transparent)",
      color: "var(--color-base-content)",
      "&:indeterminate": {
        "background-image":
          "repeating-linear-gradient( 90deg, currentColor -1%, currentColor 10%, #0000 10%, #0000 90% )",
        "background-size": "200%",
        "background-position-x": "15%",
        animation: "progress 5s ease-in-out infinite",
        "@supports (-moz-appearance: none)": {
          "&::-moz-progress-bar": {
            "background-color": "transparent",
            "background-image":
              "repeating-linear-gradient( 90deg, currentColor -1%, currentColor 10%, #0000 10%, #0000 90% )",
            "background-size": "200%",
            "background-position-x": "15%",
            animation: "progress 5s ease-in-out infinite",
          },
        },
      },
      "@supports (-moz-appearance: none)": {
        "&::-moz-progress-bar": {
          "border-radius": "var(--radius-box)",
          "background-color": "currentColor",
        },
      },
      "@supports (-webkit-appearance: none)": {
        "&::-webkit-progress-bar": {
          "border-radius": "var(--radius-box)",
          "background-color": "transparent",
        },
        "&::-webkit-progress-value": {
          "border-radius": "var(--radius-box)",
          "background-color": "currentColor",
        },
      },
    },
    ".progress-primary": { color: "var(--color-primary)" },
    ".progress-secondary": { color: "var(--color-secondary)" },
    ".progress-accent": { color: "var(--color-accent)" },
    ".progress-neutral": { color: "var(--color-neutral)" },
    ".progress-info": { color: "var(--color-info)" },
    ".progress-success": { color: "var(--color-success)" },
    ".progress-warning": { color: "var(--color-warning)" },
    ".progress-error": { color: "var(--color-error)" },
    "@keyframes progress": { "50%": { "background-position-x": "-115%" } },
  },
  Y = {
    ".chat": {
      display: "grid",
      "column-gap": "calc(0.25rem * 3)",
      "padding-block": "calc(0.25rem * 1)",
    },
    ".chat-bubble": {
      position: "relative",
      display: "block",
      width: "fit-content",
      "border-radius": "var(--radius-field)",
      "background-color": "var(--color-base-300)",
      "padding-inline": "calc(0.25rem * 4)",
      "padding-block": "calc(0.25rem * 2)",
      color: "var(--color-base-content)",
      "grid-row-end": "3",
      "min-height": "2rem",
      "min-width": "2.5rem",
      "max-width": "90%",
      "&:before": {
        position: "absolute",
        bottom: "calc(0.25rem * 0)",
        height: "calc(0.25rem * 3)",
        width: "calc(0.25rem * 3)",
        "background-color": "inherit",
        content: '""',
        "mask-repeat": "no-repeat",
        "mask-image": "var(--mask-chat)",
        "mask-position": "0px -1px",
        "mask-size": "13px",
      },
    },
    ".chat-bubble-primary": {
      "background-color": "var(--color-primary)",
      color: "var(--color-primary-content)",
    },
    ".chat-bubble-secondary": {
      "background-color": "var(--color-secondary)",
      color: "var(--color-secondary-content)",
    },
    ".chat-bubble-accent": {
      "background-color": "var(--color-accent)",
      color: "var(--color-accent-content)",
    },
    ".chat-bubble-neutral": {
      "background-color": "var(--color-neutral)",
      color: "var(--color-neutral-content)",
    },
    ".chat-bubble-info": {
      "background-color": "var(--color-info)",
      color: "var(--color-info-content)",
    },
    ".chat-bubble-success": {
      "background-color": "var(--color-success)",
      color: "var(--color-success-content)",
    },
    ".chat-bubble-warning": {
      "background-color": "var(--color-warning)",
      color: "var(--color-warning-content)",
    },
    ".chat-bubble-error": {
      "background-color": "var(--color-error)",
      color: "var(--color-error-content)",
    },
    ".chat-image": { "grid-row": "span 2 / span 2", "align-self": "flex-end" },
    ".chat-header": {
      "grid-row-start": "1",
      display: "flex",
      gap: "calc(0.25rem * 1)",
      "font-size": "0.6875rem",
    },
    ".chat-footer": {
      "grid-row-start": "3",
      display: "flex",
      gap: "calc(0.25rem * 1)",
      "font-size": "0.6875rem",
    },
    ".chat-start": {
      "place-items": "start",
      "grid-template-columns": "auto 1fr",
      ".chat-header": { "grid-column-start": "2" },
      ".chat-footer": { "grid-column-start": "2" },
      ".chat-image": { "grid-column-start": "1" },
      ".chat-bubble": {
        "grid-column-start": "2",
        "border-end-start-radius": "0",
        "&:before": {
          transform: "rotateY(0deg)",
          "inset-inline-start": "-0.75rem",
        },
        '[dir="rtl"] &:before': { transform: "rotateY(180deg)" },
      },
    },
    ".chat-end": {
      "place-items": "end",
      "grid-template-columns": "1fr auto",
      ".chat-header": { "grid-column-start": "1" },
      ".chat-footer": { "grid-column-start": "1" },
      ".chat-image": { "grid-column-start": "2" },
      ".chat-bubble": {
        "grid-column-start": "1",
        "border-end-end-radius": "0",
        "&:before": {
          transform: "rotateY(180deg)",
          "inset-inline-start": "100%",
        },
        '[dir="rtl"] &:before': { transform: "rotateY(0deg)" },
      },
    },
  },
  q = {
    ".countdown": {
      display: "inline-flex",
      "&.countdown": { "line-height": "1em" },
      "& > *": {
        display: "inline-block",
        "overflow-y": "hidden",
        height: "1em",
        "&:before": {
          position: "relative",
          content:
            '"00\\A 01\\A 02\\A 03\\A 04\\A 05\\A 06\\A 07\\A 08\\A 09\\A 10\\A 11\\A 12\\A 13\\A 14\\A 15\\A 16\\A 17\\A 18\\A 19\\A 20\\A 21\\A 22\\A 23\\A 24\\A 25\\A 26\\A 27\\A 28\\A 29\\A 30\\A 31\\A 32\\A 33\\A 34\\A 35\\A 36\\A 37\\A 38\\A 39\\A 40\\A 41\\A 42\\A 43\\A 44\\A 45\\A 46\\A 47\\A 48\\A 49\\A 50\\A 51\\A 52\\A 53\\A 54\\A 55\\A 56\\A 57\\A 58\\A 59\\A 60\\A 61\\A 62\\A 63\\A 64\\A 65\\A 66\\A 67\\A 68\\A 69\\A 70\\A 71\\A 72\\A 73\\A 74\\A 75\\A 76\\A 77\\A 78\\A 79\\A 80\\A 81\\A 82\\A 83\\A 84\\A 85\\A 86\\A 87\\A 88\\A 89\\A 90\\A 91\\A 92\\A 93\\A 94\\A 95\\A 96\\A 97\\A 98\\A 99\\A"',
          "white-space": "pre",
          top: "calc(var(--value) * -1em)",
          "text-align": "center",
          transition: "all 1s cubic-bezier(1, 0, 0, 1)",
        },
      },
    },
  },
  B = {
    ".input": {
      cursor: "text",
      border: "var(--border) solid #0000",
      position: "relative",
      display: "inline-flex",
      "flex-shrink": 1,
      appearance: "none",
      "align-items": "center",
      gap: "calc(0.25rem * 2)",
      "background-color": "var(--color-base-100)",
      "padding-inline": "calc(0.25rem * 3)",
      "vertical-align": "middle",
      "white-space": "nowrap",
      width: "clamp(3rem, 20rem, 100%)",
      height: "var(--size)",
      "font-size": "0.875rem",
      "border-start-start-radius": "var(--join-ss, var(--radius-field))",
      "border-start-end-radius": "var(--join-se, var(--radius-field))",
      "border-end-start-radius": "var(--join-es, var(--radius-field))",
      "border-end-end-radius": "var(--join-ee, var(--radius-field))",
      "border-color": "var(--input-color)",
      "box-shadow":
        "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000) inset, 0 -1px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset",
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      "--input-color":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      "&:where(input)": { display: "inline-flex" },
      ":where(input)": {
        display: "inline-flex",
        height: "100%",
        width: "100%",
        appearance: "none",
        "background-color": "transparent",
        border: "none",
        "&:focus, &:focus-within": {
          "outline-style": "none",
          "@media (forced-colors: active)": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
          },
        },
      },
      "&:focus, &:focus-within": {
        "--input-color": "var(--color-base-content)",
        "box-shadow":
          "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000)",
        outline: "2px solid var(--input-color)",
        "outline-offset": "2px",
        isolation: "isolate",
      },
      "&:has(> input[disabled]), &:is(:disabled, [disabled])": {
        cursor: "not-allowed",
        "border-color": "var(--color-base-200)",
        "background-color": "var(--color-base-200)",
        color:
          "color-mix(in oklab, var(--color-base-content) 40%, transparent)",
        "&::placeholder": {
          color:
            "color-mix(in oklab, var(--color-base-content) 20%, transparent)",
        },
        "box-shadow": "none",
      },
      "&:has(> input[disabled]) > input[disabled]": { cursor: "not-allowed" },
      "&::-webkit-date-and-time-value": { "text-align": "inherit" },
      '&[type="number"]': {
        "&::-webkit-inner-spin-button": {
          "margin-block": "calc(0.25rem * -3)",
          "margin-inline-end": "calc(0.25rem * -3)",
        },
      },
      "&::-webkit-calendar-picker-indicator": {
        position: "absolute",
        "inset-inline-end": "0.75em",
      },
    },
    ".input-ghost": {
      "background-color": "transparent",
      "box-shadow": "none",
      "border-color": "#0000",
      "&:focus, &:focus-within": {
        "background-color": "var(--color-base-100)",
        color: "var(--color-base-content)",
        "border-color": "#0000",
        "box-shadow": "none",
      },
    },
    ".input-neutral": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-neutral)" },
    },
    ".input-primary": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-primary)" },
    },
    ".input-secondary": {
      "&, &:focus, &:focus-within": {
        "--input-color": "var(--color-secondary)",
      },
    },
    ".input-accent": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-accent)" },
    },
    ".input-info": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-info)" },
    },
    ".input-success": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-success)" },
    },
    ".input-warning": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-warning)" },
    },
    ".input-error": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-error)" },
    },
    ".input-xs": {
      "--size": "calc(var(--size-field, 0.25rem) * 6)",
      "font-size": "0.6875rem",
      '&[type="number"]': {
        "&::-webkit-inner-spin-button": {
          "margin-block": "calc(0.25rem * -1)",
          "margin-inline-end": "calc(0.25rem * -3)",
        },
      },
    },
    ".input-sm": {
      "--size": "calc(var(--size-field, 0.25rem) * 8)",
      "font-size": "0.75rem",
      '&[type="number"]': {
        "&::-webkit-inner-spin-button": {
          "margin-block": "calc(0.25rem * -2)",
          "margin-inline-end": "calc(0.25rem * -3)",
        },
      },
    },
    ".input-md": {
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      "font-size": "0.875rem",
      '&[type="number"]': {
        "&::-webkit-inner-spin-button": {
          "margin-block": "calc(0.25rem * -3)",
          "margin-inline-end": "calc(0.25rem * -3)",
        },
      },
    },
    ".input-lg": {
      "--size": "calc(var(--size-field, 0.25rem) * 12)",
      "font-size": "1.125rem",
      '&[type="number"]': {
        "&::-webkit-inner-spin-button": {
          "margin-block": "calc(0.25rem * -3)",
          "margin-inline-end": "calc(0.25rem * -3)",
        },
      },
    },
    ".input-xl": {
      "--size": "calc(var(--size-field, 0.25rem) * 14)",
      "font-size": "1.375rem",
      '&[type="number"]': {
        "&::-webkit-inner-spin-button": {
          "margin-block": "calc(0.25rem * -4)",
          "margin-inline-end": "calc(0.25rem * -3)",
        },
      },
    },
  },
  L = {
    ".alert": {
      display: "grid",
      "align-items": "center",
      gap: "calc(0.25rem * 4)",
      "border-radius": "var(--radius-box)",
      "padding-inline": "calc(0.25rem * 4)",
      "padding-block": "calc(0.25rem * 3)",
      color: "var(--color-base-content)",
      "background-color": "var(--alert-color, var(--color-base-200))",
      "justify-content": "start",
      "justify-items": "start",
      "grid-auto-flow": "column",
      "grid-template-columns": "auto minmax(auto, 1fr)",
      "text-align": "start",
      border: "var(--border) solid var(--color-base-200)",
      "font-size": "0.875rem",
      "line-height": "1.25rem",
      "background-size": "auto, calc(var(--noise) * 100%)",
      "background-image": "none, var(--fx-noise)",
      "box-shadow":
        "0 3px 0 -2px oklch(100% 0 0 / calc(var(--depth) * 0.08)) inset, 0 1px color-mix( in oklab, color-mix(in oklab, #000 20%, var(--alert-color, var(--color-base-200))) calc(var(--depth) * 20%), #0000 ), 0 4px 3px -2px oklch(0% 0 0 / calc(var(--depth) * 0.08))",
      "&.alert-outline": {
        "background-color": "transparent",
        color: "var(--alert-color)",
        "box-shadow": "none",
        "background-image": "none",
      },
      "&.alert-dash": {
        "background-color": "transparent",
        color: "var(--alert-color)",
        "border-style": "dashed",
        "box-shadow": "none",
        "background-image": "none",
      },
      "&.alert-soft": {
        color: "var(--alert-color, var(--color-base-content))",
        background:
          "color-mix( in oklab, var(--alert-color, var(--color-base-content)) 8%, var(--color-base-100) )",
        "border-color":
          "color-mix( in oklab, var(--alert-color, var(--color-base-content)) 10%, var(--color-base-100) )",
        "box-shadow": "none",
        "background-image": "none",
      },
    },
    ".alert-info": {
      "border-color": "var(--color-info)",
      color: "var(--color-info-content)",
      "--alert-color": "var(--color-info)",
    },
    ".alert-success": {
      "border-color": "var(--color-success)",
      color: "var(--color-success-content)",
      "--alert-color": "var(--color-success)",
    },
    ".alert-warning": {
      "border-color": "var(--color-warning)",
      color: "var(--color-warning-content)",
      "--alert-color": "var(--color-warning)",
    },
    ".alert-error": {
      "border-color": "var(--color-error)",
      color: "var(--color-error-content)",
      "--alert-color": "var(--color-error)",
    },
    ".alert-vertical": {
      "justify-content": "center",
      "justify-items": "center",
      "grid-auto-flow": "row",
      "grid-template-columns": "max-content",
      "text-align": "center",
    },
    ".alert-horizontal": {
      "justify-content": "start",
      "justify-items": "start",
      "grid-auto-flow": "column",
      "grid-template-columns": "auto minmax(auto, 1fr)",
      "text-align": "start",
    },
  },
  M = {
    ".skeleton": {
      "border-radius": "var(--radius-box)",
      "background-color": "var(--color-base-300)",
      "@media (prefers-reduced-motion: reduce)": {
        "transition-duration": "15s",
      },
      "will-change": "background-position",
      animation: "skeleton 1.8s ease-in-out infinite",
      "background-image":
        "linear-gradient( 105deg, #0000 0% 40%, var(--color-base-100) 50%, #0000 60% 100% )",
      "background-size": "200% auto",
      "background-repeat": "no-repeat",
      "background-position-x": "-50%",
    },
    "@keyframes skeleton": {
      "0%": { "background-position": "150%" },
      "100%": { "background-position": "-50%" },
    },
  },
  W = {
    ".toast": {
      position: "fixed",
      "inset-inline-start": "auto",
      "inset-inline-end": "calc(0.25rem * 0)",
      top: "auto",
      bottom: "calc(0.25rem * 0)",
      margin: "calc(0.25rem * 4)",
      display: "flex",
      "min-width": "fit-content",
      "flex-direction": "column",
      gap: "calc(0.25rem * 2)",
      "background-color": "transparent",
      "white-space": "nowrap",
      translate: "var(--toast-x, 0) var(--toast-y, 0)",
      "& > *": { animation: "toast 0.25s ease-out" },
      "&:where(.toast-start)": {
        "inset-inline-start": "calc(0.25rem * 0)",
        "inset-inline-end": "auto",
        "--toast-x": "0",
      },
      "&:where(.toast-center)": {
        "inset-inline-start": "calc(1/2 * 100%)",
        "inset-inline-end": "calc(1/2 * 100%)",
        "--toast-x": "-50%",
      },
      "&:where(.toast-end)": {
        "inset-inline-start": "auto",
        "inset-inline-end": "calc(0.25rem * 0)",
        "--toast-x": "0",
      },
      "&:where(.toast-bottom)": {
        top: "auto",
        bottom: "calc(0.25rem * 0)",
        "--toast-y": "0",
      },
      "&:where(.toast-middle)": {
        top: "calc(1/2 * 100%)",
        bottom: "auto",
        "--toast-y": "-50%",
      },
      "&:where(.toast-top)": {
        top: "calc(0.25rem * 0)",
        bottom: "auto",
        "--toast-y": "0",
      },
    },
    "@keyframes toast": {
      "0%": { scale: "0.9", opacity: 0 },
      "100%": { scale: "1", opacity: 1 },
    },
  },
  S = {
    ".swap": {
      position: "relative",
      display: "inline-grid",
      cursor: "pointer",
      "place-content": "center",
      "vertical-align": "middle",
      "webkit-user-select": "none",
      "user-select": "none",
      input: { appearance: "none", border: "none" },
      "> *": {
        "grid-column-start": "1",
        "grid-row-start": "1",
        "transition-property": "transform, rotate, opacity",
        "transition-duration": "0.2s",
        "transition-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
      },
      ".swap-on, .swap-indeterminate, input:indeterminate ~ .swap-on": {
        opacity: "0%",
      },
      "input:is(:checked, :indeterminate)": {
        "& ~ .swap-off": { opacity: "0%" },
      },
      "input:checked ~ .swap-on, input:indeterminate ~ .swap-indeterminate": {
        opacity: "100%",
      },
    },
    ".swap-active": {
      ".swap-off": { opacity: "0%" },
      ".swap-on": { opacity: "100%" },
    },
    ".swap-rotate": {
      ".swap-on, .swap-indeterminate, input:indeterminate ~ .swap-on": {
        rotate: "45deg",
      },
      "input:is(:checked, :indeterminate) ~ .swap-on, &.swap-active .swap-on": {
        rotate: "0deg",
      },
      "input:is(:checked, :indeterminate) ~ .swap-off, &.swap-active .swap-off":
        { rotate: "calc(45deg * -1)" },
    },
    ".swap-flip": {
      "transform-style": "preserve-3d",
      perspective: "20rem",
      ".swap-on, .swap-indeterminate, input:indeterminate ~ .swap-on": {
        transform: "rotateY(180deg)",
        "backface-visibility": "hidden",
        opacity: "100%",
      },
      "input:is(:checked, :indeterminate) ~ .swap-on, &.swap-active .swap-on": {
        transform: "rotateY(0deg)",
      },
      "input:is(:checked, :indeterminate) ~ .swap-off, &.swap-active .swap-off":
        {
          transform: "rotateY(-180deg)",
          "backface-visibility": "hidden",
          opacity: "100%",
        },
    },
  },
  Z = {
    ".checkbox": {
      border:
        "var(--border) solid var(--input-color, color-mix(in oklab, var(--color-base-content) 20%, #0000))",
      position: "relative",
      "flex-shrink": 0,
      cursor: "pointer",
      appearance: "none",
      "border-radius": "var(--radius-selector)",
      padding: "calc(0.25rem * 1)",
      "vertical-align": "middle",
      color: "var(--color-base-content)",
      "box-shadow":
        "0 1px oklch(0% 0 0 / calc(var(--depth) * 0.1)) inset, 0 0 #0000 inset, 0 0 #0000",
      transition: "background-color 0.2s, box-shadow 0.2s",
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      width: "var(--size)",
      height: "var(--size)",
      "background-size": "auto, calc(var(--noise) * 100%)",
      "background-image": "none, var(--fx-noise)",
      "&:before": {
        "--tw-content": '""',
        content: "var(--tw-content)",
        display: "block",
        width: "100%",
        height: "100%",
        rotate: "45deg",
        "background-color": "currentColor",
        opacity: "0%",
        transition: "clip-path 0.3s, opacity 0.1s, rotate 0.3s, translate 0.3s",
        "transition-delay": "0.1s",
        "clip-path":
          "polygon(20% 100%, 20% 80%, 50% 80%, 50% 80%, 70% 80%, 70% 100%)",
        "box-shadow":
          "0px 3px 0 0px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset",
        "font-size": "1rem",
        "line-height": 0.75,
      },
      "&:focus-visible": {
        outline: "2px solid var(--input-color, currentColor)",
        "outline-offset": "2px",
      },
      '&:checked, &[aria-checked="true"]': {
        "background-color": "var(--input-color, #0000)",
        "box-shadow":
          "0 0 #0000 inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 1px oklch(0% 0 0 / calc(var(--depth) * 0.1))",
        "&:before": {
          "clip-path":
            "polygon(20% 100%, 20% 80%, 50% 80%, 50% 0%, 70% 0%, 70% 100%)",
          opacity: "100%",
          "@media print": [
            { rotate: "0deg" },
            { "background-color": "transparent" },
            { "--tw-content": '"✔︎"' },
            { "clip-path": "none" },
          ],
          "@media (forced-colors: active)": {
            rotate: "0deg",
            "background-color": "transparent",
            "--tw-content": '"✔︎"',
            "clip-path": "none",
          },
        },
      },
      "&:indeterminate": {
        "&:before": {
          rotate: "0deg",
          opacity: "100%",
          translate: "0 -35%",
          "clip-path":
            "polygon(20% 100%, 20% 80%, 50% 80%, 50% 80%, 80% 80%, 80% 100%)",
        },
      },
    },
    ".checkbox-primary": {
      color: "var(--color-primary-content)",
      "--input-color": "var(--color-primary)",
    },
    ".checkbox-secondary": {
      color: "var(--color-secondary-content)",
      "--input-color": "var(--color-secondary)",
    },
    ".checkbox-accent": {
      color: "var(--color-accent-content)",
      "--input-color": "var(--color-accent)",
    },
    ".checkbox-neutral": {
      color: "var(--color-neutral-content)",
      "--input-color": "var(--color-neutral)",
    },
    ".checkbox-info": {
      color: "var(--color-info-content)",
      "--input-color": "var(--color-info)",
    },
    ".checkbox-success": {
      color: "var(--color-success-content)",
      "--input-color": "var(--color-success)",
    },
    ".checkbox-warning": {
      color: "var(--color-warning-content)",
      "--input-color": "var(--color-warning)",
    },
    ".checkbox-error": {
      color: "var(--color-error-content)",
      "--input-color": "var(--color-error)",
    },
    ".checkbox:disabled": { cursor: "not-allowed", opacity: "20%" },
    ".checkbox-xs": {
      padding: "0.125rem",
      "--size": "calc(var(--size-selector, 0.25rem) * 4)",
    },
    ".checkbox-sm": {
      padding: "0.1875rem",
      "--size": "calc(var(--size-selector, 0.25rem) * 5)",
    },
    ".checkbox-md": {
      padding: "0.25rem",
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
    },
    ".checkbox-lg": {
      padding: "0.3125rem",
      "--size": "calc(var(--size-selector, 0.25rem) * 7)",
    },
    ".checkbox-xl": {
      padding: "0.375rem",
      "--size": "calc(var(--size-selector, 0.25rem) * 8)",
    },
  },
  X = {
    ".label": {
      display: "inline-flex",
      "align-items": "center",
      gap: "calc(0.25rem * 1.5)",
      "white-space": "nowrap",
      color: "color-mix(in oklab, currentColor 60%, transparent)",
      "&:has(input)": { cursor: "pointer" },
      "&:is(.input > *, .select > *)": {
        display: "flex",
        height: "calc(100% - 0.5rem)",
        "align-items": "center",
        "padding-inline": "calc(0.25rem * 3)",
        "white-space": "nowrap",
        "font-size": "inherit",
        "&:first-child": {
          "margin-inline-start": "calc(0.25rem * -3)",
          "margin-inline-end": "calc(0.25rem * 3)",
          "border-inline-end":
            "var(--border) solid color-mix(in oklab, currentColor 10%, #0000)",
        },
        "&:last-child": {
          "margin-inline-start": "calc(0.25rem * 3)",
          "margin-inline-end": "calc(0.25rem * -3)",
          "border-inline-start":
            "var(--border) solid color-mix(in oklab, currentColor 10%, #0000)",
        },
      },
    },
    ".floating-label": {
      position: "relative",
      display: "block",
      input: {
        display: "block",
        "&::placeholder": {
          transition:
            "top 0.1s ease-out, translate 0.1s ease-out, scale 0.1s ease-out, opacity 0.1s ease-out",
        },
      },
      textarea: {
        "&::placeholder": {
          transition:
            "top 0.1s ease-out, translate 0.1s ease-out, scale 0.1s ease-out, opacity 0.1s ease-out",
        },
      },
      "> span": {
        position: "absolute",
        "inset-inline-start": "calc(0.25rem * 3)",
        "z-index": 1,
        "background-color": "var(--color-base-100)",
        "padding-inline": "calc(0.25rem * 1)",
        opacity: "0%",
        top: "calc(var(--size-field, 0.25rem) * 10 / 2)",
        "line-height": 1,
        "border-radius": "2px",
        "pointer-events": "none",
        translate: "0 -50%",
        transition:
          "top 0.1s ease-out, translate 0.1s ease-out, scale 0.1s ease-out, opacity 0.1s ease-out",
      },
      "&:focus-within, &:not(:has(input:placeholder-shown, textarea:placeholder-shown))":
        {
          "::placeholder": {
            opacity: "0%",
            top: "0",
            translate: "-12.5% calc(-50% - 0.125em)",
            scale: "0.75",
            "pointer-events": "auto",
          },
          "> span": {
            opacity: "100%",
            top: "0",
            translate: "-12.5% calc(-50% - 0.125em)",
            scale: "0.75",
            "pointer-events": "auto",
          },
        },
      "&:has(:disabled, [disabled])": { "> span": { opacity: "0%" } },
      "&:has(.input-xs, .textarea-xs) span": {
        "font-size": "0.6875rem",
        top: "calc(var(--size-field, 0.25rem) * 6 / 2)",
      },
      "&:has(.input-sm, .textarea-sm) span": {
        "font-size": "0.75rem",
        top: "calc(var(--size-field, 0.25rem) * 8 / 2)",
      },
      "&:has(.input-md, .textarea-md) span": {
        "font-size": "0.875rem",
        top: "calc(var(--size-field, 0.25rem) * 10 / 2)",
      },
      "&:has(.input-lg, .textarea-lg) span": {
        "font-size": "1.125rem",
        top: "calc(var(--size-field, 0.25rem) * 12 / 2)",
      },
      "&:has(.input-xl, .textarea-xl) span": {
        "font-size": "1.375rem",
        top: "calc(var(--size-field, 0.25rem) * 14 / 2)",
      },
    },
  },
  U = {
    ".diff": {
      position: "relative",
      display: "grid",
      width: "100%",
      overflow: "hidden",
      "webkit-user-select": "none",
      "user-select": "none",
      direction: "ltr",
      "container-type": "inline-size",
      "grid-template-columns": "auto 1fr",
      "&:focus, &:has(.diff-item-1:focus)": {
        "outline-style": "var(--tw-outline-style)",
        "outline-width": "2px",
        "outline-offset": "1px",
        "outline-color": "var(--color-base-content)",
      },
      "&:focus-visible": {
        "outline-style": "var(--tw-outline-style)",
        "outline-width": "2px",
        "outline-offset": "1px",
        "outline-color": "var(--color-base-content)",
        ".diff-resizer": { "min-width": "90cqi", "max-width": "90cqi" },
      },
      "&:has(.diff-item-2:focus-visible)": {
        "outline-style": "var(--tw-outline-style)",
        "outline-width": "2px",
        "outline-offset": "1px",
        ".diff-resizer": { "min-width": "10cqi", "max-width": "10cqi" },
      },
      "@supports (-webkit-overflow-scrolling: touch) and (overflow: -webkit-paged-x)":
        {
          "&:focus": {
            ".diff-resizer": { "min-width": "10cqi", "max-width": "10cqi" },
          },
          "&:has(.diff-item-1:focus)": {
            ".diff-resizer": { "min-width": "90cqi", "max-width": "90cqi" },
          },
        },
    },
    ".diff-resizer": {
      position: "relative",
      top: "calc(1/2 * 100%)",
      "z-index": 1,
      "grid-column-start": "1",
      "grid-row-start": "1",
      height: "calc(0.25rem * 2)",
      width: "50cqi",
      "max-width": "calc(100cqi - 1rem)",
      "min-width": "1rem",
      resize: "horizontal",
      overflow: "hidden",
      opacity: "0%",
      transform: "scaleY(3)",
      cursor: "ew-resize",
      "transform-origin": "100% 100%",
      translate: "0.35rem 0.35rem",
      "clip-path": "inset(calc(100% - 0.75rem) 0 0 calc(100% - 0.75rem))",
      transition: "min-width 0.3s ease-out, max-width 0.3s ease-out",
    },
    ".diff-item-2": {
      position: "relative",
      "grid-column-start": "1",
      "grid-row-start": "1",
      "&:after": {
        "pointer-events": "none",
        position: "absolute",
        top: "calc(1/2 * 100%)",
        right: "1px",
        bottom: "calc(0.25rem * 0)",
        "z-index": 2,
        width: "calc(0.25rem * 6)",
        height: "calc(0.25rem * 6)",
        "border-radius": "calc(infinity * 1px)",
        "background-color":
          "color-mix(in oklab, var(--color-base-100) 50%, transparent)",
        border: "2px solid var(--color-base-100)",
        content: '""',
        outline:
          "1px solid color-mix(in oklab, var(--color-base-content) 5%, #0000)",
        "outline-offset": "-3px",
        "backdrop-filter": "blur(8px)",
        "box-shadow": "0 1px 2px 0 oklch(0% 0 0 / 0.1)",
        translate: "50% -50%",
      },
      "> *": {
        "pointer-events": "none",
        position: "absolute",
        top: "calc(0.25rem * 0)",
        bottom: "calc(0.25rem * 0)",
        left: "calc(0.25rem * 0)",
        height: "100%",
        width: "100cqi",
        "max-width": "none",
        "object-fit": "cover",
        "object-position": "center",
      },
      "@supports (-webkit-overflow-scrolling: touch) and (overflow: -webkit-paged-x)":
        { "&:after": { content: "none" } },
    },
    ".diff-item-1": {
      position: "relative",
      "z-index": 1,
      "grid-column-start": "1",
      "grid-row-start": "1",
      overflow: "hidden",
      "border-right": "2px solid var(--color-base-100)",
      "> *": {
        "pointer-events": "none",
        position: "absolute",
        top: "calc(0.25rem * 0)",
        bottom: "calc(0.25rem * 0)",
        left: "calc(0.25rem * 0)",
        height: "100%",
        width: "100cqi",
        "max-width": "none",
        "object-fit": "cover",
        "object-position": "center",
      },
    },
  },
  O = {
    ".collapse:not(td, tr, colgroup)": { visibility: "visible" },
    ".collapse": {
      position: "relative",
      display: "grid",
      overflow: "hidden",
      "border-radius": "var(--rounded-box, 1rem)",
      width: "100%",
      "grid-template-rows": "max-content 0fr",
      transition: "grid-template-rows 0.2s",
      '> input:is([type="checkbox"], [type="radio"])': {
        "grid-column-start": "1",
        "grid-row-start": "1",
        appearance: "none",
        opacity: 0,
        "z-index": 1,
        width: "100%",
        padding: "1rem",
        "padding-inline-end": "3rem",
        "min-height": "3.75rem",
        transition: "background-color 0.2s ease-out",
      },
      '&:is([open], :focus:not(.collapse-close)),\n  &:not(.collapse-close):has(> input:is([type="checkbox"], [type="radio"]):checked)':
        { "grid-template-rows": "max-content 1fr" },
      '&:is([open], :focus:not(.collapse-close)) > .collapse-content,\n  &:not(.collapse-close)\n    > :where(input:is([type="checkbox"], [type="radio"]):checked ~ .collapse-content)':
        { visibility: "visible", "min-height": "fit-content" },
      '&:focus-visible,\n  &:has(> input:is([type="checkbox"], [type="radio"]):focus-visible)':
        {
          "outline-color": "var(--color-base-content)",
          "outline-style": "solid",
          "outline-width": "2px",
          "outline-offset": "2px",
        },
      "&:not(.collapse-close)": {
        '> input[type="checkbox"],\n    > input[type="radio"]:not(:checked),\n    > .collapse-title':
          { cursor: "pointer" },
      },
      "&:focus:not(.collapse-close, .collapse[open]) > .collapse-title": {
        cursor: "unset",
      },
      '&:is([open], :focus:not(.collapse-close)) > :where(.collapse-content),\n  &:not(.collapse-close)\n    > :where(input:is([type="checkbox"], [type="radio"]):checked ~ .collapse-content)':
        {
          "padding-bottom": "1rem",
          transition:
            "padding 0.2s ease-out,\n      background-color 0.2s ease-out",
        },
      "&:is([open])": {
        "&.collapse-arrow": {
          "> .collapse-title:after": {
            transform: "translateY(-50%) rotate(225deg)",
          },
        },
      },
      "&.collapse-open": {
        "&.collapse-arrow": {
          "> .collapse-title:after": {
            transform: "translateY(-50%) rotate(225deg)",
          },
        },
        "&.collapse-plus": { "> .collapse-title:after": { content: '"−"' } },
      },
      "&.collapse-arrow:focus:not(.collapse-close)": {
        "> .collapse-title:after": {
          transform: "translateY(-50%) rotate(225deg)",
        },
      },
      "&.collapse-arrow:not(.collapse-close)": {
        '> input:is([type="checkbox"], [type="radio"]):checked ~ .collapse-title:after':
          { transform: "translateY(-50%) rotate(225deg)" },
      },
      "&[open]": {
        "&.collapse-plus": { "> .collapse-title:after": { content: '"−"' } },
      },
      "&.collapse-plus:focus:not(.collapse-close)": {
        "> .collapse-title:after": { content: '"−"' },
      },
      "&.collapse-plus:not(.collapse-close)": {
        '> input:is([type="checkbox"], [type="radio"]):checked ~ .collapse-title:after':
          { content: '"−"' },
      },
    },
    ".collapse-title,\n.collapse-content": {
      "grid-column-start": "1",
      "grid-row-start": "1",
    },
    ".collapse-content": {
      visibility: "hidden",
      "grid-column-start": "1",
      "grid-row-start": "2",
      "min-height": "0",
      transition: [
        "visibility 0.2s",
        "padding 0.2s ease-out,\n    background-color 0.2s ease-out",
      ],
      "padding-left": "1rem",
      "padding-right": "1rem",
      cursor: "unset",
    },
    ".collapse:is(details)": {
      width: "100%",
      "& summary": {
        position: "relative",
        display: "block",
        "&::-webkit-details-marker": { display: "none" },
      },
    },
    ".collapse:is(details) summary": { outline: "none" },
    ".collapse-arrow": {
      "> .collapse-title:after": {
        position: "absolute",
        display: "block",
        height: "0.5rem",
        width: "0.5rem",
        transform: "translateY(-100%) rotate(45deg)",
        "transition-property": "all",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transition-duration": "0.2s",
        top: "1.9rem",
        "inset-inline-end": "1.4rem",
        content: '""',
        "transform-origin": "75% 75%",
        "box-shadow": "2px 2px",
        "pointer-events": "none",
      },
    },
    ".collapse-plus": {
      "> .collapse-title:after": {
        position: "absolute",
        display: "block",
        height: "0.5rem",
        width: "0.5rem",
        "transition-property": "all",
        "transition-duration": "300ms",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        top: "0.9rem",
        "inset-inline-end": "1.4rem",
        content: '"+"',
        "pointer-events": "none",
      },
    },
    ".collapse-title": {
      position: "relative",
      width: "100%",
      padding: "1rem",
      "padding-inline-end": "3rem",
      "min-height": "3.75rem",
      transition: "background-color 0.2s ease-out",
    },
    ".collapse-open": {
      "grid-template-rows": "max-content 1fr",
      "> .collapse-content": {
        visibility: "visible",
        "min-height": "fit-content",
        "padding-bottom": "1rem",
        transition:
          "padding 0.2sease-out,\n      background-color 0.2sease-out",
      },
    },
  },
  F = {
    ".status": {
      display: "inline-block",
      "aspect-ratio": "1 / 1",
      width: "calc(0.25rem * 2)",
      height: "calc(0.25rem * 2)",
      "border-radius": "var(--radius-selector)",
      "background-color":
        "color-mix(in oklab, var(--color-base-content) 20%, transparent)",
      "background-position": "center",
      "background-repeat": "no-repeat",
      "vertical-align": "middle",
      color: "color-mix(in oklab, var(--color-black) 30%, transparent)",
      "background-image":
        "radial-gradient( circle at 35% 30%, oklch(1 0 0 / calc(var(--depth) * 0.5)), #0000 )",
      "box-shadow":
        "0 2px 3px -1px color-mix(in oklab, currentColor calc(var(--depth) * 100%), #0000)",
    },
    ".status-primary": {
      "background-color": "var(--color-primary)",
      color: "var(--color-primary)",
    },
    ".status-secondary": {
      "background-color": "var(--color-secondary)",
      color: "var(--color-secondary)",
    },
    ".status-accent": {
      "background-color": "var(--color-accent)",
      color: "var(--color-accent)",
    },
    ".status-neutral": {
      "background-color": "var(--color-neutral)",
      color: "var(--color-neutral)",
    },
    ".status-info": {
      "background-color": "var(--color-info)",
      color: "var(--color-info)",
    },
    ".status-success": {
      "background-color": "var(--color-success)",
      color: "var(--color-success)",
    },
    ".status-warning": {
      "background-color": "var(--color-warning)",
      color: "var(--color-warning)",
    },
    ".status-error": {
      "background-color": "var(--color-error)",
      color: "var(--color-error)",
    },
    ".status-xs": {
      width: "calc(0.25rem * 0.5)",
      height: "calc(0.25rem * 0.5)",
    },
    ".status-sm": { width: "calc(0.25rem * 1)", height: "calc(0.25rem * 1)" },
    ".status-md": { width: "calc(0.25rem * 2)", height: "calc(0.25rem * 2)" },
    ".status-lg": { width: "calc(0.25rem * 3)", height: "calc(0.25rem * 3)" },
    ".status-xl": { width: "calc(0.25rem * 4)", height: "calc(0.25rem * 4)" },
  },
  H = {
    ".tabs": {
      display: "flex",
      "flex-wrap": "wrap",
      "--tabs-height": "auto",
      "--tabs-direction": "row",
      height: "var(--tabs-height)",
      "flex-direction": "var(--tabs-direction)",
    },
    ".tab": {
      position: "relative",
      display: "inline-flex",
      cursor: "pointer",
      appearance: "none",
      "flex-wrap": "wrap",
      "align-items": "center",
      "justify-content": "center",
      "text-align": "center",
      "webkit-user-select": "none",
      "user-select": "none",
      "&:hover": {
        "@media (hover: hover)": { color: "var(--color-base-content)" },
      },
      "--tab-p": "1rem",
      "--tab-bg": "var(--color-base-100)",
      "--tab-border-color": "var(--color-base-300)",
      "--tab-radius-ss": "0",
      "--tab-radius-se": "0",
      "--tab-radius-es": "0",
      "--tab-radius-ee": "0",
      "--tab-order": "0",
      "--tab-radius-min": "calc(0.75rem - var(--border))",
      "border-color": "#0000",
      order: "var(--tab-order)",
      height: "calc(var(--size-field, 0.25rem) * 10)",
      "font-size": "0.875rem",
      "padding-inline-start": "var(--tab-p)",
      "padding-inline-end": "var(--tab-p)",
      '&:is(input[type="radio"])': {
        "min-width": "fit-content",
        "&:after": { content: "attr(aria-label)" },
      },
      "&:is(label)": {
        position: "relative",
        input: {
          position: "absolute",
          inset: "calc(0.25rem * 0)",
          cursor: "pointer",
          appearance: "none",
          opacity: "0%",
        },
      },
      '&:checked, &:is(label:has(:checked)), &:is(.tab-active, [aria-selected="true"])':
        { "& + .tab-content": { display: "block", height: "100%" } },
      '&:not(:checked, label:has(:checked), :hover, .tab-active, [aria-selected="true"])':
        {
          color:
            "color-mix(in oklab, var(--color-base-content) 50%, transparent)",
        },
      "&:not(input):empty": { "flex-grow": 1, cursor: "default" },
      "&:focus": {
        "outline-style": "none",
        "@media (forced-colors: active)": {
          outline: "2px solid transparent",
          "outline-offset": "2px",
        },
      },
      "&:focus-visible, &:is(label:has(:checked:focus-visible))": {
        outline: "2px solid currentColor",
        "outline-offset": "-5px",
      },
      "&[disabled]": { "pointer-events": "none", opacity: "40%" },
    },
    ".tab-disabled": { "pointer-events": "none", opacity: "40%" },
    ".tabs-border": {
      ".tab": {
        "--tab-border-color": "#0000 #0000 var(--tab-border-color) #0000",
        position: "relative",
        "border-radius": "var(--radius-field)",
        "&:before": {
          "--tw-content": '""',
          content: "var(--tw-content)",
          "background-color": "var(--tab-border-color)",
          transition: "background-color 0.2s ease",
          width: "80%",
          height: "3px",
          "border-radius": "var(--radius-field)",
          bottom: "0",
          left: "10%",
          position: "absolute",
        },
        '&:is(.tab-active, [aria-selected="true"]):not(.tab-disabled, [disabled]), &:is(input:checked), &:is(label:has(:checked))':
          {
            "&:before": {
              "--tab-border-color": "currentColor",
              "border-top": "3px solid",
            },
          },
      },
    },
    ".tabs-lift": {
      "--tabs-height": "auto",
      "--tabs-direction": "row",
      "> .tab": {
        "--tab-border": "0 0 var(--border) 0",
        "--tab-radius-ss": "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-radius-se": "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-radius-es": "0",
        "--tab-radius-ee": "0",
        "--tab-paddings": "var(--border) var(--tab-p) 0 var(--tab-p)",
        "--tab-border-colors": "#0000 #0000 var(--tab-border-color) #0000",
        "--tab-corner-width":
          "calc(100% + min(var(--radius-field), var(--tab-radius-min)) * 2)",
        "--tab-corner-height":
          "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-corner-position": "top left, top right",
        "border-width": "var(--tab-border)",
        "border-start-start-radius": "var(--tab-radius-ss)",
        "border-start-end-radius": "var(--tab-radius-se)",
        "border-end-start-radius": "var(--tab-radius-es)",
        "border-end-end-radius": "var(--tab-radius-ee)",
        padding: "var(--tab-paddings)",
        "border-color": "var(--tab-border-colors)",
        '&:is(.tab-active, [aria-selected="true"]):not(.tab-disabled, [disabled]), &:is(input:checked, label:has(:checked))':
          {
            "--tab-border": "var(--border) var(--border) 0 var(--border)",
            "--tab-border-colors":
              "var(--tab-border-color) var(--tab-border-color) #0000\n        var(--tab-border-color)",
            "--tab-paddings":
              "0 calc(var(--tab-p) - var(--border)) var(--border)\n        calc(var(--tab-p) - var(--border))",
            "--tab-inset": "auto auto 0 auto",
            "--tab-grad": "calc(69% - var(--border))",
            "--radius-start":
              "radial-gradient(\n        circle at top left,\n        #0000 var(--tab-grad),\n        var(--tab-border-color) calc(var(--tab-grad) + 0.25px),\n        var(--tab-border-color) calc(var(--tab-grad) + var(--border)),\n        var(--tab-bg) calc(var(--tab-grad) + var(--border) + 0.25px)\n      )",
            "--radius-end":
              "radial-gradient(\n        circle at top right,\n        #0000 var(--tab-grad),\n        var(--tab-border-color) calc(var(--tab-grad) + 0.25px),\n        var(--tab-border-color) calc(var(--tab-grad) + var(--border)),\n        var(--tab-bg) calc(var(--tab-grad) + var(--border) + 0.25px)\n      )",
            "background-color": "var(--tab-bg)",
            "&:before": {
              "z-index": 1,
              content: '""',
              display: "block",
              position: "absolute",
              width: "var(--tab-corner-width)",
              height: "var(--tab-corner-height)",
              "background-position": "var(--tab-corner-position)",
              "background-image": "var(--radius-start), var(--radius-end)",
              "background-size":
                "min(var(--radius-field), var(--tab-radius-min)) min(var(--radius-field), var(--tab-radius-min))",
              "background-repeat": "no-repeat",
              inset: "var(--tab-inset)",
            },
            "&:first-child:before": { "--radius-start": "none" },
            '[dir="rtl"] &:first-child:before': {
              transform: "rotateY(180deg)",
            },
            "&:last-child:before": { "--radius-end": "none" },
            '[dir="rtl"] &:last-child:before': { transform: "rotateY(180deg)" },
          },
      },
      "&:has(.tab-content)": {
        "> .tab:first-child": {
          '&:not(.tab-active, [aria-selected="true"])': {
            "--tab-border-colors":
              "var(--tab-border-color) var(--tab-border-color) #0000\n          var(--tab-border-color)",
          },
        },
      },
      ".tab-content": {
        "--tabcontent-margin": "calc(-1 * var(--border)) 0 0 0",
        "--tabcontent-radius-ss": "0",
        "--tabcontent-radius-se": "var(--radius-box)",
        "--tabcontent-radius-es": "var(--radius-box)",
        "--tabcontent-radius-ee": "var(--radius-box)",
      },
      ':checked, label:has(:checked), :is(.tab-active, [aria-selected="true"])':
        {
          "& + .tab-content": {
            "&:nth-child(1), &:nth-child(n + 3)": {
              "--tabcontent-radius-ss": "var(--radius-box)",
            },
          },
        },
    },
    ".tabs-top": {
      "--tabs-height": "auto",
      "--tabs-direction": "row",
      ".tab": {
        "--tab-order": "0",
        "--tab-border": "0 0 var(--border) 0",
        "--tab-radius-ss": "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-radius-se": "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-radius-es": "0",
        "--tab-radius-ee": "0",
        "--tab-paddings": "var(--border) var(--tab-p) 0 var(--tab-p)",
        "--tab-border-colors": "#0000 #0000 var(--tab-border-color) #0000",
        "--tab-corner-width":
          "calc(100% + min(var(--radius-field), var(--tab-radius-min)) * 2)",
        "--tab-corner-height":
          "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-corner-position": "top left, top right",
        '&:is(.tab-active, [aria-selected="true"]):not(.tab-disabled, [disabled]), &:is(input:checked), &:is(label:has(:checked))':
          {
            "--tab-border": "var(--border) var(--border) 0 var(--border)",
            "--tab-border-colors":
              "var(--tab-border-color) var(--tab-border-color) #0000\n        var(--tab-border-color)",
            "--tab-paddings":
              "0 calc(var(--tab-p) - var(--border)) var(--border)\n        calc(var(--tab-p) - var(--border))",
            "--tab-inset": "auto auto 0 auto",
            "--radius-start":
              "radial-gradient(\n        circle at top left,\n        #0000 var(--tab-grad),\n        var(--tab-border-color) calc(var(--tab-grad) + 0.25px),\n        var(--tab-border-color) calc(var(--tab-grad) + var(--border)),\n        var(--tab-bg) calc(var(--tab-grad) + var(--border) + 0.25px)\n      )",
            "--radius-end":
              "radial-gradient(\n        circle at top right,\n        #0000 var(--tab-grad),\n        var(--tab-border-color) calc(var(--tab-grad) + 0.25px),\n        var(--tab-border-color) calc(var(--tab-grad) + var(--border)),\n        var(--tab-bg) calc(var(--tab-grad) + var(--border) + 0.25px)\n      )",
          },
      },
      "&:has(.tab-content)": {
        "> .tab:first-child": {
          '&:not(.tab-active, [aria-selected="true"])': {
            "--tab-border-colors":
              "var(--tab-border-color) var(--tab-border-color) #0000\n          var(--tab-border-color)",
          },
        },
      },
      ".tab-content": {
        "--tabcontent-order": "1",
        "--tabcontent-margin": "calc(-1 * var(--border)) 0 0 0",
        "--tabcontent-radius-ss": "0",
        "--tabcontent-radius-se": "var(--radius-box)",
        "--tabcontent-radius-es": "var(--radius-box)",
        "--tabcontent-radius-ee": "var(--radius-box)",
      },
      ':checked, label:has(:checked), :is(.tab-active, [aria-selected="true"])':
        {
          "& + .tab-content": {
            "&:nth-child(1), &:nth-child(n + 3)": {
              "--tabcontent-radius-ss": "var(--radius-box)",
            },
          },
        },
    },
    ".tabs-bottom": {
      "--tabs-height": "auto",
      "--tabs-direction": "row",
      ".tab": {
        "--tab-order": "1",
        "--tab-border": "var(--border) 0 0 0",
        "--tab-radius-ss": "0",
        "--tab-radius-se": "0",
        "--tab-radius-es": "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-radius-ee": "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-border-colors": "var(--tab-border-color) #0000 #0000 #0000",
        "--tab-paddings": "0 var(--tab-p) var(--border) var(--tab-p)",
        "--tab-corner-width":
          "calc(100% + min(var(--radius-field), var(--tab-radius-min)) * 2)",
        "--tab-corner-height":
          "min(var(--radius-field), var(--tab-radius-min))",
        "--tab-corner-position": "top left, top right",
        '&:is(.tab-active, [aria-selected="true"]):not(.tab-disabled, [disabled]), &:is(input:checked), &:is(label:has(:checked))':
          {
            "--tab-border": "0 var(--border) var(--border) var(--border)",
            "--tab-border-colors":
              "#0000 var(--tab-border-color) var(--tab-border-color)\n        var(--tab-border-color)",
            "--tab-paddings":
              "var(--border) calc(var(--tab-p) - var(--border)) 0\n        calc(var(--tab-p) - var(--border))",
            "--tab-inset": "0 auto auto auto",
            "--radius-start":
              "radial-gradient(\n        circle at bottom left,\n        #0000 var(--tab-grad),\n        var(--tab-border-color) calc(var(--tab-grad) + 0.25px),\n        var(--tab-border-color) calc(var(--tab-grad) + var(--border)),\n        var(--tab-bg) calc(var(--tab-grad) + var(--border) + 0.25px)\n      )",
            "--radius-end":
              "radial-gradient(\n        circle at bottom right,\n        #0000 var(--tab-grad),\n        var(--tab-border-color) calc(var(--tab-grad) + 0.25px),\n        var(--tab-border-color) calc(var(--tab-grad) + var(--border)),\n        var(--tab-bg) calc(var(--tab-grad) + var(--border) + 0.25px)\n      )",
          },
      },
      "&:has(.tab-content)": {
        "> .tab:first-child": {
          '&:not(.tab-active, [aria-selected="true"])': {
            "--tab-border-colors":
              "#0000 var(--tab-border-color) var(--tab-border-color)\n          var(--tab-border-color)",
          },
        },
      },
      ".tab-content": {
        "--tabcontent-order": "0",
        "--tabcontent-margin": "0 0 calc(-1 * var(--border)) 0",
        "--tabcontent-radius-ss": "var(--radius-box)",
        "--tabcontent-radius-se": "var(--radius-box)",
        "--tabcontent-radius-es": "0",
        "--tabcontent-radius-ee": "var(--radius-box)",
      },
      ':checked, :is(label:has(:checked)), :is(.tab-active, [aria-selected="true"])':
        {
          "& + .tab-content:not(:nth-child(2))": {
            "--tabcontent-radius-es": "var(--radius-box)",
          },
        },
    },
    ".tabs-box": {
      "background-color": "var(--color-base-200)",
      padding: "calc(0.25rem * 1)",
      "border-radius":
        "calc( var(--radius-field) + min(0.25rem, calc(var(--radius-field) + var(--radius-field) + var(--radius-field))) )",
      "box-shadow":
        "0 -0.5px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 0.5px oklch(0% 0 0 / calc(var(--depth) * 0.05)) inset",
      ".tab": {
        "border-radius": "var(--radius-field)",
        "border-style": "none",
        "&:focus-visible, &:is(label:has(:checked:focus-visible))": {
          "outline-offset": "2px",
        },
      },
      ':is(.tab-active, [aria-selected="true"]):not(.tab-disabled, [disabled]), :is(input:checked), :is(label:has(:checked))':
        {
          "background-color": "var(--tab-bg, var(--color-base-100))",
          "box-shadow":
            "0 1px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 1px 1px -1px color-mix(in oklab, var(--color-neutral) calc(var(--depth) * 50%), #0000), 0 1px 6px -4px color-mix(in oklab, var(--color-neutral) calc(var(--depth) * 100%), #0000)",
          "@media (forced-colors: active)": { border: "1px solid" },
        },
    },
    ".tab-content": {
      order: [1, "var(--tabcontent-order)"],
      display: "none",
      "border-color": "transparent",
      "--tabcontent-radius-ss": "0",
      "--tabcontent-radius-se": "0",
      "--tabcontent-radius-es": "0",
      "--tabcontent-radius-ee": "0",
      "--tabcontent-order": "1",
      width: "100%",
      margin: "var(--tabcontent-margin)",
      "border-width": "var(--border)",
      "border-start-start-radius": "var(--tabcontent-radius-ss)",
      "border-start-end-radius": "var(--tabcontent-radius-se)",
      "border-end-start-radius": "var(--tabcontent-radius-es)",
      "border-end-end-radius": "var(--tabcontent-radius-ee)",
    },
    ".tabs-xs": {
      ":where(.tab)": {
        height: "calc(var(--size-field, 0.25rem) * 6)",
        "font-size": "0.75rem",
        "--tab-p": "0.375rem",
        "--tab-radius-min": "calc(0.5rem - var(--border))",
      },
    },
    ".tabs-sm": {
      ":where(.tab)": {
        height: "calc(var(--size-field, 0.25rem) * 8)",
        "font-size": "0.875rem",
        "--tab-p": "0.5rem",
        "--tab-radius-min": "calc(0.5rem - var(--border))",
      },
    },
    ".tabs-md": {
      ":where(.tab)": {
        height: "calc(var(--size-field, 0.25rem) * 10)",
        "font-size": "0.875rem",
        "--tab-p": "0.75rem",
        "--tab-radius-min": "calc(0.75rem - var(--border))",
      },
    },
    ".tabs-lg": {
      ":where(.tab)": {
        height: "calc(var(--size-field, 0.25rem) * 12)",
        "font-size": "1.125rem",
        "--tab-p": "1rem",
        "--tab-radius-min": "calc(1.5rem - var(--border))",
      },
    },
    ".tabs-xl": {
      ":where(.tab)": {
        height: "calc(var(--size-field, 0.25rem) * 14)",
        "font-size": "1.125rem",
        "--tab-p": "1.25rem",
        "--tab-radius-min": "calc(2rem - var(--border))",
      },
    },
  },
  V = {
    ".carousel": {
      display: "inline-flex",
      "overflow-x": "scroll",
      "scroll-snap-type": "x mandatory",
      "scroll-behavior": "smooth",
      "scrollbar-width": "none",
      "&::-webkit-scrollbar": { display: "none" },
    },
    ".carousel-vertical": {
      "flex-direction": "column",
      "overflow-y": "scroll",
      "scroll-snap-type": "y mandatory",
    },
    ".carousel-horizontal": {
      "flex-direction": "row",
      "overflow-x": "scroll",
      "scroll-snap-type": "x mandatory",
    },
    ".carousel-item": {
      "box-sizing": "content-box",
      display: "flex",
      flex: "none",
      "scroll-snap-align": "start",
    },
    ".carousel-start": { ".carousel-item": { "scroll-snap-align": "start" } },
    ".carousel-center": { ".carousel-item": { "scroll-snap-align": "center" } },
    ".carousel-end": { ".carousel-item": { "scroll-snap-align": "end" } },
  },
  R = {
    ".toggle": {
      border: "var(--border) solid currentColor",
      color: "var(--input-color)",
      position: "relative",
      display: "inline-grid",
      "flex-shrink": 0,
      cursor: "pointer",
      appearance: "none",
      "place-content": "center",
      "vertical-align": "middle",
      "webkit-user-select": "none",
      "user-select": "none",
      "grid-template-columns": "0fr 1fr 1fr",
      "--radius-selector-max":
        "calc(\n    var(--radius-selector) + var(--radius-selector) + var(--radius-selector)\n  )",
      "border-radius":
        "calc( var(--radius-selector) + min(var(--toggle-p), var(--radius-selector-max)) + min(var(--border), var(--radius-selector-max)) )",
      padding: "var(--toggle-p)",
      "box-shadow":
        "0 1px color-mix(in oklab, currentColor calc(var(--depth) * 10%), #0000) inset",
      transition: "color 0.3s, grid-template-columns 0.2s",
      "--input-color":
        "color-mix(in oklab, var(--color-base-content) 50%, #0000)",
      "--toggle-p": "0.1875rem",
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      width: "calc((var(--size) * 2) - (var(--border) + var(--toggle-p)) * 2)",
      height: "var(--size)",
      "> *": {
        "z-index": 1,
        "grid-column": "span 1 / span 1",
        "grid-column-start": "2",
        "grid-row-start": "1",
        height: "100%",
        cursor: "pointer",
        appearance: "none",
        "background-color": "transparent",
        padding: "calc(0.25rem * 0.5)",
        transition: "opacity 0.2s, rotate 0.4s",
        border: "none",
        "&:focus": {
          "outline-style": "none",
          "@media (forced-colors: active)": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
          },
        },
        "&:nth-child(2)": { color: "var(--color-base-100)", rotate: "0deg" },
        "&:nth-child(3)": {
          color: "var(--color-base-100)",
          opacity: "0%",
          rotate: "-15deg",
        },
      },
      "&:has(:checked)": {
        "> :nth-child(2)": { opacity: "0%", rotate: "15deg" },
        "> :nth-child(3)": { opacity: "100%", rotate: "0deg" },
      },
      "&:before": {
        position: "relative",
        "inset-inline-start": "calc(0.25rem * 0)",
        "grid-column-start": "2",
        "grid-row-start": "1",
        "aspect-ratio": "1 / 1",
        height: "100%",
        "border-radius": "var(--radius-selector)",
        "background-color": "currentColor",
        "@media print": [
          { outline: ".25rem solid" },
          { "outline-offset": "-1rem" },
        ],
        translate: "0",
        "--tw-content": '""',
        content: "var(--tw-content)",
        transition:
          "background-color 0.1s, translate 0.2s, inset-inline-start 0.2s",
        "box-shadow":
          "0 -1px oklch(0% 0 0 / calc(var(--depth) * 0.1)) inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 1px color-mix(in oklab, currentColor calc(var(--depth) * 10%), #0000)",
        "background-size": "auto, calc(var(--noise) * 100%)",
        "background-image": "none, var(--fx-noise)",
        "@media (forced-colors: active)": {
          "outline-style": "var(--tw-outline-style)",
          "outline-width": "1px",
          "outline-offset": "calc(1px * -1)",
        },
      },
      "&:focus-visible, &:has(:focus-visible)": {
        outline: "2px solid currentColor",
        "outline-offset": "2px",
      },
      '&:checked, &[aria-checked="true"], &:has(> input:checked)': {
        "grid-template-columns": "1fr 1fr 0fr",
        "background-color": "var(--color-base-100)",
        "--input-color": "var(--color-base-content)",
        "&:before": {
          "background-color": "currentColor",
          "@starting-style": { opacity: 0 },
        },
      },
      "&:indeterminate": { "grid-template-columns": "0.5fr 1fr 0.5fr" },
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "30%",
        "&:before": {
          "background-color": "transparent",
          border: "var(--border) solid currentColor",
        },
      },
    },
    ".toggle-primary": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-primary)",
      },
    },
    ".toggle-secondary": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-secondary)",
      },
    },
    ".toggle-accent": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-accent)",
      },
    },
    ".toggle-neutral": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-neutral)",
      },
    },
    ".toggle-success": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-success)",
      },
    },
    ".toggle-warning": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-warning)",
      },
    },
    ".toggle-info": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-info)",
      },
    },
    ".toggle-error": {
      '&:checked, &[aria-checked="true"]': {
        "--input-color": "var(--color-error)",
      },
    },
    ".toggle-xs": {
      '&:is([type="checkbox"]), &:has([type="checkbox"])': {
        "--toggle-p": "0.0625rem",
        "--size": "calc(var(--size-selector, 0.25rem) * 4)",
      },
    },
    ".toggle-sm": {
      '&:is([type="checkbox"]), &:has([type="checkbox"])': {
        "--toggle-p": "0.125rem",
        "--size": "calc(var(--size-selector, 0.25rem) * 5)",
      },
    },
    ".toggle-md": {
      '&:is([type="checkbox"]), &:has([type="checkbox"])': {
        "--toggle-p": "0.1875rem",
        "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      },
    },
    ".toggle-lg": {
      '&:is([type="checkbox"]), &:has([type="checkbox"])': {
        "--toggle-p": "0.25rem",
        "--size": "calc(var(--size-selector, 0.25rem) * 7)",
      },
    },
    ".toggle-xl": {
      '&:is([type="checkbox"]), &:has([type="checkbox"])': {
        "--toggle-p": "0.3125rem",
        "--size": "calc(var(--size-selector, 0.25rem) * 8)",
      },
    },
  },
  G = {
    ".mask": {
      display: "inline-block",
      "vertical-align": "middle",
      "mask-size": "contain",
      "mask-repeat": "no-repeat",
      "mask-position": "center",
    },
    ".mask-half-1": {
      "mask-size": "200%",
      "mask-position": ["left", "left"],
      '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)': {
        "mask-position": "right",
      },
    },
    ".mask-half-2": {
      "mask-size": "200%",
      "mask-position": ["right", "right"],
      '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)': {
        "mask-position": "left",
      },
    },
    ".mask-squircle": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e\")",
    },
    ".mask-decagon": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='192' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 58.779 19.098 36.327 50v61.804l-36.327 50L96 200l-58.779-19.098-36.327-50V69.098l36.327-50z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-diamond": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m100 0 100 100-100 100L0 100z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-heart": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")",
    },
    ".mask-hexagon": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")",
    },
    ".mask-hexagon-2": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")",
    },
    ".mask-circle": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-pentagon": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='192' height='181' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 95.106 69.098-36.327 111.804H37.22L.894 69.098z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-star": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 137.263-58.779 42.024 22.163-68.389L.894 68.481l72.476-.243L96 0l22.63 68.238 72.476.243-58.49 42.417 22.163 68.389z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-star-2": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-triangle": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='174' height='149' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 148.476-86.603.185L43.86 74.423 87 0l43.14 74.423 43.463 74.238z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-triangle-2": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='174' height='150' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 .738 86.603-.184-43.463 74.238L87 149.214 43.86 74.792.397.554z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-triangle-3": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m149.369 87.107.185 86.603-74.239-43.463L.893 87.107l74.422-43.14L149.554.505z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
    ".mask-triangle-4": {
      "mask-image":
        "url(\"data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.631 87.107.446.505l74.239 43.462 74.422 43.14-74.422 43.14L.446 173.71z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
    },
  },
  I = {
    ".textarea": {
      border: "var(--border) solid #0000",
      "min-height": "calc(0.25rem * 20)",
      "flex-shrink": 1,
      appearance: "none",
      "border-radius": "var(--radius-field)",
      "background-color": "var(--color-base-100)",
      "padding-block": "calc(0.25rem * 2)",
      "vertical-align": "middle",
      width: "clamp(3rem, 20rem, 100%)",
      "padding-inline-start": "0.75rem",
      "padding-inline-end": "0.75rem",
      "font-size": "0.875rem",
      "border-color": "var(--input-color)",
      "box-shadow":
        "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000) inset, 0 -1px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset",
      "--input-color":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      textarea: {
        appearance: "none",
        "background-color": "transparent",
        border: "none",
        "&:focus, &:focus-within": {
          "outline-style": "none",
          "@media (forced-colors: active)": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
          },
        },
      },
      "&:focus, &:focus-within": {
        "--input-color": "var(--color-base-content)",
        "box-shadow":
          "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000)",
        outline: "2px solid var(--input-color)",
        "outline-offset": "2px",
        isolation: "isolate",
      },
      "&:has(> textarea[disabled]), &:is(:disabled, [disabled])": {
        cursor: "not-allowed",
        "border-color": "var(--color-base-200)",
        "background-color": "var(--color-base-200)",
        color:
          "color-mix(in oklab, var(--color-base-content) 40%, transparent)",
        "&::placeholder": {
          color:
            "color-mix(in oklab, var(--color-base-content) 20%, transparent)",
        },
        "box-shadow": "none",
      },
      "&:has(> textarea[disabled]) > textarea[disabled]": {
        cursor: "not-allowed",
      },
    },
    ".textarea-ghost": {
      "background-color": "transparent",
      "box-shadow": "none",
      "border-color": "#0000",
      "&:focus, &:focus-within": {
        "background-color": "var(--color-base-100)",
        color: "var(--color-base-content)",
        "border-color": "#0000",
        "box-shadow": "none",
      },
    },
    ".textarea-neutral": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-neutral)" },
    },
    ".textarea-primary": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-primary)" },
    },
    ".textarea-secondary": {
      "&, &:focus, &:focus-within": {
        "--input-color": "var(--color-secondary)",
      },
    },
    ".textarea-accent": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-accent)" },
    },
    ".textarea-info": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-info)" },
    },
    ".textarea-success": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-success)" },
    },
    ".textarea-warning": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-warning)" },
    },
    ".textarea-error": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-error)" },
    },
    ".textarea-xs": { "font-size": "0.6875rem" },
    ".textarea-sm": { "font-size": "0.75rem" },
    ".textarea-md": { "font-size": "0.875rem" },
    ".textarea-lg": { "font-size": "1.125rem" },
    ".textarea-xl": { "font-size": "1.375rem" },
  },
  K = {
    ".btn": {
      display: "inline-flex",
      "flex-shrink": 0,
      cursor: "pointer",
      "flex-wrap": "nowrap",
      "align-items": "center",
      "justify-content": "center",
      gap: "calc(0.25rem * 1.5)",
      "text-align": "center",
      "vertical-align": "middle",
      "text-decoration-line": "none",
      "outline-offset": "2px",
      "webkit-user-select": "none",
      "user-select": "none",
      "padding-inline": "var(--btn-p)",
      color: "var(--btn-fg)",
      height: "var(--size)",
      "font-size": "0.875rem",
      "font-weight": 600,
      "outline-color": "var(--btn-color, var(--color-base-content))",
      "transition-property":
        "color, background-color, border-color, box-shadow",
      "transition-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
      "transition-duration": "0.2s",
      "border-start-start-radius": "var(--join-ss, var(--radius-field))",
      "border-start-end-radius": "var(--join-se, var(--radius-field))",
      "border-end-start-radius": "var(--join-es, var(--radius-field))",
      "border-end-end-radius": "var(--join-ee, var(--radius-field))",
      "background-color": "var(--btn-bg)",
      "background-size": "auto, calc(var(--noise) * 100%)",
      "background-image": "none, var(--btn-noise)",
      "border-width": "var(--border)",
      "border-style": "solid",
      "border-color": "var(--btn-border)",
      "text-shadow": "0 0.5px oklch(100% 0 0 / calc(var(--depth) * 0.15))",
      "box-shadow":
        "0 0.5px 0 0.5px oklch(100% 0 0 / calc(var(--depth) * 6%)) inset, var(--btn-shadow)",
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      "--btn-bg": "var(--btn-color, var(--color-base-200))",
      "--btn-fg": "var(--color-base-content)",
      "--btn-p": "1rem",
      "--btn-border":
        "color-mix(in oklab, var(--btn-bg), #000 calc(var(--depth) * 5%))",
      "--btn-shadow":
        "0 3px 2px -2px color-mix(in oklab, var(--btn-bg) calc(var(--depth) * 30%), #0000),\n    0 4px 3px -2px color-mix(in oklab, var(--btn-bg) calc(var(--depth) * 30%), #0000)",
      "--btn-noise": "var(--fx-noise)",
      "@media (hover: hover)": {
        "&:hover": {
          "--btn-bg":
            "color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 7%)",
        },
      },
      "&.btn-active": {
        "--btn-bg":
          "color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 7%)",
        "--btn-shadow": "0 0 0 0 oklch(0% 0 0/0), 0 0 0 0 oklch(0% 0 0/0)",
        isolation: "isolate",
      },
      "&:focus-visible": { "outline-width": "2px", "outline-style": "solid" },
      "&:active:not(.btn-active)": {
        translate: "0 0.5px",
        "--btn-bg":
          "color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 5%)",
        "--btn-border":
          "color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 7%)",
        "--btn-shadow": "0 0 0 0 oklch(0% 0 0/0), 0 0 0 0 oklch(0% 0 0/0)",
      },
      "&:is(:disabled, [disabled], .btn-disabled)": {
        "&:not(.btn-link, .btn-ghost)": {
          "background-color":
            "color-mix(in oklab, var(--color-base-content) 10%, transparent)",
          "box-shadow": "none",
        },
        "pointer-events": "none",
        "--btn-border": "#0000",
        "--btn-noise": "none",
        "--btn-fg": "color-mix(in oklch, var(--color-base-content) 20%, #0000)",
        "@media (hover: hover)": {
          "&:hover": {
            "pointer-events": "none",
            "background-color":
              "color-mix(in oklab, var(--color-neutral) 20%, transparent)",
            "--btn-border": "#0000",
            "--btn-fg":
              "color-mix(in oklch, var(--color-base-content) 20%, #0000)",
          },
        },
      },
      '&:is(input[type="checkbox"], input[type="radio"])': {
        appearance: "none",
        "&::after": { content: "attr(aria-label)" },
        "&:checked": {
          "outline-width": "2px",
          "outline-style": "solid",
          "--btn-bg":
            "color-mix(in oklab, var(--btn-color, var(--color-base-200)), #000 7%)",
          "--btn-shadow": "0 0 0 0 oklch(0% 0 0/0), 0 0 0 0 oklch(0% 0 0/0)",
          isolation: "isolate",
        },
      },
    },
    ".btn-primary": {
      "--btn-color": "var(--color-primary)",
      "--btn-fg": "var(--color-primary-content)",
    },
    ".btn-secondary": {
      "--btn-color": "var(--color-secondary)",
      "--btn-fg": "var(--color-secondary-content)",
    },
    ".btn-accent": {
      "--btn-color": "var(--color-accent)",
      "--btn-fg": "var(--color-accent-content)",
    },
    ".btn-neutral": {
      "--btn-color": "var(--color-neutral)",
      "--btn-fg": "var(--color-neutral-content)",
    },
    ".btn-info": {
      "--btn-color": "var(--color-info)",
      "--btn-fg": "var(--color-info-content)",
    },
    ".btn-success": {
      "--btn-color": "var(--color-success)",
      "--btn-fg": "var(--color-success-content)",
    },
    ".btn-warning": {
      "--btn-color": "var(--color-warning)",
      "--btn-fg": "var(--color-warning-content)",
    },
    ".btn-error": {
      "--btn-color": "var(--color-error)",
      "--btn-fg": "var(--color-error-content)",
    },
    ".btn-ghost": {
      "&:not(.btn-active, :hover, :active:focus, :focus-visible)": {
        "--btn-shadow": '""',
        "--btn-bg": "#0000",
        "--btn-border": "#0000",
        "--btn-noise": "none",
        "&:not(:disabled, [disabled], .btn-disabled)": {
          "outline-color": "currentColor",
          "--btn-fg": "currentColor",
        },
      },
    },
    ".btn-link": {
      "text-decoration-line": "underline",
      "outline-color": "currentColor",
      "--btn-border": "#0000",
      "--btn-bg": "#0000",
      "--btn-fg": "var(--color-primary)",
      "--btn-noise": "none",
      "--btn-shadow": '""',
      "&:is(.btn-active, :hover, :active:focus, :focus-visible)": {
        "text-decoration-line": "underline",
        "--btn-border": "#0000",
        "--btn-bg": "#0000",
      },
    },
    ".btn-outline": {
      "&:not(.btn-active, :hover, :active:focus, :focus-visible, :disabled, [disabled], .btn-disabled)":
        {
          "--btn-shadow": '""',
          "--btn-bg": "#0000",
          "--btn-fg": "var(--btn-color)",
          "--btn-border": "var(--btn-color)",
          "--btn-noise": "none",
        },
    },
    ".btn-dash": {
      "&:not(.btn-active, :hover, :active:focus, :focus-visible, :disabled, [disabled], .btn-disabled)":
        {
          "--btn-shadow": '""',
          "border-style": "dashed",
          "--btn-bg": "#0000",
          "--btn-fg": "var(--btn-color)",
          "--btn-border": "var(--btn-color)",
          "--btn-noise": "none",
        },
    },
    ".btn-soft": {
      "&:not(.btn-active, :hover, :active:focus, :focus-visible, :disabled, [disabled], .btn-disabled)":
        {
          "--btn-shadow": '""',
          "--btn-fg": "var(--btn-color, var(--color-base-content))",
          "--btn-bg":
            "color-mix(\n      in oklab,\n      var(--btn-color, var(--color-base-content)) 8%,\n      var(--color-base-100)\n    )",
          "--btn-border":
            "color-mix(\n      in oklab,\n      var(--btn-color, var(--color-base-content)) 10%,\n      var(--color-base-100)\n    )",
          "--btn-noise": "none",
        },
    },
    ".btn-xs": {
      "font-size": "0.6875rem",
      "--btn-p": "0.5rem",
      "--size": "calc(var(--size-field, 0.25rem) * 6)",
    },
    ".btn-sm": {
      "font-size": "0.75rem",
      "--btn-p": "0.75rem",
      "--size": "calc(var(--size-field, 0.25rem) * 8)",
    },
    ".btn-md": {
      "font-size": "0.875rem",
      "--btn-p": "1rem",
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
    },
    ".btn-lg": {
      "font-size": "1.125rem",
      "--btn-p": "1.25rem",
      "--size": "calc(var(--size-field, 0.25rem) * 12)",
    },
    ".btn-xl": {
      "font-size": "1.375rem",
      "--btn-p": "1.5rem",
      "--size": "calc(var(--size-field, 0.25rem) * 14)",
    },
    ".btn-square": {
      "padding-inline": "calc(0.25rem * 0)",
      width: "var(--size)",
      height: "var(--size)",
    },
    ".btn-circle": {
      "border-radius": "calc(infinity * 1px)",
      "padding-inline": "calc(0.25rem * 0)",
      width: "var(--size)",
      height: "var(--size)",
    },
    ".btn-wide": { width: "100%", "max-width": "calc(0.25rem * 64)" },
    ".btn-block": { width: "100%" },
  },
  Q = {
    ".steps": {
      display: "inline-grid",
      "grid-auto-flow": "column",
      overflow: "hidden",
      "overflow-x": "auto",
      "counter-reset": "step",
      "grid-auto-columns": "1fr",
      ".step": {
        display: "grid",
        "grid-template-columns": ["repeat(1, minmax(0, 1fr))", "auto"],
        "grid-template-rows": ["repeat(2, minmax(0, 1fr))", "40px 1fr"],
        "place-items": "center",
        "text-align": "center",
        "min-width": "4rem",
        "--step-bg": "var(--color-base-300)",
        "--step-fg": "var(--color-base-content)",
        "&:before": {
          top: "calc(0.25rem * 0)",
          "grid-column-start": "1",
          "grid-row-start": "1",
          height: "calc(0.25rem * 2)",
          width: "100%",
          border: "1px solid",
          color: "var(--step-bg)",
          "background-color": "var(--step-bg)",
          "--tw-content": '""',
          content: "var(--tw-content)",
          "margin-inline-start": "-100%",
        },
        "> .step-icon, &:not(:has(.step-icon)):after": {
          content: "counter(step)",
          "counter-increment": "step",
          "z-index": 1,
          color: "var(--step-fg)",
          "background-color": "var(--step-bg)",
          border: "1px solid var(--step-bg)",
          position: "relative",
          "grid-column-start": "1",
          "grid-row-start": "1",
          display: "grid",
          height: "calc(0.25rem * 8)",
          width: "calc(0.25rem * 8)",
          "place-items": "center",
          "place-self": "center",
          "border-radius": "calc(infinity * 1px)",
        },
        "&:first-child:before": { content: "none" },
        "&[data-content]:after": { content: "attr(data-content)" },
      },
      ".step-neutral": {
        "+ .step-neutral:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-neutral)",
          "--step-fg": "var(--color-neutral-content)",
        },
      },
      ".step-primary": {
        "+ .step-primary:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-primary)",
          "--step-fg": "var(--color-primary-content)",
        },
      },
      ".step-secondary": {
        "+ .step-secondary:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-secondary)",
          "--step-fg": "var(--color-secondary-content)",
        },
      },
      ".step-accent": {
        "+ .step-accent:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-accent)",
          "--step-fg": "var(--color-accent-content)",
        },
      },
      ".step-info": {
        "+ .step-info:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-info)",
          "--step-fg": "var(--color-info-content)",
        },
      },
      ".step-success": {
        "+ .step-success:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-success)",
          "--step-fg": "var(--color-success-content)",
        },
      },
      ".step-warning": {
        "+ .step-warning:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-warning)",
          "--step-fg": "var(--color-warning-content)",
        },
      },
      ".step-error": {
        "+ .step-error:before, &:after, > .step-icon": {
          "--step-bg": "var(--color-error)",
          "--step-fg": "var(--color-error-content)",
        },
      },
    },
    ".steps-horizontal": {
      "grid-auto-columns": "1fr",
      display: "inline-grid",
      "grid-auto-flow": "column",
      overflow: "hidden",
      "overflow-x": "auto",
      ".step": {
        display: "grid",
        "grid-template-columns": ["repeat(1, minmax(0, 1fr))", "auto"],
        "grid-template-rows": ["repeat(2, minmax(0, 1fr))", "40px 1fr"],
        "place-items": "center",
        "text-align": "center",
        "min-width": "4rem",
        "&:before": {
          height: "calc(0.25rem * 2)",
          width: "100%",
          translate: "0",
          content: '""',
          "margin-inline-start": "-100%",
        },
        '[dir="rtl"] &:before': { translate: "0" },
      },
    },
    ".steps-vertical": {
      "grid-auto-rows": "1fr",
      "grid-auto-flow": "row",
      ".step": {
        display: "grid",
        "grid-template-columns": ["repeat(2, minmax(0, 1fr))", "40px 1fr"],
        "grid-template-rows": ["repeat(1, minmax(0, 1fr))", "auto"],
        gap: "0.5rem",
        "min-height": "4rem",
        "justify-items": "start",
        "&:before": {
          height: "100%",
          width: "calc(0.25rem * 2)",
          translate: "-50% -50%",
          "margin-inline-start": "50%",
        },
        '[dir="rtl"] &:before': { translate: "50% -50%" },
      },
    },
  },
  D = {
    ".stats": {
      position: "relative",
      display: "inline-grid",
      "grid-auto-flow": "column",
      "overflow-x": "auto",
      "border-radius": "var(--radius-box)",
    },
    ".stat": {
      display: "inline-grid",
      width: "100%",
      "column-gap": "calc(0.25rem * 4)",
      "padding-inline": "calc(0.25rem * 6)",
      "padding-block": "calc(0.25rem * 4)",
      "grid-template-columns": "repeat(1, 1fr)",
      "&:not(:last-child)": {
        "border-inline-end":
          "var(--border) dashed color-mix(in oklab, currentColor 10%, #0000)",
        "border-block-end": "none",
      },
    },
    ".stat-figure": {
      "grid-column-start": "2",
      "grid-row": "span 3 / span 3",
      "grid-row-start": "1",
      "place-self": "center",
      "justify-self": "flex-end",
    },
    ".stat-title": {
      "grid-column-start": "1",
      "white-space": "nowrap",
      color: "color-mix(in oklab, var(--color-base-content) 60%, transparent)",
      "font-size": "0.75rem",
    },
    ".stat-value": {
      "grid-column-start": "1",
      "white-space": "nowrap",
      "font-size": "2rem",
      "font-weight": 800,
    },
    ".stat-desc": {
      "grid-column-start": "1",
      "white-space": "nowrap",
      color: "color-mix(in oklab, var(--color-base-content) 60%, transparent)",
      "font-size": "0.75rem",
    },
    ".stat-actions": { "grid-column-start": "1", "white-space": "nowrap" },
    ".stats-horizontal": {
      "grid-auto-flow": "column",
      "overflow-x": "auto",
      ".stat:not(:last-child)": {
        "border-inline-end":
          "var(--border) dashed color-mix(in oklab, currentColor 10%, #0000)",
        "border-block-end": "none",
      },
    },
    ".stats-vertical": {
      "grid-auto-flow": "row",
      "overflow-y": "auto",
      ".stat:not(:last-child)": {
        "border-inline-end": "none",
        "border-block-end":
          "var(--border) dashed color-mix(in oklab, currentColor 10%, #0000)",
      },
    },
  },
  J = {
    ".link": {
      cursor: "pointer",
      "text-decoration-line": "underline",
      "&:focus": {
        "outline-style": "none",
        "@media (forced-colors: active)": {
          outline: "2px solid transparent",
          "outline-offset": "2px",
        },
      },
      "&:focus-visible": {
        outline: "2px solid currentColor",
        "outline-offset": "2px",
      },
    },
    ".link-hover": {
      "text-decoration-line": "none",
      "&:hover": {
        "@media (hover: hover)": { "text-decoration-line": "underline" },
      },
    },
    ".link-primary": {
      color: "var(--color-primary)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-primary) 80%, #000)",
        },
      },
    },
    ".link-secondary": {
      color: "var(--color-secondary)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-secondary) 80%, #000)",
        },
      },
    },
    ".link-accent": {
      color: "var(--color-accent)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-accent) 80%, #000)",
        },
      },
    },
    ".link-neutral": {
      color: "var(--color-neutral)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-neutral) 80%, #000)",
        },
      },
    },
    ".link-success": {
      color: "var(--color-success)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-success) 80%, #000)",
        },
      },
    },
    ".link-info": {
      color: "var(--color-info)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-info) 80%, #000)",
        },
      },
    },
    ".link-warning": {
      color: "var(--color-warning)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-warning) 80%, #000)",
        },
      },
    },
    ".link-error": {
      color: "var(--color-error)",
      "@media (hover: hover)": {
        "&:hover": {
          color: "color-mix(in oklab, var(--color-error) 80%, #000)",
        },
      },
    },
  },
  P = {
    ".table": {
      "font-size": "0.875rem",
      position: "relative",
      width: "100%",
      "border-radius": "var(--radius-box)",
      "text-align": "left",
      '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)': {
        "text-align": "right",
      },
      "tr.row-hover": {
        "&, &:nth-child(even)": {
          "&:hover": {
            "@media (hover: hover)": {
              "background-color": "var(--color-base-200)",
            },
          },
        },
      },
      ":where(th, td)": {
        "padding-inline": "calc(0.25rem * 4)",
        "padding-block": "calc(0.25rem * 3)",
        "vertical-align": "middle",
      },
      ":where(thead, tfoot)": {
        "white-space": "nowrap",
        color:
          "color-mix(in oklab, var(--color-base-content) 60%, transparent)",
        "font-size": "0.875rem",
        "font-weight": 600,
      },
      ":where(tfoot)": {
        "border-top":
          "var(--border) solid color-mix(in oklch, var(--color-base-content) 5%, #0000)",
      },
      ":where(.table-pin-rows thead tr)": {
        position: "sticky",
        top: "calc(0.25rem * 0)",
        "z-index": 1,
        "background-color": "var(--color-base-100)",
      },
      ":where(.table-pin-rows tfoot tr)": {
        position: "sticky",
        bottom: "calc(0.25rem * 0)",
        "z-index": 1,
        "background-color": "var(--color-base-100)",
      },
      ":where(.table-pin-cols tr th)": {
        position: "sticky",
        right: "calc(0.25rem * 0)",
        left: "calc(0.25rem * 0)",
        "background-color": "var(--color-base-100)",
      },
      ":where(thead tr, tbody tr:not(:last-child))": {
        "border-bottom":
          "var(--border) solid color-mix(in oklch, var(--color-base-content) 5%, #0000)",
      },
    },
    ".table-zebra": {
      tbody: {
        tr: {
          "&:nth-child(even)": {
            "background-color": "var(--color-base-200)",
            ":where(.table-pin-cols tr th)": {
              "background-color": "var(--color-base-200)",
            },
          },
          "&.row-hover": {
            "&, &:nth-child(even)": {
              "&:hover": {
                "@media (hover: hover)": {
                  "background-color": "var(--color-base-300)",
                },
              },
            },
          },
        },
      },
    },
    ".table-xs": {
      ":not(thead, tfoot) tr": { "font-size": "0.6875rem" },
      ":where(th, td)": {
        "padding-inline": "calc(0.25rem * 2)",
        "padding-block": "calc(0.25rem * 1)",
      },
    },
    ".table-sm": {
      ":not(thead, tfoot) tr": { "font-size": "0.75rem" },
      ":where(th, td)": {
        "padding-inline": "calc(0.25rem * 3)",
        "padding-block": "calc(0.25rem * 2)",
      },
    },
    ".table-md": {
      ":not(thead, tfoot) tr": { "font-size": "0.875rem" },
      ":where(th, td)": {
        "padding-inline": "calc(0.25rem * 4)",
        "padding-block": "calc(0.25rem * 3)",
      },
    },
    ".table-lg": {
      ":not(thead, tfoot) tr": { "font-size": "1.125rem" },
      ":where(th, td)": {
        "padding-inline": "calc(0.25rem * 5)",
        "padding-block": "calc(0.25rem * 4)",
      },
    },
    ".table-xl": {
      ":not(thead, tfoot) tr": { "font-size": "1.375rem" },
      ":where(th, td)": {
        "padding-inline": "calc(0.25rem * 6)",
        "padding-block": "calc(0.25rem * 5)",
      },
    },
  },
  oo = {
    ".list": {
      display: "flex",
      "flex-direction": "column",
      "font-size": "0.875rem",
      ":where(.list-row)": {
        "--list-grid-cols": "minmax(0, auto) 1fr",
        position: "relative",
        display: "grid",
        "grid-auto-flow": "column",
        gap: "calc(0.25rem * 4)",
        "border-radius": "var(--radius-box)",
        padding: "calc(0.25rem * 4)",
        "word-break": "break-word",
        "grid-template-columns": "var(--list-grid-cols)",
        "&:has(.list-col-grow:nth-child(1))": { "--list-grid-cols": "1fr" },
        "&:has(.list-col-grow:nth-child(2))": {
          "--list-grid-cols": "minmax(0, auto) 1fr",
        },
        "&:has(.list-col-grow:nth-child(3))": {
          "--list-grid-cols": "minmax(0, auto) minmax(0, auto) 1fr",
        },
        "&:has(.list-col-grow:nth-child(4))": {
          "--list-grid-cols":
            "minmax(0, auto) minmax(0, auto) minmax(0, auto) 1fr",
        },
        "&:has(.list-col-grow:nth-child(5))": {
          "--list-grid-cols":
            "minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) 1fr",
        },
        "&:has(.list-col-grow:nth-child(6))": {
          "--list-grid-cols":
            "minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto)\n        minmax(0, auto) 1fr",
        },
        ":not(.list-col-wrap)": { "grid-row-start": "1" },
      },
      "& > :not(:last-child)": {
        "&.list-row, .list-row": {
          "&:after": {
            content: '""',
            "border-bottom": "var(--border) solid",
            "inset-inline": "var(--radius-box)",
            position: "absolute",
            bottom: "calc(0.25rem * 0)",
            "border-color":
              "color-mix(in oklab, var(--color-base-content) 5%, transparent)",
          },
        },
      },
    },
    ".list-col-wrap": { "grid-row-start": "2" },
  },
  ro = {
    ".divider": {
      display: "flex",
      height: "calc(0.25rem * 4)",
      "flex-direction": "row",
      "align-items": "center",
      "align-self": "stretch",
      "white-space": "nowrap",
      margin: "var(--divider-m, 1rem 0)",
      "&:before, &:after": {
        content: '""',
        height: "calc(0.25rem * 0.5)",
        width: "100%",
        "flex-grow": 1,
        "background-color":
          "color-mix(in oklab, var(--color-base-content) 10%, transparent)",
      },
      "@media print": { "&:before, &:after": { border: "0.5px solid" } },
      "&:not(:empty)": { gap: "calc(0.25rem * 4)" },
    },
    ".divider-horizontal": {
      "--divider-m": "0 1rem",
      "&.divider": {
        height: "auto",
        width: "calc(0.25rem * 4)",
        "flex-direction": "column",
        "&:before": { height: "100%", width: "calc(0.25rem * 0.5)" },
        "&:after": { height: "100%", width: "calc(0.25rem * 0.5)" },
      },
    },
    ".divider-vertical": {
      "--divider-m": "1rem 0",
      "&.divider": {
        height: "calc(0.25rem * 4)",
        width: "auto",
        "flex-direction": "row",
        "&:before": { height: "calc(0.25rem * 0.5)", width: "100%" },
        "&:after": { height: "calc(0.25rem * 0.5)", width: "100%" },
      },
    },
    ".divider-neutral": {
      "&:before, &:after": { "background-color": "var(--color-neutral)" },
    },
    ".divider-primary": {
      "&:before, &:after": { "background-color": "var(--color-primary)" },
    },
    ".divider-secondary": {
      "&:before, &:after": { "background-color": "var(--color-secondary)" },
    },
    ".divider-accent": {
      "&:before, &:after": { "background-color": "var(--color-accent)" },
    },
    ".divider-success": {
      "&:before, &:after": { "background-color": "var(--color-success)" },
    },
    ".divider-warning": {
      "&:before, &:after": { "background-color": "var(--color-warning)" },
    },
    ".divider-info": {
      "&:before, &:after": { "background-color": "var(--color-info)" },
    },
    ".divider-error": {
      "&:before, &:after": { "background-color": "var(--color-error)" },
    },
    ".divider-start:before": { display: "none" },
    ".divider-end:after": { display: "none" },
  },
  eo = {
    ".menu": {
      display: "flex",
      width: "fit-content",
      "flex-direction": "column",
      "flex-wrap": "wrap",
      padding: "calc(0.25rem * 2)",
      "--menu-active-fg": "var(--color-neutral-content)",
      "--menu-active-bg": "var(--color-neutral)",
      "font-size": "0.875rem",
      ":where(li ul)": {
        position: "relative",
        "margin-inline-start": "calc(0.25rem * 4)",
        "padding-inline-start": "calc(0.25rem * 2)",
        "white-space": "nowrap",
        "&:before": {
          position: "absolute",
          "inset-inline-start": "calc(0.25rem * 0)",
          top: "calc(0.25rem * 3)",
          bottom: "calc(0.25rem * 3)",
          "background-color": "var(--color-base-content)",
          opacity: "10%",
          width: "var(--border)",
          content: '""',
        },
      },
      ":where(li > .menu-dropdown:not(.menu-dropdown-show))": {
        display: "none",
      },
      ":where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)), :where(li:not(.menu-title) > details > summary:not(.menu-title))":
        {
          display: "grid",
          "grid-auto-flow": "column",
          "align-content": "flex-start",
          "align-items": "center",
          gap: "calc(0.25rem * 2)",
          "border-radius": "var(--radius-field)",
          "padding-inline": "calc(0.25rem * 3)",
          "padding-block": "calc(0.25rem * 1.5)",
          "text-align": "start",
          "transition-property": "color, background-color, box-shadow",
          "transition-duration": "0.2s",
          "transition-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          "grid-auto-columns": "minmax(auto, max-content) auto max-content",
          "text-wrap": "balance",
          "user-select": "none",
        },
      ":where(li > details > summary)": {
        "outline-style": "none",
        "@media (forced-colors: active)": {
          outline: "2px solid transparent",
          "outline-offset": "2px",
        },
        "&::-webkit-details-marker": { display: "none" },
      },
      ":where(li > details > summary), :where(li > .menu-dropdown-toggle)": {
        "&:after": {
          "justify-self": "flex-end",
          display: "block",
          height: "0.375rem",
          width: "0.375rem",
          rotate: "-135deg",
          translate: "0 -1px",
          "transition-property": "rotate, translate",
          "transition-duration": "0.2s",
          content: '""',
          "transform-origin": "50% 50%",
          "box-shadow": "2px 2px inset",
          "pointer-events": "none",
        },
      },
      ":where(li > details[open] > summary):after, :where(li > .menu-dropdown-toggle.menu-dropdown-show):after":
        { rotate: "45deg", translate: "0 1px" },
      ":where( li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title), li:not(.menu-title, .disabled) > details > summary:not(.menu-title) ):not(.menu-active, :active, .btn)":
        {
          "&.menu-focus, &:focus-visible": {
            cursor: "pointer",
            "background-color":
              "color-mix(in oklab, var(--color-base-content) 10%, transparent)",
            color: "var(--color-base-content)",
            "outline-style": "none",
            "@media (forced-colors: active)": {
              outline: "2px solid transparent",
              "outline-offset": "2px",
            },
          },
        },
      ":where( li:not(.menu-title, .disabled) > *:not(ul, details, .menu-title):not(.menu-active, :active, .btn):hover, li:not(.menu-title, .disabled) > details > summary:not(.menu-title):not(.menu-active, :active, .btn):hover )":
        {
          cursor: "pointer",
          "background-color":
            "color-mix(in oklab, var(--color-base-content) 10%, transparent)",
          "outline-style": "none",
          "@media (forced-colors: active)": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
          },
          "box-shadow":
            "0 1px oklch(0% 0 0 / 0.01) inset, 0 -1px oklch(100% 0 0 / 0.01) inset",
        },
      ":where(li:empty)": {
        "background-color": "var(--color-base-content)",
        opacity: "10%",
        margin: "0.5rem 1rem",
        height: "1px",
      },
      ":where(li)": {
        position: "relative",
        display: "flex",
        "flex-shrink": 0,
        "flex-direction": "column",
        "flex-wrap": "wrap",
        "align-items": "stretch",
        ".badge": { "justify-self": "flex-end" },
        "& > *:not(ul, .menu-title, details, .btn):active, & > *:not(ul, .menu-title, details, .btn).menu-active, & > details > summary:active":
          {
            "outline-style": "none",
            "@media (forced-colors: active)": {
              outline: "2px solid transparent",
              "outline-offset": "2px",
            },
            color: "var(--menu-active-fg)",
            "background-color": "var(--menu-active-bg)",
            "background-size": "auto, calc(var(--noise) * 100%)",
            "background-image": "none, var(--fx-noise)",
            "&:not(&:active)": {
              "box-shadow":
                "0 2px calc(var(--depth) * 3px) -2px var(--menu-active-bg)",
            },
          },
        "&.menu-disabled": {
          "pointer-events": "none",
          color:
            "color-mix(in oklab, var(--color-base-content) 20%, transparent)",
        },
      },
      ".dropdown:focus-within": {
        ".menu-dropdown-toggle:after": { rotate: "45deg", translate: "0 1px" },
      },
      ".dropdown-content": {
        "margin-top": "calc(0.25rem * 2)",
        padding: "calc(0.25rem * 2)",
        "&:before": { display: "none" },
      },
    },
    ".menu-title": {
      "padding-inline": "calc(0.25rem * 3)",
      "padding-block": "calc(0.25rem * 2)",
      color: "color-mix(in oklab, var(--color-base-content) 40%, transparent)",
      "font-size": "0.875rem",
      "font-weight": 600,
    },
    ".menu-horizontal": {
      display: "inline-flex",
      "flex-direction": "row",
      "& > li:not(.menu-title) > details > ul": {
        position: "absolute",
        "margin-inline-start": "calc(0.25rem * 0)",
        "margin-top": "calc(0.25rem * 4)",
        "padding-block": "calc(0.25rem * 2)",
        "padding-inline-end": "calc(0.25rem * 2)",
      },
      "& > li > details > ul": { "&:before": { content: "none" } },
      ":where(& > li:not(.menu-title) > details > ul)": {
        "border-radius": "var(--radius-box)",
        "background-color": "var(--color-base-100)",
        "box-shadow":
          "0 1px 3px 0 oklch(0% 0 0/0.1), 0 1px 2px -1px oklch(0% 0 0/0.1)",
      },
    },
    ".menu-vertical": {
      display: "inline-flex",
      "flex-direction": "column",
      "& > li:not(.menu-title) > details > ul": {
        position: "relative",
        "margin-inline-start": "calc(0.25rem * 4)",
        "margin-top": "calc(0.25rem * 0)",
        "padding-block": "calc(0.25rem * 0)",
        "padding-inline-end": "calc(0.25rem * 0)",
      },
    },
    ".menu-xs": {
      ":where(li:not(.menu-title) > *:not(ul, details, .menu-title)), :where(li:not(.menu-title) > details > summary:not(.menu-title))":
        {
          "border-radius": "var(--radius-field)",
          "padding-inline": "calc(0.25rem * 2)",
          "padding-block": "calc(0.25rem * 1)",
          "font-size": "0.6875rem",
        },
      ".menu-title": {
        "padding-inline": "calc(0.25rem * 2)",
        "padding-block": "calc(0.25rem * 1)",
      },
    },
    ".menu-sm": {
      ":where(li:not(.menu-title) > *:not(ul, details, .menu-title)), :where(li:not(.menu-title) > details > summary:not(.menu-title))":
        {
          "border-radius": "var(--radius-field)",
          "padding-inline": "calc(0.25rem * 2.5)",
          "padding-block": "calc(0.25rem * 1)",
          "font-size": "0.75rem",
        },
      ".menu-title": {
        "padding-inline": "calc(0.25rem * 3)",
        "padding-block": "calc(0.25rem * 2)",
      },
    },
    ".menu-md": {
      ":where(li:not(.menu-title) > *:not(ul, details, .menu-title)), :where(li:not(.menu-title) > details > summary:not(.menu-title))":
        {
          "border-radius": "var(--radius-field)",
          "padding-inline": "calc(0.25rem * 3)",
          "padding-block": "calc(0.25rem * 1.5)",
          "font-size": "0.875rem",
        },
      ".menu-title": {
        "padding-inline": "calc(0.25rem * 3)",
        "padding-block": "calc(0.25rem * 2)",
      },
    },
    ".menu-lg": {
      ":where(li:not(.menu-title) > *:not(ul, details, .menu-title)), :where(li:not(.menu-title) > details > summary:not(.menu-title))":
        {
          "border-radius": "var(--radius-field)",
          "padding-inline": "calc(0.25rem * 4)",
          "padding-block": "calc(0.25rem * 1.5)",
          "font-size": "1.125rem",
        },
      ".menu-title": {
        "padding-inline": "calc(0.25rem * 6)",
        "padding-block": "calc(0.25rem * 3)",
      },
    },
    ".menu-xl": {
      ":where(li:not(.menu-title) > *:not(ul, details, .menu-title)), :where(li:not(.menu-title) > details > summary:not(.menu-title))":
        {
          "border-radius": "var(--radius-field)",
          "padding-inline": "calc(0.25rem * 5)",
          "padding-block": "calc(0.25rem * 1.5)",
          "font-size": "1.375rem",
        },
      ".menu-title": {
        "padding-inline": "calc(0.25rem * 6)",
        "padding-block": "calc(0.25rem * 3)",
      },
    },
  },
  to = {
    ".avatar-group": {
      display: "flex",
      overflow: "hidden",
      ":where(.avatar)": {
        overflow: "hidden",
        "border-radius": "calc(infinity * 1px)",
        border: "4px solid var(--color-base-100)",
      },
    },
    ".avatar": {
      position: "relative",
      display: "inline-flex",
      "vertical-align": "middle",
      "& > div": {
        display: "block",
        "aspect-ratio": "1 / 1",
        overflow: "hidden",
      },
      img: { height: "100%", width: "100%", "object-fit": "cover" },
    },
    ".avatar-placeholder": {
      "& > div": {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      },
    },
    ".avatar-online": {
      "&:before": {
        content: '""',
        position: "absolute",
        "z-index": 1,
        display: "block",
        "border-radius": "calc(infinity * 1px)",
        "background-color": "var(--color-success)",
        outline: "2px solid var(--color-base-100)",
        width: "15%",
        height: "15%",
        top: "7%",
        right: "7%",
      },
    },
    ".avatar-offline": {
      "&:before": {
        content: '""',
        position: "absolute",
        "z-index": 1,
        display: "block",
        "border-radius": "calc(infinity * 1px)",
        "background-color": "var(--color-base-300)",
        outline: "2px solid var(--color-base-100)",
        width: "15%",
        height: "15%",
        top: "7%",
        right: "7%",
      },
    },
  },
  ao = {
    ".fieldset": {
      display: "grid",
      gap: "calc(0.25rem * 1.5)",
      "padding-block": "calc(0.25rem * 1)",
      "font-size": "0.75rem",
      "grid-template-columns": "1fr",
      "grid-auto-rows": "max-content",
    },
    ".fieldset-legend": {
      "margin-bottom": "calc(0.25rem * -1)",
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
      gap: "calc(0.25rem * 2)",
      "padding-block": "calc(0.25rem * 2)",
      color: "var(--color-base-content)",
      "font-weight": 600,
    },
    ".fieldset-label": {
      display: "flex",
      "align-items": "center",
      gap: "calc(0.25rem * 1.5)",
      color: "color-mix(in oklab, var(--color-base-content) 60%, transparent)",
      "&:is(label, a), &:has(input)": { cursor: "pointer" },
    },
  },
  co = {
    ".select": {
      border: "var(--border) solid #0000",
      position: "relative",
      display: "inline-flex",
      "flex-shrink": 1,
      appearance: "none",
      "align-items": "center",
      gap: "calc(0.25rem * 1.5)",
      "background-color": "var(--color-base-100)",
      "padding-inline-start": "calc(0.25rem * 4)",
      "padding-inline-end": "calc(0.25rem * 7)",
      "vertical-align": "middle",
      width: "clamp(3rem, 20rem, 100%)",
      height: "var(--size)",
      "font-size": "0.875rem",
      "border-start-start-radius": "var(--join-ss, var(--radius-field))",
      "border-start-end-radius": "var(--join-se, var(--radius-field))",
      "border-end-start-radius": "var(--join-es, var(--radius-field))",
      "border-end-end-radius": "var(--join-ee, var(--radius-field))",
      "background-image":
        "linear-gradient(45deg, #0000 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, #0000 50%)",
      "background-position":
        "calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%)",
      "background-size": "4px 4px, 4px 4px",
      "background-repeat": "no-repeat",
      "text-overflow": "ellipsis",
      "box-shadow":
        "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000) inset, 0 -1px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset",
      "border-color": "var(--input-color)",
      "--input-color":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      '[dir="rtl"] &': {
        "background-position":
          "calc(0% + 12px) calc(1px + 50%), calc(0% + 16px) calc(1px + 50%)",
      },
      select: {
        "margin-inline-start": "calc(0.25rem * -4)",
        "margin-inline-end": "calc(0.25rem * -7)",
        width: "calc(100% + 2.75rem)",
        appearance: "none",
        "padding-inline-start": "calc(0.25rem * 4)",
        "padding-inline-end": "calc(0.25rem * 7)",
        height: "calc(100% - 2px)",
        background: "inherit",
        "border-radius": "inherit",
        "border-style": "none",
        "&:focus, &:focus-within": {
          "outline-style": "none",
          "@media (forced-colors: active)": {
            outline: "2px solid transparent",
            "outline-offset": "2px",
          },
        },
      },
      "&:focus, &:focus-within": {
        "--input-color": "var(--color-base-content)",
        "box-shadow":
          "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000)",
        outline: "2px solid var(--input-color)",
        "outline-offset": "2px",
      },
      "&:has(> select[disabled]), &:is(:disabled, [disabled])": {
        cursor: "not-allowed",
        "border-color": "var(--color-base-200)",
        "background-color": "var(--color-base-200)",
        color:
          "color-mix(in oklab, var(--color-base-content) 40%, transparent)",
        "&::placeholder": {
          color:
            "color-mix(in oklab, var(--color-base-content) 20%, transparent)",
        },
      },
      "&:has(> select[disabled]) > select[disabled]": { cursor: "not-allowed" },
    },
    ".select-ghost": {
      "background-color": "transparent",
      transition: "background-color 0.2s",
      "box-shadow": "none",
      "border-color": "#0000",
      "&:focus, &:focus-within": {
        "background-color": "var(--color-base-100)",
        color: "var(--color-base-content)",
        "border-color": "#0000",
        "box-shadow": "none",
      },
    },
    ".select-neutral": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-neutral)" },
    },
    ".select-primary": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-primary)" },
    },
    ".select-secondary": {
      "&, &:focus, &:focus-within": {
        "--input-color": "var(--color-secondary)",
      },
    },
    ".select-accent": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-accent)" },
    },
    ".select-info": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-info)" },
    },
    ".select-success": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-success)" },
    },
    ".select-warning": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-warning)" },
    },
    ".select-error": {
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-error)" },
    },
    ".select-xs": {
      "--size": "calc(var(--size-field, 0.25rem) * 6)",
      "font-size": "0.6875rem",
    },
    ".select-sm": {
      "--size": "calc(var(--size-field, 0.25rem) * 8)",
      "font-size": "0.75rem",
    },
    ".select-md": {
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      "font-size": "0.875rem",
    },
    ".select-lg": {
      "--size": "calc(var(--size-field, 0.25rem) * 12)",
      "font-size": "1.125rem",
    },
    ".select-xl": {
      "--size": "calc(var(--size-field, 0.25rem) * 14)",
      "font-size": "1.375rem",
    },
  },
  io = {
    ".stack": {
      display: "inline-grid",
      "grid-template-columns": "3px 4px 1fr 4px 3px",
      "grid-template-rows": "3px 4px 1fr 4px 3px",
      "& > *": {
        height: "100%",
        width: "100%",
        "&:nth-child(n + 2)": { width: "100%", opacity: "70%" },
        "&:nth-child(2)": { "z-index": 2, opacity: "90%" },
        "&:nth-child(1)": { "z-index": 3, width: "100%" },
      },
      "&, &.stack-bottom": {
        "> *": {
          "grid-column": "3 / 4",
          "grid-row": "3 / 6",
          "&:nth-child(2)": { "grid-column": "2 / 5", "grid-row": "2 / 5" },
          "&:nth-child(1)": { "grid-column": "1 / 6", "grid-row": "1 / 4" },
        },
      },
      "&.stack-top": {
        "> *": {
          "grid-column": "3 / 4",
          "grid-row": "1 / 4",
          "&:nth-child(2)": { "grid-column": "2 / 5", "grid-row": "2 / 5" },
          "&:nth-child(1)": { "grid-column": "1 / 6", "grid-row": "3 / 6" },
        },
      },
      "&.stack-start": {
        "> *": {
          "grid-column": "1 / 4",
          "grid-row": "3 / 4",
          "&:nth-child(2)": { "grid-column": "2 / 5", "grid-row": "2 / 5" },
          "&:nth-child(1)": { "grid-column": "3 / 6", "grid-row": "1 / 6" },
        },
      },
      "&.stack-end": {
        "> *": {
          "grid-column": "3 / 6",
          "grid-row": "3 / 4",
          "&:nth-child(2)": { "grid-column": "2 / 5", "grid-row": "2 / 5" },
          "&:nth-child(1)": { "grid-column": "1 / 4", "grid-row": "1 / 6" },
        },
      },
    },
  },
  no = {
    ".filter": {
      display: "flex",
      "flex-wrap": "wrap",
      'input[type="radio"]': { width: "auto" },
      input: {
        overflow: "hidden",
        opacity: "100%",
        scale: "1",
        transition:
          "margin 0.1s, opacity 0.3s, padding 0.3s, border-width 0.1s",
        "&:not(:last-child)": { "margin-inline-end": "calc(0.25rem * 1)" },
        "&.filter-reset": {
          "aspect-ratio": "1 / 1",
          "&::after": { content: '"×"' },
        },
      },
      "&:not(:has(input:checked:not(.filter-reset)))": {
        '.filter-reset, input[type="reset"]': {
          scale: "0",
          "border-width": "0",
          "margin-inline": "calc(0.25rem * 0)",
          width: "calc(0.25rem * 0)",
          "padding-inline": "calc(0.25rem * 0)",
          opacity: "0%",
        },
      },
      "&:has(input:checked:not(.filter-reset))": {
        'input:not(:checked, .filter-reset, input[type="reset"])': {
          scale: "0",
          "border-width": "0",
          "margin-inline": "calc(0.25rem * 0)",
          width: "calc(0.25rem * 0)",
          "padding-inline": "calc(0.25rem * 0)",
          opacity: "0%",
        },
      },
    },
  },
  lo = {
    ".hero": {
      display: "grid",
      width: "100%",
      "place-items": "center",
      "background-size": "cover",
      "background-position": "center",
      "& > *": { "grid-column-start": "1", "grid-row-start": "1" },
    },
    ".hero-overlay": {
      "grid-column-start": "1",
      "grid-row-start": "1",
      height: "100%",
      width: "100%",
      "background-color":
        "color-mix(in oklab, var(--color-neutral) 50%, transparent)",
    },
    ".hero-content": {
      display: "flex",
      "max-width": "80rem",
      "align-items": "center",
      "justify-content": "center",
      gap: "calc(0.25rem * 4)",
      padding: "calc(0.25rem * 4)",
    },
  },
  so = {
    ".mockup-code": {
      position: "relative",
      overflow: "hidden",
      "overflow-x": "auto",
      "border-radius": "var(--radius-box)",
      "background-color": "var(--color-neutral)",
      "padding-block": "calc(0.25rem * 5)",
      color: "var(--color-neutral-content)",
      "font-size": "0.875rem",
      direction: "ltr",
      "&:before": {
        content: '""',
        "margin-bottom": "calc(0.25rem * 4)",
        display: "block",
        height: "calc(0.25rem * 3)",
        width: "calc(0.25rem * 3)",
        "border-radius": "calc(infinity * 1px)",
        opacity: "30%",
        "box-shadow": "1.4em 0, 2.8em 0, 4.2em 0",
      },
      pre: {
        "padding-right": "calc(0.25rem * 5)",
        "&:before": { content: '""', "margin-right": "2ch" },
        "&[data-prefix]": {
          "&:before": {
            content: "attr(data-prefix)",
            display: "inline-block",
            width: "calc(0.25rem * 8)",
            "text-align": "right",
            opacity: "50%",
          },
        },
      },
    },
    ".mockup-window": {
      position: "relative",
      display: "flex",
      "flex-direction": "column",
      overflow: "hidden",
      "overflow-x": "auto",
      "border-radius": "var(--radius-box)",
      "padding-top": "calc(0.25rem * 5)",
      "&:before": {
        content: '""',
        "margin-bottom": "calc(0.25rem * 4)",
        display: "block",
        "aspect-ratio": "1 / 1",
        height: "calc(0.25rem * 3)",
        "flex-shrink": 0,
        "align-self": "flex-start",
        "border-radius": "calc(infinity * 1px)",
        opacity: "30%",
        "box-shadow": "1.4em 0, 2.8em 0, 4.2em 0",
      },
      '[dir="rtl"] &:before': { "align-self": "flex-end" },
      "pre[data-prefix]": {
        "&:before": {
          content: "attr(data-prefix)",
          display: "inline-block",
          "text-align": "right",
        },
      },
    },
    ".mockup-browser": {
      position: "relative",
      overflow: "hidden",
      "overflow-x": "auto",
      "border-radius": "var(--radius-box)",
      "pre[data-prefix]": {
        "&:before": {
          content: "attr(data-prefix)",
          display: "inline-block",
          "text-align": "right",
        },
      },
      ".mockup-browser-toolbar": {
        "margin-block": "calc(0.25rem * 3)",
        display: "inline-flex",
        width: "100%",
        "align-items": "center",
        "padding-right": "1.4em",
        '&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)': {
          "flex-direction": "row-reverse",
        },
        "&:before": {
          content: '""',
          "margin-right": "4.8rem",
          display: "inline-block",
          "aspect-ratio": "1 / 1",
          height: "calc(0.25rem * 3)",
          "border-radius": "calc(infinity * 1px)",
          opacity: "30%",
          "box-shadow": "1.4em 0, 2.8em 0, 4.2em 0",
        },
        ".input": {
          "margin-inline": "auto",
          display: "flex",
          height: "100%",
          "align-items": "center",
          gap: "calc(0.25rem * 2)",
          overflow: "hidden",
          "background-color": "var(--color-base-200)",
          "text-overflow": "ellipsis",
          "white-space": "nowrap",
          "font-size": "0.75rem",
          direction: "ltr",
          "&:before": {
            content: '""',
            width: "calc(0.25rem * 4)",
            height: "calc(0.25rem * 4)",
            opacity: "30%",
            "background-image":
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' class='size-4'%3E%3Cpath fill-rule='evenodd' d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z' clip-rule='evenodd' /%3E%3C/svg%3E%0A\")",
          },
        },
      },
    },
    ".mockup-phone": {
      display: "inline-grid",
      "justify-items": "center",
      border: "6px solid #6b6b6b",
      "border-radius": "65px",
      "background-color": "#000",
      padding: "11px",
      overflow: "hidden",
    },
    ".mockup-phone-camera": {
      "grid-column": "1/1",
      "grid-row": "1/1",
      background: "#000",
      height: "32px",
      width: "126px",
      "border-radius": "17px",
      "z-index": 1,
      "margin-top": "6px",
    },
    ".mockup-phone-display": {
      "grid-column": "1/1",
      "grid-row": "1/1",
      overflow: "hidden",
      "border-radius": "49px",
      width: "390px",
      height: "845px",
    },
  },
  bo = {
    ".range": {
      appearance: "none",
      "webkit-appearance": "none",
      "--range-thumb": "var(--color-base-100)",
      "--range-thumb-size": "calc(var(--size-selector, 0.25rem) * 6)",
      "--range-progress": "currentColor",
      "--range-fill": "1",
      "--range-p": "0.25rem",
      "--range-bg": "color-mix(in oklab, currentColor 10%, #0000)",
      cursor: "pointer",
      overflow: "hidden",
      "background-color": "transparent",
      "vertical-align": "middle",
      width: "clamp(3rem, 20rem, 100%)",
      "--radius-selector-max":
        "calc(\n    var(--radius-selector) + var(--radius-selector) + var(--radius-selector)\n  )",
      "border-radius":
        "calc(var(--radius-selector) + min(var(--range-p), var(--radius-selector-max)))",
      border: "none",
      height: "var(--range-thumb-size)",
      '[dir="rtl"] &': { "--range-dir": "-1" },
      "&:focus": { outline: "none" },
      "&:focus-visible": { outline: "2px solid", "outline-offset": "2px" },
      "&::-webkit-slider-runnable-track": {
        width: "100%",
        "background-color": "var(--range-bg)",
        "border-radius": "var(--radius-selector)",
        height: "calc(var(--range-thumb-size) * 0.5)",
        "@media (forced-colors: active)": { border: "1px solid" },
      },
      "&::-webkit-slider-thumb": {
        position: "relative",
        "box-sizing": "border-box",
        "border-radius":
          "calc(var(--radius-selector) + min(var(--range-p), var(--radius-selector-max)))",
        "background-color": "currentColor",
        height: "var(--range-thumb-size)",
        width: "var(--range-thumb-size)",
        border: "var(--range-p) solid",
        appearance: "none",
        "webkit-appearance": "none",
        top: "50%",
        color: "var(--range-progress)",
        transform: "translateY(-50%)",
        "box-shadow":
          "0 -1px oklch(0% 0 0 / calc(var(--depth) * 0.1)) inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 1px color-mix(in oklab, currentColor calc(var(--depth) * 10%), #0000), 0 0 0 2rem var(--range-thumb) inset, calc((var(--range-dir, 1) * -100rem) - (var(--range-dir, 1) * var(--range-thumb-size) / 2)) 0 0 calc(100rem * var(--range-fill))",
      },
      "&::-moz-range-track": {
        width: "100%",
        "background-color": "var(--range-bg)",
        "border-radius": "var(--radius-selector)",
        height: "calc(var(--range-thumb-size) * 0.5)",
        "@media (forced-colors: active)": { border: "1px solid" },
      },
      "&::-moz-range-thumb": {
        position: "relative",
        "box-sizing": "border-box",
        "border-radius":
          "calc(var(--radius-selector) + min(var(--range-p), var(--radius-selector-max)))",
        "background-color": "currentColor",
        height: "var(--range-thumb-size)",
        width: "var(--range-thumb-size)",
        border: "var(--range-p) solid",
        top: "50%",
        color: "var(--range-progress)",
        "box-shadow":
          "0 -1px oklch(0% 0 0 / calc(var(--depth) * 0.1)) inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset, 0 1px color-mix(in oklab, currentColor calc(var(--depth) * 10%), #0000), 0 0 0 2rem var(--range-thumb) inset, calc((var(--range-dir, 1) * -100rem) - (var(--range-dir, 1) * var(--range-thumb-size) / 2)) 0 0 calc(100rem * var(--range-fill))",
      },
      "&:disabled": { cursor: "not-allowed", opacity: "30%" },
    },
    ".range-primary": {
      color: "var(--color-primary)",
      "--range-thumb": "var(--color-primary-content)",
    },
    ".range-secondary": {
      color: "var(--color-secondary)",
      "--range-thumb": "var(--color-secondary-content)",
    },
    ".range-accent": {
      color: "var(--color-accent)",
      "--range-thumb": "var(--color-accent-content)",
    },
    ".range-neutral": {
      color: "var(--color-neutral)",
      "--range-thumb": "var(--color-neutral-content)",
    },
    ".range-success": {
      color: "var(--color-success)",
      "--range-thumb": "var(--color-success-content)",
    },
    ".range-warning": {
      color: "var(--color-warning)",
      "--range-thumb": "var(--color-warning-content)",
    },
    ".range-info": {
      color: "var(--color-info)",
      "--range-thumb": "var(--color-info-content)",
    },
    ".range-error": {
      color: "var(--color-error)",
      "--range-thumb": "var(--color-error-content)",
    },
    ".range-xs": {
      "--range-thumb-size": "calc(var(--size-selector, 0.25rem) * 4)",
    },
    ".range-sm": {
      "--range-thumb-size": "calc(var(--size-selector, 0.25rem) * 5)",
    },
    ".range-md": {
      "--range-thumb-size": "calc(var(--size-selector, 0.25rem) * 6)",
    },
    ".range-lg": {
      "--range-thumb-size": "calc(var(--size-selector, 0.25rem) * 7)",
    },
    ".range-xl": {
      "--range-thumb-size": "calc(var(--size-selector, 0.25rem) * 8)",
    },
  },
  uo = {
    ".modal": {
      "pointer-events": "none",
      visibility: "hidden",
      position: "fixed",
      inset: "calc(0.25rem * 0)",
      margin: "calc(0.25rem * 0)",
      display: "grid",
      height: "100%",
      "max-height": "none",
      width: "100%",
      "max-width": "none",
      "align-items": "center",
      "justify-items": "center",
      "background-color": "transparent",
      padding: "calc(0.25rem * 0)",
      color: "inherit",
      "overflow-x": "hidden",
      transition:
        "transform 0.3s ease-out, visibility 0.3s allow-discrete, opacity 0.1s ease-out",
      "overflow-y": "hidden",
      "overscroll-behavior": "contain",
      "z-index": 999,
      "&:not(dialog:not(.modal-open)), &::backdrop": {
        opacity: "100%",
        "@starting-style": [{ visibility: "hidden" }, { opacity: "0%" }],
        "background-color": "oklch(0% 0 0/ 0.4)",
        transition:
          "display 0.3s ease-out allow-discrete, opacity 0.3s ease-out, visibility 0.3s ease-out allow-discrete",
      },
      "&.modal-open, &[open], &:target": {
        "pointer-events": "auto",
        visibility: "visible",
        opacity: "100%",
        "@starting-style": [{ visibility: "hidden" }, { opacity: "0%" }],
        ".modal-box": { translate: "0 0", scale: "1", opacity: 1 },
      },
    },
    ".modal-action": {
      "margin-top": "calc(0.25rem * 6)",
      display: "flex",
      "justify-content": "flex-end",
      gap: "calc(0.25rem * 2)",
    },
    ".modal-toggle": {
      position: "fixed",
      height: "calc(0.25rem * 0)",
      width: "calc(0.25rem * 0)",
      appearance: "none",
      opacity: "0%",
      "&:checked + .modal": {
        "pointer-events": "auto",
        visibility: "visible",
        opacity: "100%",
        "@starting-style": [{ visibility: "hidden" }, { opacity: "0%" }],
        ".modal-box": { translate: "0 0", scale: "1", opacity: 1 },
      },
    },
    ".modal-backdrop": {
      "grid-column-start": "1",
      "grid-row-start": "1",
      display: "grid",
      "align-self": "stretch",
      "justify-self": "stretch",
      color: "transparent",
      "z-index": -1,
      button: { cursor: "pointer" },
    },
    ".modal-box": {
      "grid-column-start": "1",
      "grid-row-start": "1",
      "max-height": "100vh",
      width: "calc(11/12 * 100%)",
      "max-width": "32rem",
      "background-color": "var(--color-base-100)",
      padding: "calc(0.25rem * 6)",
      transition:
        "translate 0.3s ease-out, scale 0.3s ease-out, opacity 0.2s ease-out 0.05s, box-shadow 0.3s ease-out",
      "border-top-left-radius": "var(--modal-tl, var(--radius-box))",
      "border-top-right-radius": "var(--modal-tr, var(--radius-box))",
      "border-bottom-left-radius": "var(--modal-bl, var(--radius-box))",
      "border-bottom-right-radius": "var(--modal-br, var(--radius-box))",
      scale: "95%",
      opacity: 0,
      "box-shadow": "oklch(0% 0 0/ 0.25) 0px 25px 50px -12px",
      "overflow-y": "auto",
      "overscroll-behavior": "contain",
    },
    ".modal-top": {
      "place-items": "start",
      ":where(.modal-box)": {
        height: "auto",
        width: "100%",
        "max-width": "none",
        "max-height": "calc(100vh - 5em)",
        translate: "0 -100%",
        scale: "1",
        "--modal-tl": "0",
        "--modal-tr": "0",
        "--modal-bl": "var(--radius-box)",
        "--modal-br": "var(--radius-box)",
      },
    },
    ".modal-middle": {
      "place-items": "center",
      ":where(.modal-box)": {
        height: "auto",
        width: "calc(11/12 * 100%)",
        "max-width": "32rem",
        "max-height": "calc(100vh - 5em)",
        translate: "0 2%",
        scale: "98%",
        "--modal-tl": "var(--radius-box)",
        "--modal-tr": "var(--radius-box)",
        "--modal-bl": "var(--radius-box)",
        "--modal-br": "var(--radius-box)",
      },
    },
    ".modal-bottom": {
      "place-items": "end",
      ":where(.modal-box)": {
        height: "auto",
        width: "100%",
        "max-width": "none",
        "max-height": "calc(100vh - 5em)",
        translate: "0 100%",
        scale: "1",
        "--modal-tl": "var(--radius-box)",
        "--modal-tr": "var(--radius-box)",
        "--modal-bl": "0",
        "--modal-br": "0",
      },
    },
    ".modal-start": {
      "place-items": "start",
      ":where(.modal-box)": {
        height: "100vh",
        "max-height": "none",
        width: "auto",
        "max-width": "none",
        translate: "-100% 0",
        scale: "1",
        "--modal-tl": "0",
        "--modal-tr": "var(--radius-box)",
        "--modal-bl": "0",
        "--modal-br": "var(--radius-box)",
      },
    },
    ".modal-end": {
      "place-items": "end",
      ":where(.modal-box)": {
        height: "100vh",
        "max-height": "none",
        width: "auto",
        "max-width": "none",
        translate: "100% 0",
        scale: "1",
        "--modal-tl": "var(--radius-box)",
        "--modal-tr": "0",
        "--modal-bl": "var(--radius-box)",
        "--modal-br": "0",
      },
    },
  },
  po = {
    ".timeline": {
      position: "relative",
      display: "flex",
      "> li": {
        position: "relative",
        display: "grid",
        "flex-shrink": 0,
        "align-items": "center",
        "grid-template-rows":
          "var(--timeline-row-start, minmax(0, 1fr)) auto var( --timeline-row-end, minmax(0, 1fr) )",
        "grid-template-columns":
          "var(--timeline-col-start, minmax(0, 1fr)) auto var( --timeline-col-end, minmax(0, 1fr) )",
        "> hr": {
          border: "none",
          width: "100%",
          "@media print": { border: ".1px solid var(--color-base-300)" },
          "&:first-child": { "grid-column-start": "1", "grid-row-start": "2" },
          "&:last-child": {
            "grid-column-start": "3",
            "grid-column-end": "none",
            "grid-row-start": "2",
            "grid-row-end": "auto",
          },
        },
      },
      ":where(hr)": {
        height: "calc(0.25rem * 1)",
        "background-color": "var(--color-base-300)",
      },
      "&:has(.timeline-middle hr)": {
        "&:first-child": {
          "border-start-start-radius": "0",
          "border-end-start-radius": "0",
          "border-start-end-radius": "var(--radius-selector)",
          "border-end-end-radius": "var(--radius-selector)",
        },
        "&:last-child": {
          "border-start-start-radius": "var(--radius-selector)",
          "border-end-start-radius": "var(--radius-selector)",
          "border-start-end-radius": "0",
          "border-end-end-radius": "0",
        },
      },
      "&:not(:has(.timeline-middle))": {
        ":first-child hr:last-child": {
          "border-start-start-radius": "var(--radius-selector)",
          "border-end-start-radius": "var(--radius-selector)",
          "border-start-end-radius": "0",
          "border-end-end-radius": "0",
        },
        ":last-child hr:first-child": {
          "border-start-start-radius": "0",
          "border-end-start-radius": "0",
          "border-start-end-radius": "var(--radius-selector)",
          "border-end-end-radius": "var(--radius-selector)",
        },
      },
    },
    ".timeline-box": {
      border: "var(--border) solid",
      "border-radius": "var(--radius-box)",
      "border-color": "var(--color-base-300)",
      "background-color": "var(--color-base-100)",
      "padding-inline": "calc(0.25rem * 4)",
      "padding-block": "calc(0.25rem * 2)",
      "font-size": "0.75rem",
      "box-shadow": "0 1px 2px 0 oklch(0% 0 0/0.05)",
    },
    ".timeline-start": {
      "grid-column-start": "1",
      "grid-column-end": "4",
      "grid-row-start": "1",
      "grid-row-end": "2",
      margin: "calc(0.25rem * 1)",
      "align-self": "flex-end",
      "justify-self": "center",
    },
    ".timeline-middle": { "grid-column-start": "2", "grid-row-start": "2" },
    ".timeline-end": {
      "grid-column-start": "1",
      "grid-column-end": "4",
      "grid-row-start": "3",
      "grid-row-end": "4",
      margin: "calc(0.25rem * 1)",
      "align-self": "flex-start",
      "justify-self": "center",
    },
    ".timeline-compact": {
      "--timeline-row-start": "0",
      ".timeline-start": {
        "grid-column-start": "1",
        "grid-column-end": "4",
        "grid-row-start": "3",
        "grid-row-end": "4",
        "align-self": "flex-start",
        "justify-self": "center",
      },
      "li:has(.timeline-start)": {
        ".timeline-end": {
          "grid-column-start": "none",
          "grid-row-start": "auto",
        },
      },
      "&.timeline-vertical": {
        "> li": { "--timeline-col-start": "0" },
        ".timeline-start": {
          "grid-column-start": "3",
          "grid-column-end": "4",
          "grid-row-start": "1",
          "grid-row-end": "4",
          "align-self": "center",
          "justify-self": "flex-start",
        },
        "li:has(.timeline-start)": {
          ".timeline-end": {
            "grid-column-start": "auto",
            "grid-row-start": "none",
          },
        },
      },
    },
    ".timeline-snap-icon": {
      "> li": {
        "--timeline-col-start": "0.5rem",
        "--timeline-row-start": "minmax(0, 1fr)",
      },
    },
    ".timeline-vertical": {
      "flex-direction": "column",
      "> li": {
        "justify-items": "center",
        "--timeline-row-start": "minmax(0, 1fr)",
        "--timeline-row-end": "minmax(0, 1fr)",
        "> hr": {
          height: "100%",
          width: "calc(0.25rem * 1)",
          "&:first-child": { "grid-column-start": "2", "grid-row-start": "1" },
          "&:last-child": {
            "grid-column-start": "2",
            "grid-column-end": "auto",
            "grid-row-start": "3",
            "grid-row-end": "none",
          },
        },
      },
      ".timeline-start": {
        "grid-column-start": "1",
        "grid-column-end": "2",
        "grid-row-start": "1",
        "grid-row-end": "4",
        "align-self": "center",
        "justify-self": "flex-end",
      },
      ".timeline-end": {
        "grid-column-start": "3",
        "grid-column-end": "4",
        "grid-row-start": "1",
        "grid-row-end": "4",
        "align-self": "center",
        "justify-self": "flex-start",
      },
      "&:has(.timeline-middle)": {
        "> li": {
          "> hr": {
            "&:first-child": {
              "border-top-left-radius": "0",
              "border-top-right-radius": "0",
              "border-bottom-right-radius": "var(--radius-selector)",
              "border-bottom-left-radius": "var(--radius-selector)",
            },
            "&:last-child": {
              "border-top-left-radius": "var(--radius-selector)",
              "border-top-right-radius": "var(--radius-selector)",
              "border-bottom-right-radius": "0",
              "border-bottom-left-radius": "0",
            },
          },
        },
      },
      "&:not(:has(.timeline-middle))": {
        ":first-child": {
          "> hr:last-child": {
            "border-top-left-radius": "var(--radius-selector)",
            "border-top-right-radius": "var(--radius-selector)",
            "border-bottom-right-radius": "0",
            "border-bottom-left-radius": "0",
          },
        },
        ":last-child": {
          "> hr:first-child": {
            "border-top-left-radius": "0",
            "border-top-right-radius": "0",
            "border-bottom-right-radius": "var(--radius-selector)",
            "border-bottom-left-radius": "var(--radius-selector)",
          },
        },
      },
      "&.timeline-snap-icon": {
        "> li": {
          "--timeline-col-start": "minmax(0, 1fr)",
          "--timeline-row-start": "0.5rem",
        },
      },
    },
    ".timeline-horizontal": {
      "flex-direction": "row",
      "> li": {
        "align-items": "center",
        "> hr": {
          height: "calc(0.25rem * 1)",
          width: "100%",
          "&:first-child": { "grid-column-start": "1", "grid-row-start": "2" },
          "&:last-child": {
            "grid-column-start": "3",
            "grid-column-end": "none",
            "grid-row-start": "2",
            "grid-row-end": "auto",
          },
        },
      },
      ".timeline-start": {
        "grid-column-start": "1",
        "grid-column-end": "4",
        "grid-row-start": "1",
        "grid-row-end": "2",
        "align-self": "flex-end",
        "justify-self": "center",
      },
      ".timeline-end": {
        "grid-column-start": "1",
        "grid-column-end": "4",
        "grid-row-start": "3",
        "grid-row-end": "4",
        "align-self": "flex-start",
        "justify-self": "center",
      },
      "&:has(.timeline-middle)": {
        "> li": {
          "> hr": {
            "&:first-child": {
              "border-start-start-radius": "0",
              "border-end-start-radius": "0",
              "border-start-end-radius": "var(--radius-selector)",
              "border-end-end-radius": "var(--radius-selector)",
            },
            "&:last-child": {
              "border-start-start-radius": "var(--radius-selector)",
              "border-end-start-radius": "var(--radius-selector)",
              "border-start-end-radius": "0",
              "border-end-end-radius": "0",
            },
          },
        },
      },
      "&:not(:has(.timeline-middle))": {
        ":first-child": {
          "> hr:last-child": {
            "border-start-start-radius": "var(--radius-selector)",
            "border-end-start-radius": "var(--radius-selector)",
            "border-start-end-radius": "0",
            "border-end-end-radius": "0",
          },
        },
        ":last-child": {
          "> hr:first-child": {
            "border-start-start-radius": "0",
            "border-end-start-radius": "0",
            "border-start-end-radius": "var(--radius-selector)",
            "border-end-end-radius": "var(--radius-selector)",
          },
        },
      },
    },
  },
  ho = {
    ".breadcrumbs": {
      "max-width": "100%",
      "overflow-x": "auto",
      "padding-block": "calc(0.25rem * 2)",
      "> menu, > ul, > ol": {
        display: "flex",
        "min-height": "min-content",
        "align-items": "center",
        "white-space": "nowrap",
        "> li": {
          display: "flex",
          "align-items": "center",
          "> *": {
            display: "flex",
            cursor: "pointer",
            "align-items": "center",
            gap: "calc(0.25rem * 2)",
            "&:hover": {
              "@media (hover: hover)": { "text-decoration-line": "underline" },
            },
            "&:focus": {
              "outline-style": "none",
              "@media (forced-colors: active)": {
                outline: "2px solid transparent",
                "outline-offset": "2px",
              },
            },
            "&:focus-visible": {
              outline: "2px solid currentColor",
              "outline-offset": "2px",
            },
          },
          "& + *:before": {
            content: '""',
            "margin-right": "calc(0.25rem * 3)",
            "margin-left": "calc(0.25rem * 2)",
            display: "block",
            height: "calc(0.25rem * 1.5)",
            width: "calc(0.25rem * 1.5)",
            opacity: "40%",
            rotate: "45deg",
            "border-top": "1px solid",
            "border-right": "1px solid",
            "background-color": "#0000",
          },
          '[dir="rtl"] & + *:before': { rotate: "-135deg" },
        },
      },
    },
  },
  mo = {
    ".file-input": {
      cursor: ["pointer", "pointer"],
      border: "var(--border) solid #0000",
      display: "inline-flex",
      appearance: "none",
      "align-items": "center",
      "background-color": "var(--color-base-100)",
      "vertical-align": "middle",
      "webkit-user-select": "none",
      "user-select": "none",
      width: "clamp(3rem, 20rem, 100%)",
      height: "var(--size)",
      "padding-inline-end": "0.75rem",
      "font-size": "0.875rem",
      "line-height": 2,
      "border-start-start-radius": "var(--join-ss, var(--radius-field))",
      "border-start-end-radius": "var(--join-se, var(--radius-field))",
      "border-end-start-radius": "var(--join-es, var(--radius-field))",
      "border-end-end-radius": "var(--join-ee, var(--radius-field))",
      "border-color": "var(--input-color)",
      "box-shadow":
        "0 1px color-mix(in oklab, var(--input-color) calc(var(--depth) * 10%), #0000) inset, 0 -1px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset",
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      "--input-color":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      "&::file-selector-button": {
        "margin-inline-end": "calc(0.25rem * 4)",
        cursor: "pointer",
        "padding-inline": "calc(0.25rem * 4)",
        "webkit-user-select": "none",
        "user-select": "none",
        height: "calc(100% + var(--border) * 2)",
        "margin-block": "calc(var(--border) * -1)",
        "margin-inline-start": "calc(var(--border) * -1)",
        "font-size": "0.875rem",
        color: "var(--btn-fg)",
        "border-width": "var(--border)",
        "border-style": "solid",
        "border-color": "var(--btn-border)",
        "border-start-start-radius":
          "calc(var(--join-ss, var(--radius-field) - var(--border)))",
        "border-end-start-radius":
          "calc(var(--join-es, var(--radius-field) - var(--border)))",
        "font-weight": 600,
        "background-color": "var(--btn-bg)",
        "background-size": "calc(var(--noise) * 100%)",
        "background-image": "var(--btn-noise)",
        "text-shadow": "0 0.5px oklch(1 0 0 / calc(var(--depth) * 0.15))",
        "box-shadow":
          "0 0.5px 0 0.5px color-mix( in oklab, color-mix(in oklab, white 30%, var(--btn-bg)) calc(var(--depth) * 20%), #0000 ) inset, var(--btn-shadow)",
        "--size": "calc(var(--size-field, 0.25rem) * 10)",
        "--btn-bg": "var(--btn-color, var(--color-base-200))",
        "--btn-fg": "var(--color-base-content)",
        "--btn-border": "color-mix(in oklab, var(--btn-bg), #000 5%)",
        "--btn-shadow":
          "0 3px 2px -2px color-mix(in oklab, var(--btn-bg) 30%, #0000),\n      0 4px 3px -2px color-mix(in oklab, var(--btn-bg) 30%, #0000)",
        "--btn-noise": "var(--fx-noise)",
      },
      "&:focus": {
        "--input-color": "var(--color-base-content)",
        "box-shadow":
          "0 1px color-mix(in oklab, var(--input-color) 10%, #0000)",
        outline: "2px solid var(--input-color)",
        "outline-offset": "2px",
        isolation: "isolate",
      },
      "&:has(> input[disabled]), &:is(:disabled, [disabled])": {
        cursor: "not-allowed",
        "border-color": "var(--color-base-200)",
        "background-color": "var(--color-base-200)",
        "&::placeholder": {
          color:
            "color-mix(in oklab, var(--color-base-content) 20%, transparent)",
        },
        "box-shadow": "none",
        color: "color-mix(in oklch, var(--color-base-content) 20%, #0000)",
        "&::file-selector-button": {
          cursor: "not-allowed",
          "border-color": "var(--color-base-200)",
          "background-color": "var(--color-base-200)",
          "--btn-border": "#0000",
          "--btn-noise": "none",
          "--btn-fg":
            "color-mix(in oklch, var(--color-base-content) 20%, #0000)",
        },
      },
    },
    ".file-input-ghost": {
      "background-color": "transparent",
      transition: "background-color 0.2s",
      "box-shadow": "none",
      "border-color": "#0000",
      "&::file-selector-button": {
        "margin-inline-start": "calc(0.25rem * 0)",
        "margin-inline-end": "calc(0.25rem * 4)",
        height: "100%",
        cursor: "pointer",
        "padding-inline": "calc(0.25rem * 4)",
        "webkit-user-select": "none",
        "user-select": "none",
        "margin-block": "0",
        "border-start-end-radius":
          "calc(var(--join-ss, var(--radius-field) - var(--border)))",
        "border-end-end-radius":
          "calc(var(--join-es, var(--radius-field) - var(--border)))",
      },
      "&:focus, &:focus-within": {
        "background-color": "var(--color-base-100)",
        color: "var(--color-base-content)",
        "border-color": "#0000",
        "box-shadow": "none",
      },
    },
    ".file-input-neutral": {
      "--btn-color": "var(--color-neutral)",
      "&::file-selector-button": { color: "var(--color-neutral-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-neutral)" },
    },
    ".file-input-primary": {
      "--btn-color": "var(--color-primary)",
      "&::file-selector-button": { color: "var(--color-primary-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-primary)" },
    },
    ".file-input-secondary": {
      "--btn-color": "var(--color-secondary)",
      "&::file-selector-button": { color: "var(--color-secondary-content)" },
      "&, &:focus, &:focus-within": {
        "--input-color": "var(--color-secondary)",
      },
    },
    ".file-input-accent": {
      "--btn-color": "var(--color-accent)",
      "&::file-selector-button": { color: "var(--color-accent-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-accent)" },
    },
    ".file-input-info": {
      "--btn-color": "var(--color-info)",
      "&::file-selector-button": { color: "var(--color-info-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-info)" },
    },
    ".file-input-success": {
      "--btn-color": "var(--color-success)",
      "&::file-selector-button": { color: "var(--color-success-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-success)" },
    },
    ".file-input-warning": {
      "--btn-color": "var(--color-warning)",
      "&::file-selector-button": { color: "var(--color-warning-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-warning)" },
    },
    ".file-input-error": {
      "--btn-color": "var(--color-error)",
      "&::file-selector-button": { color: "var(--color-error-content)" },
      "&, &:focus, &:focus-within": { "--input-color": "var(--color-error)" },
    },
    ".file-input-xs": {
      "--size": "calc(var(--size-field, 0.25rem) * 6)",
      "font-size": "0.6875rem",
      "line-height": "1rem",
      "&::file-selector-button": { "font-size": "0.6875rem" },
    },
    ".file-input-sm": {
      "--size": "calc(var(--size-field, 0.25rem) * 8)",
      "font-size": "0.75rem",
      "line-height": "1.5rem",
      "&::file-selector-button": { "font-size": "0.75rem" },
    },
    ".file-input-md": {
      "--size": "calc(var(--size-field, 0.25rem) * 10)",
      "font-size": "0.875rem",
      "line-height": 2,
      "&::file-selector-button": { "font-size": "0.875rem" },
    },
    ".file-input-lg": {
      "--size": "calc(var(--size-field, 0.25rem) * 12)",
      "font-size": "1.125rem",
      "line-height": "2.5rem",
      "&::file-selector-button": { "font-size": "1.125rem" },
    },
    ".file-input-xl": {
      "padding-inline-end": "calc(0.25rem * 6)",
      "--size": "calc(var(--size-field, 0.25rem) * 14)",
      "font-size": "1.125rem",
      "line-height": "3rem",
      "&::file-selector-button": { "font-size": "1.375rem" },
    },
  },
  go = {
    ".dock": {
      position: "fixed",
      right: "calc(0.25rem * 0)",
      bottom: "calc(0.25rem * 0)",
      left: "calc(0.25rem * 0)",
      "z-index": 1,
      display: "flex",
      width: "100%",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "space-around",
      "background-color": "var(--color-base-100)",
      padding: "calc(0.25rem * 2)",
      color: "currentColor",
      "border-top":
        "0.5px solid color-mix(in oklab, var(--color-base-content) 5%, #0000)",
      height: ["4rem", "calc(4rem + env(safe-area-inset-bottom))"],
      "padding-bottom": "env(safe-area-inset-bottom)",
      "> *": {
        position: "relative",
        "margin-bottom": "calc(0.25rem * 2)",
        display: "flex",
        height: "100%",
        "max-width": "calc(0.25rem * 32)",
        "flex-shrink": 1,
        "flex-basis": "100%",
        cursor: "pointer",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        gap: "1px",
        "border-radius": "var(--radius-box)",
        "background-color": "transparent",
        transition: "opacity 0.2s ease-out",
        "&:where(.dock-active)": {
          "&:after": {
            content: '""',
            position: "absolute",
            height: "calc(0.25rem * 1)",
            width: "calc(0.25rem * 10)",
            "border-radius": "calc(infinity * 1px)",
            "background-color": "currentColor",
            bottom: "0.2rem",
            "border-top": "3px solid",
          },
        },
        "@media (hover: hover)": { "&:hover": { opacity: "80%" } },
        '&[aria-disabled="true"], &[disabled]': {
          "&, &:hover": {
            "pointer-events": "none",
            color:
              "color-mix(in oklab, var(--color-base-content) 10%, transparent)",
            opacity: "100%",
          },
        },
        ".dock-label": { "font-size": "0.6875rem" },
      },
    },
    ".dock-xs": {
      height: ["3rem", "calc(3rem + env(safe-area-inset-bottom))"],
      ".dock-active": { "&:after": { bottom: "-0.1rem" } },
      ".dock-label": { "font-size": "0.625rem" },
    },
    ".dock-sm": {
      height: [
        "calc(0.25rem * 14)",
        "3.5rem",
        "calc(3.5rem + env(safe-area-inset-bottom))",
      ],
      ".dock-active": { "&:after": { bottom: "-0.1rem" } },
      ".dock-label": { "font-size": "0.625rem" },
    },
    ".dock-md": {
      height: ["4rem", "calc(4rem + env(safe-area-inset-bottom))"],
      ".dock-label": { "font-size": "0.6875rem" },
    },
    ".dock-lg": {
      height: ["4.5rem", "calc(4.5rem + env(safe-area-inset-bottom))"],
      ".dock-active": { "&:after": { bottom: "0.4rem" } },
      ".dock-label": { "font-size": "0.6875rem" },
    },
    ".dock-xl": {
      height: ["5rem", "calc(5rem + env(safe-area-inset-bottom))"],
      ".dock-active": { "&:after": { bottom: "0.4rem" } },
      ".dock-label": { "font-size": "0.75rem" },
    },
  },
  vo = {
    ".badge": {
      display: "inline-flex",
      "align-items": "center",
      "justify-content": "center",
      gap: "calc(0.25rem * 2)",
      "border-radius": "var(--radius-selector)",
      "vertical-align": "middle",
      color: "var(--color-base-content)",
      border: "var(--border) solid var(--badge-color, var(--color-base-200))",
      "font-size": "0.875rem",
      width: "fit-content",
      "padding-inline": "calc(0.25rem * 3 - var(--border))",
      "background-size": "auto, calc(var(--noise) * 100%)",
      "background-image": "none, var(--fx-noise)",
      "background-color": "var(--badge-color, var(--color-base-100))",
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      height: "var(--size)",
      "&.badge-outline": {
        color: "var(--badge-color, var(--color-base-content))",
        "border-color": "currentColor",
        "background-color": "transparent",
        "background-image": "none",
        "box-shadow": "none",
      },
      "&.badge-dash": {
        color: "var(--badge-color, var(--color-base-content))",
        "background-color": "transparent",
        "border-style": "dashed",
        "background-image": "none",
        "box-shadow": "none",
      },
      "&.badge-soft": {
        color: "var(--badge-color, var(--color-base-content))",
        "background-color":
          "color-mix( in oklab, var(--badge-color, var(--color-base-content)) 8%, var(--color-base-100) )",
        "border-color":
          "color-mix( in oklab, var(--badge-color, var(--color-base-content)) 10%, var(--color-base-100) )",
        "background-image": "none",
        "box-shadow": "none",
      },
    },
    ".badge-primary": {
      "--badge-color": "var(--color-primary)",
      color: "var(--color-primary-content)",
    },
    ".badge-secondary": {
      "--badge-color": "var(--color-secondary)",
      color: "var(--color-secondary-content)",
    },
    ".badge-accent": {
      "--badge-color": "var(--color-accent)",
      color: "var(--color-accent-content)",
    },
    ".badge-neutral": {
      "--badge-color": "var(--color-neutral)",
      color: "var(--color-neutral-content)",
    },
    ".badge-info": {
      "--badge-color": "var(--color-info)",
      color: "var(--color-info-content)",
    },
    ".badge-success": {
      "--badge-color": "var(--color-success)",
      color: "var(--color-success-content)",
    },
    ".badge-warning": {
      "--badge-color": "var(--color-warning)",
      color: "var(--color-warning-content)",
    },
    ".badge-error": {
      "--badge-color": "var(--color-error)",
      color: "var(--color-error-content)",
    },
    ".badge-ghost": {
      "border-color": "var(--color-base-200)",
      "background-color": "var(--color-base-200)",
      color: "var(--color-base-content)",
      "background-image": "none",
      "box-shadow": "none",
    },
    ".badge-xs": {
      "--size": "calc(var(--size-selector, 0.25rem) * 4)",
      "font-size": "0.625rem",
      "padding-inline": "calc(0.25rem * 2 - var(--border))",
    },
    ".badge-sm": {
      "--size": "calc(var(--size-selector, 0.25rem) * 5)",
      "font-size": "0.75rem",
      "padding-inline": "calc(0.25rem * 2.5 - var(--border))",
    },
    ".badge-md": {
      "--size": "calc(var(--size-selector, 0.25rem) * 6)",
      "font-size": "0.875rem",
      "padding-inline": "calc(0.25rem * 3 - var(--border))",
    },
    ".badge-lg": {
      "--size": "calc(var(--size-selector, 0.25rem) * 7)",
      "font-size": "1rem",
      "padding-inline": "calc(0.25rem * 3.5 - var(--border))",
    },
    ".badge-xl": {
      "--size": "calc(var(--size-selector, 0.25rem) * 8)",
      "font-size": "1.125rem",
      "padding-inline": "calc(0.25rem * 4 - var(--border))",
    },
  },
  fo = {
    ".join": {
      display: "inline-flex",
      "align-items": "stretch",
      "--join-ss": "0",
      "--join-se": "0",
      "--join-es": "0",
      "--join-ee": "0",
      ":where(.join-item)": {
        "border-start-start-radius": "var(--join-ss, 0)",
        "border-start-end-radius": "var(--join-se, 0)",
        "border-end-start-radius": "var(--join-es, 0)",
        "border-end-end-radius": "var(--join-ee, 0)",
        "*": {
          "--join-ss": "var(--radius-field)",
          "--join-se": "var(--radius-field)",
          "--join-es": "var(--radius-field)",
          "--join-ee": "var(--radius-field)",
        },
      },
      "> .join-item:where(:first-child)": {
        "--join-ss": "var(--radius-field)",
        "--join-se": "0",
        "--join-es": "var(--radius-field)",
        "--join-ee": "0",
      },
      ":first-child:not(:last-child)": {
        ":where(.join-item)": {
          "--join-ss": "var(--radius-field)",
          "--join-se": "0",
          "--join-es": "var(--radius-field)",
          "--join-ee": "0",
        },
      },
      "> .join-item:where(:last-child)": {
        "--join-ss": "0",
        "--join-se": "var(--radius-field)",
        "--join-es": "0",
        "--join-ee": "var(--radius-field)",
      },
      ":last-child:not(:first-child)": {
        ":where(.join-item)": {
          "--join-ss": "0",
          "--join-se": "var(--radius-field)",
          "--join-es": "0",
          "--join-ee": "var(--radius-field)",
        },
      },
    },
    ".join-item": {
      "&:where(*:not(:first-child))": {
        "margin-inline-start": "calc(var(--border, 1px) * -1)",
        "margin-block-start": "0",
      },
    },
    ".join-vertical": {
      "flex-direction": "column",
      "> .join-item:first-child": {
        "--join-ss": "var(--radius-field)",
        "--join-se": "var(--radius-field)",
        "--join-es": "0",
        "--join-ee": "0",
      },
      ":first-child:not(:last-child)": {
        ".join-item": {
          "--join-ss": "var(--radius-field)",
          "--join-se": "var(--radius-field)",
          "--join-es": "0",
          "--join-ee": "0",
        },
      },
      "> .join-item:last-child": {
        "--join-ss": "0",
        "--join-se": "0",
        "--join-es": "var(--radius-field)",
        "--join-ee": "var(--radius-field)",
      },
      ":last-child:not(:first-child)": {
        ".join-item": {
          "--join-ss": "0",
          "--join-se": "0",
          "--join-es": "var(--radius-field)",
          "--join-ee": "var(--radius-field)",
        },
      },
      ".join-item": {
        "&:where(*:not(:first-child))": {
          "margin-inline-start": "0",
          "margin-block-start": "calc(var(--border, 1px) * -1)",
        },
      },
    },
    ".join-horizontal": {
      "flex-direction": "row",
      "> .join-item:first-child": {
        "--join-ss": "var(--radius-field)",
        "--join-se": "0",
        "--join-es": "var(--radius-field)",
        "--join-ee": "0",
      },
      ":first-child:not(:last-child)": {
        ".join-item": {
          "--join-ss": "var(--radius-field)",
          "--join-se": "0",
          "--join-es": "var(--radius-field)",
          "--join-ee": "0",
        },
      },
      "> .join-item:last-child": {
        "--join-ss": "0",
        "--join-se": "var(--radius-field)",
        "--join-es": "0",
        "--join-ee": "var(--radius-field)",
      },
      ":last-child:not(:first-child)": {
        ".join-item": {
          "--join-ss": "0",
          "--join-se": "var(--radius-field)",
          "--join-es": "0",
          "--join-ee": "var(--radius-field)",
        },
      },
      ".join-item": {
        "&:where(*:not(:first-child))": {
          "margin-inline-start": "calc(var(--border, 1px) * -1)",
          "margin-block-start": "0",
        },
      },
    },
  },
  ko = {
    ".rounded-box": { "border-radius": "var(--radius-box)" },
    ".rounded-field": { "border-radius": "var(--radius-field)" },
    ".rounded-selector": { "border-radius": "var(--radius-selector)" },
    ".rounded-t-box": {
      "border-top-left-radius": "var(--radius-box)",
      "border-top-right-radius": "var(--radius-box)",
    },
    ".rounded-b-box": {
      "border-bottom-left-radius": "var(--radius-box)",
      "border-bottom-right-radius": "var(--radius-box)",
    },
    ".rounded-l-box": {
      "border-top-left-radius": "var(--radius-box)",
      "border-bottom-left-radius": "var(--radius-box)",
    },
    ".rounded-r-box": {
      "border-top-right-radius": "var(--radius-box)",
      "border-bottom-right-radius": "var(--radius-box)",
    },
    ".rounded-tl-box": { "border-top-left-radius": "var(--radius-box)" },
    ".rounded-tr-box": { "border-top-right-radius": "var(--radius-box)" },
    ".rounded-br-box": { "border-bottom-right-radius": "var(--radius-box)" },
    ".rounded-bl-box": { "border-bottom-left-radius": "var(--radius-box)" },
    ".rounded-t-field": {
      "border-top-left-radius": "var(--radius-field)",
      "border-top-right-radius": "var(--radius-field)",
    },
    ".rounded-b-field": {
      "border-bottom-left-radius": "var(--radius-field)",
      "border-bottom-right-radius": "var(--radius-field)",
    },
    ".rounded-l-field": {
      "border-top-left-radius": "var(--radius-field)",
      "border-bottom-left-radius": "var(--radius-field)",
    },
    ".rounded-r-field": {
      "border-top-right-radius": "var(--radius-field)",
      "border-bottom-right-radius": "var(--radius-field)",
    },
    ".rounded-tl-field": { "border-top-left-radius": "var(--radius-field)" },
    ".rounded-tr-field": { "border-top-right-radius": "var(--radius-field)" },
    ".rounded-br-field": {
      "border-bottom-right-radius": "var(--radius-field)",
    },
    ".rounded-bl-field": { "border-bottom-left-radius": "var(--radius-field)" },
    ".rounded-t-selector": {
      "border-top-left-radius": "var(--radius-selector)",
      "border-top-right-radius": "var(--radius-selector)",
    },
    ".rounded-b-selector": {
      "border-bottom-left-radius": "var(--radius-selector)",
      "border-bottom-right-radius": "var(--radius-selector)",
    },
    ".rounded-l-selector": {
      "border-top-left-radius": "var(--radius-selector)",
      "border-bottom-left-radius": "var(--radius-selector)",
    },
    ".rounded-r-selector": {
      "border-top-right-radius": "var(--radius-selector)",
      "border-bottom-right-radius": "var(--radius-selector)",
    },
    ".rounded-tl-selector": {
      "border-top-left-radius": "var(--radius-selector)",
    },
    ".rounded-tr-selector": {
      "border-top-right-radius": "var(--radius-selector)",
    },
    ".rounded-br-selector": {
      "border-bottom-right-radius": "var(--radius-selector)",
    },
    ".rounded-bl-selector": {
      "border-bottom-left-radius": "var(--radius-selector)",
    },
  },
  xo = {
    ".glass": {
      border: "none",
      "backdrop-filter": "blur(var(--glass-blur, 40px))",
      "background-color": "#0000",
      "background-image":
        "linear-gradient(\n      135deg,\n      oklch(100% 0 0 / var(--glass-opacity, 30%)) 0%,\n      oklch(0% 0 0 / 0%) 100%\n    ),\n    linear-gradient(\n      var(--glass-reflect-degree, 100deg),\n      oklch(100% 0 0 / var(--glass-reflect-opacity, 5%)) 25%,\n      oklch(0% 0 0 / 0%) 25%\n    )",
      "box-shadow":
        "0 0 0 1px oklch(100% 0 0 / var(--glass-border-opacity, 20%)) inset,\n    0 0 0 2px oklch(0% 0 0 / 5%)",
      "text-shadow":
        "0 1px oklch(0% 0 0 / var(--glass-text-shadow-opacity, 5%))",
    },
  },
  wo = {
    ":root .prose": {
      "--tw-prose-body":
        "color-mix(in oklab, var(--color-base-content) 80%, #0000)",
      "--tw-prose-headings": "var(--color-base-content)",
      "--tw-prose-lead": "var(--color-base-content)",
      "--tw-prose-links": "var(--color-base-content)",
      "--tw-prose-bold": "var(--color-base-content)",
      "--tw-prose-counters": "var(--color-base-content)",
      "--tw-prose-bullets":
        "color-mix(in oklab, var(--color-base-content) 50%, #0000)",
      "--tw-prose-hr":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      "--tw-prose-quotes": "var(--color-base-content)",
      "--tw-prose-quote-borders":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      "--tw-prose-captions":
        "color-mix(in oklab, var(--color-base-content) 50%, #0000)",
      "--tw-prose-code": "var(--color-base-content)",
      "--tw-prose-pre-code": "var(--color-neutral-content)",
      "--tw-prose-pre-bg": "var(--color-neutral)",
      "--tw-prose-th-borders":
        "color-mix(in oklab, var(--color-base-content) 50%, #0000)",
      "--tw-prose-td-borders":
        "color-mix(in oklab, var(--color-base-content) 20%, #0000)",
      "--tw-prose-kbd":
        "color-mix(in oklab, var(--color-base-content) 80%, #0000)",
    },
  };
const yo = {
    svg: ({ addBase: o, prefix: r = "" }) => {
      o({ ...b(a, r) });
    },
    rootcolor: ({ addBase: o, prefix: r = "" }) => {
      o({ ...b(u, r) });
    },
    rootscrollgutter: ({ addBase: o, prefix: r = "" }) => {
      o({ ...b(p, r) });
    },
    properties: ({ addBase: o, prefix: r = "" }) => {
      o({ ...b(h, r) });
    },
    rootscrolllock: ({ addBase: o, prefix: r = "" }) => {
      o({ ...b(m, r) });
    },
    scrollbar: ({ addBase: o, prefix: r = "" }) => {
      o({ ...b(g, r) });
    },
  },
  zo = {
    kbd: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(v, r) });
    },
    dropdown: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(f, r) });
    },
    navbar: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(k, r) });
    },
    drawer: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(x, r) });
    },
    footer: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(w, r) });
    },
    tooltip: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(y, r) });
    },
    rating: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(z, r) });
    },
    calendar: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(C, r) });
    },
    radio: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(j, r) });
    },
    card: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(A, r) });
    },
    validator: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(E, r) });
    },
    loading: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b($, r) });
    },
    indicator: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(T, r) });
    },
    radialprogress: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(_, r) });
    },
    progress: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(N, r) });
    },
    chat: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(Y, r) });
    },
    countdown: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(q, r) });
    },
    input: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(B, r) });
    },
    alert: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(L, r) });
    },
    skeleton: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(M, r) });
    },
    toast: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(W, r) });
    },
    swap: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(S, r) });
    },
    checkbox: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(Z, r) });
    },
    label: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(X, r) });
    },
    diff: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(U, r) });
    },
    collapse: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(O, r) });
    },
    status: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(F, r) });
    },
    tab: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(H, r) });
    },
    carousel: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(V, r) });
    },
    toggle: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(R, r) });
    },
    mask: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(G, r) });
    },
    textarea: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(I, r) });
    },
    button: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(K, r) });
    },
    steps: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(Q, r) });
    },
    stat: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(D, r) });
    },
    link: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(J, r) });
    },
    table: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(P, r) });
    },
    list: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(oo, r) });
    },
    divider: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(ro, r) });
    },
    menu: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(eo, r) });
    },
    avatar: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(to, r) });
    },
    fieldset: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(ao, r) });
    },
    select: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(co, r) });
    },
    stack: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(io, r) });
    },
    filter: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(no, r) });
    },
    hero: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(lo, r) });
    },
    mockup: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(so, r) });
    },
    range: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(bo, r) });
    },
    modal: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(uo, r) });
    },
    timeline: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(po, r) });
    },
    breadcrumbs: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(ho, r) });
    },
    fileinput: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(mo, r) });
    },
    dock: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(go, r) });
    },
    badge: ({ addComponents: o, prefix: r = "" }) => {
      o({ ...b(vo, r) });
    },
  },
  Co = {
    join: ({ addUtilities: o, prefix: r = "" }) => {
      o({ ...b(fo, r) });
    },
    radius: ({ addUtilities: o, prefix: r = "" }) => {
      o({ ...b(ko, r) });
    },
    glass: ({ addUtilities: o, prefix: r = "" }) => {
      o({ ...b(xo, r) });
    },
    typography: ({ addUtilities: o, prefix: r = "" }) => {
      o({ ...b(wo, r) });
    },
  };
var jo = ((o, r = () => ({})) => {
  const e = (e) => ({ handler: o(e), config: r(e) });
  return (e.__isOptionsFunction = !0), e;
})(
  (o) =>
    ({ addBase: e, addComponents: a, addUtilities: c }) => {
      const { include: i, exclude: n, prefix: l = "" } = r(o, e, t, "5.0.0"),
        s = (o) =>
          i && n
            ? i.includes(o) && !n.includes(o)
            : i
            ? i.includes(o)
            : !n || !n.includes(o);
      Object.entries(yo).forEach(([o, r]) => {
        s(o) && r({ addBase: e, prefix: l });
      }),
        Object.entries(zo).forEach(([o, r]) => {
          s(o) && r({ addComponents: a, prefix: l });
        }),
        Object.entries(Co).forEach(([o, r]) => {
          s(o) && r({ addUtilities: c, prefix: l });
        });
    },
  () => ({ theme: { extend: e } })
);
export { jo as default };
//# sourceMappingURL=/sm/1c59b3f515aea66af1d0c226ec57a9cb678505ef9fa21ca058e8f3467db9dd10.map
