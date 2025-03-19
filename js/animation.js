export function setupAnimation(box) {
    const animation = new BABYLON.Animation (
        "boxAnimation",
        "position.x",
        10,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );

    animation.setKeys([
        { frame: 0, value: -5 },
        { frame: 30, value: 5 },
        { frame: 60, value: -5}
    ]);

    box.animations.push(animation);
}