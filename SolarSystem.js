import * as THREE from "three";

class SolarSystem {
  constructor() {
    this.points = null;
    this.group = new THREE.Group();
    this.loader = new THREE.TextureLoader();
    this.planet = null;
    this.material = null;
    this.sunmesh = null;
    this.cometmesh=null;
    this.sun = null;
    this.individualGroups = [];
    this.asteroidGroup = [];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

  addStars() {
    const vertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      vertices.push(x, y, z);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const material = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
    this.points = new THREE.Points(geometry, material);
  }

  addSun() {
    this.sun = new THREE.SphereGeometry(0.3);
    this.material = new THREE.MeshBasicMaterial({
      map: this.loader.load("./assets/sun.jpeg"),
    });
    this.sunmesh = new THREE.Mesh(this.sun, this.material);
    this.sunmesh.position.set(0, 0, 0);
    this.group.add(this.sunmesh);
  }

  addPlanet(x, position, radius) {
    this.planet = new THREE.SphereGeometry(radius);
    this.material = new THREE.MeshBasicMaterial({
      map: this.loader.load(`./assets/${x}.jpeg`),
    });
    this.planetmesh = new THREE.Mesh(this.planet, this.material);
    this.planetmesh.position.set(position, 0, 0);
    const newgroup = new THREE.Group();
    newgroup.add(this.planetmesh);
    this.individualGroups.push(newgroup);
    this.group.add(newgroup);
  }

  addBlackHole(){

      const blackhole=new THREE.SphereGeometry(10);


      //STAR BACKGROUND HOLE
      this.material = new THREE.MeshBasicMaterial({
        // color: "#95580D",
        map:this.loader.load("./assets/starry.jpeg")
      });

      let bhmesh=new THREE.Mesh(blackhole,this.material);

      bhmesh.position.set(-55,1000,-55);
      this.group.add(bhmesh);

      //RED PLANET BACKGROUND HOLE
      this.material = new THREE.MeshBasicMaterial({
        map:this.loader.load("./assets/planet.jpeg")

      });

      bhmesh=new THREE.Mesh(blackhole,this.material);
      bhmesh.position.set(-55,1200,55);
      this.group.add(bhmesh);


      //EXTRA TERRESTIAL BACKGROUND HOLE
      this.material = new THREE.MeshBasicMaterial({
        map:this.loader.load("./assets/extratres.jpeg")
      });

      bhmesh=new THREE.Mesh(blackhole,this.material);
      bhmesh.position.set(55,800,55);
      this.group.add(bhmesh);


      //MOON BACKGROUND HOLE
      this.material = new THREE.MeshBasicMaterial({
        map:this.loader.load("./assets/moon.png")
      });

      bhmesh=new THREE.Mesh(blackhole,this.material);
      bhmesh.position.set(55,500,-55);
      this.group.add(bhmesh);

       //ASTRO BACKGROUND HOLE
       this.material = new THREE.MeshBasicMaterial({
        map:this.loader.load("./assets/astro.webp")
      });

      bhmesh=new THREE.Mesh(blackhole,this.material);
      bhmesh.position.set(-80,700,-95);
      this.group.add(bhmesh);





  }

  addComet(){
    for(let i=0;i<100;i++)
    {
      const comet=new THREE.SphereGeometry(0.5)
      this.material = new THREE.MeshBasicMaterial({
        color: "silver",
      });
      this.cometmesh=new THREE.Mesh(comet,this.material);
      this.cometmesh.position.set(-10,100+i*1,-10);
      this.group.add(this.cometmesh);

    }

    for(let i=0;i<100;i++)
    {
      const comet=new THREE.SphereGeometry(0.5)
      this.material = new THREE.MeshBasicMaterial({
        color: "silver",
      });
      this.cometmesh=new THREE.Mesh(comet,this.material);
      this.cometmesh.position.set(10,300+i*1,-10);
      this.group.add(this.cometmesh);
    }

    for(let i=0;i<100;i++)
    {
      const comet=new THREE.SphereGeometry(0.5)
      this.material = new THREE.MeshBasicMaterial({
        color: "silver",
      });
      this.cometmesh=new THREE.Mesh(comet,this.material);
      this.cometmesh.position.set(10,500+i*1,10);
      this.group.add(this.cometmesh);
    }

    for(let i=0;i<100;i++)
    {
      const comet=new THREE.SphereGeometry(0.5)
      this.material = new THREE.MeshBasicMaterial({
        color: "silver",
      });
      this.cometmesh=new THREE.Mesh(comet,this.material);
      this.cometmesh.position.set(-10,900+i*1,10);
      this.group.add(this.cometmesh);
    }







    // for(let i=0;i<100;i++)
    // {
    //   const comet=new THREE.SphereGeometry(0.5)
    //   this.material = new THREE.MeshBasicMaterial({
    //     color: "silver",
    //   });
    //   this.cometmesh=new THREE.Mesh(comet,this.material);
    //   this.cometmesh.position.set(-10,100+i*1,10);
    //   this.group.add(this.cometmesh);
    // }

    // for(let i=0;i<100;i++)
    // {
    //   const comet=new THREE.SphereGeometry(0.5)
    //   this.material = new THREE.MeshBasicMaterial({
    //     color: "silver",
    //   });
    //   this.cometmesh=new THREE.Mesh(comet,this.material);
    //   this.cometmesh.position.set(2,400+i*1,-10);
    //   this.group.add(this.cometmesh);
    // }

    // for(let i=0;i<100;i++)
    // {
    //   const comet=new THREE.SphereGeometry(0.5)
    //   this.material = new THREE.MeshBasicMaterial({
    //     color: "silver",
    //   });
    //   this.cometmesh=new THREE.Mesh(comet,this.material);
    //   this.cometmesh.position.set(10,800+i*1,10);
    //   this.group.add(this.cometmesh);
    // }

    // for(let i=0;i<100;i++)
    // {
    //   const comet=new THREE.SphereGeometry(0.5)
    //   this.material = new THREE.MeshBasicMaterial({
    //     color: "silver",
    //   });
    //   this.cometmesh=new THREE.Mesh(comet,this.material);
    //   this.cometmesh.position.set(10,800+i*1,-20);
    //   this.group.add(this.cometmesh);
    // }


 
  }

  addAsteroids() {
    for (let i = 0; i < 8000; i++) {
      this.planet = new THREE.SphereGeometry((this.getRandomInt(2,9))/1000);
      this.material = new THREE.MeshBasicMaterial({
        color: "gray",
      });

      this.planetmesh = new THREE.Mesh(this.planet, this.material);
      if(i%2==0)
      {
      this.planetmesh.position.set(2.7, 0,-i/(this.getRandomInt(1000,100000)));
      }
      else{

      this.planetmesh.position.set(-2.7, 0,i/(this.getRandomInt(1000,100000)));
      }
      const newgroup = new THREE.Group();
      newgroup.add(this.planetmesh);
      this.asteroidGroup.push(newgroup);
      this.group.add(newgroup);
    }
  }

  addAsteroidsSecond() {
    for (let i = 0; i < 100; i++) {
      this.planet = new THREE.SphereGeometry((this.getRandomInt(2,9))/1000);
      this.material = new THREE.MeshBasicMaterial({
        color: "white",
      });
      this.planetmesh = new THREE.Mesh(this.planet, this.material);
      if(i%2==0)
      {
      this.planetmesh.position.set(2.8, 0,i/(this.getRandomInt(4000,10000)));
      }
      else{

      this.planetmesh.position.set(-2.8,0,-i/(this.getRandomInt(4000,10000)));
      }
      const newgroup = new THREE.Group();
      newgroup.add(this.planetmesh);
      this.asteroidGroup.push(newgroup);
      this.group.add(newgroup);
    }
  }


  addOrbit() {
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const geometery = new THREE.CircleGeometry(1, material);
  }

  updateRoation() {
    if(this.sunmesh!=null && this.individualGroups.length>0 && this.asteroidGroup.length>0)
    {
      this.sunmesh.rotation.y += 0.009;
      this.individualGroups[0].rotation.y -= 0.02;
      this.individualGroups[1].rotation.y += 0.02;
      this.individualGroups[2].rotation.y -= 0.01;
      this.individualGroups[3].rotation.y += 0.006;
      this.individualGroups[4].rotation.y -= 0.003;
      this.individualGroups[5].rotation.y -= 0.001;
      this.individualGroups[6].rotation.y += 0.002;
      this.individualGroups[7].rotation.y -= 0.001;
  
      for( let i=0;i<this.asteroidGroup.length;i++)
      {
        this.asteroidGroup[i].rotation.y+=i/this.getRandomInt(10000,100000);
      }
    }
   
  }
}

export default SolarSystem;
