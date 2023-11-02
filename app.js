const navAdversite=document.querySelector('#nav_adversite')
const navSupports=document.querySelector('#nav_supports')
const adversite=document.querySelector('#adversite')
const support=document.querySelector('#support')
const home=document.querySelector('.home')
const contact=document.querySelector('.contact')
const body=document.querySelector('.body')

navAdversite.addEventListener("focusout", (e) => {
    adversite.classList.add('hidden')
    support.classList.add('hidden')
})
navSupports.addEventListener("focusout", (e) => {
    adversite.classList.add('hidden')
    support.classList.add('hidden')
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        // .preview_btn .next_btn
      },
     
  });

  

// navbar links

home.addEventListener('click', ()=>{
    adversite.classList.add('hidden')
    support.classList.add('hidden')
})
navAdversite.addEventListener('click', ()=>{
    adversite.classList.toggle('hidden')
    support.classList.add('hidden')
})
navSupports.addEventListener('click', ()=>{
    support.classList.toggle('hidden')
    adversite.classList.add('hidden')
})
const navAdd=document.querySelectorAll('#adversite li')
navAdd.forEach(link => {
   link.addEventListener('click', ()=>{
    adversite.classList.toggle('hidden')
   })
});
const navSupp=document.querySelectorAll('#support li')
navSupp.forEach(item => {
   item.addEventListener('click', ()=>{
    support.classList.toggle('hidden')
   }) 
});
contact.addEventListener('click', ()=>{
    adversite.classList.add('hidden')
    support.classList.add('hidden')
})
const addDropdown=document.querySelectorAll('.adversite li')
const suppDropdown=document.querySelectorAll('.support li')
addDropdown.forEach(link => {
    link.addEventListener('click', ()=>{
        adversite.classList.add('hidden')
        
    })
});
suppDropdown.forEach(link => {
    link.addEventListener('click', ()=>{
        support.classList.add('hidden')
        
    })
});
// modal links
const navModal=document.querySelector('.nav_modal')
const bars=document.querySelector('#bars')
const closeBtn=document.querySelector('#close')
const modalAdversite=document.querySelector('#modal_adversite')
const modalSupports=document.querySelector('#modal_supports')
const modalAdd=document.querySelector('#modal_add')
const modalSupp=document.querySelector('#modal_supp')
const modalHome=document.querySelector('.modal_home')
const modalContact=document.querySelector('.modal_contact')
const modalAdDrwn=document.querySelectorAll('#modal_add li')
const modalSupDrwn=document.querySelectorAll('#modal_supp li')
bars.addEventListener('click', ()=>{
    bars.classList.add('hidden')
    navModal.classList.remove('hidden')
    closeBtn.classList.remove('hidden')
})
closeBtn.addEventListener('click', ()=>{
    bars.classList.remove('hidden')
    navModal.classList.add('hidden')
    closeBtn.classList.add('hidden')
})
modalHome.addEventListener('click', ()=>{
    modalAdd.classList.add('hidden')
    modalSupp.classList.add('hidden')
})
modalAdversite.addEventListener('click', ()=>{
    modalAdd.classList.toggle('hidden')
    modalSupp.classList.add('hidden')
})
modalAdDrwn.forEach(link => {
    link.addEventListener('click', ()=>{
        modalAdd.classList.add('hidden') 
    })
});
modalAdversite.addEventListener("focusout", ()=>{
    modalSupp.classList.add('hidden')
    modalAdd.classList.add('hidden')
})
modalSupports.addEventListener("focusout", ()=>{
    modalSupp.classList.add('hidden')
    modalAdd.classList.add('hidden')
})
modalSupports.addEventListener('click', ()=>{
    modalAdd.classList.add('hidden')
    modalSupp.classList.toggle('hidden')
})
modalSupDrwn.forEach(link => {
   link.addEventListener('click', ()=>{
    modalSupp.classList.add('hidden')
   })
});
modalContact.addEventListener('click', ()=>{
    modalAdd.classList.add('hidden')
    modalSupp.classList.add('hidden')
})

// section8
const pluss1=document.querySelector('#plusIcon1')
const minuss1=document.querySelector('#minus_icon1')
const pluss2=document.querySelector('#plusIcon2')
const minuss2=document.querySelector('#minus_icon2')
const pluss3=document.querySelector('#plusIcon3')
const minuss3=document.querySelector('#minus_icon3')
const pluss4=document.querySelector('#plusIcon4')
const minuss4=document.querySelector('#minus_icon4')
const answer1=document.querySelector('.answer1')
const answer2=document.querySelector('.answer2')
const answer3=document.querySelector('.answer3')
const answer4=document.querySelector('.answer4')
pluss1.addEventListener('click', ()=>{
      minuss1.classList.remove('hidden')
      pluss1.setAttribute('class', 'hidden')
     answer1.classList.remove('hidden')
});
pluss2.addEventListener('click', ()=>{
    minuss2.classList.remove('hidden')
    pluss2.setAttribute('class', 'hidden')
    answer2.classList.remove('hidden')
});
pluss3.addEventListener('click', ()=>{
    minuss3.classList.remove('hidden')
    pluss3.setAttribute('class', 'hidden')
    answer3.classList.remove('hidden')
});
pluss4.addEventListener('click', ()=>{
    minuss4.classList.remove('hidden')
    pluss4.setAttribute('class', 'hidden')
    answer4.classList.remove('hidden')
});
minuss1.addEventListener('click', ()=>{
    minuss1.classList.add('hidden')
    pluss1.classList.remove('hidden')
    answer1.classList.add('hidden')
})
minuss2.addEventListener('click', ()=>{
    minuss2.classList.add('hidden')
    pluss2.classList.remove('hidden')
    answer2.classList.add('hidden')
})
minuss3.addEventListener('click', ()=>{
    minuss3.classList.add('hidden')
    pluss3.classList.remove('hidden')
    answer3.classList.add('hidden')
})
minuss4.addEventListener('click', ()=>{
    minuss4.classList.add('hidden')
    pluss4.classList.remove('hidden')
    answer4.classList.add('hidden')
})

//footer section
const ourLink1=document.querySelector('.our_link1 h3')
const ourLink2=document.querySelector('.our_link2 h3')
const ourLink3=document.querySelector('.our_link3 h3')
const ourLink4=document.querySelector('.our_link4 h3')

const none1=document.querySelector('.none1')
const none2=document.querySelector('.none2')
const none3=document.querySelector('.none3')
const none4=document.querySelector('.none4')

ourLink1.addEventListener('click', ()=>{
     none1.classList.toggle('none')
     none2.classList.add('none')
     none3.classList.add('none')
     none4.classList.add('none')
})
none1.addEventListener("focusout", ()=>{
    none1.classList.add('none')
})
ourLink2.addEventListener('click', ()=>{
    none2.classList.toggle('none')
    none3.classList.add('none')
     none4.classList.add('none')
     none1.classList.add('none')
})
none2.addEventListener("focusout", ()=>{
    none2.classList.add('none')
})
ourLink3.addEventListener('click', ()=>{
    none3.classList.toggle('none')
    none4.classList.add('none')
    none1.classList.add('none')
    none2.classList.add('none')
})
none3.addEventListener("focusout", ()=>{
    none3.classList.add('none')
})
ourLink4.addEventListener('click', ()=>{
    none4.classList.toggle('none')
    none1.classList.add('none')
    none2.classList.add('none')
    none3.classList.add('none')
})
none4.addEventListener("focusout", ()=>{
    none4.classList.add('none')
})