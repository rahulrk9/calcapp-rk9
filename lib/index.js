'use strict';


var CALC = {

  add: function(a,b){
  	if(!isNaN(a)&&!isNaN(b)){
  		return a + b;
  	}
  },

  sub: function(a,b){
  	if(!isNaN(a)&&!isNaN(b)){
  		return a - b;
  	}
  },

  mul: function(a,b){
  	if(!isNaN(a)&&!isNaN(b)){
  		return a * b;
  	}

  },

  div: function(a,b){
  	if(!isNaN(a)&&!isNaN(b)){
  		if(b===0){
  			return 'Divide by 0 is not allowed';
  		}
  		else{
  		 return a / b;	
  		}
  		
  	}

  }

  
};

module.exports = CALC;
