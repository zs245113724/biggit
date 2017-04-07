/*!
 * aladdin.phone v1.0.0
 * (c) 2016 Aladdin
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('aladdin')) :
  typeof define === 'function' && define.amd ? define(['aladdin'], factory) :
  (global.aladdin = global.aladdin || {}, global.aladdin.phone = factory(global.aladdin));
}(this, function (aladdin) { 'use strict';

  aladdin = 'default' in aladdin ? aladdin['default'] : aladdin;

  function Phone(aladdin) {
    this._aladdin = aladdin;
  }

  Object.defineProperty(Phone.prototype, 'name', {
      value: 'phone',
      writable: false
  });

  /**
   * 调起拨号程序拨打电话
   *
   * @param {Object} opts
   * @param {Function} cb
   */
  Phone.prototype.call = function (opts, cb) {
    opts = opts || {};

    this._aladdin.call(this.name, 'call', opts, cb);

    return this;
  };

  aladdin.use(Phone);

  var aladdin_phone = aladdin.phone;

  return aladdin_phone;

}));