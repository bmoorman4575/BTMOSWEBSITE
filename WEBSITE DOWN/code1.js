gdjs.working_32on_32siteCode = {};
gdjs.working_32on_32siteCode.GDfpsObjects1= [];
gdjs.working_32on_32siteCode.GDfpsObjects2= [];
gdjs.working_32on_32siteCode.GDfpslightObjects1= [];
gdjs.working_32on_32siteCode.GDfpslightObjects2= [];
gdjs.working_32on_32siteCode.GDwelcometoObjects1= [];
gdjs.working_32on_32siteCode.GDwelcometoObjects2= [];
gdjs.working_32on_32siteCode.GDNewObjectObjects1= [];
gdjs.working_32on_32siteCode.GDNewObjectObjects2= [];
gdjs.working_32on_32siteCode.GDwearechangingObjects1= [];
gdjs.working_32on_32siteCode.GDwearechangingObjects2= [];

gdjs.working_32on_32siteCode.conditionTrue_0 = {val:false};
gdjs.working_32on_32siteCode.condition0IsTrue_0 = {val:false};
gdjs.working_32on_32siteCode.condition1IsTrue_0 = {val:false};


gdjs.working_32on_32siteCode.eventsList0 = function(runtimeScene) {

{


gdjs.working_32on_32siteCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32siteCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.working_32on_32siteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fps"), gdjs.working_32on_32siteCode.GDfpsObjects1);
{for(var i = 0, len = gdjs.working_32on_32siteCode.GDfpsObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDfpsObjects1[i].setString("FPS: " + gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}}

}


{


gdjs.working_32on_32siteCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32siteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.working_32on_32siteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fpslight"), gdjs.working_32on_32siteCode.GDfpslightObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cutcen");
}{for(var i = 0, len = gdjs.working_32on_32siteCode.GDfpslightObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDfpslightObjects1[i].setPosition(69,9);
}
}{for(var i = 0, len = gdjs.working_32on_32siteCode.GDfpslightObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDfpslightObjects1[i].setRadius(1000);
}
}}

}


{


gdjs.working_32on_32siteCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32siteCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "cutcen");
}if (gdjs.working_32on_32siteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.working_32on_32siteCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.working_32on_32siteCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDNewObjectObjects1[i].setRadius(gdjs.randomFloatInRange(970, 1000));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cutcen");
}{for(var i = 0, len = gdjs.working_32on_32siteCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDNewObjectObjects1[i].setPosition(626,379);
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect2", false);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect3", false);
}}

}


{


gdjs.working_32on_32siteCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32siteCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.working_32on_32siteCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.working_32on_32siteCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.working_32on_32siteCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDNewObjectObjects1[i].setRadius(gdjs.randomFloatInRange(280, 300));
}
}{for(var i = 0, len = gdjs.working_32on_32siteCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.working_32on_32siteCode.GDNewObjectObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect2", true);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect3", true);
}}

}


};

gdjs.working_32on_32siteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.working_32on_32siteCode.GDfpsObjects1.length = 0;
gdjs.working_32on_32siteCode.GDfpsObjects2.length = 0;
gdjs.working_32on_32siteCode.GDfpslightObjects1.length = 0;
gdjs.working_32on_32siteCode.GDfpslightObjects2.length = 0;
gdjs.working_32on_32siteCode.GDwelcometoObjects1.length = 0;
gdjs.working_32on_32siteCode.GDwelcometoObjects2.length = 0;
gdjs.working_32on_32siteCode.GDNewObjectObjects1.length = 0;
gdjs.working_32on_32siteCode.GDNewObjectObjects2.length = 0;
gdjs.working_32on_32siteCode.GDwearechangingObjects1.length = 0;
gdjs.working_32on_32siteCode.GDwearechangingObjects2.length = 0;

gdjs.working_32on_32siteCode.eventsList0(runtimeScene);
return;

}

gdjs['working_32on_32siteCode'] = gdjs.working_32on_32siteCode;
