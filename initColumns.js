function initColumns( numOf ){

  var numOf = numOf || 20;
  var geo = new THREE.BoxGeometry( .1 , 10. , 1 );
  var mat =  new THREE.MeshLambertMaterial({
    color:0x333333 
  });
  
  for( var i = 0; i < numOf ; i ++ ){
    
    var cube = new THREE.Mesh( geo , mat );


    var r = 5. + Math.random() * 18;
    var t = Math.random() * 2 * Math.PI;

    var x = Math.cos( t ) * r;
    var y = Math.sin( t ) * r;

    mover.add( cube );
   
    cube.position.x = x;//( Math.random() -.5 ) * 20;
    cube.position.y = 5;
    cube.position.z = y;//( Math.random() -.5 ) * 20;
    
    cube.rotation.y = Math.random() * 2 * Math.PI;
    cube.updateMatrix();
    cube.updateMatrixWorld();
    //cube.visible = false;
    rayStoppers.push( cube );

  }


}
