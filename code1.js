gdjs.intro2Code = {};
gdjs.intro2Code.localVariables = [];
gdjs.intro2Code.GDcursorObjects1= [];
gdjs.intro2Code.GDcursorObjects2= [];
gdjs.intro2Code.GDfadeObjects1= [];
gdjs.intro2Code.GDfadeObjects2= [];
gdjs.intro2Code.GDNewSpriteObjects1= [];
gdjs.intro2Code.GDNewSpriteObjects2= [];
gdjs.intro2Code.GDNewSprite2Objects1= [];
gdjs.intro2Code.GDNewSprite2Objects2= [];
gdjs.intro2Code.GDbtn_9595playObjects1= [];
gdjs.intro2Code.GDbtn_9595playObjects2= [];


gdjs.intro2Code.mapOfGDgdjs_9546intro2Code_9546GDbtn_95959595playObjects1Objects = Hashtable.newFrom({"btn_play": gdjs.intro2Code.GDbtn_9595playObjects1});
gdjs.intro2Code.asyncCallback10463620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.intro2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_01", false);
}gdjs.intro2Code.localVariables.length = 0;
}
gdjs.intro2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.intro2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.intro2Code.asyncCallback10463620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.intro2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.intro2Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.intro2Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.intro2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 0, "linear", 0.4, false);
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.intro2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.intro2Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_play"), gdjs.intro2Code.GDbtn_9595playObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.intro2Code.GDbtn_9595playObjects1.length;i<l;++i) {
    if ( gdjs.intro2Code.GDbtn_9595playObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.intro2Code.GDbtn_9595playObjects1[k] = gdjs.intro2Code.GDbtn_9595playObjects1[i];
        ++k;
    }
}
gdjs.intro2Code.GDbtn_9595playObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.intro2Code.mapOfGDgdjs_9546intro2Code_9546GDbtn_95959595playObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10459652);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 0.5);
}
{ //Subevents
gdjs.intro2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.intro2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intro2Code.GDcursorObjects1.length = 0;
gdjs.intro2Code.GDcursorObjects2.length = 0;
gdjs.intro2Code.GDfadeObjects1.length = 0;
gdjs.intro2Code.GDfadeObjects2.length = 0;
gdjs.intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.intro2Code.GDNewSprite2Objects1.length = 0;
gdjs.intro2Code.GDNewSprite2Objects2.length = 0;
gdjs.intro2Code.GDbtn_9595playObjects1.length = 0;
gdjs.intro2Code.GDbtn_9595playObjects2.length = 0;

gdjs.intro2Code.eventsList1(runtimeScene);
gdjs.intro2Code.GDcursorObjects1.length = 0;
gdjs.intro2Code.GDcursorObjects2.length = 0;
gdjs.intro2Code.GDfadeObjects1.length = 0;
gdjs.intro2Code.GDfadeObjects2.length = 0;
gdjs.intro2Code.GDNewSpriteObjects1.length = 0;
gdjs.intro2Code.GDNewSpriteObjects2.length = 0;
gdjs.intro2Code.GDNewSprite2Objects1.length = 0;
gdjs.intro2Code.GDNewSprite2Objects2.length = 0;
gdjs.intro2Code.GDbtn_9595playObjects1.length = 0;
gdjs.intro2Code.GDbtn_9595playObjects2.length = 0;


return;

}

gdjs['intro2Code'] = gdjs.intro2Code;
