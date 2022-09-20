const data = [

    {
        id:"1",
        tittle:"Moto G22 128 GB iceberg blue 4 GB RAM",
        price:43239,
        img1:"/imgPhone/phone1.1.webp",
        img2:"/imgPhone/phone1.2.webp",
        img3:"/imgPhone/phone1.3.webp",
        stock:10,
        initial:1
    },
    {
        id:"2",
        tittle:"Konka Indus Dual SIM 32 GB negro 3 GB RAM",
        price:26399,
        img1:"/imgPhone/phone2.1.webp",
        img2:"/imgPhone/phone2.2.webp",
        img3:"/imgPhone/phone2.3.webp",
        stock:31,
        initial:1
    },
    {
        id:"3",
        tittle:"Samsung Galaxy A32 128 GB awesome blue 4 GB RAM",
        price:75999,
        img1:"/imgPhone/phone3.1.webp",
        img2:"/imgPhone/phone3.2.webp",
        img3:"/imgPhone/phone3.3.webp",
        stock:14,
        initial:1
    }    
]  

export default function getItems(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}