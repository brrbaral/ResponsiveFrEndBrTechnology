//FOR COUNTER
const counters=document.querySelectorAll('.counter');
counters.forEach((indivCounter)=>{
    indivCounter.innerHTML='0';

    const updateCounter = () => {
        const targetCount=+indivCounter.getAttribute('data-target');
        const startingCount=Number(indivCounter.innerHTML);
        const incr=targetCount/100;

        if(startingCount < targetCount){
            indivCounter.innerHTML=`${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 100);
        }else {
            indivCounter.innerHTML=targetCount;
        }
    }
    updateCounter();
})

//**********FOR SCROLLING UP ***********
//get the button
mybutton=document.getElementById("myButton");
//when the user scrolls down 20px from the top of the document, show the button
window.onscroll=function (){
    scrollFunction()
};
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display="block";
    }else {
        mybutton.style.display="none";
    }
}

//when the user clicks on the botton, scroll to the top of the document
function topFunction() {
    document.body.scrollTop=0; //for safari
    document.documentElement.scrollTop=0; // for chrome, firefox, IE and Opera
}
