let i2=document.querySelector('.i2'),
    iframe=document.querySelector('iframe')

    i2.addEventListener('click',function () {
        this.previousElementSibling.classList.toggle('d-none');
        this.style.display='none'
    });


    const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 50);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

