//Check if service worker is supported by the browser
if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Service Worker Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker registration failed!");
        console.log(error);
    });
}