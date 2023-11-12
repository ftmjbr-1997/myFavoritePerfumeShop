let allProducts = [
    {
        id: 1, title: 'Baccarat Rouge', price: 645.00, img: ["Images/im1-1.jpg", "Images/im1-2.jpg", "Images/im1-3.jpg"],
        count: 1, src: "https://www.amazon.com/Baccarat-Maison-Francis-Kurkdjian-Parfum/dp/B01B7AP3RQ"
    },
    {
        id: 2, title: 'NINA RICCI - Premier Jour', price: 85.95, img: ["Images/im2-1.jpg", "Images/im2-2.jpg", "Images/im2-3.jpg", "Images/im2-4.jpg"],
        count: 1, src: "https://www.amazon.com/Nina-Ricci-Premier-Parfum-Spray/dp/B000JK4JLW"
    },
    {
        id: 3, title: 'KENZO - Kenzo Amour', price: 50.25, img: ["Images/im3-1.jpg", "Images/im3-2.jpg", "Images/im3-3.jpg", "Images/im3-4.jpg"],
        count: 1, src: "https://www.amazon.com/Kenzo-Amour-Women-Parfum-Spray/dp/B000XE4BFI?th=1"
    },
    {
        id: 4, title: 'cacharel - Eden', price: 57.00, img: ["Images/im4-1.jpg", "Images/im4-2.jpg", "Images/im4-3.jpg", "Images/im4-4.jpg"],
        count: 1, src: "https://www.amazon.com/Cacharel-Blossom-Andalwood-Patchouli-Pineapple/dp/B000JCDV5A?th=1"
    },
    {
        id: 5, title: 'Narciso Rodriguez Narciso Poudree', price: 85.59, img: ["Images/im5-1.jpg", "Images/im5-2.jpg", "Images/im5-3.jpg"],
        count: 1, src: "https://www.amazon.com/Narciso-Rodriguez-Poudree-Parfum-Spray/dp/B01DO4M2OA?th=1"
    },
    {
        id: 6, title: 'Burberry London', price: 125.00, img: ["Images/im6-1.jpg", "Images/im6-2.jpg", "Images/im6-3.jpg"],
        count: 1, src: "https://www.amazon.com/BURBERRY-London-Eau-Parfum-Women/dp/B00FBH5AXY?th=1"
    },
    {
        id: 7, title: 'Dior Addict EDP', price: 117.60, img: ["Images/im7-1.jpg", "Images/im7-2.jpg", "Images/im7-3.jpg", "Images/im7-4.jpg"],
        count: 1, src: "https://www.amazon.com/Dior-Addict-Christian-Women-Ounce/dp/B000C1UCCS?th=1"
    },
    {
        id: 8, title: 'Portrait of a Lady', price: 239.99, img: ["Images/im8-1.jpg", "Images/im8-2.jpg", "Images/im8-3.jpg", "Images/im8-4.jpg"],
        count: 1, src: "https://www.amazon.com/PORTRAIT-LADY-FREDERIC-MALLE-1-7oz/dp/B00JWNFENY?th=1"
    },
]

let containerElem = document.getElementById("allPro")
let cartElem = document.getElementById("cart")
let shoppingCartArrey = []


const createProductHandler = (product) => {
    containerElem.insertAdjacentHTML("afterbegin",
        `
<div class="col-lg-3 col-md-6 col-sm-6">
<div class="card px-4 border shadow-0 mb-4 mb-lg-0">
    <div class="mask px-2" style="height: 50px;">
        <a href="#"><i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i></a>
    </div>
    <a href=${product.src} target="-blank">
        <img src=${product.img[0]}
            class="card-img-top rounded-2" />
    </a>
    <div class="card-body d-flex flex-column pt-3 border-top">
        <a href="#" class="nav-link"> ${product.title} </a>
        <div class="price-wrap mb-2">
            <strong class="">$ ${product.price}</strong>
        </div>
        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto" onClick=addProductHandler(event)>
            <a href="#!" id=${product.id} class="btn btn-outline-primary w-100">Add to cart</a>
        </div>
    </div>
</div>
</div>
`)
}
const addProductHandler = (event) => {
    let mainProduct = allProducts.find(product => product.id == event.target.id)
    shoppingCartArrey.push(mainProduct)
    shoppingCartHandler(shoppingCartArrey)
    totalPriceHandler(shoppingCartArrey)

}
const shoppingCartHandler = (shoppingCartArrey) => {
    cartElem.innerHTML = ''
    shoppingCartArrey.forEach((product) => {
        cartElem.insertAdjacentHTML("beforeend",
            `
        <div class="row gy-3 mb-4">
        <div class="col-lg-5">
            <div class="me-lg-5">
                <div class="d-flex">
                    <img src=${product.img[0]}
                        class="border rounded me-3" style="width: 96px; height: 96px;" />
                    <div class="">
                        <p class="text-muted">${product.title}</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
            <div class="">
                <select style="width: 100px;" class="form-select me-4" id=${product.title} onChange=changeCountHandler(event)>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div class="">
                <text class="h6">$${product.price} </text> <br />
            </div>
        </div>
        <div
            class="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
            <div class="float-md-end">
                <a href="#!" class="btn btn-light border px-2 icon-hover-primary"><i
                        class="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                <a href="#!" class="btn btn-light border text-danger icon-hover-danger">
                    Remove</a>
            </div>
        </div>
    </div>
        `
        )

    })

}
const totalPriceHandler = (shoppingCartArrey) => {
    let totalPrice
    if (shoppingCartArrey.length == 1) {
        totalPrice = (shoppingCartArrey[0].price) * (shoppingCartArrey[0].count)
    } else {
        let sum
        totalPrice = shoppingCartArrey.reduce((prev, current) => {
            if (prev.price) {
                sum = ((prev.price * prev.count) + (current.price * current.count))
            } else {
                sum = prev + (current.price * current.count)
            }
            return sum
        })
    }
    allPrice.innerHTML = totalPrice.toFixed(2)
}
const changeCountHandler = (event) => {
    shoppingCartArrey.forEach((product) => {
        if (product.title.search(event.target.id) == 0) {
            product.count = event.target.value
        }
    })
    totalPriceHandler(shoppingCartArrey)
}


allProducts.forEach((product) => {
    createProductHandler(product)
})

