gdjs.introCode = {};
gdjs.introCode.localVariables = [];
gdjs.introCode.GDbackgroundObjects1= [];
gdjs.introCode.GDbackgroundObjects2= [];
gdjs.introCode.GDbackgroundObjects3= [];
gdjs.introCode.GDNewSpriteObjects1= [];
gdjs.introCode.GDNewSpriteObjects2= [];
gdjs.introCode.GDNewSpriteObjects3= [];
gdjs.introCode.GDgoObjects1= [];
gdjs.introCode.GDgoObjects2= [];
gdjs.introCode.GDgoObjects3= [];
gdjs.introCode.GDcursorObjects1= [];
gdjs.introCode.GDcursorObjects2= [];
gdjs.introCode.GDcursorObjects3= [];
gdjs.introCode.GDfadeObjects1= [];
gdjs.introCode.GDfadeObjects2= [];
gdjs.introCode.GDfadeObjects3= [];


gdjs.introCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Animation-Adventure-Wonderpark.mp3", 1, true, 70, 1);
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


};gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDgoObjects1Objects = Hashtable.newFrom({"go": gdjs.introCode.GDgoObjects1});
gdjs.introCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.introCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.introCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 0, "linear", 0.4, true);
}
}
{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.introCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.introCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.introCode.GDcursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("go"), gdjs.introCode.GDgoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.introCode.mapOfGDgdjs_9546introCode_9546GDgoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18627044);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro3", false);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDbackgroundObjects1.length = 0;
gdjs.introCode.GDbackgroundObjects2.length = 0;
gdjs.introCode.GDbackgroundObjects3.length = 0;
gdjs.introCode.GDNewSpriteObjects1.length = 0;
gdjs.introCode.GDNewSpriteObjects2.length = 0;
gdjs.introCode.GDNewSpriteObjects3.length = 0;
gdjs.introCode.GDgoObjects1.length = 0;
gdjs.introCode.GDgoObjects2.length = 0;
gdjs.introCode.GDgoObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;
gdjs.introCode.GDfadeObjects3.length = 0;

gdjs.introCode.eventsList1(runtimeScene);
gdjs.introCode.GDbackgroundObjects1.length = 0;
gdjs.introCode.GDbackgroundObjects2.length = 0;
gdjs.introCode.GDbackgroundObjects3.length = 0;
gdjs.introCode.GDNewSpriteObjects1.length = 0;
gdjs.introCode.GDNewSpriteObjects2.length = 0;
gdjs.introCode.GDNewSpriteObjects3.length = 0;
gdjs.introCode.GDgoObjects1.length = 0;
gdjs.introCode.GDgoObjects2.length = 0;
gdjs.introCode.GDgoObjects3.length = 0;
gdjs.introCode.GDcursorObjects1.length = 0;
gdjs.introCode.GDcursorObjects2.length = 0;
gdjs.introCode.GDcursorObjects3.length = 0;
gdjs.introCode.GDfadeObjects1.length = 0;
gdjs.introCode.GDfadeObjects2.length = 0;
gdjs.introCode.GDfadeObjects3.length = 0;


return;

}

gdjs['introCode'] = gdjs.introCode;
