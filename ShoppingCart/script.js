//  Elements
let product_list= document.getElementById('product_list');
let cart=document.getElementById('cart-list');

// Event listeners
product_list.addEventListener('click',getProduct);
cart.addEventListener('click',removeTask);
// Functions
function getProduct(e)
{
    if(e.target.id==="add-cart")
    {
        let row=e.target.parentElement.parentElement;
        let product_name=row.cells[0].innerText;
        let product_price=parseInt(row.cells[1].innerText);
        addToCart(product_name,product_price);
    }
}

function addToCart(name,price)
{
    let row=document.createElement('tr');
    let p_name= document.createElement('td');
    p_name.innerHTML=name;
    row.appendChild(p_name);


    let p_price=document.createElement('td');
    p_price.innerHTML=price;
    row.appendChild(p_price);


    let remove=document.createElement('td');
    let remove_btn=document.createElement('input');

    remove_btn.type="submit";
    remove_btn.value="Remove";
    remove_btn.id="remove";
    remove.appendChild(remove_btn);
    row.append(remove);

    cart.appendChild(row);
}

function removeTask(e){
    if(e.target.id==='remove')
    {
        let row=e.target.parentElement.parentElement;
        row.remove();
    }
}