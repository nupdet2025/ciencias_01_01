gdjs.main_9501Code = {};
gdjs.main_9501Code.localVariables = [];
gdjs.main_9501Code.GDNewSpriteObjects1= [];
gdjs.main_9501Code.GDNewSpriteObjects2= [];
gdjs.main_9501Code.GDNewSpriteObjects3= [];
gdjs.main_9501Code.GDNewSpriteObjects4= [];
gdjs.main_9501Code.GDNewSpriteObjects5= [];
gdjs.main_9501Code.GDbtn_9595greenObjects1= [];
gdjs.main_9501Code.GDbtn_9595greenObjects2= [];
gdjs.main_9501Code.GDbtn_9595greenObjects3= [];
gdjs.main_9501Code.GDbtn_9595greenObjects4= [];
gdjs.main_9501Code.GDbtn_9595greenObjects5= [];
gdjs.main_9501Code.GDbtn_9595yellowObjects1= [];
gdjs.main_9501Code.GDbtn_9595yellowObjects2= [];
gdjs.main_9501Code.GDbtn_9595yellowObjects3= [];
gdjs.main_9501Code.GDbtn_9595yellowObjects4= [];
gdjs.main_9501Code.GDbtn_9595yellowObjects5= [];
gdjs.main_9501Code.GDbtn_9595redObjects1= [];
gdjs.main_9501Code.GDbtn_9595redObjects2= [];
gdjs.main_9501Code.GDbtn_9595redObjects3= [];
gdjs.main_9501Code.GDbtn_9595redObjects4= [];
gdjs.main_9501Code.GDbtn_9595redObjects5= [];
gdjs.main_9501Code.GDbtn_9595brownObjects1= [];
gdjs.main_9501Code.GDbtn_9595brownObjects2= [];
gdjs.main_9501Code.GDbtn_9595brownObjects3= [];
gdjs.main_9501Code.GDbtn_9595brownObjects4= [];
gdjs.main_9501Code.GDbtn_9595brownObjects5= [];
gdjs.main_9501Code.GDbtn_9595blueObjects1= [];
gdjs.main_9501Code.GDbtn_9595blueObjects2= [];
gdjs.main_9501Code.GDbtn_9595blueObjects3= [];
gdjs.main_9501Code.GDbtn_9595blueObjects4= [];
gdjs.main_9501Code.GDbtn_9595blueObjects5= [];
gdjs.main_9501Code.GDNewSprite3Objects1= [];
gdjs.main_9501Code.GDNewSprite3Objects2= [];
gdjs.main_9501Code.GDNewSprite3Objects3= [];
gdjs.main_9501Code.GDNewSprite3Objects4= [];
gdjs.main_9501Code.GDNewSprite3Objects5= [];
gdjs.main_9501Code.GDNewSprite2Objects1= [];
gdjs.main_9501Code.GDNewSprite2Objects2= [];
gdjs.main_9501Code.GDNewSprite2Objects3= [];
gdjs.main_9501Code.GDNewSprite2Objects4= [];
gdjs.main_9501Code.GDNewSprite2Objects5= [];
gdjs.main_9501Code.GD_959502Objects1= [];
gdjs.main_9501Code.GD_959502Objects2= [];
gdjs.main_9501Code.GD_959502Objects3= [];
gdjs.main_9501Code.GD_959502Objects4= [];
gdjs.main_9501Code.GD_959502Objects5= [];
gdjs.main_9501Code.GDcursorObjects1= [];
gdjs.main_9501Code.GDcursorObjects2= [];
gdjs.main_9501Code.GDcursorObjects3= [];
gdjs.main_9501Code.GDcursorObjects4= [];
gdjs.main_9501Code.GDcursorObjects5= [];
gdjs.main_9501Code.GDRedExplosionObjects1= [];
gdjs.main_9501Code.GDRedExplosionObjects2= [];
gdjs.main_9501Code.GDRedExplosionObjects3= [];
gdjs.main_9501Code.GDRedExplosionObjects4= [];
gdjs.main_9501Code.GDRedExplosionObjects5= [];
gdjs.main_9501Code.GDfadeObjects1= [];
gdjs.main_9501Code.GDfadeObjects2= [];
gdjs.main_9501Code.GDfadeObjects3= [];
gdjs.main_9501Code.GDfadeObjects4= [];
gdjs.main_9501Code.GDfadeObjects5= [];
gdjs.main_9501Code.GDarea1Objects1= [];
gdjs.main_9501Code.GDarea1Objects2= [];
gdjs.main_9501Code.GDarea1Objects3= [];
gdjs.main_9501Code.GDarea1Objects4= [];
gdjs.main_9501Code.GDarea1Objects5= [];
gdjs.main_9501Code.GDarea2Objects1= [];
gdjs.main_9501Code.GDarea2Objects2= [];
gdjs.main_9501Code.GDarea2Objects3= [];
gdjs.main_9501Code.GDarea2Objects4= [];
gdjs.main_9501Code.GDarea2Objects5= [];
gdjs.main_9501Code.GDarea3Objects1= [];
gdjs.main_9501Code.GDarea3Objects2= [];
gdjs.main_9501Code.GDarea3Objects3= [];
gdjs.main_9501Code.GDarea3Objects4= [];
gdjs.main_9501Code.GDarea3Objects5= [];
gdjs.main_9501Code.GDarea4Objects1= [];
gdjs.main_9501Code.GDarea4Objects2= [];
gdjs.main_9501Code.GDarea4Objects3= [];
gdjs.main_9501Code.GDarea4Objects4= [];
gdjs.main_9501Code.GDarea4Objects5= [];
gdjs.main_9501Code.GDarea5Objects1= [];
gdjs.main_9501Code.GDarea5Objects2= [];
gdjs.main_9501Code.GDarea5Objects3= [];
gdjs.main_9501Code.GDarea5Objects4= [];
gdjs.main_9501Code.GDarea5Objects5= [];
gdjs.main_9501Code.GDNewSprite4Objects1= [];
gdjs.main_9501Code.GDNewSprite4Objects2= [];
gdjs.main_9501Code.GDNewSprite4Objects3= [];
gdjs.main_9501Code.GDNewSprite4Objects4= [];
gdjs.main_9501Code.GDNewSprite4Objects5= [];


