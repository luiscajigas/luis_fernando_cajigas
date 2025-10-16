"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Model3DProps {
  darkMode: boolean;
}

export default function Model3D({ darkMode }: Model3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const objectRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Crear escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Configurar cámara - MÁS CERCA Y CENTRADA
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 6); // Cámara más cerca (z=5 en vez de 8)
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    // Configurar renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Agregar luces mejoradas
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(5, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // Cargar modelo GLTF dinámicamente
    import('three/examples/jsm/loaders/GLTFLoader.js').then(({ GLTFLoader }) => {
      const loader = new GLTFLoader();
      
      loader.load(
        "/images/models/scene.gltf",
        (gltf) => {
          console.log("🎉 Modelo GLTF cargado");
          const model = gltf.scene;
          
          // ⭐ ESCALA FIJA - AJUSTA ESTE NÚMERO SI NECESITAS
          const fixedScale = 1; // Prueba con: 3, 5, 8, 10
          model.scale.set(fixedScale, fixedScale, fixedScale);
          
          // Posición centrada en el origen
          model.position.set(0, 1, 0);
          
          // Rotar para mejor vista (30 grados)
          model.rotation.y = Math.PI / 6;
          
          scene.add(model);
          objectRef.current = model;
          
          console.log("✅ Modelo añadido con escala:", fixedScale);
          console.log("📍 Posición del modelo:", model.position);
          console.log("📐 Rotación del modelo:", model.rotation);
        },
        (xhr) => {
          if (xhr.total > 0) {
            const percentComplete = (xhr.loaded / xhr.total) * 100;
            console.log(`⏳ Cargando: ${percentComplete.toFixed(1)}%`);
          }
        },
        (error) => {
          console.error("❌ Error al cargar:", error);
          
          // Geometría de respaldo - CUBO VISIBLE
          const geometry = new THREE.BoxGeometry(2, 2, 2);
          const material = new THREE.MeshStandardMaterial({
            color: darkMode ? 0x60a5fa : 0xa855f7,
            metalness: 0.5,
            roughness: 0.3,
          });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(0, 0, 0);
          scene.add(cube);
          objectRef.current = cube;
          
          console.log("📦 Usando geometría de respaldo (CUBO)");
        }
      );
    }).catch((error) => {
      console.error("❌ Error al importar GLTFLoader:", error);
    });

    // Animación
    function animate() {
      animationIdRef.current = requestAnimationFrame(animate);

      if (objectRef.current) {
        // Rotación suave siguiendo el mouse
        const targetRotationY = mouseRef.current.x * 0.3;
        const targetRotationX = -mouseRef.current.y * 0.2;
        
        objectRef.current.rotation.y += (targetRotationY - objectRef.current.rotation.y) * 0.05;
        objectRef.current.rotation.x += (targetRotationX - objectRef.current.rotation.x) * 0.05;
        
        // Rotación automática lenta
        objectRef.current.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    }
    animate();

    // Manejar movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    // Manejar resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (containerRef.current && rendererRef.current && rendererRef.current.domElement.parentNode) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [darkMode]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ cursor: "grab" }}
    />
  );
}