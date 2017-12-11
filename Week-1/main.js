var info = document.getElementById("author-info");

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

var myReq = new XMLHttpRequest();
myReq.open('GET', 'https://jsonplaceholder.typicode.com/posts');

request.onload = function() {
	var authorData = JSON.parse(request.responseText);
	
	myReq.onload = function() {
			var countData = JSON.parse(myReq.responseText);
			renderHtml(authorData, countData);
	};
	myReq.send();
};
request.send();

function renderHtml(data1, data2) {
	var authorString = "<ul>" ;
	for (i=0; i<data1.length; i++){
		authorString += "<li>" + data1[i].name + "  has post ";
		var counter =0;
		for(j=0; j<data2.length; j++) {
                if(data2[j].userId === data1[i].id)
                counter++; 
        }
		authorString += "count of  " + counter + "</li>";
	}
	authorString += "</ul>";
    info.insertAdjacentHTML('beforeend', authorString);
	
};