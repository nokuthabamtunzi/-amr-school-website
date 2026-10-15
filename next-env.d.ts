@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --sky-500: #0ea5e9;
  --sky-600: #0284c7;
  --sky-50: #f0f9ff;
  --slate-900: #0f172a;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-inter), sans-serif;
  background: #ffffff;
  color: #0f172a;
}

h1, h2, h3, h4 {
  font-family: var(--font-poppins), var(--font-nunito), sans-serif;
}

img {
  max-width: 100%;
}

input, textarea, select, button {
  font: inherit;
}
