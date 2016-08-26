var decrease = 0; 
var m = 0;
var m2 = -270; 
var decrease2 = 10;
var decrease3 =0;
var decreaseM = 0.3;
var sizeBool = [0, 0, 1, 0];
var first2 = false; var first1 = false;
var multiply = 1; 
var speed10 = 0.00005; var speed20 = 0.025;
var speed = 0.1;
var speed2 = 0.9; 
var speed3 = 0.1;  if (navigator.userAgent.search(/Firefox/) > 0) { var fox = true; speed2 = 1.5; speed3 = 0.1;  multiply = 4; decrease = speed10 = 0.001; speed20 = 0.2}
var colors = ['blue', 'black', 'silver', 'green', 'orange', 'black'];
var letterColor = ['black', '#9f9f9f', 'black', '#9f9f9f','black', '#9f9f9f'];
var setting = ['bgColor: #9f9f9f'];
var size = [ 15,  9, 3, 244, 24, 130]; // present size of elements 
var sizeForm = [];                     // destination size of elements 
var coloring = false;
var rgba = '';
var load = true;
var load2 = true;
var task1 = true; var task2 = false;

var main = {  // ------------------------------  CREATING MUTUAL ELEMENTS  -----------------------------------------------
                  // Tag/Class/Id                           
  createEl: function( parentTCI, tag, Class, attrib, text, child) {
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
  },              
                     // Tag/Class/Id 
  createMenu: function( parentTCI, menuClass, elClass, elText, elsAmount,  menuPlace ) {
    this.createEl( parentTCI, 'nav', menuClass, false, false, menuPlace);
    for( i = 0; i < elsAmount; i++) {                                     
    this.createEl( '.' + menuClass, 'div', elClass, false, elText[i], i);    
    }
  },
  setEvent: function( amountAll, Class, event, handler ) {  
        if (navigator.userAgent.search(/MSIE/) > -1) {            // setting events for IE
            for( i = 0; i < amountAll; i++ ) {
            if( handler[i]) {
            var elem = document.querySelectorAll( Class ) 
           elem[i].attachEvent('on' + event, handler[i] ); 
             }
            }
          } else {    
          for( i = 0; i < amountAll; i++ ) {
          if( handler[i] ) {
          var elem = document.querySelectorAll( Class ) 
          elem[i].addEventListener( event, handler[i]); 
        }
    } }
  }, 
     setSingleEvevnt: function ( Class, event, num ) {
      if( num ) num = num; else num = 0;
       var link = document.querySelectorAll( Class )[num];
       link.addEventListener('click', event);
   },
   setColor: function(color, num) {          // --- function to decorate color buttons by changing the color
   changeCss( false, 5 /*items*/, '.color__element', 'fontWeight: bold', 'textDecor: underline');
   changeCss( num, 1 /*item*/, '.color__element', 'fontWeight: normal', 'textDecor: none')
 }
}
//------------------------------- Creatung elements---------------------------------------------------------
var sizeText =  ['Small', 'Medium', 'Large', 'X-Large' ];                 // names of Size navigation
var colorText = ['Blue', 'Black', 'Silver', 'Green', 'Orange']           // names of Color navigation
var navText =   ['[ Navigation:', 'Task 1', 'Task 2', ' ] ']             // names of task navigation
var menuText =  ['[ ', 'Update!', 'Original Stopwatch','Stopwatch with Alarm','Online Stopwatch Games', 'Online Timers',' ]']; 
var footText =  ['&copy; 2006 - 2016 OnlineClock.net', '<a href="mobile.html" class="a">Mobile</a>', 'Contact', 'Imprint', 'Privacy']  // names of footer
var cizingFunc= [changeSmall, changeMedium, changeLarge, changeXLarge];              // handlers for size events 
var colorFunc = [changeBlue, changeBlack, changeSilver, changeGreen, changeOrange];   // handlers for color events
var taskFunc  = [ false, createTask1, createTask2, false ];
// var buttonFunc = [start, split, reset];  // -- handlers for buttons                                            

