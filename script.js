const container = document.querySelector('.three')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, 2 / 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 500, 300 );
container.appendChild( renderer.domElement)

const geometry = new THREE.BoxGeometry( 2, 2, 2, 80 );
const material = new THREE.MeshBasicMaterial( {
    color: 0x00ff00,
    wireframe: true 
} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate = () => {

	requestAnimationFrame( animate );
 
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
  
};

animate();