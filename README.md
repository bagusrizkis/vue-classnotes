# Vue CLI

## Basic Vue-cli

1. Install Vue Cli secara global

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

2. Jalankan `vue create < . || nama-project >`

option:

- Please pick a preset: (Use arrow keys):
  > Manually select features
- Check the features needed for your project:
  > Choose Vue version, Babel, Router, Linter / Formater
- Choose a version of Vue.js that you want to start the project with (Use arrow keys)
  > 2.x
- Use history mode for router? (Requires proper server setup for index fallback in production)
  > Y
- Pick a linter / formatter config: (Use arrow keys)
  > ESLint + Standard config
- Pick additional lint features: (Press <space> to select, `<a>` to toggle all, `<i>` to invert selection)
  > Lint on save
- Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
  > In dedicated config files


3. jalankan app

```bash
npm run serve
```

## Review Component

### Basic Router

secara deklaratif:

```html
<!-- mirip seperti anchor, untuk mengarahkan -->
<!-- <router-link to=""></router-link> -->
<rotuer-link to="/path">Link1</router-link>
<rotuer-link :to="{ name: 'About' }">Link2</router-link>

<!-- tempat merender view -->
<router-view />
```

secara programatically:
```js
...
this.$router.push({ name: 'Home' })
...
```

### axios instance

pasang axios sebagai variable global

```js
import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.prototype.$axios = instance

new Vue({...})
```
