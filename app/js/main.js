/*$(function(){

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

});*/


var keyboard = function(mode,langue,os){

    this.mode = mode;
    this.ctrl = '_default';
    this.langue = langue;
    this.os = os;
    this.switch = '123';
    this.controls = {
        1 : 'Esc', 2 : 'Tab', 3 : 'Shift', 4 : 'Ctrl', 5 : 'Alt', 6 : 'Cmd', 7 : 'Space'
    }
    this.touches = {
        PAD :
            {
              _default : { 1 : 'A', 2 : 'Z', 3 : 'E', 4 : 'R', 5 : 'T', 6 : 'Y', 7 : 'U', 8 : 'I', 9 : 'O', 10 : 'P', 11 : 'Q', 12 : 'S', 13 : 'D',14 : 'F',15 : 'G',16 : 'H',17 : 'J',18 : 'K',19 : 'L',20 : 'M',21 : 'W',22 : 'X',23 : 'C',24 : 'V',25 : 'B',26 : 'N', 27 : '<--', 28 : 'Enter', 29 : '123' },
              _shift : { 1:'F1',2 : 'F2',3 : 'F3',4 : 'F4',5 : 'F5',6 : 'F6',7 : 'F7', 8 : 'F8', 9 : 'F9' }
            },
        NUM :
            {   _default : { 1 : '1', 2 : '2', 3 : '3', 4 : '4', 5 : '5', 6 : '6', 7 : '7', 8 : '8', 9 : '9', 10 : '0', 11 : '@', 12 : '#', 13 : '$', 14 : '%', 15 : '&', 16 : '*', 17 : '-', 18 : '+', 19 : '(', 20 : ')', 21 : '!', 22 : '"', 23 : '"', 24 : ':', 25 : ';', 26 : '/', 27 : '<--', 28 : 'Enter', 29 : 'ABC' },
                _shift : { 1:'F1', 2 : 'F2', 3 : 'F3', 4 : 'F4', 5 : 'F5', 6 : 'F6', 7 : 'F7', 8 : 'F8', 9 : 'F9' }
            }
        }


    this.addControlsTouch = function(){
        var container = document.getElementById('control'),
        touch = this.controls,
        el = this;

        for (var id in touch) {
            li = document.createElement('li');
            li.className = 'col-mb-1';

            span = document.createElement('span');
            txt = document.createTextNode(touch[id]);

            id == 7 ? li.className = 'col-mb-4' : '';


            span.appendChild(txt);
            li.appendChild(span);
            container.appendChild(li);
            if(id == 3){
                li.onclick = function(){
                    el.switchControl(this,'_shift');
                }
            }
        }


    }

    this.addTouch = function(){

        var t = this;
        var touchesObj = this.touches[this.mode];

        container = document.getElementById('key-js'),
        switchEl = document.getElementById('switch'),
        li = '',
        span = '',
        txt = '';

        //remove child elements

        while (container.firstChild) {
            container.removeChild(container.firstChild);

        }

            var touches = touchesObj[this.ctrl];

            for (var id in touches) {
                li = document.createElement('li');
                li.className = 'col-mb-1';
                span = document.createElement('span');
                if(id == 29) {
                    li.id = 'switch';
                    li.onclick = function(){
                        t.switchMode();
                    }
                }

                id == 28 ? li.className = 'col-mb-2' : '';

                txt = document.createTextNode(touches[id]);
                span.appendChild(txt);
                li.appendChild(span);
                container.appendChild(li);
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


    this.switchControl = function (el,className){
        if (el.classList) {
            el.classList.contains(className) ? this.ctrl = '_default' : this.ctrl = '_shift';
            el.classList.toggle(className);
        } // ie 8
          else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf(className);

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push(className);

            el.className = classes.join(' ');
        }

        this.addTouch();
    }

    this.switchMode = function(){
        // Switch mode alphanumeric, numeric
        this.mode == 'PAD' ? this.mode = 'NUM' : this.mode = 'PAD';
        this.addTouch();
    }

    //init some stuff.

    this.init = function(){
       this.addControlsTouch();
       this.addTouch();

    }

    this.init();

}

var DefaultKeyb = new keyboard('PAD','fr','mac');
var switchEl = document.querySelector('#switch');






