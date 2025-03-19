// The audio engine is asynchronous, so it needs to be used in an `async` function.
// You can create an async function like the one below and call it right away,
// or you can add `async` to the playground's `createScene` function, for example: `var createScene = async function () { ... }
export async function initAudio() {
    const audioEngine = await BABYLON.CreateAudioEngineAsync();
    await audioEngine.unlock();

    BABYLON.CreateStreamingSoundAsync("backgroundMusic", "../musics/bg_melody.mp4", { autoplay: true, loop: true }, audioEngine);
}

