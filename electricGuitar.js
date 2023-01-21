const cardCreator=document.querySelector(".functionalityStarts")

let arr=[{
    imageUrl:"https://www.adorama.com/images/product/sq371823006_1.jpg",
    name:"Squier Stratocaster Electric Guitar Pack with 10G Amplifier and Gig Bag, Black",
    price:269.99
},
{
    imageUrl:"https://www.adorama.com/images/product/sq371221502.jpg",
    name:"Squier FSR Bullet Competition Mustang Electric Guitar, Blue w/Ice Blue Stripes",
    price:189.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/sq371823006_1.jpg",
    name:"Fender American Professional II Stratocaster Electric Guitar, Maple, Dark Night",
    price:1699.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/ja2910138557.jpg",
    name:"Jackson JS Series Dinky Arch Top JS32 DKA Electric Guitar, Amaranth, Natural Oil",
    price:399.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/ev5107902503.jpg",
    name:"EVH Striped Series Stratocaster Electric Guitar, Gloss, Red with Black Stripes",
    price:1349.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/ja2918804587.jpg",
    name:"Jackson JS32Q DKA JS Series Dinky Arch Top Electric Guitar, Green Burst",
    price:399.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113900705.jpg",
    name:"Fender American Pro II Stratocaster Electric Guitar, Rosewood, Olympic White",
    price:1699.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113940755.jpg",
    name:"Fender American Pro II Telecaster Electric Guitar, Rosewood, Mercury",
    price:1699.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113900700.jpg",
    name:"Fender American Pro II Stratocaster Electric Guitar, Rosewood, 3-Color Sunburst",
    price:1699.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0141030340.jpg",
    name:"Fender Artist Series Kurt Cobain Jag-Stang Electric Guitar, Fiesta Red",
    price:1349.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/sq37803502.jpg",
    name:"Squier Affinity Series Stratocaster Electric Guitar, Maple, Lake Placid Blue",
    price:249.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113900755.jpg",
    name:"Fender American Professional II Stratocaster Electric Guitar, Rosewood, Mercury",
    price:1699.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/sq378002506.jpg",
    name:"Squier Affinity Series Stratocaster Electric Guitar, Maple, Black",
    price:249.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113902719.jpg",
    name:"Fender American Professional II Stratocaster Electric Guitar, Maple, Miami Blue",
    price:1699.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113902747.jpg",
    name:"Fender American Pro II Stratocaster Electric Guitar, Maple, Sienna Sunburst",
    price:1799.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113900719.jpg",
    name:"Fender American Pro II Stratocaster Electric Guitar, Rosewood, Miami Blue",
    price:1699.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0118062703.jpg",
    name:"Fender American Ultra Luxe Stratocaster Electric Guitar, Maple, 2-Color Sunburst",
    price:2599.99 
},
{
    imageUrl:"https://www.adorama.com/images/product/sq37823550.jpg",
    name:"Squier Affinity Series Telecaster Electric Guitar, Maple, Butterscotch Blonde",
    price:249.99 
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113902705.jpg",
    name:"Fender American Pro II Stratocaster Electric Guitar, Maple, Olympic White",
    price:1699.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113942700.jpg",
    name:"Fender American Pro II Telecaster Electric Guitar, Maple, 3-Color Sunburst",
    price:1699.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/fe0113902700.jpg",
    name:"Fender American Pro II Stratocaster Electric Guitar, Maple, 3-Color Sunburst",
    price:1699.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/ibgrx70qatbb.jpg",
    name:"Ibanez GIO GRX70QA Electric Guitar, Rosewood Fretboard, Transparent Blue Burst",
    price:199.99  
},
{
    imageUrl:"https://www.adorama.com/images/product/sq378000500.jpg",
    name:"Squier Affinity Series Stratocaster Electric Guitar, Laurel, 3-Color Sunburst",
    price:249.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/sq371220506.jpg",
    name:"Squier Bullet Mustang HH Electric Guitar, Indian Laurel Fingerboard, Black",
    price:199.99   
},
{
    imageUrl:"https://www.adorama.com/images/product/sq378153539.jpg",
    name:"Squier Affinity Series Stratocaster FMT HSS Electric Guitar, Maple, Black Burst",
    price:309.99   
}

]
// const select=document.querySelector("select")
// console.log(select.value)
document.querySelector("select").addEventListener('change',(e)=>{
    if(document.querySelector("select").value===''){
        window.location.reload()
        // console.log("invoke me")
        // renderCardlist(arr)
        // console.log(unsortedArr)
    }else if(document.querySelector('select').value==="Low to High"){
        // console.log('invoke me')
      let sortedArr = arr.sort((a,b)=>{
         return a.price-b.price
        })
        // console.log(sortedArr)
        renderCardlist(sortedArr)
        // console.log(sortedArr)
    }else if(document.querySelector("select").value==="High to Low"){
      let desArr =  arr.sort((a,b)=>{
           return b.price-a.price
        })
        renderCardlist(desArr)
    }
})
function renderCardlist(arr){
    cardCreator.innerHTML=""
    arr.forEach(el=>{
        const card=`
        <div class="card">
                            <div><img src=${el.imageUrl} alt="error"></div>
                            <p>${el.name}</p>
                            <p>Our Price</p>
                            <p>$${el.price}</p>
                            <button onclick="addtoCart(${el.name})">Add to Cart</button>
                            <p>In Stock</p>
                        </div>     
                `
                cardCreator.insertAdjacentHTML('beforeend',card)
    })
}
renderCardlist(arr)
function addtoCart(name){
    console.log(name)
}
    
