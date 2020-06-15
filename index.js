
function chalk (css,string,data=''){
	let cssString = '';
	if(typeof css == 'string'){
		cssString = 'color:'+css;
	}else{
		for(let key in css){
			cssString = cssString + key + ':' + css[key]+';'
		}
	}
	return console.log('%c'+string,cssString,data)
}

module.exports = chalk;