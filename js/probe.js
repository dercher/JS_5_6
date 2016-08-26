

function changeCss(numOfEl, amount, Class, a, b, c , d, e, f, g, j ) {
  for( i = 0; i < 8; i++) {
      var s = document.querySelectorAll(Class); var n = i; 
      if( numOfEl > 0 ) var n = numOfEl; 
  if(property == 'bgColor')     { s[n].style.backgroundColor = set; }
  if(property == 'background')  { s[n].style.background = set; }
  if(property == 'margin')      { s[n].style.margin = set; }
  if(property == 'marginLeft')  { s[n].style.marginLeft = set; }
  if(property == 'marginTop')   { s[n].style.marginTop = set; }
  if(property == 'marginBottom'){ s[n].style.marginBottom = set; }
  if(property == 'textDecor')   { s[n].style.textDecoration = set; }
  if(property == 'fontSize')    { s[n].style.fontSize = set; }
  if(property == 'width')       { s[n].style.width = set; }
  if(property == 'height')      { s[n].style.height = set; }
  if(property == 'padding')     { s[n].style.padding = set; }
  if(property == 'paddingTop')  { s[n].style.paddingTop = set; }
  if(property == 'borderRadius'){ s[n].style.borderRadius = set; }
  if(property == 'position')    { s[n].style.position = set;}
  if(property == 'top')         { s[n].style.top = set; }
  if(property == 'left')        { s[n].style.left = set; }
  if(property == 'right')       { s[n].style.right = set; }
  if(property == 'display')     { s[n].style.display = set; }
  if(property == 'fontWeight')  { s[n].style.fontWeight = set; }
 }
}

	 // changeCss( 0, 1 ,'.button', 'width: 300px', '600px', 0, 1);

function receiveProperty(property) {
    
}

function resetCss(elnum, amount, Class, a, b, c , d, e, f, g, j, k) {
   var property = ['fontSize', 'height', 'marginTop'];
   var cssStyle = ['s[ elnum ].style.width = x.substr(7);', 'height = x.substr(8)', 'margin = x.substr(8);']
   
 

  for( y = 0; y < amount; y++) {
   if( amount > 1 ) elnum = y;
	for( i = 3; i < 11; i++) {
	      if( arguments[i] ) {
	      x = arguments[i];
	     console.log('x:', x)
	     var u = i - 3;
	      var s = document.querySelectorAll(Class); 
	      var elem_Style = s[ elnum ].style;
	      var atr = [elem_Style.fontSize];
	      
	    if(x.match( property[u]))    atr[0] = x.substr(10); // cssStyle[u];
	        
      console.log('atr[0]= ', atr[0])
	  // if(x.match('width'))        s[ elnum ].style.width = x.substr(7);
	  // if(x.match('height'))       s[ elnum ].style.height = x.substr(8);
	  // if(x.match('margin'))       s[ elnum ].style.margin = x.substr(8);
	  // if(x.match('padding'))      s[ elnum ].style.padding = x.substr(9);
	  // if(x.match('background'))   s[ elnum ].style.background = x.substr(12);
	  // if(x.match('textDecor'))    s[ elnum ].style.textDecoration = x.substr(11);
	  // if(x.match('fontSize'))     s[ elnum ].style.fontSize = x.substr(10); 
	  // if(x.match('color'))        s[ elnum ].style.color = x.substr(7);
	  // if(x.match('fontWeight'))   s[ elnum ].style.fontWeight = x.substr(12);
	  // if(x.match('marginTop'))    s[ elnum ].style.marginTop = x.substr(11);
	  // if(x.match('marginRight'))  s[ elnum ].style.marginRight = x.substr(13);
	  // if(x.match('marginBottom')) s[ elnum ].style.marginBottom = x.substr(14);
	  // if(x.match('marginLeft'))   s[ elnum ].style.marginLeft = x.substr(12);
	  // if(x.match('paddingTop'))   s[ elnum ].style.paddingTop = x.substr(12);
	  // if(x.match('paddingRight')) s[ elnum ].style.paddingRight = x.substr(14);
	  // if(x.match('paddingBottom'))s[ elnum ].style.paddingBottom = x.substr(15);
	  // if(x.match('paddingLeft'))  s[ elnum ].style.paddingLeft = x.substr(13);
	  
	  }
   }
  } 
}

resetCss( 100, 2 ,'.button', 'fontSize: 10px', 'padding: 0px 0px', 'color: red', 'fontWeight: bold', 'paddingTop: 50px');
