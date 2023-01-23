import '../style.scss';
import 'animate.css';
import Scrollbar from 'smooth-scrollbar';
import { showLoader, removeLoader } from '../js/loader';
import { load, timing } from '../js/function';
import DataTable from 'vanilla-datatables';
import * as bootstrap from 'bootstrap';

load(showLoader());
timing(removeLoader());

//scrollbar init
Scrollbar.init(document.querySelector('#content-scroll'));
Scrollbar.init(document.querySelector('#dashboard'));

var myTable = document.querySelector('#myTable');
new DataTable(myTable, {
	searchable: true,
	fixedHeight: true,
});
