import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import SolarSystem from "./SolarSystem";




const canvas = document.getElementById("c");

// init

// camera.position.y = 5;
// camera.position.y =2;

// const scene = new THREE.Scene);
const solars = new SolarSystem();

solars.addStars();
solars.addBlackHole();
// solars.addComet();

const cameraInterval = setInterval(() => {
  if (solars.camera.position.y < 30) {
    solars.camera.position.y -= 4;
    clearInterval(cameraInterval);
  }
  solars.camera.position.y -= 10;
}, 10)

solars.addSun();
solars.addPlanet("mercury", 0.39, 0.03);
solars.addPlanet("venus", 0.72, 0.05);
solars.addPlanet("earth", 1, 0.06);
solars.addPlanet("mars", -1.52, 0.04);
solars.addPlanet("jupiter", 5.2, 0.1);
solars.addPlanet("saturn", -9.54, 0.08);
solars.addPlanet("uranus", 19.2, 0.07);
solars.addPlanet("neptune", -20.6, 0.04);
solars.addAsteroids();
solars.addAsteroidsSecond();

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 0);
solars.scene.add(pointLight);
solars.scene.add(solars.points);
solars.scene.add(solars.group);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
new OrbitControls(solars.camera, renderer.domElement);

renderer.setClearColor("black");
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation

function animation(time) {
  solars.updateRoation();
  renderer.render(solars.scene, solars.camera);
}

