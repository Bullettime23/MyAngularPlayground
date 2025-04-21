import { Component, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-tree-js',
  imports: [],
  templateUrl: './tree-js.component.html',
  styleUrl: './tree-js.component.scss'
})
export class TreeJsComponent {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  cube: THREE.Mesh;
  
  renderer = new THREE.WebGLRenderer();

  constructor(private rend: Renderer2, private el: ElementRef) {
    //Setting renderer params

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( this.renderer.domElement );
    this.rend.appendChild(this.el.nativeElement, this.renderer.domElement);

    // Add a cube
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add( this.cube );

    this.camera.position.z = 5;
    // Start an animation loop
  }

  ngOnInit(): void {
    console.log("Tree js works!")
    this.renderer.setAnimationLoop( this.animate.bind(this) );
  }

  animate() {
    this.renderer.render( this.scene, this.camera );
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
  }
}
