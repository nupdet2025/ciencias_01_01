gdjs.finalCode = {};
gdjs.finalCode.localVariables = [];
gdjs.finalCode.GDcursorObjects1= [];
gdjs.finalCode.GDcursorObjects2= [];
gdjs.finalCode.GDcursorObjects3= [];
gdjs.finalCode.GDcursorObjects4= [];
gdjs.finalCode.GDfadeObjects1= [];
gdjs.finalCode.GDfadeObjects2= [];
gdjs.finalCode.GDfadeObjects3= [];
gdjs.finalCode.GDfadeObjects4= [];
gdjs.finalCode.GDNewSpriteObjects1= [];
gdjs.finalCode.GDNewSpriteObjects2= [];
gdjs.finalCode.GDNewSpriteObjects3= [];
gdjs.finalCode.GDNewSpriteObjects4= [];
gdjs.finalCode.GDNewSprite2Objects1= [];
gdjs.finalCode.GDNewSprite2Objects2= [];
gdjs.finalCode.GDNewSprite2Objects3= [];
gdjs.finalCode.GDNewSprite2Objects4= [];
gdjs.finalCode.GDnoObjects1= [];
gdjs.finalCode.GDnoObjects2= [];
gdjs.finalCode.GDnoObjects3= [];
gdjs.finalCode.GDnoObjects4= [];
gdjs.finalCode.GDsimObjects1= [];
gdjs.finalCode.GDsimObjects2= [];
gdjs.finalCode.GDsimObjects3= [];
gdjs.finalCode.GDsimObjects4= [];
gdjs.finalCode.GDStars2Objects1= [];
gdjs.finalCode.GDStars2Objects2= [];
gdjs.finalCode.GDStars2Objects3= [];
gdjs.finalCode.GDStars2Objects4= [];
gdjs.finalCode.GDStars3Objects1= [];
gdjs.finalCode.GDStars3Objects2= [];
gdjs.finalCode.GDStars3Objects3= [];
gdjs.finalCode.GDStars3Objects4= [];


gdjs.finalCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\victory.mp3", 3, true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 3);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}}

}


};gdjs.finalCode.asyncCallback24459316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);

{ //Subevents
gdjs.finalCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.finalCode.asyncCallback24459316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDsimObjects1Objects = Hashtable.newFrom({"sim": gdjs.finalCode.GDsimObjects1});
gdjs.finalCode.asyncCallback24462964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", true);
}gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.finalCode.asyncCallback24462964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDnoObjects1Objects = Hashtable.newFrom({"no": gdjs.finalCode.GDnoObjects1});
gdjs.finalCode.userFunc0x92d870 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.location.href = "https://sesiescolas.fiemg.com.br/";
//window.top.location.href = "https://sesiescolas.fiemg.com.br/";

};
gdjs.finalCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


