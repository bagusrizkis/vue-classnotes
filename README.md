# Vue Lifecycle + computed + watcher

## Vue Component

1. `beforeCreate()`
   - data / state belum ada
   - template element belum ada
2. `created()`
   - biasanya digunakan untuk cek localstorage / sessionstorage
   - data / state sudah ada
   - template element belum ada
3. `beforeMount()`
   - template / html sudah dicompile (di `$el`)
   - template belum di render
4. `mounted()`
   - template sudah dirender , data, event, method, dll udah siap
5. `beforeUpdate()`
6. `updated()`
7. `beforeDestroy()`
8. `destroyed()`

## Computed

- digunakan untuk mengolah data secara reactive
- sistem caching, hanya berubah ketika data asalnya berubah

```js
...
    computed: {
        namaDataComputed() {
            // kode jika ada
            return /* olahan data */
        }
    }
...
```

## watch

- wathing setiap perubahan pada state / data

```js
...
    watch: {
        namaState(valueBaru, valueLama) {
            // code yang dilakukan
        }
    }
...
```
