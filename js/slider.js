'use strict'

/**
 * @typedef {Object} Props
 * @param {Props} options
 * @property {string} preBtn    // className of sliders 'scroll to prev' button 
 * @property {string} nextBtn   // className of sliders 'scroll to next' button
 * @property {string} list      // className of sliders list
 * @property {string} item      // className of sliders item
 **/

const SLIDER_ITEMS_TO_SCROLL = 1;
const SLIDER_START_POSITION = 0;

export class Slider {
  constructor(options){
    this.position = SLIDER_START_POSITION;
    this.preBtn = document.querySelector(options.preBtn);
    this.nextBtn = document.querySelector(options.nextBtn);
    this.itemToScroll = options.scrollCount || SLIDER_ITEMS_TO_SCROLL;
    this.sliderList = document.querySelector(options.list);
    this.itemName = options.item;
    this.items = document.querySelectorAll(this.itemName);
    this.itemCount = this.items.length;
    this.itemWidth = this.sliderList.firstElementChild.offsetWidth;
    this.movePosition = this.itemToScroll * this.itemWidth;
  }

  addButtonsListener = () => {
    this.nextBtn.addEventListener('click', this.moveToNext);
    this.preBtn.addEventListener('click', this.moveToLeft)
  }

  moveToNext = () => {
    this.position -= this.movePosition;

    this.setPosition();
    this.checkButtons();
  }

  moveToLeft = () => {
    this.position += this.movePosition;

    this.setPosition();
    this.checkButtons();
  }

  setPosition = () => {
    this.sliderList.style.transform = `translateX(${this.position}px)`;
  }  
  
  checkButtons = () => {
    this.preBtn.disabled = this.position >= 0;
    this.nextBtn.disabled = this.position <= -(this.itemCount * this.itemWidth) / 2;
  }

  resize = () => {
    //values reconstruction as the window resizing

    this.position = SLIDER_START_POSITION;
    this.itemWidth = document.querySelector(this.itemName).offsetWidth;
    this.movePosition = this.itemToScroll * this.itemWidth; 
    this.setPosition();
    this.checkButtons();
  }
  
  start = () =>{
    this.resize();
    this.addButtonsListener();
    window.addEventListener('resize', this.resize)
  }
}
