gdjs.intro3Code = {};
gdjs.intro3Code.localVariables = [];
gdjs.intro3Code.GDgoObjects1= [];
gdjs.intro3Code.GDgoObjects2= [];
gdjs.intro3Code.GDgoObjects3= [];
gdjs.intro3Code.GDcursorObjects1= [];
gdjs.intro3Code.GDcursorObjects2= [];
gdjs.intro3Code.GDcursorObjects3= [];
gdjs.intro3Code.GDfadeObjects1= [];
gdjs.intro3Code.GDfadeObjects2= [];
gdjs.intro3Code.GDfadeObjects3= [];
gdjs.intro3Code.GDintro2Objects1= [];
gdjs.intro3Code.GDintro2Objects2= [];
gdjs.intro3Code.GDintro2Objects3= [];


gdjs.intro3Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.intro3Code.mapOfGDgdjs_9546intro3Code_9546GDgoObjects1Objects = Hashtable.newFrom({"go": gdjs.intro3Code.GDgoObjects1});
gdjs.intro3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.intro3Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.intro3Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.intro3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro3Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.intro3Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.intro3Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 0, "linear", 0.4, false);
}
}
{ //Subevents
gdjs.intro3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.intro3Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.intro3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro3Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.intro3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro3Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("go"), gdjs.intro3Code.GDgoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.intro3Code.mapOfGDgdjs_9546intro3Code_9546GDgoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19902236);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro2", false);
}}

}


};

gdjs.intro3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro3Code.GDgoObjects1.length = 0;
gdjs.intro3Code.GDgoObjects2.length = 0;
gdjs.intro3Code.GDgoObjects3.length = 0;
gdjs.intro3Code.GDcursorObjects1.length = 0;
gdjs.intro3Code.GDcursorObjects2.length = 0;
gdjs.intro3Code.GDcursorObjects3.length = 0;
gdjs.intro3Code.GDfadeObjects1.length = 0;
gdjs.intro3Code.GDfadeObjects2.length = 0;
gdjs.intro3Code.GDfadeObjects3.length = 0;
gdjs.intro3Code.GDintro2Objects1.length = 0;
gdjs.intro3Code.GDintro2Objects2.length = 0;
gdjs.intro3Code.GDintro2Objects3.length = 0;

gdjs.intro3Code.eventsList1(runtimeScene);
gdjs.intro3Code.GDgoObjects1.length = 0;
gdjs.intro3Code.GDgoObjects2.length = 0;
gdjs.intro3Code.GDgoObjects3.length = 0;
gdjs.intro3Code.GDcursorObjects1.length = 0;
gdjs.intro3Code.GDcursorObjects2.length = 0;
gdjs.intro3Code.GDcursorObjects3.length = 0;
gdjs.intro3Code.GDfadeObjects1.length = 0;
gdjs.intro3Code.GDfadeObjects2.length = 0;
gdjs.intro3Code.GDfadeObjects3.length = 0;
gdjs.intro3Code.GDintro2Objects1.length = 0;
gdjs.intro3Code.GDintro2Objects2.length = 0;
gdjs.intro3Code.GDintro2Objects3.length = 0;


return;

}

gdjs['intro3Code'] = gdjs.intro3Code;
