gdjs.setCode = {};
gdjs.setCode.GDenteryouroinObjects1= [];
gdjs.setCode.GDenteryouroinObjects2= [];
gdjs.setCode.GDboxObjects1= [];
gdjs.setCode.GDboxObjects2= [];
gdjs.setCode.GDattemptsleftvidableObjects1= [];
gdjs.setCode.GDattemptsleftvidableObjects2= [];
gdjs.setCode.GDHelpObjects1= [];
gdjs.setCode.GDHelpObjects2= [];
gdjs.setCode.GDblinkingdotObjects1= [];
gdjs.setCode.GDblinkingdotObjects2= [];
gdjs.setCode.GDpasswordtextObjects1= [];
gdjs.setCode.GDpasswordtextObjects2= [];
gdjs.setCode.GDpasswordhiddenObjects1= [];
gdjs.setCode.GDpasswordhiddenObjects2= [];
gdjs.setCode.GDgrayObjects1= [];
gdjs.setCode.GDgrayObjects2= [];
gdjs.setCode.GDattempsleftvasriavleObjects1= [];
gdjs.setCode.GDattempsleftvasriavleObjects2= [];
gdjs.setCode.GDlabstationosvertionObjects1= [];
gdjs.setCode.GDlabstationosvertionObjects2= [];
gdjs.setCode.GDpoweroptionsboxObjects1= [];
gdjs.setCode.GDpoweroptionsboxObjects2= [];
gdjs.setCode.GDshutdowntextObjects1= [];
gdjs.setCode.GDshutdowntextObjects2= [];

gdjs.setCode.conditionTrue_0 = {val:false};
gdjs.setCode.condition0IsTrue_0 = {val:false};
gdjs.setCode.condition1IsTrue_0 = {val:false};


gdjs.setCode.eventsList0 = function(runtimeScene) {

{


gdjs.setCode.condition0IsTrue_0.val = false;
{
gdjs.setCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.setCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loginservice", false);
}}

}


};

gdjs.setCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.setCode.GDenteryouroinObjects1.length = 0;
gdjs.setCode.GDenteryouroinObjects2.length = 0;
gdjs.setCode.GDboxObjects1.length = 0;
gdjs.setCode.GDboxObjects2.length = 0;
gdjs.setCode.GDattemptsleftvidableObjects1.length = 0;
gdjs.setCode.GDattemptsleftvidableObjects2.length = 0;
gdjs.setCode.GDHelpObjects1.length = 0;
gdjs.setCode.GDHelpObjects2.length = 0;
gdjs.setCode.GDblinkingdotObjects1.length = 0;
gdjs.setCode.GDblinkingdotObjects2.length = 0;
gdjs.setCode.GDpasswordtextObjects1.length = 0;
gdjs.setCode.GDpasswordtextObjects2.length = 0;
gdjs.setCode.GDpasswordhiddenObjects1.length = 0;
gdjs.setCode.GDpasswordhiddenObjects2.length = 0;
gdjs.setCode.GDgrayObjects1.length = 0;
gdjs.setCode.GDgrayObjects2.length = 0;
gdjs.setCode.GDattempsleftvasriavleObjects1.length = 0;
gdjs.setCode.GDattempsleftvasriavleObjects2.length = 0;
gdjs.setCode.GDlabstationosvertionObjects1.length = 0;
gdjs.setCode.GDlabstationosvertionObjects2.length = 0;
gdjs.setCode.GDpoweroptionsboxObjects1.length = 0;
gdjs.setCode.GDpoweroptionsboxObjects2.length = 0;
gdjs.setCode.GDshutdowntextObjects1.length = 0;
gdjs.setCode.GDshutdowntextObjects2.length = 0;

gdjs.setCode.eventsList0(runtimeScene);
return;

}

gdjs['setCode'] = gdjs.setCode;
