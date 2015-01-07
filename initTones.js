
function initTones( val ){

  var v = val || 60;

  var tones = [];
 
  var dir = [

    [ 0 ,  0 , -1 ],
    [ 0 ,  0 ,  1 ],
    [ 1 ,  0 ,  0 ],
    [-1 ,  0 ,  0 ],
    [ 0 ,  1 ,  0 ],
    [ 0 , -1 ,  0 ],

  ]

  var loops = [

    /*'audio/grant/grant1.mp3', 
    'audio/grant/grant2.mp3', 
    'audio/grant/grant3.mp3', 
    'audio/grant/grant4.mp3', 
    'audio/grant/grant5.mp3', 
    'audio/grant/grant6.mp3',
    'audio/grant/grant1.mp3', 
    'audio/grant/grant2.mp3', 
    'audio/grant/grant3.mp3', 
    'audio/grant/grant4.mp3', 
    'audio/grant/grant5.mp3', 
    'audio/grant/grant6.mp3',
    'audio/grant/grant1.mp3', 
    'audio/grant/grant2.mp3', 
    'audio/grant/grant3.mp3', 
    'audio/grant/grant4.mp3', */

    'audio/box1.wav', 
    'audio/box2.wav', 
    'audio/box3.wav', 
    'audio/box4.wav', 
    'audio/box5.wav', 
    'audio/box6.wav',
    'audio/box7.wav',
    'audio/box8.wav',
    'audio/box9.wav',
    'audio/box10.wav',
    'audio/box11.wav',
    'audio/box12.wav',
    'audio/box13.wav',
    'audio/box14.wav',
    'audio/box15.wav',
    'audio/box16.wav',
  ]

  var numOf = 4;

  for( var i  = 0; i < 1; i++ ){

    for( var j = 0; j < numOf; j++ ){
      for( var k = 0; k < numOf; k++ ){

        var d = dir[i];

        var x= 0,y = 0,z = 0;
        var freq = i 
       
        if( d[0] != 0 ){

          x = d[0] * .3;
          y = (((j+.5) - numOf/2 )/numOf) * .6; 
          z = (((k+.5) - numOf/2 )/numOf) * .6; 


        }else if(  d[1] != 0 ){

          x = (((j+.5) - numOf/2 )/numOf) * .6; 
          y = d[1] * .3;
          z = (((k+.5) - numOf/2 )/numOf) * .6; 

        }else if(  d[2] != 0 ){

          x = (((j+.5) - numOf/2 )/numOf) * .6; 
          y = (((k+.5) - numOf/2 )/numOf) * .6; 
          z = d[2] * .3;

        }


        var v = (j+1) * 20;
        var pos = new THREE.Vector3( x , y , z );

        var loop = loops[ j * numOf + k];
        neededToLoad++;
        tones.push( new Loop( audioController , loop , .1 , pos ) );

      }


    }


  }


  
  return tones;

}




