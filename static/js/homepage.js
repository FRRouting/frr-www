function setCookie(name,value,days) {
	let expires = "";
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
	let nameEQ = name + "=";
	let ca = document.cookie.split(';');
	for(let i = 0;i < ca.length;i++) {
		let c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

const protocols = [
	'BGP',
	'OSPFv2',
	'OSPFv3',
	'RIPv1',
	'RIPv2',
	'RIPng',
	'IS-IS',
	'PIM-SM/MSDP',
	'LDP',
	'BFD',
	'Babel',
	'PBR',
	'OpenFabric',
	'VRRP',
	'EIGRP',
	'NHRP',
];

// Only do the flavortext thing once so we don't annoy people!
if (!getCookie('welcome')) {
	document.addEventListener("DOMContentLoaded", function(e) {
		let eyecatch = document.getElementById('eyecatch-wipe');
		eyecatch.classList.add('notransition');
		eyecatch.offsetHeight;
		eyecatch.style.backgroundSize = '100%';
		eyecatch.style.borderRadius = '10px';

		flavorText = document.getElementById('flavortext').textContent = protocols[0];
	});
	window.addEventListener("load", function(e) {
		let flavorText = document.getElementById('flavortext');
		let untilNext = 700;
		let speedUp = 0.95;
		let diff = 0;
		for (let i of Array(3).keys()) {
			for (let protocol of protocols) {
				window.setTimeout(function() {
					flavorText.textContent = protocol;

					if (i) {
						speedUp = 0.8;
					}
				}, diff);
				untilNext *= speedUp;
				diff += untilNext;
			}
		}
		window.setTimeout(function() {
			flavorText.textContent = "FRRouting Project";
			flavorText.style.opacity = 1;
		}, diff);

		diff += 450;

		window.setTimeout(function() {
			var eyecatch = document.getElementById('eyecatch-wipe');
			eyecatch.classList.remove('notransition');
			eyecatch.style.backgroundSize = '';
			eyecatch.style.borderRadius = '';
			eyecatch.style.borderRadius = 0;
			flavorText.style.opacity = 0;
		}, diff);
	});
	setCookie('welcome', 'welcomed', 9999);
}

