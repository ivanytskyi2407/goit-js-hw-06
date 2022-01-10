const listWithId = document.querySelector('#categories');
const listEl = listWithId.querySelectorAll('.item');
console.log(`Number of categories: ${listEl.length}`);
[...listEl].map(el => { 
    console.log(`Category:`, el.querySelector('h2').textContent);
    console.log(`Elements:`, el.querySelectorAll('li').length);
});