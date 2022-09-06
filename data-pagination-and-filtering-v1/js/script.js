/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

let itemsPerPage = 9

function showPage(list, page){
   let startIndex = (page * itemsPerPage) - itemsPerPage
   let endIndex = page * itemsPerPage
   let studentList = document.querySelector('ul.student-list')
   studentList.innerHTML = ''
   for(let i = 0; i < list.length; i++){
      if(i >= startIndex && i < endIndex){
         studentList.innerHTML += `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>`
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   let pageButtons = Math.ceil(list.length / itemsPerPage);
   let linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
   for (let i = 0; i < pageButtons; i++){
      linkList.innerHTML += `
         <li>
            <button type="button">${i+1}</button>
         </li>`
   }
   let firstChild = document.querySelector('ul.link-list li:first-child button');
   firstChild.className = 'active';

   linkList.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() === 'button') {
         let allButtons = document.querySelectorAll("ul.link-list li button");
         Array.from(allButtons).forEach(function(button) {
            button.classList.remove('active');
         })
         e.target.classList.add('active');
         let index = parseInt(e.target.innerHTML);
         showPage(data, index);
      }
   })
}

// Call functions
showPage(data, 1);
addPagination(data);