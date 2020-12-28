let scene, camera, renderer, cube
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight,
    0.1,
    1000,

    ); //75 degree view
    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

     geometry = new THREE.BoxGeometry( 2,2,2 );
     material = new THREE.MeshBasicMaterial( {color: 'skyblue'} );
     
     cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z=5;
}
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.03;
    renderer.render(scene, camera);
}
function onWindowResize(){
    camera.aspect= window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}
window.addEventListener('resize', onWindowResize, false)
init();
animate();
