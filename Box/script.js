document.addEventListener('scroll', function()
{
    const box = document.querySelector('.box');
    const scrollposition = window.scrollY;

    if (scrollposition > 100){
        //trigger point
        box.style.transform = 'rotate(360deg)';
    }
    else {
        box.style.transform = 'rotate(0deg)';
    }


});