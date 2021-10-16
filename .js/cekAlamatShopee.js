const fetch = require("node-fetch"); //Gunakan node-fetch@2.6

const cookie = ''; // Masukkan cookie setelah login shopee

const getMyAddress = () =>
    new Promise((resolve, reject) => {
        fetch("https://shopee.co.id/api/v1/addresses/", {
            headers: {
                cookie
            }
        })
            .then((res) => res.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });

const myAddress = async () => {
    const { addresses } = await getMyAddress();
    addresses.map((dataAdress, i) => {
        console.log(
            `\n[${i + 1}] => ${dataAdress.name}, ${dataAdress.phone}, ${dataAdress.address}`
        );
    });
}

myAddress()
