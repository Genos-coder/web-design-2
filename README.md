### Vite command

```

  npm create vite@latest . --template react-ts
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

```

- Update tailwindcss config

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

- Remove all css from index.css and add following

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

- Update App.jsx

```
function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default App;

```
