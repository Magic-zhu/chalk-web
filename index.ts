
function chalk (css:string|Object,string:string,data:any='',...args:any){
	let cssString = '';
	if(typeof css == 'string'){
		cssString = 'color:'+css;
	}else{
		for(let key in css){
			cssString = cssString + key + ':' + css[key]+';'
		}
	}
	return console.log('%c'+string,cssString,data,...args)
}

export default chalk