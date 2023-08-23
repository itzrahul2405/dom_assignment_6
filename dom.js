// // GETELEMENTBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[1].style.background = 'yellow';

// // li.style.backgroundColor = '#f4f4f4';    // it will not work because it is an html-collection(array)

// for (let i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }



// // li[2].style.backgroundColor = 'green';
// // for (let i=0;i<li.length;i++){
// //     li[i].style.fontWeight = 'bold';
// // }












// // QUERYSELECTOR (we can put anything here class,id,tag etc.) //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 8px #ccc';


// var input = document.querySelector('input');      // it will grab first one
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item');    // it will grab first one
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';











// // QUERYSELECTORALL  (we can put anything here class,id,tag etc.) //     

// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = 'Hello';


var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
    // odd[i].style.backgroundColor = '#f4f4f4';
    // even[i].style.backgroundColor = '#ccc';
}

item = document.querySelectorAll('li');
item[1].style.color = 'green';