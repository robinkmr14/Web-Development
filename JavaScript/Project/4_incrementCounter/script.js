

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {

    counter.innerHTML = 0;
    
    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');

        const startingCount = Number(counter.innerHTML); 

        const increase = targetCount / 100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + increase)}`;
            setTimeout(updateCounter, 20);
        }else{
            counter.innerHTML = targetCount;
        }
    }
    updateCounter();
});