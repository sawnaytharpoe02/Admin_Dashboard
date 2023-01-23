import './style.scss';
import 'animate.css';
import * as bootstrap from 'bootstrap';
import ApexCharts from 'apexcharts';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import Scrollbar from 'smooth-scrollbar';
import { showLoader, removeLoader } from './js/loader';
import { load, timing } from './js/function';

load(showLoader());
timing(removeLoader());

//scrollbar init
Scrollbar.init(document.querySelector('.dash-menu'));
Scrollbar.init(document.querySelector('.activity-list-control'));
Scrollbar.init(document.querySelector('.noti-lists'));

//dropdown menu
let toggler = document.querySelector('.dropdown-toggle');
let menu = document.querySelector('.dropdown-menu');
toggler.addEventListener('click', () => {
	menu.classList.toggle('slide');
});

// burger menu customize
let burger = document.querySelector('.burger');
let sideBar = document.querySelector('#side-bar');
burger.addEventListener('click', () => {
	sideBar.classList.toggle('show');
});

document.addEventListener('click', (e) => {
	if (e.target.id === 'side-bar') {
		sideBar.classList.remove('show');
	}
});

//full screen
const fullscreenIcon = document.querySelector('.bx-fullscreen');
const exitscreenIcon = document.querySelector('.bx-exit-fullscreen');

const elem = document.documentElement;
const screenTag = document.querySelector('.fullscreen');
let isFullscreen = false;

const swapFull = () => {
	fullscreenIcon.style.display = 'none';
	exitscreenIcon.style.display = 'block';
};

const swapExit = () => {
	exitscreenIcon.style.display = 'none';
	fullscreenIcon.style.display = 'block';
};
swapExit();

screenTag.addEventListener('click', () => {
	if (!isFullscreen) {
		setFullscreen();
		swapFull();
		return (isFullscreen = true);
	} else {
		exitFullscreen();
		swapExit();
		return (isFullscreen = false);
	}
});

function setFullscreen() {
	if (elem.requestFullscreen) {
		/* View in fullscreen */
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE11 */
		elem.msRequestFullscreen();
	}
}

function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		/* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		/* IE11 */
		document.msExitFullscreen();
	}
}

//adjust left side bar
const sideSwitch = document.querySelector('.slidebar-burger');
let dashMenu = document.querySelector('.dash-menu');
let mainSide = document.querySelector('#main-side');

sideSwitch.addEventListener('click', () => {
	sideBar.classList.toggle('close');
	mainSide.classList.toggle('close');

	if (sideBar.classList.contains('close')) {
		sideBar.style.height = mainSide.scrollHeight + 'px';
	} else {
		sideBar.style.height = '100%';
	}
});

//toggle theme
const toggleTheme = document.querySelector('.toggle-theme');
toggleTheme.addEventListener('click', () => {});

// column chart
let column = {
	series: [
		{
			name: 'Actual',
			data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
			color: '#727cf5',
		},
		{
			name: 'Projection',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 50, 100, 90],
			color: '#bccee440',
		},
	],
	chart: {
		type: 'bar',
		height: 300,
		stacked: true,
		toolbar: {
			show: false,
		},
		background: '#ffffff50',
	},
	grid: {
		borderColor: '#90A4AE10',
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '20%',
			endingShape: 'rounded',
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent'],
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
		labels: {
			style: {
				fontFamily: 'Raleway',
				fontSize: '13px',
			},
		},
	},

	yaxis: {
		showAlways: true,
		tickAmount: 6,
		labels: {
			style: {
				fontFamily: 'Raleway',
				fontSize: '13px',
			},
			formatter: function (val, index) {
				return val + 'k';
			},
		},
	},
	legend: {
		fontFamily: 'Raleway',
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		style: {
			fontFamily: 'Nunito',
		},
		y: {
			formatter: function (val) {
				return '$' + val + 'k';
			},
		},
	},
};
let columnChart = new ApexCharts(document.querySelector('#columnChart'), column);
columnChart.render();

// line chart
let line = {
	series: [
		{
			name: 'Current week',
			data: [10, 20, 15, 25, 20, 30, 20],
			color: '#727cf5',
		},
		{
			name: 'Previous week',
			data: [0, 15, 10, 30, 15, 35, 25],
		},
	],
	chart: {
		height: 400,
		type: 'line',
		zoom: {
			enabled: true,
		},
		toolbar: {
			show: false,
		},
		dropShadow: {
			enabled: true,
			top: '8',
			left: '-8',
			blur: '8',
			color: '#000',
			opacity: 0.2,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth',
	},

	grid: {
		row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0,
		},
		borderColor: '#90a4ae8',
	},
	xaxis: {
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		labels: {
			style: {
				fontFamily: 'Raleway',
			},
		},
		tooltip: {
			enabled: false,
		},
	},
	yaxis: {
		labels: {
			style: {
				fontFamily: 'Raleway',
				fontSize: '13px',
			},
			formatter: function (val, index) {
				return val + 'k';
			},
		},
	},
	tooltip: {
		marker: {
			show: true,
		},
		style: {
			fontFamily: 'Raleway',
		},
	},
	legend: {
		fontFamily: 'Raleway',
	},
};
let lineChart = new ApexCharts(document.querySelector('#lineChart'), line);
lineChart.render();

// map
new jsVectorMap({
	map: 'world',
	zoomOnScroll: false,
	selector: '#map',
	markers: [
		{
			name: 'United Kingdom',
			coords: [55.3781, 3.436],
		},
		{
			name: 'United States',
			coords: [37.0902, -95.7129],
		},
		{
			name: 'Japan',
			coords: [36.2048, 138.2529],
		},
		{
			name: 'Myanmar',
			coords: [21.9162, 95.956],
		},
	],

	markerStyle: {
		initial: {
			stroke: '#858cdb',
			strokeWidth: 4,
			fill: '#727cf5',
			fillOpacity: 1,
		},
		hover: {
			strokeWidth: 0,
		},
	},
});

//donut chart
let donut = {
	series: [44, 55, 13, 33],
	labels: ['Email', 'Affilliate', 'Sponsored', 'Direct'],

	chart: {
		type: 'donut',
		width: 280,
		offsetX: -28,
	},
	legend: {
		show: false,
	},
	tooltip: {
		style: {
			colors: '#fff',
			fontFamily: 'Raleway',
		},
	},

	responsive: [
		{
			breakpoint: 480,
			options: {
				chart: {
					offsetX: 0,
				},
			},
		},
	],
};
let donutChart = new ApexCharts(document.querySelector('#donutChart'), donut);
donutChart.render();
