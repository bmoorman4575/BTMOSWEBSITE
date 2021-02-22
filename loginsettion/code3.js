gdjs.working_32on_32site_32newCode = {};
gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects1= [];
gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects2= [];
gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects1= [];
gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects2= [];
gdjs.working_32on_32site_32newCode.GDworkingontextObjects1= [];
gdjs.working_32on_32site_32newCode.GDworkingontextObjects2= [];
gdjs.working_32on_32site_32newCode.GDwarningiconObjects1= [];
gdjs.working_32on_32site_32newCode.GDwarningiconObjects2= [];
gdjs.working_32on_32site_32newCode.GDokoptionObjects1= [];
gdjs.working_32on_32site_32newCode.GDokoptionObjects2= [];
gdjs.working_32on_32site_32newCode.GDNewObjectObjects1= [];
gdjs.working_32on_32site_32newCode.GDNewObjectObjects2= [];
gdjs.working_32on_32site_32newCode.GDverObjects1= [];
gdjs.working_32on_32site_32newCode.GDverObjects2= [];

gdjs.working_32on_32site_32newCode.conditionTrue_0 = {val:false};
gdjs.working_32on_32site_32newCode.condition0IsTrue_0 = {val:false};
gdjs.working_32on_32site_32newCode.condition1IsTrue_0 = {val:false};
gdjs.working_32on_32site_32newCode.condition2IsTrue_0 = {val:false};


gdjs.working_32on_32site_32newCode.mapOfGDgdjs_46working_9532on_9532site_9532newCode_46GDokoptionObjects1Objects = Hashtable.newFrom({"okoption": gdjs.working_32on_32site_32newCode.GDokoptionObjects1});gdjs.working_32on_32site_32newCode.mapOfGDgdjs_46working_9532on_9532site_9532newCode_46GDokoptionObjects1Objects = Hashtable.newFrom({"okoption": gdjs.working_32on_32site_32newCode.GDokoptionObjects1});gdjs.working_32on_32site_32newCode.mapOfGDgdjs_46working_9532on_9532site_9532newCode_46GDokoptionObjects1Objects = Hashtable.newFrom({"okoption": gdjs.working_32on_32site_32newCode.GDokoptionObjects1});gdjs.working_32on_32site_32newCode.eventsList0 = function(runtimeScene) {

{


gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.working_32on_32site_32newCode.GDNewObjectObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadeaway");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fadeaway");
}{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDNewObjectObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okoption"), gdjs.working_32on_32site_32newCode.GDokoptionObjects1);

gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.working_32on_32site_32newCode.mapOfGDgdjs_46working_9532on_9532site_9532newCode_46GDokoptionObjects1Objects, runtimeScene, true, false);
}if (gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val) {
/* Reuse gdjs.working_32on_32site_32newCode.GDokoptionObjects1 */
{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDokoptionObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDokoptionObjects1[i].setColor("63;207;219");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okoption"), gdjs.working_32on_32site_32newCode.GDokoptionObjects1);

gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.working_32on_32site_32newCode.mapOfGDgdjs_46working_9532on_9532site_9532newCode_46GDokoptionObjects1Objects, runtimeScene, true, true);
}if (gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val) {
/* Reuse gdjs.working_32on_32site_32newCode.GDokoptionObjects1 */
{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDokoptionObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDokoptionObjects1[i].setColor("184;184;184");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okoption"), gdjs.working_32on_32site_32newCode.GDokoptionObjects1);

gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = false;
gdjs.working_32on_32site_32newCode.condition1IsTrue_0.val = false;
{
gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.working_32on_32site_32newCode.mapOfGDgdjs_46working_9532on_9532site_9532newCode_46GDokoptionObjects1Objects, runtimeScene, true, false);
}if ( gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val ) {
{
gdjs.working_32on_32site_32newCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.working_32on_32site_32newCode.condition1IsTrue_0.val) {
/* Reuse gdjs.working_32on_32site_32newCode.GDokoptionObjects1 */
{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDokoptionObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDokoptionObjects1[i].setColor("0;235;255");
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fadeaway");
}}

}


{


gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadeaway");
}if (gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("okoption"), gdjs.working_32on_32site_32newCode.GDokoptionObjects1);
{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDokoptionObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDokoptionObjects1[i].setOpacity(gdjs.working_32on_32site_32newCode.GDokoptionObjects1[i].getOpacity() - (5));
}
}}

}


{


gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = false;
{
gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "fadeaway");
}if (gdjs.working_32on_32site_32newCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.working_32on_32site_32newCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("comebacklater"), gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects1);
gdjs.copyArray(runtimeScene.getObjects("siteworkingonbackround"), gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("warningicon"), gdjs.working_32on_32site_32newCode.GDwarningiconObjects1);
gdjs.copyArray(runtimeScene.getObjects("workingontext"), gdjs.working_32on_32site_32newCode.GDworkingontextObjects1);
{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDwarningiconObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDwarningiconObjects1[i].setOpacity(gdjs.working_32on_32site_32newCode.GDwarningiconObjects1[i].getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects1[i].setOpacity(gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects1[i].getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects1[i].setOpacity(gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects1[i].getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDworkingontextObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDworkingontextObjects1[i].setOpacity(gdjs.working_32on_32site_32newCode.GDworkingontextObjects1[i].getOpacity() - (5));
}
}{for(var i = 0, len = gdjs.working_32on_32site_32newCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.working_32on_32site_32newCode.GDNewObjectObjects1[i].setOpacity(gdjs.working_32on_32site_32newCode.GDNewObjectObjects1[i].getOpacity() + (5));
}
}}

}


};

gdjs.working_32on_32site_32newCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDsiteworkingonbackroundObjects2.length = 0;
gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDcomebacklaterObjects2.length = 0;
gdjs.working_32on_32site_32newCode.GDworkingontextObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDworkingontextObjects2.length = 0;
gdjs.working_32on_32site_32newCode.GDwarningiconObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDwarningiconObjects2.length = 0;
gdjs.working_32on_32site_32newCode.GDokoptionObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDokoptionObjects2.length = 0;
gdjs.working_32on_32site_32newCode.GDNewObjectObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDNewObjectObjects2.length = 0;
gdjs.working_32on_32site_32newCode.GDverObjects1.length = 0;
gdjs.working_32on_32site_32newCode.GDverObjects2.length = 0;

gdjs.working_32on_32site_32newCode.eventsList0(runtimeScene);
return;

}

gdjs['working_32on_32site_32newCode'] = gdjs.working_32on_32site_32newCode;
