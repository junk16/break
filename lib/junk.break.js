inlets = 3;
outlets = 3;

var datas = new Array();
datas['position'] = [];
datas['width']    = [];
datas['rate']     = [];

var bufferLen = 0;

////////////////////////////////////////
// public
////////////////////////////////////////
function position(){
	
	val = arrayfromargs(arguments);
	
	setDatas('position', val);
}

function width(){
	val = arrayfromargs(arguments);
	
	setDatas('width', val);
}

function rate(){
	val = arrayfromargs(arguments);
	
	setDatas('rate', val);
}


function anything(vr){
	
	a = arrayfromargs(arguments);
}


function msg_int(v){

	
	switch(inlet){
		case 0 :

			out(v);
			break;
		case 1 :
		
			setBufferLen(v);
			break;
	}
}


function msg_float(v){
	
	switch(inlet){
		case 1 :
			setBufferLen(v);
			break;
	}
}

////////////////////////////////////////
// private
////////////////////////////////////////
function setDatas(key, val){
	datas[key] = val;
}

function setBufferLen(len){
	bufferLen = len;
}

function out(i){
	start = Math.abs(datas["position"][i] * bufferLen);
	end   = Math.pow(datas["width"][i], 3) * bufferLen + start
	outlet(0, start);
	outlet(1, end);
	outlet(2, datas["rate"][i]);	
}