function setEvents( amountAll, Class, event, handler ) {  
        // if (navigator.userAgent.search(/MSIE/) > -1) {            // setting events for IE
        //     for( i = 0; i < amountAll; i++ ) {
        //     if( handler[i]) {
        //     var elem = document.querySelectorAll( Class ) 
        //    elem[i].attachEvent('on' + event, handler[i] ); 
        //      }
        //     }
        //   } else {    
          for( i = 0; i < amountAll; i++ ) {
          if( handler[i] ) {
          var elem = document.querySelectorAll( Class ) 
          elem[i].addEventListener( event, handler[i]); 
        }
    } 
  }//---------------------------------------------------
      function setSingleEvevnt( Class, event ) {
       var link = document.querySelectorAll( Class )[0];
       link.addEventListener('click', event);
   } //----------------------------------------------------
   var sizeBool = [ 0, 0, 1, 0 ]  //  = size large for the first load 
  //---------------------------------------------------
  function createEl( parentTCI, tag, Class, attrib, text, child) {
    var element = document.createElement( tag );
    if( Class ) element.classList.add( Class );
    if( text ) element.innerHTML = text;
    if( attrib[0] == 'i')       element.setAttribute( 'id', attrib.substr(3) ) 
    if( attrib[0] == 'n')       element.setAttribute( 'name', attrib.substr(5) ) 
    if( parentTCI[3] == 't' )   var el = document.getElementsByTagName( parentTCI.substr(7) ) [0];
    if( parentTCI[3] == 'c')    var el = document.querySelector( parentTCI.substr(9) );
    if( parentTCI[3] == 'i' )   var el = document.getElementById( parentTCI.substr(6) ); 
    if( parentTCI[0] == '.' )   var el = document.querySelector( parentTCI );
    el.insertBefore(element, el.children[child]); 
  }
   //-----------------------------
  createEl('in tag form',  'label', 'button', false, '<input class="none" type="button">Start', 1);
  createEl('in tag form', 'label', 'button', false, '<input class="none" type="button">Split',  2);
  createEl('in tag form', 'label', 'button', false, '<input class="none" type="button">Reset',  3);

  var sizingFunc= [changeSmall, changeMedium, changeLarge, changeXLarge];              // handlers for size events 
  var colorFunc = [changeBlue, changeBlack, changeSilver, changeGreen, changeOrange];   // handlers for color events
  var buttonFunc = [start, split, reset];
  setEvents( 5, '.color div', 'click', colorFunc );    // events for color nav
  setEvents( 4, '.size div', 'click', sizingFunc );    // events for size nav
  setEvents( 3, '.none', 'click', buttonFunc );        // events for buttons
  changeCss( 1, 1, '.color div', 'textDecor: none');
  changeCss( 2, 1, '.size div', 'textDecor: none');
//----------------------------------------------
 function changeSize( buttFontSize, faceFontSize, faceWidth, faceHeight, faceLeft, copy ) {
   changeCss( 0, 3, '.button', buttFontSize )
   changeCss( 0, 1, '.clockFace', faceFontSize, faceWidth, faceHeight, faceLeft ) 
   if( numOfStops > 0 ) changeCss( 0, numOfStops, '.copy', copy ) 
 } //-----------------------------------------------------------------------------------------------------------------
