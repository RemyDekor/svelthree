export { default as PerspectiveCamera } from "./components/PerspectiveCamera.svelte"
export { default as OrthographicCamera } from "./components/OrthographicCamera.svelte"
export { default as Mesh } from "./components/Mesh.svelte"
export { default as Empty } from "./components/Empty.svelte"
export { default as Canvas } from "./components/Canvas.svelte"
export { default as DirectionalLight } from "./components/DirectionalLight.svelte"
export { default as AmbientLight } from "./components/AmbientLight.svelte"
export { default as PointLight } from "./components/PointLight.svelte"
export { default as Scene } from "./components/Scene.svelte"
export { default as LoadedGLTF } from "./components/LoadedGLTF.svelte"

/*
The attempt to generate WebGLRenderer.d.ts from WebGLRenderer.svelte component's ts-code: 
- this line links to WebGLRenderer.d.ts file, but is useless not wrapped into a 'SvelteComponent' class or similar
  @see corresponding comment inside rollup.config.js
*/
// export * as WebGLRenderer from "./components/WebGLRenderer"

export { default as WebGLRenderer } from "./components/WebGLRenderer.svelte"
export { default as SvelthreeInteraction } from "./components/SvelthreeInteraction.svelte"
export { default as OrbitControls } from "./components/OrbitControls.svelte"
export { svelthreeStores } from "./stores.js"
export * from "svelthree-three"
