function initGround(){


  var geo = new THREE.PlaneGeometry( 100 , 100 );
  /*var mat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: shaders.vs.ground,
    fragmentShader: shaders.fs.ground
  });*/

  var mat = new THREE.MeshLambertMaterial({
    color:0x555555,
    side: THREE.DoubleSide
  });
  var ground = new THREE.Mesh( geo , mat );

  mover.add( ground );
  ground.rotation.x = -Math.PI/2;
  ground.updateMatrix();
  ground.updateMatrixWorld();

  rayStoppers.push( ground );


  var mat = new THREE.MeshLambertMaterial({
    color:0x555555,
    side: THREE.DoubleSide
  });
  var ceil = new THREE.Mesh( geo , mat );

  //mover.add( ceil );
  ceil.rotation.x = Math.PI/2;
  ceil.position.y = 10.5;
}
