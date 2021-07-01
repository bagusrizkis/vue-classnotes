# Vue Router

Content:
- programatic navigation
- dynamic routing
- nested route
- additional: navigation guard

Jenis router:
- standart, import component di awal
- lazy load, import saat dibutuhkan

## Router Basic
- router-view:
container yang menampung page atau component pada vue,
halaman yang sudah diimport akan dirender pada `<router-view>`

```html
<Nav />
<router-view />
<Footer />
```

- router-link (deklaratif):
penulisan deklaratif dari pembuatan anchor `<a>` tapi tidak merefresh halaman

```html
<router-link to="/page-path" >Title<router-link>
<!-- dijadikan tag <a> -->
``` 

## Router Lanjutan
- programatic
```html
...
<a href="#" @click.prevent="toAbout">About<a>
...

<script>
...
    methods: {
        toAbout () {
            this.$router.push("/about").catch(() => {})
            // this.$router.push({name: "nama"})
        }
    }
...
</script>
```

- dinamic routing
misal untuk halaman detail
click lalu masuk ke detail
```js
// routes:
{
    path: "/detail/:id",
    name: "DetailMovie",
    component: DetailMovie,
}

// page
@click="detailPage(someId)"

// method
detailPage () {
    this.$router.push(`/detail/${id}`)
}
```

- mengambil data dari route
```js
this.$route

// param named id
this.$route.params.id
```

- nested routing
```js
children: [
    {...},
    {...}
]


<router-view>
```

- navigation guard