import React, { useRef, useEffect } from 'react';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as THREE from 'three'
import Rubik from "./rubik";

const addLights = (scene: THREE.Scene) => {
    scene.add(new THREE.AmbientLight( 0xffffff, 1 ))

    const light = new THREE.PointLight( 0xffffff, 1, 0 );
    light.position.set( 0, 0, 0 );
    scene.add(light);
}

const appendRenderer = (node:HTMLDivElement | null, renderer: HTMLCanvasElement) => {
    if (node) {
        while (node.firstChild) {
            node.removeChild(node.lastChild as ChildNode)
        }
        node.appendChild(renderer)
    }
}

function App() {

    const domContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 )

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize( 500, 500 )

        appendRenderer(domContainer.current, renderer.domElement)

        addLights(scene)

        const rubik = new Rubik()
        scene.add(rubik.mainGroup)

        camera.position.z = 10

        const controls = new OrbitControls( camera, renderer.domElement );

        const animate = () => {
            requestAnimationFrame( animate )

            //rubik.mainGroup.rotation.x += 0.01
            //rubik.mainGroup.rotation.y += 0.01
            controls.update();

            renderer.render( scene, camera )
        }

        animate();
    }, [])

    return (
        <div className="App">
            <h1>Three.js test</h1>
            <div ref={domContainer}/>
        </div>
    );
}

export default App;
