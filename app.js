setTimeout(get_temp, false);
function get_temp () {
    fetch( "https://ms.purplepatch.online/weather_api_v2/" )
    .then( res => res.json())
    .then( data =>{
        var temp = document.querySelector('.temp');
        temp.innerHTML = translteNum( Math.trunc(data['main']['temp']) );
    }).catch( function(error) {
        console.log(error);
    });
    setTimeout(get_temp, 2000);
}

function translteNum( num_str ){
    var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    var changed_nun='';
    num_str.toString().split('').forEach(l => {
      if(isNaN(l)){changed_nun +=l;}else{changed_nun += bengali[l];}
    });
    return changed_nun;
}

var slide_1 = document.querySelector(".slide_1");
var slide_2 = document.querySelector(".slide_2");
var slide_3 = document.querySelector(".slide_3");
var block_0 = document.querySelector(".block_0");
var block_1 = document.querySelector(".block_1");
var block_2 = document.querySelector(".block_2");
var block_11 = document.querySelector(".block_11");
var block_12 = document.querySelector(".block_12");
var block_14 = document.querySelector(".block_14");
var block_15 = document.querySelector(".block_15");
var block_16 = document.querySelector(".block_16");
var block_17 = document.querySelector(".block_17");
var block_19 = document.querySelector(".block_19");
var block_20 = document.querySelector(".block_20");
var block_21 = document.querySelector(".block_21");

setTimeout( revealBlocks_one, 500);
 
function revealBlocks_one() { 
    block_0.className = block_0.className.replace('hidden', '');
    block_0.classList ? block_0.classList.add('fadeInUp') : block_0.className += ' fadeInUp';
    block_1.className = block_1.className.replace('hidden', '');
    block_1.classList ? block_1.classList.add('fadeInUp') : block_1.className += ' fadeInUp';

    setTimeout(function() {
        block_2.className = block_2.className.replace('hidden', '');
        block_2.classList ? block_2.classList.add('fadeInUp') : block_2.className += ' fadeInUp';
        setTimeout(revealBlocks_last, 2000);
    }, 100);

} 

function revealBlocks_last() {
    setTimeout(function() {
        slide_2.className = slide_2.className.replace('hidden', '');
        slide_1.classList ? slide_1.classList.add('hidden') : slide_1.className += ' hidden';
        block_0.className = block_0.className.replace('fadeInUp', 'hidden');
        block_1.className = block_1.className.replace('fadeInUp', 'hidden');
        block_2.className = block_2.className.replace('fadeInUp', 'hidden');
    }, 100);    

    block_11.className = block_11.className.replace('hidden', '');
    block_11.classList ? block_11.classList.add('fadeInUp') : block_11.className += ' fadeInUp';

    setTimeout(function() {
        block_12.className = block_12.className.replace('hidden', '');
        block_12.classList ? block_12.classList.add('fadeInUp') : block_12.className += ' fadeInUp';
            setTimeout(function() {
                block_14.className = block_14.className.replace('hidden', '');
                block_14.classList ? block_14.classList.add('fadeInZoom') : block_14.className += ' fadeInZoom';
                setTimeout(function() {
                    block_15.className = block_15.className.replace('hidden', '');
                    // block_15.classList ? block_15.classList.add('fadeInZoom') : block_15.className += ' fadeInZoom';
                    setTimeout(revealBlocks_middle, 2000);
                }, 300);
            }, 300);
    }, 200);
}

function revealBlocks_middle(){
    setTimeout(function() {
        slide_3.className = slide_3.className.replace('hidden', '');
        slide_2.classList ? slide_2.classList.add('hidden') : slide_2.className += ' hidden';
        block_11.className = block_11.className.replace('fadeInUp', 'hidden');
        block_12.className = block_12.className.replace('fadeInUp', 'hidden');
        block_14.className = block_14.className.replace('fadeInZoom', 'hidden');
        // block_15.className = block_15.className.replace('fadeInZoom', 'hidden');
    }, 10);
    
    block_16.className = block_16.className.replace('hidden', '');
    block_16.classList ? block_16.classList.add('fadeInUp') : block_16.className += ' fadeInUp';

    setTimeout(function() {
        block_17.className = block_17.className.replace('hidden', '');
        block_17.classList ? block_17.classList.add('fadeInLeft') : block_17.className += ' fadeInLeft';
            setTimeout(function() {
                block_19.className = block_19.className.replace('hidden', '');
                block_19.classList ? block_19.classList.add('fadeInZoom2') : block_19.className += ' fadeInZoom2';
                setTimeout(function() {
                    block_20.className = block_20.className.replace('hidden', '');
                    // block_20.classList ? block_20.classList.add('fadeInZoom') : block_20.className += ' fadeInZoom';
                    setTimeout(revealBlocks_third, 2000);
                }, 300);
            }, 300);
    }, 200);
}

function revealBlocks_third() {
    setTimeout(function() {
        slide_3.classList ? slide_3.classList.add('hidden') : slide_3.className += ' hidden';
        slide_1.className = slide_1.className.replace('hidden', '');
        block_16.className = block_16.className.replace('fadeInUp', 'hidden');
        block_17.className = block_17.className.replace('fadeInUp', 'hidden');
        block_19.className = block_19.className.replace('fadeInZoom2', 'hidden');
        // block_20.className = block_20.className.replace('fadeInZoom', 'hidden');
    }, 10);
    
    setTimeout(revealBlocks_one, 100);
}
