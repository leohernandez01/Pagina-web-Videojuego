
if (typeof gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes !== "undefined") {
  gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes = {};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatCount2 = 0;

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatIndex2 = 0;

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects1= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects2= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects4= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects1= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects2= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3= [];
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects4= [];

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.conditionTrue_0 = {val:false};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.conditionTrue_1 = {val:false};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_46evtsExt_95_95TetrisUtils_95_95Block_95PutLockedOnes_46GDlockedBlockObjects3Objects = Hashtable.newFrom({"lockedBlock": gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3});
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_46evtsExt_95_95TetrisUtils_95_95Block_95PutLockedOnes_46GDgridObjects3Objects = Hashtable.newFrom({"grid": gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3});
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getScene().getVariables().get("_TempValue").setNumber(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.strAt(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("_TempStr")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_Count")))));
}}

}


{


gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.conditionTrue_1 = gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition0IsTrue_0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_TempValue")) == 1);
}
}if (gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("grid"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("lockedBlock"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3);
{gdjs.evtsExt__TetrisUtils__Block_PutLockedOne.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_Count")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0), -(1), 1, gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_46evtsExt_95_95TetrisUtils_95_95Block_95PutLockedOnes_46GDlockedBlockObjects3Objects, eventsFunctionContext.getBehaviorName("TetrisBlock"), gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.mapOfGDgdjs_46evtsExt_95_95TetrisUtils_95_95Block_95PutLockedOnes_46GDgridObjects3Objects, eventsFunctionContext.getBehaviorName("TetrisGrid"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
{runtimeScene.getScene().getVariables().get("_Count").add(1);
}}

}


};gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getScene().getVariables().get("_TempStr").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("values") : ""));
}{runtimeScene.getScene().getVariables().get("_Count").setNumber(0);
}}

}


{


gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatCount2 = gdjs.evtTools.string.strLen(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("_TempStr")));
for(gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatIndex2 = 0;gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatIndex2 < gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatCount2;++gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.repeatIndex2) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.func = function(runtimeScene, y, lockedBlock, TetrisBlock, grid, TetrisGrid, values, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"lockedBlock": lockedBlock
, "grid": grid
},
  _objectArraysMap: {
"lockedBlock": gdjs.objectsListsToArray(lockedBlock)
, "grid": gdjs.objectsListsToArray(grid)
},
  _behaviorNamesMap: {
"TetrisBlock": TetrisBlock
, "TetrisGrid": TetrisGrid
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "y") return y;
if (argName === "values") return values;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDlockedBlockObjects4.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects1.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects2.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects3.length = 0;
gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.GDgridObjects4.length = 0;

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__TetrisUtils__Block_PutLockedOnes.registeredGdjsCallbacks = [];