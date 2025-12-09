const xhr = new XMLHttpRequest();
xhr.addEventListener('load', ()=>{
  console.log('Response from backend:', xhr.response);
})
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
