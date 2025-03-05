  let mobile_menue=document.querySelector('.mobile-menue');
  let cross=document.querySelector('.cross');
  let humberger=document.querySelector('.humberger');


  const toggleIconHandler=(e)=>
  {

      cross.classList.toggle('hidden');
      humberger.classList.toggle('hidden');
      mobile_menue.classList.toggle('flex');
      mobile_menue.classList.toggle('hidden');

  }

  humberger.firstElementChild.addEventListener('click',toggleIconHandler);
  cross.firstElementChild.addEventListener('click',toggleIconHandler);


  
    