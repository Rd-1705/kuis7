const products = [{
    id: 1,
    name: "Laptop",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price: "Rp.8.000.000,00",
    desc: [
        "windows 11 home",
        "aaaa",
        "bbbb",
    ],

},
{
    id: 2,
    name: "Laptop",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price: "Rp.8.000.000,00",
    desc: [
        "windows 11 home",
        "aaaa",
        "bbbb",
    ],
},
{
    id: 3,
    name: "Laptop",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price: "Rp.8.000.000,00",
    desc: [
        "windows 11 home",
        "aaaa",
        "bbbb",
    ],
},
{
    id: 4,
    name: "Laptop",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price: "Rp.8.000.000,00",
    desc: [
        "windows 11 home",
        "aaaa",
        "bbbb",
    ],
},
]
products.map((produc) => {
    card(produc);
});

function card(produc) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let img = document.createElement('img');
    img.src = produc.image;
    let h1 = document.createElement('h1');
    h1.textContent = produc.name;
    let h2 = document.createElement('h2');
    h2.textContent = produc.price;
    let ul = document.createElement("ul");
    produc.desc.map((d) => {
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    let like = document.createElement('button');
    like.textContent = 'like';
    like.addEventListener('click',()=> alert('Anda menyukai product ini'));
    let buy = document.createElement('button');
    buy.textContent = 'Beli Sekarang';
    buy.addEventListener('click',()=> confirm('Apakah anda yakin membeli produk ini?'));
    let com = document.createElement('button');
    com.textContent = 'Komentar';
    com.addEventListener('click',()=> prompt('Tambahkan Komentar'));

    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(like);
    figcaption.appendChild(buy);
    figcaption.appendChild(com);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    content.appendChild(figure);
}
products.map((produc) => {
    card(produc);
})


