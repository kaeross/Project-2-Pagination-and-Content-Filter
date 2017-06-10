let studentList = $('.student-item');
const studentName = $('.student-item h3');
const studentEmail = $('.email');
const studentJoined = $('.date');
let studentArray = [];
let pageNum = 1;
const studentsPerPage = 10;
const numberOfPages = Math.ceil(studentList.length / studentsPerPage -1);
let matched = [];
let numberOfPagesMatched;
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
	//stores arrays of 10 students within another array
	if (studentList.length != []) {
		//push 1st 10 students into new array
		studentArray.push(studentList.splice(0, 10));
		//every 10 push next group into array
		for (let i = 0; i < numberOfPages; i+=1) {
			studentArray.push(studentList.splice(0, 10));
		}
	}
	//calls relevant student array
	$.each(studentArray[pageNum], showList);

	//reset student list so can be hidden next time function is run
	studentList = $('.student-item');
}            


//Create Pagination and append to student list
function appendPageLinks(pageSource) {
	let paginationHTML = '<div class="pagination"><ul>';
	//loop creates each page number
	for (let i = 0; i <= pageSource; i+=1) {
		paginationHTML +='<li><a class="" href="#">' + pageNum + '</a></li>';
		pageNum += 1;
	}
	paginationHTML += '</ul></div>';
	return paginationHTML;
}
$('.student-list').append(appendPageLinks(numberOfPages));
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

	//call showPage
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


function notFound() {
	let notFoundText = '<div class="not-found"><h2>NO STUDENTS FOUND</h2></div>';
	return notFoundText;
}

//Add search function
function searchList() {
	//clear matched if searchList has already been called
	matched = [];
	studentArray = [];
	//obtain value of search input
	let searchInput = $('.student-search > input');
	let searchInputVal = searchInput.val().toUpperCase();
	console.log(searchInputVal);

	// remove the previous page link section 
	$('.pagination').remove();
	$('.student-item').hide();

	//if search has already been performed and no results, remove .not-found so does not show twice
	if ($('.not-found').is(":visible")) {
		$('.not-found').remove();
	}

	// Loop over the student list and check if student name or email contains search query
	for (let i = 0; i < studentList.length; i++) {
		//If the search value is found inside either email or name 
		if(studentName[i].innerHTML.toUpperCase().indexOf(searchInputVal) > -1 || studentEmail[i].innerHTML.toUpperCase().indexOf(searchInputVal) > -1){
			// ...add this student to list of “matched” student
			// matched.push(studentList[i]);
			matched.push(studentList[i]);
		} 
	} 

	if (matched.length === 0) {
		$('.student-list').prepend(notFound);
		$('.not-found').css({'margin': '2em', 'text-align': 'center', 'font-size': '1em','padding': '3em 0'});
		searchInput.val('');
	} else {
		console.log(matched);
		if (matched.length < 10) {
			for (let i = 0; i < matched.length; i++) {
				$.each(matched, showList);
			}
		} else {
			//reset page number
			pageNum = 1;
			function showSearch(pageNum) {
				studentList.hide();
				numberOfPagesMatched = Math.ceil(matched.length / studentsPerPage -1);
				console.log(numberOfPagesMatched);
				studentArray.push(matched.splice(0,10));
				if (matched.length > 10) {
					for(let i = 0; i < numberOfPagesMatched; i+=1) {
						studentArray.push(matched.splice(0,10));
					}
				}
				$.each(studentArray[pageNum], showList);
				studentList = $('.student-item');

			}
			
			showSearch(0);
			$('.student-list').append(appendPageLinks(numberOfPagesMatched));
			$('.pagination a').first('a').addClass('active');
			const searchLinks = $('a');
			searchLinks.on('click', function(e){
				let numButton = $(e.target).text();
				parseInt(numButton);
				if(searchLinks.siblings('.active')) {
					searchLinks.removeClass('active');
				}
				e.preventDefault();
				$(this).addClass('active');

				//call showPage
				showSearch(numButton -  1);
			}); 
		}
	}
}


$('.student-search button').on('click', searchList);