gdjs.main_9501Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Animation-Adventure-Funpark.mp3", 2, true, 70, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 2);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}}

}


};gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects = Hashtable.newFrom({"_02": gdjs.main_9501Code.GD_959502Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects1Objects = Hashtable.newFrom({"area5": gdjs.main_9501Code.GDarea5Objects1});
gdjs.main_9501Code.asyncCallback18853660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main_02", false);
}gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18853660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.asyncCallback18744748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("RedExplosion"), gdjs.main_9501Code.GDRedExplosionObjects4);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\diamond-sparkle.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main_9501Code.GDRedExplosionObjects4.length ;i < len;++i) {
    gdjs.main_9501Code.GDRedExplosionObjects4[i].startEmission();
}
}
{ //Subevents
gdjs.main_9501Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18744748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.asyncCallback18985620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.main_9501Code.GDNewSprite2Objects3);
{for(var i = 0, len = gdjs.main_9501Code.GDNewSprite2Objects3.length ;i < len;++i) {
    gdjs.main_9501Code.GDNewSprite2Objects3[i].getBehavior("Animation").setAnimationName("02_2");
}
}
{ //Subevents
gdjs.main_9501Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18985620(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.main_9501Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.main_9501Code.asyncCallback18812308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects2);

{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects2[i].getBehavior("Tween").addObjectScaleTween3("8", 1, "linear", 0.5, false, true);
}
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects2[i].getBehavior("Tween").addObjectPositionTween2("out", 963, 471, "easeInOutQuad", 0.5, true);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
for (const obj of gdjs.main_9501Code.GD_959502Objects1) asyncObjectsList.addObject("_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18812308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects = Hashtable.newFrom({"_02": gdjs.main_9501Code.GD_959502Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects1Objects = Hashtable.newFrom({"area4": gdjs.main_9501Code.GDarea4Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects = Hashtable.newFrom({"area5": gdjs.main_9501Code.GDarea5Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects2Objects = Hashtable.newFrom({"area3": gdjs.main_9501Code.GDarea3Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects2Objects = Hashtable.newFrom({"area2": gdjs.main_9501Code.GDarea2Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects2Objects = Hashtable.newFrom({"area1": gdjs.main_9501Code.GDarea1Objects2});
gdjs.main_9501Code.asyncCallback19851244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects, 988, 580, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects2Objects, 520, 582, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects2Objects, 276, 584, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects2Objects, 49, 580, "UI");
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects2[i].activateBehavior("Draggable", true);
}
}gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
for (const obj of gdjs.main_9501Code.GD_959502Objects1) asyncObjectsList.addObject("_02", obj);
for (const obj of gdjs.main_9501Code.GDarea1Objects1) asyncObjectsList.addObject("area1", obj);
for (const obj of gdjs.main_9501Code.GDarea2Objects1) asyncObjectsList.addObject("area2", obj);
for (const obj of gdjs.main_9501Code.GDarea3Objects1) asyncObjectsList.addObject("area3", obj);
for (const obj of gdjs.main_9501Code.GDarea5Objects1) asyncObjectsList.addObject("area5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.main_9501Code.asyncCallback19851244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects = Hashtable.newFrom({"_02": gdjs.main_9501Code.GD_959502Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects1Objects = Hashtable.newFrom({"area3": gdjs.main_9501Code.GDarea3Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects = Hashtable.newFrom({"area5": gdjs.main_9501Code.GDarea5Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects2Objects = Hashtable.newFrom({"area4": gdjs.main_9501Code.GDarea4Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects2Objects = Hashtable.newFrom({"area2": gdjs.main_9501Code.GDarea2Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects2Objects = Hashtable.newFrom({"area1": gdjs.main_9501Code.GDarea1Objects2});
gdjs.main_9501Code.asyncCallback18967020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects, 899, 580, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects2Objects, 749, 584, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects2Objects, 276, 584, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects2Objects, 49, 580, "UI");
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects2[i].activateBehavior("Draggable", true);
}
}gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
for (const obj of gdjs.main_9501Code.GD_959502Objects1) asyncObjectsList.addObject("_02", obj);
for (const obj of gdjs.main_9501Code.GDarea1Objects1) asyncObjectsList.addObject("area1", obj);
for (const obj of gdjs.main_9501Code.GDarea2Objects1) asyncObjectsList.addObject("area2", obj);
for (const obj of gdjs.main_9501Code.GDarea4Objects1) asyncObjectsList.addObject("area4", obj);
for (const obj of gdjs.main_9501Code.GDarea5Objects1) asyncObjectsList.addObject("area5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18967020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects = Hashtable.newFrom({"_02": gdjs.main_9501Code.GD_959502Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects1Objects = Hashtable.newFrom({"area2": gdjs.main_9501Code.GDarea2Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects = Hashtable.newFrom({"area5": gdjs.main_9501Code.GDarea5Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects2Objects = Hashtable.newFrom({"area4": gdjs.main_9501Code.GDarea4Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects2Objects = Hashtable.newFrom({"area3": gdjs.main_9501Code.GDarea3Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects2Objects = Hashtable.newFrom({"area1": gdjs.main_9501Code.GDarea1Objects2});
gdjs.main_9501Code.asyncCallback18851316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects, 899, 580, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects2Objects, 749, 584, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects2Objects, 520, 582, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects2Objects, 49, 580, "UI");
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects2[i].activateBehavior("Draggable", true);
}
}gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
for (const obj of gdjs.main_9501Code.GD_959502Objects1) asyncObjectsList.addObject("_02", obj);
for (const obj of gdjs.main_9501Code.GDarea1Objects1) asyncObjectsList.addObject("area1", obj);
for (const obj of gdjs.main_9501Code.GDarea3Objects1) asyncObjectsList.addObject("area3", obj);
for (const obj of gdjs.main_9501Code.GDarea4Objects1) asyncObjectsList.addObject("area4", obj);
for (const obj of gdjs.main_9501Code.GDarea5Objects1) asyncObjectsList.addObject("area5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18851316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects = Hashtable.newFrom({"_02": gdjs.main_9501Code.GD_959502Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects1Objects = Hashtable.newFrom({"area1": gdjs.main_9501Code.GDarea1Objects1});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects = Hashtable.newFrom({"area5": gdjs.main_9501Code.GDarea5Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects2Objects = Hashtable.newFrom({"area4": gdjs.main_9501Code.GDarea4Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects2Objects = Hashtable.newFrom({"area3": gdjs.main_9501Code.GDarea3Objects2});
gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects2Objects = Hashtable.newFrom({"area2": gdjs.main_9501Code.GDarea2Objects2});
gdjs.main_9501Code.asyncCallback18777164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.main_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects2Objects, 988, 580, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects2Objects, 749, 584, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects2Objects, 520, 582, "UI");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects2Objects, 276, 584, "UI");
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects2.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects2[i].activateBehavior("Draggable", true);
}
}gdjs.main_9501Code.localVariables.length = 0;
}
gdjs.main_9501Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.main_9501Code.localVariables);
for (const obj of gdjs.main_9501Code.GD_959502Objects1) asyncObjectsList.addObject("_02", obj);
for (const obj of gdjs.main_9501Code.GDarea2Objects1) asyncObjectsList.addObject("area2", obj);
for (const obj of gdjs.main_9501Code.GDarea3Objects1) asyncObjectsList.addObject("area3", obj);
for (const obj of gdjs.main_9501Code.GDarea4Objects1) asyncObjectsList.addObject("area4", obj);
for (const obj of gdjs.main_9501Code.GDarea5Objects1) asyncObjectsList.addObject("area5", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.main_9501Code.asyncCallback18777164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.main_9501Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedExplosion"), gdjs.main_9501Code.GDRedExplosionObjects1);
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main_9501Code.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.main_9501Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.main_9501Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDcursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.main_9501Code.GDRedExplosionObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDRedExplosionObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.main_9501Code.GDRedExplosionObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDRedExplosionObjects1[i].recreateParticleSystem();
}
}{for(var i = 0, len = gdjs.main_9501Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 0, "linear", 0.4, true);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.main_9501Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.main_9501Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.main_9501Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_9501Code.GD_959502Objects1.length;i<l;++i) {
    if ( gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Draggable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.main_9501Code.GD_959502Objects1[k] = gdjs.main_9501Code.GD_959502Objects1[i];
        ++k;
    }
}
gdjs.main_9501Code.GD_959502Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("ShakeObject_PositionAngleScale", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_9501Code.GD_959502Objects1.length;i<l;++i) {
    if ( !(gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Draggable").isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.main_9501Code.GD_959502Objects1[k] = gdjs.main_9501Code.GD_959502Objects1[i];
        ++k;
    }
}
gdjs.main_9501Code.GD_959502Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("ShakeObject_PositionAngleScale", true);
}
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(1, 5, 5, 5, 5, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects, gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea5Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18801212);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
gdjs.copyArray(runtimeScene.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects1);
/* Reuse gdjs.main_9501Code.GDarea5Objects1 */
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea5Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea4Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea3Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea2Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea1Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Tween").addObjectAngleTween2("4", 360, "linear", 1, false);
}
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Tween").addObjectScaleTween3("8", 2, "linear", 0.5, false, true);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects, gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18873588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
gdjs.copyArray(runtimeScene.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_red"), gdjs.main_9501Code.GDbtn_9595redObjects1);
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea5Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea3Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea2Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea1Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDbtn_9595redObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDbtn_9595redObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Tween").addObjectPositionTween2("goback", 1179, 363, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects, gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19049244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
gdjs.copyArray(runtimeScene.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects1);
gdjs.copyArray(runtimeScene.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_yellow"), gdjs.main_9501Code.GDbtn_9595yellowObjects1);
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea5Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea4Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea2Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea1Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDbtn_9595yellowObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDbtn_9595yellowObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Tween").addObjectPositionTween2("goback", 1179, 363, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects, gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18952588);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
gdjs.copyArray(runtimeScene.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects1);
gdjs.copyArray(runtimeScene.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_green"), gdjs.main_9501Code.GDbtn_9595greenObjects1);
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea5Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea4Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea3Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea1Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDbtn_9595greenObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDbtn_9595greenObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Tween").addObjectPositionTween2("goback", 1179, 363, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_02"), gdjs.main_9501Code.GD_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("area1"), gdjs.main_9501Code.GDarea1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GD_9595959502Objects1Objects, gdjs.main_9501Code.mapOfGDgdjs_9546main_95959501Code_9546GDarea1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18808756);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.main_9501Code.GD_959502Objects1 */
gdjs.copyArray(runtimeScene.getObjects("area2"), gdjs.main_9501Code.GDarea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("area3"), gdjs.main_9501Code.GDarea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("area4"), gdjs.main_9501Code.GDarea4Objects1);
gdjs.copyArray(runtimeScene.getObjects("area5"), gdjs.main_9501Code.GDarea5Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_blue"), gdjs.main_9501Code.GDbtn_9595blueObjects1);
{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea5Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea4Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea3Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDarea2Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDarea2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.main_9501Code.GDbtn_9595blueObjects1.length ;i < len;++i) {
    gdjs.main_9501Code.GDbtn_9595blueObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.main_9501Code.GD_959502Objects1.length ;i < len;++i) {
    gdjs.main_9501Code.GD_959502Objects1[i].getBehavior("Tween").addObjectPositionTween2("goback", 1179, 363, "linear", 0.5, false);
}
}
{ //Subevents
gdjs.main_9501Code.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.main_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_9501Code.GDNewSpriteObjects1.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects2.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects3.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects4.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects5.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects1.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects2.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects3.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects4.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects5.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects1.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects2.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects3.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects4.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects5.length = 0;
gdjs.main_9501Code.GD_959502Objects1.length = 0;
gdjs.main_9501Code.GD_959502Objects2.length = 0;
gdjs.main_9501Code.GD_959502Objects3.length = 0;
gdjs.main_9501Code.GD_959502Objects4.length = 0;
gdjs.main_9501Code.GD_959502Objects5.length = 0;
gdjs.main_9501Code.GDcursorObjects1.length = 0;
gdjs.main_9501Code.GDcursorObjects2.length = 0;
gdjs.main_9501Code.GDcursorObjects3.length = 0;
gdjs.main_9501Code.GDcursorObjects4.length = 0;
gdjs.main_9501Code.GDcursorObjects5.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects1.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects2.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects3.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects4.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects5.length = 0;
gdjs.main_9501Code.GDfadeObjects1.length = 0;
gdjs.main_9501Code.GDfadeObjects2.length = 0;
gdjs.main_9501Code.GDfadeObjects3.length = 0;
gdjs.main_9501Code.GDfadeObjects4.length = 0;
gdjs.main_9501Code.GDfadeObjects5.length = 0;
gdjs.main_9501Code.GDarea1Objects1.length = 0;
gdjs.main_9501Code.GDarea1Objects2.length = 0;
gdjs.main_9501Code.GDarea1Objects3.length = 0;
gdjs.main_9501Code.GDarea1Objects4.length = 0;
gdjs.main_9501Code.GDarea1Objects5.length = 0;
gdjs.main_9501Code.GDarea2Objects1.length = 0;
gdjs.main_9501Code.GDarea2Objects2.length = 0;
gdjs.main_9501Code.GDarea2Objects3.length = 0;
gdjs.main_9501Code.GDarea2Objects4.length = 0;
gdjs.main_9501Code.GDarea2Objects5.length = 0;
gdjs.main_9501Code.GDarea3Objects1.length = 0;
gdjs.main_9501Code.GDarea3Objects2.length = 0;
gdjs.main_9501Code.GDarea3Objects3.length = 0;
gdjs.main_9501Code.GDarea3Objects4.length = 0;
gdjs.main_9501Code.GDarea3Objects5.length = 0;
gdjs.main_9501Code.GDarea4Objects1.length = 0;
gdjs.main_9501Code.GDarea4Objects2.length = 0;
gdjs.main_9501Code.GDarea4Objects3.length = 0;
gdjs.main_9501Code.GDarea4Objects4.length = 0;
gdjs.main_9501Code.GDarea4Objects5.length = 0;
gdjs.main_9501Code.GDarea5Objects1.length = 0;
gdjs.main_9501Code.GDarea5Objects2.length = 0;
gdjs.main_9501Code.GDarea5Objects3.length = 0;
gdjs.main_9501Code.GDarea5Objects4.length = 0;
gdjs.main_9501Code.GDarea5Objects5.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects1.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects2.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects3.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects4.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects5.length = 0;

gdjs.main_9501Code.eventsList10(runtimeScene);
gdjs.main_9501Code.GDNewSpriteObjects1.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects2.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects3.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects4.length = 0;
gdjs.main_9501Code.GDNewSpriteObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595greenObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595yellowObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595redObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595brownObjects5.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects1.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects2.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects3.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects4.length = 0;
gdjs.main_9501Code.GDbtn_9595blueObjects5.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects1.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects2.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects3.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects4.length = 0;
gdjs.main_9501Code.GDNewSprite3Objects5.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects1.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects2.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects3.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects4.length = 0;
gdjs.main_9501Code.GDNewSprite2Objects5.length = 0;
gdjs.main_9501Code.GD_959502Objects1.length = 0;
gdjs.main_9501Code.GD_959502Objects2.length = 0;
gdjs.main_9501Code.GD_959502Objects3.length = 0;
gdjs.main_9501Code.GD_959502Objects4.length = 0;
gdjs.main_9501Code.GD_959502Objects5.length = 0;
gdjs.main_9501Code.GDcursorObjects1.length = 0;
gdjs.main_9501Code.GDcursorObjects2.length = 0;
gdjs.main_9501Code.GDcursorObjects3.length = 0;
gdjs.main_9501Code.GDcursorObjects4.length = 0;
gdjs.main_9501Code.GDcursorObjects5.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects1.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects2.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects3.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects4.length = 0;
gdjs.main_9501Code.GDRedExplosionObjects5.length = 0;
gdjs.main_9501Code.GDfadeObjects1.length = 0;
gdjs.main_9501Code.GDfadeObjects2.length = 0;
gdjs.main_9501Code.GDfadeObjects3.length = 0;
gdjs.main_9501Code.GDfadeObjects4.length = 0;
gdjs.main_9501Code.GDfadeObjects5.length = 0;
gdjs.main_9501Code.GDarea1Objects1.length = 0;
gdjs.main_9501Code.GDarea1Objects2.length = 0;
gdjs.main_9501Code.GDarea1Objects3.length = 0;
gdjs.main_9501Code.GDarea1Objects4.length = 0;
gdjs.main_9501Code.GDarea1Objects5.length = 0;
gdjs.main_9501Code.GDarea2Objects1.length = 0;
gdjs.main_9501Code.GDarea2Objects2.length = 0;
gdjs.main_9501Code.GDarea2Objects3.length = 0;
gdjs.main_9501Code.GDarea2Objects4.length = 0;
gdjs.main_9501Code.GDarea2Objects5.length = 0;
gdjs.main_9501Code.GDarea3Objects1.length = 0;
gdjs.main_9501Code.GDarea3Objects2.length = 0;
gdjs.main_9501Code.GDarea3Objects3.length = 0;
gdjs.main_9501Code.GDarea3Objects4.length = 0;
gdjs.main_9501Code.GDarea3Objects5.length = 0;
gdjs.main_9501Code.GDarea4Objects1.length = 0;
gdjs.main_9501Code.GDarea4Objects2.length = 0;
gdjs.main_9501Code.GDarea4Objects3.length = 0;
gdjs.main_9501Code.GDarea4Objects4.length = 0;
gdjs.main_9501Code.GDarea4Objects5.length = 0;
gdjs.main_9501Code.GDarea5Objects1.length = 0;
gdjs.main_9501Code.GDarea5Objects2.length = 0;
gdjs.main_9501Code.GDarea5Objects3.length = 0;
gdjs.main_9501Code.GDarea5Objects4.length = 0;
gdjs.main_9501Code.GDarea5Objects5.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects1.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects2.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects3.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects4.length = 0;
gdjs.main_9501Code.GDNewSprite4Objects5.length = 0;


return;

}

gdjs['main_9501Code'] = gdjs.main_9501Code;
