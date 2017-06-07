const studentList = $('.student-item');
const studentName = $('.student-item h3');
const studentEmail = $('.email');
const studentJoined = $('.date');
const studentArray = [];
let pageNum = 1;
const page = [];
let studentsPerPage = 10;
const numberOfPages = Math.ceil(studentList.length / studentsPerPage - 1);
const pagination = $('.pagination');

//on page load - hide all but first 10 students
$(document).ready(showPage(0));

//function to display 10 students according to which page number the student selected
function showPage(pageNum) {
		studentList.hide();

	//assign students to pages
	studentArray.push(studentList.splice(0, 10));
	for (let i = 0; i < numberOfPages; i+=1) {
		page[i] = studentArray.push(studentList.splice(0, 10));
	}
//on load show first 10 students
	$.each(studentArray[pageNum], function() {
		$(this).show().addClass('onPage');
	});


//on click hide 1st 10 students when button 2 selected and show 2nd group


}

pagination.on("click", function() {
	if (studentList.hasClass('onPage')) {
		$(this).hide();}
	$(document).showPage(4);
});

function writePage() {
	let paginationHTML = '<div class="pagination"><ul>';
	for (let i = 0; i <= numberOfPages; i+=1) {
		paginationHTML +='<li><a class="active" href="page_' + pageNum + '">' + pageNum + '</a></li>';
		pageNum += 1;
	}
	paginationHTML += '</ul></div>';
	return paginationHTML;
}


// page x studentArray[x-1];


// function appendPageLinks() {
// 	for (let i = 0; i < numberOfPages.length; i+=1) {

// 		$(this).append('<div class="pagination"><Page</div>');
// };

$('.student-list').append(writePage());

//add pagination with following markup
      // <div class="pagination">
      //   <ul>
      //     <li>
      //       <a class="active" href="#">1</a>
      //     </li>
      //      <li>
      //       <a href="#">2</a>
      //     </li>
      //      <li>
      //       <a href="#">3</a>
      //     </li>
      //      <li>
      //       <a href="#">4</a>
      //     </li>
      //      <li>
      //       <a href="#">5</a>
      //     </li>
      //   </ul>
      // </div>

//Calculate number of pages needed and add appropriate links

//When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. 