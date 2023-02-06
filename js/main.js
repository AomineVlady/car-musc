'use strict'
import { Slider } from "./slider.js";

AOS.init(); 

const burgerOpenButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger__menu');
const burgerCloseButton = burgerMenu.querySelector('.burger__close-button');

const mainSlider = new Slider({
  preBtn: '.slider__pre-button',
  nextBtn: '.slider__next-button',
  list: '.slider__list',
  item: '.slider-item',
});

const advantagesMiniSlider = new Slider({
  preBtn: '.mslider1-pre-button-js',
  nextBtn: '.mslider1-next-button-js',
  list: '.mslider1-list-js',
  item: '.mslider1-item-js',
});

const advMiniSlider = new Slider({
  preBtn: '.mslider2-pre-button-js',
  nextBtn: '.mslider2-next-button-js',
  list: '.mslider2-list-js',
  item: '.mslider2-item-js',
});

mainSlider.start();
advantagesMiniSlider.start();
advMiniSlider.start();


const burgerMenuClose = () => {
  burgerMenu.classList.remove('burger__menu--active');
  removeBurgerListener();
};

const burgerMenuOpen = () => {
  burgerMenu.classList.add('burger__menu--active');
  addBurgerListener();
};

const escCloseBurger = (e) => {
  if(e.key === 'Escape'){
    burgerMenuClose();
  }
}

const addBurgerListener = () => {
  burgerCloseButton.addEventListener('click', burgerMenuClose);
  document.addEventListener('keydown', escCloseBurger);
};

const removeBurgerListener = () => {
  burgerCloseButton.removeEventListener('click', burgerMenuClose);
  document.removeEventListener('keydown', escCloseBurger);
};

burgerOpenButton.addEventListener('click', burgerMenuOpen);
