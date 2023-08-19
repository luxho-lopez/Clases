document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( (entries) => {
        console.log(entries[0]);
        
        if(entries[0].isIntersecting === true) {
            console.log('Esta visible..')
        }
    });

    observer.observe(document.querySelector('.premium'));

});