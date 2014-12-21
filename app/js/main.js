$(function(){

const _PADD_VERR = 'pad',
      _NUM_VERR = 'num';

var switchKey = $('li.switchpad'),
    shiftKey = $('li.shift'),
    listTouch = $('.keyboard li').find('div');

    switchKey.click(function(){
        $(this).toggleClass(_PADD_VERR+' '+_NUM_VERR);
        var tclass = $(this).attr('class').split(' ').pop();

        listTouch.hide();
        listTouch.each(function() {
            if($(this).hasClass(tclass)){
                $(this).show();
            }
        });
    });

    // switch shift keys
    shiftKey.click(function(){
        $(this).toggleClass('active');
        listTouch.filter('.' + _NUM_VERR).children().hide();
        if((switchKey.hasClass(_NUM_VERR)) && shiftKey.hasClass('active')){
          listTouch.filter('.' + _NUM_VERR).children('.shift').css('display','block');
        } else {
            listTouch.filter('.' + _NUM_VERR).children('.none').css('display','block');
        }

    });

});


var keyboard = function(mode,langue,os){

    this.mode = mode;
    this.langue = langue;
    this.os = os;
    this.switch = '123';
    this.touches = {
        PAD :
            {
              _default : { 'A' : 'A', 'Z' : 'Z', 'E' : 'E', 'R' : 'R', 'T' : 'T', 'Y' : 'Y', 'U' : 'U', 'I' : 'I', 'O' : 'O', 'P' : 'P', 'Enter' : 'Enter', 'switchMode' : '123' },
              _shift : { 1:'F1',2 : 'F2',3 : 'F3',4 : 'F4',5 : 'F5',6 : 'F6',7 : 'F7', 8 : 'F8', 9 : 'F9' }
            },
        NUM :
            {   _default : { 1 : '1', 2 : '2', 3 : '3', 4 : '4', 5 : '5', 6 : '6', 7 : '7', 8 : '8', 9 : '9', 10 : '0', 11 : '@', 12 : '#', 13 : '$', 14 : '%', 15 : '&', 16 : '*', 17 : '-', 18 : '+', 19 : '(', 20 : ')', Enter : 'Enter', switchMode : '123' },
                _shift : { 1:'F1', 2 : 'F2', 3 : 'F3', 4 : 'F4', 5 : 'F5', 6 : 'F6', 7 : 'F7', 8 : 'F8', 9 : 'F9' }
            }
        }

    this.addTouch = function(){

        var t = this;
        var touchesObj = this.touches[this.mode];

        container = document.getElementById('key-js'),
        switchEl = document.getElementById('switch'),
        li = '',
        txt = '';

        //remove child elements

        while (container.firstChild) {
            container.removeChild(container.firstChild);

        }

        for (var id in touchesObj) {
            var touches = touchesObj[id];
            for (var id in touches) {
                li = document.createElement('li');
                if(id == 'switchMode') {
                    li.id = 'switch';
                    li.onclick = function(){
                        t.switchMode();
                    }
                }
                txt = document.createTextNode(touches[id]);
                li.appendChild(txt);
                container.appendChild(li);
            }
        }

    }

    this.getTouchMode = function(mode){
        // return touch mode for keyboard
    }

    this.setTouchMode = function(mode){
        this.mode = mode;
    }

    this.switchLang = function(langue){
        // switch lang mode
    }

    this.switchMode = function(){
        // Switch mode alphanumeric, numeric
        this.mode == 'PAD' ? this.mode = 'NUM' : this.mode = 'PAD';
        this.addTouch();
    }

    //init some stuff.

    this.init = function(){
       this.addTouch();

    }

    this.init();

}

var DefaultKeyb = new keyboard('PAD','fr','mac');
var switchEl = document.querySelector('#switch');






