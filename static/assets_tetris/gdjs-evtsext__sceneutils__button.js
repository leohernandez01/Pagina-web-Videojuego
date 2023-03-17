
gdjs.evtsExt__SceneUtils__Button = gdjs.evtsExt__SceneUtils__Button || {};

/**
 * Behavior generated from SceneUtils::Button
 */
gdjs.evtsExt__SceneUtils__Button.Button = class Button extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SceneUtils__Button.Button.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from SceneUtils::Button
 */
gdjs.evtsExt__SceneUtils__Button.Button.SharedData = class ButtonSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SceneUtils__Button.Button.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SceneUtils_ButtonSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SceneUtils_ButtonSharedData = new gdjs.evtsExt__SceneUtils__Button.Button.SharedData(
      initialData
    );
  }
  return instanceContainer._SceneUtils_ButtonSharedData;
}

// Methods:
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext = {};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1);

gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1[i].getVariables().get("_State")) == "pressed" ) {
        gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__Button.Button.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext = {};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects1[i].getVariables().get("_State")).setString("");
}
}}

}


};

gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__Button.Button.prototype.ResetPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext = {};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects2= [];
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects3= [];

gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95Button_46Button_46prototype_46HandleEventContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1});
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95Button_46Button_46prototype_46HandleEventContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1});
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects2[i].setAnimationName("Pressed");
}
}}

}


{


gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1[i].getVariables().get("_State")).setString("pressed");
}
}}

}


};gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1);

gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95Button_46Button_46prototype_46HandleEventContext_46GDObjectObjects1Objects, runtimeScene, true, true);
}if (gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1);

gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95Button_46Button_46prototype_46HandleEventContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEvent = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__SceneUtils__Button.Button.prototype.HandleEventContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SceneUtils__Button.Button.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SceneUtils::Button", gdjs.evtsExt__SceneUtils__Button.Button);
