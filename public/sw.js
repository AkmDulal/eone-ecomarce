// console.warn("code is ready to run")

// let cacheData = "appV1"

// this.addEventListener("install",(event)=>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=>{
//             cache.addAll([
//                 "https://code.jquery.com/jquery-3.2.1.slim.min.js",
//                 "static/js/bundle.js"
//             ])
//         })
//     )
// })

// this.addEventListener("fetch",(event)=>{
//     event.respondWith(
//         caches.match(event.request).then((result)=>{
//             if(result){
//                 return result
//             }
//         })
//     )
// })