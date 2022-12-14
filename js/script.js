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
function showPage(list, page) {
startIndex = (page * 9) - 9;
endIndex = page * 9;
const studentList = document.querySelector('.student-list');
studentList.innerHTML = '';

for (let i = 0; i < list.length; i++ ) {
   if(i >= startIndex && i < endIndex){
   
   //Diplays this information for each student
   let studentInfo = `  <li class="student-item cf">
                        <div class="student-details">
                        <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
                        <h3>${list[i].name.first} ${list[i].name.last}</h3>
                        <span class="email">${list[i].email}</span>
                        </div>
                        <div class="joined-details">
                        <span class="date">Joined ${list[i].registered.date}</span>
                        </div>
                     </li>`;
                     studentList.insertAdjacentHTML('beforeend', studentInfo)
      }
   }
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
const numOfPages = Math.ceil( list.length / 9 );
const linkList = document.querySelector('ul.link-list');
linkList.innerHTML = '';

//Loops through the number of pages
for(let i = 1; i <= numOfPages; i++) {
   const button = `<li>
                  <button type='button'>${i}</button>
                  </li>`;
   linkList.insertAdjacentHTML('beforeend', button);
   //console.log(button)                  
   }
const firstButton = document.querySelector('.link-list button');
firstButton.className = 'active';

//Event Listener checkes for user clicks
linkList.addEventListener('click', (e) => {
   if( e.target.tagName === 'BUTTON' ) {
      let activeClass = document.querySelector('.active');
      activeClass.className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
   }
})

//Calling my functions
}
showPage(data, 1);
addPagination(data);