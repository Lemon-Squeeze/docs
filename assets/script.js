document.addEventListener('DOMContentLoaded', (event) => {
    const options = {method: 'GET', headers: {'X-API-KEY': 'a748e41815bc4a88b8276fd98d40eab6'}};

    fetch('https://public-api.birdeye.so/public/price?address=4yt66dkPkrZYMhmAHQnM7gKjAGBTXn1YkMco998i8pSk', options)
        .then(response => response.json())
        .then(response => {
            if(response.data) {
                const price = response.data.value;
                document.getElementById('tokenPrice').innerText = price.toFixed(8)+' $';
            }else {
                document.getElementById('tokenPrice').innerText = "---";
            }
        })
        .catch(err => console.error(err));
});