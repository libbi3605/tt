import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TextGeometry( 'BOTA', {
  font: undefined,
  size: 5,
  height: 1,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 0.5,
  bevelSize: 0.3,
  bevelOffset: 0,
  bevelSegments: 5
} );

const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const textMesh = new THREE.Mesh( geometry, material );
scene.add( textMesh );

camera.position.z = 15;

function animate() {
  requestAnimationFrame( animate );
  textMesh.rotation.x += 0.01;
  textMesh.rotation.y += 0.01;
  renderer.render( scene, camera );
}

animate();
