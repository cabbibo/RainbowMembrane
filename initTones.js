
function initTones( val ){

  var v = val || 60;

  var tones = [];
  
  var pos = new THREE.Vector3( .3 , .3 , .3 );
  tones.push( new Tone(audioController , v , pos) );

  var pos = new THREE.Vector3( -.3 , .3 , .3 );
  tones.push( new Tone(audioController , v*2 , pos) );

  var pos = new THREE.Vector3( .3 , -.3 , .3 );
  tones.push( new Tone( audioController , v*3 , pos) );

  var pos = new THREE.Vector3( .3 , .3 , -.3 );
  tones.push( new Tone(audioController , v*4 , pos) );

  var pos = new THREE.Vector3( .3 , -.3 , -.3 );
  tones.push( new Tone(audioController , v*5 , pos) );

  var pos = new THREE.Vector3( -.3 , .3 , -.3 );
  tones.push( new Tone(audioController , v*6 , pos) );

  var pos = new THREE.Vector3( -.3 , -.3 , .3 );
  tones.push( new Tone(audioController , v*7 , pos) );

  var pos = new THREE.Vector3( -.3 , -.3 , -.3 );
  tones.push( new Tone(audioController , v*8 , pos) );


  return tones;

}




