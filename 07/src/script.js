import './style.css'
import * as THREE from 'three'
import {MapControls, OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

console.log(OrbitControls)
/**
 * Base
 */
// coursor

const coursor={
    x:0,
    y:0
}
window.addEventListener('mousemove',(event)=>
{
    coursor.x=event.clientX/sizes.width -0.5
    coursor.y=event.clientY/sizes.width -0.5
    // console.log(coursor.x)
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height,0.1,100)
const aspectRatio =  sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,1,-1,0.1,100)
// console.log(aspectRatio)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

//controls
const control = new OrbitControls(camera,canvas)
control.enableDamping=true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    //update Camera
    // camera.position.x=Math.sin(coursor.x*Math.PI*2)*5
    // camera.position.z=-Math.cos(coursor.x*Math.PI*2)*5
    // camera.position.y=coursor.y*10
    // camera.lookAt(mesh.position)
    control.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()