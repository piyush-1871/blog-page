let scrollPercentage = ()=>{
    let scrollProgress = document.getElementById('percent-scroll-container');
    let progressValue = document.getElementById('percent-scroll-display');
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(calcHeight);
    console.log(document.documentElement.scrollHeight);
    let scrollValue = Math.round(pos*100/calcHeight);

    // console.log(scrollValue);
    // scrollProgress.style.background= ;
    progressValue.style.backgroundColor = "orange"; 
    progressValue.textContent = scrollValue + "%";
}


window.onscroll = scrollPercentage;