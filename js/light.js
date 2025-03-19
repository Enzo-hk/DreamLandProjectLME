export function createLight(scene) {
    return new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.7, 0.7, 0), scene);
}