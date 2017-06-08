let studentList = $('.student-item');
const studentName = $('.student-item h3').text();
const studentEmail = $('.email');
const studentJoined = $('.date');
const studentArray = [];
const matched = [];
let pageNum = 1;
let studentsPerPage = 10;
const numberOfPages = Math.ceil(studentList.length / studentsPerPage - 1);
const searchButton = $('.student-search button');

function showList() {
	$(this).show();
} 

function hideList() {
	$(this).hide();
} 

//on page load - hide all but first 10 students
$(document).ready(showPage(0));

//Assign Students to pages and show according to page
function showPage(pageNum) {
	studentList.hide();
	if (studentList.length != []) {
		for (let i = 0; i < numberOfPages; i+=1) {
			studentArray.push(studentList.splice(0, 10));
		}
	}
	$.each(studentArray[pageNum], showList);
	studentList = $('.student-item');
}            


//Create Pagination and append to student list
function appendPageLinks() {
	let paginationHTML = '<div class="pagination"><ul>';
	for (let i = 0; i <= numberOfPages; i+=1) {
		paginationHTML +='<li><a class="" href="#' + pageNum.toString() + '">' + pageNum.toString() + '</a></li>';
		pageNum += 1;
	}
	paginationHTML += '</ul></div>';
	return paginationHTML;
}
$('.student-list').append(appendPageLinks());
$('.pagination a').first('a').addClass('active');



//Pagination connected to "pages"
const links = $('a');
links.on('click', function(e){
	let numButton = $(e.target).text();
	parseInt(numButton);
	if(links.siblings('.active')) {
		links.removeClass('active');
	}
	e.preventDefault();
	$(this).addClass('active');
	showPage(numButton -  1);
}); 

//Append search input to header
function searchBox() {
	   	let searchHTML = '<div class="student-search">';
        searchHTML += '<input placeholder="Search for students...">';
        searchHTML += '<button>Search</button>';
        searchHTML += '</div>';

        return searchHTML;
}
$('.page-header').append(searchBox());

// //Add search function
// function searchList() {

//     // Obtain the value of the search input

//     // remove the previous page link section    
//     // Loop over the student list, and for each student…
// // ...obtain the student’s name…
// // ...and the student’s email…
// // ...if the search value is found inside either email or name…
//             // ...add this student to list of “matched” student
//     // If there’s no “matched” students…
//            // ...display a “no student’s found” message
//     // If over ten students were found…
//            // ...call appendPageLinks with the matched students
//    // Call showPage to show first ten students of matched list
// }

//Add search function
function searchList() {
	//obtain value of search input
	let searchInput = $('.student-search > input').val().toUpperCase();
    console.log(searchInput);
	

    // for (var i = 0; i < studentList.length; i++) {
    // 		console.log(studentName);
    // }
}


$('.student-search button').on('click', searchList);

// $('.student-search button').on('click', function(){
// 	let searchInput = $('.student-search > input').val();
//     console.log(searchInput);
// });









