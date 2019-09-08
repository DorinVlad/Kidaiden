"use strict";
// Get Item from LocalStorage or itemsInCart === 0
var itemsInCart = localStorage.getItem("itemsInCart") || 0;
var addToCartBotton = document.getElementsByClassName("add-to-cart");
var cartCounter = document.getElementById("cart-count");



function cartIncrement() {
  itemsInCart++;
  localStorage.setItem("itemsInCart", itemsInCart);
  cartCounter.innerHTML = itemsInCart;
  this.innerHTML = "ITEM ADDED";
  this.style["background-color"] = "white";
  // var that = this;
  setTimeout(function() {
    // this.style["display"] = "none";
    // this.parentNode.parentNode.style["height"] = "274px";
    this.style.display = "none";
    this.parentNode.parentNode.style.height = "274px";
  }.bind(this), 1500);

}

function createEventListeners() {
  for (var i = 0; i < addToCartBotton.length; i++) {
    addToCartBotton[i].addEventListener("click", cartIncrement);
  }

  cartCounter.innerHTML = itemsInCart;

}

/* create event listeners when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners);
}