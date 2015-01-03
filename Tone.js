
function Tone( audioController ,  freq , position ){

  var ctx = audioController.ctx;

  this.base   = ctx.createOscillator();
  this.gain   = ctx.createGain();
  this.panner = ctx.createPanner();

  this.base.frequency.value = freq;
  this.base.start( 0 );

  this.base.connect( this.gain );
  this.gain.connect( this.panner );
  this.panner.connect( audioController.gain );

  this.position = position;

  var p = position;
  this.panner.setPosition( p.x , p.y , p.z );
 
  audioController.addToUpdateArray( this.update.bind( this )  );


}

Tone.prototype.update = function(){

  if( this.position ){

    var p = this.position;
  //  this.panner.setPosition( p.x , p.y , p.z );
  //
    tv1.copy( this.position );
    tv1.sub( soundPos );
    this.gain.gain.value = Math.min( 1 , .1 / tv1.length() );

  }

}

