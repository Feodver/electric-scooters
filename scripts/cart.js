const cart = document.querySelector('.cart-items');
const cartItems = document.querySelectorAll('.cart-item');
const minusBtns = document.querySelectorAll('.btn-minus');
const plusBtns = document.querySelectorAll('.btn-plus');
const deleteBtns = document.querySelectorAll('.btn-delete');
const finalPrice = document.querySelector('.final-price');

minusBtns.forEach((btn) => {
	btn.addEventListener('click', function () {
		let quantity = this.nextSibling.nextSibling.lastChild.innerHTML;
		quantity <= 1 ? this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode): quantity--; 
		btn.nextSibling.nextSibling.lastChild.innerHTML = quantity;
		countFinalPrice();
	})
});
plusBtns.forEach((btn) => {
	btn.addEventListener('click', function () {
		btn.previousSibling.previousSibling.lastChild.innerHTML++;
		countFinalPrice();
	})
});
deleteBtns.forEach((btn) => {
	btn.addEventListener('click', function () {
		btn.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		countFinalPrice();
})
});

function countFinalPrice () {
	let countPrice = 0;
	let countQuantity = 0;
	for (let item of cart.children){
		let itemPrice = item.children[1].children[0].innerHTML.slice(0,-1);
		let itemQuantity = item.children[2].children[1].firstChild.innerHTML;
		countPrice += itemPrice * itemQuantity;
		countQuantity += parseInt(itemQuantity);
	}
	finalPrice.firstChild.innerHTML = countQuantity > 0 ? `In your cart: ${countQuantity} items for ${countPrice}$`: 'Your cart is empty!';
}