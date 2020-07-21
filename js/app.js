const dailyCanvas = document.getElementById("daily-chart");
const alertBanner = document.getElementById("alert");
const mobileCanvas = document.getElementById("mobile-chart");
const trafficCanvas = document.getElementById('traffic-chart');

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");



/* When button is clicked it toggles the button to show or hide*/
function myFunction() {
  document.getElementById("drop-first").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");



/* Loop through the elements */
for (let i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});

}






// highlite the active chart data menu

function active() {

var header = document.getElementById("traffic-nav");
var btns = document.getElementsByClassName("traffic-nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
};







// create the html for the banner
alertBanner.innerHTML =
`

		<div class="alert-banner">
			<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
				to complete</p>
				<p class="alert-banner-close">x</p>
		</div>
`

;

alertBanner.addEventListener('click', e => {
const element = e.target;

	if (element.classList.contains("alert-banner-close")) {
	alertBanner.style.display = "none";
	
		}
	});

/* chart widgets */

const monthlyData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthlyLabel = ["1800", "2470", "4500", "6750", "5000", "6350", "7880", "8000", "9000", "10000", "15000", "20000"];

const weeklyData = ["Week1", "Week2", "Week3", "Week4", "Week5"];
const weeklyLabel = ["100", "200", "150", "275", "500", "600", "700", "800", "900", "1000"];

const dayData = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dayLabel = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

const hourData = ["0100", "0200", "0300", "0400", "0500", "0600", "0700", "0800" ];
const hourLabel = ["1", "2", "1.75", "3.5", "2.8", "4.3", "6.4", "6.8", "9", "10"];



let trafficData = {


				/* data at bottom of chart  */
		labels: hourData,

		datasets: [{
						/* data on side of chart */
				data: hourLabel,
					backgroundColor: 'rgba(116, 119, 191, .3)',
						borderWidth: 1,
				}]


			};


function updateHour() {
					

					trafficChart.data.datasets[0].data = hourLabel;
					trafficChart.data.labels = hourData;
					trafficChart.update();
					active();

			};

function updateDaily() {

					trafficChart.data.datasets[0].data = dayLabel;
					trafficChart.data.labels = dayData;

					trafficChart.update();
					active();
			};


function updateWeekly() {

					trafficChart.data.datasets[0].data = weeklyLabel;
					trafficChart.data.labels = weeklyData;

					trafficChart.update();
					active();
			};

function updateMonthly() {

					trafficChart.data.datasets[0].data = monthlyLabel;
					trafficChart.data.labels = monthlyData;

					trafficChart.update();
					active();
			};





let trafficOptions = {
		aspectRatio: 3.5,
		animation: {
		duration: 1000
			},

		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display:false
		}
	};


let trafficChart = new Chart(trafficCanvas, {
		type: 'line', 
		data: trafficData,
		options: trafficOptions
	});













// data for daily traffic bar chart
const dailyData = {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
		}]
	};
const dailyOptions = {
		scales: {
		yAxes: [{
		ticks: {
		beginAtZero:true
		}
	}]
},

legend : {
display: false
	}
}


let dailyChart = new Chart(dailyCanvas, {
type: 'bar',
data: dailyData,
options: dailyOptions
});






const mobileData = {
		labels: ["Desktop", "Tablet", "Phones"],
		datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
		'#7477BF',
		'#78CF82',
		'#51B6C8'
		]
	}]
};


const mobileOptions = {
		legend: {
		position: 'right',
		labels: {
		boxWidth: 20,
		fontStyle: 'bold'
		}
	}
}




let mobileChart = new Chart(mobileCanvas, {
type: 'doughnut',
data: mobileData,
options: mobileOptions
});









send.addEventListener('click', () => {

		if (user.value === "" && message.value === "") {
			alert("Please fill out user and message fields before sending");
		}	else if (user.value === "" ) {
			    	alert("Please fill out user field before sending");
		}	else if (message.value === "" ) { 
						alert("Please fill out message field before sending");
		}		else { 
						alert("Message successfully sent to: " +user.value);
		}	

});


















