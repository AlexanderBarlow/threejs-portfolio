const bg1 = require('./assets/hi/png')

var scene = new THREE.Scene();

// create a camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.PlaneGeometry( 2, 2 );

var texture = new THREE.TextureLoader().load( bg1 );

// create a material with that texture
var material = new THREE.MeshBasicMaterial( { map: texture } );

var mesh = new THREE.Mesh( geometry, material );

// add the mesh to the scene
scene.add( mesh );

var position = 0;

// define an update function
function update() {
  // update the position of the mesh
  mesh.position.y = Math.sin( position ) * 2;
  
  // increase the position variable
  position += 0.1;
  
  // render the scene
  renderer.render( scene, camera );
  
  // call the update function again on the next frame
  requestAnimationFrame( update );
}

// call the update function to start the animation
update();
