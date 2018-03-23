window.onload = function(){
    onload1();    
    onload2();
    onload3();
}


function onload1(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var timer;
    var length = 830, height = 450;

    function showButton (){
    	for (var i=0; i < buttons.length; i++){
    		if (buttons[i].className == 'on'){
    			buttons[i].className = '';
    			break;
    		}
    	}    	
        buttons[index - 1].className = 'on';
    }

    function animate(offset) {
    	var newLeft = parseInt(list.style.left) + offset;
    	var time = 200;
    	var interval = 10;
    	var speed = offset/(time/interval);

    	function go(){
    		if((speed < 0 && parseInt(list.style.left) > newLeft)
    		   || (speed > 0 && parseInt(list.style.left) < newLeft)){
    			list.style.left = parseInt(list.style.left) + speed +'px';
    		    setTimeout(go, interval);
    	    }
    	    else{
    	    	 
    		    list.style.left = newLeft + 'px';
    		    if (newLeft > -length){
    		    	list.style.left = (length*8) + 'px';
                }
                if (newLeft < -(length*8)){
        	        list.style.left = -length + 'px';
        	    }
            }   
        }
        go();
    }

    function play(){
    	timer = setInterval(function onload1(){
    		next.onclick();
    	},6000);

    }

    function stop(){
    	clearInterval(timer);
    }

    next.onclick = function(){
    	if (index == 8){	
    		index = 1;
    	}
    	else{
    			index +=1;
    	}
    	
    	showButton();
        animate(-length)
	}
	prev.onclick = function(){
		if (index == 1){
    		index = 8;
    	}
    	else{
    		index -=1;
    	}

		showButton();
		animate(-length)
    }

    for (var i = 0; i< buttons.length; i++) {
    	buttons[i].onclick = function(){
    		if (this.className =='on'){
    			return;
    		}
    		var myIndex = parseInt(this.getAttribute('index'));
    		var offset = -length * (myIndex - index);

    		animate(offset);
    		index = myIndex;
    		showButton();

    	}
    }
    container.onmouseover = stop;
    container.onmouseout = play;

    play();
}

function onload2(){
    var container2= document.getElementById('container2');
    var list2 = document.getElementById('list2');
    var prev2 = document.getElementById('prev2');
    var next2 = document.getElementById('next2');
    var index = 1;
    var buttons2 = document.getElementById('buttons2').getElementsByTagName('span');
    var timer2;
    var length2 = 369, height2 = 450;

    function showButton2 (){
        for (var i=0; i < buttons2.length; i++){
            if (buttons2[i].className == 'on'){
                buttons2[i].className = '';
                break;
            }
        }       
        buttons2[index - 1].className = 'on';
    }

    function animate2(offset2) {
        var newLeft2 = parseInt(list2.style.left) + offset2;
        var time = 200;
        var interval = 10;
        var speed2 = offset2/(time/interval);

        function go2(){
            if((speed2 < 0 && parseInt(list2.style.left) > newLeft2)
               || (speed2 > 0 && parseInt(list2.style.left) < newLeft2)){
                list2.style.left = parseInt(list2.style.left) + speed2 +'px';
                setTimeout(go2, interval);
            }
            else{
                 
                list2.style.left = newLeft2 + 'px';
                if (newLeft2 > -length2){
                    list2.style.left = (length*3) + 'px';
                }
                if (newLeft2 < -(length2*3)){
                    list2.style.left = -length2 + 'px';
                }
            }   
        }
        go2();
    }

    next2.onclick = function(){
        if (index == 3){    
            index = 1;
        }
        else{
                index +=1;
        }
        
        showButton2();
        animate2(-length2)
    }
    prev2.onclick = function(){
        if (index == 1){
            index = 3;
        }
        else{
            index -=1;
        } 

        showButton2();
        animate2(-length2)
    }
    for (var i = 0; i< buttons2.length; i++) {
        buttons2[i].onclick = function (){
            if (this.className =='on'){
                return;
            }
            var myIndex2 = parseInt(this.getAttribute('index'));
            var offset2 = -length2 * (myIndex2 - index);

            animate2(offset2);
            index = myIndex2;
            showButton2();

        }
    }
}
//搜索框提示功能
function onload3(){
  var search =document.getElementsByClassName('search')[0];
  var grec = document.getElementsByClassName('grec')[0];
  //输入框聚焦时显示提示框
  search.onfocus = () => {
    grec.style.display = 'block';
  }

  //输入框失去焦点时隐藏提示框
  search.onblur = () => {
    grec.style.display = 'none';
  }
}

function onload4(){
    var img = document.getElementById("img");
    var bigshowwrapper=document.getElementsByClassName("bigshowwrapper")[0];

    img.onclick=()=>{
    bigshowwrapper.li.class="2"
    }
}



