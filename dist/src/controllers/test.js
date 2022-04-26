"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("../../inversify.config");
var types_1 = require("../types");
var obj = inversify_config_1.myContainer.get(types_1.TYPES.Warrior);
console.log(obj.fight());