function changeSmall() {
    sizeBool = [1, 0, 0, 0];  
    changeSize( 'fontSize: 20px', 'width: 268px', 'height: 25px', 'fontSize: 22px', 'marginLeft: 5px', 'fontSize: 13px');  
}             // ( - button  - )   (- - - - - - - - - - - - - .clokFace - - -- - - - - - - - - - - - )  (- - .copy - - )
function changeMedium() {
    sizeBool = [0, 1, 0, 0];  
    changeSize( 'fontSize: 27px', 'width: 268px', 'height: 30px', 'fontSize: 29px', 'marginLeft: 5px', 'fontSize: 18px'); 
}             // ( - button  - )   (- - - - - - - - - - - - - .clokFace - - -- - - - - - - - - - - - )  (- - .copy - - )
function changeLarge() {
    sizeBool = [0, 0, 1, 0]; 
    changeSize( 'fontSize: 33px', 'width: 280px', 'height: 35px', 'fontSize: 35px', 'marginLeft: 2px', 'fontSize: 33px');  
}             // ( - button  - )   (- - - - - - - - - - - - - .clokFace - - -- - - - - - - - - - - - )  (- - .copy - - )
function changeXLarge() {
    sizeBool = [0, 0, 0, 1]; 
    changeSize( 'fontSize: 45px', 'width: 310px', 'height: 42px', 'fontSize: 48px', 'marginLeft: -1px', 'fontSize: 40px');
}//---------------------------------------------------------------------------------------------------------------------
function changeColor( mainCol, contentCol, num ) {
  var arr = ['.wrapper', 'body', '.content', '.clockFace', '.clock',  mainCol, mainCol, contentCol, contentCol, contentCol]
  for( var i = 0; i < 5; i++ ) {
    changeCss( 0, 1, arr[i], 'background: ' + arr[i+5] )
  }
  underline('.color div', 5, num )
}//------------------------------------------------
function changeBlue() {
  changeColor( 'blue', '#0000a0', 0 )
}
function changeBlack() {
  changeColor( 'black', '#292929', 1 )
}
function changeSilver() {
  changeColor( 'silver', '#b1b1b1', 2 )
}
function changeGreen() {
  changeColor( 'green', '#008040', 3 )
}
function changeOrange() {
  changeColor( 'orange', '#ff8000', 4 )
}//-------------------------------------------------------
function underline(classes, amount1, num ) {          //-------- function to underline navis
  changeCss( 0, amount1, classes, 'textDecor: underline');
  for( var i = 0; i < amount1; i++ ) {
  if( num == i) changeCss( i, 1, classes, 'textDecor: none');
  }
} //------------------------------------
  function reset() {
    if( startIsOn == true || numOfStops > 0 ) {
      clearInterval(startTime);  
      changeCss( 0, 1, 'label', 'innerHTML: <input class="none" type=button>Start');
      changeCss( 0, 1, '.button', 'paddingRight: 0')
      setSingleEvevnt('.none', start ); // --- replacing the event
      milliSec = 0;
      display='00:00:00.000';
      document.time.stopwatch.value = display;
      var y =  numOfStops;
      deleteCopies();
      annulReset ();
    }
  }//----------------------------------------
  var showUp = 0;
  var milliSec = 0; 
  var display = 0; 
  var displayUp =0;
  var numOfStops = 0;
  var startIsOn = false;
  var today = 0;
