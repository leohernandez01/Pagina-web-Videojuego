
gdjs.evtsExt__SceneUtils__CheckBox = gdjs.evtsExt__SceneUtils__CheckBox || {};

/**
 * Behavior generated from SceneUtils::CheckBox
 */
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox = class CheckBox extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.getSharedData(
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
 * Shared data generated from SceneUtils::CheckBox
 */
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.SharedData = class CheckBoxSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SceneUtils_CheckBoxSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SceneUtils_CheckBoxSharedData = new gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.SharedData(
      initialData
    );
  }
  return instanceContainer._SceneUtils_CheckBoxSharedData;
}

// Methods:
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_State")).setString("");
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("_CheckedState")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1);

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[i].getVariableString(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[i].getVariables().get("_State")) == "pressed" ) {
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1[i].getVariables().get("_State")).setString("");
}
}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.ResetPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects2= [];

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1[0].getVariables()).get("_CheckedState"))); }}}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.GetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects2= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects2= [];

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].getVariables().get("_CheckedState")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1[i].hide(false);
}
}}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1[i].getVariables().get("_CheckedState")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1[i].hide();
}
}}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.conditionTrue_1 = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("check")) || 0 : 0) == 1);
}
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.conditionTrue_1 = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("check")) || 0 : 0) == 0);
}
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetChecked = function(checkObj, check, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "checkObj": checkObj
},
  _objectArraysMap: {
"Object": thisObjectList
, "checkObj": gdjs.objectsListsToArray(checkObj)
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
if (argName === "check") return check;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.GDcheckObjObjects2.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.SetCheckedContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext = {};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects3= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects1= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2= [];
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects3= [];

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95CheckBox_46CheckBox_46prototype_46HandleEventContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1});
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95CheckBox_46CheckBox_46prototype_46HandleEventContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1});
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_State")).setString("pressed");
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_Temp")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")) == 0 ) {
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_Temp")).setNumber(1);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.conditionTrue_1 = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_Temp")) == 0 ) {
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")) == 1 ) {
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[k] = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = k;}}
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.conditionTrue_1.val = true && gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_1.val && gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition1IsTrue_1.val;
}
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("checkObj"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2);
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].getVariables().get("_CheckedState")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2[i].hide();
}
}}

}


{


{
}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1, gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2[i].setAnimationName("Pressed");
}
}}

}


{


gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1);

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95CheckBox_46CheckBox_46prototype_46HandleEventContext_46GDObjectObjects1Objects, runtimeScene, true, true);
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1[i].setAnimationName("Normal");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1);

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.mapOfGDgdjs_46evtsExt_95_95SceneUtils_95_95CheckBox_46CheckBox_46prototype_46HandleEventContext_46GDObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1[i].setAnimationName("Hover");
}
}
{ //Subevents
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEvent = function(checkObj, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "checkObj": checkObj
},
  _objectArraysMap: {
"Object": thisObjectList
, "checkObj": gdjs.objectsListsToArray(checkObj)
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

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects1.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects2.length = 0;
gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.GDcheckObjObjects3.length = 0;

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.HandleEventContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SceneUtils__CheckBox.CheckBox.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SceneUtils::CheckBox", gdjs.evtsExt__SceneUtils__CheckBox.CheckBox);
