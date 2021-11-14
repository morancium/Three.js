import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
// Canvas
const canvas = document.querySelector('canvas.webgl')


// console.log(gsap)
// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(0.1,0.1,0.1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// let time= Date.now()

//clock
const clock =new THREE.Clock()

//gsap
// gsap.to(mesh.position,{duration:1, delay:1, x:2})
// gsap.to(mesh.position,{duration:1, delay:2, x:0})



//Animations
const tick =() =>
{
    //time
    // const currentTime = Date.now()
    // const deltaTime = currentTime-time
    // time=currentTime
    // console.log(deltaTime)
    //update
    // mesh.rotation.y+=0.001*deltaTime

    let timeElapsed = clock.getElapsedTime()
    timeElapsed=timeElapsed*5
    // console.log(timeElapsed)
    // mesh.rotation.y=timeElapsed*Math.PI*2
    mesh.position.x=Math.cos(timeElapsed)*2
    mesh.position.y=Math.sin(timeElapsed)
    // camera.lookAt(mesh.position)

    //renderer
    renderer.render(scene, camera)



    window.requestAnimationFrame(tick)
}

tick()