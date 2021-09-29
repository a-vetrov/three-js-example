import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'

function App() {

    const domContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        if (domContainer.current) {
            const oldCanvas = domContainer.current.querySelector('canvas')
            if (oldCanvas) {
                domContainer.current.removeChild(oldCanvas)
            }
            domContainer.current.appendChild(renderer.domElement);
        }

        const light3 = new THREE.PointLight( 0xffffff, 1, 0 );
        light3.position.set( 0, 0, 100 );
        scene.add( light3 );

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

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
