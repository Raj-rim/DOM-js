// const para=document.querySelector('body  h1');

// console.log(para);

// const paras=document.querySelectorAll('p');
// const eror=document.querySelectorAll('.error');

// paras.forEach((para)=>{
//     console.log(para);
// });
// console.log(eror);

// const title=document.getElementById('page-title');
// console.log(title);

// const errors=document.getElementsByClassName('error');
// console.log(errors);

// const paras=document.getElementsByTagName('p');
// console.log(paras);

// const para=document.querySelector('p');
//console.log(para.innerText);
//para.innerText='hello rim';

// const paras=document.querySelectorAll('p');
// paras.forEach((para)=>{
//   console.log(para.innerText);
//   para.innerText+=' new text';
// });

// const content =document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML+='<h2> hello rim </h2>';

// const people=['raj','rim','jeet'];

// people.forEach(person=>{
//     content.innerHTML+=`<p>${person}</p>`;
// })

// const link=document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://jhgsud.com');
// link.innerText='rim world';

// const msg=document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');

// msg.setAttribute('style','color:pink')

// const title=document.querySelector('h1');

//title.setAttribute('style','margin:50px;');

// console.log(title.style.color);
// title.style.margin='50px';
// title.style.color='crimson';
// title.style.fontSize='60px';
// title.style.margin='';

// const content =document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');mn

const paras=document.querySelectorAll('p');
paras.forEach(para=>{
  if(para.textContent.includes('error')){
    para.classList.add('error');
  }
  if(para.textContent.includes('success')){
    para.classList.add('success');
  }
})

const title=document.querySelector('.title');

title.classList.toggle('test');

