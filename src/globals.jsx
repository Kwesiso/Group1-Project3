import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    // Colors
    --color-primary-1: #153CF5;
    --color-secondary-1: #0423B2;
    --color-neutral-700: #05122E;
    --color-neutral-600: #1D2B3F;
    --color-neutral-500: #47505C;
    --color-neutral-400: #858C95;
    --color-neutral-300: #CED3D9;
    --color-neutral-100: #FAFAFC;
    --color-white: #FFFFFF;
      
    // Typography
    // Special text
    --display-1-sm: 80px;
    --line-height-display-3: 94px;
    --display-1-lg: 94px;

    --display-2-sm: 68px;
    --line-height-display-3: 76px;
    --display-2-lg: 76px;

    --display-3-sm: 32px;
    --line-height-display-3: 36px;
    --display-3-lg: 36px;

    // Rich text
    --heading-h1-sm: 50px;
    --line-height-h4: 70px;
    --heading-h1-lg: 58px;

    --heading-h2-sm: 36px;
    --line-height-h4: 48px;
    --heading-h2-lg: 40px;

    --heading-h3-sm: 26px;
    --line-height-h4: 32px;
    --heading-h3-lg: 30px;

    --heading-h4-sm: 22px;
    --line-height-h4: 25px;
    --heading-h4-lg: 25px;

    --heading-h5-sm: 18px;
    --heading-h5-lg: 20px;

    --heading-h6-sm: 16px;
    --heading-h6-lg: 18px;

    --paragraph-default-sm: 18px;
    --line-height-default-sm: 32px;
    --paragraph-default-lg: 30px;

    --paragraph-large-sm: 24px;
    --line-height-large-sm: 36px;
    --paragraph-large-lg: 36px;


    // Margin and padding
    --space-78: 78px;
    --space-72: 72px;
    --space-56: 56px; 
    --space-48: 48px;
    --space-38: 38px;
    --space-34: 34px;
    --space-32: 32px;
    --space-24: 24px;
    --space-20: 20px;
    --space-18: 18px;
    --space-16: 16px;
    --space10: 10px;

    // Max width
    --container-default-max-width: 1300px;
    --container-small-max-width: 540px;

    // Border radius
    --border-radius-sm: 10px;
    --border-radius-lg: 24px;

    // Font family
    --font-family: 'Plus Jakarta Sans', sans-serif;

    // sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px	@media (min-width: 1536px) { ... }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth !important;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    color: var(--color-neutral-500);
    font-size: var(--paragraph-default-sm);
    line-height: var(--line-height-default-sm);
    font-weight: 400;
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    border-radius: 5px;
    background: var(--bg-main);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border: 1px solid var(--bg-main);
    border-radius: 20px;
  }

  p {
    font-size: var(--p-font-size);
    line-height: var(--p-line-height);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-neutral-700);
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
