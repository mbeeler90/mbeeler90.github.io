const timeContainer = document.getElementById("time-container");
const CODING_DAY = "01-04-2020";
const CODING_DAY_DATE = new Date(CODING_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
	const now = new Date();
	const difference = Math.floor(
		(now.getTime() - CODING_DAY_DATE.getTime()) / 1000
	);

	document.getElementById('time-container').innerHTML = intlNumberFormatter.format(difference);
}, 1000);
