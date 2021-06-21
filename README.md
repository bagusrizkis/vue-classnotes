# Vue Component

## Basic Component

- Local registration

```js
const customButton = {
  template: `
    <button>Click Me</button>
    `,
};

new Vue({
  el: "#app",
  components: {
    "custom-buttom": customButton,
  },
});
```

```html
...
<custom-button></custom-button>
...
```

- global registration

```js
Vue.component("custom-button", {
  template: `
    <button>Click Me</button>
    `,
});
```

```html
...
<custom-button></custom-button>
...
```

## Single File Component

- component dalam bentuk file ber-ekstensi `.vue`

```vue
<template>...</template>
<script>
...
</script>
<style>
...;
</style>
```

### Memakai Bundler

1. Install bundler secara global: parcel

```bash
npm install -g parcel-bundler
```

2. Buat dasar struktur foldernya

```bash
.
├── index.html      # untuk html app
└── src             # folder untuk seluruh code vue
    ├── App.vue     # root component / entry point
    └── main.js     # render script
```

3. di `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vue with Parcel</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/src/main.js"></script>
  </body>
</html>
```

4. di `./src/App.vue`

```html
<template>
  <h1>{{ message }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello world",
      };
    },
  };
</script>

<style scoped></style>
```

5. di `./src/main.js`

```js
import Vue from "vue";
import App from "./App.vue";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

6. Jalankan bundler

```bash
parcel index.html
```

7. ignore `dist` dan `cache` dari version control

8. struktur folder tambahan

```bash
.
├── index.html      # untuk html app
└── src             # folder untuk seluruh code vue
    ├── views       # folder untuk halaman (selain views juga bisa pages)
    ├── components  # folder untuk komponen kecil / yang reusable
    ├── App.vue     # root component / entry point
    └── main.js     # render script
```

## Komunikasi Antar Komponen

- Props (Parent -> Children)
  dikirim lewat `:namaPropnya="valuenya"`
  diterima lewat `props`

- emit (Children -> Parent)
  children: `this.$emit("msgFromC", this.fromChildren);`
  parent: `@msgFromC="lakuinIni"`