main.createEl('in tag body', 'div', 'wrapper', false, false, 0);             // creating main wrapper
main.createEl('in class .wrapper', 'header', false, false, false, 0);        // creating header (with 2 menus)
main.createEl('in class .wrapper', 'center', false, false, false, 1);       // creating center tag with  content
main.createEl('in tag center', 'div', 'blank', false, false, 0);        // creating empty  block
main.createEl('in class .blank', 'div', 'blank__step', false, false, 0)                // creating empty block
main.createMenu('in tag header', 'size', 'size__element', sizeText, 5, 0 );      // --- creating Size Navigation
main.createMenu('in tag header', 'color', 'color__element', colorText, 5, 1 );   // --- creating Color Navigation
main.createMenu('in tag center', 'nav', 'nav__element', navText , 4,  2 );        // --- creating task navigation 
main.createMenu('in tag center', 'menu', 'menu__element', menuText , 7,  3 );    // --- creating menu Navigation
main.createMenu('in tag center', 'link', 'link__element', false ,  7, 4);             // --- creating Link Navigation
main.createMenu('in tag center', 'footer', 'footer__element', footText, 5, 5 );       // --- creating footer navigation
main.setEvent( 4, '.size__element', 'click', cizingFunc);                 //  ----   events for Cizing
main.setEvent( 5, '.color__element', 'click', colorFunc);                 //  ----   events for Color
main.setEvent( 4, '.nav__element', 'click', taskFunc);                    //  ----   events for Color
// main.setEvents( 2, '.none', 'click', buttonFunc );                        // -----   events for buttons
//--------------------------------------------//  CREATE TASK 1 
function destroy() {
  console.log('the function works :)')
}//-------------------------------------------------------------
 function createTask1() {
  if( ( task2 == true && coloring == false )|| load == true ) {
  reset1();  //  ------ reset all data
  underlineTask( 2 );
  task1 = true; task2 = false;
  if( load == false ) {
    deleteElem( 'center', 'form', 1 );
  }
  updateSize();
  changeCss(0, 1, '.blank', 'marginBottom: 0');
  main.createEl('in tag center', 'form' , 'clock',  'name time', false, 1);
  main.createEl('in class .clock', 'label', 'button', 'id first', '<input class="none" type=button" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 0);
  main.createEl('in class .clock', 'span', false, false, '<input class="clockFace" name=stopwatch value="00:00:00.000" disabled>', 1);
  main.createEl('in class .clock', 'label', 'button', false, '<input class="none" type=button">Clear',  2);
  main.setSingleEvevnt('.none', reset1, 1);   // set event for the second button ( event for the first button apdates in 'getLettersPic()' )
  getLettersPic();
  changeCss( 0, 1, '.clockFace', 'marginBottom: 0');
  if( load == false ) {
  first1 = true; // -- by changing to task1 only replace background (without changing the buttons form)
  changeLarge();
  changeBlack();
  getLettersPic();
  load2 = false;
     }
  }
}
if( load2 == true ) { createTask1();} 
 //--------------------------------------------//  CREATE TASK 2 
 function createTask2() {
  if( task1 == true && coloring == false ) {
  reset1();
  task1 = false; task2 = true;
  underlineTask( 1 );
  deleteElem( 'center', 'form', 1 );
  updateSize();
  changeCss(0, 1, '.blank', 'marginBottom: -113px');
  main.createEl('in tag center', 'form',  'clock',  'name time', false, 1);
  main.createEl('in class .clock', 'span', false, false, '<input class="clockFace" name=stopwatch value="00:00:00.000" disabled><br>', 0);
  main.createEl('in class .clock', 'label', 'button', 'id first', '<input class="none" type=button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 1);
  main.createEl('in class .clock', 'label', 'button', false, '<input class="none" type=button>Split',  2);
  main.createEl('in class .clock', 'label', 'button', false, '<input class="none" type=button onclick="reset1()">Reset',  3);
  main.createEl('in class .clock', 'div', 'distance', false, '&nbsp;&nbsp;', 4);
  main.setSingleEvevnt('.none', split,  1);  // set event for the second button
  main.setSingleEvevnt('.none', reset1, 2);  // set event for the third button ( event for the first button apdates in 'getLettersPic()' )

   changeCss( 0, 1, '.clockFace', 'marginBottom: 30px');
     first2 = true; // -- by changing to task2 only replace background (without changing the buttons form)
   updateSize();
   changeLarge();
   changeBlack();
   getLettersPic()
   }
   // if( coloring == false ) { getLettersPic() }
}
//----------------------------------------------------------------------------------------------------------------------------
function deleteElem( parent, elem, amount ) { 
for( var i = 0; i < amount; i ++)  {
  var el = document.querySelector( parent ); 
  var tag = el.querySelector( elem ); 
  el.removeChild(tag);
 }
}//------------------------------
function underlineTask( num ) {
 for( var i = 0; i < 2; i++ ) {
  changeCss( 0, 4, '.nav__element', 'textDecor: none');
  changeCss( num, 1, '.nav__element', 'textDecor: underline');
 }
}//-----------------------
 function putGround() {  // ---------- changing the background
  var string = 'url("img/' +colors[5]+ '/1.jpg")'
    if( decrease < 300 )  {
     decrease++;
    if(decreaseM > 0 && decrease2 <= 7 ) { decreaseM -= speed10 } 
    if(decrease2 > 7 ) { 
      decrease2 -= speed20; 
       } else {
     if(decrease2 > - 0.5 ) decrease2 -= decreaseM;
       }
     decrease3 = decrease3 + decrease2 + 1;       
     m = decrease3 ;
     changeCss( 0, 1, '.wrapper', 'background: ' +string+m+'px 0px repeat');
  } 
  if( decrease >= 300 || ( fox == true && decrease >= 100 )) {
      if(  first1 == false && first2 == false ) { 
      focus();
      first1 = false;
      first2 = false;
    } else {
      for( var z = 0; z < 4; z++ ) {        // replacing back the color of the size menu text 
      changeCss(z, 1, '.size__element', 'bgColor: transparent', 'fontSize: 12px', 'innerHTML: ' + sizeText[z], 'color: #fff');
       }
       coloring = false;
       first1 = false;
       first2 = false;
    }
      clearInterval(startBack);
   }
 } //--------------------------------
 function getSizeForReplacement() {    //  top   height   margin-top
   if( sizeBool[0] == 1 ) replaceSize = ['-52px', '60px' , '-60px' ]
   if( sizeBool[1] == 1 ) replaceSize = ['-85px', '100px', '-100px']
   if( sizeBool[2] == 1 ) replaceSize = ['-120px', '150px', '-150px']
   if( sizeBool[3] == 1 ) replaceSize = ['-150px', '188px', '-188px']
 }
 function createReplacement(){ // creating new elements to display material
  main.createEl('in class .clock', 'div', 'output__first', false, false, 3);
  main.createEl('in class .output__first', 'div', 'output__second', false, false, 0);
  main.createEl('in class .output__second', 'div', 'output__last', false, false, 0);
  getSizeForReplacement();
  changeCss( 0, 1, '.output__first', 'top: ' + replaceSize[0] )
  changeCss( 0, 1, '.output__last', 'height: ' + replaceSize[1] )
  changeCss( 0, 1, '.nav', 'marginTop: ' + replaceSize[2] );
 }//---------------------------------
  var left = 870;
 function outputMeterial() { // -- while changing the form of buttons display material
  var top = '0';
  var mult = 5;
  var rightEnd = -3;
  if( sizeBool[0] == 1 || sizeBool[1] == 1 ) { // if buttons are small output material little lower and decrease the speed of it
    top = '6px'; 
    mult = 2.5;
    rightEnd = -7;
    changeCss( 0, 1, '.nav', 'paddingTop: 54px');
  }  
  if( left > rightEnd ) left-= ( speed2 * mult );
  changeCss( 0, 1, '.output__last', 'background: rgba( 104, 105, 100, 0.45)')
  changeCss( 0, 1, '.output__last', 'marginLeft: ' +left+ 'px', 'marginTop: ' + top);   
  if( left <= rightEnd ) { 
    clearInterval(startMaterial);
    startOutputGray = setInterval('outputGray()', 1);
  }
 }//---------------------------------
 var transparence = 0.45 ;
 function outputGray() {       // --- making material transparent to gray
   if( transparence < 1 ) transparence+= ( speed3 / 50);
   if( transparence >= 0 ) { changeCss( 0, 1, '.output__last', 'background: rgba( 104, 105, 100,' +transparence+ ')') }
   if( transparence > 1 ) {
    transparence = 1;
    changeCss(0, 1, '.output__second', 'background: url("img/6.png")');
    displayButton(); // -------- chachging the buttons form behind the material
    startTransparentGray = setInterval('transparentGray()', 1);
    clearInterval(startOutputGray);
   }
 }//------------------------------------------------------------
 function transparentGray() {
  if( transparence > 0 ) transparence-= ( speed3 / 45);
  if( transparence >= 0 ) {  changeCss( 0, 1, '.output__last', 'background: rgba( 104, 105, 100,' +transparence+ ')') }
    if( transparence < 0 ) {
    transparence = 0;
    deleteElem('.clock', 'div', 1 );
    changeCss(0, 1, '.nav', 'marginTop: 0');
    if( sizeBool[0] == 1 || sizeBool[1] == 1 ) changeCss(0, 1, '.nav', 'paddingTop: 60px'); 
    coloring = false;
        for( var z = 0; z < 4; z++ ) {        // replacing back the color of the size menu text 
      changeCss(z, 1, '.size__element', 'bgColor: transparent', 'fontSize: 12px', 'innerHTML: ' + sizeText[z], 'color: #fff');
    }
      clearInterval(startTransparentGray);
    }
 }//---------------to start changing the form of buttons
function focus() {  
  if( task1 == true ) {
  createReplacement();
  transparence = 0.45;
  left = 870;
  startMaterial = setInterval('outputMeterial()', 1);
  }
  if( task2 == true ) {
   replacePicToLetter();
  startDissoveButtons = setInterval('dissolveButtons()', 1);
  }
}//------------------------------------
var dis = 1;
function dissolveButtons() {
   if( dis > 0 ) {
    dis -= ( speed3 / 30 )
    } else { dis = 0 } 
   changeCss( 0, 3, '.button', 'background: ' +getPenultRgba()+ dis+ ')', 'color: rgba(255, 255, 255, ' +dis+ ')', 'boxShadow: inset 0px 1px 0px rgba(117, 113, 114, ' +dis+ '), 0px 6px 0px rgba(117, 113, 114,' +dis+ ')');
   if( dis <= 0 ) {
    displayButton(); // -------- chachging the buttons form behind the material
    startRevealButtons = setInterval('revealButtons()', 1);  // revelling buttons back if it is the task 2
    clearInterval( startDissoveButtons );
   }
}//---------------------
function revealButtons() {
      if( dis < 1 ) {
    dis += ( speed3 / 30 )
    } else { dis = 1 } 
    changeCss( 0, 3, '.button', 'background: ' +setting[4]+ dis+ ')', 'color: rgba(255, 255, 255, ' +dis+ ')', 'boxShadow: inset 0px 1px 0px rgba(117, 113, 114, ' +dis+ '), 0px 6px 0px rgba(117, 113, 114,' +dis+ ')');     
  if( dis >= 1 ) {
    coloring = false;
    for( var z = 0; z < 4; z++ ) {        // replacing back the text color of the size-menu 
    changeCss(z, 1, '.size__element', 'bgColor: transparent', 'fontSize: 12px', 'innerHTML: ' + sizeText[z], 'color: #fff');
    }
    clearInterval( startRevealButtons );
   }
}//---------------------
function annulForBackground(color) {  // udating data for settings of changing the bachground 
   if( color =='blue')   setting = ['bgColor: #105fa4', 'borderRadius: 100%', 0, '#105fa4', 'rgba( 16, 95, 164, ' , ];  // for every exclusive button style
   if( color =='black')  setting = ['bgColor: #9f9f9f', 'borderRadius: 7%',   0, '#9f9f9f', 'rgba( 159, 159, 159, '];
   if( color =='silver') setting = ['bgColor: #9f9f9f', 'borderRadius: 7%',   0, '#9f9f9f', 'rgba( 159, 159, 159, '];
   if( color =='green')  setting = ['bgColor: #71a773', 'borderRadius: 100%', 0, '#71a773', 'rgba( 113, 167, 115, '];
   if( color =='orange') setting = ['bgColor: #ffa500', 'borderRadius: 5%', ' padding: 5px 27px', '#ffa500', 'rgba( 255, 165, 0, '];
   colors[5] = color;
    letterColor[5] = letterColor[3];
    letterColor[4] = letterColor[2];
    letterColor[3] = letterColor[1];
    letterColor[2] = letterColor[0];
    letterColor[1] = setting[3];
    letterColor[0] = colors[5];
   decrease  = 0; 
   decrease2 = 10; 
   decrease3 = 0; 
   decreaseM = 0.3;
   if( fox == true ) {  decrease2 = 50; decreaseM = 0.5; }
   ex = -360;
   m2 = -270;
   an = true;
   load = false
  } //----------------------------------------------------
  function getPenultRgba() {  // getting penult rgba color for dissolving the buttons ( task2 )
    var rgba1 = ['rgba( 16, 95, 164, ', 'rgba( 159, 159, 159, ', 'rgba( 159, 159, 159, ', 'rgba( 113, 167, 115, ', 'rgba( 255, 165, 0, ' ]
   for( var i = 0; i < 5; i++ ) {
    if( letterColor[2] == colors[i] ) return rgba1[i];
   }
  }
//------------------------------
function changeBlue() {
  colors[5] = 'blue';
  if( coloring == false ) {
  coloring = true;
  main.setColor ('blue', 0);
  annulForBackground('blue', 0);
  startBack = setInterval( 'putGround()', 1);
 }
}
function changeBlack() {
  colors[5] = 'black';
  if( coloring == false ) {
  coloring = true;
  main.setColor ('black', 1);
  annulForBackground('black', 1);
  startBack = setInterval( 'putGround()', 1);
 }
}
function changeSilver() {
  colors[5] = 'silver';
  if( coloring == false ) {
  coloring = true;
  main.setColor('silver', 2); 
  annulForBackground('silver', 2);
  startBack = setInterval( 'putGround()', 1); 
  }                                                          // ----------- changing color of background
}
function changeGreen() {
  colors[5] = 'green';
  if( coloring == false ) {
  coloring = true;
  main.setColor ('green', 3);
  annulForBackground('green', 3);
  startBack = setInterval( 'putGround()', 1); 
  } 
}
function changeOrange() {
  colors[5] = 'orange';
  if( coloring == false ) {
  coloring = true;
  main.setColor('orange', 4); 
  annulForBackground('orange', 4);
  startBack = setInterval( 'putGround()', 1); 
 }
}//----------------------------------------------------------------------------------------
var clone;
function displayButton() {  
   if( task2 == true ) numbers = 3; else numbers = 2;  
      updateSize();                                                                               // bgColor     border Radius
    if( task1) { 
    changeCss( 0, numbers, '.button', 'fontSize: ' +sizeForm[0]+'px', 'padding: ' +sizeForm[1]+'px ' +sizeForm[2]+'px', setting[0], setting[1] );
    changeCss( 0, 1, '.button', setting[0] );
    getLettersPic(); 
    }
    if( task2 ) {
       changeCss( 0, numbers, '.button', 'fontSize: ' +sizeForm[0]+'px', 'padding: ' +sizeForm[1]+'px ' +sizeForm[2]+'px', setting[1] );
    }
     changeCss(0, 1, '.clock', 'width: ' +sizeForm[3]+ 'px');
}//---------------------------------------------------------------------------------------
function defineSizeTrend(num) {  // -- comparing present button size with selected one and deciding to make smaller or bigger
   updateSize();
   if( size[0] > sizeForm[0])  { makeSmaller = setInterval( 'makeButtonSmaller()', 1); }
   if( size[0] < sizeForm[0])  { makeBigger  = setInterval( 'makeButtonBigger()', 1); }
} //--------------------------------------------------------------------------------------
  var numbers = 2;
function makeButtonSmaller() {
   if( task2 == true ) numbers = 3; else numbers = 2;
   if( size[0] > sizeForm[0] ) { size[0] -=  speed2;        } else { size[0] = sizeForm[0] } // .button    Font-size
   if( size[1] > sizeForm[1] ) { size[1] -= (speed2 / 2.5)  } else { size[1] = sizeForm[1] } // .button    paddin 1
   if( size[2] > sizeForm[2] ) { size[2] -= (speed2  )      } else { size[2] = sizeForm[2] } // .button    paddin 2
   if( size[3] > sizeForm[3] ) { size[3] -= (speed2 * 9.5)  } else { size[3] = sizeForm[3] } // .clock     width
   if( size[4] > sizeForm[4] ) { size[4] -= (speed2 * 1.3)  } else { size[4] = sizeForm[4] } // .clockFace font-size
   if( size[5] > sizeForm[5] ) { size[5] -= (speed2 * 8.2)  } else { size[5] = sizeForm[5] } // .clockFace width
         for( var i = 0; i < 6; i++ ) {
   if( size[i] < sizeForm[i] )  size[i] = sizeForm[i];
 } 
   changeCss( 0, 1, '.clock', 'width: ' +size[3]+'px');
   changeCss( 0, numbers, '.button', 'fontSize: ' +size[0]+'px', 'top: ' +sizeForm[6]+'px');
   changeCss( 0, numbers, '.button', 'paddingTop: ' +size[1]+'px', 'paddingRight: ' +size[2]+'px', 'paddingBottom: ' +size[1]+'px', 'paddingLeft: ' +size[2]+'px' );
   changeCss( 0, 1, '.button', setting[0]);
   changeCss( 0, 1, '.clockFace', 'fontSize: ' +size[4]+'px', 'width: ' +size[5]+'px')  
   if(  size[1] <= sizeForm[1] && size[2] <= sizeForm[2] && size[0] <= sizeForm[0] && size[3] <= sizeForm[3] && size[4] <= sizeForm[4] && size[5] <= sizeForm[5])
  {
    end2 = false;
     getLettersPic();       // getting button picture letters  back
     clearInterval( makeSmaller );
  }
}//-------------------------------------------------------------------------------------------
function makeButtonBigger() {
   if( task2 == true ) numbers = 3; else numbers = 2;
   if( size[0] < sizeForm[0] )  { size[0] +=  speed2;        } else { size[0] = sizeForm[0] } // .button    font-size
   if( size[1] < sizeForm[1] )  { size[1] += (speed2 / 2.5)  } else { size[1] = sizeForm[1] } // .button    paddin 1
   if( size[2] < sizeForm[2] )  { size[2] += (speed2   )     } else { size[2] = sizeForm[2] } // .button    paddin 2
   if( size[3] < sizeForm[3] )  { size[3] += (speed2 * 15.5) } else { size[3] = sizeForm[3] } // .clock     width
   if( size[4] < sizeForm[4] )  { size[4] += (speed2 * 1.3)  } else { size[4] = sizeForm[4] } // .clockFace font-size
   if( size[5] < sizeForm[5] )  { size[5] += (speed2 * 9.1)  } else { size[5] = sizeForm[5] } // .clockFace width
     for( var i = 0; i < 6; i++ ) {
   if( size[i] > sizeForm[i] )  size[i] = sizeForm[i];
 }
   changeCss( 0, 1, '.clock', 'width: ' +size[3]+ 'px');
   changeCss( 0, numbers, '.button', 'fontSize: ' +size[0]+ 'px', 'padding: ' +size[1]+ 'px ' +size[2]+ 'px', setting[0], 'top: ' +sizeForm[6]+ 'px');
  /* if( load == true ) */ changeCss( 0, 1, '.button', setting[0]);
   changeCss( 0, 1, '.clockFace', 'fontSize: ' +size[4]+ 'px', 'width: ' +size[5]+ 'px') 
   if(  size[0] >= sizeForm[0] && size[2] >= sizeForm[2] && size[3] >= sizeForm[3] && size[4] >= sizeForm[4] && size[5] >= sizeForm[5] ) {
    end1 = false;
   var string = '';
    getLettersPic();     // getting button picture letters  back
   clearInterval( makeBigger );
  }
}//---------------------------------------------------------------------------------------------
function underline(classes, amount1, num ) {          //-------- function to underline navis
  changeCss( 0, amount1, classes, 'textDecor: underline');
  for( var i = 0; i < amount1; i++ ) {
  if( num == i) changeCss( i, 1, classes, 'textDecor: none');
  }
}//------------------------------------------------------ updating the size of changable elements --------------------------
 function updateSize() {  
    var clockWidth = 290;  //-('.button' font-size, paddings), ('.clock' width), ('.clockFace' fontSize, width)('.button' top)
  if( sizeBool[0] == 1 )   sizeForm = [     15    ,   10  ,  3   ,  clockWidth        ,             24  ,   151 ,     -6  ]; 
  if( sizeBool[1] == 1 )   sizeForm = [     25    ,   16  ,  4   ,  clockWidth *=1.59 ,             44  ,   271 ,     -9  ];
  if( sizeBool[2] == 1 )   sizeForm = [     45    ,   23  ,  5   ,            742     ,             64  ,   391 ,     -13 ];
  if( sizeBool[3] == 1 )   sizeForm = [     60    ,   30  ,  7   ,            904     ,             84  ,   513 ,     -13 ];

    if( colors[5] == 'green' ||colors[5] == 'orange')  { sizeForm[1] *= 0.3 }
    //--------------
    if ( fox == true ) {     //-('.button' font-size, paddings), ('.clock' width), ('.clockFace' fontSize, width)('.button' top)
  if( sizeBool[0] == 1 )   sizeForm = [     15    ,   10  ,  3   ,  clockWidth        ,             24  ,   151 ,     -6  ]; 
  if( sizeBool[1] == 1 )   sizeForm = [     25    ,   16  ,  4   ,  clockWidth *=1.59 ,             44  ,   269 ,     -9  ];
  if( sizeBool[2] == 1 )   sizeForm = [     45    ,   23  ,  5   ,            742     ,             64  ,   390 ,     -13 ];
  if( sizeBool[3] == 1 )   sizeForm = [     60    ,   30  ,  7   ,            904     ,             84  ,   509 ,     -13 ];
   // clockWidth *=1.2; 
  if( colors[5] == 'green' || colors[5] == 'orange')  { sizeForm[1] *= 0.3 }
    } //-----------
  if( first1 == true || first2 == true ) {
  sizeForm = [     45    ,   23  ,  5   ,            742     ,             64  ,   391 ,     -13 ];
  } 
 }//--------------------------------------------------------------------------
 function replacePicToLetter() { // ---- replacing the first button picture to letters
  var transparentBack = '';
  if( startIsOn == true ) { var put ='Stop'; var put2 = 'stop';} else { var put = 'Start'; var put2 = 'start'; }
     transparentBack = 'background: url("img/start/allStops.png") -1000px -1000px no-repeat';
     changeCss( 0, 1, '.button', 'innerHTML: <input class="none" type=button onclick="' +put2+ '()">' + put, transparentBack, setting[0] );
 }//--------------------------------------------------------------------------------------------------------
 function changeSmall() {
  if(coloring == false ) {
  sizeBool = [1, 0, 0, 0, /*'.button' paddings*/9, 3, /*'.clock' width*/ 290];  
  underline('.size__element', 4, 0)
  replacePicToLetter();
  defineSizeTrend(sizeForm);
  speed = 0.1 * multiply;
 } else {
  changeCss(0, 1, '.size__element', 'innerHTML: Please wait', 'color: #000', 'textDecor: bold', 'fontSize: 14px', 'bgColor: #fff')
 } 
} //-----------------------------------------
function changeMedium() {
 if(coloring == false ) {
  sizeBool = [0, 1, 0, 0, /*'.button' paddings*/14, 4, /*'.clock' width*/ 461];
  underline('.size__element', 4, 1);
  replacePicToLetter();
  defineSizeTrend(sizeForm);
  speed    = 0.2 * multiply; 
 } else {
  changeCss(1, 1, '.size__element', 'innerHTML: Please wait', 'color: #000', 'textDecor: bold', 'fontSize: 14px', 'bgColor: #fff')
 }            
} //-----------------------------------------
function changeLarge() {
  updateSize();
 if(coloring == false ) {
  sizeBool = [0, 0, 1, 0, /*'.button' paddings*/21, 5, /*'.clock' width*/ 742]; 
  underline('.size__element', 4, 2);
  replacePicToLetter();
  defineSizeTrend(sizeForm);
  speed = 0.3 * multiply;
 } else {
  changeCss(2, 1, '.size__element', 'innerHTML: Please wait', 'color: #000', 'textDecor: bold', 'fontSize: 14px', 'bgColor: #fff')
 }
}  //----------------------------------------           
function changeXLarge() {
 if(coloring == false ) {
  sizeBool = [0, 0, 0, 1, /*'.button' paddings*/27, 7, /*'.clock' width*/ 900]; 
  underline('.size__element', 4, 3);
  replacePicToLetter();
  defineSizeTrend(sizeForm); 
  speed = 0.4 * multiply;
 } else {
  changeCss(3, 1, '.size__element', 'innerHTML: Please wait', 'color: #000', 'textDecor: bold', 'fontSize: 14px', 'bgColor: #fff')
 } 
}//---------------------------------------------------------------------------------------------------------------
   var milliSec = 0; 
   var display = 0; 
   var displayUp =0;
   var numOfStops = 0;
   var startIsOn = false;
function reset1() { 
  if( startIsOn == true || numOfStops > 0 ) {
    clearInterval(startTime); 
    milliSec = 0; 
    display='00:00:00.000'; 
    document.time.stopwatch.value = display; 
    var y =  numOfStops;
    if( task2 == true ) {
      deleteCopies();
      changeCss(0, 1, '.blank', 'marginBottom: -113px');
      } 
     annulReset();
     getLettersPic();
  }
}//--------------------------------------------------
function annulReset(){ 
    display = 0;
    displayUp = 0;
    numOfStops = 0;
    startIsOn = false;
    minusCopy = 0;
    allCopies = [];
    untill_3_Times = 0;
    new_3Items = false; 
}//----------------------------------------------------
function deleteCopies() {    // --- delete newly created elements
 if( untill_3_Times > 0 ) deleteElem('center', '.copy', untill_3_Times );
 if( new_3Items == true ) {
  deleteElem('center', '.copy__info', 1 );
  deleteElem('center', '.prove', 1 );
  deleteElem('center', '.result', 1 );
   }
}//---------------------------------------------------
function start() { 
  var today = new Date();
  startIsOn = true;
  getLettersPic();  // changing the background letter of the first button from 'Start' to 'Stop'
    function getMilliSec() { 
       milliSec = new Date() - today;
       if( numOfStops == 0 ) { displayUp = milliSec; display = milliSec;}
       if( numOfStops > 0 ) { displayUp = milliSec + display; } 
    showUp = formatTime( displayUp );    // -------  getting format to string - "00:00:00.000"
    document.time.stopwatch.value = showUp; 
    }
  startTime = setInterval( getMilliSec, 1);
} //--------------------------------------------------
function stop() {
   startIsOn = false;
   display = displayUp;
   numOfStops++;
   clearInterval(startTime); 
   getLettersPic(); // changing the background letter of the first button from 'Stop' to 'Start'
   if( task2 == true ) { 
   var textStop = ' Stop: ';
   textStop = numOfStops + textStop;    // ------  displaying text if put Stop 
   displayCopies( textStop );
 }
}//------------------------------------------------
var minusCopy = 0;
var allCopies = [];
var untill_3_Times = 0;
var new_3Items = false;
function displayCopies( textStop ) {  // ------ creating new elements and displaying there new copies of Stops or Splits
     var marginBlank = -113 - (numOfStops * 20 )
      if( numOfStops < 4 ) {
        untill_3_Times = numOfStops;
    main.createEl('in tag center', 'div', 'copy', false, textStop + showUp, 1 +numOfStops)
    allCopies[ numOfStops ] = textStop + showUp;
    changeCss(0, 1, '.blank', 'marginBottom: ' + marginBlank + 'px' )
   } else {
    minusCopy++;
    deleteElem('center', '.copy', 1 );
    main.createEl('in tag center', 'div', 'copy', false, textStop + showUp, 1 +numOfStops - minusCopy);
    allCopies[ numOfStops ] = textStop + showUp;
   }
   if( numOfStops == 4 ) {
    new_3Items = true;
    changeCss(0, 1, '.blank', 'marginBottom: ' + ( marginBlank )  + 'px' )
    main.createEl('in tag center', 'div', 'copy__info', false, '<input type="text" id="number" placeholder="Write № of Stop">', 2 +numOfStops - minusCopy);
    main.createEl('in tag center', 'button', 'prove', 'id proveNum', 'Show', 3 +numOfStops - minusCopy);
    main.createEl('in tag center', 'div', 'result', 'id result', false, 4 +numOfStops - minusCopy);
    document.getElementById('proveNum').addEventListener('click', getCopyInfo);
   }
}//--------------------------------------------------------
function getCopyInfo() {   // --------- finding the required copy written from user
  var info = document.getElementById('number').value;
  if( info > 0 && info <= numOfStops ) {
  var html = allCopies[ info ];
} else {
  var html = "Oops! There isn't any data for " + info;
}
  document.getElementById('result').innerHTML = html;
}//----------------------------
function split() {
   if( milliSec != 0 && startIsOn == true ) {
    numOfStops++;
    var textSplit = ' Split: ';
    textSplit = numOfStops + textSplit;   // ----  displaying text if put Split
    displayCopies( textSplit ); 
  }
}//------------------------------------------------------------------------------------------------------------------ 
function getLettersPic() {              // getting the background picture for the first button
   if( startIsOn == true ) {  var put2 = stop } else { var put2 = start }
   var putText = '<input class="none" type=button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  // empty text for the first button while there is a pic
  if( startIsOn == true )  { //------------------
      var x = [-537,   -411,    -220,   -4 ]  // all colors for STOP button 
      var y = [-219,   -204,    -185,  -160]
      if( colors[5] == 'green')  { y = [-227,   -215,    -202,  -178]}
      if( colors[5] == 'orange') { y = [-226,   -215,    -202,  -177]}
  } else {//  small   med  large  x-large
      var x = [-537, -394, -220, -10 ]  // all colors for START button
      var y = [-37,   -24,    5,  26 ]
      if( colors[5] == 'green')  { y = [-45, -35, -12, 8 ] }
      if( colors[5] == 'orange') { y = [-44, -35, -12, 8 ] } 
         } //---------------
  for( var i = 0; i < 4; i++ ) {
    if( sizeBool[i] == 1 ) bgBack = 'background: url("img/start/allStops.png") ' +x[i]+'px '+y[i]+'px no-repeat';
  }                                                                                            // large   large
  if( first1 == true || first2 == true )  bgBack = 'background: url("img/start/allStops.png") ' +x[2]+'px '+y[2]+'px no-repeat';
  changeCss( 0, 1, '.button', bgBack, 'innerHTML: ' + putText, setting[0]);    // setting[0] -background-color
   main.setSingleEvevnt('.none', put2 );  // event for the first button
}//-----------------------------------------------------------------------------------------------------------------------------
function formatTime(input) {  //-----------------  function to format milliseconds to "00:00:00.000"
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
//---------------------------------- function for changing CSS styles----------------------------
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
    if(x.match('innerHTML') )     s[ elnum ].innerHTML = x.substr(11);
    }
   }
  } 
}
//-------------------------------------
if( load == true ) { 
  changeLarge(); 
   load = false;
}

