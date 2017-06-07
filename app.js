const studentList = $('.student-item');
const studentName = $('.student-item h3');
const studentEmail = $('.email');
const studentJoined = $('.date');
const studentArray = [];
const page = [];
let studentsPerPage = 10;
const numberOfPages = Math.ceil(studentList.length / studentsPerPage - 1);

//on page load - hide all but first 10 students
$(document).ready(showPage(page, studentArray));

//function to display 10 students according to which page number the student selected
function showPage() {
	studentList.hide();

	
	studentArray.push(studentList.splice(0, 10));

	for (let i = 0; i < numberOfPages; i+=1) {
		page[i] = studentArray.push(studentList.splice(0, 10));
	}

//on click hide 1st 10 students when button 2 selected and show 2nd group

	$.each(studentArray[1], function() {
		$(this).show();
	});
}



function writePage() {
	for (let i = 0; i < numberOfPages.length; i+=1) {
		let pageNum = page[i];
		let pageListNum ='<li><a class="active" href="#">';
		pageListNum += 1;
		pageListNum += '</a></li>';
		page += 1;
		return pageListNum;
	}

}



// function appendPageLinks() {
// 	for (let i = 0; i < numberOfPages.length; i+=1) {

// 		$(this).append('<div class="pagination"><Page</div>');
// };

$('.student-list').append('<div class="pagination"><ul>' + 1 + '</ul></div>');

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