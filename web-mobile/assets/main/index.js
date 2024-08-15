window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AutoResetParticle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef202DxAQRAAokhCJevsbRZ", "AutoResetParticle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, requireComponent = _a.requireComponent, menu = _a.menu;
    var AutoResetParticle = function(_super) {
      __extends(AutoResetParticle, _super);
      function AutoResetParticle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AutoResetParticle.prototype.onEnable = function() {
        this.getComponent(cc.ParticleSystem).resetSystem();
      };
      AutoResetParticle.prototype.onDisable = function() {
        this.getComponent(cc.ParticleSystem).stopSystem();
      };
      AutoResetParticle = __decorate([ ccclass, menu("0_Common/Game/Component/AutoResetParticle"), requireComponent(cc.ParticleSystem) ], AutoResetParticle);
      return AutoResetParticle;
    }(cc.Component);
    exports.default = AutoResetParticle;
    cc._RF.pop();
  }, {} ],
  BaseBackGround: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a526yglEZMA5m8CpwRqEw2", "BaseBackGround");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PoolObj_1 = require("../Common/PoolObj");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseBackGround = function(_super) {
      __extends(BaseBackGround, _super);
      function BaseBackGround() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bossEnter = false;
        return _this;
      }
      BaseBackGround.prototype.reuse = function() {
        _super.prototype.reuse.call(this);
        this.bossEnter = false;
      };
      BaseBackGround.prototype.BossEnter = function() {
        if (this.bossEnter) return;
        this.animation.play("Boss_Enter");
        this.bossEnter = true;
      };
      BaseBackGround.prototype.BossLeave = function() {};
      BaseBackGround = __decorate([ ccclass ], BaseBackGround);
      return BaseBackGround;
    }(PoolObj_1.default);
    exports.default = BaseBackGround;
    cc._RF.pop();
  }, {
    "../Common/PoolObj": "PoolObj"
  } ],
  Dictionary: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1094wLgRZNIpoGlZJalb5P", "Dictionary");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Dictionary = void 0;
    var Dictionary = function() {
      function Dictionary() {
        this._keys = [];
        this._values = [];
        this.undefinedKeyErrorMessage = "Key is either undefined, null or an empty string.";
      }
      Dictionary.prototype.isEitherUndefinedNullOrStringEmpty = function(object) {
        return "undefined" === typeof object || null === object || "" === object.toString();
      };
      Dictionary.prototype.checkKeyAndPerformAction = function(action, key, value) {
        if (this.isEitherUndefinedNullOrStringEmpty(key)) throw new Error(this.undefinedKeyErrorMessage);
        return action(key, value);
      };
      Dictionary.prototype.add = function(key, value) {
        var _this = this;
        var addAction = function(key, value) {
          if (_this.containsKey(key)) throw new Error("An element with the same key already exists in the dictionary.");
          _this._keys.push(key);
          _this._values.push(value);
        };
        this.checkKeyAndPerformAction(addAction, key, value);
      };
      Dictionary.prototype.remove = function(key) {
        var _this = this;
        var removeAction = function(key) {
          if (!_this.containsKey(key)) return false;
          var index = _this._keys.indexOf(key);
          _this._keys.splice(index, 1);
          _this._values.splice(index, 1);
          return true;
        };
        return this.checkKeyAndPerformAction(removeAction, key);
      };
      Dictionary.prototype.getValue = function(key) {
        var _this = this;
        var getValueAction = function(key) {
          if (!_this.containsKey(key)) return null;
          var index = _this._keys.indexOf(key);
          return _this._values[index];
        };
        return this.checkKeyAndPerformAction(getValueAction, key);
      };
      Dictionary.prototype.containsKey = function(key) {
        var _this = this;
        var containsKeyAction = function(key) {
          if (-1 === _this._keys.indexOf(key)) return false;
          return true;
        };
        return this.checkKeyAndPerformAction(containsKeyAction, key);
      };
      Dictionary.prototype.popValue = function(key) {
        var _this = this;
        var getValueAction = function(key) {
          if (!_this.containsKey(key)) return null;
          var index = _this._keys.indexOf(key);
          var result = _this._values[index];
          _this._keys.splice(index, 1);
          _this._values.splice(index, 1);
          return result;
        };
        return this.checkKeyAndPerformAction(getValueAction, key);
      };
      Dictionary.prototype.changeValueForKey = function(key, newValue) {
        var _this = this;
        var changeValueForKeyAction = function(key, newValue) {
          if (!_this.containsKey(key)) throw new Error("In the dictionary there is no element with the given key.");
          var index = _this._keys.indexOf(key);
          _this._values[index] = newValue;
        };
        this.checkKeyAndPerformAction(changeValueForKeyAction, key, newValue);
      };
      Dictionary.prototype.keys = function() {
        return this._keys;
      };
      Dictionary.prototype.values = function() {
        return this._values;
      };
      Dictionary.prototype.count = function() {
        return this._values.length;
      };
      Dictionary.prototype.clear = function() {
        this._keys = [];
        this._values = [];
      };
      return Dictionary;
    }();
    exports.Dictionary = Dictionary;
    cc._RF.pop();
  }, {} ],
  EffectReduceController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1832evACyJH27JjPCq26MUZ", "EffectReduceController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("../../../../CommonModule/Script/Manager/EventManager");
    var Dictionary_1 = require("../../../../CommonModule/Script/Utility/Dictionary");
    var EffectReduceManager_1 = require("../../Manager/EffectReduceManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EffectReduceController = function(_super) {
      __extends(EffectReduceController, _super);
      function EffectReduceController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.effectObjectList = new Array();
        _this.oriGroupNameDic = new Dictionary_1.Dictionary();
        _this.isGoingToDestroy = false;
        return _this;
      }
      EffectReduceController.prototype.onLoad = function() {
        var _this = this;
        this.oriGroupNameDic.clear();
        this.isGoingToDestroy = false;
        this.effectObjectList.forEach(function(obj) {
          if (obj) {
            _this.oriGroupNameDic.containsKey(obj.uuid) ? _this.oriGroupNameDic.changeValueForKey(obj.uuid, obj.group) : _this.oriGroupNameDic.add(obj.uuid, obj.group);
            var onOverride_1 = false;
            obj.on(cc.Node.EventType.GROUP_CHANGED, function() {
              if (!_this.isGoingToDestroy) {
                if (onOverride_1) {
                  onOverride_1 = false;
                  return;
                }
                obj.group == _this.oriGroupNameDic.getValue(obj.uuid) || (_this.oriGroupNameDic.containsKey(obj.uuid) ? _this.oriGroupNameDic.changeValueForKey(obj.uuid, obj.group) : _this.oriGroupNameDic.add(obj.uuid, obj.group));
                if (EffectReduceManager_1.default.Instance.ReduceEffect && obj.group != EffectReduceManager_1.default.Instance.HiddenGroupName) {
                  onOverride_1 = true;
                  obj.group = EffectReduceManager_1.default.Instance.HiddenGroupName;
                }
              }
            }, _this);
            obj.group = _this.oriGroupNameDic.getValue(obj.uuid);
            EventManager_1.default.Instance.AddEventListener(EffectReduceManager_1.EffectReduceEvent.CHANGE_STATE, obj["cry_r"] = function() {
              console.error("EventListener ", _this.node.name, obj.name, obj.uuid);
              if (obj.isValid) {
                console.error("EffectReduce CHANGE " + obj.name + " ReduceEffect = " + EffectReduceManager_1.default.Instance.ReduceEffect + " oriGroupName = " + _this.oriGroupNameDic.getValue(obj.uuid));
                obj.group = _this.oriGroupNameDic.getValue(obj.uuid);
              } else {
                EventManager_1.default.Instance.RemoveEventListener(EffectReduceManager_1.EffectReduceEvent.CHANGE_STATE, obj["cry_r"], _this);
                _this.effectObjectList.forEach(function(tmpObj, index) {
                  tmpObj.uuid == obj.uuid && _this.effectObjectList.splice(index, 1);
                });
              }
            }, _this);
          }
        });
      };
      EffectReduceController.prototype.onDestroy = function() {
        var _this = this;
        this.effectObjectList.forEach(function(obj, index) {
          obj && EventManager_1.default.Instance.RemoveEventListener(EffectReduceManager_1.EffectReduceEvent.CHANGE_STATE, obj["cry_r"], _this);
        });
        this.effectObjectList = null;
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u53ef\u4ee5\u66f4\u6539group\u7684\u7269\u4ef6\uff0c\u5efa\u8b70\u653e\u5b50\u7269\u4ef6\uff0c\u4e14\u662f\u6c92\u6709\u97f3\u6548\u914d\u5408\u7684\u7c92\u5b50\u7279\u6548\u3001Add\uff0c\u6216\u662f\u4e0d\u9069\u5408\u95dc\u9589\u7bc0\u9ede\u7684\u7269\u4ef6"
      }) ], EffectReduceController.prototype, "effectObjectList", void 0);
      EffectReduceController = __decorate([ ccclass ], EffectReduceController);
      return EffectReduceController;
    }(cc.Component);
    exports.default = EffectReduceController;
    cc._RF.pop();
  }, {
    "../../../../CommonModule/Script/Manager/EventManager": "EventManager",
    "../../../../CommonModule/Script/Utility/Dictionary": "Dictionary",
    "../../Manager/EffectReduceManager": "EffectReduceManager"
  } ],
  EffectReduceManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8b0cmefyFBPJD4DIjgXHGg", "EffectReduceManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EffectReduceTrigger = exports.EffectReduceEvent = void 0;
    var FPSCounter_1 = require("../../../0_Common/Script/Utility/FPSCounter");
    var EventManager_1 = require("../../../CommonModule/Script/Manager/EventManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    exports.EffectReduceEvent = {
      CHANGE_STATE: "ChangeState",
      ON_AVERAGE_FPS: "OnAverageFPS"
    };
    var EffectReduceTrigger;
    (function(EffectReduceTrigger) {
      EffectReduceTrigger["Player"] = "player";
      EffectReduceTrigger["System"] = "system";
    })(EffectReduceTrigger = exports.EffectReduceTrigger || (exports.EffectReduceTrigger = {}));
    var EffectReduceManager = function(_super) {
      __extends(EffectReduceManager, _super);
      function EffectReduceManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.group = "Invisible";
        _this.isReduce = false;
        _this.isPlayerModified = false;
        _this.performanceDetection = null;
        _this.isPerformanceDetecting = false;
        _this.performanceDetectionCounter = 0;
        _this.performanceDetectionFPS = 0;
        return _this;
      }
      EffectReduceManager_1 = EffectReduceManager;
      Object.defineProperty(EffectReduceManager, "Instance", {
        get: function() {
          return EffectReduceManager_1.instance;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(EffectReduceManager.prototype, "HiddenGroupName", {
        get: function() {
          return this.group;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(EffectReduceManager.prototype, "ReduceEffect", {
        get: function() {
          return this.isReduce;
        },
        set: function(isReduce) {
          this.isPlayerModified = true;
          this.isReduce = isReduce;
          EventManager_1.default.Instance.DispatchEvent(exports.EffectReduceEvent.CHANGE_STATE, this.isReduce, this.performanceDetectionFPS, EffectReduceTrigger.Player);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(EffectReduceManager.prototype, "PerformanceDetectionFPS", {
        get: function() {
          return this.performanceDetectionFPS;
        },
        enumerable: false,
        configurable: true
      });
      EffectReduceManager.prototype.onLoad = function() {
        if (null != EffectReduceManager_1.instance) {
          this.node.destroy();
          return;
        }
        EffectReduceManager_1.instance = this;
        this.Init();
      };
      EffectReduceManager.prototype.onDestroy = function() {
        this.Release();
      };
      EffectReduceManager.prototype.Init = function() {
        EventManager_1.default.Instance.RegisterEvents(exports.EffectReduceEvent);
      };
      EffectReduceManager.prototype.Release = function() {
        null != this.performanceDetection && this.StopPerformanceDetection();
        EventManager_1.default.Instance.UnregisterEvents(exports.EffectReduceEvent);
        EffectReduceManager_1.instance = null;
      };
      EffectReduceManager.prototype.Clear = function() {};
      EffectReduceManager.prototype.StartPerformanceDetection = function() {
        this.StopPerformanceDetection();
        this.isPerformanceDetecting = true;
        this.performanceDetection = new FPSCounter_1.default(5, -1, this.OnPerformanceDetection.bind(this));
      };
      EffectReduceManager.prototype.ResetPerformanceDetectionCounter = function() {
        this.performanceDetectionCounter = 0;
        this.isPerformanceDetecting = true;
      };
      EffectReduceManager.prototype.StopPerformanceDetectionCounter = function() {
        console.log("%c[EffectReduceManager] StopPerformanceDetectionCounter", "background:black;color:red");
        this.performanceDetectionCounter = 0;
        this.isPerformanceDetecting = false;
      };
      EffectReduceManager.prototype.OnPerformanceDetection = function(averageFps) {
        if (!this.performanceDetection) return;
        this.performanceDetectionFPS = averageFps;
        EventManager_1.default.Instance.DispatchEvent(exports.EffectReduceEvent.ON_AVERAGE_FPS, this.performanceDetectionFPS);
        if (true == this.isPerformanceDetecting) if (false == this.isPlayerModified && false == this.isReduce) {
          console.log("%c[EffectReduceManager] OnPerformanceDetection: %s", "background:black;color:red", this.performanceDetectionFPS);
          if (this.performanceDetectionCounter < 12) {
            this.performanceDetectionCounter++;
            if (this.performanceDetectionFPS < 15) {
              console.log("%c[EffectReduceManager] OnPerformanceDetection: Reduce Effect !!", "background:black;color:red");
              this.isReduce = true;
              cc.game.setFrameRate(30);
              EventManager_1.default.Instance.DispatchEvent(exports.EffectReduceEvent.CHANGE_STATE, this.isReduce, this.performanceDetectionFPS, EffectReduceTrigger.System);
              this.StopPerformanceDetectionCounter();
            }
          } else this.StopPerformanceDetectionCounter();
        } else this.StopPerformanceDetectionCounter();
      };
      EffectReduceManager.prototype.StopPerformanceDetection = function() {
        if (this.performanceDetection) {
          this.performanceDetection.Release();
          this.performanceDetection = null;
          this.StopPerformanceDetectionCounter();
        }
      };
      var EffectReduceManager_1;
      EffectReduceManager.instance = null;
      EffectReduceManager = EffectReduceManager_1 = __decorate([ ccclass ], EffectReduceManager);
      return EffectReduceManager;
    }(cc.Component);
    exports.default = EffectReduceManager;
    cc._RF.pop();
  }, {
    "../../../0_Common/Script/Utility/FPSCounter": "FPSCounter",
    "../../../CommonModule/Script/Manager/EventManager": "EventManager"
  } ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63b73g6GMZLKLQ7744S81PG", "EventManager");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Signal_1 = require("../Utility/Signal");
    var EventManager = function() {
      function EventManager() {
        this.signalList = null;
        this.Init();
      }
      Object.defineProperty(EventManager, "Instance", {
        get: function() {
          null == EventManager.instance && (EventManager.instance = new EventManager());
          return EventManager.instance;
        },
        enumerable: false,
        configurable: true
      });
      EventManager.prototype.Init = function() {
        this.Release();
        this.signalList = {};
        EventManager.instance = this;
      };
      EventManager.prototype.Release = function() {
        if (null != this.signalList) {
          var signal = null;
          for (var eventName in this.signalList) {
            signal = this.signalList[eventName];
            if (null == signal) continue;
            signal.dispose();
            delete this.signalList[eventName];
          }
        }
        this.signalList = null;
        EventManager.instance = null;
      };
      EventManager.prototype.RegisterEvents = function(eventNameList) {
        if (null == this.signalList) return;
        var signal = null;
        for (var eventKeyName in eventNameList) {
          var eventName = eventNameList[eventKeyName];
          signal = this.signalList[eventName];
          if (null != signal) {
            console.warn("[EventManager] Event: %s already exists", eventName);
            continue;
          }
          this.signalList[eventName] = new Signal_1.default();
        }
      };
      EventManager.prototype.UnregisterEvents = function(eventNameList) {
        if (null == this.signalList) return;
        var signal = null;
        for (var eventKeyName in eventNameList) {
          var eventName = eventNameList[eventKeyName];
          signal = this.signalList[eventName];
          if (null == signal) {
            console.warn("[EventManager] Event: %s does not exist", eventName);
            continue;
          }
          signal.dispose();
          delete this.signalList[eventName];
        }
      };
      EventManager.prototype.AddEventListener = function(eventName, listener, context) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
        if (null == this.signalList) return;
        var signal = this.signalList[eventName];
        if (this.IsNullEvent(eventName)) return;
        if (signal.has(listener, context)) {
          console.warn("[EventManager] duplicate listener add to %s", eventName);
          return;
        }
        signal.add.apply(signal, __spreadArrays([ listener, context, 0 ], args));
      };
      EventManager.prototype.AddEventListenerOnce = function(eventName, listener, context) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
        if (null == this.signalList) return;
        var signal = this.signalList[eventName];
        if (this.IsNullEvent(eventName)) return;
        if (signal.has(listener, context)) {
          console.warn("[EventManager] duplicate listener addOnce to %s", eventName);
          return;
        }
        signal.addOnce.apply(signal, __spreadArrays([ listener, context, 0 ], args));
      };
      EventManager.prototype.RemoveEventListener = function(eventName, listener, context) {
        if (null == this.signalList) return;
        var signal = this.signalList[eventName];
        if (this.IsNullEvent(eventName)) return;
        if (!signal.has(listener, context)) {
          console.warn("[EventManager] %s does not have this listener", eventName);
          return;
        }
        signal.remove(listener, context);
      };
      EventManager.prototype.RemoveAllEventListener = function(eventName, context) {
        if (null == this.signalList) return;
        if (this.IsNullEvent(eventName)) return;
        this.signalList[eventName].removeAll(context);
      };
      EventManager.prototype.DispatchEvent = function(eventName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        if (null == this.signalList) return;
        if (this.IsNullEvent(eventName)) return;
        var signal = this.signalList[eventName];
        0 == params.length ? signal.dispatch() : signal.dispatch.apply(signal, params);
      };
      EventManager.prototype.HasEventListener = function(eventName) {
        if (null == this.signalList) return false;
        if (this.IsNullEvent(eventName)) return false;
        var hasListener = 0 != this.signalList[eventName].getNumListeners();
        return hasListener;
      };
      EventManager.prototype.IsNullEvent = function(eventName) {
        if (null == this.signalList) return;
        var isNull = null == this.signalList[eventName];
        isNull && console.warn("[EventManager] %s is not found", eventName);
        return isNull;
      };
      EventManager.instance = null;
      return EventManager;
    }();
    exports.default = EventManager;
    cc._RF.pop();
  }, {
    "../Utility/Signal": "Signal"
  } ],
  FPSCounter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b72ddxbHThAEZoW0XTnZd9p", "FPSCounter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Signal_1 = require("../../../CommonModule/Script/Utility/Signal");
    var FPSCounter = function() {
      function FPSCounter(averageSec, timeout, averageFpsCb, timeoutCb) {
        void 0 === averageSec && (averageSec = 1);
        void 0 === timeout && (timeout = -1);
        this.onAverageFPS = null;
        this.onTimeOut = null;
        this.timeCount = 0;
        this.averageTimeCount = 0;
        this.totalTimeCount = 0;
        this.frame_counter = 0;
        this.fps = 0;
        this.totalFPS = 0;
        this.averageSec = 1;
        this.timeout = -1;
        if (timeout < 1 && -1 != timeout) {
          console.error("[FPSCounter] timeout shoud = -1 or >= 1. (" + timeout + ")");
          return;
        }
        if (averageSec < 1) {
          console.error("[FPSCounter] averageSec shoud >= 1. (" + averageSec + ")");
          return;
        }
        if (averageFpsCb) {
          null == this.onAverageFPS && (this.onAverageFPS = new Signal_1.default());
          this.onAverageFPS.add(averageFpsCb);
        }
        if (timeoutCb) {
          null == this.onTimeOut && (this.onTimeOut = new Signal_1.default());
          this.onTimeOut.add(timeoutCb);
        }
        this.averageSec = averageSec;
        this.timeout = timeout;
        this.StartFPSCounter();
      }
      FPSCounter.prototype.StartFPSCounter = function() {
        this.timeCount = 0;
        this.frame_counter = 0;
        this.totalFPS = 0;
        this.averageTimeCount = 0;
        cc.director.on(cc.Director.EVENT_AFTER_UPDATE, this.OnFrameUpdate, this);
      };
      FPSCounter.prototype.OnFrameUpdate = function() {
        var deltaTime = cc.director.getDeltaTime();
        this.timeCount += deltaTime;
        this.frame_counter++;
        if (this.timeCount >= 1) {
          this.fps = this.frame_counter / this.timeCount;
          this.totalTimeCount += this.timeCount;
          if (this.averageSec > 1) {
            this.totalFPS += this.fps;
            this.averageTimeCount += this.timeCount;
            if (this.averageTimeCount >= this.averageSec) {
              var averageFps = this.totalFPS / this.averageTimeCount;
              this.totalFPS = 0;
              this.averageTimeCount = 0;
              this.onAverageFPS && this.onAverageFPS.dispatch(averageFps);
            }
          } else 1 == this.averageSec && this.onAverageFPS && this.onAverageFPS.dispatch(this.fps);
          this.timeCount = 0;
          this.frame_counter = 0;
          if (-1 != this.timeout && this.totalTimeCount >= this.timeout) {
            this.onTimeOut && this.onTimeOut.dispatch();
            this.StopFPSCounter();
          }
        }
      };
      FPSCounter.prototype.StopFPSCounter = function() {
        cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this.OnFrameUpdate, this);
        this.timeCount = 0;
        this.averageTimeCount = 0;
        this.totalTimeCount = 0;
        this.frame_counter = 0;
        this.fps = 0;
        this.totalFPS = 0;
        null != this.onAverageFPS && this.onAverageFPS.dispose();
        this.onAverageFPS = null;
        null != this.onTimeOut && this.onTimeOut.dispose();
        this.onTimeOut = null;
        this.averageSec = 1;
        this.timeout = -1;
      };
      FPSCounter.prototype.Release = function() {
        this.onTimeOut && this.onTimeOut.dispatch();
        this.StopFPSCounter();
      };
      return FPSCounter;
    }();
    exports.default = FPSCounter;
    cc._RF.pop();
  }, {
    "../../../CommonModule/Script/Utility/Signal": "Signal"
  } ],
  PoolObj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dff4cjhleRCI4i3ZmVhyAic", "PoolObj");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var PoolObj = function(_super) {
      __extends(PoolObj, _super);
      function PoolObj() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pool = "";
        _this.type = "";
        _this.RecycleEvent = null;
        _this.RecycleFunction = null;
        _this.animation = null;
        return _this;
      }
      Object.defineProperty(PoolObj.prototype, "Pool", {
        set: function(str) {
          this.pool = str;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PoolObj.prototype, "Type", {
        set: function(str) {
          this.type = str;
        },
        enumerable: false,
        configurable: true
      });
      PoolObj.prototype.onLoad = function() {
        this.RecycleEvent = new Array();
        this.animation = this.getComponent(cc.Animation);
      };
      PoolObj.prototype.reuse = function() {
        if (this.animation) {
          this.animation.stop();
          this.animation.play();
        }
      };
      PoolObj.prototype.Recycle = function() {
        this.animation && this.animation.stop();
        if (this.RecycleEvent.length) {
          for (var _i = 0, _a = this.RecycleEvent; _i < _a.length; _i++) {
            var event = _a[_i];
            event();
          }
          this.RecycleEvent.length = 0;
        }
        this.RecycleFunction && this.RecycleFunction(this.pool, this.type, this.node);
      };
      PoolObj = __decorate([ ccclass ], PoolObj);
      return PoolObj;
    }(cc.Component);
    exports.default = PoolObj;
    cc._RF.pop();
  }, {} ],
  Signal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1c908JAG5L94Gm0uXkGpRX", "Signal");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Signal = function() {
      function Signal() {
        this.memorize = false;
        this.active = true;
        this._bindings = null;
        this._prevParams = null;
        this._shouldPropagate = true;
        this._boundDispatch = null;
      }
      Signal.prototype.validateListener = function(listener, fnName) {
        if ("function" !== typeof listener) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", fnName));
      };
      Signal.prototype._registerListener = function(listener, isOnce, listenerContext, priority, args) {
        void 0 === listenerContext && (listenerContext = null);
        void 0 === priority && (priority = 0);
        var prevIndex = this._indexOfListener(listener, listenerContext);
        var binding = null;
        if (-1 !== prevIndex) {
          binding = this._bindings[prevIndex];
          if (binding.isOnce() !== isOnce) throw new Error("You cannot add" + (isOnce ? "" : "Once") + "() then add" + (isOnce ? "Once" : "") + "() the same listener without removing the relationship first.");
        } else {
          binding = new SignalBinding(this, listener, isOnce, listenerContext, priority, args);
          this._addBinding(binding);
        }
        this.memorize && this._prevParams && binding.execute(this._prevParams);
        return binding;
      };
      Signal.prototype._addBinding = function(binding) {
        this._bindings || (this._bindings = Array());
        var n = this._bindings.length;
        do {
          n--;
        } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
        this._bindings.splice(n + 1, 0, binding);
      };
      Signal.prototype._indexOfListener = function(listener, context) {
        void 0 === context && (context = null);
        if (!this._bindings) return -1;
        void 0 === context && (context = null);
        var n = this._bindings.length;
        var cur = null;
        while (n--) {
          cur = this._bindings[n];
          if (cur.getListener() === listener && cur.context === context) return n;
        }
        return -1;
      };
      Signal.prototype.has = function(listener, context) {
        void 0 === context && (context = null);
        return -1 !== this._indexOfListener(listener, context);
      };
      Signal.prototype.add = function(listener, listenerContext, priority) {
        void 0 === listenerContext && (listenerContext = null);
        void 0 === priority && (priority = 0);
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
        this.validateListener(listener, "add");
        return this._registerListener(listener, false, listenerContext, priority, args);
      };
      Signal.prototype.addOnce = function(listener, listenerContext, priority) {
        void 0 === listenerContext && (listenerContext = null);
        void 0 === priority && (priority = 0);
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
        this.validateListener(listener, "addOnce");
        return this._registerListener(listener, true, listenerContext, priority, args);
      };
      Signal.prototype.remove = function(listener, context) {
        void 0 === context && (context = null);
        this.validateListener(listener, "remove");
        var i = this._indexOfListener(listener, context);
        if (-1 !== i) {
          this._bindings[i].destroy();
          this._bindings.splice(i, 1);
        }
        return listener;
      };
      Signal.prototype.removeAll = function(context) {
        void 0 === context && (context = null);
        void 0 === context && (context = null);
        if (!this._bindings) return;
        var n = this._bindings.length;
        while (n--) if (context) {
          if (this._bindings[n].context === context) {
            this._bindings[n].destroy();
            this._bindings.splice(n, 1);
          }
        } else this._bindings[n].destroy();
        context || (this._bindings.length = 0);
      };
      Signal.prototype.getNumListeners = function() {
        return this._bindings ? this._bindings.length : 0;
      };
      Signal.prototype.halt = function() {
        this._shouldPropagate = false;
      };
      Signal.prototype.dispatch = function() {
        var paramsArr = [];
        for (var _i = 0; _i < arguments.length; _i++) paramsArr[_i] = arguments[_i];
        if (!this.active || !this._bindings) return;
        var n = this._bindings.length;
        var bindings = null;
        this.memorize && (this._prevParams = paramsArr);
        if (!n) return;
        bindings = this._bindings.slice();
        this._shouldPropagate = true;
        do {
          n--;
        } while (bindings[n] && this._shouldPropagate && false !== bindings[n].execute(paramsArr));
      };
      Signal.prototype.forget = function() {
        this._prevParams && (this._prevParams = null);
      };
      Signal.prototype.dispose = function() {
        this.removeAll();
        this._bindings = null;
        this._prevParams && (this._prevParams = null);
      };
      Signal.prototype.toString = function() {
        return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]";
      };
      return Signal;
    }();
    exports.default = Signal;
    var SignalBinding = function() {
      function SignalBinding(signal, listener, isOnce, listenerContext, priority, args) {
        void 0 === listenerContext && (listenerContext = null);
        void 0 === priority && (priority = 0);
        this.context = null;
        this.priority = 0;
        this.params = null;
        this._signal = null;
        this._listener = null;
        this._isOnce = false;
        this._args = null;
        this._listener = listener;
        isOnce && (this._isOnce = true);
        null != listenerContext && (this.context = listenerContext);
        this._signal = signal;
        priority && (this.priority = priority);
        args && args.length && (this._args = args);
      }
      SignalBinding.prototype.execute = function(paramsArr) {
        var handlerReturn = null;
        var params = null;
        if (!!this._listener) {
          params = this.params ? this.params.concat(paramsArr) : paramsArr;
          this._args && (params = params.concat(this._args));
          handlerReturn = this._listener.apply(this.context, params);
          this._isOnce && this.detach();
        }
        return handlerReturn;
      };
      SignalBinding.prototype.detach = function() {
        if (this.isBound()) {
          this._signal.remove(this._listener, this.context);
          return this._signal;
        }
        return null;
      };
      SignalBinding.prototype.isBound = function() {
        return !!this._signal && !!this._listener;
      };
      SignalBinding.prototype.isOnce = function() {
        return this._isOnce;
      };
      SignalBinding.prototype.getListener = function() {
        return this._listener;
      };
      SignalBinding.prototype.destroy = function() {
        delete this._signal;
        delete this._listener;
        delete this.context;
      };
      SignalBinding.prototype.toString = function() {
        return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + "]";
      };
      return SignalBinding;
    }();
    cc._RF.pop();
  }, {} ],
  UIUnderWaterSetterEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d762Uq1u9LbrNwZAmbzE4S", "UIUnderWaterSetterEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, playOnFocus = _a.playOnFocus, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var UIUnderWaterSetterEffect = function(_super) {
      __extends(UIUnderWaterSetterEffect, _super);
      function UIUnderWaterSetterEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._timeFactor = .2;
        _this._offsetFactor = .1;
        _this._addTime = 0;
        _this._sprite = null;
        _this._material = null;
        return _this;
      }
      Object.defineProperty(UIUnderWaterSetterEffect.prototype, "TimeFactor", {
        get: function() {
          return this._timeFactor;
        },
        set: function(val) {
          this._timeFactor = val;
          this.Init();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UIUnderWaterSetterEffect.prototype, "OffsetFactor", {
        get: function() {
          return this._offsetFactor;
        },
        set: function(val) {
          this._offsetFactor = val;
          this.Init();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UIUnderWaterSetterEffect.prototype, "AddTimes", {
        get: function() {
          return this._addTime;
        },
        set: function(val) {
          this._addTime = val;
          this.Init();
        },
        enumerable: false,
        configurable: true
      });
      UIUnderWaterSetterEffect.prototype.onLoad = function() {
        this.Init();
      };
      UIUnderWaterSetterEffect.prototype.onEnable = function() {
        false;
      };
      UIUnderWaterSetterEffect.prototype.onDestroy = function() {
        this.Release();
      };
      UIUnderWaterSetterEffect.prototype.Init = function() {
        this._sprite = this.node.getComponent(cc.Sprite);
        this._material = this._sprite.getMaterial(0);
        if (-1 != this._material.name.search("under-water")) {
          this._material.setProperty("timeFactor", this._timeFactor);
          this._material.setProperty("offsetFactor", this._offsetFactor);
          this._material.setProperty("addTimes", this._addTime);
        } else console.error('Wrong material. Please set a material named "under-water" !');
      };
      UIUnderWaterSetterEffect.prototype.Release = function() {
        this._sprite = null;
        this._material = null;
      };
      __decorate([ property ], UIUnderWaterSetterEffect.prototype, "_timeFactor", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8a2d\u5b9a\u6ce2\u52d5\u901f\u5ea6"
      }) ], UIUnderWaterSetterEffect.prototype, "TimeFactor", null);
      __decorate([ property ], UIUnderWaterSetterEffect.prototype, "_offsetFactor", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8a2d\u5b9a\u6ce2\u52d5\u5e45\u5ea6"
      }) ], UIUnderWaterSetterEffect.prototype, "OffsetFactor", null);
      __decorate([ property ], UIUnderWaterSetterEffect.prototype, "_addTime", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u8a2d\u5b9a\u8981\u91cd\u8907\u758a\u8272\u7684\u6b21\u6578,\u975e\u7d14\u9ed1\u7684\u5730\u65b9\u6703\u8d8a\u758a\u8d8a\u4eae,\u5982\u8abf\u6574\u6c92\u53cd\u61c9\u8acb\u6ce8\u610fMaterial\u662f\u5426\u6b63\u78ba,\u5982\u5834\u666f\u4e0d\u9069\u5408\u52a0\u5149\u6591\u8acb\u8a2d\u70ba0"
      }) ], UIUnderWaterSetterEffect.prototype, "AddTimes", null);
      UIUnderWaterSetterEffect = __decorate([ ccclass, playOnFocus, executeInEditMode, menu("0_Common/Game/Component/UIUnderWaterSetterEffect") ], UIUnderWaterSetterEffect);
      return UIUnderWaterSetterEffect;
    }(cc.Component);
    exports.default = UIUnderWaterSetterEffect;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AutoResetParticle", "UIUnderWaterSetterEffect", "FPSCounter", "EventManager", "Dictionary", "Signal", "EffectReduceManager", "BaseBackGround", "EffectReduceController", "PoolObj" ]);