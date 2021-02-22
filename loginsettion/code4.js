gdjs.loginCode = {};
gdjs.loginCode.GDThanksflgObjects1= [];
gdjs.loginCode.GDThanksflgObjects2= [];
gdjs.loginCode.GDNewObjectObjects1= [];
gdjs.loginCode.GDNewObjectObjects2= [];
gdjs.loginCode.GDNewObject2Objects1= [];
gdjs.loginCode.GDNewObject2Objects2= [];
gdjs.loginCode.GDNewObject3Objects1= [];
gdjs.loginCode.GDNewObject3Objects2= [];
gdjs.loginCode.GDlogintextObjects1= [];
gdjs.loginCode.GDlogintextObjects2= [];

gdjs.loginCode.conditionTrue_0 = {val:false};
gdjs.loginCode.condition0IsTrue_0 = {val:false};
gdjs.loginCode.condition1IsTrue_0 = {val:false};


gdjs.loginCode.eventsList0 = function(runtimeScene) {

{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.loginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.loginCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.loginCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.loginCode.GDNewObjectObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.loginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.loginCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.loginCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.loginCode.GDNewObjectObjects1[i].setOpacity(gdjs.loginCode.GDNewObjectObjects1[i].getOpacity() + (1));
}
}}

}


};

gdjs.loginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loginCode.GDThanksflgObjects1.length = 0;
gdjs.loginCode.GDThanksflgObjects2.length = 0;
gdjs.loginCode.GDNewObjectObjects1.length = 0;
gdjs.loginCode.GDNewObjectObjects2.length = 0;
gdjs.loginCode.GDNewObject2Objects1.length = 0;
gdjs.loginCode.GDNewObject2Objects2.length = 0;
gdjs.loginCode.GDNewObject3Objects1.length = 0;
gdjs.loginCode.GDNewObject3Objects2.length = 0;
gdjs.loginCode.GDlogintextObjects1.length = 0;
gdjs.loginCode.GDlogintextObjects2.length = 0;

gdjs.loginCode.eventsList0(runtimeScene);
return;

}

gdjs['loginCode'] = gdjs.loginCode;
