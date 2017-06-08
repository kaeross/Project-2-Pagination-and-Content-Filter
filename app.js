let studentList = $('.student-item');
const studentName = $('.student-item h3');
const studentEmail = $('.email');
const studentJoined = $('.date');
const studentArray = [];
let pageNum = 1;
let studentsPerPage = 10;
const numberOfPages = Math.ceil(studentList.length / studentsPerPage - 1);
const pagination = $('.pagination');

function showList() {
	$(this).show();
} 

function hideList() {
	$(this).hide();
} 

let paginationNumber = pagination.find('a');

//on page load - hide all but first 10 students
$(document).ready(showPage(0));

//function to display 10 students according to which page number the student selected
function showPage(pageNum) {
	studentList.hide();

	//assign students to pages
	if (studentList.length != []) {
		studentArray.push(studentList.splice(0, 10));
		for (let i = 0; i < numberOfPages; i+=1) {
			studentArray.push(studentList.splice(0, 10));
		}
	}
	//show 10 students
	$.each(studentArray[pageNum], showList);

	//reset student list
	studentList = $('.student-item');
}            



function writePage() {
	let paginationHTML = '<div class="pagination"><ul>';
	for (let i = 0; i <= numberOfPages; i+=1) {
		paginationHTML +='<li><a class="" href="#' + pageNum.toString() + '">' + pageNum.toString() + '</a></li>';

		//if active addClass active 

		pageNum += 1;
	}
	paginationHTML += '</ul></div>';
	return paginationHTML;
}
$('.student-list').append(writePage());



//When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown.
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