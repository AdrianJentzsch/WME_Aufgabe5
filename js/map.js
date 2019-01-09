// Scene Configurations
const WIDTH = 1350;
const HEIGHT = 600;
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

// Scene, camera, canvas, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
const canvas = document.getElementById("mapa");
const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });

camera.position.z = 300;
scene.add(camera);
renderer.setSize(WIDTH, HEIGHT);

// Light
const light = new THREE.PointLight(0xffffff, 1.2);
light.position.set(0, 0, 6);
scene.add(light);

var key = "pk.eyJ1IjoicGlra3UiLCJhIjoiY2pwenloamxoMDl0djQybWxlY3hkaGVpZSJ9.MKRV1BETvooEv5r_dEaXTQ";
var options = {
    lat : 0,
    lng : 0,
    zoom: 4,
    style: "mapbox://styles/mapbox/basic-v9",
    pitch : 50,
};
var mappa = new Mappa("MapboxGL",key);
let myMap ;
myMap = mappa.tileMap (options);
myMap.overlay(canvas);