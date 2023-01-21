import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SolarSystem from "./SolarSystem";

const canvas = document.getElementById("c");

// init
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  1000000
);
camera.position.y = 6000;
// camera.position.y =2;

const scene = new THREE.Scene();
const solars = new SolarSystem();

solars.addStars();
solars.addBlackHole();
solars.addComet();

const cameraInterval = setInterval(() => {
  if(camera.position.y<70){

  camera.position.y-=20;
    clearInterval(cameraInterval);

  }
  camera.position.y-=10;
},10)



      solars.addSun();
      solars.addPlanet("gray", 0.39, 0.02);
      solars.addPlanet("orange", 0.72, 0.03);
      solars.addPlanet("green", 1, 0.05);
      solars.addPlanet("red", -1.52, 0.04);
      solars.addPlanet("brown", 5.2, 0.1);
      solars.addPlanet("cyan", -9.54, 0.08);
      solars.addPlanet("cyan", 19.2, 0.07);
      solars.addPlanet("cyan", -20.6, 0.04);
      solars.addAsteroids();
      solars.addAsteroidsSecond();

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 0, 0);

      scene.add(pointLight);



scene.add(solars.points);
scene.add(solars.group);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
new OrbitControls(camera, renderer.domElement);

renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation


function animation(time) {

  solars.updateRoation();
  renderer.render(scene, camera);
}
