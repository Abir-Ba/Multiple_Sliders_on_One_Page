//Get All Sliders 
var sliders = document.querySelectorAll(".slider");

// Set Function to each Slider
for( let j=0; j<sliders.length;j++){
// Get All Slider Items
var sliderContainers = Array.from(sliders[j].querySelectorAll(' .slider-main .item'));
// Get Number of Items
var slidesCount = sliderContainers.length;
// Get Slider Width
let sliderWidth = sliders[j].clientWidth;
let index;
index = parseInt(sliders[j].getAttribute('data')) ;
let currentIndex  = index;
// Get Width of Each Item
let childWidth = sliderWidth / index ;
// Get Transform Translate Value
let transformTranslateX = 0;
// Set Width to All Items 
for(i=0;i<slidesCount;i++){
    sliderContainers[i].style.width = childWidth + 'px';
}










// Set slider-main Width 
let sliderMainWidth = childWidth * slidesCount + (slidesCount % index)* childWidth +130 ;
sliders[j].querySelector(".slider-main").style.width = sliderMainWidth +'px';

let nextButton = sliders[j].querySelector(".next");
let prevButton = sliders[j].querySelector(".prev");

nextButton.addEventListener("click", nextSlides);
prevButton.addEventListener("click",prevSlides);


let transform = childWidth*index + 17;
let sliderMain = sliders[j].querySelector('.slider-main');

controller();

function nextSlides(){
transformTranslateX+=transform;
sliderMain.style.transform = "translateX(-" + transformTranslateX+"px)";
console.log(transformTranslateX);
//sliderContainers[currentIndex-1].classList.remove('.currentSlide');
currentIndex+=index;
controller();
    

}

function prevSlides(){

transformTranslateX-=transform;
sliderMain.style.transform = "translateX(-" + transformTranslateX +"px)";
console.log(transformTranslateX);
currentIndex-=index;
controller();

}

function controller(){

console.log(currentIndex);
if(slidesCount % index == 0){
    if(currentIndex >= index *(Math.floor(slidesCount/index))+ index){
    sliderMain.style.transform = "translateX(-" +0+"px)";
    currentIndex = index ;
    transformTranslateX = 0;
   
}

if(currentIndex == 0 ){
        
    currentIndex = index * (slidesCount/index);
    sliderMain.style.transform = "translateX(-" +transform*(slidesCount/index -1 )+"px)";
    transformTranslateX = transform*(slidesCount/index -1 );
}
}else{
    if(currentIndex > index *(Math.floor(slidesCount/index))+ index){
        sliderMain.style.transform = "translateX(-" +0+"px)";
        currentIndex = index ;
        transformTranslateX = 0;
       
    }
    if(currentIndex == 0 ){
        
        currentIndex = index*(Math.floor(slidesCount/index)+1);
        sliderMain.style.transform = "translateX(-" +transform*(Math.floor(slidesCount/index))+"px)";
        transformTranslateX = transform*(Math.floor(slidesCount/index));
    }
   

}

}

}



