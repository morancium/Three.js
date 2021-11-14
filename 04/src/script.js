import './style.css'
import * as THREE from 'three'
console.log("heelp")
console.log(THREE)

const scene = new THREE.Scene()

//Red Cube
const geo = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000})
const mesh = new THREE.Mesh(geo,material)
scene.add(mesh)

//sizes
const size ={
    width: 800,
    height:600
}

//camera
const cam = new THREE.PerspectiveCamera(75,size.width/size.height)
cam.position.z=5
// cam.position.x=2
// cam.position.y=2
scene.add(cam)

//renderer
const canvas = document.querySelector('.webgl')
const rend = new THREE.WebGLRenderer({
    canvas: canvas
})
rend.setSize(size.width,size.height)

rend.render(scene,cam)