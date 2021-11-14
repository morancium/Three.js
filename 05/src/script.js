import './style.css'
import * as THREE from 'three'
import { Group } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const grp = new THREE.Group()
scene.add(grp)


const cube1 =new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x00ff00})
)
const cube2 =new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff0000})
)
const cube3 =new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x0000ff})
)
cube2.position.x=2
cube3.position.x=-2
grp.add(cube1)
grp.add(cube3)
grp.add(cube2)

grp.rotation.z=2
grp.position.y=1
// mesh.position.normalize()
/**
 * Sizes
 */

//Axis helper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

// camera.lookAt(new THREE.Vector3(2,00,0))
// camera.lookAt(mesh.position)
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)