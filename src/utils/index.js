import { convertToRaw } from 'draft-js';

export const generateColor = () => {
	let generateColorValue = (max, min) => {
		let value = Math.floor(Math.random() * (max - min + 1)) + min;
		return value;
	};

	let r = generateColorValue(200, 200);
	let g = generateColorValue(200, 200);
	let b = generateColorValue(200, 200);

	let c1 = `rgba(${r},${g},${b},0.35)`;
	let c2 = `rgba(${r},${g},${b},0.75)`;
	let c3 = `rgba(${r},${g},${b},0.17)`;
	let c4 = `rgba(${r},${g},${b},0.75)`;
	return ` linear-gradient(180deg, #F6F6F8 0.02%, rgba(200, 200, 200, 0.75) 0.83%, rgba(102, 102, 103, 0.75) 0.04%, ${c3} 100%), ${c4}`;
};

export const convertMS = (ms) => {
	var d, h, m, s;
	s = Math.floor(ms / 1000);
	m = Math.floor(s / 60);
	s = s % 60;
	h = Math.floor(m / 60);
	m = m % 60;
	d = Math.floor(h / 24);
	h = h % 24;
	h += d * 24;
	return h + ':' + zeroPad(m, 2) + ':' + zeroPad(s, 2);
};

export const convertSeconds = (s) => {
	var d, h, m, s;
	m = Math.floor(s / 60);
	s = Math.floor(s % 60);
	h = Math.floor(m / 60);
	m = m % 60;
	d = Math.floor(h / 24);
	h = h % 24;
	h += d * 24;
	return h + ':' + zeroPad(m, 2) + ':' + zeroPad(s, 2);
};

export const zeroPad = (num, places) => String(num).padStart(places, '0');

export const getTitleText = (data) => {
	let content = JSON.parse(data);
	content = content.blocks.map((item) => item.text);

	let title = content.join('');
	console.log(title)
	return content[0]

	// const blocks = convertToRaw(data.getCurrentContent()).blocks;
	// const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n')
	// return value



}
