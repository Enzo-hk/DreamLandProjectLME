export function createBox(scene, size, pos) {
    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    box.scaling = size;
    box.position = pos;
    return box;
}

export function createGround(scene) {
    return BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
}