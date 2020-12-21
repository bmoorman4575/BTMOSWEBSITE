gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDfpsObjects1= [];
gdjs.New_32sceneCode.GDfpsObjects2= [];
gdjs.New_32sceneCode.GDfpslightObjects1= [];
gdjs.New_32sceneCode.GDfpslightObjects2= [];
gdjs.New_32sceneCode.GDwelcometoObjects1= [];
gdjs.New_32sceneCode.GDwelcometoObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDwearechangingObjects1= [];
gdjs.New_32sceneCode.GDwearechangingObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.New_32sceneCode.GDfpsObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfpsObjects1[i].setString("FPS: " + gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fpslight"), gdjs.New_32sceneCode.GDfpslightObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cutcen");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDfpslightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfpslightObjects1[i].setPosition(69,9);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDfpslightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfpslightObjects1[i].setRadius(1000);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "cutcen");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setRadius(gdjs.randomFloatInRange(970, 1000));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cutcen");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setPosition(626,379);
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect2", false);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect3", false);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setRadius(gdjs.randomFloatInRange(280, 300));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect2", true);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect3", true);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDfpsObjects1.length = 0;
gdjs.New_32sceneCode.GDfpsObjects2.length = 0;
gdjs.New_32sceneCode.GDfpslightObjects1.length = 0;
gdjs.New_32sceneCode.GDfpslightObjects2.length = 0;
gdjs.New_32sceneCode.GDwelcometoObjects1.length = 0;
gdjs.New_32sceneCode.GDwelcometoObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDwearechangingObjects1.length = 0;
gdjs.New_32sceneCode.GDwearechangingObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