function start() { 
  today = new Date();
  startIsOn = true;
  changeCss( 0, 1, 'label', 'innerHTML: <input class="none" type=button">Stop');
  changeCss(0, 1, '.button', 'paddingRight: 3px')
  setSingleEvevnt('.none', stop );   // --- replacing the event
  startTime = setInterval( getMilliSec, 1);
} //--------------------------
function getMilliSec() { 
     milliSec = new Date() - today;
     if( numOfStops == 0 ) { displayUp = milliSec; display = milliSec;}
     if( numOfStops > 0 ) { displayUp = milliSec + display; } 
  showUp = formatTime( displayUp );    // -------  getting format to string - "00:00:00.000"
  document.time.stopwatch.value = showUp; 
}//-----------------------
function stop() {
   startIsOn = false;
   display = displayUp;
   numOfStops++;
   clearInterval(startTime); 
  changeCss( 0, 1, 'label', 'innerHTML: <input class="none" type=button>Start');
  changeCss(0, 1, '.button', 'paddingRight: 0')
  setSingleEvevnt('.none', start );
   var textStop = ' Stop: ';
   textStop = numOfStops + textStop;    // ------  displaying text if put Stop 
   displayCopies( textStop );
}//------------------------------------------------
function split() {
   if( milliSec != 0 && startIsOn == true ) {
  numOfStops++;
  var textSplit = ' Split: ';
  textSplit = numOfStops + textSplit;   // ----  displaying text if put Split
  displayCopies( textSplit ); 
 }
}//-----------------------------
function annulReset () {
    display = 0;
    displayUp = 0;
    numOfStops = 0;
    startIsOn = false;
}//----------------------------
function deleteCopies() {              //---=--- delete copies of new created elements
  for( var i = 0; i < numOfStops; i++ ) {
    var el = document.querySelector( 'form' ); 
    var tag = el.querySelector( '.copy' ); 
    el.removeChild(tag);
  }
}//-----------------------------
function displayCopies( textStop ) {
    createEl( 'in tag form', 'div', 'copy', false, textStop + showUp, 3 + numOfStops)
    changeCss( numOfStops - 1, 1, '.copy', 'fontSize: ' + getCopySize() )
}//-------------------------------
function getCopySize() {
   var size1 = ['13px', '18px', '33px', '40px'];
   for( var i = 0; i < 4; i++ ) {
    if( sizeBool[i] == 1 ) return size1[i];
   }
}//---------------------------------- function for changing CSS styles----------------------------
function formatTime(input) {
    var hoursString = '00';
    var minutesString = '00';
    var secondsString = '00';
    var inputSecString = '000';
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliSeconds = 0;
    hours = Math.floor(input / (60 * 60 * 1000));
    input = input % (60 * 60 * 1000);
    minutes = Math.floor(input / (60 * 1000));
    input = input % (60 * 1000);
    seconds = Math.floor(input / 1000);
    input = input % 1000;
    milliSeconds = input;
  if(hours >= 10) { hoursString = hours.toString() } else { hoursString = '0' + hours.toString() }
  if(minutes >= 10) { minutesString = minutes.toString() } else { minutesString = '0' + minutes.toString() }
  if(seconds >= 10) { secondsString = seconds.toString() } else { secondsString = '0' + seconds.toString() }
  if(milliSeconds >= 100) { 
    milliSecString = milliSeconds.toString() 
  } else {
     if(milliSeconds >= 10) {
       milliSecString='0' + milliSeconds.toString()
     } else {
         milliSecString='00' + milliSeconds.toString()
     }
   }
    return (  hoursString + ':' + minutesString + ':' + secondsString + '.' + milliSecString)
}
//----------------------------------------------------------------------------------------------------
function changeCss(elnum, amount, Class, a, b, c , d, e, f, g, j, k) {
  if( amount > 1 ) { if( elnum  ) { except = elnum - 1; } } 
  for( y = 0; y < amount; y++) {  
  if( amount > 1 ) {  elnum = y; }    
  for( i = 3; i < 11; i++) {
        if( arguments[i] ) {
        x = arguments[i];
        var s = document.querySelectorAll(Class); 
    if(x.match('height') )        s[ elnum ].style.height = x.substr(8);
    if(x.match('margin') )        s[ elnum ].style.margin = x.substr(8);
    if(x.match('padding'))        s[ elnum ].style.padding = x.substr(9);
    if(x.match('background') )    s[ elnum ].style.background = x.substr(12);
    if(x.match('backgroundImage'))s[ elnum ].style.backgroundImage = x.substr(12);
    if(x.match('width') )         s[ elnum ].style.width = x.substr(7);
    if(x.match('textDecor') )     s[ elnum ].style.textDecoration = x.substr(11);
    if(x.match('fontSize') )      s[ elnum ].style.fontSize = x.substr(10); 
    if(x.match('color') )         s[ elnum ].style.color = x.substr(7);
    if(x.match('bgColor') )       s[ elnum ].style.backgroundColor = x.substr(9);
    if(x.match('borderRadius') )  s[ elnum ].style.borderRadius = x.substr(14);
    if(x.match('boxShadow') )     s[ elnum ].style.boxShadow = x.substr(11);
    if(x.match('fontWeight') )    s[ elnum ].style.fontWeight = x.substr(12);
    if(x.match('marginTop') )     s[ elnum ].style.marginTop = x.substr(11);
    if(x.match('marginRight') )   s[ elnum ].style.marginRight = x.substr(13);
    if(x.match('marginBottom') )  s[ elnum ].style.marginBottom = x.substr(14);
    if(x.match('marginLeft') )    s[ elnum ].style.marginLeft = x.substr(12);
    if(x.match('paddingTop') )    s[ elnum ].style.paddingTop = x.substr(12);
    if(x.match('paddingRight') )  s[ elnum ].style.paddingRight = x.substr(14);
    if(x.match('paddingBottom') ) s[ elnum ].style.paddingBottom = x.substr(15);
    if(x.match('paddingLeft') )   s[ elnum ].style.paddingLeft = x.substr(13);
    if(x.match('position') )      s[ elnum ].style.position = x.substr(10);
    if(x.match('top') )           s[ elnum ].style.top = x.substr(5);
    if(x.match('right') )         s[ elnum ].style.right = x.substr(7);
    if(x.match('cursor') )        s[ elnum ].style.cursor = x.substr(7);
    if(x.match('minHeight') )     s[ elnum ].style.minHeight = x.substr(11);
    if(x.match('value') )         s[ elnum ].style.value = x.substr(7);
    if(x.match('innerHTML') )     s[ elnum ].innerHTML = x.substr(11);
    }
   }
  } 
}
//-------------------------------------