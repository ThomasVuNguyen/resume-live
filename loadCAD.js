let scene, camera, renderer, cube
function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('yellow');
    camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/window.innerHeight,
    0.1,
    1000,

    ); //75 degree view
    camera.position.set(0,100,100);
    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    var loader = new THREE.GLTFLoader();
    loader.load( 'test.gltf', function ( gltf ) {

        scene.add( gltf.scene );
    
    } );
    
    animate();
}
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
function onWindowResize(){
    camera.aspect= window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}
window.addEventListener('resize', onWindowResize, false)
init();

