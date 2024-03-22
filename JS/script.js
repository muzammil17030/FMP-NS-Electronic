
const search = () =>{
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const product = document.querySelectorAll(".product");
	const pname = document.getElementsByTagName("h4");
	
		for(var i =0 ; i < pname.length ; i++)
		{
			let match = product[i].getElementsByTagName("h4")[0]; 
			if(match)
			{
				let textvalue = match.textContent || match.innerHTML
				if(textvalue.toUpperCase().indexOf(searchbox) > -1)
				{
					product[i].style.display ="";  
				}
				else{
					product[i].style.display ="none";
				}
			}
		}
	}



const responsiveNavbar = (function () {
	const button = document.querySelector("#menuButton");
	const navbar = document.querySelector("#navbar")
	button.addEventListener("click", function () {
		if (navbar.className === "navbar") {
			navbar.className += " navbarResponsive";
		}
		else {
			navbar.className = "navbar";
		}
	});
})();

if (document.getElementById('hearderSlide')) {
	$('#hearderSlide').multislider();
	$('#hearderSlide').multislider('pause');
}


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);