var productNameInput=document.getElementById("nameInput")
var productPriceInput=document.getElementById("priceInput")
var productCategoryInput=document.getElementById("catigoryInput")
var productDescriptionInput=document.getElementById("descriptionInput")
productList=[];



if (localStorage.getItem("products")!=null) {
    productList=JSON.parse(localStorage.getItem("products"))
    display(); 
}



function addProduct(){

    if(validInput()==true){

        var product={

    name :  productNameInput.value ,
    price  :  productPriceInput.value ,
    category  :  productCategoryInput.value,
    description  :  productDescriptionInput.value ,
}
productList.push(product);

localStorage.setItem("products",JSON.stringify(productList));

clear();

display();
}
else{
   window.alert("invalid name");
}
    }





function clear() {
        productCategoryInput.value=""
        productNameInput.value=""
        productPriceInput.value=""
        productDescriptionInput.value=""
    }


function display(){

var cartona=``;

for(var i=0; i<productList.length ; i++){

cartona+=`
<tr>
<td>`+i+`</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td>
               <button  class="btn btn-warning">Update</button>
          </td>
            <td>
            <button onclick="deleteprod (`+i+`)" class="btn btn-danger">Delete</button>
       </td>

    </tr>

`


}
document.getElementById('tableBody').innerHTML=cartona;
}



function deleteprod(index){

productList.splice(index,1);

localStorage.setItem("products",JSON.stringify(productList));
display();


}



function SearchProd(term) {
        var cartona=``;
        for (var i = 0; i < productList.length; i++) {
    
           if (productList[i].name .toLowerCase().includes(term.toLowerCase())==true) {
            cartona+= `<tr>
            <td>`+i+`</td>
            <td>`+productList[i].name+`</td>
            <td>`+productList[i].price+`</td>
            <td>`+productList[i].category+`</td>
            <td>`+productList[i].description+`</td>
            <td>
            <button onclick="deleteprod (`+i+`)" class="btn btn-danger">Delete</button>
        </td>
            <td>
            <button  class="btn btn-warning">Update</button>
        </td>
        
            
            </tr>`
           }
            
        }
        document.getElementById("tableBody").innerHTML=cartona;
    }





function validInput(){

var regex=/^[A-Z][a-z]{3,8}$/;
if (regex.test(productNameInput.value)==true){

return true;

}
else{
    return false ;
}

}































// if (localStorage.getItem("products")!=null) {
//     productlist=JSON.parse(localStorage.getItem("products"))
//     display() 
// }

// function addProduct() {
//    var product= {
// name:productNameInput.Value,
// price:productPriceInput.value ,
// category:productCategoryInput.value,
// description:productDescriptionInput.value,

//     }
//     productlist.push(product)
//    localStorage.setItem("products" ,JSON.stringify(productlist))
//     clear();
//     display() 
// }


// function clear() {
//     productCategoryInput.value=""
//     productNameInput.value=""
//     productPriceInput.value=""
//     productDescriptionInput.value=""
// }
// function display() {
//     var cartona=``
//     for (var i = 0; i < productlist.length; i++) {
//         cartona+= `<tr>
//         <td>`+i+`</td>
//         <td>`+productlist[i].name+`</td>
//         <td>`+productlist[i].price+`</td>
//         <td>`+productlist[i].category+`</td>
//         <td>`+productlist[i].description+`</td>
//         <td>
//         <button  class="btn btn-warning">Update</button>
//     </td>
//     <td>
//         <button onclick="deleteprod (`+i+`)" class="btn btn-danger">Delete</button>
//     </td>
        
//         </tr>`
       
        
//     }
//     document.getElementById("tableBody").innerHTML=cartona;
    
// }
// function deleteprod (index) {
// productlist.splice(index,1)
// localStorage.setItem("products" ,JSON.stringify(productlist))
// display()
    
// }

// function Searchfun(term) {
//     var cartona=``
//     for (var i = 0; i < productlist.length; i++) {

//        if (productlist[i].name .toLowerCase().includes(term.toLowerCase())==true) {
//         cartona+= `<tr>
//         <td>`+i+`</td>
//         <td>`+productlist[i].name+`</td>
//         <td>`+productlist[i].price+`</td>
//         <td>`+productlist[i].category+`</td>
//         <td>`+productlist[i].description+`</td>
//         <td>
//         <button  class="btn btn-warning">Update</button>
//     </td>
//     <td>
//         <button onclick="deleteprod (`+i+`)" class="btn btn-danger">Delete</button>
//     </td>
        
//         </tr>`
//        }
        
//     }
//     document.getElementById("tableBody").innerHTML=cartona;
// }