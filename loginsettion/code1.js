gdjs.site_32html_32oneCode = {};

gdjs.site_32html_32oneCode.conditionTrue_0 = {val:false};
gdjs.site_32html_32oneCode.condition0IsTrue_0 = {val:false};
gdjs.site_32html_32oneCode.condition1IsTrue_0 = {val:false};


gdjs.site_32html_32oneCode.eventsList0 = function(runtimeScene) {

{


gdjs.site_32html_32oneCode.condition0IsTrue_0.val = false;
{
gdjs.site_32html_32oneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.site_32html_32oneCode.condition0IsTrue_0.val) {
}

}


{


gdjs.site_32html_32oneCode.condition0IsTrue_0.val = false;
{
gdjs.site_32html_32oneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.site_32html_32oneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cutcen");
}}

}


{


gdjs.site_32html_32oneCode.condition0IsTrue_0.val = false;
{
gdjs.site_32html_32oneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "cutcen");
}if (gdjs.site_32html_32oneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cutcen");
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect2", false);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect3", false);
}}

}


{


gdjs.site_32html_32oneCode.condition0IsTrue_0.val = false;
{
gdjs.site_32html_32oneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.site_32html_32oneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect2", true);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect3", true);
}}

}


};

gdjs.site_32html_32oneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.site_32html_32oneCode.eventsList0(runtimeScene);
return;

}

gdjs['site_32html_32oneCode'] = gdjs.site_32html_32oneCode;
