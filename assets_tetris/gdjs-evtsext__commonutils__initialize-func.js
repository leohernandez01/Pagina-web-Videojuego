
if (typeof gdjs.evtsExt__CommonUtils__Initialize !== "undefined") {
  gdjs.evtsExt__CommonUtils__Initialize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommonUtils__Initialize = {};

gdjs.evtsExt__CommonUtils__Initialize.conditionTrue_0 = {val:false};
gdjs.evtsExt__CommonUtils__Initialize.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CommonUtils__Initialize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("_GameDataPath").setString(gdjs.fileSystem.getUserdataPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("gameName") : ""));
}{gdjs.fileSystem.makeDirectory(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("_GameDataPath")), runtimeScene.getScene().getVariables().get("_Error"));
}}

}


};

gdjs.evtsExt__CommonUtils__Initialize.func = function(runtimeScene, gameName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
if (argName === "gameName") return gameName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CommonUtils__Initialize.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CommonUtils__Initialize.registeredGdjsCallbacks = [];