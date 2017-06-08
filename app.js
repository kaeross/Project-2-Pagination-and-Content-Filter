let studentList = $('.student-item');
const studentName = $('.student-item h3');
const studentEmail = $('.email');
const studentJoined = $('.date');
const studentArray = [];
let pageNum = 1;
let studentsPerPage = 10;
const numberOfPages = Math.ceil(studentList.length / studentsPerPage - 1);

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
		studentArray.push(studentList.splice(0, 10));
		for (let i = 0; i < numberOfPages; i+=1) {
			studentArray.push(studentList.splice(0, 10));
		}
	}
	$.each(studentArray[pageNum], showList);
	studentList = $('.student-item');
}            


//Create Pagination and append to student list
function writePage() {
	let paginationHTML = '<div class="pagination"><ul>';
	for (let i = 0; i <= numberOfPages; i+=1) {
		paginationHTML +='<li><a class="" href="#' + pageNum.toString() + '">' + pageNum.toString() + '</a></li>';
		pageNum += 1;
	}
	paginationHTML += '</ul></div>';
	return paginationHTML;
}
$('.student-list').append(writePage());
$('.pagination a').first('a').addClass('active');



//Pagination conected to "pages"
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