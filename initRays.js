function initRays( numOf ){

  var numOf = numOf || 20;
  for( var j = 0; j < numOf; j++ ){

    var t = (j / numOf ) * 2 * Math.PI;

    var r = 3. + Math.random() * 2;
    var offset = [ 
      Math.cos( t ) * r,
      Math.sin( t ) * r
    ]

    var o = offset;

    var openingPositions = [];

    var amount = Math.floor( (Math.random() * 10 ) + 1 ) / 200
    for( var i =0; i < 200; i ++ ){

      var t = (i / 200 ) *  Math.PI * 2;
      var r = Math.random();
      var x = o[0] + (.5 + Math.sin( i * amount * 2 * Math.PI ) * .2 * r) *  Math.cos( t )
      var y = o[1] + (.5 + Math.sin(  i * amount * 2 * Math.PI ) * .2 * r) *Math.sin( t )

      var z = 10;

      openingPositions.push([ x , z , y] );
    
    }

    var opening = new Opening( openingPositions );


  }


}