gdjs.finalCode.userFunc0x92d870(runtimeScene);

}


};gdjs.finalCode.asyncCallback24464052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.finalCode.localVariables);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.finalCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.finalCode.localVariables.length = 0;
}
gdjs.finalCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.finalCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.finalCode.asyncCallback24464052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.finalCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.finalCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.finalCode.GDfadeObjects1);
{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 0, "linear", 0.4, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs.finalCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.finalCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.finalCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sim"), gdjs.finalCode.GDsimObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finalCode.GDsimObjects1.length;i<l;++i) {
    if ( gdjs.finalCode.GDsimObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finalCode.GDsimObjects1[k] = gdjs.finalCode.GDsimObjects1[i];
        ++k;
    }
}
gdjs.finalCode.GDsimObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDsimObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.3);
}
{ //Subevents
gdjs.finalCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.finalCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finalCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.finalCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.finalCode.GDnoObjects1[k] = gdjs.finalCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.finalCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDnoObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.3);
}
{ //Subevents
gdjs.finalCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDcursorObjects1.length = 0;
gdjs.finalCode.GDcursorObjects2.length = 0;
gdjs.finalCode.GDcursorObjects3.length = 0;
gdjs.finalCode.GDcursorObjects4.length = 0;
gdjs.finalCode.GDfadeObjects1.length = 0;
gdjs.finalCode.GDfadeObjects2.length = 0;
gdjs.finalCode.GDfadeObjects3.length = 0;
gdjs.finalCode.GDfadeObjects4.length = 0;
gdjs.finalCode.GDNewSpriteObjects1.length = 0;
gdjs.finalCode.GDNewSpriteObjects2.length = 0;
gdjs.finalCode.GDNewSpriteObjects3.length = 0;
gdjs.finalCode.GDNewSpriteObjects4.length = 0;
gdjs.finalCode.GDNewSprite2Objects1.length = 0;
gdjs.finalCode.GDNewSprite2Objects2.length = 0;
gdjs.finalCode.GDNewSprite2Objects3.length = 0;
gdjs.finalCode.GDNewSprite2Objects4.length = 0;
gdjs.finalCode.GDnoObjects1.length = 0;
gdjs.finalCode.GDnoObjects2.length = 0;
gdjs.finalCode.GDnoObjects3.length = 0;
gdjs.finalCode.GDnoObjects4.length = 0;
gdjs.finalCode.GDsimObjects1.length = 0;
gdjs.finalCode.GDsimObjects2.length = 0;
gdjs.finalCode.GDsimObjects3.length = 0;
gdjs.finalCode.GDsimObjects4.length = 0;
gdjs.finalCode.GDStars2Objects1.length = 0;
gdjs.finalCode.GDStars2Objects2.length = 0;
gdjs.finalCode.GDStars2Objects3.length = 0;
gdjs.finalCode.GDStars2Objects4.length = 0;
gdjs.finalCode.GDStars3Objects1.length = 0;
gdjs.finalCode.GDStars3Objects2.length = 0;
gdjs.finalCode.GDStars3Objects3.length = 0;
gdjs.finalCode.GDStars3Objects4.length = 0;

gdjs.finalCode.eventsList5(runtimeScene);
gdjs.finalCode.GDcursorObjects1.length = 0;
gdjs.finalCode.GDcursorObjects2.length = 0;
gdjs.finalCode.GDcursorObjects3.length = 0;
gdjs.finalCode.GDcursorObjects4.length = 0;
gdjs.finalCode.GDfadeObjects1.length = 0;
gdjs.finalCode.GDfadeObjects2.length = 0;
gdjs.finalCode.GDfadeObjects3.length = 0;
gdjs.finalCode.GDfadeObjects4.length = 0;
gdjs.finalCode.GDNewSpriteObjects1.length = 0;
gdjs.finalCode.GDNewSpriteObjects2.length = 0;
gdjs.finalCode.GDNewSpriteObjects3.length = 0;
gdjs.finalCode.GDNewSpriteObjects4.length = 0;
gdjs.finalCode.GDNewSprite2Objects1.length = 0;
gdjs.finalCode.GDNewSprite2Objects2.length = 0;
gdjs.finalCode.GDNewSprite2Objects3.length = 0;
gdjs.finalCode.GDNewSprite2Objects4.length = 0;
gdjs.finalCode.GDnoObjects1.length = 0;
gdjs.finalCode.GDnoObjects2.length = 0;
gdjs.finalCode.GDnoObjects3.length = 0;
gdjs.finalCode.GDnoObjects4.length = 0;
gdjs.finalCode.GDsimObjects1.length = 0;
gdjs.finalCode.GDsimObjects2.length = 0;
gdjs.finalCode.GDsimObjects3.length = 0;
gdjs.finalCode.GDsimObjects4.length = 0;
gdjs.finalCode.GDStars2Objects1.length = 0;
gdjs.finalCode.GDStars2Objects2.length = 0;
gdjs.finalCode.GDStars2Objects3.length = 0;
gdjs.finalCode.GDStars2Objects4.length = 0;
gdjs.finalCode.GDStars3Objects1.length = 0;
gdjs.finalCode.GDStars3Objects2.length = 0;
gdjs.finalCode.GDStars3Objects3.length = 0;
gdjs.finalCode.GDStars3Objects4.length = 0;


return;

}

gdjs['finalCode'] = gdjs.finalCode;
