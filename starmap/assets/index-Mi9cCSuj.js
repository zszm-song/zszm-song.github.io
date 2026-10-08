const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DronePanoramaModal-H5LMIJQo.js","assets/DronePanoramaModal-BuDswXDb.css"])))=>i.map(i=>d[i]);
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	}, hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.6";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.js
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	function push(heap, node) {
		var index = heap.length;
		heap.push(node);
		a: for (; 0 < index;) {
			var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
			if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
			else break a;
		}
	}
	function peek(heap) {
		return 0 === heap.length ? null : heap[0];
	}
	function pop(heap) {
		if (0 === heap.length) return null;
		var first = heap[0], last = heap.pop();
		if (last !== first) {
			heap[0] = last;
			a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;) {
				var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
				if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
				else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
				else break a;
			}
		}
		return first;
	}
	function compare(a, b) {
		var diff = a.sortIndex - b.sortIndex;
		return 0 !== diff ? diff : a.id - b.id;
	}
	exports.unstable_now = void 0;
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var localPerformance = performance;
		exports.unstable_now = function() {
			return localPerformance.now();
		};
	} else {
		var localDate = Date, initialTime = localDate.now();
		exports.unstable_now = function() {
			return localDate.now() - initialTime;
		};
	}
	var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
	function advanceTimers(currentTime) {
		for (var timer = peek(timerQueue); null !== timer;) {
			if (null === timer.callback) pop(timerQueue);
			else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
			else break;
			timer = peek(timerQueue);
		}
	}
	function handleTimeout(currentTime) {
		isHostTimeoutScheduled = !1;
		advanceTimers(currentTime);
		if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
		else {
			var firstTimer = peek(timerQueue);
			null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		}
	}
	var isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
	function shouldYieldToHost() {
		return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
	}
	function performWorkUntilDeadline() {
		needsPaint = !1;
		if (isMessageLoopRunning) {
			var currentTime = exports.unstable_now();
			startTime = currentTime;
			var hasMoreWork = !0;
			try {
				a: {
					isHostCallbackScheduled = !1;
					isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
					isPerformingWork = !0;
					var previousPriorityLevel = currentPriorityLevel;
					try {
						b: {
							advanceTimers(currentTime);
							for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());) {
								var callback = currentTask.callback;
								if ("function" === typeof callback) {
									currentTask.callback = null;
									currentPriorityLevel = currentTask.priorityLevel;
									var continuationCallback = callback(currentTask.expirationTime <= currentTime);
									currentTime = exports.unstable_now();
									if ("function" === typeof continuationCallback) {
										currentTask.callback = continuationCallback;
										advanceTimers(currentTime);
										hasMoreWork = !0;
										break b;
									}
									currentTask === peek(taskQueue) && pop(taskQueue);
									advanceTimers(currentTime);
								} else pop(taskQueue);
								currentTask = peek(taskQueue);
							}
							if (null !== currentTask) hasMoreWork = !0;
							else {
								var firstTimer = peek(timerQueue);
								null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								hasMoreWork = !1;
							}
						}
						break a;
					} finally {
						currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
					}
					hasMoreWork = void 0;
				}
			} finally {
				hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
			}
		}
	}
	var schedulePerformWorkUntilDeadline;
	if ("function" === typeof localSetImmediate) schedulePerformWorkUntilDeadline = function() {
		localSetImmediate(performWorkUntilDeadline);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var channel = new MessageChannel(), port = channel.port2;
		channel.port1.onmessage = performWorkUntilDeadline;
		schedulePerformWorkUntilDeadline = function() {
			port.postMessage(null);
		};
	} else schedulePerformWorkUntilDeadline = function() {
		localSetTimeout(performWorkUntilDeadline, 0);
	};
	function requestHostTimeout(callback, ms) {
		taskTimeoutID = localSetTimeout(function() {
			callback(exports.unstable_now());
		}, ms);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(task) {
		task.callback = null;
	};
	exports.unstable_forceFrameRate = function(fps) {
		0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return currentPriorityLevel;
	};
	exports.unstable_next = function(eventHandler) {
		switch (currentPriorityLevel) {
			case 1:
			case 2:
			case 3:
				var priorityLevel = 3;
				break;
			default: priorityLevel = currentPriorityLevel;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_requestPaint = function() {
		needsPaint = !0;
	};
	exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
		switch (priorityLevel) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: priorityLevel = 3;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
		var currentTime = exports.unstable_now();
		"object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
		switch (priorityLevel) {
			case 1:
				var timeout = -1;
				break;
			case 2:
				timeout = 250;
				break;
			case 5:
				timeout = 1073741823;
				break;
			case 4:
				timeout = 1e4;
				break;
			default: timeout = 5e3;
		}
		timeout = options + timeout;
		priorityLevel = {
			id: taskIdCounter++,
			callback,
			priorityLevel,
			startTime: options,
			expirationTime: timeout,
			sortIndex: -1
		};
		options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
		return priorityLevel;
	};
	exports.unstable_shouldYield = shouldYieldToHost;
	exports.unstable_wrapCallback = function(callback) {
		var parentPriorityLevel = currentPriorityLevel;
		return function() {
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = parentPriorityLevel;
			try {
				return callback.apply(this, arguments);
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	}, REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.6";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom-client.production.js
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_client_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scheduler = require_scheduler(), React = require_react(), ReactDOM = require_react_dom();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function isValidContainer(node) {
		return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
	}
	function getNearestMountedFiber(fiber) {
		var node = fiber, nearestMounted = fiber;
		if (fiber.alternate) for (; node.return;) node = node.return;
		else {
			fiber = node;
			do
				node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
			while (fiber);
		}
		return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
		if (13 === fiber.tag) {
			var suspenseState = fiber.memoizedState;
			null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
			if (null !== suspenseState) return suspenseState.dehydrated;
		}
		return null;
	}
	function getActivityInstanceFromFiber(fiber) {
		if (31 === fiber.tag) {
			var activityState = fiber.memoizedState;
			null === activityState && (fiber = fiber.alternate, null !== fiber && (activityState = fiber.memoizedState));
			if (null !== activityState) return activityState.dehydrated;
		}
		return null;
	}
	function assertIsMounted(fiber) {
		if (getNearestMountedFiber(fiber) !== fiber) throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
		var alternate = fiber.alternate;
		if (!alternate) {
			alternate = getNearestMountedFiber(fiber);
			if (null === alternate) throw Error(formatProdErrorMessage(188));
			return alternate !== fiber ? null : fiber;
		}
		for (var a = fiber, b = alternate;;) {
			var parentA = a.return;
			if (null === parentA) break;
			var parentB = parentA.alternate;
			if (null === parentB) {
				b = parentA.return;
				if (null !== b) {
					a = b;
					continue;
				}
				break;
			}
			if (parentA.child === parentB.child) {
				for (parentB = parentA.child; parentB;) {
					if (parentB === a) return assertIsMounted(parentA), fiber;
					if (parentB === b) return assertIsMounted(parentA), alternate;
					parentB = parentB.sibling;
				}
				throw Error(formatProdErrorMessage(188));
			}
			if (a.return !== b.return) a = parentA, b = parentB;
			else {
				for (var didFindChild = !1, child$0 = parentA.child; child$0;) {
					if (child$0 === a) {
						didFindChild = !0;
						a = parentA;
						b = parentB;
						break;
					}
					if (child$0 === b) {
						didFindChild = !0;
						b = parentA;
						a = parentB;
						break;
					}
					child$0 = child$0.sibling;
				}
				if (!didFindChild) {
					for (child$0 = parentB.child; child$0;) {
						if (child$0 === a) {
							didFindChild = !0;
							a = parentB;
							b = parentA;
							break;
						}
						if (child$0 === b) {
							didFindChild = !0;
							b = parentB;
							a = parentA;
							break;
						}
						child$0 = child$0.sibling;
					}
					if (!didFindChild) throw Error(formatProdErrorMessage(189));
				}
			}
			if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
		}
		if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
		return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
		var tag = node.tag;
		if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
		for (node = node.child; null !== node;) {
			tag = findCurrentHostFiberImpl(node);
			if (null !== tag) return tag;
			node = node.sibling;
		}
		return null;
	}
	var assign = Object.assign, REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
		if (null == type) return null;
		if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_FRAGMENT_TYPE: return "Fragment";
			case REACT_PROFILER_TYPE: return "Profiler";
			case REACT_STRICT_MODE_TYPE: return "StrictMode";
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			case REACT_ACTIVITY_TYPE: return "Activity";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_PORTAL_TYPE: return "Portal";
			case REACT_CONTEXT_TYPE: return type.displayName || "Context";
			case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
			case REACT_FORWARD_REF_TYPE:
				var innerType = type.render;
				type = type.displayName;
				type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
				return type;
			case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
			case REACT_LAZY_TYPE:
				innerType = type._payload;
				type = type._init;
				try {
					return getComponentNameFromType(type(innerType));
				} catch (x) {}
		}
		return null;
	}
	var isArrayImpl = Array.isArray, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, sharedNotPendingObject = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, valueStack = [], index = -1;
	function createCursor(defaultValue) {
		return { current: defaultValue };
	}
	function pop(cursor) {
		0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
	}
	function push(cursor, value) {
		index++;
		valueStack[index] = cursor.current;
		cursor.current = value;
	}
	var contextStackCursor = createCursor(null), contextFiberStackCursor = createCursor(null), rootInstanceStackCursor = createCursor(null), hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
		push(rootInstanceStackCursor, nextRootInstance);
		push(contextFiberStackCursor, fiber);
		push(contextStackCursor, null);
		switch (nextRootInstance.nodeType) {
			case 9:
			case 11:
				fiber = (fiber = nextRootInstance.documentElement) ? (fiber = fiber.namespaceURI) ? getOwnHostContext(fiber) : 0 : 0;
				break;
			default: if (fiber = nextRootInstance.tagName, nextRootInstance = nextRootInstance.namespaceURI) nextRootInstance = getOwnHostContext(nextRootInstance), fiber = getChildHostContextProd(nextRootInstance, fiber);
			else switch (fiber) {
				case "svg":
					fiber = 1;
					break;
				case "math":
					fiber = 2;
					break;
				default: fiber = 0;
			}
		}
		pop(contextStackCursor);
		push(contextStackCursor, fiber);
	}
	function popHostContainer() {
		pop(contextStackCursor);
		pop(contextFiberStackCursor);
		pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
		null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
		var context = contextStackCursor.current;
		var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
		context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
		contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
		hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
	}
	var prefix, suffix;
	function describeBuiltInComponentFrame(name) {
		if (void 0 === prefix) try {
			throw Error();
		} catch (x) {
			var match = x.stack.trim().match(/\n( *(at )?)/);
			prefix = match && match[1] || "";
			suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + prefix + name + suffix;
	}
	var reentry = !1;
	function describeNativeComponentFrame(fn, construct) {
		if (!fn || reentry) return "";
		reentry = !0;
		var previousPrepareStackTrace = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var RunInRootFrame = { DetermineComponentFrameRoot: function() {
				try {
					if (construct) {
						var Fake = function() {
							throw Error();
						};
						Object.defineProperty(Fake.prototype, "props", { set: function() {
							throw Error();
						} });
						if ("object" === typeof Reflect && Reflect.construct) {
							try {
								Reflect.construct(Fake, []);
							} catch (x) {
								var control = x;
							}
							Reflect.construct(fn, [], Fake);
						} else {
							try {
								Fake.call();
							} catch (x$1) {
								control = x$1;
							}
							fn.call(Fake.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (x$2) {
							control = x$2;
						}
						(Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
					}
				} catch (sample) {
					if (sample && control && "string" === typeof sample.stack) return [sample.stack, control.stack];
				}
				return [null, null];
			} };
			RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
			namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
			if (sampleStack && controlStack) {
				var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
				for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");) RunInRootFrame++;
				for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes("DetermineComponentFrameRoot");) namePropDescriptor++;
				if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length) for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];) namePropDescriptor--;
				for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--) if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
					if (1 !== RunInRootFrame || 1 !== namePropDescriptor) do
						if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
							var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
							fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
							return frame;
						}
					while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
					break;
				}
			}
		} finally {
			reentry = !1, Error.prepareStackTrace = previousPrepareStackTrace;
		}
		return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
	}
	function describeFiber(fiber, childFiber) {
		switch (fiber.tag) {
			case 26:
			case 27:
			case 5: return describeBuiltInComponentFrame(fiber.type);
			case 16: return describeBuiltInComponentFrame("Lazy");
			case 13: return fiber.child !== childFiber && null !== childFiber ? describeBuiltInComponentFrame("Suspense Fallback") : describeBuiltInComponentFrame("Suspense");
			case 19: return describeBuiltInComponentFrame("SuspenseList");
			case 0:
			case 15: return describeNativeComponentFrame(fiber.type, !1);
			case 11: return describeNativeComponentFrame(fiber.type.render, !1);
			case 1: return describeNativeComponentFrame(fiber.type, !0);
			case 31: return describeBuiltInComponentFrame("Activity");
			default: return "";
		}
	}
	function getStackByFiberInDevAndProd(workInProgress) {
		try {
			var info = "", previous = null;
			do
				info += describeFiber(workInProgress, previous), previous = workInProgress, workInProgress = workInProgress.return;
			while (workInProgress);
			return info;
		} catch (x) {
			return "\nError generating stack: " + x.message + "\n" + x.stack;
		}
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty, scheduleCallback$3 = Scheduler.unstable_scheduleCallback, cancelCallback$1 = Scheduler.unstable_cancelCallback, shouldYield = Scheduler.unstable_shouldYield, requestPaint = Scheduler.unstable_requestPaint, now = Scheduler.unstable_now, getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, ImmediatePriority = Scheduler.unstable_ImmediatePriority, UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, NormalPriority$1 = Scheduler.unstable_NormalPriority, LowPriority = Scheduler.unstable_LowPriority, IdlePriority = Scheduler.unstable_IdlePriority, log$1 = Scheduler.log, unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue, rendererID = null, injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
		"function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
		if (injectedHook && "function" === typeof injectedHook.setStrictMode) try {
			injectedHook.setStrictMode(rendererID, newIsStrictMode);
		} catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
	function clz32Fallback(x) {
		x >>>= 0;
		return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
	}
	var nextTransitionUpdateLane = 256, nextTransitionDeferredLane = 262144, nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
		var pendingSyncLanes = lanes & 42;
		if (0 !== pendingSyncLanes) return pendingSyncLanes;
		switch (lanes & -lanes) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return lanes & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return lanes & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return lanes & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return lanes;
		}
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
		var pendingLanes = root.pendingLanes;
		if (0 === pendingLanes) return 0;
		var nextLanes = 0, suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes;
		root = root.warmLanes;
		var nonIdlePendingLanes = pendingLanes & 134217727;
		0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = nonIdlePendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : rootHasPendingCommit || (rootHasPendingCommit = pendingLanes & ~root, 0 !== rootHasPendingCommit && (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
		return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, rootHasPendingCommit = wipLanes & -wipLanes, suspendedLanes >= rootHasPendingCommit || 32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)) ? wipLanes : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
		return 0 === (root.pendingLanes & ~(root.suspendedLanes & ~root.pingedLanes) & renderLanes);
	}
	function computeExpirationTime(lane, currentTime) {
		switch (lane) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return currentTime + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return currentTime + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function claimNextRetryLane() {
		var lane = nextRetryLane;
		nextRetryLane <<= 1;
		0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
		return lane;
	}
	function createLaneMap(initial) {
		for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
		return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
		root.pendingLanes |= updateLane;
		268435456 !== updateLane && (root.suspendedLanes = 0, root.pingedLanes = 0, root.warmLanes = 0);
	}
	function markRootFinished(root, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
		var previouslyPendingLanes = root.pendingLanes;
		root.pendingLanes = remainingLanes;
		root.suspendedLanes = 0;
		root.pingedLanes = 0;
		root.warmLanes = 0;
		root.expiredLanes &= remainingLanes;
		root.entangledLanes &= remainingLanes;
		root.errorRecoveryDisabledLanes &= remainingLanes;
		root.shellSuspendCounter = 0;
		var entanglements = root.entanglements, expirationTimes = root.expirationTimes, hiddenUpdates = root.hiddenUpdates;
		for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes;) {
			var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
			entanglements[index$7] = 0;
			expirationTimes[index$7] = -1;
			var hiddenUpdatesForLane = hiddenUpdates[index$7];
			if (null !== hiddenUpdatesForLane) for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
				var update = hiddenUpdatesForLane[index$7];
				null !== update && (update.lane &= -536870913);
			}
			remainingLanes &= ~lane;
		}
		0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
		0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root.tag && (root.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
		root.pendingLanes |= spawnedLane;
		root.suspendedLanes &= ~spawnedLane;
		var spawnedLaneIndex = 31 - clz32(spawnedLane);
		root.entangledLanes |= spawnedLane;
		root.entanglements[spawnedLaneIndex] = root.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 261930;
	}
	function markRootEntangled(root, entangledLanes) {
		var rootEntangledLanes = root.entangledLanes |= entangledLanes;
		for (root = root.entanglements; rootEntangledLanes;) {
			var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
			lane & entangledLanes | root[index$8] & entangledLanes && (root[index$8] |= entangledLanes);
			rootEntangledLanes &= ~lane;
		}
	}
	function getBumpedLaneForHydration(root, renderLanes) {
		var renderLane = renderLanes & -renderLanes;
		renderLane = 0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
		return 0 !== (renderLane & (root.suspendedLanes | renderLanes)) ? 0 : renderLane;
	}
	function getBumpedLaneForHydrationByLane(lane) {
		switch (lane) {
			case 2:
				lane = 1;
				break;
			case 8:
				lane = 4;
				break;
			case 32:
				lane = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				lane = 128;
				break;
			case 268435456:
				lane = 134217728;
				break;
			default: lane = 0;
		}
		return lane;
	}
	function lanesToEventPriority(lanes) {
		lanes &= -lanes;
		return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
	}
	function resolveUpdatePriority() {
		var updatePriority = ReactDOMSharedInternals.p;
		if (0 !== updatePriority) return updatePriority;
		updatePriority = window.event;
		return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			return ReactDOMSharedInternals.p = priority, fn();
		} finally {
			ReactDOMSharedInternals.p = previousPriority;
		}
	}
	var randomKey = Math.random().toString(36).slice(2), internalInstanceKey = "__reactFiber$" + randomKey, internalPropsKey = "__reactProps$" + randomKey, internalContainerInstanceKey = "__reactContainer$" + randomKey, internalEventHandlersKey = "__reactEvents$" + randomKey, internalEventHandlerListenersKey = "__reactListeners$" + randomKey, internalEventHandlesSetKey = "__reactHandles$" + randomKey, internalRootNodeResourcesKey = "__reactResources$" + randomKey, internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
		delete node[internalInstanceKey];
		delete node[internalPropsKey];
		delete node[internalEventHandlersKey];
		delete node[internalEventHandlerListenersKey];
		delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
		var targetInst = targetNode[internalInstanceKey];
		if (targetInst) return targetInst;
		for (var parentNode = targetNode.parentNode; parentNode;) {
			if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
				parentNode = targetInst.alternate;
				if (null !== targetInst.child || null !== parentNode && null !== parentNode.child) for (targetNode = getParentHydrationBoundary(targetNode); null !== targetNode;) {
					if (parentNode = targetNode[internalInstanceKey]) return parentNode;
					targetNode = getParentHydrationBoundary(targetNode);
				}
				return targetInst;
			}
			targetNode = parentNode;
			parentNode = targetNode.parentNode;
		}
		return null;
	}
	function getInstanceFromNode(node) {
		if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
			var tag = node.tag;
			if (5 === tag || 6 === tag || 13 === tag || 31 === tag || 26 === tag || 27 === tag || 3 === tag) return node;
		}
		return null;
	}
	function getNodeFromInstance(inst) {
		var tag = inst.tag;
		if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
		throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
		var resources = root[internalRootNodeResourcesKey];
		resources || (resources = root[internalRootNodeResourcesKey] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		});
		return resources;
	}
	function markNodeAsHoistable(node) {
		node[internalHoistableMarker] = !0;
	}
	var allNativeEvents = /* @__PURE__ */ new Set(), registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
		registerDirectEvent(registrationName, dependencies);
		registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
		registrationNameDependencies[registrationName] = dependencies;
		for (registrationName = 0; registrationName < dependencies.length; registrationName++) allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
		if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
		if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
		if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
		illegalAttributeNameCache[attributeName] = !0;
		return !1;
	}
	function setValueForAttribute(node, name, value) {
		if (isAttributeNameSafe(name)) if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
					node.removeAttribute(name);
					return;
				case "boolean":
					var prefix$10 = name.toLowerCase().slice(0, 5);
					if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
						node.removeAttribute(name);
						return;
					}
			}
			node.setAttribute(name, "" + value);
		}
	}
	function setValueForKnownAttribute(node, name, value) {
		if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					node.removeAttribute(name);
					return;
			}
			node.setAttribute(name, "" + value);
		}
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
		if (null === value) node.removeAttribute(name);
		else {
			switch (typeof value) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					node.removeAttribute(name);
					return;
			}
			node.setAttributeNS(namespace, name, "" + value);
		}
	}
	function getToStringValue(value) {
		switch (typeof value) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return value;
			case "object": return value;
			default: return "";
		}
	}
	function isCheckable(elem) {
		var type = elem.type;
		return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
	}
	function trackValueOnNode(node, valueField, currentValue) {
		var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
		if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
			var get = descriptor.get, set = descriptor.set;
			Object.defineProperty(node, valueField, {
				configurable: !0,
				get: function() {
					return get.call(this);
				},
				set: function(value) {
					currentValue = "" + value;
					set.call(this, value);
				}
			});
			Object.defineProperty(node, valueField, { enumerable: descriptor.enumerable });
			return {
				getValue: function() {
					return currentValue;
				},
				setValue: function(value) {
					currentValue = "" + value;
				},
				stopTracking: function() {
					node._valueTracker = null;
					delete node[valueField];
				}
			};
		}
	}
	function track(node) {
		if (!node._valueTracker) {
			var valueField = isCheckable(node) ? "checked" : "value";
			node._valueTracker = trackValueOnNode(node, valueField, "" + node[valueField]);
		}
	}
	function updateValueIfChanged(node) {
		if (!node) return !1;
		var tracker = node._valueTracker;
		if (!tracker) return !0;
		var lastValue = tracker.getValue();
		var value = "";
		node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
		node = value;
		return node !== lastValue ? (tracker.setValue(node), !0) : !1;
	}
	function getActiveElement(doc) {
		doc = doc || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof doc) return null;
		try {
			return doc.activeElement || doc.body;
		} catch (e) {
			return doc.body;
		}
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
		return value.replace(escapeSelectorAttributeValueInsideDoubleQuotesRegex, function(ch) {
			return "\\" + ch.charCodeAt(0).toString(16) + " ";
		});
	}
	function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
		element.name = "";
		null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
		if (null != value) if ("number" === type) {
			if (0 === value && "" === element.value || element.value != value) element.value = "" + getToStringValue(value);
		} else element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
		else "submit" !== type && "reset" !== type || element.removeAttribute("value");
		null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
		null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
		null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
		null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
	}
	function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating) {
		null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
		if (null != value || null != defaultValue) {
			if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value)) {
				track(element);
				return;
			}
			defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
			value = null != value ? "" + getToStringValue(value) : defaultValue;
			isHydrating || value === element.value || (element.value = value);
			element.defaultValue = value;
		}
		checked = null != checked ? checked : defaultChecked;
		checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
		element.checked = isHydrating ? element.checked : !!checked;
		element.defaultChecked = !!checked;
		null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
		track(element);
	}
	function setDefaultValue(node, type, value) {
		"number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
		node = node.options;
		if (multiple) {
			multiple = {};
			for (var i = 0; i < propValue.length; i++) multiple["$" + propValue[i]] = !0;
			for (propValue = 0; propValue < node.length; propValue++) i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = !0);
		} else {
			propValue = "" + getToStringValue(propValue);
			multiple = null;
			for (i = 0; i < node.length; i++) {
				if (node[i].value === propValue) {
					node[i].selected = !0;
					setDefaultSelected && (node[i].defaultSelected = !0);
					return;
				}
				null !== multiple || node[i].disabled || (multiple = node[i]);
			}
			null !== multiple && (multiple.selected = !0);
		}
	}
	function updateTextarea(element, value, defaultValue) {
		if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
			element.defaultValue !== value && (element.defaultValue = value);
			return;
		}
		element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
		if (null == value) {
			if (null != children) {
				if (null != defaultValue) throw Error(formatProdErrorMessage(92));
				if (isArrayImpl(children)) {
					if (1 < children.length) throw Error(formatProdErrorMessage(93));
					children = children[0];
				}
				defaultValue = children;
			}
			defaultValue ??= "";
			value = defaultValue;
		}
		defaultValue = getToStringValue(value);
		element.defaultValue = defaultValue;
		children = element.textContent;
		children === defaultValue && "" !== children && null !== children && (element.value = children);
		track(element);
	}
	function setTextContent(node, text) {
		if (text) {
			var firstChild = node.firstChild;
			if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
				firstChild.nodeValue = text;
				return;
			}
		}
		node.textContent = text;
	}
	var unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function setValueForStyle(style, styleName, value) {
		var isCustomProperty = 0 === styleName.indexOf("--");
		null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style.setProperty(styleName, "") : "float" === styleName ? style.cssFloat = "" : style[styleName] = "" : isCustomProperty ? style.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style.cssFloat = value : style[styleName] = ("" + value).trim() : style[styleName] = value + "px";
	}
	function setValueForStyles(node, styles, prevStyles) {
		if (null != styles && "object" !== typeof styles) throw Error(formatProdErrorMessage(62));
		node = node.style;
		if (null != prevStyles) {
			for (var styleName in prevStyles) !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
			for (var styleName$16 in styles) styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
		} else for (var styleName$17 in styles) styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
		if (-1 === tagName.indexOf("-")) return !1;
		switch (tagName) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var aliases = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
		return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
	}
	function noop$1() {}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
		nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
		nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
		return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null, restoreQueue = null;
	function restoreStateOfTarget(target) {
		var internalInstance = getInstanceFromNode(target);
		if (internalInstance && (target = internalInstance.stateNode)) {
			var props = target[internalPropsKey] || null;
			a: switch (target = internalInstance.stateNode, internalInstance.type) {
				case "input":
					updateInput(target, props.value, props.defaultValue, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name);
					internalInstance = props.name;
					if ("radio" === props.type && null != internalInstance) {
						for (props = target; props.parentNode;) props = props.parentNode;
						props = props.querySelectorAll("input[name=\"" + escapeSelectorAttributeValueInsideDoubleQuotes("" + internalInstance) + "\"][type=\"radio\"]");
						for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
							var otherNode = props[internalInstance];
							if (otherNode !== target && otherNode.form === target.form) {
								var otherProps = otherNode[internalPropsKey] || null;
								if (!otherProps) throw Error(formatProdErrorMessage(90));
								updateInput(otherNode, otherProps.value, otherProps.defaultValue, otherProps.defaultValue, otherProps.checked, otherProps.defaultChecked, otherProps.type, otherProps.name);
							}
						}
						for (internalInstance = 0; internalInstance < props.length; internalInstance++) otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
					}
					break a;
				case "textarea":
					updateTextarea(target, props.value, props.defaultValue);
					break a;
				case "select": internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, !1);
			}
		}
	}
	var isInsideEventHandler = !1;
	function batchedUpdates$1(fn, a, b) {
		if (isInsideEventHandler) return fn(a, b);
		isInsideEventHandler = !0;
		try {
			return fn(a);
		} finally {
			if (isInsideEventHandler = !1, null !== restoreTarget || null !== restoreQueue) {
				if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn)) for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
			}
		}
	}
	function getListener(inst, registrationName) {
		var stateNode = inst.stateNode;
		if (null === stateNode) return null;
		var props = stateNode[internalPropsKey] || null;
		if (null === props) return null;
		stateNode = props[registrationName];
		a: switch (registrationName) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
				inst = !props;
				break a;
			default: inst = !1;
		}
		if (inst) return null;
		if (stateNode && "function" !== typeof stateNode) throw Error(formatProdErrorMessage(231, registrationName, typeof stateNode));
		return stateNode;
	}
	var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), passiveBrowserEventsSupported = !1;
	if (canUseDOM) try {
		var options = {};
		Object.defineProperty(options, "passive", { get: function() {
			passiveBrowserEventsSupported = !0;
		} });
		window.addEventListener("test", options, options);
		window.removeEventListener("test", options, options);
	} catch (e) {
		passiveBrowserEventsSupported = !1;
	}
	var root = null, startText = null, fallbackText = null;
	function getData() {
		if (fallbackText) return fallbackText;
		var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
		for (start = 0; start < startLength && startValue[start] === endValue[start]; start++);
		var minEnd = startLength - start;
		for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++);
		return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
	}
	function getEventCharCode(nativeEvent) {
		var keyCode = nativeEvent.keyCode;
		"charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
		10 === nativeEvent && (nativeEvent = 13);
		return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
		return !0;
	}
	function functionThatReturnsFalse() {
		return !1;
	}
	function createSyntheticEvent(Interface) {
		function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
			this._reactName = reactName;
			this._targetInst = targetInst;
			this.type = reactEventType;
			this.nativeEvent = nativeEvent;
			this.target = nativeEventTarget;
			this.currentTarget = null;
			for (var propName in Interface) Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
			this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : !1 === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
			this.isPropagationStopped = functionThatReturnsFalse;
			return this;
		}
		assign(SyntheticBaseEvent.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var event = this.nativeEvent;
				event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = !1), this.isDefaultPrevented = functionThatReturnsTrue);
			},
			stopPropagation: function() {
				var event = this.nativeEvent;
				event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = !0), this.isPropagationStopped = functionThatReturnsTrue);
			},
			persist: function() {},
			isPersistent: functionThatReturnsTrue
		});
		return SyntheticBaseEvent;
	}
	var EventInterface = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(event) {
			return event.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, SyntheticEvent = createSyntheticEvent(EventInterface), UIEventInterface = assign({}, EventInterface, {
		view: 0,
		detail: 0
	}), SyntheticUIEvent = createSyntheticEvent(UIEventInterface), lastMovementX, lastMovementY, lastMouseEvent, MouseEventInterface = assign({}, UIEventInterface, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: getEventModifierState,
		button: 0,
		buttons: 0,
		relatedTarget: function(event) {
			return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
		},
		movementX: function(event) {
			if ("movementX" in event) return event.movementX;
			event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
			return lastMovementX;
		},
		movementY: function(event) {
			return "movementY" in event ? event.movementY : lastMovementY;
		}
	}), SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface), SyntheticDragEvent = createSyntheticEvent(assign({}, MouseEventInterface, { dataTransfer: 0 })), SyntheticFocusEvent = createSyntheticEvent(assign({}, UIEventInterface, { relatedTarget: 0 })), SyntheticAnimationEvent = createSyntheticEvent(assign({}, EventInterface, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), SyntheticClipboardEvent = createSyntheticEvent(assign({}, EventInterface, { clipboardData: function(event) {
		return "clipboardData" in event ? event.clipboardData : window.clipboardData;
	} })), SyntheticCompositionEvent = createSyntheticEvent(assign({}, EventInterface, { data: 0 })), normalizeKey = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, translateToKey = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, modifierKeyToProp = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function modifierStateGetter(keyArg) {
		var nativeEvent = this.nativeEvent;
		return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : !1;
	}
	function getEventModifierState() {
		return modifierStateGetter;
	}
	var SyntheticKeyboardEvent = createSyntheticEvent(assign({}, UIEventInterface, {
		key: function(nativeEvent) {
			if (nativeEvent.key) {
				var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
				if ("Unidentified" !== key) return key;
			}
			return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: getEventModifierState,
		charCode: function(event) {
			return "keypress" === event.type ? getEventCharCode(event) : 0;
		},
		keyCode: function(event) {
			return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
		},
		which: function(event) {
			return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
		}
	})), SyntheticPointerEvent = createSyntheticEvent(assign({}, MouseEventInterface, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), SyntheticTouchEvent = createSyntheticEvent(assign({}, UIEventInterface, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: getEventModifierState
	})), SyntheticTransitionEvent = createSyntheticEvent(assign({}, EventInterface, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), SyntheticWheelEvent = createSyntheticEvent(assign({}, MouseEventInterface, {
		deltaX: function(event) {
			return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
		},
		deltaY: function(event) {
			return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), SyntheticToggleEvent = createSyntheticEvent(assign({}, EventInterface, {
		newState: 0,
		oldState: 0
	})), END_KEYCODES = [
		9,
		13,
		27,
		32
	], canUseCompositionEvent = canUseDOM && "CompositionEvent" in window, documentMode = null;
	canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode, useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode), SPACEBAR_CHAR = String.fromCharCode(32), hasSpaceKeypress = !1;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
		switch (domEventName) {
			case "keyup": return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
			case "keydown": return 229 !== nativeEvent.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function getDataFromCustomEvent(nativeEvent) {
		nativeEvent = nativeEvent.detail;
		return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
	}
	var isComposing = !1;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
		switch (domEventName) {
			case "compositionend": return getDataFromCustomEvent(nativeEvent);
			case "keypress":
				if (32 !== nativeEvent.which) return null;
				hasSpaceKeypress = !0;
				return SPACEBAR_CHAR;
			case "textInput": return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
			default: return null;
		}
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
		if (isComposing) return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = !1, domEventName) : null;
		switch (domEventName) {
			case "paste": return null;
			case "keypress":
				if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
					if (nativeEvent.char && 1 < nativeEvent.char.length) return nativeEvent.char;
					if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
				}
				return null;
			case "compositionend": return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
			default: return null;
		}
	}
	var supportedInputTypes = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function isTextInputElement(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? !0 : !1;
	}
	function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
		restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
		inst = accumulateTwoPhaseListeners(inst, "onChange");
		0 < inst.length && (nativeEvent = new SyntheticEvent("onChange", "change", null, nativeEvent, target), dispatchQueue.push({
			event: nativeEvent,
			listeners: inst
		}));
	}
	var activeElement$1 = null, activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
		processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
		if (updateValueIfChanged(getNodeFromInstance(targetInst))) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
		if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = !1;
	if (canUseDOM) {
		var JSCompiler_inline_result$jscomp$286;
		if (canUseDOM) {
			var isSupported$jscomp$inline_427 = "oninput" in document;
			if (!isSupported$jscomp$inline_427) {
				var element$jscomp$inline_428 = document.createElement("div");
				element$jscomp$inline_428.setAttribute("oninput", "return;");
				isSupported$jscomp$inline_427 = "function" === typeof element$jscomp$inline_428.oninput;
			}
			JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
		} else JSCompiler_inline_result$jscomp$286 = !1;
		isInputEventSupported = JSCompiler_inline_result$jscomp$286 && (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
		activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
	}
	function handlePropertyChange(nativeEvent) {
		if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
			var dispatchQueue = [];
			createAndAccumulateChangeEvent(dispatchQueue, activeElementInst$1, nativeEvent, getEventTarget(nativeEvent));
			batchedUpdates$1(runEventInBatch, dispatchQueue);
		}
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
		"focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
		if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName) return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
		if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
		if ("input" === domEventName || "change" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
		if (objectIs(objA, objB)) return !0;
		if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB) return !1;
		var keysA = Object.keys(objA), keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return !1;
		for (keysB = 0; keysB < keysA.length; keysB++) {
			var currentKey = keysA[keysB];
			if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) return !1;
		}
		return !0;
	}
	function getLeafNode(node) {
		for (; node && node.firstChild;) node = node.firstChild;
		return node;
	}
	function getNodeForCharacterOffset(root, offset) {
		var node = getLeafNode(root);
		root = 0;
		for (var nodeEnd; node;) {
			if (3 === node.nodeType) {
				nodeEnd = root + node.textContent.length;
				if (root <= offset && nodeEnd >= offset) return {
					node,
					offset: offset - root
				};
				root = nodeEnd;
			}
			a: {
				for (; node;) {
					if (node.nextSibling) {
						node = node.nextSibling;
						break a;
					}
					node = node.parentNode;
				}
				node = void 0;
			}
			node = getLeafNode(node);
		}
	}
	function containsNode(outerNode, innerNode) {
		return outerNode && innerNode ? outerNode === innerNode ? !0 : outerNode && 3 === outerNode.nodeType ? !1 : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : !1 : !1;
	}
	function getActiveElementDeep(containerInfo) {
		containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
		for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement;) {
			try {
				var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
			} catch (err) {
				JSCompiler_inline_result = !1;
			}
			if (JSCompiler_inline_result) containerInfo = element.contentWindow;
			else break;
			element = getActiveElement(containerInfo.document);
		}
		return element;
	}
	function hasSelectionCapabilities(elem) {
		var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
		return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
	}
	var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode, activeElement = null, activeElementInst = null, lastSelection = null, mouseDown = !1;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
		var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
		mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = {
			start: doc.selectionStart,
			end: doc.selectionEnd
		} : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
			anchorNode: doc.anchorNode,
			anchorOffset: doc.anchorOffset,
			focusNode: doc.focusNode,
			focusOffset: doc.focusOffset
		}), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
			event: nativeEvent,
			listeners: doc
		}), nativeEvent.target = activeElement)));
	}
	function makePrefixMap(styleProp, eventName) {
		var prefixes = {};
		prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
		prefixes["Webkit" + styleProp] = "webkit" + eventName;
		prefixes["Moz" + styleProp] = "moz" + eventName;
		return prefixes;
	}
	var vendorPrefixes = {
		animationend: makePrefixMap("Animation", "AnimationEnd"),
		animationiteration: makePrefixMap("Animation", "AnimationIteration"),
		animationstart: makePrefixMap("Animation", "AnimationStart"),
		transitionrun: makePrefixMap("Transition", "TransitionRun"),
		transitionstart: makePrefixMap("Transition", "TransitionStart"),
		transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
		transitionend: makePrefixMap("Transition", "TransitionEnd")
	}, prefixedEventNames = {}, style = {};
	canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
		if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
		if (!vendorPrefixes[eventName]) return eventName;
		var prefixMap = vendorPrefixes[eventName], styleProp;
		for (styleProp in prefixMap) if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) return prefixedEventNames[eventName] = prefixMap[styleProp];
		return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend"), ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"), ANIMATION_START = getVendorPrefixedEventName("animationstart"), TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"), TRANSITION_START = getVendorPrefixedEventName("transitionstart"), TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"), TRANSITION_END = getVendorPrefixedEventName("transitionend"), topLevelEventsToReactNames = /* @__PURE__ */ new Map(), simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
		topLevelEventsToReactNames.set(domEventName, reactName);
		registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	}, concurrentQueues = [], concurrentQueuesIndex = 0, concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
		for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex;) {
			var fiber = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var queue = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var update = concurrentQueues[i];
			concurrentQueues[i++] = null;
			var lane = concurrentQueues[i];
			concurrentQueues[i++] = null;
			if (null !== queue && null !== update) {
				var pending = queue.pending;
				null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
				queue.pending = update;
			}
			0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
		}
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
		concurrentQueues[concurrentQueuesIndex++] = fiber;
		concurrentQueues[concurrentQueuesIndex++] = queue;
		concurrentQueues[concurrentQueuesIndex++] = update;
		concurrentQueues[concurrentQueuesIndex++] = lane;
		concurrentlyUpdatedLanes |= lane;
		fiber.lanes |= lane;
		fiber = fiber.alternate;
		null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
		enqueueUpdate$1(fiber, queue, update, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
		enqueueUpdate$1(fiber, null, null, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
		sourceFiber.lanes |= lane;
		var alternate = sourceFiber.alternate;
		null !== alternate && (alternate.lanes |= lane);
		for (var isHidden = !1, parent = sourceFiber.return; null !== parent;) parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)), sourceFiber = parent, parent = parent.return;
		return 3 === sourceFiber.tag ? (parent = sourceFiber.stateNode, isHidden && null !== update && (isHidden = 31 - clz32(lane), sourceFiber = parent.hiddenUpdates, alternate = sourceFiber[isHidden], null === alternate ? sourceFiber[isHidden] = [update] : alternate.push(update), update.lane = lane | 536870912), parent) : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
		if (50 < nestedUpdateCount) throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
		for (var parent = sourceFiber.return; null !== parent;) sourceFiber = parent, parent = sourceFiber.return;
		return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
		this.tag = tag;
		this.key = key;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.refCleanup = this.ref = null;
		this.pendingProps = pendingProps;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = mode;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
		return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
		Component = Component.prototype;
		return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
		var workInProgress = current.alternate;
		null === workInProgress ? (workInProgress = createFiberImplClass(current.tag, pendingProps, current.key, current.mode), workInProgress.elementType = current.elementType, workInProgress.type = current.type, workInProgress.stateNode = current.stateNode, workInProgress.alternate = current, current.alternate = workInProgress) : (workInProgress.pendingProps = pendingProps, workInProgress.type = current.type, workInProgress.flags = 0, workInProgress.subtreeFlags = 0, workInProgress.deletions = null);
		workInProgress.flags = current.flags & 65011712;
		workInProgress.childLanes = current.childLanes;
		workInProgress.lanes = current.lanes;
		workInProgress.child = current.child;
		workInProgress.memoizedProps = current.memoizedProps;
		workInProgress.memoizedState = current.memoizedState;
		workInProgress.updateQueue = current.updateQueue;
		pendingProps = current.dependencies;
		workInProgress.dependencies = null === pendingProps ? null : {
			lanes: pendingProps.lanes,
			firstContext: pendingProps.firstContext
		};
		workInProgress.sibling = current.sibling;
		workInProgress.index = current.index;
		workInProgress.ref = current.ref;
		workInProgress.refCleanup = current.refCleanup;
		return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
		workInProgress.flags &= 65011714;
		var current = workInProgress.alternate;
		null === current ? (workInProgress.childLanes = 0, workInProgress.lanes = renderLanes, workInProgress.child = null, workInProgress.subtreeFlags = 0, workInProgress.memoizedProps = null, workInProgress.memoizedState = null, workInProgress.updateQueue = null, workInProgress.dependencies = null, workInProgress.stateNode = null) : (workInProgress.childLanes = current.childLanes, workInProgress.lanes = current.lanes, workInProgress.child = current.child, workInProgress.subtreeFlags = 0, workInProgress.deletions = null, workInProgress.memoizedProps = current.memoizedProps, workInProgress.memoizedState = current.memoizedState, workInProgress.updateQueue = current.updateQueue, workInProgress.type = current.type, renderLanes = current.dependencies, workInProgress.dependencies = null === renderLanes ? null : {
			lanes: renderLanes.lanes,
			firstContext: renderLanes.firstContext
		});
		return workInProgress;
	}
	function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
		var fiberTag = 0;
		owner = type;
		if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
		else if ("string" === typeof type) fiberTag = isHostHoistableType(type, pendingProps, contextStackCursor.current) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
		else a: switch (type) {
			case REACT_ACTIVITY_TYPE: return type = createFiberImplClass(31, pendingProps, key, mode), type.elementType = REACT_ACTIVITY_TYPE, type.lanes = lanes, type;
			case REACT_FRAGMENT_TYPE: return createFiberFromFragment(pendingProps.children, mode, lanes, key);
			case REACT_STRICT_MODE_TYPE:
				fiberTag = 8;
				mode |= 24;
				break;
			case REACT_PROFILER_TYPE: return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
			case REACT_SUSPENSE_TYPE: return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
			case REACT_SUSPENSE_LIST_TYPE: return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
			default:
				if ("object" === typeof type && null !== type) switch (type.$$typeof) {
					case REACT_CONTEXT_TYPE:
						fiberTag = 10;
						break a;
					case REACT_CONSUMER_TYPE:
						fiberTag = 9;
						break a;
					case REACT_FORWARD_REF_TYPE:
						fiberTag = 11;
						break a;
					case REACT_MEMO_TYPE:
						fiberTag = 14;
						break a;
					case REACT_LAZY_TYPE:
						fiberTag = 16;
						owner = null;
						break a;
				}
				fiberTag = 29;
				pendingProps = Error(formatProdErrorMessage(130, null === type ? "null" : typeof type, ""));
				owner = null;
		}
		key = createFiberImplClass(fiberTag, pendingProps, key, mode);
		key.elementType = type;
		key.type = owner;
		key.lanes = lanes;
		return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
		elements = createFiberImplClass(7, elements, key, mode);
		elements.lanes = lanes;
		return elements;
	}
	function createFiberFromText(content, mode, lanes) {
		content = createFiberImplClass(6, content, null, mode);
		content.lanes = lanes;
		return content;
	}
	function createFiberFromDehydratedFragment(dehydratedNode) {
		var fiber = createFiberImplClass(18, null, null, 0);
		fiber.stateNode = dehydratedNode;
		return fiber;
	}
	function createFiberFromPortal(portal, mode, lanes) {
		mode = createFiberImplClass(4, null !== portal.children ? portal.children : [], portal.key, mode);
		mode.lanes = lanes;
		mode.stateNode = {
			containerInfo: portal.containerInfo,
			pendingChildren: null,
			implementation: portal.implementation
		};
		return mode;
	}
	var CapturedStacks = /* @__PURE__ */ new WeakMap();
	function createCapturedValueAtFiber(value, source) {
		if ("object" === typeof value && null !== value) {
			var existing = CapturedStacks.get(value);
			if (void 0 !== existing) return existing;
			source = {
				value,
				source,
				stack: getStackByFiberInDevAndProd(source)
			};
			CapturedStacks.set(value, source);
			return source;
		}
		return {
			value,
			source,
			stack: getStackByFiberInDevAndProd(source)
		};
	}
	var forkStack = [], forkStackIndex = 0, treeForkProvider = null, treeForkCount = 0, idStack = [], idStackIndex = 0, treeContextProvider = null, treeContextId = 1, treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
		forkStack[forkStackIndex++] = treeForkCount;
		forkStack[forkStackIndex++] = treeForkProvider;
		treeForkProvider = workInProgress;
		treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
		idStack[idStackIndex++] = treeContextId;
		idStack[idStackIndex++] = treeContextOverflow;
		idStack[idStackIndex++] = treeContextProvider;
		treeContextProvider = workInProgress;
		var baseIdWithLeadingBit = treeContextId;
		workInProgress = treeContextOverflow;
		var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
		baseIdWithLeadingBit &= ~(1 << baseLength);
		index += 1;
		var length = 32 - clz32(totalChildren) + baseLength;
		if (30 < length) {
			var numberOfOverflowBits = baseLength - baseLength % 5;
			length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
			baseIdWithLeadingBit >>= numberOfOverflowBits;
			baseLength -= numberOfOverflowBits;
			treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit;
			treeContextOverflow = length + workInProgress;
		} else treeContextId = 1 << length | index << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress;
	}
	function pushMaterializedTreeId(workInProgress) {
		null !== workInProgress.return && (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
		for (; workInProgress === treeForkProvider;) treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
		for (; workInProgress === treeContextProvider;) treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
	}
	function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
		idStack[idStackIndex++] = treeContextId;
		idStack[idStackIndex++] = treeContextOverflow;
		idStack[idStackIndex++] = treeContextProvider;
		treeContextId = suspendedContext.id;
		treeContextOverflow = suspendedContext.overflow;
		treeContextProvider = workInProgress;
	}
	var hydrationParentFiber = null, nextHydratableInstance = null, isHydrating = !1, hydrationErrors = null, rootOrSingletonContext = !1, HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
		queueHydrationError(createCapturedValueAtFiber(Error(formatProdErrorMessage(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), fiber));
		throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
		var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
		instance[internalInstanceKey] = fiber;
		instance[internalPropsKey] = props;
		switch (type) {
			case "dialog":
				listenToNonDelegatedEvent("cancel", instance);
				listenToNonDelegatedEvent("close", instance);
				break;
			case "iframe":
			case "object":
			case "embed":
				listenToNonDelegatedEvent("load", instance);
				break;
			case "video":
			case "audio":
				for (type = 0; type < mediaEventTypes.length; type++) listenToNonDelegatedEvent(mediaEventTypes[type], instance);
				break;
			case "source":
				listenToNonDelegatedEvent("error", instance);
				break;
			case "img":
			case "image":
			case "link":
				listenToNonDelegatedEvent("error", instance);
				listenToNonDelegatedEvent("load", instance);
				break;
			case "details":
				listenToNonDelegatedEvent("toggle", instance);
				break;
			case "input":
				listenToNonDelegatedEvent("invalid", instance);
				initInput(instance, props.value, props.defaultValue, props.checked, props.defaultChecked, props.type, props.name, !0);
				break;
			case "select":
				listenToNonDelegatedEvent("invalid", instance);
				break;
			case "textarea": listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children);
		}
		type = props.children;
		"string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || !0 === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = !0) : instance = !1;
		instance || throwOnHydrationMismatch(fiber, !0);
	}
	function popToNextHostParent(fiber) {
		for (hydrationParentFiber = fiber.return; hydrationParentFiber;) switch (hydrationParentFiber.tag) {
			case 5:
			case 31:
			case 13:
				rootOrSingletonContext = !1;
				return;
			case 27:
			case 3:
				rootOrSingletonContext = !0;
				return;
			default: hydrationParentFiber = hydrationParentFiber.return;
		}
	}
	function popHydrationState(fiber) {
		if (fiber !== hydrationParentFiber) return !1;
		if (!isHydrating) return popToNextHostParent(fiber), isHydrating = !0, !1;
		var tag = fiber.tag, JSCompiler_temp;
		if (JSCompiler_temp = 3 !== tag && 27 !== tag) {
			if (JSCompiler_temp = 5 === tag) JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
			JSCompiler_temp = !JSCompiler_temp;
		}
		JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
		popToNextHostParent(fiber);
		if (13 === tag) {
			fiber = fiber.memoizedState;
			fiber = null !== fiber ? fiber.dehydrated : null;
			if (!fiber) throw Error(formatProdErrorMessage(317));
			nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
		} else if (31 === tag) {
			fiber = fiber.memoizedState;
			fiber = null !== fiber ? fiber.dehydrated : null;
			if (!fiber) throw Error(formatProdErrorMessage(317));
			nextHydratableInstance = getNextHydratableInstanceAfterHydrationBoundary(fiber);
		} else 27 === tag ? (tag = nextHydratableInstance, isSingletonScope(fiber.type) ? (fiber = previousHydratableOnEnteringScopedSingleton, previousHydratableOnEnteringScopedSingleton = null, nextHydratableInstance = fiber) : nextHydratableInstance = tag) : nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
		return !0;
	}
	function resetHydrationState() {
		nextHydratableInstance = hydrationParentFiber = null;
		isHydrating = !1;
	}
	function upgradeHydrationErrorsToRecoverable() {
		var queuedErrors = hydrationErrors;
		null !== queuedErrors && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = queuedErrors : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, queuedErrors), hydrationErrors = null);
		return queuedErrors;
	}
	function queueHydrationError(error) {
		null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null), currentlyRenderingFiber$1 = null, lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
		push(valueCursor, context._currentValue);
		context._currentValue = nextValue;
	}
	function popProvider(context) {
		context._currentValue = valueCursor.current;
		pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
		for (; null !== parent;) {
			var alternate = parent.alternate;
			(parent.childLanes & renderLanes) !== renderLanes ? (parent.childLanes |= renderLanes, null !== alternate && (alternate.childLanes |= renderLanes)) : null !== alternate && (alternate.childLanes & renderLanes) !== renderLanes && (alternate.childLanes |= renderLanes);
			if (parent === propagationRoot) break;
			parent = parent.return;
		}
	}
	function propagateContextChanges(workInProgress, contexts, renderLanes, forcePropagateEntireTree) {
		var fiber = workInProgress.child;
		null !== fiber && (fiber.return = workInProgress);
		for (; null !== fiber;) {
			var list = fiber.dependencies;
			if (null !== list) {
				var nextFiber = fiber.child;
				list = list.firstContext;
				a: for (; null !== list;) {
					var dependency = list;
					list = fiber;
					for (var i = 0; i < contexts.length; i++) if (dependency.context === contexts[i]) {
						list.lanes |= renderLanes;
						dependency = list.alternate;
						null !== dependency && (dependency.lanes |= renderLanes);
						scheduleContextWorkOnParentPath(list.return, renderLanes, workInProgress);
						forcePropagateEntireTree || (nextFiber = null);
						break a;
					}
					list = dependency.next;
				}
			} else if (18 === fiber.tag) {
				nextFiber = fiber.return;
				if (null === nextFiber) throw Error(formatProdErrorMessage(341));
				nextFiber.lanes |= renderLanes;
				list = nextFiber.alternate;
				null !== list && (list.lanes |= renderLanes);
				scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
				nextFiber = null;
			} else nextFiber = fiber.child;
			if (null !== nextFiber) nextFiber.return = fiber;
			else for (nextFiber = fiber; null !== nextFiber;) {
				if (nextFiber === workInProgress) {
					nextFiber = null;
					break;
				}
				fiber = nextFiber.sibling;
				if (null !== fiber) {
					fiber.return = nextFiber.return;
					nextFiber = fiber;
					break;
				}
				nextFiber = nextFiber.return;
			}
			fiber = nextFiber;
		}
	}
	function propagateParentContextChanges(current, workInProgress, renderLanes, forcePropagateEntireTree) {
		current = null;
		for (var parent = workInProgress, isInsidePropagationBailout = !1; null !== parent;) {
			if (!isInsidePropagationBailout) {
				if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
				else if (0 !== (parent.flags & 262144)) break;
			}
			if (10 === parent.tag) {
				var currentParent = parent.alternate;
				if (null === currentParent) throw Error(formatProdErrorMessage(387));
				currentParent = currentParent.memoizedProps;
				if (null !== currentParent) {
					var context = parent.type;
					objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
				}
			} else if (parent === hostTransitionProviderCursor.current) {
				currentParent = parent.alternate;
				if (null === currentParent) throw Error(formatProdErrorMessage(387));
				currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
			}
			parent = parent.return;
		}
		null !== current && propagateContextChanges(workInProgress, current, renderLanes, forcePropagateEntireTree);
		workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
		for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies;) {
			if (!objectIs(currentDependencies.context._currentValue, currentDependencies.memoizedValue)) return !0;
			currentDependencies = currentDependencies.next;
		}
		return !1;
	}
	function prepareToReadContext(workInProgress) {
		currentlyRenderingFiber$1 = workInProgress;
		lastContextDependency = null;
		workInProgress = workInProgress.dependencies;
		null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
		return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
		null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
		return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
		var value = context._currentValue;
		context = {
			context,
			memoizedValue: value,
			next: null
		};
		if (null === lastContextDependency) {
			if (null === consumer) throw Error(formatProdErrorMessage(308));
			lastContextDependency = context;
			consumer.dependencies = {
				lanes: 0,
				firstContext: context
			};
			consumer.flags |= 524288;
		} else lastContextDependency = lastContextDependency.next = context;
		return value;
	}
	var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
		var listeners = [], signal = this.signal = {
			aborted: !1,
			addEventListener: function(type, listener) {
				listeners.push(listener);
			}
		};
		this.abort = function() {
			signal.aborted = !0;
			listeners.forEach(function(listener) {
				return listener();
			});
		};
	}, scheduleCallback$2 = Scheduler.unstable_scheduleCallback, NormalPriority = Scheduler.unstable_NormalPriority, CacheContext = {
		$$typeof: REACT_CONTEXT_TYPE,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function createCache() {
		return {
			controller: new AbortControllerLocal(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function releaseCache(cache) {
		cache.refCount--;
		0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
			cache.controller.abort();
		});
	}
	var currentEntangledListeners = null, currentEntangledPendingCount = 0, currentEntangledLane = 0, currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
		if (null === currentEntangledListeners) {
			var entangledListeners = currentEntangledListeners = [];
			currentEntangledPendingCount = 0;
			currentEntangledLane = requestTransitionLane();
			currentEntangledActionThenable = {
				status: "pending",
				value: void 0,
				then: function(resolve) {
					entangledListeners.push(resolve);
				}
			};
		}
		currentEntangledPendingCount++;
		thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
		return thenable;
	}
	function pingEngtangledActionScope() {
		if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
			null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
			var listeners = currentEntangledListeners;
			currentEntangledListeners = null;
			currentEntangledLane = 0;
			currentEntangledActionThenable = null;
			for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
		}
	}
	function chainThenableValue(thenable, result) {
		var listeners = [], thenableWithOverride = {
			status: "pending",
			value: null,
			reason: null,
			then: function(resolve) {
				listeners.push(resolve);
			}
		};
		thenable.then(function() {
			thenableWithOverride.status = "fulfilled";
			thenableWithOverride.value = result;
			for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
		}, function(error) {
			thenableWithOverride.status = "rejected";
			thenableWithOverride.reason = error;
			for (error = 0; error < listeners.length; error++) (0, listeners[error])(void 0);
		});
		return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function(transition, returnValue) {
		globalMostRecentTransitionTime = now();
		"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
		null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
		var cacheResumedFromPreviousRender = resumedCache.current;
		return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
		null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
		var cacheFromPool = peekCacheFromPool();
		return null === cacheFromPool ? null : {
			parent: CacheContext._currentValue,
			pool: cacheFromPool
		};
	}
	var SuspenseException = Error(formatProdErrorMessage(460)), SuspenseyCommitException = Error(formatProdErrorMessage(474)), SuspenseActionException = Error(formatProdErrorMessage(542)), noopSuspenseyCommitThenable = { then: function() {} };
	function isThenableResolved(thenable) {
		thenable = thenable.status;
		return "fulfilled" === thenable || "rejected" === thenable;
	}
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$1, noop$1), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
			default:
				if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
				else {
					thenableState = workInProgressRoot;
					if (null !== thenableState && 100 < thenableState.shellSuspendCounter) throw Error(formatProdErrorMessage(482));
					thenableState = thenable;
					thenableState.status = "pending";
					thenableState.then(function(fulfilledValue) {
						if ("pending" === thenable.status) {
							var fulfilledThenable = thenable;
							fulfilledThenable.status = "fulfilled";
							fulfilledThenable.value = fulfilledValue;
						}
					}, function(error) {
						if ("pending" === thenable.status) {
							var rejectedThenable = thenable;
							rejectedThenable.status = "rejected";
							rejectedThenable.reason = error;
						}
					});
				}
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenableState = thenable.reason, checkIfUseWrappedInAsyncCatch(thenableState), thenableState;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	function resolveLazy(lazyType) {
		try {
			var init = lazyType._init;
			return init(lazyType._payload);
		} catch (x) {
			if (null !== x && "object" === typeof x && "function" === typeof x.then) throw suspendedThenable = x, SuspenseException;
			throw x;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
		if (rejectedReason === SuspenseException || rejectedReason === SuspenseActionException) throw Error(formatProdErrorMessage(483));
	}
	var thenableState$1 = null, thenableIndexCounter$1 = 0;
	function unwrapThenable(thenable) {
		var index = thenableIndexCounter$1;
		thenableIndexCounter$1 += 1;
		null === thenableState$1 && (thenableState$1 = []);
		return trackUsedThenable(thenableState$1, thenable, index);
	}
	function coerceRef(workInProgress, element) {
		element = element.props.ref;
		workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
		if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE) throw Error(formatProdErrorMessage(525));
		returnFiber = Object.prototype.toString.call(newChild);
		throw Error(formatProdErrorMessage(31, "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber));
	}
	function createChildReconciler(shouldTrackSideEffects) {
		function deleteChild(returnFiber, childToDelete) {
			if (shouldTrackSideEffects) {
				var deletions = returnFiber.deletions;
				null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
			}
		}
		function deleteRemainingChildren(returnFiber, currentFirstChild) {
			if (!shouldTrackSideEffects) return null;
			for (; null !== currentFirstChild;) deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
			return null;
		}
		function mapRemainingChildren(currentFirstChild) {
			for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild;) null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
			return existingChildren;
		}
		function useFiber(fiber, pendingProps) {
			fiber = createWorkInProgress(fiber, pendingProps);
			fiber.index = 0;
			fiber.sibling = null;
			return fiber;
		}
		function placeChild(newFiber, lastPlacedIndex, newIndex) {
			newFiber.index = newIndex;
			if (!shouldTrackSideEffects) return newFiber.flags |= 1048576, lastPlacedIndex;
			newIndex = newFiber.alternate;
			if (null !== newIndex) return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 67108866, lastPlacedIndex) : newIndex;
			newFiber.flags |= 67108866;
			return lastPlacedIndex;
		}
		function placeSingleChild(newFiber) {
			shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 67108866);
			return newFiber;
		}
		function updateTextNode(returnFiber, current, textContent, lanes) {
			if (null === current || 6 !== current.tag) return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
			current = useFiber(current, textContent);
			current.return = returnFiber;
			return current;
		}
		function updateElement(returnFiber, current, element, lanes) {
			var elementType = element.type;
			if (elementType === REACT_FRAGMENT_TYPE) return updateFragment(returnFiber, current, element.props.children, lanes, element.key);
			if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type)) return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
			current = createFiberFromTypeAndProps(element.type, element.key, element.props, null, returnFiber.mode, lanes);
			coerceRef(current, element);
			current.return = returnFiber;
			return current;
		}
		function updatePortal(returnFiber, current, portal, lanes) {
			if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation) return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
			current = useFiber(current, portal.children || []);
			current.return = returnFiber;
			return current;
		}
		function updateFragment(returnFiber, current, fragment, lanes, key) {
			if (null === current || 7 !== current.tag) return current = createFiberFromFragment(fragment, returnFiber.mode, lanes, key), current.return = returnFiber, current;
			current = useFiber(current, fragment);
			current.return = returnFiber;
			return current;
		}
		function createChild(returnFiber, newChild, lanes) {
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return newChild = createFiberFromText("" + newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild;
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return lanes = createFiberFromTypeAndProps(newChild.type, newChild.key, newChild.props, null, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
					case REACT_PORTAL_TYPE: return newChild = createFiberFromPortal(newChild, returnFiber.mode, lanes), newChild.return = returnFiber, newChild;
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), createChild(returnFiber, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return newChild = createFiberFromFragment(newChild, returnFiber.mode, lanes, null), newChild.return = returnFiber, newChild;
				if ("function" === typeof newChild.then) return createChild(returnFiber, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return createChild(returnFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function updateSlot(returnFiber, oldFiber, newChild, lanes) {
			var key = null !== oldFiber ? oldFiber.key : null;
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
					case REACT_PORTAL_TYPE: return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), updateSlot(returnFiber, oldFiber, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
				if ("function" === typeof newChild.then) return updateSlot(returnFiber, oldFiber, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateSlot(returnFiber, oldFiber, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
			if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild) return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE: return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
					case REACT_PORTAL_TYPE: return existingChildren = existingChildren.get(null === newChild.key ? newIdx : newChild.key) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes);
				}
				if (isArrayImpl(newChild) || getIteratorFn(newChild)) return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
				if ("function" === typeof newChild.then) return updateFromMap(existingChildren, returnFiber, newIdx, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return updateFromMap(existingChildren, returnFiber, newIdx, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return null;
		}
		function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
			for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
				oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
				var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
				if (null === newFiber) {
					null === oldFiber && (oldFiber = nextOldFiber);
					break;
				}
				shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
				currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
				null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
				previousNewFiber = newFiber;
				oldFiber = nextOldFiber;
			}
			if (newIdx === newChildren.length) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
			if (null === oldFiber) {
				for (; newIdx < newChildren.length; newIdx++) oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(oldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
				isHydrating && pushTreeFork(returnFiber, newIdx);
				return resultingFirstChild;
			}
			for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++) nextOldFiber = updateFromMap(oldFiber, returnFiber, newIdx, newChildren[newIdx], lanes), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(null === nextOldFiber.key ? newIdx : nextOldFiber.key), currentFirstChild = placeChild(nextOldFiber, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
			shouldTrackSideEffects && oldFiber.forEach(function(child) {
				return deleteChild(returnFiber, child);
			});
			isHydrating && pushTreeFork(returnFiber, newIdx);
			return resultingFirstChild;
		}
		function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
			if (null == newChildren) throw Error(formatProdErrorMessage(151));
			for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
				oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
				var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
				if (null === newFiber) {
					null === oldFiber && (oldFiber = nextOldFiber);
					break;
				}
				shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
				currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
				null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
				previousNewFiber = newFiber;
				oldFiber = nextOldFiber;
			}
			if (step.done) return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
			if (null === oldFiber) {
				for (; !step.done; newIdx++, step = newChildren.next()) step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
				isHydrating && pushTreeFork(returnFiber, newIdx);
				return resultingFirstChild;
			}
			for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next()) step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
			shouldTrackSideEffects && oldFiber.forEach(function(child) {
				return deleteChild(returnFiber, child);
			});
			isHydrating && pushTreeFork(returnFiber, newIdx);
			return resultingFirstChild;
		}
		function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
			"object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
			if ("object" === typeof newChild && null !== newChild) {
				switch (newChild.$$typeof) {
					case REACT_ELEMENT_TYPE:
						a: {
							for (var key = newChild.key; null !== currentFirstChild;) {
								if (currentFirstChild.key === key) {
									key = newChild.type;
									if (key === REACT_FRAGMENT_TYPE) {
										if (7 === currentFirstChild.tag) {
											deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
											lanes = useFiber(currentFirstChild, newChild.props.children);
											lanes.return = returnFiber;
											returnFiber = lanes;
											break a;
										}
									} else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
										deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
										lanes = useFiber(currentFirstChild, newChild.props);
										coerceRef(lanes, newChild);
										lanes.return = returnFiber;
										returnFiber = lanes;
										break a;
									}
									deleteRemainingChildren(returnFiber, currentFirstChild);
									break;
								} else deleteChild(returnFiber, currentFirstChild);
								currentFirstChild = currentFirstChild.sibling;
							}
							newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(newChild.props.children, returnFiber.mode, lanes, newChild.key), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(newChild.type, newChild.key, newChild.props, null, returnFiber.mode, lanes), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
						}
						return placeSingleChild(returnFiber);
					case REACT_PORTAL_TYPE:
						a: {
							for (key = newChild.key; null !== currentFirstChild;) {
								if (currentFirstChild.key === key) if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
									deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
									lanes = useFiber(currentFirstChild, newChild.children || []);
									lanes.return = returnFiber;
									returnFiber = lanes;
									break a;
								} else {
									deleteRemainingChildren(returnFiber, currentFirstChild);
									break;
								}
								else deleteChild(returnFiber, currentFirstChild);
								currentFirstChild = currentFirstChild.sibling;
							}
							lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
							lanes.return = returnFiber;
							returnFiber = lanes;
						}
						return placeSingleChild(returnFiber);
					case REACT_LAZY_TYPE: return newChild = resolveLazy(newChild), reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
				}
				if (isArrayImpl(newChild)) return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
				if (getIteratorFn(newChild)) {
					key = getIteratorFn(newChild);
					if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
					newChild = key.call(newChild);
					return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
				}
				if ("function" === typeof newChild.then) return reconcileChildFibersImpl(returnFiber, currentFirstChild, unwrapThenable(newChild), lanes);
				if (newChild.$$typeof === REACT_CONTEXT_TYPE) return reconcileChildFibersImpl(returnFiber, currentFirstChild, readContextDuringReconciliation(returnFiber, newChild), lanes);
				throwOnInvalidObjectTypeImpl(returnFiber, newChild);
			}
			return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
		}
		return function(returnFiber, currentFirstChild, newChild, lanes) {
			try {
				thenableIndexCounter$1 = 0;
				var firstChildFiber = reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes);
				thenableState$1 = null;
				return firstChildFiber;
			} catch (x) {
				if (x === SuspenseException || x === SuspenseActionException) throw x;
				var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
				fiber.lanes = lanes;
				fiber.return = returnFiber;
				return fiber;
			}
		};
	}
	var reconcileChildFibers = createChildReconciler(!0), mountChildFibers = createChildReconciler(!1), hasForceUpdate = !1;
	function initializeUpdateQueue(fiber) {
		fiber.updateQueue = {
			baseState: fiber.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function cloneUpdateQueue(current, workInProgress) {
		current = current.updateQueue;
		workInProgress.updateQueue === current && (workInProgress.updateQueue = {
			baseState: current.baseState,
			firstBaseUpdate: current.firstBaseUpdate,
			lastBaseUpdate: current.lastBaseUpdate,
			shared: current.shared,
			callbacks: null
		});
	}
	function createUpdate(lane) {
		return {
			lane,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function enqueueUpdate(fiber, update, lane) {
		var updateQueue = fiber.updateQueue;
		if (null === updateQueue) return null;
		updateQueue = updateQueue.shared;
		if (0 !== (executionContext & 2)) {
			var pending = updateQueue.pending;
			null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
			updateQueue.pending = update;
			update = getRootForUpdatedFiber(fiber);
			markUpdateLaneFromFiberToRoot(fiber, null, lane);
			return update;
		}
		enqueueUpdate$1(fiber, updateQueue, update, lane);
		return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
		fiber = fiber.updateQueue;
		if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194048))) {
			var queueLanes = fiber.lanes;
			queueLanes &= root.pendingLanes;
			lane |= queueLanes;
			fiber.lanes = lane;
			markRootEntangled(root, lane);
		}
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
		var queue = workInProgress.updateQueue, current = workInProgress.alternate;
		if (null !== current && (current = current.updateQueue, queue === current)) {
			var newFirst = null, newLast = null;
			queue = queue.firstBaseUpdate;
			if (null !== queue) {
				do {
					var clone = {
						lane: queue.lane,
						tag: queue.tag,
						payload: queue.payload,
						callback: null,
						next: null
					};
					null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
					queue = queue.next;
				} while (null !== queue);
				null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
			} else newFirst = newLast = capturedUpdate;
			queue = {
				baseState: current.baseState,
				firstBaseUpdate: newFirst,
				lastBaseUpdate: newLast,
				shared: current.shared,
				callbacks: current.callbacks
			};
			workInProgress.updateQueue = queue;
			return;
		}
		workInProgress = queue.lastBaseUpdate;
		null === workInProgress ? queue.firstBaseUpdate = capturedUpdate : workInProgress.next = capturedUpdate;
		queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = !1;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
		if (didReadFromEntangledAsyncAction) {
			var entangledActionThenable = currentEntangledActionThenable;
			if (null !== entangledActionThenable) throw entangledActionThenable;
		}
	}
	function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes) {
		didReadFromEntangledAsyncAction = !1;
		var queue = workInProgress$jscomp$0.updateQueue;
		hasForceUpdate = !1;
		var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
		if (null !== pendingQueue) {
			queue.shared.pending = null;
			var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
			lastPendingUpdate.next = null;
			null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
			lastBaseUpdate = lastPendingUpdate;
			var current = workInProgress$jscomp$0.alternate;
			null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
		}
		if (null !== firstBaseUpdate) {
			var newState = queue.baseState;
			lastBaseUpdate = 0;
			current = firstPendingUpdate = lastPendingUpdate = null;
			pendingQueue = firstBaseUpdate;
			do {
				var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
				if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
					0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = !0);
					null !== current && (current = current.next = {
						lane: 0,
						tag: pendingQueue.tag,
						payload: pendingQueue.payload,
						callback: null,
						next: null
					});
					a: {
						var workInProgress = workInProgress$jscomp$0, update = pendingQueue;
						updateLane = props;
						var instance = instance$jscomp$0;
						switch (update.tag) {
							case 1:
								workInProgress = update.payload;
								if ("function" === typeof workInProgress) {
									newState = workInProgress.call(instance, newState, updateLane);
									break a;
								}
								newState = workInProgress;
								break a;
							case 3: workInProgress.flags = workInProgress.flags & -65537 | 128;
							case 0:
								workInProgress = update.payload;
								updateLane = "function" === typeof workInProgress ? workInProgress.call(instance, newState, updateLane) : workInProgress;
								if (null === updateLane || void 0 === updateLane) break a;
								newState = assign({}, newState, updateLane);
								break a;
							case 2: hasForceUpdate = !0;
						}
					}
					updateLane = pendingQueue.callback;
					null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
				} else isHiddenUpdate = {
					lane: updateLane,
					tag: pendingQueue.tag,
					payload: pendingQueue.payload,
					callback: pendingQueue.callback,
					next: null
				}, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
				pendingQueue = pendingQueue.next;
				if (null === pendingQueue) if (pendingQueue = queue.shared.pending, null === pendingQueue) break;
				else isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
			} while (1);
			null === current && (lastPendingUpdate = newState);
			queue.baseState = lastPendingUpdate;
			queue.firstBaseUpdate = firstPendingUpdate;
			queue.lastBaseUpdate = current;
			null === firstBaseUpdate && (queue.shared.lanes = 0);
			workInProgressRootSkippedLanes |= lastBaseUpdate;
			workInProgress$jscomp$0.lanes = lastBaseUpdate;
			workInProgress$jscomp$0.memoizedState = newState;
		}
	}
	function callCallback(callback, context) {
		if ("function" !== typeof callback) throw Error(formatProdErrorMessage(191, callback));
		callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
		var callbacks = updateQueue.callbacks;
		if (null !== callbacks) for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++) callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null), prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
		fiber = entangledRenderLanes;
		push(prevEntangledRenderLanesCursor, fiber);
		push(currentTreeHiddenStackCursor, context);
		entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
		push(prevEntangledRenderLanesCursor, entangledRenderLanes);
		push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
		entangledRenderLanes = prevEntangledRenderLanesCursor.current;
		pop(currentTreeHiddenStackCursor);
		pop(prevEntangledRenderLanesCursor);
	}
	var suspenseHandlerStackCursor = createCursor(null), shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
		var current = handler.alternate;
		push(suspenseStackCursor, suspenseStackCursor.current & 1);
		push(suspenseHandlerStackCursor, handler);
		null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushDehydratedActivitySuspenseHandler(fiber) {
		push(suspenseStackCursor, suspenseStackCursor.current);
		push(suspenseHandlerStackCursor, fiber);
		null === shellBoundary && (shellBoundary = fiber);
	}
	function pushOffscreenSuspenseHandler(fiber) {
		22 === fiber.tag ? (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary && (shellBoundary = fiber)) : reuseSuspenseHandlerOnStack(fiber);
	}
	function reuseSuspenseHandlerOnStack() {
		push(suspenseStackCursor, suspenseStackCursor.current);
		push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
		pop(suspenseHandlerStackCursor);
		shellBoundary === fiber && (shellBoundary = null);
		pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
		for (var node = row; null !== node;) {
			if (13 === node.tag) {
				var state = node.memoizedState;
				if (null !== state && (state = state.dehydrated, null === state || isSuspenseInstancePending(state) || isSuspenseInstanceFallback(state))) return node;
			} else if (19 === node.tag && ("forwards" === node.memoizedProps.revealOrder || "backwards" === node.memoizedProps.revealOrder || "unstable_legacy-backwards" === node.memoizedProps.revealOrder || "together" === node.memoizedProps.revealOrder)) {
				if (0 !== (node.flags & 128)) return node;
			} else if (null !== node.child) {
				node.child.return = node;
				node = node.child;
				continue;
			}
			if (node === row) break;
			for (; null === node.sibling;) {
				if (null === node.return || node.return === row) return null;
				node = node.return;
			}
			node.sibling.return = node.return;
			node = node.sibling;
		}
		return null;
	}
	var renderLanes = 0, currentlyRenderingFiber = null, currentHook = null, workInProgressHook = null, didScheduleRenderPhaseUpdate = !1, didScheduleRenderPhaseUpdateDuringThisPass = !1, shouldDoubleInvokeUserFnsInHooksDEV = !1, localIdCounter = 0, thenableIndexCounter = 0, thenableState = null, globalClientIdCounter = 0;
	function throwInvalidHookError() {
		throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
		if (null === prevDeps) return !1;
		for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
		return !0;
	}
	function renderWithHooks(current, workInProgress, Component, props, secondArg, nextRenderLanes) {
		renderLanes = nextRenderLanes;
		currentlyRenderingFiber = workInProgress;
		workInProgress.memoizedState = null;
		workInProgress.updateQueue = null;
		workInProgress.lanes = 0;
		ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
		shouldDoubleInvokeUserFnsInHooksDEV = !1;
		nextRenderLanes = Component(props, secondArg);
		shouldDoubleInvokeUserFnsInHooksDEV = !1;
		didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(workInProgress, Component, props, secondArg));
		finishRenderingHooks(current);
		return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
		ReactSharedInternals.H = ContextOnlyDispatcher;
		var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
		renderLanes = 0;
		workInProgressHook = currentHook = currentlyRenderingFiber = null;
		didScheduleRenderPhaseUpdate = !1;
		thenableIndexCounter = 0;
		thenableState = null;
		if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
		null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = !0));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
		currentlyRenderingFiber = workInProgress;
		var numberOfReRenders = 0;
		do {
			didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
			thenableIndexCounter = 0;
			didScheduleRenderPhaseUpdateDuringThisPass = !1;
			if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
			numberOfReRenders += 1;
			workInProgressHook = currentHook = null;
			if (null != workInProgress.updateQueue) {
				var children = workInProgress.updateQueue;
				children.lastEffect = null;
				children.events = null;
				children.stores = null;
				null != children.memoCache && (children.memoCache.index = 0);
			}
			ReactSharedInternals.H = HooksDispatcherOnRerender;
			children = Component(props, secondArg);
		} while (didScheduleRenderPhaseUpdateDuringThisPass);
		return children;
	}
	function TransitionAwareHostComponent() {
		var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
		maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
		dispatcher = dispatcher.useState()[0];
		(null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber.flags |= 1024);
		return maybeThenable;
	}
	function checkDidRenderIdHook() {
		var didRenderIdHook = 0 !== localIdCounter;
		localIdCounter = 0;
		return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
		workInProgress.updateQueue = current.updateQueue;
		workInProgress.flags &= -2053;
		current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
		if (didScheduleRenderPhaseUpdate) {
			for (workInProgress = workInProgress.memoizedState; null !== workInProgress;) {
				var queue = workInProgress.queue;
				null !== queue && (queue.pending = null);
				workInProgress = workInProgress.next;
			}
			didScheduleRenderPhaseUpdate = !1;
		}
		renderLanes = 0;
		workInProgressHook = currentHook = currentlyRenderingFiber = null;
		didScheduleRenderPhaseUpdateDuringThisPass = !1;
		thenableIndexCounter = localIdCounter = 0;
		thenableState = null;
	}
	function mountWorkInProgressHook() {
		var hook = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
		return workInProgressHook;
	}
	function updateWorkInProgressHook() {
		if (null === currentHook) {
			var nextCurrentHook = currentlyRenderingFiber.alternate;
			nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
		} else nextCurrentHook = currentHook.next;
		var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber.memoizedState : workInProgressHook.next;
		if (null !== nextWorkInProgressHook) workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
		else {
			if (null === nextCurrentHook) {
				if (null === currentlyRenderingFiber.alternate) throw Error(formatProdErrorMessage(467));
				throw Error(formatProdErrorMessage(310));
			}
			currentHook = nextCurrentHook;
			nextCurrentHook = {
				memoizedState: currentHook.memoizedState,
				baseState: currentHook.baseState,
				baseQueue: currentHook.baseQueue,
				queue: currentHook.queue,
				next: null
			};
			null === workInProgressHook ? currentlyRenderingFiber.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
		}
		return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function useThenable(thenable) {
		var index = thenableIndexCounter;
		thenableIndexCounter += 1;
		null === thenableState && (thenableState = []);
		thenable = trackUsedThenable(thenableState, thenable, index);
		index = currentlyRenderingFiber;
		null === (null === workInProgressHook ? index.memoizedState : workInProgressHook.next) && (index = index.alternate, ReactSharedInternals.H = null === index || null === index.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
		return thenable;
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable) {
			if ("function" === typeof usable.then) return useThenable(usable);
			if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
		}
		throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
		var memoCache = null, updateQueue = currentlyRenderingFiber.updateQueue;
		null !== updateQueue && (memoCache = updateQueue.memoCache);
		if (null == memoCache) {
			var current = currentlyRenderingFiber.alternate;
			null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
				data: current.data.map(function(array) {
					return array.slice();
				}),
				index: 0
			})));
		}
		memoCache ??= {
			data: [],
			index: 0
		};
		null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = updateQueue);
		updateQueue.memoCache = memoCache;
		updateQueue = memoCache.data[memoCache.index];
		if (void 0 === updateQueue) for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++) updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
		memoCache.index++;
		return updateQueue;
	}
	function basicStateReducer(state, action) {
		return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
		return updateReducerImpl(updateWorkInProgressHook(), currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
		var queue = hook.queue;
		if (null === queue) throw Error(formatProdErrorMessage(311));
		queue.lastRenderedReducer = reducer;
		var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
		if (null !== pendingQueue) {
			if (null !== baseQueue) {
				var baseFirst = baseQueue.next;
				baseQueue.next = pendingQueue.next;
				pendingQueue.next = baseFirst;
			}
			current.baseQueue = baseQueue = pendingQueue;
			queue.pending = null;
		}
		pendingQueue = hook.baseState;
		if (null === baseQueue) hook.memoizedState = pendingQueue;
		else {
			current = baseQueue.next;
			var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$60 = !1;
			do {
				var updateLane = update.lane & -536870913;
				if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
					var revertLane = update.revertLane;
					if (0 === revertLane) null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: update.action,
						hasEagerState: update.hasEagerState,
						eagerState: update.eagerState,
						next: null
					}), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = !0);
					else if ((renderLanes & revertLane) === revertLane) {
						update = update.next;
						revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$60 = !0);
						continue;
					} else updateLane = {
						lane: 0,
						revertLane: update.revertLane,
						gesture: null,
						action: update.action,
						hasEagerState: update.hasEagerState,
						eagerState: update.eagerState,
						next: null
					}, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
					updateLane = update.action;
					shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
					pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
				} else revertLane = {
					lane: updateLane,
					revertLane: update.revertLane,
					gesture: update.gesture,
					action: update.action,
					hasEagerState: update.hasEagerState,
					eagerState: update.eagerState,
					next: null
				}, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
				update = update.next;
			} while (null !== update && update !== current);
			null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
			if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = !0, didReadFromEntangledAsyncAction$60 && (reducer = currentEntangledActionThenable, null !== reducer))) throw reducer;
			hook.memoizedState = pendingQueue;
			hook.baseState = baseFirst;
			hook.baseQueue = newBaseQueueLast;
			queue.lastRenderedState = pendingQueue;
		}
		null === baseQueue && (queue.lanes = 0);
		return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
		var hook = updateWorkInProgressHook(), queue = hook.queue;
		if (null === queue) throw Error(formatProdErrorMessage(311));
		queue.lastRenderedReducer = reducer;
		var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
		if (null !== lastRenderPhaseUpdate) {
			queue.pending = null;
			var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
			do
				newState = reducer(newState, update.action), update = update.next;
			while (update !== lastRenderPhaseUpdate);
			objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
			hook.memoizedState = newState;
			null === hook.baseQueue && (hook.baseState = newState);
			queue.lastRenderedState = newState;
		}
		return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		var fiber = currentlyRenderingFiber, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
		if (isHydrating$jscomp$0) {
			if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
			getServerSnapshot = getServerSnapshot();
		} else getServerSnapshot = getSnapshot();
		var snapshotChanged = !objectIs((currentHook || hook).memoizedState, getServerSnapshot);
		snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = !0);
		hook = hook.queue;
		updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [subscribe]);
		if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
			fiber.flags |= 2048;
			pushSimpleEffect(9, { destroy: void 0 }, updateStoreInstance.bind(null, fiber, hook, getServerSnapshot, getSnapshot), null);
			if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
			isHydrating$jscomp$0 || 0 !== (renderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
		}
		return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
		fiber.flags |= 16384;
		fiber = {
			getSnapshot,
			value: renderedSnapshot
		};
		getSnapshot = currentlyRenderingFiber.updateQueue;
		null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
		inst.value = nextSnapshot;
		inst.getSnapshot = getSnapshot;
		checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
		return subscribe(function() {
			checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
		});
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function forceStoreRerender(fiber) {
		var root = enqueueConcurrentRenderForLane(fiber, 2);
		null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
		var hook = mountWorkInProgressHook();
		if ("function" === typeof initialState) {
			var initialStateInitializer = initialState;
			initialState = initialStateInitializer();
			if (shouldDoubleInvokeUserFnsInHooksDEV) {
				setIsStrictModeForDevtools(!0);
				try {
					initialStateInitializer();
				} finally {
					setIsStrictModeForDevtools(!1);
				}
			}
		}
		hook.memoizedState = hook.baseState = initialState;
		hook.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: basicStateReducer,
			lastRenderedState: initialState
		};
		return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
		hook.baseState = passthrough;
		return updateReducerImpl(hook, currentHook, "function" === typeof reducer ? reducer : basicStateReducer);
	}
	function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
		if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
		fiber = actionQueue.action;
		if (null !== fiber) {
			var actionNode = {
				payload,
				action: fiber,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(listener) {
					actionNode.listeners.push(listener);
				}
			};
			null !== ReactSharedInternals.T ? setPendingState(!0) : actionNode.isTransition = !1;
			setState(actionNode);
			setPendingState = actionQueue.pending;
			null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
		}
	}
	function runActionStateAction(actionQueue, node) {
		var action = node.action, payload = node.payload, prevState = actionQueue.state;
		if (node.isTransition) {
			var prevTransition = ReactSharedInternals.T, currentTransition = {};
			ReactSharedInternals.T = currentTransition;
			try {
				var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
				null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
				handleActionReturnValue(actionQueue, node, returnValue);
			} catch (error) {
				onActionError(actionQueue, node, error);
			} finally {
				null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
			}
		} else try {
			prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
		} catch (error$66) {
			onActionError(actionQueue, node, error$66);
		}
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
		null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(function(nextState) {
			onActionSuccess(actionQueue, node, nextState);
		}, function(error) {
			return onActionError(actionQueue, node, error);
		}) : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
		actionNode.status = "fulfilled";
		actionNode.value = nextState;
		notifyActionListeners(actionNode);
		actionQueue.state = nextState;
		actionNode = actionQueue.pending;
		null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
		var last = actionQueue.pending;
		actionQueue.pending = null;
		if (null !== last) {
			last = last.next;
			do
				actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
			while (actionNode !== last);
		}
		actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
		actionNode = actionNode.listeners;
		for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
		return newState;
	}
	function mountActionState(action, initialStateProp) {
		if (isHydrating) {
			var ssrFormState = workInProgressRoot.formState;
			if (null !== ssrFormState) {
				a: {
					var JSCompiler_inline_result = currentlyRenderingFiber;
					if (isHydrating) {
						if (nextHydratableInstance) {
							b: {
								var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
								for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType;) {
									if (!inRootOrSingleton) {
										JSCompiler_inline_result$jscomp$0 = null;
										break b;
									}
									JSCompiler_inline_result$jscomp$0 = getNextHydratable(JSCompiler_inline_result$jscomp$0.nextSibling);
									if (null === JSCompiler_inline_result$jscomp$0) {
										JSCompiler_inline_result$jscomp$0 = null;
										break b;
									}
								}
								inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
								JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
							}
							if (JSCompiler_inline_result$jscomp$0) {
								nextHydratableInstance = getNextHydratable(JSCompiler_inline_result$jscomp$0.nextSibling);
								JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
								break a;
							}
						}
						throwOnHydrationMismatch(JSCompiler_inline_result);
					}
					JSCompiler_inline_result = !1;
				}
				JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
			}
		}
		ssrFormState = mountWorkInProgressHook();
		ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
		JSCompiler_inline_result = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: actionStateReducer,
			lastRenderedState: initialStateProp
		};
		ssrFormState.queue = JSCompiler_inline_result;
		ssrFormState = dispatchSetState.bind(null, currentlyRenderingFiber, JSCompiler_inline_result);
		JSCompiler_inline_result.dispatch = ssrFormState;
		JSCompiler_inline_result = mountStateImpl(!1);
		inRootOrSingleton = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !1, JSCompiler_inline_result.queue);
		JSCompiler_inline_result = mountWorkInProgressHook();
		JSCompiler_inline_result$jscomp$0 = {
			state: initialStateProp,
			dispatch: null,
			action,
			pending: null
		};
		JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
		ssrFormState = dispatchActionState.bind(null, currentlyRenderingFiber, JSCompiler_inline_result$jscomp$0, inRootOrSingleton, ssrFormState);
		JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
		JSCompiler_inline_result.memoizedState = action;
		return [
			initialStateProp,
			ssrFormState,
			!1
		];
	}
	function updateActionState(action) {
		return updateActionStateImpl(updateWorkInProgressHook(), currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
		currentStateHook = updateReducerImpl(stateHook, currentStateHook, actionStateReducer)[0];
		stateHook = updateReducer(basicStateReducer)[0];
		if ("object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then) try {
			var state = useThenable(currentStateHook);
		} catch (x) {
			if (x === SuspenseException) throw SuspenseActionException;
			throw x;
		}
		else state = currentStateHook;
		currentStateHook = updateWorkInProgressHook();
		var actionQueue = currentStateHook.queue, dispatch = actionQueue.dispatch;
		action !== currentStateHook.memoizedState && (currentlyRenderingFiber.flags |= 2048, pushSimpleEffect(9, { destroy: void 0 }, actionStateActionEffect.bind(null, actionQueue, action), null));
		return [
			state,
			dispatch,
			stateHook
		];
	}
	function actionStateActionEffect(actionQueue, action) {
		actionQueue.action = action;
	}
	function rerenderActionState(action) {
		var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
		if (null !== currentStateHook) return updateActionStateImpl(stateHook, currentStateHook, action);
		updateWorkInProgressHook();
		stateHook = stateHook.memoizedState;
		currentStateHook = updateWorkInProgressHook();
		var dispatch = currentStateHook.queue.dispatch;
		currentStateHook.memoizedState = action;
		return [
			stateHook,
			dispatch,
			!1
		];
	}
	function pushSimpleEffect(tag, inst, create, deps) {
		tag = {
			tag,
			create,
			deps,
			inst,
			next: null
		};
		inst = currentlyRenderingFiber.updateQueue;
		null === inst && (inst = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = inst);
		create = inst.lastEffect;
		null === create ? inst.lastEffect = tag.next = tag : (deps = create.next, create.next = tag, tag.next = deps, inst.lastEffect = tag);
		return tag;
	}
	function updateRef() {
		return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
		var hook = mountWorkInProgressHook();
		currentlyRenderingFiber.flags |= fiberFlags;
		hook.memoizedState = pushSimpleEffect(1 | hookFlags, { destroy: void 0 }, create, void 0 === deps ? null : deps);
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var inst = hook.memoizedState.inst;
		null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps) : (currentlyRenderingFiber.flags |= fiberFlags, hook.memoizedState = pushSimpleEffect(1 | hookFlags, inst, create, deps));
	}
	function mountEffect(create, deps) {
		mountEffectImpl(8390656, 8, create, deps);
	}
	function updateEffect(create, deps) {
		updateEffectImpl(2048, 8, create, deps);
	}
	function useEffectEventImpl(payload) {
		currentlyRenderingFiber.flags |= 4;
		var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
		if (null === componentUpdateQueue) componentUpdateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber.updateQueue = componentUpdateQueue, componentUpdateQueue.events = [payload];
		else {
			var events = componentUpdateQueue.events;
			null === events ? componentUpdateQueue.events = [payload] : events.push(payload);
		}
	}
	function updateEvent(callback) {
		var ref = updateWorkInProgressHook().memoizedState;
		useEffectEventImpl({
			ref,
			nextImpl: callback
		});
		return function() {
			if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
			return ref.impl.apply(void 0, arguments);
		};
	}
	function updateInsertionEffect(create, deps) {
		return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
		return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
		if ("function" === typeof ref) {
			create = create();
			var refCleanup = ref(create);
			return function() {
				"function" === typeof refCleanup ? refCleanup() : ref(null);
			};
		}
		if (null !== ref && void 0 !== ref) return create = create(), ref.current = create, function() {
			ref.current = null;
		};
	}
	function updateImperativeHandle(ref, create, deps) {
		deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
		updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var prevState = hook.memoizedState;
		if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
		hook.memoizedState = [callback, deps];
		return callback;
	}
	function updateMemo(nextCreate, deps) {
		var hook = updateWorkInProgressHook();
		deps = void 0 === deps ? null : deps;
		var prevState = hook.memoizedState;
		if (null !== deps && areHookInputsEqual(deps, prevState[1])) return prevState[0];
		prevState = nextCreate();
		if (shouldDoubleInvokeUserFnsInHooksDEV) {
			setIsStrictModeForDevtools(!0);
			try {
				nextCreate();
			} finally {
				setIsStrictModeForDevtools(!1);
			}
		}
		hook.memoizedState = [prevState, deps];
		return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
		if (void 0 === initialValue || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930)) return hook.memoizedState = value;
		hook.memoizedState = initialValue;
		hook = requestDeferredLane();
		currentlyRenderingFiber.lanes |= hook;
		workInProgressRootSkippedLanes |= hook;
		return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
		if (objectIs(value, prevValue)) return value;
		if (null !== currentTreeHiddenStackCursor.current) return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = !0), hook;
		if (0 === (renderLanes & 42) || 0 !== (renderLanes & 1073741824) && 0 === (workInProgressRootRenderLanes & 261930)) return didReceiveUpdate = !0, hook.memoizedState = value;
		hook = requestDeferredLane();
		currentlyRenderingFiber.lanes |= hook;
		workInProgressRootSkippedLanes |= hook;
		return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
		var previousPriority = ReactDOMSharedInternals.p;
		ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		dispatchOptimisticSetState(fiber, !1, queue, pendingState);
		try {
			var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) dispatchSetStateInternal(fiber, queue, chainThenableValue(returnValue, finishedState), requestUpdateLane(fiber));
			else dispatchSetStateInternal(fiber, queue, finishedState, requestUpdateLane(fiber));
		} catch (error) {
			dispatchSetStateInternal(fiber, queue, {
				then: function() {},
				status: "rejected",
				reason: error
			}, requestUpdateLane());
		} finally {
			ReactDOMSharedInternals.p = previousPriority, null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	}
	function noop() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
		if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
		var queue = ensureFormComponentIsStateful(formFiber).queue;
		startTransition(formFiber, queue, pendingState, sharedNotPendingObject, null === action ? noop : function() {
			requestFormReset$1(formFiber);
			return action(formData);
		});
	}
	function ensureFormComponentIsStateful(formFiber) {
		var existingStateHook = formFiber.memoizedState;
		if (null !== existingStateHook) return existingStateHook;
		existingStateHook = {
			memoizedState: sharedNotPendingObject,
			baseState: sharedNotPendingObject,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: sharedNotPendingObject
			},
			next: null
		};
		var initialResetState = {};
		existingStateHook.next = {
			memoizedState: initialResetState,
			baseState: initialResetState,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: initialResetState
			},
			next: null
		};
		formFiber.memoizedState = existingStateHook;
		formFiber = formFiber.alternate;
		null !== formFiber && (formFiber.memoizedState = existingStateHook);
		return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
		var stateHook = ensureFormComponentIsStateful(formFiber);
		null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
		dispatchSetStateInternal(formFiber, stateHook.next.queue, {}, requestUpdateLane());
	}
	function useHostTransitionStatus() {
		return readContext(HostTransitionContext);
	}
	function updateId() {
		return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
		return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
		for (var provider = fiber.return; null !== provider;) {
			switch (provider.tag) {
				case 24:
				case 3:
					var lane = requestUpdateLane();
					fiber = createUpdate(lane);
					var root$69 = enqueueUpdate(provider, fiber, lane);
					null !== root$69 && (scheduleUpdateOnFiber(root$69, provider, lane), entangleTransitions(root$69, provider, lane));
					provider = { cache: createCache() };
					fiber.payload = provider;
					return;
			}
			provider = provider.return;
		}
	}
	function dispatchReducerAction(fiber, queue, action) {
		var lane = requestUpdateLane();
		action = {
			lane,
			revertLane: 0,
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
		dispatchSetStateInternal(fiber, queue, action, requestUpdateLane());
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
		var update = {
			lane,
			revertLane: 0,
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
		else {
			var alternate = fiber.alternate;
			if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate)) try {
				var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
				update.hasEagerState = !0;
				update.eagerState = eagerState;
				if (objectIs(eagerState, currentState)) return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), !1;
			} catch (error) {}
			action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
			if (null !== action) return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), !0;
		}
		return !1;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
		action = {
			lane: 2,
			revertLane: requestTransitionLane(),
			gesture: null,
			action,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (isRenderPhaseUpdate(fiber)) {
			if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
		} else throwIfDuringRender = enqueueConcurrentHookUpdate(fiber, queue, action, 2), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
		var alternate = fiber.alternate;
		return fiber === currentlyRenderingFiber || null !== alternate && alternate === currentlyRenderingFiber;
	}
	function enqueueRenderPhaseUpdate(queue, update) {
		didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = !0;
		var pending = queue.pending;
		null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
		queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
		if (0 !== (lane & 4194048)) {
			var queueLanes = queue.lanes;
			queueLanes &= root.pendingLanes;
			lane |= queueLanes;
			queue.lanes = lane;
			markRootEntangled(root, lane);
		}
	}
	var ContextOnlyDispatcher = {
		readContext,
		use,
		useCallback: throwInvalidHookError,
		useContext: throwInvalidHookError,
		useEffect: throwInvalidHookError,
		useImperativeHandle: throwInvalidHookError,
		useLayoutEffect: throwInvalidHookError,
		useInsertionEffect: throwInvalidHookError,
		useMemo: throwInvalidHookError,
		useReducer: throwInvalidHookError,
		useRef: throwInvalidHookError,
		useState: throwInvalidHookError,
		useDebugValue: throwInvalidHookError,
		useDeferredValue: throwInvalidHookError,
		useTransition: throwInvalidHookError,
		useSyncExternalStore: throwInvalidHookError,
		useId: throwInvalidHookError,
		useHostTransitionStatus: throwInvalidHookError,
		useFormState: throwInvalidHookError,
		useActionState: throwInvalidHookError,
		useOptimistic: throwInvalidHookError,
		useMemoCache: throwInvalidHookError,
		useCacheRefresh: throwInvalidHookError
	};
	ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
	var HooksDispatcherOnMount = {
		readContext,
		use,
		useCallback: function(callback, deps) {
			mountWorkInProgressHook().memoizedState = [callback, void 0 === deps ? null : deps];
			return callback;
		},
		useContext: readContext,
		useEffect: mountEffect,
		useImperativeHandle: function(ref, create, deps) {
			deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
			mountEffectImpl(4194308, 4, imperativeHandleEffect.bind(null, create, ref), deps);
		},
		useLayoutEffect: function(create, deps) {
			return mountEffectImpl(4194308, 4, create, deps);
		},
		useInsertionEffect: function(create, deps) {
			mountEffectImpl(4, 2, create, deps);
		},
		useMemo: function(nextCreate, deps) {
			var hook = mountWorkInProgressHook();
			deps = void 0 === deps ? null : deps;
			var nextValue = nextCreate();
			if (shouldDoubleInvokeUserFnsInHooksDEV) {
				setIsStrictModeForDevtools(!0);
				try {
					nextCreate();
				} finally {
					setIsStrictModeForDevtools(!1);
				}
			}
			hook.memoizedState = [nextValue, deps];
			return nextValue;
		},
		useReducer: function(reducer, initialArg, init) {
			var hook = mountWorkInProgressHook();
			if (void 0 !== init) {
				var initialState = init(initialArg);
				if (shouldDoubleInvokeUserFnsInHooksDEV) {
					setIsStrictModeForDevtools(!0);
					try {
						init(initialArg);
					} finally {
						setIsStrictModeForDevtools(!1);
					}
				}
			} else initialState = initialArg;
			hook.memoizedState = hook.baseState = initialState;
			reducer = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: reducer,
				lastRenderedState: initialState
			};
			hook.queue = reducer;
			reducer = reducer.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber, reducer);
			return [hook.memoizedState, reducer];
		},
		useRef: function(initialValue) {
			var hook = mountWorkInProgressHook();
			initialValue = { current: initialValue };
			return hook.memoizedState = initialValue;
		},
		useState: function(initialState) {
			initialState = mountStateImpl(initialState);
			var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
			queue.dispatch = dispatch;
			return [initialState.memoizedState, dispatch];
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			return mountDeferredValueImpl(mountWorkInProgressHook(), value, initialValue);
		},
		useTransition: function() {
			var stateHook = mountStateImpl(!1);
			stateHook = startTransition.bind(null, currentlyRenderingFiber, stateHook.queue, !0, !1);
			mountWorkInProgressHook().memoizedState = stateHook;
			return [!1, stateHook];
		},
		useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
			var fiber = currentlyRenderingFiber, hook = mountWorkInProgressHook();
			if (isHydrating) {
				if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
				getServerSnapshot = getServerSnapshot();
			} else {
				getServerSnapshot = getSnapshot();
				if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
				0 !== (workInProgressRootRenderLanes & 127) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
			}
			hook.memoizedState = getServerSnapshot;
			var inst = {
				value: getServerSnapshot,
				getSnapshot
			};
			hook.queue = inst;
			mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
			fiber.flags |= 2048;
			pushSimpleEffect(9, { destroy: void 0 }, updateStoreInstance.bind(null, fiber, inst, getServerSnapshot, getSnapshot), null);
			return getServerSnapshot;
		},
		useId: function() {
			var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
			if (isHydrating) {
				var JSCompiler_inline_result = treeContextOverflow;
				var idWithLeadingBit = treeContextId;
				JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
				identifierPrefix = "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
				JSCompiler_inline_result = localIdCounter++;
				0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
				identifierPrefix += "_";
			} else JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = "_" + identifierPrefix + "r_" + JSCompiler_inline_result.toString(32) + "_";
			return hook.memoizedState = identifierPrefix;
		},
		useHostTransitionStatus,
		useFormState: mountActionState,
		useActionState: mountActionState,
		useOptimistic: function(passthrough) {
			var hook = mountWorkInProgressHook();
			hook.memoizedState = hook.baseState = passthrough;
			var queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			hook.queue = queue;
			hook = dispatchOptimisticSetState.bind(null, currentlyRenderingFiber, !0, queue);
			queue.dispatch = hook;
			return [passthrough, hook];
		},
		useMemoCache,
		useCacheRefresh: function() {
			return mountWorkInProgressHook().memoizedState = refreshCache.bind(null, currentlyRenderingFiber);
		},
		useEffectEvent: function(callback) {
			var hook = mountWorkInProgressHook(), ref = { impl: callback };
			hook.memoizedState = ref;
			return function() {
				if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
				return ref.impl.apply(void 0, arguments);
			};
		}
	}, HooksDispatcherOnUpdate = {
		readContext,
		use,
		useCallback: updateCallback,
		useContext: readContext,
		useEffect: updateEffect,
		useImperativeHandle: updateImperativeHandle,
		useInsertionEffect: updateInsertionEffect,
		useLayoutEffect: updateLayoutEffect,
		useMemo: updateMemo,
		useReducer: updateReducer,
		useRef: updateRef,
		useState: function() {
			return updateReducer(basicStateReducer);
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			return updateDeferredValueImpl(updateWorkInProgressHook(), currentHook.memoizedState, value, initialValue);
		},
		useTransition: function() {
			var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
			return ["boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable), start];
		},
		useSyncExternalStore: updateSyncExternalStore,
		useId: updateId,
		useHostTransitionStatus,
		useFormState: updateActionState,
		useActionState: updateActionState,
		useOptimistic: function(passthrough, reducer) {
			return updateOptimisticImpl(updateWorkInProgressHook(), currentHook, passthrough, reducer);
		},
		useMemoCache,
		useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
	var HooksDispatcherOnRerender = {
		readContext,
		use,
		useCallback: updateCallback,
		useContext: readContext,
		useEffect: updateEffect,
		useImperativeHandle: updateImperativeHandle,
		useInsertionEffect: updateInsertionEffect,
		useLayoutEffect: updateLayoutEffect,
		useMemo: updateMemo,
		useReducer: rerenderReducer,
		useRef: updateRef,
		useState: function() {
			return rerenderReducer(basicStateReducer);
		},
		useDebugValue: mountDebugValue,
		useDeferredValue: function(value, initialValue) {
			var hook = updateWorkInProgressHook();
			return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(hook, currentHook.memoizedState, value, initialValue);
		},
		useTransition: function() {
			var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
			return ["boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable), start];
		},
		useSyncExternalStore: updateSyncExternalStore,
		useId: updateId,
		useHostTransitionStatus,
		useFormState: rerenderActionState,
		useActionState: rerenderActionState,
		useOptimistic: function(passthrough, reducer) {
			var hook = updateWorkInProgressHook();
			if (null !== currentHook) return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
			hook.baseState = passthrough;
			return [passthrough, hook.queue.dispatch];
		},
		useMemoCache,
		useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnRerender.useEffectEvent = updateEvent;
	function applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, nextProps) {
		ctor = workInProgress.memoizedState;
		getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
		getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
		workInProgress.memoizedState = getDerivedStateFromProps;
		0 === workInProgress.lanes && (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
		enqueueSetState: function(inst, payload, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.payload = payload;
			void 0 !== callback && null !== callback && (update.callback = callback);
			payload = enqueueUpdate(inst, update, lane);
			null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
		},
		enqueueReplaceState: function(inst, payload, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.tag = 1;
			update.payload = payload;
			void 0 !== callback && null !== callback && (update.callback = callback);
			payload = enqueueUpdate(inst, update, lane);
			null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
		},
		enqueueForceUpdate: function(inst, callback) {
			inst = inst._reactInternals;
			var lane = requestUpdateLane(), update = createUpdate(lane);
			update.tag = 2;
			void 0 !== callback && null !== callback && (update.callback = callback);
			callback = enqueueUpdate(inst, update, lane);
			null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
		}
	};
	function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
		workInProgress = workInProgress.stateNode;
		return "function" === typeof workInProgress.shouldComponentUpdate ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : !0;
	}
	function callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext) {
		workInProgress = instance.state;
		"function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
		"function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
		instance.state !== workInProgress && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
		var newProps = baseProps;
		if ("ref" in baseProps) {
			newProps = {};
			for (var propName in baseProps) "ref" !== propName && (newProps[propName] = baseProps[propName]);
		}
		if (Component = Component.defaultProps) {
			newProps === baseProps && (newProps = assign({}, newProps));
			for (var propName$73 in Component) void 0 === newProps[propName$73] && (newProps[propName$73] = Component[propName$73]);
		}
		return newProps;
	}
	function defaultOnUncaughtError(error) {
		reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
		console.error(error);
	}
	function defaultOnRecoverableError(error) {
		reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
		try {
			var onUncaughtError = root.onUncaughtError;
			onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
		} catch (e$74) {
			setTimeout(function() {
				throw e$74;
			});
		}
	}
	function logCaughtError(root, boundary, errorInfo) {
		try {
			var onCaughtError = root.onCaughtError;
			onCaughtError(errorInfo.value, {
				componentStack: errorInfo.stack,
				errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
			});
		} catch (e$75) {
			setTimeout(function() {
				throw e$75;
			});
		}
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
		lane = createUpdate(lane);
		lane.tag = 3;
		lane.payload = { element: null };
		lane.callback = function() {
			logUncaughtError(root, errorInfo);
		};
		return lane;
	}
	function createClassErrorUpdate(lane) {
		lane = createUpdate(lane);
		lane.tag = 3;
		return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
		var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
		if ("function" === typeof getDerivedStateFromError) {
			var error = errorInfo.value;
			update.payload = function() {
				return getDerivedStateFromError(error);
			};
			update.callback = function() {
				logCaughtError(root, fiber, errorInfo);
			};
		}
		var inst = fiber.stateNode;
		null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
			logCaughtError(root, fiber, errorInfo);
			"function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
			var stack = errorInfo.stack;
			this.componentDidCatch(errorInfo.value, { componentStack: null !== stack ? stack : "" });
		});
	}
	function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
		sourceFiber.flags |= 32768;
		if (null !== value && "object" === typeof value && "function" === typeof value.then) {
			returnFiber = sourceFiber.alternate;
			null !== returnFiber && propagateParentContextChanges(returnFiber, sourceFiber, rootRenderLanes, !0);
			sourceFiber = suspenseHandlerStackCursor.current;
			if (null !== sourceFiber) {
				switch (sourceFiber.tag) {
					case 31:
					case 13: return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = new Set([value]) : returnFiber.add(value), attachPingListener(root, value, rootRenderLanes)), !1;
					case 22: return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
						transitions: null,
						markerInstances: null,
						retryQueue: new Set([value])
					}, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = new Set([value]) : sourceFiber.add(value)), attachPingListener(root, value, rootRenderLanes)), !1;
				}
				throw Error(formatProdErrorMessage(435, sourceFiber.tag));
			}
			attachPingListener(root, value, rootRenderLanes);
			renderDidSuspendDelayIfPossible();
			return !1;
		}
		if (isHydrating) return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), { cause: value }), queueHydrationError(createCapturedValueAtFiber(returnFiber, sourceFiber))), root = root.current.alternate, root.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(root.stateNode, value, rootRenderLanes), enqueueCapturedUpdate(root, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), !1;
		var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
		wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
		null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
		4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
		if (null === returnFiber) return !0;
		value = createCapturedValueAtFiber(value, sourceFiber);
		sourceFiber = returnFiber;
		do {
			switch (sourceFiber.tag) {
				case 3: return sourceFiber.flags |= 65536, root = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root, root = createRootErrorUpdate(sourceFiber.stateNode, value, root), enqueueCapturedUpdate(sourceFiber, root), !1;
				case 1: if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))) return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(rootRenderLanes, root, sourceFiber, value), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), !1;
			}
			sourceFiber = sourceFiber.return;
		} while (null !== sourceFiber);
		return !1;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461)), didReceiveUpdate = !1;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
		workInProgress.child = null === current ? mountChildFibers(workInProgress, null, nextChildren, renderLanes) : reconcileChildFibers(workInProgress, current.child, nextChildren, renderLanes);
	}
	function updateForwardRef(current, workInProgress, Component, nextProps, renderLanes) {
		Component = Component.render;
		var ref = workInProgress.ref;
		if ("ref" in nextProps) {
			var propsWithoutRef = {};
			for (var key in nextProps) "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
		} else propsWithoutRef = nextProps;
		prepareToReadContext(workInProgress);
		nextProps = renderWithHooks(current, workInProgress, Component, propsWithoutRef, ref, renderLanes);
		key = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && key && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		return workInProgress.child;
	}
	function updateMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
		if (null === current) {
			var type = Component.type;
			if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare) return workInProgress.tag = 15, workInProgress.type = type, updateSimpleMemoComponent(current, workInProgress, type, nextProps, renderLanes);
			current = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress, workInProgress.mode, renderLanes);
			current.ref = workInProgress.ref;
			current.return = workInProgress;
			return workInProgress.child = current;
		}
		type = current.child;
		if (!checkScheduledUpdateOrContext(current, renderLanes)) {
			var prevProps = type.memoizedProps;
			Component = Component.compare;
			Component = null !== Component ? Component : shallowEqual;
			if (Component(prevProps, nextProps) && current.ref === workInProgress.ref) return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		}
		workInProgress.flags |= 1;
		current = createWorkInProgress(type, nextProps);
		current.ref = workInProgress.ref;
		current.return = workInProgress;
		return workInProgress.child = current;
	}
	function updateSimpleMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
		if (null !== current) {
			var prevProps = current.memoizedProps;
			if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref) if (didReceiveUpdate = !1, workInProgress.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes)) 0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
			else return workInProgress.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		}
		return updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes);
	}
	function updateOffscreenComponent(current, workInProgress, renderLanes, nextProps) {
		var nextChildren = nextProps.children, prevState = null !== current ? current.memoizedState : null;
		null === current && null === workInProgress.stateNode && (workInProgress.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		});
		if ("hidden" === nextProps.mode) {
			if (0 !== (workInProgress.flags & 128)) {
				prevState = null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
				if (null !== current) {
					nextProps = workInProgress.child = current.child;
					for (nextChildren = 0; null !== nextProps;) nextChildren = nextChildren | nextProps.lanes | nextProps.childLanes, nextProps = nextProps.sibling;
					nextProps = nextChildren & ~prevState;
				} else nextProps = 0, workInProgress.child = null;
				return deferHiddenOffscreenComponent(current, workInProgress, prevState, renderLanes, nextProps);
			}
			if (0 !== (renderLanes & 536870912)) workInProgress.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, null !== current && pushTransition(workInProgress, null !== prevState ? prevState.cachePool : null), null !== prevState ? pushHiddenContext(workInProgress, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress);
			else return nextProps = workInProgress.lanes = 536870912, deferHiddenOffscreenComponent(current, workInProgress, null !== prevState ? prevState.baseLanes | renderLanes : renderLanes, renderLanes, nextProps);
		} else null !== prevState ? (pushTransition(workInProgress, prevState.cachePool), pushHiddenContext(workInProgress, prevState), reuseSuspenseHandlerOnStack(workInProgress), workInProgress.memoizedState = null) : (null !== current && pushTransition(workInProgress, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack(workInProgress));
		reconcileChildren(current, workInProgress, nextChildren, renderLanes);
		return workInProgress.child;
	}
	function bailoutOffscreenComponent(current, workInProgress) {
		null !== current && 22 === current.tag || null !== workInProgress.stateNode || (workInProgress.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		});
		return workInProgress.sibling;
	}
	function deferHiddenOffscreenComponent(current, workInProgress, nextBaseLanes, renderLanes, remainingChildLanes) {
		var JSCompiler_inline_result = peekCacheFromPool();
		JSCompiler_inline_result = null === JSCompiler_inline_result ? null : {
			parent: CacheContext._currentValue,
			pool: JSCompiler_inline_result
		};
		workInProgress.memoizedState = {
			baseLanes: nextBaseLanes,
			cachePool: JSCompiler_inline_result
		};
		null !== current && pushTransition(workInProgress, null);
		reuseHiddenContextOnStack();
		pushOffscreenSuspenseHandler(workInProgress);
		null !== current && propagateParentContextChanges(current, workInProgress, renderLanes, !0);
		workInProgress.childLanes = remainingChildLanes;
		return null;
	}
	function mountActivityChildren(workInProgress, nextProps) {
		nextProps = mountWorkInProgressOffscreenFiber({
			mode: nextProps.mode,
			children: nextProps.children
		}, workInProgress.mode);
		nextProps.ref = workInProgress.ref;
		workInProgress.child = nextProps;
		nextProps.return = workInProgress;
		return nextProps;
	}
	function retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes) {
		reconcileChildFibers(workInProgress, current.child, null, renderLanes);
		current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
		current.flags |= 2;
		popSuspenseHandler(workInProgress);
		workInProgress.memoizedState = null;
		return current;
	}
	function updateActivityComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, didSuspend = 0 !== (workInProgress.flags & 128);
		workInProgress.flags &= -129;
		if (null === current) {
			if (isHydrating) {
				if ("hidden" === nextProps.mode) return current = mountActivityChildren(workInProgress, nextProps), workInProgress.lanes = 536870912, bailoutOffscreenComponent(null, current);
				pushDehydratedActivitySuspenseHandler(workInProgress);
				(current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(current, rootOrSingletonContext), current = null !== current && "&" === current.data ? current : null, null !== current && (workInProgress.memoizedState = {
					dehydrated: current,
					treeContext: null !== treeContextProvider ? {
						id: treeContextId,
						overflow: treeContextOverflow
					} : null,
					retryLane: 536870912,
					hydrationErrors: null
				}, renderLanes = createFiberFromDehydratedFragment(current), renderLanes.return = workInProgress, workInProgress.child = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null)) : current = null;
				if (null === current) throw throwOnHydrationMismatch(workInProgress);
				workInProgress.lanes = 536870912;
				return null;
			}
			return mountActivityChildren(workInProgress, nextProps);
		}
		var prevState = current.memoizedState;
		if (null !== prevState) {
			var dehydrated = prevState.dehydrated;
			pushDehydratedActivitySuspenseHandler(workInProgress);
			if (didSuspend) if (workInProgress.flags & 256) workInProgress.flags &= -257, workInProgress = retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes);
			else if (null !== workInProgress.memoizedState) workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null;
			else throw Error(formatProdErrorMessage(558));
			else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), didSuspend = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || didSuspend) {
				nextProps = workInProgressRoot;
				if (null !== nextProps && (dehydrated = getBumpedLaneForHydration(nextProps, renderLanes), 0 !== dehydrated && dehydrated !== prevState.retryLane)) throw prevState.retryLane = dehydrated, enqueueConcurrentRenderForLane(current, dehydrated), scheduleUpdateOnFiber(nextProps, current, dehydrated), SelectiveHydrationException;
				renderDidSuspendDelayIfPossible();
				workInProgress = retryActivityComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else current = prevState.treeContext, nextHydratableInstance = getNextHydratable(dehydrated.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, rootOrSingletonContext = !1, null !== current && restoreSuspendedTreeContext(workInProgress, current), workInProgress = mountActivityChildren(workInProgress, nextProps), workInProgress.flags |= 4096;
			return workInProgress;
		}
		current = createWorkInProgress(current.child, {
			mode: nextProps.mode,
			children: nextProps.children
		});
		current.ref = workInProgress.ref;
		workInProgress.child = current;
		current.return = workInProgress;
		return current;
	}
	function markRef(current, workInProgress) {
		var ref = workInProgress.ref;
		if (null === ref) null !== current && null !== current.ref && (workInProgress.flags |= 4194816);
		else {
			if ("function" !== typeof ref && "object" !== typeof ref) throw Error(formatProdErrorMessage(284));
			if (null === current || current.ref !== ref) workInProgress.flags |= 4194816;
		}
	}
	function updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes) {
		prepareToReadContext(workInProgress);
		Component = renderWithHooks(current, workInProgress, Component, nextProps, void 0, renderLanes);
		nextProps = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, Component, renderLanes);
		return workInProgress.child;
	}
	function replayFunctionComponent(current, workInProgress, nextProps, Component, secondArg, renderLanes) {
		prepareToReadContext(workInProgress);
		workInProgress.updateQueue = null;
		nextProps = renderWithHooksAgain(workInProgress, Component, nextProps, secondArg);
		finishRenderingHooks(current);
		Component = checkDidRenderIdHook();
		if (null !== current && !didReceiveUpdate) return bailoutHooks(current, workInProgress, renderLanes), bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		isHydrating && Component && pushMaterializedTreeId(workInProgress);
		workInProgress.flags |= 1;
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		return workInProgress.child;
	}
	function updateClassComponent(current, workInProgress, Component, nextProps, renderLanes) {
		prepareToReadContext(workInProgress);
		if (null === workInProgress.stateNode) {
			var context = emptyContextObject, contextType = Component.contextType;
			"object" === typeof contextType && null !== contextType && (context = readContext(contextType));
			context = new Component(nextProps, context);
			workInProgress.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
			context.updater = classComponentUpdater;
			workInProgress.stateNode = context;
			context._reactInternals = workInProgress;
			context = workInProgress.stateNode;
			context.props = nextProps;
			context.state = workInProgress.memoizedState;
			context.refs = {};
			initializeUpdateQueue(workInProgress);
			contextType = Component.contextType;
			context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
			context.state = workInProgress.memoizedState;
			contextType = Component.getDerivedStateFromProps;
			"function" === typeof contextType && (applyDerivedStateFromProps(workInProgress, Component, contextType, nextProps), context.state = workInProgress.memoizedState);
			"function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress, nextProps, context, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress.memoizedState);
			"function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308);
			nextProps = !0;
		} else if (null === current) {
			context = workInProgress.stateNode;
			var unresolvedOldProps = workInProgress.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
			context.props = oldProps;
			var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
			contextType = emptyContextObject;
			"object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
			var getDerivedStateFromProps = Component.getDerivedStateFromProps;
			contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
			unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
			contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(workInProgress, context, nextProps, contextType);
			hasForceUpdate = !1;
			var oldState = workInProgress.memoizedState;
			context.state = oldState;
			processUpdateQueue(workInProgress, nextProps, context, renderLanes);
			suspendIfUpdateReadFromEntangledAsyncAction();
			oldContext = workInProgress.memoizedState;
			unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(workInProgress, Component, getDerivedStateFromProps, nextProps), oldContext = workInProgress.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, oldProps, nextProps, oldState, oldContext, contextType)) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress.flags |= 4194308), nextProps = !1);
		} else {
			context = workInProgress.stateNode;
			cloneUpdateQueue(current, workInProgress);
			contextType = workInProgress.memoizedProps;
			contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
			context.props = contextType$jscomp$0;
			getDerivedStateFromProps = workInProgress.pendingProps;
			oldState = context.context;
			oldContext = Component.contextType;
			oldProps = emptyContextObject;
			"object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
			unresolvedOldProps = Component.getDerivedStateFromProps;
			(oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(workInProgress, context, nextProps, oldProps);
			hasForceUpdate = !1;
			oldState = workInProgress.memoizedState;
			context.state = oldState;
			processUpdateQueue(workInProgress, nextProps, context, renderLanes);
			suspendIfUpdateReadFromEntangledAsyncAction();
			var newState = workInProgress.memoizedState;
			contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(workInProgress, Component, unresolvedOldProps, nextProps), newState = workInProgress.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(workInProgress, Component, contextType$jscomp$0, nextProps, oldState, newState, oldProps) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(nextProps, newState, oldProps)), "function" === typeof context.componentDidUpdate && (workInProgress.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), workInProgress.memoizedProps = nextProps, workInProgress.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress.flags |= 1024), nextProps = !1);
		}
		context = nextProps;
		markRef(current, workInProgress);
		nextProps = 0 !== (workInProgress.flags & 128);
		context || nextProps ? (context = workInProgress.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress.flags |= 1, null !== current && nextProps ? (workInProgress.child = reconcileChildFibers(workInProgress, current.child, null, renderLanes), workInProgress.child = reconcileChildFibers(workInProgress, null, Component, renderLanes)) : reconcileChildren(current, workInProgress, Component, renderLanes), workInProgress.memoizedState = context.state, current = workInProgress.child) : current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
		return current;
	}
	function mountHostRootWithoutHydrating(current, workInProgress, nextChildren, renderLanes) {
		resetHydrationState();
		workInProgress.flags |= 256;
		reconcileChildren(current, workInProgress, nextChildren, renderLanes);
		return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
		return {
			baseLanes: renderLanes,
			cachePool: getSuspendedCache()
		};
	}
	function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes) {
		current = null !== current ? current.childLanes & ~renderLanes : 0;
		primaryTreeDidDefer && (current |= workInProgressDeferredLane);
		return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, showFallback = !1, didSuspend = 0 !== (workInProgress.flags & 128), JSCompiler_temp;
		(JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? !1 : 0 !== (suspenseStackCursor.current & 2));
		JSCompiler_temp && (showFallback = !0, workInProgress.flags &= -129);
		JSCompiler_temp = 0 !== (workInProgress.flags & 32);
		workInProgress.flags &= -33;
		if (null === current) {
			if (isHydrating) {
				showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress) : reuseSuspenseHandlerOnStack(workInProgress);
				(current = nextHydratableInstance) ? (current = canHydrateHydrationBoundary(current, rootOrSingletonContext), current = null !== current && "&" !== current.data ? current : null, null !== current && (workInProgress.memoizedState = {
					dehydrated: current,
					treeContext: null !== treeContextProvider ? {
						id: treeContextId,
						overflow: treeContextOverflow
					} : null,
					retryLane: 536870912,
					hydrationErrors: null
				}, renderLanes = createFiberFromDehydratedFragment(current), renderLanes.return = workInProgress, workInProgress.child = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null)) : current = null;
				if (null === current) throw throwOnHydrationMismatch(workInProgress);
				isSuspenseInstanceFallback(current) ? workInProgress.lanes = 32 : workInProgress.lanes = 536870912;
				return null;
			}
			var nextPrimaryChildren = nextProps.children;
			nextProps = nextProps.fallback;
			if (showFallback) return reuseSuspenseHandlerOnStack(workInProgress), showFallback = workInProgress.mode, nextPrimaryChildren = mountWorkInProgressOffscreenFiber({
				mode: "hidden",
				children: nextPrimaryChildren
			}, showFallback), nextProps = createFiberFromFragment(nextProps, showFallback, renderLanes, null), nextPrimaryChildren.return = workInProgress, nextProps.return = workInProgress, nextPrimaryChildren.sibling = nextProps, workInProgress.child = nextPrimaryChildren, nextProps = workInProgress.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes), nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(null, nextProps);
			pushPrimaryTreeSuspenseHandler(workInProgress);
			return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
		}
		var prevState = current.memoizedState;
		if (null !== prevState && (nextPrimaryChildren = prevState.dehydrated, null !== nextPrimaryChildren)) {
			if (didSuspend) workInProgress.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags &= -257, workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes)) : null !== workInProgress.memoizedState ? (reuseSuspenseHandlerOnStack(workInProgress), workInProgress.child = current.child, workInProgress.flags |= 128, workInProgress = null) : (reuseSuspenseHandlerOnStack(workInProgress), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress.mode, nextProps = mountWorkInProgressOffscreenFiber({
				mode: "visible",
				children: nextProps.children
			}, showFallback), nextPrimaryChildren = createFiberFromFragment(nextPrimaryChildren, showFallback, renderLanes, null), nextPrimaryChildren.flags |= 2, nextProps.return = workInProgress, nextPrimaryChildren.return = workInProgress, nextProps.sibling = nextPrimaryChildren, workInProgress.child = nextProps, reconcileChildFibers(workInProgress, current.child, null, renderLanes), nextProps = workInProgress.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes), nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, workInProgress = bailoutOffscreenComponent(null, nextProps));
			else if (pushPrimaryTreeSuspenseHandler(workInProgress), isSuspenseInstanceFallback(nextPrimaryChildren)) {
				JSCompiler_temp = nextPrimaryChildren.nextSibling && nextPrimaryChildren.nextSibling.dataset;
				if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
				JSCompiler_temp = digest;
				nextProps = Error(formatProdErrorMessage(419));
				nextProps.stack = "";
				nextProps.digest = JSCompiler_temp;
				queueHydrationError({
					value: nextProps,
					source: null,
					stack: null
				});
				workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress, renderLanes, !1), JSCompiler_temp = 0 !== (renderLanes & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
				JSCompiler_temp = workInProgressRoot;
				if (null !== JSCompiler_temp && (nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes), 0 !== nextProps && nextProps !== prevState.retryLane)) throw prevState.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
				isSuspenseInstancePending(nextPrimaryChildren) || renderDidSuspendDelayIfPossible();
				workInProgress = retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes);
			} else isSuspenseInstancePending(nextPrimaryChildren) ? (workInProgress.flags |= 192, workInProgress.child = current.child, workInProgress = null) : (current = prevState.treeContext, nextHydratableInstance = getNextHydratable(nextPrimaryChildren.nextSibling), hydrationParentFiber = workInProgress, isHydrating = !0, hydrationErrors = null, rootOrSingletonContext = !1, null !== current && restoreSuspendedTreeContext(workInProgress, current), workInProgress = mountSuspensePrimaryChildren(workInProgress, nextProps.children), workInProgress.flags |= 4096);
			return workInProgress;
		}
		if (showFallback) return reuseSuspenseHandlerOnStack(workInProgress), nextPrimaryChildren = nextProps.fallback, showFallback = workInProgress.mode, prevState = current.child, digest = prevState.sibling, nextProps = createWorkInProgress(prevState, {
			mode: "hidden",
			children: nextProps.children
		}), nextProps.subtreeFlags = prevState.subtreeFlags & 65011712, null !== digest ? nextPrimaryChildren = createWorkInProgress(digest, nextPrimaryChildren) : (nextPrimaryChildren = createFiberFromFragment(nextPrimaryChildren, showFallback, renderLanes, null), nextPrimaryChildren.flags |= 2), nextPrimaryChildren.return = workInProgress, nextProps.return = workInProgress, nextProps.sibling = nextPrimaryChildren, workInProgress.child = nextProps, bailoutOffscreenComponent(null, nextProps), nextProps = workInProgress.child, nextPrimaryChildren = current.child.memoizedState, null === nextPrimaryChildren ? nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes) : (showFallback = nextPrimaryChildren.cachePool, null !== showFallback ? (prevState = CacheContext._currentValue, showFallback = showFallback.parent !== prevState ? {
			parent: prevState,
			pool: prevState
		} : showFallback) : showFallback = getSuspendedCache(), nextPrimaryChildren = {
			baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
			cachePool: showFallback
		}), nextProps.memoizedState = nextPrimaryChildren, nextProps.childLanes = getRemainingWorkInPrimaryTree(current, JSCompiler_temp, renderLanes), workInProgress.memoizedState = SUSPENDED_MARKER, bailoutOffscreenComponent(current.child, nextProps);
		pushPrimaryTreeSuspenseHandler(workInProgress);
		renderLanes = current.child;
		current = renderLanes.sibling;
		renderLanes = createWorkInProgress(renderLanes, {
			mode: "visible",
			children: nextProps.children
		});
		renderLanes.return = workInProgress;
		renderLanes.sibling = null;
		null !== current && (JSCompiler_temp = workInProgress.deletions, null === JSCompiler_temp ? (workInProgress.deletions = [current], workInProgress.flags |= 16) : JSCompiler_temp.push(current));
		workInProgress.child = renderLanes;
		workInProgress.memoizedState = null;
		return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
		primaryChildren = mountWorkInProgressOffscreenFiber({
			mode: "visible",
			children: primaryChildren
		}, workInProgress.mode);
		primaryChildren.return = workInProgress;
		return workInProgress.child = primaryChildren;
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
		offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
		offscreenProps.lanes = 0;
		return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes) {
		reconcileChildFibers(workInProgress, current.child, null, renderLanes);
		current = mountSuspensePrimaryChildren(workInProgress, workInProgress.pendingProps.children);
		current.flags |= 2;
		workInProgress.memoizedState = null;
		return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
		fiber.lanes |= renderLanes;
		var alternate = fiber.alternate;
		null !== alternate && (alternate.lanes |= renderLanes);
		scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(workInProgress, isBackwards, tail, lastContentRow, tailMode, treeForkCount) {
		var renderState = workInProgress.memoizedState;
		null === renderState ? workInProgress.memoizedState = {
			isBackwards,
			rendering: null,
			renderingStartTime: 0,
			last: lastContentRow,
			tail,
			tailMode,
			treeForkCount
		} : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode, renderState.treeForkCount = treeForkCount);
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
		var nextProps = workInProgress.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
		nextProps = nextProps.children;
		var suspenseContext = suspenseStackCursor.current, shouldForceFallback = 0 !== (suspenseContext & 2);
		shouldForceFallback ? (suspenseContext = suspenseContext & 1 | 2, workInProgress.flags |= 128) : suspenseContext &= 1;
		push(suspenseStackCursor, suspenseContext);
		reconcileChildren(current, workInProgress, nextProps, renderLanes);
		nextProps = isHydrating ? treeForkCount : 0;
		if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128)) a: for (current = workInProgress.child; null !== current;) {
			if (13 === current.tag) null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
			else if (19 === current.tag) scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
			else if (null !== current.child) {
				current.child.return = current;
				current = current.child;
				continue;
			}
			if (current === workInProgress) break a;
			for (; null === current.sibling;) {
				if (null === current.return || current.return === workInProgress) break a;
				current = current.return;
			}
			current.sibling.return = current.return;
			current = current.sibling;
		}
		switch (revealOrder) {
			case "forwards":
				renderLanes = workInProgress.child;
				for (revealOrder = null; null !== renderLanes;) current = renderLanes.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes), renderLanes = renderLanes.sibling;
				renderLanes = revealOrder;
				null === renderLanes ? (revealOrder = workInProgress.child, workInProgress.child = null) : (revealOrder = renderLanes.sibling, renderLanes.sibling = null);
				initSuspenseListRenderState(workInProgress, !1, revealOrder, renderLanes, tailMode, nextProps);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				renderLanes = null;
				revealOrder = workInProgress.child;
				for (workInProgress.child = null; null !== revealOrder;) {
					current = revealOrder.alternate;
					if (null !== current && null === findFirstSuspended(current)) {
						workInProgress.child = revealOrder;
						break;
					}
					current = revealOrder.sibling;
					revealOrder.sibling = renderLanes;
					renderLanes = revealOrder;
					revealOrder = current;
				}
				initSuspenseListRenderState(workInProgress, !0, renderLanes, null, tailMode, nextProps);
				break;
			case "together":
				initSuspenseListRenderState(workInProgress, !1, null, null, void 0, nextProps);
				break;
			default: workInProgress.memoizedState = null;
		}
		return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
		null !== current && (workInProgress.dependencies = current.dependencies);
		workInProgressRootSkippedLanes |= workInProgress.lanes;
		if (0 === (renderLanes & workInProgress.childLanes)) if (null !== current) {
			if (propagateParentContextChanges(current, workInProgress, renderLanes, !1), 0 === (renderLanes & workInProgress.childLanes)) return null;
		} else return null;
		if (null !== current && workInProgress.child !== current.child) throw Error(formatProdErrorMessage(153));
		if (null !== workInProgress.child) {
			current = workInProgress.child;
			renderLanes = createWorkInProgress(current, current.pendingProps);
			workInProgress.child = renderLanes;
			for (renderLanes.return = workInProgress; null !== current.sibling;) current = current.sibling, renderLanes = renderLanes.sibling = createWorkInProgress(current, current.pendingProps), renderLanes.return = workInProgress;
			renderLanes.sibling = null;
		}
		return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
		if (0 !== (current.lanes & renderLanes)) return !0;
		current = current.dependencies;
		return null !== current && checkIfContextChanged(current) ? !0 : !1;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes) {
		switch (workInProgress.tag) {
			case 3:
				pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
				pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
				resetHydrationState();
				break;
			case 27:
			case 5:
				pushHostContext(workInProgress);
				break;
			case 4:
				pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
				break;
			case 10:
				pushProvider(workInProgress, workInProgress.type, workInProgress.memoizedProps.value);
				break;
			case 31:
				if (null !== workInProgress.memoizedState) return workInProgress.flags |= 128, pushDehydratedActivitySuspenseHandler(workInProgress), null;
				break;
			case 13:
				var state$102 = workInProgress.memoizedState;
				if (null !== state$102) {
					if (null !== state$102.dehydrated) return pushPrimaryTreeSuspenseHandler(workInProgress), workInProgress.flags |= 128, null;
					if (0 !== (renderLanes & workInProgress.child.childLanes)) return updateSuspenseComponent(current, workInProgress, renderLanes);
					pushPrimaryTreeSuspenseHandler(workInProgress);
					current = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
					return null !== current ? current.sibling : null;
				}
				pushPrimaryTreeSuspenseHandler(workInProgress);
				break;
			case 19:
				var didSuspendBefore = 0 !== (current.flags & 128);
				state$102 = 0 !== (renderLanes & workInProgress.childLanes);
				state$102 || (propagateParentContextChanges(current, workInProgress, renderLanes, !1), state$102 = 0 !== (renderLanes & workInProgress.childLanes));
				if (didSuspendBefore) {
					if (state$102) return updateSuspenseListComponent(current, workInProgress, renderLanes);
					workInProgress.flags |= 128;
				}
				didSuspendBefore = workInProgress.memoizedState;
				null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
				push(suspenseStackCursor, suspenseStackCursor.current);
				if (state$102) break;
				else return null;
			case 22: return workInProgress.lanes = 0, updateOffscreenComponent(current, workInProgress, renderLanes, workInProgress.pendingProps);
			case 24: pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
		}
		return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
		if (null !== current) if (current.memoizedProps !== workInProgress.pendingProps) didReceiveUpdate = !0;
		else {
			if (!checkScheduledUpdateOrContext(current, renderLanes) && 0 === (workInProgress.flags & 128)) return didReceiveUpdate = !1, attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes);
			didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
		}
		else didReceiveUpdate = !1, isHydrating && 0 !== (workInProgress.flags & 1048576) && pushTreeId(workInProgress, treeForkCount, workInProgress.index);
		workInProgress.lanes = 0;
		switch (workInProgress.tag) {
			case 16:
				a: {
					var props = workInProgress.pendingProps;
					current = resolveLazy(workInProgress.elementType);
					workInProgress.type = current;
					if ("function" === typeof current) shouldConstruct(current) ? (props = resolveClassComponentProps(current, props), workInProgress.tag = 1, workInProgress = updateClassComponent(null, workInProgress, current, props, renderLanes)) : (workInProgress.tag = 0, workInProgress = updateFunctionComponent(null, workInProgress, current, props, renderLanes));
					else {
						if (void 0 !== current && null !== current) {
							var $$typeof = current.$$typeof;
							if ($$typeof === REACT_FORWARD_REF_TYPE) {
								workInProgress.tag = 11;
								workInProgress = updateForwardRef(null, workInProgress, current, props, renderLanes);
								break a;
							} else if ($$typeof === REACT_MEMO_TYPE) {
								workInProgress.tag = 14;
								workInProgress = updateMemoComponent(null, workInProgress, current, props, renderLanes);
								break a;
							}
						}
						workInProgress = getComponentNameFromType(current) || current;
						throw Error(formatProdErrorMessage(306, workInProgress, ""));
					}
				}
				return workInProgress;
			case 0: return updateFunctionComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 1: return props = workInProgress.type, $$typeof = resolveClassComponentProps(props, workInProgress.pendingProps), updateClassComponent(current, workInProgress, props, $$typeof, renderLanes);
			case 3:
				a: {
					pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
					if (null === current) throw Error(formatProdErrorMessage(387));
					props = workInProgress.pendingProps;
					var prevState = workInProgress.memoizedState;
					$$typeof = prevState.element;
					cloneUpdateQueue(current, workInProgress);
					processUpdateQueue(workInProgress, props, null, renderLanes);
					var nextState = workInProgress.memoizedState;
					props = nextState.cache;
					pushProvider(workInProgress, CacheContext, props);
					props !== prevState.cache && propagateContextChanges(workInProgress, [CacheContext], renderLanes, !0);
					suspendIfUpdateReadFromEntangledAsyncAction();
					props = nextState.element;
					if (prevState.isDehydrated) if (prevState = {
						element: props,
						isDehydrated: !1,
						cache: nextState.cache
					}, workInProgress.updateQueue.baseState = prevState, workInProgress.memoizedState = prevState, workInProgress.flags & 256) {
						workInProgress = mountHostRootWithoutHydrating(current, workInProgress, props, renderLanes);
						break a;
					} else if (props !== $$typeof) {
						$$typeof = createCapturedValueAtFiber(Error(formatProdErrorMessage(424)), workInProgress);
						queueHydrationError($$typeof);
						workInProgress = mountHostRootWithoutHydrating(current, workInProgress, props, renderLanes);
						break a;
					} else {
						current = workInProgress.stateNode.containerInfo;
						switch (current.nodeType) {
							case 9:
								current = current.body;
								break;
							default: current = "HTML" === current.nodeName ? current.ownerDocument.body : current;
						}
						nextHydratableInstance = getNextHydratable(current.firstChild);
						hydrationParentFiber = workInProgress;
						isHydrating = !0;
						hydrationErrors = null;
						rootOrSingletonContext = !0;
						renderLanes = mountChildFibers(workInProgress, null, props, renderLanes);
						for (workInProgress.child = renderLanes; renderLanes;) renderLanes.flags = renderLanes.flags & -3 | 4096, renderLanes = renderLanes.sibling;
					}
					else {
						resetHydrationState();
						if (props === $$typeof) {
							workInProgress = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
							break a;
						}
						reconcileChildren(current, workInProgress, props, renderLanes);
					}
					workInProgress = workInProgress.child;
				}
				return workInProgress;
			case 26: return markRef(current, workInProgress), null === current ? (renderLanes = getResource(workInProgress.type, null, workInProgress.pendingProps, null)) ? workInProgress.memoizedState = renderLanes : isHydrating || (renderLanes = workInProgress.type, current = workInProgress.pendingProps, props = getOwnerDocumentFromRootContainer(rootInstanceStackCursor.current).createElement(renderLanes), props[internalInstanceKey] = workInProgress, props[internalPropsKey] = current, setInitialProperties(props, renderLanes, current), markNodeAsHoistable(props), workInProgress.stateNode = props) : workInProgress.memoizedState = getResource(workInProgress.type, current.memoizedProps, workInProgress.pendingProps, current.memoizedState), null;
			case 27: return pushHostContext(workInProgress), null === current && isHydrating && (props = workInProgress.stateNode = resolveSingletonInstance(workInProgress.type, workInProgress.pendingProps, rootInstanceStackCursor.current), hydrationParentFiber = workInProgress, rootOrSingletonContext = !0, $$typeof = nextHydratableInstance, isSingletonScope(workInProgress.type) ? (previousHydratableOnEnteringScopedSingleton = $$typeof, nextHydratableInstance = getNextHydratable(props.firstChild)) : nextHydratableInstance = $$typeof), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), markRef(current, workInProgress), null === current && (workInProgress.flags |= 4194304), workInProgress.child;
			case 5:
				if (null === current && isHydrating) {
					if ($$typeof = props = nextHydratableInstance) props = canHydrateInstance(props, workInProgress.type, workInProgress.pendingProps, rootOrSingletonContext), null !== props ? (workInProgress.stateNode = props, hydrationParentFiber = workInProgress, nextHydratableInstance = getNextHydratable(props.firstChild), rootOrSingletonContext = !1, $$typeof = !0) : $$typeof = !1;
					$$typeof || throwOnHydrationMismatch(workInProgress);
				}
				pushHostContext(workInProgress);
				$$typeof = workInProgress.type;
				prevState = workInProgress.pendingProps;
				nextState = null !== current ? current.memoizedProps : null;
				props = prevState.children;
				shouldSetTextContent($$typeof, prevState) ? props = null : null !== nextState && shouldSetTextContent($$typeof, nextState) && (workInProgress.flags |= 32);
				null !== workInProgress.memoizedState && ($$typeof = renderWithHooks(current, workInProgress, TransitionAwareHostComponent, null, null, renderLanes), HostTransitionContext._currentValue = $$typeof);
				markRef(current, workInProgress);
				reconcileChildren(current, workInProgress, props, renderLanes);
				return workInProgress.child;
			case 6:
				if (null === current && isHydrating) {
					if (current = renderLanes = nextHydratableInstance) renderLanes = canHydrateTextInstance(renderLanes, workInProgress.pendingProps, rootOrSingletonContext), null !== renderLanes ? (workInProgress.stateNode = renderLanes, hydrationParentFiber = workInProgress, nextHydratableInstance = null, current = !0) : current = !1;
					current || throwOnHydrationMismatch(workInProgress);
				}
				return null;
			case 13: return updateSuspenseComponent(current, workInProgress, renderLanes);
			case 4: return pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo), props = workInProgress.pendingProps, null === current ? workInProgress.child = reconcileChildFibers(workInProgress, null, props, renderLanes) : reconcileChildren(current, workInProgress, props, renderLanes), workInProgress.child;
			case 11: return updateForwardRef(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 7: return reconcileChildren(current, workInProgress, workInProgress.pendingProps, renderLanes), workInProgress.child;
			case 8: return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 12: return reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 10: return props = workInProgress.pendingProps, pushProvider(workInProgress, workInProgress.type, props.value), reconcileChildren(current, workInProgress, props.children, renderLanes), workInProgress.child;
			case 9: return $$typeof = workInProgress.type._context, props = workInProgress.pendingProps.children, prepareToReadContext(workInProgress), $$typeof = readContext($$typeof), props = props($$typeof), workInProgress.flags |= 1, reconcileChildren(current, workInProgress, props, renderLanes), workInProgress.child;
			case 14: return updateMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 15: return updateSimpleMemoComponent(current, workInProgress, workInProgress.type, workInProgress.pendingProps, renderLanes);
			case 19: return updateSuspenseListComponent(current, workInProgress, renderLanes);
			case 31: return updateActivityComponent(current, workInProgress, renderLanes);
			case 22: return updateOffscreenComponent(current, workInProgress, renderLanes, workInProgress.pendingProps);
			case 24: return prepareToReadContext(workInProgress), props = readContext(CacheContext), null === current ? ($$typeof = peekCacheFromPool(), null === $$typeof && ($$typeof = workInProgressRoot, prevState = createCache(), $$typeof.pooledCache = prevState, prevState.refCount++, null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes), $$typeof = prevState), workInProgress.memoizedState = {
				parent: props,
				cache: $$typeof
			}, initializeUpdateQueue(workInProgress), pushProvider(workInProgress, CacheContext, $$typeof)) : (0 !== (current.lanes & renderLanes) && (cloneUpdateQueue(current, workInProgress), processUpdateQueue(workInProgress, null, null, renderLanes), suspendIfUpdateReadFromEntangledAsyncAction()), $$typeof = current.memoizedState, prevState = workInProgress.memoizedState, $$typeof.parent !== props ? ($$typeof = {
				parent: props,
				cache: props
			}, workInProgress.memoizedState = $$typeof, 0 === workInProgress.lanes && (workInProgress.memoizedState = workInProgress.updateQueue.baseState = $$typeof), pushProvider(workInProgress, CacheContext, props)) : (props = prevState.cache, pushProvider(workInProgress, CacheContext, props), props !== $$typeof.cache && propagateContextChanges(workInProgress, [CacheContext], renderLanes, !0))), reconcileChildren(current, workInProgress, workInProgress.pendingProps.children, renderLanes), workInProgress.child;
			case 29: throw workInProgress.pendingProps;
		}
		throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
		workInProgress.flags |= 4;
	}
	function preloadInstanceAndSuspendIfNeeded(workInProgress, type, oldProps, newProps, renderLanes) {
		if (type = 0 !== (workInProgress.mode & 32)) type = !1;
		if (type) {
			if (workInProgress.flags |= 16777216, (renderLanes & 335544128) === renderLanes) if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
			else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
			else throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
		} else workInProgress.flags &= -16777217;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
		if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4)) workInProgress.flags &= -16777217;
		else if (workInProgress.flags |= 16777216, !preloadResource(resource)) if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
		else throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
		null !== retryQueue && (workInProgress.flags |= 4);
		workInProgress.flags & 16384 && (retryQueue = 22 !== workInProgress.tag ? claimNextRetryLane() : 536870912, workInProgress.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
		if (!isHydrating) switch (renderState.tailMode) {
			case "hidden":
				hasRenderedATailFallback = renderState.tail;
				for (var lastTailNode = null; null !== hasRenderedATailFallback;) null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
				null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
				break;
			case "collapsed":
				lastTailNode = renderState.tail;
				for (var lastTailNode$106 = null; null !== lastTailNode;) null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode), lastTailNode = lastTailNode.sibling;
				null === lastTailNode$106 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$106.sibling = null;
		}
	}
	function bubbleProperties(completedWork) {
		var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
		if (didBailout) for (var child$107 = completedWork.child; null !== child$107;) newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags & 65011712, subtreeFlags |= child$107.flags & 65011712, child$107.return = completedWork, child$107 = child$107.sibling;
		else for (child$107 = completedWork.child; null !== child$107;) newChildLanes |= child$107.lanes | child$107.childLanes, subtreeFlags |= child$107.subtreeFlags, subtreeFlags |= child$107.flags, child$107.return = completedWork, child$107 = child$107.sibling;
		completedWork.subtreeFlags |= subtreeFlags;
		completedWork.childLanes = newChildLanes;
		return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
		var newProps = workInProgress.pendingProps;
		popTreeContext(workInProgress);
		switch (workInProgress.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return bubbleProperties(workInProgress), null;
			case 1: return bubbleProperties(workInProgress), null;
			case 3:
				renderLanes = workInProgress.stateNode;
				newProps = null;
				null !== current && (newProps = current.memoizedState.cache);
				workInProgress.memoizedState.cache !== newProps && (workInProgress.flags |= 2048);
				popProvider(CacheContext);
				popHostContainer();
				renderLanes.pendingContext && (renderLanes.context = renderLanes.pendingContext, renderLanes.pendingContext = null);
				if (null === current || null === current.child) popHydrationState(workInProgress) ? markUpdate(workInProgress) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress.flags & 256) || (workInProgress.flags |= 1024, upgradeHydrationErrorsToRecoverable());
				bubbleProperties(workInProgress);
				return null;
			case 26:
				var type = workInProgress.type, nextResource = workInProgress.memoizedState;
				null === current ? (markUpdate(workInProgress), null !== nextResource ? (bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, nextResource)) : (bubbleProperties(workInProgress), preloadInstanceAndSuspendIfNeeded(workInProgress, type, null, newProps, renderLanes))) : nextResource ? nextResource !== current.memoizedState ? (markUpdate(workInProgress), bubbleProperties(workInProgress), preloadResourceAndSuspendIfNeeded(workInProgress, nextResource)) : (bubbleProperties(workInProgress), workInProgress.flags &= -16777217) : (current = current.memoizedProps, current !== newProps && markUpdate(workInProgress), bubbleProperties(workInProgress), preloadInstanceAndSuspendIfNeeded(workInProgress, type, current, newProps, renderLanes));
				return null;
			case 27:
				popHostContext(workInProgress);
				renderLanes = rootInstanceStackCursor.current;
				type = workInProgress.type;
				if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if (!newProps) {
						if (null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
						bubbleProperties(workInProgress);
						return null;
					}
					current = contextStackCursor.current;
					popHydrationState(workInProgress) ? prepareToHydrateHostInstance(workInProgress, current) : (current = resolveSingletonInstance(type, newProps, renderLanes), workInProgress.stateNode = current, markUpdate(workInProgress));
				}
				bubbleProperties(workInProgress);
				return null;
			case 5:
				popHostContext(workInProgress);
				type = workInProgress.type;
				if (null !== current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if (!newProps) {
						if (null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
						bubbleProperties(workInProgress);
						return null;
					}
					nextResource = contextStackCursor.current;
					if (popHydrationState(workInProgress)) prepareToHydrateHostInstance(workInProgress, nextResource);
					else {
						var ownerDocument = getOwnerDocumentFromRootContainer(rootInstanceStackCursor.current);
						switch (nextResource) {
							case 1:
								nextResource = ownerDocument.createElementNS("http://www.w3.org/2000/svg", type);
								break;
							case 2:
								nextResource = ownerDocument.createElementNS("http://www.w3.org/1998/Math/MathML", type);
								break;
							default: switch (type) {
								case "svg":
									nextResource = ownerDocument.createElementNS("http://www.w3.org/2000/svg", type);
									break;
								case "math":
									nextResource = ownerDocument.createElementNS("http://www.w3.org/1998/Math/MathML", type);
									break;
								case "script":
									nextResource = ownerDocument.createElement("div");
									nextResource.innerHTML = "<script><\/script>";
									nextResource = nextResource.removeChild(nextResource.firstChild);
									break;
								case "select":
									nextResource = "string" === typeof newProps.is ? ownerDocument.createElement("select", { is: newProps.is }) : ownerDocument.createElement("select");
									newProps.multiple ? nextResource.multiple = !0 : newProps.size && (nextResource.size = newProps.size);
									break;
								default: nextResource = "string" === typeof newProps.is ? ownerDocument.createElement(type, { is: newProps.is }) : ownerDocument.createElement(type);
							}
						}
						nextResource[internalInstanceKey] = workInProgress;
						nextResource[internalPropsKey] = newProps;
						a: for (ownerDocument = workInProgress.child; null !== ownerDocument;) {
							if (5 === ownerDocument.tag || 6 === ownerDocument.tag) nextResource.appendChild(ownerDocument.stateNode);
							else if (4 !== ownerDocument.tag && 27 !== ownerDocument.tag && null !== ownerDocument.child) {
								ownerDocument.child.return = ownerDocument;
								ownerDocument = ownerDocument.child;
								continue;
							}
							if (ownerDocument === workInProgress) break a;
							for (; null === ownerDocument.sibling;) {
								if (null === ownerDocument.return || ownerDocument.return === workInProgress) break a;
								ownerDocument = ownerDocument.return;
							}
							ownerDocument.sibling.return = ownerDocument.return;
							ownerDocument = ownerDocument.sibling;
						}
						workInProgress.stateNode = nextResource;
						a: switch (setInitialProperties(nextResource, type, newProps), type) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								newProps = !!newProps.autoFocus;
								break a;
							case "img":
								newProps = !0;
								break a;
							default: newProps = !1;
						}
						newProps && markUpdate(workInProgress);
					}
				}
				bubbleProperties(workInProgress);
				preloadInstanceAndSuspendIfNeeded(workInProgress, workInProgress.type, null === current ? null : current.memoizedProps, workInProgress.pendingProps, renderLanes);
				return null;
			case 6:
				if (current && null != workInProgress.stateNode) current.memoizedProps !== newProps && markUpdate(workInProgress);
				else {
					if ("string" !== typeof newProps && null === workInProgress.stateNode) throw Error(formatProdErrorMessage(166));
					current = rootInstanceStackCursor.current;
					if (popHydrationState(workInProgress)) {
						current = workInProgress.stateNode;
						renderLanes = workInProgress.memoizedProps;
						newProps = null;
						type = hydrationParentFiber;
						if (null !== type) switch (type.tag) {
							case 27:
							case 5: newProps = type.memoizedProps;
						}
						current[internalInstanceKey] = workInProgress;
						current = current.nodeValue === renderLanes || null !== newProps && !0 === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes) ? !0 : !1;
						current || throwOnHydrationMismatch(workInProgress, !0);
					} else current = getOwnerDocumentFromRootContainer(current).createTextNode(newProps), current[internalInstanceKey] = workInProgress, workInProgress.stateNode = current;
				}
				bubbleProperties(workInProgress);
				return null;
			case 31:
				renderLanes = workInProgress.memoizedState;
				if (null === current || null !== current.memoizedState) {
					newProps = popHydrationState(workInProgress);
					if (null !== renderLanes) {
						if (null === current) {
							if (!newProps) throw Error(formatProdErrorMessage(318));
							current = workInProgress.memoizedState;
							current = null !== current ? current.dehydrated : null;
							if (!current) throw Error(formatProdErrorMessage(557));
							current[internalInstanceKey] = workInProgress;
						} else resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4;
						bubbleProperties(workInProgress);
						current = !1;
					} else renderLanes = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = renderLanes), current = !0;
					if (!current) {
						if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
						popSuspenseHandler(workInProgress);
						return null;
					}
					if (0 !== (workInProgress.flags & 128)) throw Error(formatProdErrorMessage(558));
				}
				bubbleProperties(workInProgress);
				return null;
			case 13:
				newProps = workInProgress.memoizedState;
				if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
					type = popHydrationState(workInProgress);
					if (null !== newProps && null !== newProps.dehydrated) {
						if (null === current) {
							if (!type) throw Error(formatProdErrorMessage(318));
							type = workInProgress.memoizedState;
							type = null !== type ? type.dehydrated : null;
							if (!type) throw Error(formatProdErrorMessage(317));
							type[internalInstanceKey] = workInProgress;
						} else resetHydrationState(), 0 === (workInProgress.flags & 128) && (workInProgress.memoizedState = null), workInProgress.flags |= 4;
						bubbleProperties(workInProgress);
						type = !1;
					} else type = upgradeHydrationErrorsToRecoverable(), null !== current && null !== current.memoizedState && (current.memoizedState.hydrationErrors = type), type = !0;
					if (!type) {
						if (workInProgress.flags & 256) return popSuspenseHandler(workInProgress), workInProgress;
						popSuspenseHandler(workInProgress);
						return null;
					}
				}
				popSuspenseHandler(workInProgress);
				if (0 !== (workInProgress.flags & 128)) return workInProgress.lanes = renderLanes, workInProgress;
				renderLanes = null !== newProps;
				current = null !== current && null !== current.memoizedState;
				renderLanes && (newProps = workInProgress.child, type = null, null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool), nextResource = null, null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (nextResource = newProps.memoizedState.cachePool.pool), nextResource !== type && (newProps.flags |= 2048));
				renderLanes !== current && renderLanes && (workInProgress.child.flags |= 8192);
				scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
				bubbleProperties(workInProgress);
				return null;
			case 4: return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress.stateNode.containerInfo), bubbleProperties(workInProgress), null;
			case 10: return popProvider(workInProgress.type), bubbleProperties(workInProgress), null;
			case 19:
				pop(suspenseStackCursor);
				newProps = workInProgress.memoizedState;
				if (null === newProps) return bubbleProperties(workInProgress), null;
				type = 0 !== (workInProgress.flags & 128);
				nextResource = newProps.rendering;
				if (null === nextResource) if (type) cutOffTailIfNeeded(newProps, !1);
				else {
					if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128)) for (current = workInProgress.child; null !== current;) {
						nextResource = findFirstSuspended(current);
						if (null !== nextResource) {
							workInProgress.flags |= 128;
							cutOffTailIfNeeded(newProps, !1);
							current = nextResource.updateQueue;
							workInProgress.updateQueue = current;
							scheduleRetryEffect(workInProgress, current);
							workInProgress.subtreeFlags = 0;
							current = renderLanes;
							for (renderLanes = workInProgress.child; null !== renderLanes;) resetWorkInProgress(renderLanes, current), renderLanes = renderLanes.sibling;
							push(suspenseStackCursor, suspenseStackCursor.current & 1 | 2);
							isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount);
							return workInProgress.child;
						}
						current = current.sibling;
					}
					null !== newProps.tail && now() > workInProgressRootRenderTargetTime && (workInProgress.flags |= 128, type = !0, cutOffTailIfNeeded(newProps, !1), workInProgress.lanes = 4194304);
				}
				else {
					if (!type) if (current = findFirstSuspended(nextResource), null !== current) {
						if (workInProgress.flags |= 128, type = !0, current = current.updateQueue, workInProgress.updateQueue = current, scheduleRetryEffect(workInProgress, current), cutOffTailIfNeeded(newProps, !0), null === newProps.tail && "hidden" === newProps.tailMode && !nextResource.alternate && !isHydrating) return bubbleProperties(workInProgress), null;
					} else 2 * now() - newProps.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes && (workInProgress.flags |= 128, type = !0, cutOffTailIfNeeded(newProps, !1), workInProgress.lanes = 4194304);
					newProps.isBackwards ? (nextResource.sibling = workInProgress.child, workInProgress.child = nextResource) : (current = newProps.last, null !== current ? current.sibling = nextResource : workInProgress.child = nextResource, newProps.last = nextResource);
				}
				if (null !== newProps.tail) return current = newProps.tail, newProps.rendering = current, newProps.tail = current.sibling, newProps.renderingStartTime = now(), current.sibling = null, renderLanes = suspenseStackCursor.current, push(suspenseStackCursor, type ? renderLanes & 1 | 2 : renderLanes & 1), isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount), current;
				bubbleProperties(workInProgress);
				return null;
			case 22:
			case 23: return popSuspenseHandler(workInProgress), popHiddenContext(), newProps = null !== workInProgress.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress.flags |= 8192) : newProps && (workInProgress.flags |= 8192), newProps ? 0 !== (renderLanes & 536870912) && 0 === (workInProgress.flags & 128) && (bubbleProperties(workInProgress), workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192)) : bubbleProperties(workInProgress), renderLanes = workInProgress.updateQueue, null !== renderLanes && scheduleRetryEffect(workInProgress, renderLanes.retryQueue), renderLanes = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress.memoizedState && null !== workInProgress.memoizedState.cachePool && (newProps = workInProgress.memoizedState.cachePool.pool), newProps !== renderLanes && (workInProgress.flags |= 2048), null !== current && pop(resumedCache), null;
			case 24: return renderLanes = null, null !== current && (renderLanes = current.memoizedState.cache), workInProgress.memoizedState.cache !== renderLanes && (workInProgress.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
		popTreeContext(workInProgress);
		switch (workInProgress.tag) {
			case 1: return current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 3: return popProvider(CacheContext), popHostContainer(), current = workInProgress.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 26:
			case 27:
			case 5: return popHostContext(workInProgress), null;
			case 31:
				if (null !== workInProgress.memoizedState) {
					popSuspenseHandler(workInProgress);
					if (null === workInProgress.alternate) throw Error(formatProdErrorMessage(340));
					resetHydrationState();
				}
				current = workInProgress.flags;
				return current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 13:
				popSuspenseHandler(workInProgress);
				current = workInProgress.memoizedState;
				if (null !== current && null !== current.dehydrated) {
					if (null === workInProgress.alternate) throw Error(formatProdErrorMessage(340));
					resetHydrationState();
				}
				current = workInProgress.flags;
				return current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 19: return pop(suspenseStackCursor), null;
			case 4: return popHostContainer(), null;
			case 10: return popProvider(workInProgress.type), null;
			case 22:
			case 23: return popSuspenseHandler(workInProgress), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress.flags, current & 65536 ? (workInProgress.flags = current & -65537 | 128, workInProgress) : null;
			case 24: return popProvider(CacheContext), null;
			case 25: return null;
			default: return null;
		}
	}
	function unwindInterruptedWork(current, interruptedWork) {
		popTreeContext(interruptedWork);
		switch (interruptedWork.tag) {
			case 3:
				popProvider(CacheContext);
				popHostContainer();
				break;
			case 26:
			case 27:
			case 5:
				popHostContext(interruptedWork);
				break;
			case 4:
				popHostContainer();
				break;
			case 31:
				null !== interruptedWork.memoizedState && popSuspenseHandler(interruptedWork);
				break;
			case 13:
				popSuspenseHandler(interruptedWork);
				break;
			case 19:
				pop(suspenseStackCursor);
				break;
			case 10:
				popProvider(interruptedWork.type);
				break;
			case 22:
			case 23:
				popSuspenseHandler(interruptedWork);
				popHiddenContext();
				null !== current && pop(resumedCache);
				break;
			case 24: popProvider(CacheContext);
		}
	}
	function commitHookEffectListMount(flags, finishedWork) {
		try {
			var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
			if (null !== lastEffect) {
				var firstEffect = lastEffect.next;
				updateQueue = firstEffect;
				do {
					if ((updateQueue.tag & flags) === flags) {
						lastEffect = void 0;
						var create = updateQueue.create, inst = updateQueue.inst;
						lastEffect = create();
						inst.destroy = lastEffect;
					}
					updateQueue = updateQueue.next;
				} while (updateQueue !== firstEffect);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
		try {
			var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
			if (null !== lastEffect) {
				var firstEffect = lastEffect.next;
				updateQueue = firstEffect;
				do {
					if ((updateQueue.tag & flags) === flags) {
						var inst = updateQueue.inst, destroy = inst.destroy;
						if (void 0 !== destroy) {
							inst.destroy = void 0;
							lastEffect = finishedWork;
							var nearestMountedAncestor = nearestMountedAncestor$jscomp$0, destroy_ = destroy;
							try {
								destroy_();
							} catch (error) {
								captureCommitPhaseError(lastEffect, nearestMountedAncestor, error);
							}
						}
					}
					updateQueue = updateQueue.next;
				} while (updateQueue !== firstEffect);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitClassCallbacks(finishedWork) {
		var updateQueue = finishedWork.updateQueue;
		if (null !== updateQueue) {
			var instance = finishedWork.stateNode;
			try {
				commitCallbacks(updateQueue, instance);
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
		}
	}
	function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
		instance.props = resolveClassComponentProps(current.type, current.memoizedProps);
		instance.state = current.memoizedState;
		try {
			instance.componentWillUnmount();
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		}
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
		try {
			var ref = current.ref;
			if (null !== ref) {
				switch (current.tag) {
					case 26:
					case 27:
					case 5:
						var instanceToUse = current.stateNode;
						break;
					case 30:
						instanceToUse = current.stateNode;
						break;
					default: instanceToUse = current.stateNode;
				}
				"function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
			}
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		}
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
		var ref = current.ref, refCleanup = current.refCleanup;
		if (null !== ref) if ("function" === typeof refCleanup) try {
			refCleanup();
		} catch (error) {
			captureCommitPhaseError(current, nearestMountedAncestor, error);
		} finally {
			current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
		}
		else if ("function" === typeof ref) try {
			ref(null);
		} catch (error$140) {
			captureCommitPhaseError(current, nearestMountedAncestor, error$140);
		}
		else ref.current = null;
	}
	function commitHostMount(finishedWork) {
		var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
		try {
			a: switch (type) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					props.autoFocus && instance.focus();
					break a;
				case "img": props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
			}
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
		try {
			var domElement = finishedWork.stateNode;
			updateProperties(domElement, finishedWork.type, oldProps, newProps);
			domElement[internalPropsKey] = newProps;
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function isHostParent(fiber) {
		return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag && isSingletonScope(fiber.type) || 4 === fiber.tag;
	}
	function getHostSibling(fiber) {
		a: for (;;) {
			for (; null === fiber.sibling;) {
				if (null === fiber.return || isHostParent(fiber.return)) return null;
				fiber = fiber.return;
			}
			fiber.sibling.return = fiber.return;
			for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;) {
				if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
				if (fiber.flags & 2) continue a;
				if (null === fiber.child || 4 === fiber.tag) continue a;
				else fiber.child.return = fiber, fiber = fiber.child;
			}
			if (!(fiber.flags & 2)) return fiber.stateNode;
		}
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
		var tag = node.tag;
		if (5 === tag || 6 === tag) node = node.stateNode, before ? (9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent).insertBefore(node, before) : (before = 9 === parent.nodeType ? parent.body : "HTML" === parent.nodeName ? parent.ownerDocument.body : parent, before.appendChild(node), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
		else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode, before = null), node = node.child, null !== node)) for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node;) insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
	}
	function insertOrAppendPlacementNode(node, before, parent) {
		var tag = node.tag;
		if (5 === tag || 6 === tag) node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
		else if (4 !== tag && (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode), node = node.child, null !== node)) for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node;) insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	}
	function commitHostSingletonAcquisition(finishedWork) {
		var singleton = finishedWork.stateNode, props = finishedWork.memoizedProps;
		try {
			for (var type = finishedWork.type, attributes = singleton.attributes; attributes.length;) singleton.removeAttributeNode(attributes[0]);
			setInitialProperties(singleton, type, props);
			singleton[internalInstanceKey] = finishedWork;
			singleton[internalPropsKey] = props;
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	var offscreenSubtreeIsHidden = !1, offscreenSubtreeWasHidden = !1, needsFormReset = !1, PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set, nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
		root = root.containerInfo;
		eventsEnabled = _enabled;
		root = getActiveElementDeep(root);
		if (hasSelectionCapabilities(root)) {
			if ("selectionStart" in root) var JSCompiler_temp = {
				start: root.selectionStart,
				end: root.selectionEnd
			};
			else a: {
				JSCompiler_temp = (JSCompiler_temp = root.ownerDocument) && JSCompiler_temp.defaultView || window;
				var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
				if (selection && 0 !== selection.rangeCount) {
					JSCompiler_temp = selection.anchorNode;
					var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
					selection = selection.focusOffset;
					try {
						JSCompiler_temp.nodeType, focusNode.nodeType;
					} catch (e$20) {
						JSCompiler_temp = null;
						break a;
					}
					var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root, parentNode = null;
					b: for (;;) {
						for (var next;;) {
							node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
							node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
							3 === node.nodeType && (length += node.nodeValue.length);
							if (null === (next = node.firstChild)) break;
							parentNode = node;
							node = next;
						}
						for (;;) {
							if (node === root) break b;
							parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
							parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
							if (null !== (next = node.nextSibling)) break;
							node = parentNode;
							parentNode = node.parentNode;
						}
						node = next;
					}
					JSCompiler_temp = -1 === start || -1 === end ? null : {
						start,
						end
					};
				} else JSCompiler_temp = null;
			}
			JSCompiler_temp = JSCompiler_temp || {
				start: 0,
				end: 0
			};
		} else JSCompiler_temp = null;
		selectionInformation = {
			focusedElem: root,
			selectionRange: JSCompiler_temp
		};
		_enabled = !1;
		for (nextEffect = firstChild; null !== nextEffect;) if (firstChild = nextEffect, root = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root) root.return = firstChild, nextEffect = root;
		else for (; null !== nextEffect;) {
			firstChild = nextEffect;
			focusNode = firstChild.alternate;
			root = firstChild.flags;
			switch (firstChild.tag) {
				case 0:
					if (0 !== (root & 4) && (root = firstChild.updateQueue, root = null !== root ? root.events : null, null !== root)) for (JSCompiler_temp = 0; JSCompiler_temp < root.length; JSCompiler_temp++) anchorOffset = root[JSCompiler_temp], anchorOffset.ref.impl = anchorOffset.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (0 !== (root & 1024) && null !== focusNode) {
						root = void 0;
						JSCompiler_temp = firstChild;
						anchorOffset = focusNode.memoizedProps;
						focusNode = focusNode.memoizedState;
						selection = JSCompiler_temp.stateNode;
						try {
							var resolvedPrevProps = resolveClassComponentProps(JSCompiler_temp.type, anchorOffset);
							root = selection.getSnapshotBeforeUpdate(resolvedPrevProps, focusNode);
							selection.__reactInternalSnapshotBeforeUpdate = root;
						} catch (error) {
							captureCommitPhaseError(JSCompiler_temp, JSCompiler_temp.return, error);
						}
					}
					break;
				case 3:
					if (0 !== (root & 1024)) {
						if (root = firstChild.stateNode.containerInfo, JSCompiler_temp = root.nodeType, 9 === JSCompiler_temp) clearContainerSparingly(root);
						else if (1 === JSCompiler_temp) switch (root.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								clearContainerSparingly(root);
								break;
							default: root.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
			}
			root = firstChild.sibling;
			if (null !== root) {
				root.return = firstChild.return;
				nextEffect = root;
				break;
			}
			nextEffect = firstChild.return;
		}
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
		var flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitHookEffectListMount(5, finishedWork);
				break;
			case 1:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				if (flags & 4) if (finishedRoot = finishedWork.stateNode, null === current) try {
					finishedRoot.componentDidMount();
				} catch (error) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error);
				}
				else {
					var prevProps = resolveClassComponentProps(finishedWork.type, current.memoizedProps);
					current = current.memoizedState;
					try {
						finishedRoot.componentDidUpdate(prevProps, current, finishedRoot.__reactInternalSnapshotBeforeUpdate);
					} catch (error$139) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error$139);
					}
				}
				flags & 64 && commitClassCallbacks(finishedWork);
				flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
				break;
			case 3:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				if (flags & 64 && (finishedRoot = finishedWork.updateQueue, null !== finishedRoot)) {
					current = null;
					if (null !== finishedWork.child) switch (finishedWork.child.tag) {
						case 27:
						case 5:
							current = finishedWork.child.stateNode;
							break;
						case 1: current = finishedWork.child.stateNode;
					}
					try {
						commitCallbacks(finishedRoot, current);
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				break;
			case 27: null === current && flags & 4 && commitHostSingletonAcquisition(finishedWork);
			case 26:
			case 5:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				null === current && flags & 4 && commitHostMount(finishedWork);
				flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
				break;
			case 12:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				break;
			case 31:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
				break;
			case 13:
				recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
				flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
				flags & 64 && (finishedRoot = finishedWork.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot && (finishedWork = retryDehydratedSuspenseBoundary.bind(null, finishedWork), registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
				break;
			case 22:
				flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
				if (!flags) {
					current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
					prevProps = offscreenSubtreeIsHidden;
					var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
					offscreenSubtreeIsHidden = flags;
					(offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, 0 !== (finishedWork.subtreeFlags & 8772)) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
					offscreenSubtreeIsHidden = prevProps;
					offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
				}
				break;
			case 30: break;
			default: recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
		}
	}
	function detachFiberAfterEffects(fiber) {
		var alternate = fiber.alternate;
		null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
		fiber.child = null;
		fiber.deletions = null;
		fiber.sibling = null;
		5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
		fiber.stateNode = null;
		fiber.return = null;
		fiber.dependencies = null;
		fiber.memoizedProps = null;
		fiber.memoizedState = null;
		fiber.pendingProps = null;
		fiber.stateNode = null;
		fiber.updateQueue = null;
	}
	var hostParent = null, hostParentIsContainer = !1;
	function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
		for (parent = parent.child; null !== parent;) commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
	}
	function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
		if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount) try {
			injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
		} catch (err) {}
		switch (deletedFiber.tag) {
			case 26:
				offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
				break;
			case 27:
				offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
				var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
				isSingletonScope(deletedFiber.type) && (hostParent = deletedFiber.stateNode, hostParentIsContainer = !1);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				releaseSingletonInstance(deletedFiber.stateNode);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				break;
			case 5: offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
			case 6:
				prevHostParent = hostParent;
				prevHostParentIsContainer = hostParentIsContainer;
				hostParent = null;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				if (null !== hostParent) if (hostParentIsContainer) try {
					(9 === hostParent.nodeType ? hostParent.body : "HTML" === hostParent.nodeName ? hostParent.ownerDocument.body : hostParent).removeChild(deletedFiber.stateNode);
				} catch (error) {
					captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
				}
				else try {
					hostParent.removeChild(deletedFiber.stateNode);
				} catch (error) {
					captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
				}
				break;
			case 18:
				null !== hostParent && (hostParentIsContainer ? (finishedRoot = hostParent, clearHydrationBoundary(9 === finishedRoot.nodeType ? finishedRoot.body : "HTML" === finishedRoot.nodeName ? finishedRoot.ownerDocument.body : finishedRoot, deletedFiber.stateNode), retryIfBlockedOn(finishedRoot)) : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
				break;
			case 4:
				prevHostParent = hostParent;
				prevHostParentIsContainer = hostParentIsContainer;
				hostParent = deletedFiber.stateNode.containerInfo;
				hostParentIsContainer = !0;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				hostParent = prevHostParent;
				hostParentIsContainer = prevHostParentIsContainer;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
				offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 1:
				offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(deletedFiber, nearestMountedAncestor, prevHostParent));
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 21:
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				break;
			case 22:
				offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
				recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
				offscreenSubtreeWasHidden = prevHostParent;
				break;
			default: recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
		}
	}
	function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
		if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot))) {
			finishedRoot = finishedRoot.dehydrated;
			try {
				retryIfBlockedOn(finishedRoot);
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
		}
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
		if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot)))) try {
			retryIfBlockedOn(finishedRoot);
		} catch (error) {
			captureCommitPhaseError(finishedWork, finishedWork.return, error);
		}
	}
	function getRetryCache(finishedWork) {
		switch (finishedWork.tag) {
			case 31:
			case 13:
			case 19:
				var retryCache = finishedWork.stateNode;
				null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
				return retryCache;
			case 22: return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
			default: throw Error(formatProdErrorMessage(435, finishedWork.tag));
		}
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
		var retryCache = getRetryCache(finishedWork);
		wakeables.forEach(function(wakeable) {
			if (!retryCache.has(wakeable)) {
				retryCache.add(wakeable);
				var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
				wakeable.then(retry, retry);
			}
		});
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
		var deletions = parentFiber.deletions;
		if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
			var childToDelete = deletions[i], root = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
			a: for (; null !== parent;) {
				switch (parent.tag) {
					case 27:
						if (isSingletonScope(parent.type)) {
							hostParent = parent.stateNode;
							hostParentIsContainer = !1;
							break a;
						}
						break;
					case 5:
						hostParent = parent.stateNode;
						hostParentIsContainer = !1;
						break a;
					case 3:
					case 4:
						hostParent = parent.stateNode.containerInfo;
						hostParentIsContainer = !0;
						break a;
				}
				parent = parent.return;
			}
			if (null === hostParent) throw Error(formatProdErrorMessage(160));
			commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
			hostParent = null;
			hostParentIsContainer = !1;
			root = childToDelete.alternate;
			null !== root && (root.return = null);
			childToDelete.return = null;
		}
		if (parentFiber.subtreeFlags & 13886) for (parentFiber = parentFiber.child; null !== parentFiber;) commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
		var current = finishedWork.alternate, flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
				break;
			case 1:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
				break;
			case 26:
				var hoistableRoot = currentHoistableRoot;
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				if (flags & 4) {
					var currentResource = null !== current ? current.memoizedState : null;
					flags = finishedWork.memoizedState;
					if (null === current) if (null === flags) if (null === finishedWork.stateNode) {
						a: {
							flags = finishedWork.type;
							current = finishedWork.memoizedProps;
							hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
							b: switch (flags) {
								case "title":
									currentResource = hoistableRoot.getElementsByTagName("title")[0];
									if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop")) currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(currentResource, hoistableRoot.querySelector("head > title"));
									setInitialProperties(currentResource, flags, current);
									currentResource[internalInstanceKey] = finishedWork;
									markNodeAsHoistable(currentResource);
									flags = currentResource;
									break a;
								case "link":
									var maybeNodes = getHydratableHoistableCache("link", "href", hoistableRoot).get(flags + (current.href || ""));
									if (maybeNodes) {
										for (var i = 0; i < maybeNodes.length; i++) if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href || "" === current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
											maybeNodes.splice(i, 1);
											break b;
										}
									}
									currentResource = hoistableRoot.createElement(flags);
									setInitialProperties(currentResource, flags, current);
									hoistableRoot.head.appendChild(currentResource);
									break;
								case "meta":
									if (maybeNodes = getHydratableHoistableCache("meta", "content", hoistableRoot).get(flags + (current.content || ""))) {
										for (i = 0; i < maybeNodes.length; i++) if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
											maybeNodes.splice(i, 1);
											break b;
										}
									}
									currentResource = hoistableRoot.createElement(flags);
									setInitialProperties(currentResource, flags, current);
									hoistableRoot.head.appendChild(currentResource);
									break;
								default: throw Error(formatProdErrorMessage(468, flags));
							}
							currentResource[internalInstanceKey] = finishedWork;
							markNodeAsHoistable(currentResource);
							flags = currentResource;
						}
						finishedWork.stateNode = flags;
					} else mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode);
					else finishedWork.stateNode = acquireResource(hoistableRoot, flags, finishedWork.memoizedProps);
					else currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(hoistableRoot, finishedWork.type, finishedWork.stateNode) : acquireResource(hoistableRoot, flags, finishedWork.memoizedProps)) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
				}
				break;
			case 27:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				null !== current && flags & 4 && commitHostUpdate(finishedWork, finishedWork.memoizedProps, current.memoizedProps);
				break;
			case 5:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
				if (finishedWork.flags & 32) {
					hoistableRoot = finishedWork.stateNode;
					try {
						setTextContent(hoistableRoot, "");
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(finishedWork, hoistableRoot, null !== current ? current.memoizedProps : hoistableRoot));
				flags & 1024 && (needsFormReset = !0);
				break;
			case 6:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				if (flags & 4) {
					if (null === finishedWork.stateNode) throw Error(formatProdErrorMessage(162));
					flags = finishedWork.memoizedProps;
					current = finishedWork.stateNode;
					try {
						current.nodeValue = flags;
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				}
				break;
			case 3:
				tagCaches = null;
				hoistableRoot = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(root.containerInfo);
				recursivelyTraverseMutationEffects(root, finishedWork);
				currentHoistableRoot = hoistableRoot;
				commitReconciliationEffects(finishedWork);
				if (flags & 4 && null !== current && current.memoizedState.isDehydrated) try {
					retryIfBlockedOn(root.containerInfo);
				} catch (error) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error);
				}
				needsFormReset && (needsFormReset = !1, recursivelyResetForms(finishedWork));
				break;
			case 4:
				flags = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(finishedWork.stateNode.containerInfo);
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				currentHoistableRoot = flags;
				break;
			case 12:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				break;
			case 31:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 13:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 22:
				hoistableRoot = null !== finishedWork.memoizedState;
				var wasHidden = null !== current && null !== current.memoizedState, prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
				offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
				offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
				recursivelyTraverseMutationEffects(root, finishedWork);
				offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
				offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
				commitReconciliationEffects(finishedWork);
				if (flags & 8192) a: for (root = finishedWork.stateNode, root._visibility = hoistableRoot ? root._visibility & -2 : root._visibility | 1, hoistableRoot && (null === current || wasHidden || offscreenSubtreeIsHidden || offscreenSubtreeWasHidden || recursivelyTraverseDisappearLayoutEffects(finishedWork)), current = null, root = finishedWork;;) {
					if (5 === root.tag || 26 === root.tag) {
						if (null === current) {
							wasHidden = current = root;
							try {
								if (currentResource = wasHidden.stateNode, hoistableRoot) maybeNodes = currentResource.style, "function" === typeof maybeNodes.setProperty ? maybeNodes.setProperty("display", "none", "important") : maybeNodes.display = "none";
								else {
									i = wasHidden.stateNode;
									var styleProp = wasHidden.memoizedProps.style, display = void 0 !== styleProp && null !== styleProp && styleProp.hasOwnProperty("display") ? styleProp.display : null;
									i.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
								}
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if (6 === root.tag) {
						if (null === current) {
							wasHidden = root;
							try {
								wasHidden.stateNode.nodeValue = hoistableRoot ? "" : wasHidden.memoizedProps;
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if (18 === root.tag) {
						if (null === current) {
							wasHidden = root;
							try {
								var instance = wasHidden.stateNode;
								hoistableRoot ? hideOrUnhideDehydratedBoundary(instance, !0) : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, !1);
							} catch (error) {
								captureCommitPhaseError(wasHidden, wasHidden.return, error);
							}
						}
					} else if ((22 !== root.tag && 23 !== root.tag || null === root.memoizedState || root === finishedWork) && null !== root.child) {
						root.child.return = root;
						root = root.child;
						continue;
					}
					if (root === finishedWork) break a;
					for (; null === root.sibling;) {
						if (null === root.return || root.return === finishedWork) break a;
						current === root && (current = null);
						root = root.return;
					}
					current === root && (current = null);
					root.sibling.return = root.return;
					root = root.sibling;
				}
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
				break;
			case 19:
				recursivelyTraverseMutationEffects(root, finishedWork);
				commitReconciliationEffects(finishedWork);
				flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
				break;
			case 30: break;
			case 21: break;
			default: recursivelyTraverseMutationEffects(root, finishedWork), commitReconciliationEffects(finishedWork);
		}
	}
	function commitReconciliationEffects(finishedWork) {
		var flags = finishedWork.flags;
		if (flags & 2) {
			try {
				for (var hostParentFiber, parentFiber = finishedWork.return; null !== parentFiber;) {
					if (isHostParent(parentFiber)) {
						hostParentFiber = parentFiber;
						break;
					}
					parentFiber = parentFiber.return;
				}
				if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
				switch (hostParentFiber.tag) {
					case 27:
						var parent = hostParentFiber.stateNode;
						insertOrAppendPlacementNode(finishedWork, getHostSibling(finishedWork), parent);
						break;
					case 5:
						var parent$141 = hostParentFiber.stateNode;
						hostParentFiber.flags & 32 && (setTextContent(parent$141, ""), hostParentFiber.flags &= -33);
						insertOrAppendPlacementNode(finishedWork, getHostSibling(finishedWork), parent$141);
						break;
					case 3:
					case 4:
						var parent$143 = hostParentFiber.stateNode.containerInfo;
						insertOrAppendPlacementNodeIntoContainer(finishedWork, getHostSibling(finishedWork), parent$143);
						break;
					default: throw Error(formatProdErrorMessage(161));
				}
			} catch (error) {
				captureCommitPhaseError(finishedWork, finishedWork.return, error);
			}
			finishedWork.flags &= -3;
		}
		flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
		if (parentFiber.subtreeFlags & 1024) for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var fiber = parentFiber;
			recursivelyResetForms(fiber);
			5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
		if (parentFiber.subtreeFlags & 8772) for (parentFiber = parentFiber.child; null !== parentFiber;) commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedWork = parentFiber;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 1:
					safelyDetachRef(finishedWork, finishedWork.return);
					var instance = finishedWork.stateNode;
					"function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(finishedWork, finishedWork.return, instance);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 27: releaseSingletonInstance(finishedWork.stateNode);
				case 26:
				case 5:
					safelyDetachRef(finishedWork, finishedWork.return);
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 22:
					null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				case 30:
					recursivelyTraverseDisappearLayoutEffects(finishedWork);
					break;
				default: recursivelyTraverseDisappearLayoutEffects(finishedWork);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
		includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 15:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					commitHookEffectListMount(4, finishedWork);
					break;
				case 1:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					current = finishedWork;
					finishedRoot = current.stateNode;
					if ("function" === typeof finishedRoot.componentDidMount) try {
						finishedRoot.componentDidMount();
					} catch (error) {
						captureCommitPhaseError(current, current.return, error);
					}
					current = finishedWork;
					finishedRoot = current.updateQueue;
					if (null !== finishedRoot) {
						var instance = current.stateNode;
						try {
							var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
							if (null !== hiddenCallbacks) for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++) callCallback(hiddenCallbacks[finishedRoot], instance);
						} catch (error) {
							captureCommitPhaseError(current, current.return, error);
						}
					}
					includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 27: commitHostSingletonAcquisition(finishedWork);
				case 26:
				case 5:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 12:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					break;
				case 31:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
					break;
				case 13:
					recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
					break;
				case 22:
					null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
					safelyAttachRef(finishedWork, finishedWork.return);
					break;
				case 30: break;
				default: recursivelyTraverseReappearLayoutEffects(finishedRoot, finishedWork, includeWorkInProgressEffects);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
		var previousCache = null;
		null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
		current = null;
		null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
		current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
		current = null;
		null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
		finishedWork = finishedWork.memoizedState.cache;
		finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(root, parentFiber, committedLanes, committedTransitions) {
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) commitPassiveMountOnFiber(root, parentFiber, committedLanes, committedTransitions), parentFiber = parentFiber.sibling;
	}
	function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
		var flags = finishedWork.flags;
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && commitHookEffectListMount(9, finishedWork);
				break;
			case 1:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 3:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
				break;
			case 12:
				if (flags & 2048) {
					recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
					finishedRoot = finishedWork.stateNode;
					try {
						var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
						"function" === typeof onPostCommit && onPostCommit(id, null === finishedWork.alternate ? "mount" : "update", finishedRoot.passiveEffectDuration, -0);
					} catch (error) {
						captureCommitPhaseError(finishedWork, finishedWork.return, error);
					}
				} else recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 31:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 13:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				break;
			case 23: break;
			case 22:
				_finishedWork$memoize2 = finishedWork.stateNode;
				id = finishedWork.alternate;
				null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 2 ? recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions) : (_finishedWork$memoize2._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, 0 !== (finishedWork.subtreeFlags & 10256) || !1));
				flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
				break;
			case 24:
				recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
				flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
				break;
			default: recursivelyTraversePassiveMountEffects(finishedRoot, finishedWork, committedLanes, committedTransitions);
		}
	}
	function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
		includeWorkInProgressEffects = includeWorkInProgressEffects && (0 !== (parentFiber.subtreeFlags & 10256) || !1);
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 0:
				case 11:
				case 15:
					recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
					commitHookEffectListMount(8, finishedWork);
					break;
				case 23: break;
				case 22:
					var instance = finishedWork.stateNode;
					null !== finishedWork.memoizedState ? instance._visibility & 2 ? recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : (instance._visibility |= 2, recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects));
					includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(finishedWork.alternate, finishedWork);
					break;
				case 24:
					recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
					includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
					break;
				default: recursivelyTraverseReconnectPassiveEffects(finishedRoot, finishedWork, committedLanes, committedTransitions, includeWorkInProgressEffects);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) {
			var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case 22:
					recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
					flags & 2048 && commitOffscreenPassiveMountEffects(finishedWork.alternate, finishedWork);
					break;
				case 24:
					recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
					flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
					break;
				default: recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(parentFiber, committedLanes, suspendedState) {
		if (parentFiber.subtreeFlags & suspenseyCommitFlag) for (parentFiber = parentFiber.child; null !== parentFiber;) accumulateSuspenseyCommitOnFiber(parentFiber, committedLanes, suspendedState), parentFiber = parentFiber.sibling;
	}
	function accumulateSuspenseyCommitOnFiber(fiber, committedLanes, suspendedState) {
		switch (fiber.tag) {
			case 26:
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(suspendedState, currentHoistableRoot, fiber.memoizedState, fiber.memoizedProps);
				break;
			case 5:
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				break;
			case 3:
			case 4:
				var previousHoistableRoot = currentHoistableRoot;
				currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
				recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
				currentHoistableRoot = previousHoistableRoot;
				break;
			case 22:
				null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState));
				break;
			default: recursivelyAccumulateSuspenseyCommit(fiber, committedLanes, suspendedState);
		}
	}
	function detachAlternateSiblings(parentFiber) {
		var previousFiber = parentFiber.alternate;
		if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
			previousFiber.child = null;
			do
				previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
			while (null !== parentFiber);
		}
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
		var deletions = parentFiber.deletions;
		if (0 !== (parentFiber.flags & 16)) {
			if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
				var childToDelete = deletions[i];
				nextEffect = childToDelete;
				commitPassiveUnmountEffectsInsideOfDeletedTree_begin(childToDelete, parentFiber);
			}
			detachAlternateSiblings(parentFiber);
		}
		if (parentFiber.subtreeFlags & 10256) for (parentFiber = parentFiber.child; null !== parentFiber;) commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
		switch (finishedWork.tag) {
			case 0:
			case 11:
			case 15:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
				break;
			case 3:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			case 12:
				recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			case 22:
				var instance = finishedWork.stateNode;
				null !== finishedWork.memoizedState && instance._visibility & 2 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
				break;
			default: recursivelyTraversePassiveUnmountEffects(finishedWork);
		}
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
		var deletions = parentFiber.deletions;
		if (0 !== (parentFiber.flags & 16)) {
			if (null !== deletions) for (var i = 0; i < deletions.length; i++) {
				var childToDelete = deletions[i];
				nextEffect = childToDelete;
				commitPassiveUnmountEffectsInsideOfDeletedTree_begin(childToDelete, parentFiber);
			}
			detachAlternateSiblings(parentFiber);
		}
		for (parentFiber = parentFiber.child; null !== parentFiber;) {
			deletions = parentFiber;
			switch (deletions.tag) {
				case 0:
				case 11:
				case 15:
					commitHookEffectListUnmount(8, deletions, deletions.return);
					recursivelyTraverseDisconnectPassiveEffects(deletions);
					break;
				case 22:
					i = deletions.stateNode;
					i._visibility & 2 && (i._visibility &= -3, recursivelyTraverseDisconnectPassiveEffects(deletions));
					break;
				default: recursivelyTraverseDisconnectPassiveEffects(deletions);
			}
			parentFiber = parentFiber.sibling;
		}
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
		for (; null !== nextEffect;) {
			var fiber = nextEffect;
			switch (fiber.tag) {
				case 0:
				case 11:
				case 15:
					commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
					break;
				case 23:
				case 22:
					if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
						var cache = fiber.memoizedState.cachePool.pool;
						null != cache && cache.refCount++;
					}
					break;
				case 24: releaseCache(fiber.memoizedState.cache);
			}
			cache = fiber.child;
			if (null !== cache) cache.return = fiber, nextEffect = cache;
			else a: for (fiber = deletedSubtreeRoot; null !== nextEffect;) {
				cache = nextEffect;
				var sibling = cache.sibling, returnFiber = cache.return;
				detachFiberAfterEffects(cache);
				if (cache === fiber) {
					nextEffect = null;
					break a;
				}
				if (null !== sibling) {
					sibling.return = returnFiber;
					nextEffect = sibling;
					break a;
				}
				nextEffect = returnFiber;
			}
		}
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
			void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
			return cacheForType;
		},
		cacheSignal: function() {
			return readContext(CacheContext).controller.signal;
		}
	}, PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, executionContext = 0, workInProgressRoot = null, workInProgress = null, workInProgressRootRenderLanes = 0, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, workInProgressRootDidSkipSuspendedSiblings = !1, workInProgressRootIsPrerendering = !1, workInProgressRootDidAttachPingListener = !1, entangledRenderLanes = 0, workInProgressRootExitStatus = 0, workInProgressRootSkippedLanes = 0, workInProgressRootInterleavedUpdatedLanes = 0, workInProgressRootPingedLanes = 0, workInProgressDeferredLane = 0, workInProgressSuspendedRetryLanes = 0, workInProgressRootConcurrentErrors = null, workInProgressRootRecoverableErrors = null, workInProgressRootDidIncludeRecursiveRenderUpdate = !1, globalMostRecentFallbackTime = 0, globalMostRecentTransitionTime = 0, workInProgressRootRenderTargetTime = Infinity, workInProgressTransitions = null, legacyErrorBoundariesThatAlreadyFailed = null, pendingEffectsStatus = 0, pendingEffectsRoot = null, pendingFinishedWork = null, pendingEffectsLanes = 0, pendingEffectsRemainingLanes = 0, pendingPassiveTransitions = null, pendingRecoverableErrors = null, nestedUpdateCount = 0, rootWithNestedUpdates = null;
	function requestUpdateLane() {
		return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes : null !== ReactSharedInternals.T ? requestTransitionLane() : resolveUpdatePriority();
	}
	function requestDeferredLane() {
		if (0 === workInProgressDeferredLane) if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
			var lane = nextTransitionDeferredLane;
			nextTransitionDeferredLane <<= 1;
			0 === (nextTransitionDeferredLane & 3932160) && (nextTransitionDeferredLane = 262144);
			workInProgressDeferredLane = lane;
		} else workInProgressDeferredLane = 536870912;
		lane = suspenseHandlerStackCursor.current;
		null !== lane && (lane.flags |= 32);
		return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
		if (root === workInProgressRoot && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root.cancelPendingCommit) prepareFreshStack(root, 0), markRootSuspended(root, workInProgressRootRenderLanes, workInProgressDeferredLane, !1);
		markRootUpdated$1(root, lane);
		if (0 === (executionContext & 2) || root !== workInProgressRoot) root === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(root, workInProgressRootRenderLanes, workInProgressDeferredLane, !1)), ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
		if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
		var shouldTimeSlice = !forceSync && 0 === (lanes & 127) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, !0), renderWasConcurrent = shouldTimeSlice;
		do {
			if (0 === exitStatus) {
				workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, !1);
				break;
			} else {
				forceSync = root$jscomp$0.current.alternate;
				if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
					exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
					renderWasConcurrent = !1;
					continue;
				}
				if (2 === exitStatus) {
					renderWasConcurrent = lanes;
					if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent) var JSCompiler_inline_result = 0;
					else JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
					if (0 !== JSCompiler_inline_result) {
						lanes = JSCompiler_inline_result;
						a: {
							var root = root$jscomp$0;
							exitStatus = workInProgressRootConcurrentErrors;
							var wasRootDehydrated = root.current.memoizedState.isDehydrated;
							wasRootDehydrated && (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
							JSCompiler_inline_result = renderRootSync(root, JSCompiler_inline_result, !1);
							if (2 !== JSCompiler_inline_result) {
								if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
									root.errorRecoveryDisabledLanes |= renderWasConcurrent;
									workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
									exitStatus = 4;
									break a;
								}
								renderWasConcurrent = workInProgressRootRecoverableErrors;
								workInProgressRootRecoverableErrors = exitStatus;
								null !== renderWasConcurrent && (null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = renderWasConcurrent : workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, renderWasConcurrent));
							}
							exitStatus = JSCompiler_inline_result;
						}
						renderWasConcurrent = !1;
						if (2 !== exitStatus) continue;
					}
				}
				if (1 === exitStatus) {
					prepareFreshStack(root$jscomp$0, 0);
					markRootSuspended(root$jscomp$0, lanes, 0, !0);
					break;
				}
				a: {
					shouldTimeSlice = root$jscomp$0;
					renderWasConcurrent = exitStatus;
					switch (renderWasConcurrent) {
						case 0:
						case 1: throw Error(formatProdErrorMessage(345));
						case 4: if ((lanes & 4194048) !== lanes) break;
						case 6:
							markRootSuspended(shouldTimeSlice, lanes, workInProgressDeferredLane, !workInProgressRootDidSkipSuspendedSiblings);
							break a;
						case 2:
							workInProgressRootRecoverableErrors = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(formatProdErrorMessage(329));
					}
					if ((lanes & 62914560) === lanes && (exitStatus = globalMostRecentFallbackTime + 300 - now(), 10 < exitStatus)) {
						markRootSuspended(shouldTimeSlice, lanes, workInProgressDeferredLane, !workInProgressRootDidSkipSuspendedSiblings);
						if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
						pendingEffectsLanes = lanes;
						shouldTimeSlice.timeoutHandle = scheduleTimeout(commitRootWhenReady.bind(null, shouldTimeSlice, forceSync, workInProgressRootRecoverableErrors, workInProgressTransitions, workInProgressRootDidIncludeRecursiveRenderUpdate, lanes, workInProgressDeferredLane, workInProgressRootInterleavedUpdatedLanes, workInProgressSuspendedRetryLanes, workInProgressRootDidSkipSuspendedSiblings, renderWasConcurrent, "Throttled", -0, 0), exitStatus);
						break a;
					}
					commitRootWhenReady(shouldTimeSlice, forceSync, workInProgressRootRecoverableErrors, workInProgressTransitions, workInProgressRootDidIncludeRecursiveRenderUpdate, lanes, workInProgressDeferredLane, workInProgressRootInterleavedUpdatedLanes, workInProgressSuspendedRetryLanes, workInProgressRootDidSkipSuspendedSiblings, renderWasConcurrent, null, -0, 0);
				}
			}
			break;
		} while (1);
		ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(root, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, exitStatus, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
		root.timeoutHandle = -1;
		suspendedCommitReason = finishedWork.subtreeFlags;
		if (suspendedCommitReason & 8192 || 16785408 === (suspendedCommitReason & 16785408)) {
			suspendedCommitReason = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: noop$1
			};
			accumulateSuspenseyCommitOnFiber(finishedWork, lanes, suspendedCommitReason);
			var timeoutOffset = (lanes & 62914560) === lanes ? globalMostRecentFallbackTime - now() : (lanes & 4194048) === lanes ? globalMostRecentTransitionTime - now() : 0;
			timeoutOffset = waitForCommitToBeReady(suspendedCommitReason, timeoutOffset);
			if (null !== timeoutOffset) {
				pendingEffectsLanes = lanes;
				root.cancelPendingCommit = timeoutOffset(commitRoot.bind(null, root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes, exitStatus, suspendedCommitReason, null, completedRenderStartTime, completedRenderEndTime));
				markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
				return;
			}
		}
		commitRoot(root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes);
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
		for (var node = finishedWork;;) {
			var tag = node.tag;
			if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag))) for (var i = 0; i < tag.length; i++) {
				var check = tag[i], getSnapshot = check.getSnapshot;
				check = check.value;
				try {
					if (!objectIs(getSnapshot(), check)) return !1;
				} catch (error) {
					return !1;
				}
			}
			tag = node.child;
			if (node.subtreeFlags & 16384 && null !== tag) tag.return = node, node = tag;
			else {
				if (node === finishedWork) break;
				for (; null === node.sibling;) {
					if (null === node.return || node.return === finishedWork) return !0;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
			}
		}
		return !0;
	}
	function markRootSuspended(root, suspendedLanes, spawnedLane, didAttemptEntireTree) {
		suspendedLanes &= ~workInProgressRootPingedLanes;
		suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
		root.suspendedLanes |= suspendedLanes;
		root.pingedLanes &= ~suspendedLanes;
		didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
		didAttemptEntireTree = root.expirationTimes;
		for (var lanes = suspendedLanes; 0 < lanes;) {
			var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
			didAttemptEntireTree[index$6] = -1;
			lanes &= ~lane;
		}
		0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
		return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0, !1), !1) : !0;
	}
	function resetWorkInProgressStack() {
		if (null !== workInProgress) {
			if (0 === workInProgressSuspendedReason) var interruptedWork = workInProgress.return;
			else interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber$1 = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
			for (; null !== interruptedWork;) unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
			workInProgress = null;
		}
	}
	function prepareFreshStack(root, lanes) {
		var timeoutHandle = root.timeoutHandle;
		-1 !== timeoutHandle && (root.timeoutHandle = -1, cancelTimeout(timeoutHandle));
		timeoutHandle = root.cancelPendingCommit;
		null !== timeoutHandle && (root.cancelPendingCommit = null, timeoutHandle());
		pendingEffectsLanes = 0;
		resetWorkInProgressStack();
		workInProgressRoot = root;
		workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
		workInProgressRootRenderLanes = lanes;
		workInProgressSuspendedReason = 0;
		workInProgressThrownValue = null;
		workInProgressRootDidSkipSuspendedSiblings = !1;
		workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
		workInProgressRootDidAttachPingListener = !1;
		workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
		workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
		workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
		0 !== (lanes & 8) && (lanes |= lanes & 32);
		var allEntangledLanes = root.entangledLanes;
		if (0 !== allEntangledLanes) for (root = root.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes;) {
			var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
			lanes |= root[index$4];
			allEntangledLanes &= ~lane;
		}
		entangledRenderLanes = lanes;
		finishQueueingConcurrentUpdates();
		return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
		currentlyRenderingFiber = null;
		ReactSharedInternals.H = ContextOnlyDispatcher;
		thrownValue === SuspenseException || thrownValue === SuspenseActionException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
		workInProgressThrownValue = thrownValue;
		null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current)));
	}
	function shouldRemainOnPreviousScreen() {
		var handler = suspenseHandlerStackCursor.current;
		return null === handler ? !0 : (workInProgressRootRenderLanes & 4194048) === workInProgressRootRenderLanes ? null === shellBoundary ? !0 : !1 : (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes || 0 !== (workInProgressRootRenderLanes & 536870912) ? handler === shellBoundary : !1;
	}
	function pushDispatcher() {
		var prevDispatcher = ReactSharedInternals.H;
		ReactSharedInternals.H = ContextOnlyDispatcher;
		return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
		var prevAsyncDispatcher = ReactSharedInternals.A;
		ReactSharedInternals.A = DefaultAsyncDispatcher;
		return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
		workInProgressRootExitStatus = 4;
		workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194048) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = !0);
		0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(workInProgressRoot, workInProgressRootRenderLanes, workInProgressDeferredLane, !1);
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
		var prevExecutionContext = executionContext;
		executionContext |= 2;
		var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
		if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) workInProgressTransitions = null, prepareFreshStack(root, lanes);
		lanes = !1;
		var exitStatus = workInProgressRootExitStatus;
		a: do
			try {
				if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
					var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
					switch (workInProgressSuspendedReason) {
						case 8:
							resetWorkInProgressStack();
							exitStatus = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							null === suspenseHandlerStackCursor.current && (lanes = !0);
							var reason = workInProgressSuspendedReason;
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
							if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
								exitStatus = 0;
								break a;
							}
							break;
						default: reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
					}
				}
				workLoopSync();
				exitStatus = workInProgressRootExitStatus;
				break;
			} catch (thrownValue$165) {
				handleThrow(root, thrownValue$165);
			}
		while (1);
		lanes && root.shellSuspendCounter++;
		lastContextDependency = currentlyRenderingFiber$1 = null;
		executionContext = prevExecutionContext;
		ReactSharedInternals.H = prevDispatcher;
		ReactSharedInternals.A = prevAsyncDispatcher;
		null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
		return exitStatus;
	}
	function workLoopSync() {
		for (; null !== workInProgress;) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
		var prevExecutionContext = executionContext;
		executionContext |= 2;
		var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
		workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
		a: do
			try {
				if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
					lanes = workInProgress;
					var thrownValue = workInProgressThrownValue;
					b: switch (workInProgressSuspendedReason) {
						case 1:
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
							break;
						case 2:
						case 9:
							if (isThenableResolved(thrownValue)) {
								workInProgressSuspendedReason = 0;
								workInProgressThrownValue = null;
								replaySuspendedUnitOfWork(lanes);
								break;
							}
							lanes = function() {
								2 !== workInProgressSuspendedReason && 9 !== workInProgressSuspendedReason || workInProgressRoot !== root || (workInProgressSuspendedReason = 7);
								ensureRootIsScheduled(root);
							};
							thrownValue.then(lanes, lanes);
							break a;
						case 3:
							workInProgressSuspendedReason = 7;
							break a;
						case 4:
							workInProgressSuspendedReason = 5;
							break a;
						case 7:
							isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
							break;
						case 5:
							var resource = null;
							switch (workInProgress.tag) {
								case 26: resource = workInProgress.memoizedState;
								case 5:
								case 27:
									var hostFiber = workInProgress;
									if (resource ? preloadResource(resource) : hostFiber.stateNode.complete) {
										workInProgressSuspendedReason = 0;
										workInProgressThrownValue = null;
										var sibling = hostFiber.sibling;
										if (null !== sibling) workInProgress = sibling;
										else {
											var returnFiber = hostFiber.return;
											null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
										}
										break b;
									}
							}
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
							break;
						case 6:
							workInProgressSuspendedReason = 0;
							workInProgressThrownValue = null;
							throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
							break;
						case 8:
							resetWorkInProgressStack();
							workInProgressRootExitStatus = 6;
							break a;
						default: throw Error(formatProdErrorMessage(462));
					}
				}
				workLoopConcurrentByScheduler();
				break;
			} catch (thrownValue$167) {
				handleThrow(root, thrownValue$167);
			}
		while (1);
		lastContextDependency = currentlyRenderingFiber$1 = null;
		ReactSharedInternals.H = prevDispatcher;
		ReactSharedInternals.A = prevAsyncDispatcher;
		executionContext = prevExecutionContext;
		if (null !== workInProgress) return 0;
		workInProgressRoot = null;
		workInProgressRootRenderLanes = 0;
		finishQueueingConcurrentUpdates();
		return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
		for (; null !== workInProgress && !shouldYield();) performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
		var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
		unitOfWork.memoizedProps = unitOfWork.pendingProps;
		null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
		var next = unitOfWork;
		var current = next.alternate;
		switch (next.tag) {
			case 15:
			case 0:
				next = replayFunctionComponent(current, next, next.pendingProps, next.type, void 0, workInProgressRootRenderLanes);
				break;
			case 11:
				next = replayFunctionComponent(current, next, next.pendingProps, next.type.render, next.ref, workInProgressRootRenderLanes);
				break;
			case 5: resetHooksOnUnwind(next);
			default: unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
		}
		unitOfWork.memoizedProps = unitOfWork.pendingProps;
		null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, suspendedReason) {
		lastContextDependency = currentlyRenderingFiber$1 = null;
		resetHooksOnUnwind(unitOfWork);
		thenableState$1 = null;
		thenableIndexCounter$1 = 0;
		var returnFiber = unitOfWork.return;
		try {
			if (throwException(root, returnFiber, unitOfWork, thrownValue, workInProgressRootRenderLanes)) {
				workInProgressRootExitStatus = 1;
				logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current));
				workInProgress = null;
				return;
			}
		} catch (error) {
			if (null !== returnFiber) throw workInProgress = returnFiber, error;
			workInProgressRootExitStatus = 1;
			logUncaughtError(root, createCapturedValueAtFiber(thrownValue, root.current));
			workInProgress = null;
			return;
		}
		if (unitOfWork.flags & 32768) {
			if (isHydrating || 1 === suspendedReason) root = !0;
			else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912)) root = !1;
			else if (workInProgressRootDidSkipSuspendedSiblings = root = !0, 2 === suspendedReason || 9 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason) suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
			unwindUnitOfWork(unitOfWork, root);
		} else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
		var completedWork = unitOfWork;
		do {
			if (0 !== (completedWork.flags & 32768)) {
				unwindUnitOfWork(completedWork, workInProgressRootDidSkipSuspendedSiblings);
				return;
			}
			unitOfWork = completedWork.return;
			var next = completeWork(completedWork.alternate, completedWork, entangledRenderLanes);
			if (null !== next) {
				workInProgress = next;
				return;
			}
			completedWork = completedWork.sibling;
			if (null !== completedWork) {
				workInProgress = completedWork;
				return;
			}
			workInProgress = completedWork = unitOfWork;
		} while (null !== completedWork);
		0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
		do {
			var next = unwindWork(unitOfWork.alternate, unitOfWork);
			if (null !== next) {
				next.flags &= 32767;
				workInProgress = next;
				return;
			}
			next = unitOfWork.return;
			null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
			if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
				workInProgress = unitOfWork;
				return;
			}
			workInProgress = unitOfWork = next;
		} while (null !== unitOfWork);
		workInProgressRootExitStatus = 6;
		workInProgress = null;
	}
	function commitRoot(root, finishedWork, lanes, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes) {
		root.cancelPendingCommit = null;
		do
			flushPendingEffects();
		while (0 !== pendingEffectsStatus);
		if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
		if (null !== finishedWork) {
			if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
			didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
			didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
			markRootFinished(root, lanes, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes);
			root === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
			pendingFinishedWork = finishedWork;
			pendingEffectsRoot = root;
			pendingEffectsLanes = lanes;
			pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
			pendingPassiveTransitions = transitions;
			pendingRecoverableErrors = recoverableErrors;
			0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? (root.callbackNode = null, root.callbackPriority = 0, scheduleCallback$1(NormalPriority$1, function() {
				flushPassiveEffects();
				return null;
			})) : (root.callbackNode = null, root.callbackPriority = 0);
			recoverableErrors = 0 !== (finishedWork.flags & 13878);
			if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
				recoverableErrors = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				transitions = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				spawnedLane = executionContext;
				executionContext |= 4;
				try {
					commitBeforeMutationEffects(root, finishedWork, lanes);
				} finally {
					executionContext = spawnedLane, ReactDOMSharedInternals.p = transitions, ReactSharedInternals.T = recoverableErrors;
				}
			}
			pendingEffectsStatus = 1;
			flushMutationEffects();
			flushLayoutEffects();
			flushSpawnedWork();
		}
	}
	function flushMutationEffects() {
		if (1 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
			if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
				rootMutationHasEffect = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				var previousPriority = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				var prevExecutionContext = executionContext;
				executionContext |= 4;
				try {
					commitMutationEffectsOnFiber(finishedWork, root);
					var priorSelectionInformation = selectionInformation, curFocusedElem = getActiveElementDeep(root.containerInfo), priorFocusedElem = priorSelectionInformation.focusedElem, priorSelectionRange = priorSelectionInformation.selectionRange;
					if (curFocusedElem !== priorFocusedElem && priorFocusedElem && priorFocusedElem.ownerDocument && containsNode(priorFocusedElem.ownerDocument.documentElement, priorFocusedElem)) {
						if (null !== priorSelectionRange && hasSelectionCapabilities(priorFocusedElem)) {
							var start = priorSelectionRange.start, end = priorSelectionRange.end;
							void 0 === end && (end = start);
							if ("selectionStart" in priorFocusedElem) priorFocusedElem.selectionStart = start, priorFocusedElem.selectionEnd = Math.min(end, priorFocusedElem.value.length);
							else {
								var doc = priorFocusedElem.ownerDocument || document, win = doc && doc.defaultView || window;
								if (win.getSelection) {
									var selection = win.getSelection(), length = priorFocusedElem.textContent.length, start$jscomp$0 = Math.min(priorSelectionRange.start, length), end$jscomp$0 = void 0 === priorSelectionRange.end ? start$jscomp$0 : Math.min(priorSelectionRange.end, length);
									!selection.extend && start$jscomp$0 > end$jscomp$0 && (curFocusedElem = end$jscomp$0, end$jscomp$0 = start$jscomp$0, start$jscomp$0 = curFocusedElem);
									var startMarker = getNodeForCharacterOffset(priorFocusedElem, start$jscomp$0), endMarker = getNodeForCharacterOffset(priorFocusedElem, end$jscomp$0);
									if (startMarker && endMarker && (1 !== selection.rangeCount || selection.anchorNode !== startMarker.node || selection.anchorOffset !== startMarker.offset || selection.focusNode !== endMarker.node || selection.focusOffset !== endMarker.offset)) {
										var range = doc.createRange();
										range.setStart(startMarker.node, startMarker.offset);
										selection.removeAllRanges();
										start$jscomp$0 > end$jscomp$0 ? (selection.addRange(range), selection.extend(endMarker.node, endMarker.offset)) : (range.setEnd(endMarker.node, endMarker.offset), selection.addRange(range));
									}
								}
							}
						}
						doc = [];
						for (selection = priorFocusedElem; selection = selection.parentNode;) 1 === selection.nodeType && doc.push({
							element: selection,
							left: selection.scrollLeft,
							top: selection.scrollTop
						});
						"function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
						for (priorFocusedElem = 0; priorFocusedElem < doc.length; priorFocusedElem++) {
							var info = doc[priorFocusedElem];
							info.element.scrollLeft = info.left;
							info.element.scrollTop = info.top;
						}
					}
					_enabled = !!eventsEnabled;
					selectionInformation = eventsEnabled = null;
				} finally {
					executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootMutationHasEffect;
				}
			}
			root.current = finishedWork;
			pendingEffectsStatus = 2;
		}
	}
	function flushLayoutEffects() {
		if (2 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
			if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
				rootHasLayoutEffect = ReactSharedInternals.T;
				ReactSharedInternals.T = null;
				var previousPriority = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				var prevExecutionContext = executionContext;
				executionContext |= 4;
				try {
					commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
				} finally {
					executionContext = prevExecutionContext, ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = rootHasLayoutEffect;
				}
			}
			pendingEffectsStatus = 3;
		}
	}
	function flushSpawnedWork() {
		if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
			pendingEffectsStatus = 0;
			requestPaint();
			var root = pendingEffectsRoot, finishedWork = pendingFinishedWork, lanes = pendingEffectsLanes, recoverableErrors = pendingRecoverableErrors;
			0 !== (finishedWork.subtreeFlags & 10256) || 0 !== (finishedWork.flags & 10256) ? pendingEffectsStatus = 5 : (pendingEffectsStatus = 0, pendingFinishedWork = pendingEffectsRoot = null, releaseRootPooledCache(root, root.pendingLanes));
			var remainingLanes = root.pendingLanes;
			0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
			lanesToEventPriority(lanes);
			finishedWork = finishedWork.stateNode;
			if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot) try {
				injectedHook.onCommitFiberRoot(rendererID, finishedWork, void 0, 128 === (finishedWork.current.flags & 128));
			} catch (err) {}
			if (null !== recoverableErrors) {
				finishedWork = ReactSharedInternals.T;
				remainingLanes = ReactDOMSharedInternals.p;
				ReactDOMSharedInternals.p = 2;
				ReactSharedInternals.T = null;
				try {
					for (var onRecoverableError = root.onRecoverableError, i = 0; i < recoverableErrors.length; i++) {
						var recoverableError = recoverableErrors[i];
						onRecoverableError(recoverableError.value, { componentStack: recoverableError.stack });
					}
				} finally {
					ReactSharedInternals.T = finishedWork, ReactDOMSharedInternals.p = remainingLanes;
				}
			}
			0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
			ensureRootIsScheduled(root);
			remainingLanes = root.pendingLanes;
			0 !== (lanes & 261930) && 0 !== (remainingLanes & 42) ? root === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root) : nestedUpdateCount = 0;
			flushSyncWorkAcrossRoots_impl(0, !1);
		}
	}
	function releaseRootPooledCache(root, remainingLanes) {
		0 === (root.pooledCacheLanes &= remainingLanes) && (remainingLanes = root.pooledCache, null != remainingLanes && (root.pooledCache = null, releaseCache(remainingLanes)));
	}
	function flushPendingEffects() {
		flushMutationEffects();
		flushLayoutEffects();
		flushSpawnedWork();
		return flushPassiveEffects();
	}
	function flushPassiveEffects() {
		if (5 !== pendingEffectsStatus) return !1;
		var root = pendingEffectsRoot, remainingLanes = pendingEffectsRemainingLanes;
		pendingEffectsRemainingLanes = 0;
		var renderPriority = lanesToEventPriority(pendingEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
			ReactSharedInternals.T = null;
			renderPriority = pendingPassiveTransitions;
			pendingPassiveTransitions = null;
			var root$jscomp$0 = pendingEffectsRoot, lanes = pendingEffectsLanes;
			pendingEffectsStatus = 0;
			pendingFinishedWork = pendingEffectsRoot = null;
			pendingEffectsLanes = 0;
			if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
			var prevExecutionContext = executionContext;
			executionContext |= 4;
			commitPassiveUnmountOnFiber(root$jscomp$0.current);
			commitPassiveMountOnFiber(root$jscomp$0, root$jscomp$0.current, lanes, renderPriority);
			executionContext = prevExecutionContext;
			flushSyncWorkAcrossRoots_impl(0, !1);
			if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot) try {
				injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
			} catch (err) {}
			return !0;
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root, remainingLanes);
		}
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
		sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
		sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
		rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
		null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
		if (3 === sourceFiber.tag) captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
		else for (; null !== nearestMountedAncestor;) {
			if (3 === nearestMountedAncestor.tag) {
				captureCommitPhaseErrorOnRoot(nearestMountedAncestor, sourceFiber, error);
				break;
			} else if (1 === nearestMountedAncestor.tag) {
				var instance = nearestMountedAncestor.stateNode;
				if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
					sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
					error = createClassErrorUpdate(2);
					instance = enqueueUpdate(nearestMountedAncestor, error, 2);
					null !== instance && (initializeClassErrorUpdate(error, instance, nearestMountedAncestor, sourceFiber), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
					break;
				}
			}
			nearestMountedAncestor = nearestMountedAncestor.return;
		}
	}
	function attachPingListener(root, wakeable, lanes) {
		var pingCache = root.pingCache;
		if (null === pingCache) {
			pingCache = root.pingCache = new PossiblyWeakMap();
			var threadIDs = /* @__PURE__ */ new Set();
			pingCache.set(wakeable, threadIDs);
		} else threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
		threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = !0, threadIDs.add(lanes), root = pingSuspendedRoot.bind(null, root, wakeable, lanes), wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
		var pingCache = root.pingCache;
		null !== pingCache && pingCache.delete(wakeable);
		root.pingedLanes |= root.suspendedLanes & pingedLanes;
		root.warmLanes &= ~pingedLanes;
		workInProgressRoot === root && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
		ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
		0 === retryLane && (retryLane = claimNextRetryLane());
		boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
		null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
		var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
		null !== suspenseState && (retryLane = suspenseState.retryLane);
		retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
		var retryLane = 0;
		switch (boundaryFiber.tag) {
			case 31:
			case 13:
				var retryCache = boundaryFiber.stateNode;
				var suspenseState = boundaryFiber.memoizedState;
				null !== suspenseState && (retryLane = suspenseState.retryLane);
				break;
			case 19:
				retryCache = boundaryFiber.stateNode;
				break;
			case 22:
				retryCache = boundaryFiber.stateNode._retryCache;
				break;
			default: throw Error(formatProdErrorMessage(314));
		}
		null !== retryCache && retryCache.delete(wakeable);
		retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
		return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null, lastScheduledRoot = null, didScheduleMicrotask = !1, mightHavePendingSyncWork = !1, isFlushingWork = !1, currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
		root !== lastScheduledRoot && null === root.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root : lastScheduledRoot = lastScheduledRoot.next = root);
		mightHavePendingSyncWork = !0;
		didScheduleMicrotask || (didScheduleMicrotask = !0, scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
		if (!isFlushingWork && mightHavePendingSyncWork) {
			isFlushingWork = !0;
			do {
				var didPerformSomeWork = !1;
				for (var root$170 = firstScheduledRoot; null !== root$170;) {
					if (!onlyLegacy) if (0 !== syncTransitionLanes) {
						var pendingLanes = root$170.pendingLanes;
						if (0 === pendingLanes) var JSCompiler_inline_result = 0;
						else {
							var suspendedLanes = root$170.suspendedLanes, pingedLanes = root$170.pingedLanes;
							JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
							JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
							JSCompiler_inline_result = JSCompiler_inline_result & 201326741 ? JSCompiler_inline_result & 201326741 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
						}
						0 !== JSCompiler_inline_result && (didPerformSomeWork = !0, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
					} else JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(root$170, root$170 === workInProgressRoot ? JSCompiler_inline_result : 0, null !== root$170.cancelPendingCommit || -1 !== root$170.timeoutHandle), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) || (didPerformSomeWork = !0, performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
					root$170 = root$170.next;
				}
			} while (didPerformSomeWork);
			isFlushingWork = !1;
		}
	}
	function processRootScheduleInImmediateTask() {
		processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
		mightHavePendingSyncWork = didScheduleMicrotask = !1;
		var syncTransitionLanes = 0;
		0 !== currentEventTransitionLane && shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane);
		for (var currentTime = now(), prev = null, root = firstScheduledRoot; null !== root;) {
			var next = root.next, nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
			if (0 === nextLanes) root.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
			else if (prev = root, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3)) mightHavePendingSyncWork = !0;
			root = next;
		}
		0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus || flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
		0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
		for (var suspendedLanes = root.suspendedLanes, pingedLanes = root.pingedLanes, expirationTimes = root.expirationTimes, lanes = root.pendingLanes & -62914561; 0 < lanes;) {
			var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
			if (-1 === expirationTime) {
				if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes)) expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
			} else expirationTime <= currentTime && (root.expiredLanes |= lane);
			lanes &= ~lane;
		}
		currentTime = workInProgressRoot;
		suspendedLanes = workInProgressRootRenderLanes;
		suspendedLanes = getNextLanes(root, root === currentTime ? suspendedLanes : 0, null !== root.cancelPendingCommit || -1 !== root.timeoutHandle);
		pingedLanes = root.callbackNode;
		if (0 === suspendedLanes || root === currentTime && (2 === workInProgressSuspendedReason || 9 === workInProgressSuspendedReason) || null !== root.cancelPendingCommit) return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root.callbackNode = null, root.callbackPriority = 0;
		if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root, suspendedLanes)) {
			currentTime = suspendedLanes & -suspendedLanes;
			if (currentTime === root.callbackPriority) return currentTime;
			null !== pingedLanes && cancelCallback$1(pingedLanes);
			switch (lanesToEventPriority(suspendedLanes)) {
				case 2:
				case 8:
					suspendedLanes = UserBlockingPriority;
					break;
				case 32:
					suspendedLanes = NormalPriority$1;
					break;
				case 268435456:
					suspendedLanes = IdlePriority;
					break;
				default: suspendedLanes = NormalPriority$1;
			}
			pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
			suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
			root.callbackPriority = currentTime;
			root.callbackNode = suspendedLanes;
			return currentTime;
		}
		null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
		root.callbackPriority = 2;
		root.callbackNode = null;
		return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
		if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) return root.callbackNode = null, root.callbackPriority = 0, null;
		var originalCallbackNode = root.callbackNode;
		if (flushPendingEffects() && root.callbackNode !== originalCallbackNode) return null;
		var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
		workInProgressRootRenderLanes$jscomp$0 = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0, null !== root.cancelPendingCommit || -1 !== root.timeoutHandle);
		if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
		performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
		scheduleTaskForRootDuringMicrotask(root, now());
		return null != root.callbackNode && root.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root) : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
		if (flushPendingEffects()) return null;
		performWorkOnRoot(root, lanes, !0);
	}
	function scheduleImmediateRootScheduleTask() {
		scheduleMicrotask(function() {
			0 !== (executionContext & 6) ? scheduleCallback$3(ImmediatePriority, processRootScheduleInImmediateTask) : processRootScheduleInMicrotask();
		});
	}
	function requestTransitionLane() {
		if (0 === currentEventTransitionLane) {
			var actionScopeLane = currentEntangledLane;
			0 === actionScopeLane && (actionScopeLane = nextTransitionUpdateLane, nextTransitionUpdateLane <<= 1, 0 === (nextTransitionUpdateLane & 261888) && (nextTransitionUpdateLane = 256));
			currentEventTransitionLane = actionScopeLane;
		}
		return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
		return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
		var temp = submitter.ownerDocument.createElement("input");
		temp.name = submitter.name;
		temp.value = submitter.value;
		form.id && temp.setAttribute("form", form.id);
		submitter.parentNode.insertBefore(temp, submitter);
		form = new FormData(form);
		temp.parentNode.removeChild(temp);
		return form;
	}
	function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
		if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
			var action = coerceFormActionProp((nativeEventTarget[internalPropsKey] || null).action), submitter = nativeEvent.submitter;
			submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
			var event = new SyntheticEvent("action", "action", null, nativeEvent, nativeEventTarget);
			dispatchQueue.push({
				event,
				listeners: [{
					instance: null,
					listener: function() {
						if (nativeEvent.defaultPrevented) {
							if (0 !== currentEventTransitionLane) {
								var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
								startHostTransition(maybeTargetInst, {
									pending: !0,
									data: formData,
									method: nativeEventTarget.method,
									action
								}, null, formData);
							}
						} else "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(maybeTargetInst, {
							pending: !0,
							data: formData,
							method: nativeEventTarget.method,
							action
						}, action, formData));
					},
					currentTarget: nativeEventTarget
				}]
			});
		}
	}
	for (var i$jscomp$inline_1577 = 0; i$jscomp$inline_1577 < simpleEventPluginEvents.length; i$jscomp$inline_1577++) {
		var eventName$jscomp$inline_1578 = simpleEventPluginEvents[i$jscomp$inline_1577];
		registerSimpleEvent(eventName$jscomp$inline_1578.toLowerCase(), "on" + (eventName$jscomp$inline_1578[0].toUpperCase() + eventName$jscomp$inline_1578.slice(1)));
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	registerTwoPhaseEvent("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	registerTwoPhaseEvent("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	registerTwoPhaseEvent("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	registerTwoPhaseEvent("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	registerTwoPhaseEvent("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nonDelegatedEvents = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes));
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
		eventSystemFlags = 0 !== (eventSystemFlags & 4);
		for (var i = 0; i < dispatchQueue.length; i++) {
			var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
			_dispatchQueue$i = _dispatchQueue$i.listeners;
			a: {
				var previousInstance = void 0;
				if (eventSystemFlags) for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
					var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
					_dispatchListeners$i = _dispatchListeners$i.listener;
					if (instance !== previousInstance && event.isPropagationStopped()) break a;
					previousInstance = _dispatchListeners$i;
					event.currentTarget = currentTarget;
					try {
						previousInstance(event);
					} catch (error) {
						reportGlobalError(error);
					}
					event.currentTarget = null;
					previousInstance = instance;
				}
				else for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
					_dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
					instance = _dispatchListeners$i.instance;
					currentTarget = _dispatchListeners$i.currentTarget;
					_dispatchListeners$i = _dispatchListeners$i.listener;
					if (instance !== previousInstance && event.isPropagationStopped()) break a;
					previousInstance = _dispatchListeners$i;
					event.currentTarget = currentTarget;
					try {
						previousInstance(event);
					} catch (error) {
						reportGlobalError(error);
					}
					event.currentTarget = null;
					previousInstance = instance;
				}
			}
		}
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
		var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
		void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
		var listenerSetKey = domEventName + "__bubble";
		JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, !1), JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
		var eventSystemFlags = 0;
		isCapturePhaseListener && (eventSystemFlags |= 4);
		addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
		if (!rootContainerElement[listeningMarker]) {
			rootContainerElement[listeningMarker] = !0;
			allNativeEvents.forEach(function(domEventName) {
				"selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, !1, rootContainerElement), listenToNativeEvent(domEventName, !0, rootContainerElement));
			});
			var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
			null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = !0, listenToNativeEvent("selectionchange", !1, ownerDocument));
		}
	}
	function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
		switch (getEventPriority(domEventName)) {
			case 2:
				var listenerWrapper = dispatchDiscreteEvent;
				break;
			case 8:
				listenerWrapper = dispatchContinuousEvent;
				break;
			default: listenerWrapper = dispatchEvent;
		}
		eventSystemFlags = listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
		listenerWrapper = void 0;
		!passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = !0);
		isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
			capture: !0,
			passive: listenerWrapper
		}) : targetContainer.addEventListener(domEventName, eventSystemFlags, !0) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, { passive: listenerWrapper }) : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
	}
	function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
		var ancestorInst = targetInst$jscomp$0;
		if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0) a: for (;;) {
			if (null === targetInst$jscomp$0) return;
			var nodeTag = targetInst$jscomp$0.tag;
			if (3 === nodeTag || 4 === nodeTag) {
				var container = targetInst$jscomp$0.stateNode.containerInfo;
				if (container === targetContainer) break;
				if (4 === nodeTag) for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag;) {
					var grandTag = nodeTag.tag;
					if ((3 === grandTag || 4 === grandTag) && nodeTag.stateNode.containerInfo === targetContainer) return;
					nodeTag = nodeTag.return;
				}
				for (; null !== container;) {
					nodeTag = getClosestInstanceFromNode(container);
					if (null === nodeTag) return;
					grandTag = nodeTag.tag;
					if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
						targetInst$jscomp$0 = ancestorInst = nodeTag;
						continue a;
					}
					container = container.parentNode;
				}
			}
			targetInst$jscomp$0 = targetInst$jscomp$0.return;
		}
		batchedUpdates$1(function() {
			var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
			a: {
				var reactName = topLevelEventsToReactNames.get(domEventName);
				if (void 0 !== reactName) {
					var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
					switch (domEventName) {
						case "keypress": if (0 === getEventCharCode(nativeEvent)) break a;
						case "keydown":
						case "keyup":
							SyntheticEventCtor = SyntheticKeyboardEvent;
							break;
						case "focusin":
							reactEventType = "focus";
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "focusout":
							reactEventType = "blur";
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "beforeblur":
						case "afterblur":
							SyntheticEventCtor = SyntheticFocusEvent;
							break;
						case "click": if (2 === nativeEvent.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							SyntheticEventCtor = SyntheticMouseEvent;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							SyntheticEventCtor = SyntheticDragEvent;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							SyntheticEventCtor = SyntheticTouchEvent;
							break;
						case ANIMATION_END:
						case ANIMATION_ITERATION:
						case ANIMATION_START:
							SyntheticEventCtor = SyntheticAnimationEvent;
							break;
						case TRANSITION_END:
							SyntheticEventCtor = SyntheticTransitionEvent;
							break;
						case "scroll":
						case "scrollend":
							SyntheticEventCtor = SyntheticUIEvent;
							break;
						case "wheel":
							SyntheticEventCtor = SyntheticWheelEvent;
							break;
						case "copy":
						case "cut":
						case "paste":
							SyntheticEventCtor = SyntheticClipboardEvent;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							SyntheticEventCtor = SyntheticPointerEvent;
							break;
						case "toggle":
						case "beforetoggle": SyntheticEventCtor = SyntheticToggleEvent;
					}
					var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
					inCapturePhase = [];
					for (var instance = targetInst, lastHostComponent; null !== instance;) {
						var _instance = instance;
						lastHostComponent = _instance.stateNode;
						_instance = _instance.tag;
						5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(createDispatchListener(instance, _instance, lastHostComponent)));
						if (accumulateTargetOnly) break;
						instance = instance.return;
					}
					0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget), dispatchQueue.push({
						event: reactName,
						listeners: inCapturePhase
					}));
				}
			}
			if (0 === (eventSystemFlags & 7)) {
				a: {
					reactName = "mouseover" === domEventName || "pointerover" === domEventName;
					SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
					if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey])) break a;
					if (SyntheticEventCtor || reactName) {
						reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
						if (SyntheticEventCtor) {
							if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase)) reactEventType = null;
						} else SyntheticEventCtor = null, reactEventType = targetInst;
						if (SyntheticEventCtor !== reactEventType) {
							inCapturePhase = SyntheticMouseEvent;
							_instance = "onMouseLeave";
							reactEventName = "onMouseEnter";
							instance = "mouse";
							if ("pointerout" === domEventName || "pointerover" === domEventName) inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
							accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
							lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
							reactName = new inCapturePhase(_instance, instance + "leave", SyntheticEventCtor, nativeEvent, nativeEventTarget);
							reactName.target = accumulateTargetOnly;
							reactName.relatedTarget = lastHostComponent;
							_instance = null;
							getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(reactEventName, instance + "enter", reactEventType, nativeEvent, nativeEventTarget), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
							accumulateTargetOnly = _instance;
							if (SyntheticEventCtor && reactEventType) b: {
								inCapturePhase = getParent;
								reactEventName = SyntheticEventCtor;
								instance = reactEventType;
								lastHostComponent = 0;
								for (_instance = reactEventName; _instance; _instance = inCapturePhase(_instance)) lastHostComponent++;
								_instance = 0;
								for (var tempB = instance; tempB; tempB = inCapturePhase(tempB)) _instance++;
								for (; 0 < lastHostComponent - _instance;) reactEventName = inCapturePhase(reactEventName), lastHostComponent--;
								for (; 0 < _instance - lastHostComponent;) instance = inCapturePhase(instance), _instance--;
								for (; lastHostComponent--;) {
									if (reactEventName === instance || null !== instance && reactEventName === instance.alternate) {
										inCapturePhase = reactEventName;
										break b;
									}
									reactEventName = inCapturePhase(reactEventName);
									instance = inCapturePhase(instance);
								}
								inCapturePhase = null;
							}
							else inCapturePhase = null;
							null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(dispatchQueue, reactName, SyntheticEventCtor, inCapturePhase, !1);
							null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(dispatchQueue, accumulateTargetOnly, reactEventType, inCapturePhase, !0);
						}
					}
				}
				a: {
					reactName = targetInst ? getNodeFromInstance(targetInst) : window;
					SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
					if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type) var getTargetInstFunc = getTargetInstForChangeEvent;
					else if (isTextInputElement(reactName)) if (isInputEventSupported) getTargetInstFunc = getTargetInstForInputOrChangeEvent;
					else {
						getTargetInstFunc = getTargetInstForInputEventPolyfill;
						var handleEventFunc = handleEventsForInputEventPolyfill;
					}
					else SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
					if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
						createAndAccumulateChangeEvent(dispatchQueue, getTargetInstFunc, nativeEvent, nativeEventTarget);
						break a;
					}
					handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
					"focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
				}
				handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
				switch (domEventName) {
					case "focusin":
						if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable) activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
						break;
					case "focusout":
						lastSelection = activeElementInst = activeElement = null;
						break;
					case "mousedown":
						mouseDown = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						mouseDown = !1;
						constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
						break;
					case "selectionchange": if (skipSelectionChangeEvent) break;
					case "keydown":
					case "keyup": constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
				}
				var fallbackData;
				if (canUseCompositionEvent) b: {
					switch (domEventName) {
						case "compositionstart":
							var eventType = "onCompositionStart";
							break b;
						case "compositionend":
							eventType = "onCompositionEnd";
							break b;
						case "compositionupdate":
							eventType = "onCompositionUpdate";
							break b;
					}
					eventType = void 0;
				}
				else isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
				eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = !0)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget), dispatchQueue.push({
					event: eventType,
					listeners: handleEventFunc
				}), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
				if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent)) eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent("onBeforeInput", "beforeinput", null, nativeEvent, nativeEventTarget), dispatchQueue.push({
					event: handleEventFunc,
					listeners: eventType
				}), handleEventFunc.data = fallbackData);
				extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
			}
			processDispatchQueue(dispatchQueue, eventSystemFlags);
		});
	}
	function createDispatchListener(instance, listener, currentTarget) {
		return {
			instance,
			listener,
			currentTarget
		};
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
		for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber;) {
			var _instance2 = targetFiber, stateNode = _instance2.stateNode;
			_instance2 = _instance2.tag;
			5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(createDispatchListener(targetFiber, _instance2, stateNode)), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(createDispatchListener(targetFiber, _instance2, stateNode)));
			if (3 === targetFiber.tag) return listeners;
			targetFiber = targetFiber.return;
		}
		return [];
	}
	function getParent(inst) {
		if (null === inst) return null;
		do
			inst = inst.return;
		while (inst && 5 !== inst.tag && 27 !== inst.tag);
		return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
		for (var registrationName = event._reactName, listeners = []; null !== target && target !== common;) {
			var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
			_instance3 = _instance3.tag;
			if (null !== alternate && alternate === common) break;
			5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(createDispatchListener(target, stateNode, alternate))) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(createDispatchListener(target, stateNode, alternate))));
			target = target.return;
		}
		0 !== listeners.length && dispatchQueue.push({
			event,
			listeners
		});
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g, NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
		return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
		clientText = normalizeMarkupForTextOrAttribute(clientText);
		return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
	}
	function setProp(domElement, tag, key, value, props, prevValue) {
		switch (key) {
			case "children":
				"string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
				break;
			case "className":
				setValueForKnownAttribute(domElement, "class", value);
				break;
			case "tabIndex":
				setValueForKnownAttribute(domElement, "tabindex", value);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				setValueForKnownAttribute(domElement, key, value);
				break;
			case "style":
				setValueForStyles(domElement, value, prevValue);
				break;
			case "data": if ("object" !== tag) {
				setValueForKnownAttribute(domElement, "data", value);
				break;
			}
			case "src":
			case "href":
				if ("" === value && ("a" !== tag || "href" !== key)) {
					domElement.removeAttribute(key);
					break;
				}
				if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
					domElement.removeAttribute(key);
					break;
				}
				value = sanitizeURL("" + value);
				domElement.setAttribute(key, value);
				break;
			case "action":
			case "formAction":
				if ("function" === typeof value) {
					domElement.setAttribute(key, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(domElement, tag, "formEncType", props.formEncType, props, null), setProp(domElement, tag, "formMethod", props.formMethod, props, null), setProp(domElement, tag, "formTarget", props.formTarget, props, null)) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
				if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
					domElement.removeAttribute(key);
					break;
				}
				value = sanitizeURL("" + value);
				domElement.setAttribute(key, value);
				break;
			case "onClick":
				null != value && (domElement.onclick = noop$1);
				break;
			case "onScroll":
				null != value && listenToNonDelegatedEvent("scroll", domElement);
				break;
			case "onScrollEnd":
				null != value && listenToNonDelegatedEvent("scrollend", domElement);
				break;
			case "dangerouslySetInnerHTML":
				if (null != value) {
					if ("object" !== typeof value || !("__html" in value)) throw Error(formatProdErrorMessage(61));
					key = value.__html;
					if (null != key) {
						if (null != props.children) throw Error(formatProdErrorMessage(60));
						domElement.innerHTML = key;
					}
				}
				break;
			case "multiple":
				domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
				break;
			case "muted":
				domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
					domElement.removeAttribute("xlink:href");
					break;
				}
				key = sanitizeURL("" + value);
				domElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", key);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
				break;
			case "capture":
			case "download":
				!0 === value ? domElement.setAttribute(key, "") : !1 !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
				break;
			case "rowSpan":
			case "start":
				null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
				break;
			case "popover":
				listenToNonDelegatedEvent("beforetoggle", domElement);
				listenToNonDelegatedEvent("toggle", domElement);
				setValueForAttribute(domElement, "popover", value);
				break;
			case "xlinkActuate":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:actuate", value);
				break;
			case "xlinkArcrole":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:arcrole", value);
				break;
			case "xlinkRole":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:role", value);
				break;
			case "xlinkShow":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:show", value);
				break;
			case "xlinkTitle":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:title", value);
				break;
			case "xlinkType":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/1999/xlink", "xlink:type", value);
				break;
			case "xmlBase":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:base", value);
				break;
			case "xmlLang":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:lang", value);
				break;
			case "xmlSpace":
				setValueForNamespacedAttribute(domElement, "http://www.w3.org/XML/1998/namespace", "xml:space", value);
				break;
			case "is":
				setValueForAttribute(domElement, "is", value);
				break;
			case "innerText":
			case "textContent": break;
			default: if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1]) key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
		}
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
		switch (key) {
			case "style":
				setValueForStyles(domElement, value, prevValue);
				break;
			case "dangerouslySetInnerHTML":
				if (null != value) {
					if ("object" !== typeof value || !("__html" in value)) throw Error(formatProdErrorMessage(61));
					key = value.__html;
					if (null != key) {
						if (null != props.children) throw Error(formatProdErrorMessage(60));
						domElement.innerHTML = key;
					}
				}
				break;
			case "children":
				"string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
				break;
			case "onScroll":
				null != value && listenToNonDelegatedEvent("scroll", domElement);
				break;
			case "onScrollEnd":
				null != value && listenToNonDelegatedEvent("scrollend", domElement);
				break;
			case "onClick":
				null != value && (domElement.onclick = noop$1);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!registrationNameDependencies.hasOwnProperty(key)) a: {
				if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
					"function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
					domElement.addEventListener(tag, value, props);
					break a;
				}
				key in domElement ? domElement[key] = value : !0 === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
			}
		}
	}
	function setInitialProperties(domElement, tag, props) {
		switch (tag) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				listenToNonDelegatedEvent("error", domElement);
				listenToNonDelegatedEvent("load", domElement);
				var hasSrc = !1, hasSrcSet = !1, propKey;
				for (propKey in props) if (props.hasOwnProperty(propKey)) {
					var propValue = props[propKey];
					if (null != propValue) switch (propKey) {
						case "src":
							hasSrc = !0;
							break;
						case "srcSet":
							hasSrcSet = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(137, tag));
						default: setProp(domElement, tag, propKey, propValue, props, null);
					}
				}
				hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
				hasSrc && setProp(domElement, tag, "src", props.src, props, null);
				return;
			case "input":
				listenToNonDelegatedEvent("invalid", domElement);
				var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
				for (hasSrc in props) if (props.hasOwnProperty(hasSrc)) {
					var propValue$184 = props[hasSrc];
					if (null != propValue$184) switch (hasSrc) {
						case "name":
							hasSrcSet = propValue$184;
							break;
						case "type":
							propValue = propValue$184;
							break;
						case "checked":
							checked = propValue$184;
							break;
						case "defaultChecked":
							defaultChecked = propValue$184;
							break;
						case "value":
							propKey = propValue$184;
							break;
						case "defaultValue":
							defaultValue = propValue$184;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (null != propValue$184) throw Error(formatProdErrorMessage(137, tag));
							break;
						default: setProp(domElement, tag, hasSrc, propValue$184, props, null);
					}
				}
				initInput(domElement, propKey, defaultValue, checked, defaultChecked, propValue, hasSrcSet, !1);
				return;
			case "select":
				listenToNonDelegatedEvent("invalid", domElement);
				hasSrc = propValue = propKey = null;
				for (hasSrcSet in props) if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue)) switch (hasSrcSet) {
					case "value":
						propKey = defaultValue;
						break;
					case "defaultValue":
						propValue = defaultValue;
						break;
					case "multiple": hasSrc = defaultValue;
					default: setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
				}
				tag = propKey;
				props = propValue;
				domElement.multiple = !!hasSrc;
				null != tag ? updateOptions(domElement, !!hasSrc, tag, !1) : null != props && updateOptions(domElement, !!hasSrc, props, !0);
				return;
			case "textarea":
				listenToNonDelegatedEvent("invalid", domElement);
				propKey = hasSrcSet = hasSrc = null;
				for (propValue in props) if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue)) switch (propValue) {
					case "value":
						hasSrc = defaultValue;
						break;
					case "defaultValue":
						hasSrcSet = defaultValue;
						break;
					case "children":
						propKey = defaultValue;
						break;
					case "dangerouslySetInnerHTML":
						if (null != defaultValue) throw Error(formatProdErrorMessage(91));
						break;
					default: setProp(domElement, tag, propValue, defaultValue, props, null);
				}
				initTextarea(domElement, hasSrc, hasSrcSet, propKey);
				return;
			case "option":
				for (checked in props) if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc)) switch (checked) {
					case "selected":
						domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
						break;
					default: setProp(domElement, tag, checked, hasSrc, props, null);
				}
				return;
			case "dialog":
				listenToNonDelegatedEvent("beforetoggle", domElement);
				listenToNonDelegatedEvent("toggle", domElement);
				listenToNonDelegatedEvent("cancel", domElement);
				listenToNonDelegatedEvent("close", domElement);
				break;
			case "iframe":
			case "object":
				listenToNonDelegatedEvent("load", domElement);
				break;
			case "video":
			case "audio":
				for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++) listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
				break;
			case "image":
				listenToNonDelegatedEvent("error", domElement);
				listenToNonDelegatedEvent("load", domElement);
				break;
			case "details":
				listenToNonDelegatedEvent("toggle", domElement);
				break;
			case "embed":
			case "source":
			case "link": listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (defaultChecked in props) if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc)) switch (defaultChecked) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(formatProdErrorMessage(137, tag));
					default: setProp(domElement, tag, defaultChecked, hasSrc, props, null);
				}
				return;
			default: if (isCustomElement(tag)) {
				for (propValue$184 in props) props.hasOwnProperty(propValue$184) && (hasSrc = props[propValue$184], void 0 !== hasSrc && setPropOnCustomElement(domElement, tag, propValue$184, hasSrc, props, void 0));
				return;
			}
		}
		for (defaultValue in props) props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
		switch (tag) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
				for (propKey in lastProps) {
					var lastProp = lastProps[propKey];
					if (lastProps.hasOwnProperty(propKey) && null != lastProp) switch (propKey) {
						case "checked": break;
						case "value": break;
						case "defaultValue": lastDefaultValue = lastProp;
						default: nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
					}
				}
				for (var propKey$201 in nextProps) {
					var propKey = nextProps[propKey$201];
					lastProp = lastProps[propKey$201];
					if (nextProps.hasOwnProperty(propKey$201) && (null != propKey || null != lastProp)) switch (propKey$201) {
						case "type":
							type = propKey;
							break;
						case "name":
							name = propKey;
							break;
						case "checked":
							checked = propKey;
							break;
						case "defaultChecked":
							defaultChecked = propKey;
							break;
						case "value":
							value = propKey;
							break;
						case "defaultValue":
							defaultValue = propKey;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (null != propKey) throw Error(formatProdErrorMessage(137, tag));
							break;
						default: propKey !== lastProp && setProp(domElement, tag, propKey$201, propKey, nextProps, lastProp);
					}
				}
				updateInput(domElement, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name);
				return;
			case "select":
				propKey = value = defaultValue = propKey$201 = null;
				for (type in lastProps) if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue) switch (type) {
					case "value": break;
					case "multiple": propKey = lastDefaultValue;
					default: nextProps.hasOwnProperty(type) || setProp(domElement, tag, type, null, nextProps, lastDefaultValue);
				}
				for (name in nextProps) if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue)) switch (name) {
					case "value":
						propKey$201 = type;
						break;
					case "defaultValue":
						defaultValue = type;
						break;
					case "multiple": value = type;
					default: type !== lastDefaultValue && setProp(domElement, tag, name, type, nextProps, lastDefaultValue);
				}
				tag = defaultValue;
				lastProps = value;
				nextProps = propKey;
				null != propKey$201 ? updateOptions(domElement, !!lastProps, propKey$201, !1) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, !0) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
				return;
			case "textarea":
				propKey = propKey$201 = null;
				for (defaultValue in lastProps) if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue)) switch (defaultValue) {
					case "value": break;
					case "children": break;
					default: setProp(domElement, tag, defaultValue, null, nextProps, name);
				}
				for (value in nextProps) if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type)) switch (value) {
					case "value":
						propKey$201 = name;
						break;
					case "defaultValue":
						propKey = name;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (null != name) throw Error(formatProdErrorMessage(91));
						break;
					default: name !== type && setProp(domElement, tag, value, name, nextProps, type);
				}
				updateTextarea(domElement, propKey$201, propKey);
				return;
			case "option":
				for (var propKey$217 in lastProps) if (propKey$201 = lastProps[propKey$217], lastProps.hasOwnProperty(propKey$217) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$217)) switch (propKey$217) {
					case "selected":
						domElement.selected = !1;
						break;
					default: setProp(domElement, tag, propKey$217, null, nextProps, propKey$201);
				}
				for (lastDefaultValue in nextProps) if (propKey$201 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$201 !== propKey && (null != propKey$201 || null != propKey)) switch (lastDefaultValue) {
					case "selected":
						domElement.selected = propKey$201 && "function" !== typeof propKey$201 && "symbol" !== typeof propKey$201;
						break;
					default: setProp(domElement, tag, lastDefaultValue, propKey$201, nextProps, propKey);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var propKey$222 in lastProps) propKey$201 = lastProps[propKey$222], lastProps.hasOwnProperty(propKey$222) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$222) && setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
				for (checked in nextProps) if (propKey$201 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$201 !== propKey && (null != propKey$201 || null != propKey)) switch (checked) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (null != propKey$201) throw Error(formatProdErrorMessage(137, tag));
						break;
					default: setProp(domElement, tag, checked, propKey$201, nextProps, propKey);
				}
				return;
			default: if (isCustomElement(tag)) {
				for (var propKey$227 in lastProps) propKey$201 = lastProps[propKey$227], lastProps.hasOwnProperty(propKey$227) && void 0 !== propKey$201 && !nextProps.hasOwnProperty(propKey$227) && setPropOnCustomElement(domElement, tag, propKey$227, void 0, nextProps, propKey$201);
				for (defaultChecked in nextProps) propKey$201 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$201 === propKey || void 0 === propKey$201 && void 0 === propKey || setPropOnCustomElement(domElement, tag, defaultChecked, propKey$201, nextProps, propKey);
				return;
			}
		}
		for (var propKey$232 in lastProps) propKey$201 = lastProps[propKey$232], lastProps.hasOwnProperty(propKey$232) && null != propKey$201 && !nextProps.hasOwnProperty(propKey$232) && setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
		for (lastProp in nextProps) propKey$201 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$201 === propKey || null == propKey$201 && null == propKey || setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
	}
	function isLikelyStaticResource(initiatorType) {
		switch (initiatorType) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function estimateBandwidth() {
		if ("function" === typeof performance.getEntriesByType) {
			for (var count = 0, bits = 0, resourceEntries = performance.getEntriesByType("resource"), i = 0; i < resourceEntries.length; i++) {
				var entry = resourceEntries[i], transferSize = entry.transferSize, initiatorType = entry.initiatorType, duration = entry.duration;
				if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
					initiatorType = 0;
					duration = entry.responseEnd;
					for (i += 1; i < resourceEntries.length; i++) {
						var overlapEntry = resourceEntries[i], overlapStartTime = overlapEntry.startTime;
						if (overlapStartTime > duration) break;
						var overlapTransferSize = overlapEntry.transferSize, overlapInitiatorType = overlapEntry.initiatorType;
						overlapTransferSize && isLikelyStaticResource(overlapInitiatorType) && (overlapEntry = overlapEntry.responseEnd, initiatorType += overlapTransferSize * (overlapEntry < duration ? 1 : (duration - overlapStartTime) / (overlapEntry - overlapStartTime)));
					}
					--i;
					bits += 8 * (transferSize + initiatorType) / (entry.duration / 1e3);
					count++;
					if (10 < count) break;
				}
			}
			if (0 < count) return bits / count / 1e6;
		}
		return navigator.connection && (count = navigator.connection.downlink, "number" === typeof count) ? count : 5;
	}
	var eventsEnabled = null, selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
		return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
		switch (namespaceURI) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function getChildHostContextProd(parentNamespace, type) {
		if (0 === parentNamespace) switch (type) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
		return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
		var event = window.event;
		if (event && "popstate" === event.type) {
			if (event === currentPopstateTransitionEvent) return !1;
			currentPopstateTransitionEvent = event;
			return !0;
		}
		currentPopstateTransitionEvent = null;
		return !1;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0, cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0, localPromise = "function" === typeof Promise ? Promise : void 0, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
		return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	} : scheduleTimeout;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	function isSingletonScope(type) {
		return "head" === type;
	}
	function clearHydrationBoundary(parentInstance, hydrationInstance) {
		var node = hydrationInstance, depth = 0;
		do {
			var nextNode = node.nextSibling;
			parentInstance.removeChild(node);
			if (nextNode && 8 === nextNode.nodeType) if (node = nextNode.data, "/$" === node || "/&" === node) {
				if (0 === depth) {
					parentInstance.removeChild(nextNode);
					retryIfBlockedOn(hydrationInstance);
					return;
				}
				depth--;
			} else if ("$" === node || "$?" === node || "$~" === node || "$!" === node || "&" === node) depth++;
			else if ("html" === node) releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
			else if ("head" === node) {
				node = parentInstance.ownerDocument.head;
				releaseSingletonInstance(node);
				for (var node$jscomp$0 = node.firstChild; node$jscomp$0;) {
					var nextNode$jscomp$0 = node$jscomp$0.nextSibling, nodeName = node$jscomp$0.nodeName;
					node$jscomp$0[internalHoistableMarker] || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node$jscomp$0.rel.toLowerCase() || node.removeChild(node$jscomp$0);
					node$jscomp$0 = nextNode$jscomp$0;
				}
			} else "body" === node && releaseSingletonInstance(parentInstance.ownerDocument.body);
			node = nextNode;
		} while (node);
		retryIfBlockedOn(hydrationInstance);
	}
	function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
		var node = suspenseInstance;
		suspenseInstance = 0;
		do {
			var nextNode = node.nextSibling;
			1 === node.nodeType ? isHidden ? (node._stashedDisplay = node.style.display, node.style.display = "none") : (node.style.display = node._stashedDisplay || "", "" === node.getAttribute("style") && node.removeAttribute("style")) : 3 === node.nodeType && (isHidden ? (node._stashedText = node.nodeValue, node.nodeValue = "") : node.nodeValue = node._stashedText || "");
			if (nextNode && 8 === nextNode.nodeType) if (node = nextNode.data, "/$" === node) if (0 === suspenseInstance) break;
			else suspenseInstance--;
			else "$" !== node && "$?" !== node && "$~" !== node && "$!" !== node || suspenseInstance++;
			node = nextNode;
		} while (node);
	}
	function clearContainerSparingly(container) {
		var nextNode = container.firstChild;
		nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
		for (; nextNode;) {
			var node = nextNode;
			nextNode = nextNode.nextSibling;
			switch (node.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					clearContainerSparingly(node);
					detachDeletedInstance(node);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if ("stylesheet" === node.rel.toLowerCase()) continue;
			}
			container.removeChild(node);
		}
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
		for (; 1 === instance.nodeType;) {
			var anyProps = props;
			if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
				if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type)) break;
			} else if (!inRootOrSingleton) if ("input" === type && "hidden" === instance.type) {
				var name = null == anyProps.name ? null : "" + anyProps.name;
				if ("hidden" === anyProps.type && instance.getAttribute("name") === name) return instance;
			} else return instance;
			else if (!instance[internalHoistableMarker]) switch (type) {
				case "meta":
					if (!instance.hasAttribute("itemprop")) break;
					return instance;
				case "link":
					name = instance.getAttribute("rel");
					if ("stylesheet" === name && instance.hasAttribute("data-precedence")) break;
					else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href || "" === anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title)) break;
					return instance;
				case "style":
					if (instance.hasAttribute("data-precedence")) break;
					return instance;
				case "script":
					name = instance.getAttribute("src");
					if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop")) break;
					return instance;
				default: return instance;
			}
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) break;
		}
		return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
		if ("" === text) return null;
		for (; 3 !== instance.nodeType;) {
			if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton) return null;
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) return null;
		}
		return instance;
	}
	function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
		for (; 8 !== instance.nodeType;) {
			if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton) return null;
			instance = getNextHydratable(instance.nextSibling);
			if (null === instance) return null;
		}
		return instance;
	}
	function isSuspenseInstancePending(instance) {
		return "$?" === instance.data || "$~" === instance.data;
	}
	function isSuspenseInstanceFallback(instance) {
		return "$!" === instance.data || "$?" === instance.data && "loading" !== instance.ownerDocument.readyState;
	}
	function registerSuspenseInstanceRetry(instance, callback) {
		var ownerDocument = instance.ownerDocument;
		if ("$~" === instance.data) instance._reactRetry = callback;
		else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState) callback();
		else {
			var listener = function() {
				callback();
				ownerDocument.removeEventListener("DOMContentLoaded", listener);
			};
			ownerDocument.addEventListener("DOMContentLoaded", listener);
			instance._reactRetry = listener;
		}
	}
	function getNextHydratable(node) {
		for (; null != node; node = node.nextSibling) {
			var nodeType = node.nodeType;
			if (1 === nodeType || 3 === nodeType) break;
			if (8 === nodeType) {
				nodeType = node.data;
				if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "$~" === nodeType || "&" === nodeType || "F!" === nodeType || "F" === nodeType) break;
				if ("/$" === nodeType || "/&" === nodeType) return null;
			}
		}
		return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
		hydrationInstance = hydrationInstance.nextSibling;
		for (var depth = 0; hydrationInstance;) {
			if (8 === hydrationInstance.nodeType) {
				var data = hydrationInstance.data;
				if ("/$" === data || "/&" === data) {
					if (0 === depth) return getNextHydratable(hydrationInstance.nextSibling);
					depth--;
				} else "$" !== data && "$!" !== data && "$?" !== data && "$~" !== data && "&" !== data || depth++;
			}
			hydrationInstance = hydrationInstance.nextSibling;
		}
		return null;
	}
	function getParentHydrationBoundary(targetInstance) {
		targetInstance = targetInstance.previousSibling;
		for (var depth = 0; targetInstance;) {
			if (8 === targetInstance.nodeType) {
				var data = targetInstance.data;
				if ("$" === data || "$!" === data || "$?" === data || "$~" === data || "&" === data) {
					if (0 === depth) return targetInstance;
					depth--;
				} else "/$" !== data && "/&" !== data || depth++;
			}
			targetInstance = targetInstance.previousSibling;
		}
		return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
		props = getOwnerDocumentFromRootContainer(rootContainerInstance);
		switch (type) {
			case "html":
				type = props.documentElement;
				if (!type) throw Error(formatProdErrorMessage(452));
				return type;
			case "head":
				type = props.head;
				if (!type) throw Error(formatProdErrorMessage(453));
				return type;
			case "body":
				type = props.body;
				if (!type) throw Error(formatProdErrorMessage(454));
				return type;
			default: throw Error(formatProdErrorMessage(451));
		}
	}
	function releaseSingletonInstance(instance) {
		for (var attributes = instance.attributes; attributes.length;) instance.removeAttributeNode(attributes[0]);
		detachDeletedInstance(instance);
	}
	var preloadPropsMap = /* @__PURE__ */ new Map(), preconnectsSet = /* @__PURE__ */ new Set();
	function getHoistableRoot(container) {
		return "function" === typeof container.getRootNode ? container.getRootNode() : 9 === container.nodeType ? container : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: flushSyncWork,
		r: requestFormReset,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function flushSyncWork() {
		var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
		return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
		var formInst = getInstanceFromNode(form);
		null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
		var ownerDocument = globalDocument;
		if (ownerDocument && "string" === typeof href && href) {
			var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
			limitedEscapedHref = "link[rel=\"" + rel + "\"][href=\"" + limitedEscapedHref + "\"]";
			"string" === typeof crossOrigin && (limitedEscapedHref += "[crossorigin=\"" + crossOrigin + "\"]");
			preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = {
				rel,
				crossOrigin,
				href
			}, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
		}
	}
	function prefetchDNS(href) {
		previousDispatcher.D(href);
		preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
		previousDispatcher.C(href, crossOrigin);
		preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
		previousDispatcher.L(href, as, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href && as) {
			var preloadSelector = "link[rel=\"preload\"][as=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(as) + "\"]";
			"image" === as ? options && options.imageSrcSet ? (preloadSelector += "[imagesrcset=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(options.imageSrcSet) + "\"]", "string" === typeof options.imageSizes && (preloadSelector += "[imagesizes=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(options.imageSizes) + "\"]")) : preloadSelector += "[href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]" : preloadSelector += "[href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]";
			var key = preloadSelector;
			switch (as) {
				case "style":
					key = getStyleKey(href);
					break;
				case "script": key = getScriptKey(href);
			}
			preloadPropsMap.has(key) || (href = assign({
				rel: "preload",
				href: "image" === as && options && options.imageSrcSet ? void 0 : href,
				as
			}, options), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
		}
	}
	function preloadModule(href, options) {
		previousDispatcher.m(href, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href) {
			var as = options && "string" === typeof options.as ? options.as : "script", preloadSelector = "link[rel=\"modulepreload\"][as=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(as) + "\"][href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"]", key = preloadSelector;
			switch (as) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": key = getScriptKey(href);
			}
			if (!preloadPropsMap.has(key) && (href = assign({
				rel: "modulepreload",
				href
			}, options), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
				switch (as) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (ownerDocument.querySelector(getScriptSelectorFromKey(key))) return;
				}
				as = ownerDocument.createElement("link");
				setInitialProperties(as, "link", href);
				markNodeAsHoistable(as);
				ownerDocument.head.appendChild(as);
			}
		}
	}
	function preinitStyle(href, precedence, options) {
		previousDispatcher.S(href, precedence, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && href) {
			var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
			precedence = precedence || "default";
			var resource = styles.get(key);
			if (!resource) {
				var state = {
					loading: 0,
					preload: null
				};
				if (resource = ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) state.loading = 5;
				else {
					href = assign({
						rel: "stylesheet",
						href,
						"data-precedence": precedence
					}, options);
					(options = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options);
					var link = resource = ownerDocument.createElement("link");
					markNodeAsHoistable(link);
					setInitialProperties(link, "link", href);
					link._p = new Promise(function(resolve, reject) {
						link.onload = resolve;
						link.onerror = reject;
					});
					link.addEventListener("load", function() {
						state.loading |= 1;
					});
					link.addEventListener("error", function() {
						state.loading |= 2;
					});
					state.loading |= 4;
					insertStylesheet(resource, precedence, ownerDocument);
				}
				resource = {
					type: "stylesheet",
					instance: resource,
					count: 1,
					state
				};
				styles.set(key, resource);
			}
		}
	}
	function preinitScript(src, options) {
		previousDispatcher.X(src, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && src) {
			var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
			resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({
				src,
				async: !0
			}, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
				type: "script",
				instance: resource,
				count: 1,
				state: null
			}, scripts.set(key, resource));
		}
	}
	function preinitModuleScript(src, options) {
		previousDispatcher.M(src, options);
		var ownerDocument = globalDocument;
		if (ownerDocument && src) {
			var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
			resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({
				src,
				async: !0,
				type: "module"
			}, options), (options = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
				type: "script",
				instance: resource,
				count: 1,
				state: null
			}, scripts.set(key, resource));
		}
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
		var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
		if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
		switch (type) {
			case "meta":
			case "title": return null;
			case "style": return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(JSCompiler_inline_result).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, pendingProps.set(currentProps, currentResource)), currentResource) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
					type = getStyleKey(pendingProps.href);
					var styles$243 = getResourcesFromRoot(JSCompiler_inline_result).hoistableStyles, resource$244 = styles$243.get(type);
					resource$244 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$244 = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, styles$243.set(type, resource$244), (styles$243 = JSCompiler_inline_result.querySelector(getStylesheetSelectorFromKey(type))) && !styles$243._p && (resource$244.instance = styles$243, resource$244.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
						rel: "preload",
						as: "style",
						href: pendingProps.href,
						crossOrigin: pendingProps.crossOrigin,
						integrity: pendingProps.integrity,
						media: pendingProps.media,
						hrefLang: pendingProps.hrefLang,
						referrerPolicy: pendingProps.referrerPolicy
					}, preloadPropsMap.set(type, pendingProps), styles$243 || preloadStylesheet(JSCompiler_inline_result, type, pendingProps, resource$244.state)));
					if (currentProps && null === currentResource) throw Error(formatProdErrorMessage(528, ""));
					return resource$244;
				}
				if (currentProps && null !== currentResource) throw Error(formatProdErrorMessage(529, ""));
				return null;
			case "script": return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(JSCompiler_inline_result).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, pendingProps.set(currentProps, currentResource)), currentResource) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(formatProdErrorMessage(444, type));
		}
	}
	function getStyleKey(href) {
		return "href=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(href) + "\"";
	}
	function getStylesheetSelectorFromKey(key) {
		return "link[rel=\"stylesheet\"][" + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
		return assign({}, rawProps, {
			"data-precedence": rawProps.precedence,
			precedence: null
		});
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
		ownerDocument.querySelector("link[rel=\"preload\"][as=\"style\"][" + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
			return state.loading |= 1;
		}), key.addEventListener("error", function() {
			return state.loading |= 2;
		}), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
		return "[src=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(src) + "\"]";
	}
	function getScriptSelectorFromKey(key) {
		return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
		resource.count++;
		if (null === resource.instance) switch (resource.type) {
			case "style":
				var instance = hoistableRoot.querySelector("style[data-href~=\"" + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + "\"]");
				if (instance) return resource.instance = instance, markNodeAsHoistable(instance), instance;
				var styleProps = assign({}, props, {
					"data-href": props.href,
					"data-precedence": props.precedence,
					href: null,
					precedence: null
				});
				instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement("style");
				markNodeAsHoistable(instance);
				setInitialProperties(instance, "style", styleProps);
				insertStylesheet(instance, props.precedence, hoistableRoot);
				return resource.instance = instance;
			case "stylesheet":
				styleProps = getStyleKey(props.href);
				var instance$249 = hoistableRoot.querySelector(getStylesheetSelectorFromKey(styleProps));
				if (instance$249) return resource.state.loading |= 4, resource.instance = instance$249, markNodeAsHoistable(instance$249), instance$249;
				instance = stylesheetPropsFromRawProps(props);
				(styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
				instance$249 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
				markNodeAsHoistable(instance$249);
				var linkInstance = instance$249;
				linkInstance._p = new Promise(function(resolve, reject) {
					linkInstance.onload = resolve;
					linkInstance.onerror = reject;
				});
				setInitialProperties(instance$249, "link", instance);
				resource.state.loading |= 4;
				insertStylesheet(instance$249, props.precedence, hoistableRoot);
				return resource.instance = instance$249;
			case "script":
				instance$249 = getScriptKey(props.src);
				if (styleProps = hoistableRoot.querySelector(getScriptSelectorFromKey(instance$249))) return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
				instance = props;
				if (styleProps = preloadPropsMap.get(instance$249)) instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
				hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
				styleProps = hoistableRoot.createElement("script");
				markNodeAsHoistable(styleProps);
				setInitialProperties(styleProps, "link", instance);
				hoistableRoot.head.appendChild(styleProps);
				return resource.instance = styleProps;
			case "void": return null;
			default: throw Error(formatProdErrorMessage(443, resource.type));
		}
		else "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
		return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
		for (var nodes = root.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (node.dataset.precedence === precedence) prior = node;
			else if (prior !== last) break;
		}
		prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root.nodeType ? root.head : root, precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
		stylesheetProps.crossOrigin ??= preloadProps.crossOrigin;
		stylesheetProps.referrerPolicy ??= preloadProps.referrerPolicy;
		stylesheetProps.title ??= preloadProps.title;
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
		scriptProps.crossOrigin ??= preloadProps.crossOrigin;
		scriptProps.referrerPolicy ??= preloadProps.referrerPolicy;
		scriptProps.integrity ??= preloadProps.integrity;
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
		if (null === tagCaches) {
			var cache = /* @__PURE__ */ new Map();
			var caches = tagCaches = /* @__PURE__ */ new Map();
			caches.set(ownerDocument, cache);
		} else caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
		if (cache.has(type)) return cache;
		cache.set(type, null);
		ownerDocument = ownerDocument.getElementsByTagName(type);
		for (caches = 0; caches < ownerDocument.length; caches++) {
			var node = ownerDocument[caches];
			if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
				var nodeKey = node.getAttribute(keyAttribute) || "";
				nodeKey = type + nodeKey;
				var existing = cache.get(nodeKey);
				existing ? existing.push(node) : cache.set(nodeKey, [node]);
			}
		}
		return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
		hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
		hoistableRoot.head.insertBefore(instance, "title" === type ? hoistableRoot.querySelector("head > title") : null);
	}
	function isHostHoistableType(type, props, hostContext) {
		if (1 === hostContext || null != props.itemProp) return !1;
		switch (type) {
			case "meta":
			case "title": return !0;
			case "style":
				if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href) break;
				return !0;
			case "link":
				if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError) break;
				switch (props.rel) {
					case "stylesheet": return type = props.disabled, "string" === typeof props.precedence && null == type;
					default: return !0;
				}
			case "script": if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src) return !0;
		}
		return !1;
	}
	function preloadResource(resource) {
		return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? !1 : !0;
	}
	function suspendResource(state, hoistableRoot, resource, props) {
		if ("stylesheet" === resource.type && ("string" !== typeof props.media || !1 !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
			if (null === resource.instance) {
				var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(getStylesheetSelectorFromKey(key));
				if (instance) {
					hoistableRoot = instance._p;
					null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
					resource.state.loading |= 4;
					resource.instance = instance;
					markNodeAsHoistable(instance);
					return;
				}
				instance = hoistableRoot.ownerDocument || hoistableRoot;
				props = stylesheetPropsFromRawProps(props);
				(key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
				instance = instance.createElement("link");
				markNodeAsHoistable(instance);
				var linkInstance = instance;
				linkInstance._p = new Promise(function(resolve, reject) {
					linkInstance.onload = resolve;
					linkInstance.onerror = reject;
				});
				setInitialProperties(instance, "link", props);
				resource.instance = instance;
			}
			null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
			state.stylesheets.set(resource, hoistableRoot);
			(hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
		}
	}
	var estimatedBytesWithinLimit = 0;
	function waitForCommitToBeReady(state, timeoutOffset) {
		state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
		return 0 < state.count || 0 < state.imgCount ? function(commit) {
			var stylesheetTimer = setTimeout(function() {
				state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
				if (state.unsuspend) {
					var unsuspend = state.unsuspend;
					state.unsuspend = null;
					unsuspend();
				}
			}, 6e4 + timeoutOffset);
			0 < state.imgBytes && 0 === estimatedBytesWithinLimit && (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
			var imgTimer = setTimeout(function() {
				state.waitingForImages = !1;
				if (0 === state.count && (state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets), state.unsuspend)) {
					var unsuspend = state.unsuspend;
					state.unsuspend = null;
					unsuspend();
				}
			}, (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) + timeoutOffset);
			state.unsuspend = commit;
			return function() {
				state.unsuspend = null;
				clearTimeout(stylesheetTimer);
				clearTimeout(imgTimer);
			};
		} : null;
	}
	function onUnsuspend() {
		this.count--;
		if (0 === this.count && (0 === this.imgCount || !this.waitingForImages)) {
			if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
			else if (this.unsuspend) {
				var unsuspend = this.unsuspend;
				this.unsuspend = null;
				unsuspend();
			}
		}
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
		state.stylesheets = null;
		null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
		if (!(resource.state.loading & 4)) {
			var precedences = precedencesByRoot.get(root);
			if (precedences) var last = precedences.get(null);
			else {
				precedences = /* @__PURE__ */ new Map();
				precedencesByRoot.set(root, precedences);
				for (var nodes = root.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < nodes.length; i++) {
					var node = nodes[i];
					if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media")) precedences.set(node.dataset.precedence, node), last = node;
				}
				last && precedences.set(null, last);
			}
			nodes = resource.instance;
			node = nodes.getAttribute("data-precedence");
			i = precedences.get(node) || last;
			i === last && precedences.set(null, nodes);
			precedences.set(node, nodes);
			this.count++;
			last = onUnsuspend.bind(this);
			nodes.addEventListener("load", last);
			nodes.addEventListener("error", last);
			i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root = 9 === root.nodeType ? root.head : root, root.insertBefore(nodes, root.firstChild));
			resource.state.loading |= 4;
		}
	}
	var HostTransitionContext = {
		$$typeof: REACT_CONTEXT_TYPE,
		Provider: null,
		Consumer: null,
		_currentValue: sharedNotPendingObject,
		_currentValue2: sharedNotPendingObject,
		_threadCount: 0
	};
	function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState) {
		this.tag = 1;
		this.containerInfo = containerInfo;
		this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
		this.callbackPriority = 0;
		this.expirationTimes = createLaneMap(-1);
		this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = createLaneMap(0);
		this.hiddenUpdates = createLaneMap(null);
		this.identifierPrefix = identifierPrefix;
		this.onUncaughtError = onUncaughtError;
		this.onCaughtError = onCaughtError;
		this.onRecoverableError = onRecoverableError;
		this.pooledCache = null;
		this.pooledCacheLanes = 0;
		this.formState = formState;
		this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, formState, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator) {
		containerInfo = new FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, onDefaultTransitionIndicator, formState);
		tag = 1;
		!0 === isStrictMode && (tag |= 24);
		isStrictMode = createFiberImplClass(3, null, null, tag);
		containerInfo.current = isStrictMode;
		isStrictMode.stateNode = containerInfo;
		tag = createCache();
		tag.refCount++;
		containerInfo.pooledCache = tag;
		tag.refCount++;
		isStrictMode.memoizedState = {
			element: initialChildren,
			isDehydrated: hydrate,
			cache: tag
		};
		initializeUpdateQueue(isStrictMode);
		return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
		if (!parentComponent) return emptyContextObject;
		parentComponent = emptyContextObject;
		return parentComponent;
	}
	function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
		parentComponent = getContextForSubtree(parentComponent);
		null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
		container = createUpdate(lane);
		container.payload = { element };
		callback = void 0 === callback ? null : callback;
		null !== callback && (container.callback = callback);
		element = enqueueUpdate(rootFiber, container, lane);
		null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
		fiber = fiber.memoizedState;
		if (null !== fiber && null !== fiber.dehydrated) {
			var a = fiber.retryLane;
			fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
		}
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
		markRetryLaneImpl(fiber, retryLane);
		(fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
		if (13 === fiber.tag || 31 === fiber.tag) {
			var root = enqueueConcurrentRenderForLane(fiber, 67108864);
			null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
			markRetryLaneIfNotHydrated(fiber, 67108864);
		}
	}
	function attemptHydrationAtCurrentPriority(fiber) {
		if (13 === fiber.tag || 31 === fiber.tag) {
			var lane = requestUpdateLane();
			lane = getBumpedLaneForHydrationByLane(lane);
			var root = enqueueConcurrentRenderForLane(fiber, lane);
			null !== root && scheduleUpdateOnFiber(root, fiber, lane);
			markRetryLaneIfNotHydrated(fiber, lane);
		}
	}
	var _enabled = !0;
	function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
		var prevTransition = ReactSharedInternals.T;
		ReactSharedInternals.T = null;
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
		}
	}
	function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
		var prevTransition = ReactSharedInternals.T;
		ReactSharedInternals.T = null;
		var previousPriority = ReactDOMSharedInternals.p;
		try {
			ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
		} finally {
			ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
		}
	}
	function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		if (_enabled) {
			var blockedOn = findInstanceBlockingEvent(nativeEvent);
			if (null === blockedOn) dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer), clearIfContinuousEvent(domEventName, nativeEvent);
			else if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) nativeEvent.stopPropagation();
			else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
				for (; null !== blockedOn;) {
					var fiber = getInstanceFromNode(blockedOn);
					if (null !== fiber) switch (fiber.tag) {
						case 3:
							fiber = fiber.stateNode;
							if (fiber.current.memoizedState.isDehydrated) {
								var lanes = getHighestPriorityLanes(fiber.pendingLanes);
								if (0 !== lanes) {
									var root = fiber;
									root.pendingLanes |= 2;
									for (root.entangledLanes |= 2; lanes;) {
										var lane = 1 << 31 - clz32(lanes);
										root.entanglements[1] |= lane;
										lanes &= ~lane;
									}
									ensureRootIsScheduled(fiber);
									0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0, !1));
								}
							}
							break;
						case 31:
						case 13: root = enqueueConcurrentRenderForLane(fiber, 2), null !== root && scheduleUpdateOnFiber(root, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
					}
					fiber = findInstanceBlockingEvent(nativeEvent);
					null === fiber && dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer);
					if (fiber === blockedOn) break;
					blockedOn = fiber;
				}
				null !== blockedOn && nativeEvent.stopPropagation();
			} else dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
		}
	}
	function findInstanceBlockingEvent(nativeEvent) {
		nativeEvent = getEventTarget(nativeEvent);
		return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
		return_targetInst = null;
		targetNode = getClosestInstanceFromNode(targetNode);
		if (null !== targetNode) {
			var nearestMounted = getNearestMountedFiber(targetNode);
			if (null === nearestMounted) targetNode = null;
			else {
				var tag = nearestMounted.tag;
				if (13 === tag) {
					targetNode = getSuspenseInstanceFromFiber(nearestMounted);
					if (null !== targetNode) return targetNode;
					targetNode = null;
				} else if (31 === tag) {
					targetNode = getActivityInstanceFromFiber(nearestMounted);
					if (null !== targetNode) return targetNode;
					targetNode = null;
				} else if (3 === tag) {
					if (nearestMounted.stateNode.current.memoizedState.isDehydrated) return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
					targetNode = null;
				} else nearestMounted !== targetNode && (targetNode = null);
			}
		}
		return_targetInst = targetNode;
		return null;
	}
	function getEventPriority(domEventName) {
		switch (domEventName) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (getCurrentPriorityLevel()) {
				case ImmediatePriority: return 2;
				case UserBlockingPriority: return 8;
				case NormalPriority$1:
				case LowPriority: return 32;
				case IdlePriority: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hasScheduledReplayAttempt = !1, queuedFocus = null, queuedDrag = null, queuedMouse = null, queuedPointers = /* @__PURE__ */ new Map(), queuedPointerCaptures = /* @__PURE__ */ new Map(), queuedExplicitHydrationTargets = [], discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function clearIfContinuousEvent(domEventName, nativeEvent) {
		switch (domEventName) {
			case "focusin":
			case "focusout":
				queuedFocus = null;
				break;
			case "dragenter":
			case "dragleave":
				queuedDrag = null;
				break;
			case "mouseover":
			case "mouseout":
				queuedMouse = null;
				break;
			case "pointerover":
			case "pointerout":
				queuedPointers.delete(nativeEvent.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": queuedPointerCaptures.delete(nativeEvent.pointerId);
		}
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent) return existingQueuedEvent = {
			blockedOn,
			domEventName,
			eventSystemFlags,
			nativeEvent,
			targetContainers: [targetContainer]
		}, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
		existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
		blockedOn = existingQueuedEvent.targetContainers;
		null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
		return existingQueuedEvent;
	}
	function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
		switch (domEventName) {
			case "focusin": return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "dragenter": return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "mouseover": return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent), !0;
			case "pointerover":
				var pointerId = nativeEvent.pointerId;
				queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent));
				return !0;
			case "gotpointercapture": return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)), !0;
		}
		return !1;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
		var targetInst = getClosestInstanceFromNode(queuedTarget.target);
		if (null !== targetInst) {
			var nearestMounted = getNearestMountedFiber(targetInst);
			if (null !== nearestMounted) {
				if (targetInst = nearestMounted.tag, 13 === targetInst) {
					if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
						queuedTarget.blockedOn = targetInst;
						runWithPriority(queuedTarget.priority, function() {
							attemptHydrationAtCurrentPriority(nearestMounted);
						});
						return;
					}
				} else if (31 === targetInst) {
					if (targetInst = getActivityInstanceFromFiber(nearestMounted), null !== targetInst) {
						queuedTarget.blockedOn = targetInst;
						runWithPriority(queuedTarget.priority, function() {
							attemptHydrationAtCurrentPriority(nearestMounted);
						});
						return;
					}
				} else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
					queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
					return;
				}
			}
		}
		queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
		if (null !== queuedEvent.blockedOn) return !1;
		for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length;) {
			var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
			if (null === nextBlockedOn) {
				nextBlockedOn = queuedEvent.nativeEvent;
				var nativeEventClone = new nextBlockedOn.constructor(nextBlockedOn.type, nextBlockedOn);
				currentReplayingEvent = nativeEventClone;
				nextBlockedOn.target.dispatchEvent(nativeEventClone);
				currentReplayingEvent = null;
			} else return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, !1;
			targetContainers.shift();
		}
		return !0;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
		attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
		hasScheduledReplayAttempt = !1;
		null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
		null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
		null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
		queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
		queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
		queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = !0, Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents)));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
		lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, function() {
			lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
			for (var i = 0; i < formReplayingQueue.length; i += 3) {
				var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
				if ("function" !== typeof submitterOrAction) if (null === findInstanceBlockingTarget(submitterOrAction || form)) continue;
				else break;
				var formInst = getInstanceFromNode(form);
				null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(formInst, {
					pending: !0,
					data: formData,
					method: form.method,
					action: submitterOrAction
				}, submitterOrAction, formData));
			}
		}));
	}
	function retryIfBlockedOn(unblocked) {
		function unblock(queuedEvent) {
			return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
		}
		null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
		null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
		null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
		queuedPointers.forEach(unblock);
		queuedPointerCaptures.forEach(unblock);
		for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
			var queuedTarget = queuedExplicitHydrationTargets[i];
			queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
		}
		for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn);) attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
		i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
		if (null != i) for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
			var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
			if ("function" === typeof submitterOrAction) formProps || scheduleReplayQueueIfNeeded(i);
			else if (formProps) {
				var action = null;
				if (submitterOrAction && submitterOrAction.hasAttribute("formAction")) {
					if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null) action = formProps.formAction;
					else if (null !== findInstanceBlockingTarget(form)) continue;
				} else action = formProps.action;
				"function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
				scheduleReplayQueueIfNeeded(i);
			}
		}
	}
	function defaultOnDefaultTransitionIndicator() {
		function handleNavigate(event) {
			event.canIntercept && "react-transition" === event.info && event.intercept({
				handler: function() {
					return new Promise(function(resolve) {
						return pendingResolve = resolve;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function handleNavigateComplete() {
			null !== pendingResolve && (pendingResolve(), pendingResolve = null);
			isCancelled || setTimeout(startFakeNavigation, 20);
		}
		function startFakeNavigation() {
			if (!isCancelled && !navigation.transition) {
				var currentEntry = navigation.currentEntry;
				currentEntry && null != currentEntry.url && navigation.navigate(currentEntry.url, {
					state: currentEntry.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if ("object" === typeof navigation) {
			var isCancelled = !1, pendingResolve = null;
			navigation.addEventListener("navigate", handleNavigate);
			navigation.addEventListener("navigatesuccess", handleNavigateComplete);
			navigation.addEventListener("navigateerror", handleNavigateComplete);
			setTimeout(startFakeNavigation, 100);
			return function() {
				isCancelled = !0;
				navigation.removeEventListener("navigate", handleNavigate);
				navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
				navigation.removeEventListener("navigateerror", handleNavigateComplete);
				null !== pendingResolve && (pendingResolve(), pendingResolve = null);
			};
		}
	}
	function ReactDOMRoot(internalRoot) {
		this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
		var root = this._internalRoot;
		if (null === root) throw Error(formatProdErrorMessage(409));
		var current = root.current;
		updateContainerImpl(current, requestUpdateLane(), children, root, null, null);
	};
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
		var root = this._internalRoot;
		if (null !== root) {
			this._internalRoot = null;
			var container = root.containerInfo;
			updateContainerImpl(root.current, 2, null, root, null, null);
			flushSyncWork$1();
			container[internalContainerInstanceKey] = null;
		}
	};
	function ReactDOMHydrationRoot(internalRoot) {
		this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
		if (target) {
			var updatePriority = resolveUpdatePriority();
			target = {
				blockedOn: null,
				target,
				priority: updatePriority
			};
			for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++);
			queuedExplicitHydrationTargets.splice(i, 0, target);
			0 === i && attemptExplicitHydrationTarget(target);
		}
	};
	var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
	if ("19.2.6" !== isomorphicReactPackageVersion$jscomp$inline_1840) throw Error(formatProdErrorMessage(527, isomorphicReactPackageVersion$jscomp$inline_1840, "19.2.6"));
	ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
		var fiber = componentOrElement._reactInternals;
		if (void 0 === fiber) {
			if ("function" === typeof componentOrElement.render) throw Error(formatProdErrorMessage(188));
			componentOrElement = Object.keys(componentOrElement).join(",");
			throw Error(formatProdErrorMessage(268, componentOrElement));
		}
		componentOrElement = findCurrentFiberUsingSlowPath(fiber);
		componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
		componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
		return componentOrElement;
	};
	var internals$jscomp$inline_2347 = {
		bundleType: 0,
		version: "19.2.6",
		rendererPackageName: "react-dom",
		currentDispatcherRef: ReactSharedInternals,
		reconcilerVersion: "19.2.6"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!hook$jscomp$inline_2348.isDisabled && hook$jscomp$inline_2348.supportsFiber) try {
			rendererID = hook$jscomp$inline_2348.inject(internals$jscomp$inline_2347), injectedHook = hook$jscomp$inline_2348;
		} catch (err) {}
	}
	exports.createRoot = function(container, options) {
		if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
		var isStrictMode = !1, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError;
		null !== options && void 0 !== options && (!0 === options.unstable_strictMode && (isStrictMode = !0), void 0 !== options.identifierPrefix && (identifierPrefix = options.identifierPrefix), void 0 !== options.onUncaughtError && (onUncaughtError = options.onUncaughtError), void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError), void 0 !== options.onRecoverableError && (onRecoverableError = options.onRecoverableError));
		options = createFiberRoot(container, 1, !1, null, null, isStrictMode, identifierPrefix, null, onUncaughtError, onCaughtError, onRecoverableError, defaultOnDefaultTransitionIndicator);
		container[internalContainerInstanceKey] = options.current;
		listenToAllSupportedEvents(container);
		return new ReactDOMRoot(options);
	};
}));
//#endregion
//#region node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_client_production();
}));
//#endregion
//#region src/index.css
var import_react = require_react();
var import_client = require_client();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarDays = createLucideIcon("calendar-days", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M16 14h.01",
		key: "1gbofw"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M16 18h.01",
		key: "kzsmim"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CalendarRange = createLucideIcon("calendar-range", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}],
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M17 14h-6",
		key: "bkmgh3"
	}],
	["path", {
		d: "M13 18H7",
		key: "bb0bb7"
	}],
	["path", {
		d: "M7 14h.01",
		key: "1qa3f1"
	}],
	["path", {
		d: "M17 18h.01",
		key: "1bdyru"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock3 = createLucideIcon("clock-3", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6h4",
	key: "135r8i"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Compass = createLucideIcon("compass", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
	key: "9ktpf1"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Drone = createLucideIcon("drone", [
	["path", {
		d: "M10 10 7 7",
		key: "zp14k7"
	}],
	["path", {
		d: "m10 14-3 3",
		key: "1jrpxk"
	}],
	["path", {
		d: "m14 10 3-3",
		key: "7tigam"
	}],
	["path", {
		d: "m14 14 3 3",
		key: "vm23p3"
	}],
	["path", {
		d: "M14.205 4.139a4 4 0 1 1 5.439 5.863",
		key: "1tm5p2"
	}],
	["path", {
		d: "M19.637 14a4 4 0 1 1-5.432 5.868",
		key: "16egi2"
	}],
	["path", {
		d: "M4.367 10a4 4 0 1 1 5.438-5.862",
		key: "1wta6a"
	}],
	["path", {
		d: "M9.795 19.862a4 4 0 1 1-5.429-5.873",
		key: "q39hpv"
	}],
	["rect", {
		x: "10",
		y: "8",
		width: "4",
		height: "8",
		rx: "1",
		key: "phrjt1"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GripVertical = createLucideIcon("grip-vertical", [
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}],
	["circle", {
		cx: "9",
		cy: "5",
		r: "1",
		key: "hp0tcf"
	}],
	["circle", {
		cx: "9",
		cy: "19",
		r: "1",
		key: "fkjjf6"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "15",
		cy: "5",
		r: "1",
		key: "19l28e"
	}],
	["circle", {
		cx: "15",
		cy: "19",
		r: "1",
		key: "f4zoj3"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Images = createLucideIcon("images", [
	["path", {
		d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",
		key: "9kzy35"
	}],
	["path", {
		d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",
		key: "1t0f0t"
	}],
	["circle", {
		cx: "13",
		cy: "7",
		r: "1",
		fill: "currentColor",
		key: "1obus6"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "14",
		height: "14",
		rx: "2",
		key: "1gvhby"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Maximize2 = createLucideIcon("maximize-2", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "m21 3-7 7",
		key: "1l2asr"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelLeftClose = createLucideIcon("panel-left-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "m16 15-3-3 3-3",
		key: "14y99z"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelLeftOpen = createLucideIcon("panel-left-open", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "m14 9 3 3-3 3",
		key: "8010ee"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelRightClose = createLucideIcon("panel-right-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "m8 9 3 3-3 3",
		key: "12hl5m"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PanelRightOpen = createLucideIcon("panel-right-open", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "m10 15-3-3 3-3",
		key: "1pgupc"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rows3 = createLucideIcon("rows-3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M21 9H3",
		key: "1338ky"
	}],
	["path", {
		d: "M21 15H3",
		key: "9uk58r"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("settings-2", [
	["path", {
		d: "M14 17H5",
		key: "gfn3mx"
	}],
	["path", {
		d: "M19 7h-9",
		key: "6i9tg"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}],
	["circle", {
		cx: "7",
		cy: "7",
		r: "3",
		key: "dfmy0x"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SlidersHorizontal = createLucideIcon("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
createLucideIcon("undo-2", [["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}], ["path", {
	d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
	key: "f3b9sd"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X$2 = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region src/components/AtlasHeader.tsx
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		id: "map",
		label: "Map"
	},
	{
		id: "journey",
		label: "Journey"
	},
	{
		id: "trip",
		label: "Trip"
	}
];
function AtlasHeader({ activePage, onPageChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "atlas-app-header cesium-lab-title hero-glass-layer absolute left-[50vw] top-4 z-50 w-[min(760px,calc(100vw-32px))] -translate-x-1/2 px-6 py-4 text-center sm:px-8",
		"data-page": "map",
		"data-active-page": activePage,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl",
				children: "StarMap"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-2xl text-sm leading-6 text-white sm:text-base",
				children: "Map the places you have visited and turn every journey into a story you can revisit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "atlas-tabs mx-auto mt-4 inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/50 p-1 text-sm font-medium text-slate-500 shadow-sm backdrop-blur-xl",
				"aria-label": "Primary navigation",
				children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onPageChange(item.id),
					"aria-current": activePage === item.id ? "page" : void 0,
					className: `rounded-full px-4 py-2 transition ${activePage === item.id ? "bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)]" : "hover:bg-white/70 hover:text-slate-950"}`,
					children: item.label
				}, item.id))
			})
		]
	});
}
//#endregion
//#region node_modules/resium/dist/resium.js
var import_react_dom = require_react_dom();
var H$1 = (0, import_react.createContext)({}), { Provider: Le$1, Consumer: Re$1 } = H$1, U$1 = () => (0, import_react.useContext)(H$1) || {}, W$1 = (e, t) => {
	let n = (e) => {
		let n = U$1(), r = (0, import_react.useRef)(void 0), a = (0, import_react.useRef)(!1);
		return (0, import_react.useEffect)(() => () => {
			n.camera && e.cancelFlightOnUnmount && n.camera.cancelFlight();
		}, [n.camera, e.cancelFlightOnUnmount]), (0, import_react.useEffect)(() => {
			n.camera && n.scene && !n.scene.isDestroyed() && (!e.once || !a.current) && (n.camera.cancelFlight(), t(n.camera, e, r.current), a.current = !0), r.current = e;
		}), null;
	};
	return n.displayName = e, n;
};
function ze$1(e, t) {
	return t ? G$1(e).reduce((e, [n, r]) => (K$1(t, n) && (e[n] = r), e), {}) : {};
}
function G$1(e) {
	return Object.keys(e).map((t) => [t, e[t]]);
}
function K$1(e, t) {
	return !!e && e.indexOf(t) !== -1;
}
function Be$1(e, t) {
	return !!e && !!t && [...Object.keys(e), ...Object.keys(t)].every((n) => e[n] === t[n]);
}
function Ve$1(e) {
	return e && typeof e.isDestroyed == "function" && typeof e.destroy == "function";
}
function He$1(e) {
	return Ve$1(e) && e.isDestroyed();
}
function q$1(e) {
	return e && typeof e == "object" && "then" in e && typeof e.then == "function";
}
var J$1 = "__RESIUM_EVENT_MANAGER", Y$1 = [
	"onClick",
	"onDoubleClick",
	"onMouseDown",
	"onMouseUp",
	"onMiddleClick",
	"onMiddleDown",
	"onMiddleUp",
	"onMouseMove",
	"onPinchEnd",
	"onPinchMove",
	"onPinchStart",
	"onRightClick",
	"onRightDown",
	"onRightUp",
	"onWheel",
	"onMouseEnter",
	"onMouseLeave"
], Ue$1 = class e {
	static eventTypeMap = {
		onClick: Cesium.ScreenSpaceEventType.LEFT_CLICK,
		onDoubleClick: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
		onMouseDown: Cesium.ScreenSpaceEventType.LEFT_DOWN,
		onMouseUp: Cesium.ScreenSpaceEventType.LEFT_UP,
		onMiddleClick: Cesium.ScreenSpaceEventType.MIDDLE_CLICK,
		onMiddleDown: Cesium.ScreenSpaceEventType.MIDDLE_DOWN,
		onMiddleUp: Cesium.ScreenSpaceEventType.MIDDLE_UP,
		onMouseMove: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
		onPinchEnd: Cesium.ScreenSpaceEventType.PINCH_END,
		onPinchMove: Cesium.ScreenSpaceEventType.PINCH_MOVE,
		onPinchStart: Cesium.ScreenSpaceEventType.PINCH_START,
		onRightClick: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
		onRightDown: Cesium.ScreenSpaceEventType.RIGHT_DOWN,
		onRightUp: Cesium.ScreenSpaceEventType.RIGHT_UP,
		onWheel: Cesium.ScreenSpaceEventType.WHEEL,
		onMouseEnter: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
		onMouseLeave: Cesium.ScreenSpaceEventType.MOUSE_MOVE
	};
	scene;
	sshe;
	events = {
		onClick: /* @__PURE__ */ new Map(),
		onDoubleClick: /* @__PURE__ */ new Map(),
		onMouseDown: /* @__PURE__ */ new Map(),
		onMouseUp: /* @__PURE__ */ new Map(),
		onMiddleClick: /* @__PURE__ */ new Map(),
		onMiddleDown: /* @__PURE__ */ new Map(),
		onMiddleUp: /* @__PURE__ */ new Map(),
		onMouseMove: /* @__PURE__ */ new Map(),
		onPinchEnd: /* @__PURE__ */ new Map(),
		onPinchMove: /* @__PURE__ */ new Map(),
		onPinchStart: /* @__PURE__ */ new Map(),
		onRightClick: /* @__PURE__ */ new Map(),
		onRightDown: /* @__PURE__ */ new Map(),
		onRightUp: /* @__PURE__ */ new Map(),
		onWheel: /* @__PURE__ */ new Map(),
		onMouseEnter: /* @__PURE__ */ new Map(),
		onMouseLeave: /* @__PURE__ */ new Map()
	};
	hovered = void 0;
	constructor(e) {
		this.scene = e, this.sshe = new Cesium.ScreenSpaceEventHandler(e?.canvas);
	}
	destroy() {
		this.hovered = void 0, this.sshe.isDestroyed() || this.sshe.destroy();
	}
	isDestroyed() {
		return this.sshe.isDestroyed();
	}
	on(e, t, n) {
		e && t === "onWheel" || this.events[t].set(e, n);
	}
	off(e, t) {
		this.events[t].delete(e), this.hovered === e && (this.hovered = void 0);
	}
	setEvents(e, t) {
		G$1(t).forEach(([t, n]) => {
			let r = t;
			K$1(Y$1, r) && (n ? this.on(e, r, n) : this.off(e, r));
		}), this.commit();
	}
	clearEvents(e) {
		this.hovered = void 0, Y$1.forEach((t) => {
			this.off(e, t);
		}), this.commit();
	}
	commit() {
		let t = this.sshe, n = this.sshe.isDestroyed();
		n || (this.events.onMouseEnter.size === 0 && this.events.onMouseLeave.size === 0 && this.events.onMouseMove.size === 0 ? this.sshe.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE) : this.sshe.getInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE) || this.sshe.setInputAction(this.onMouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE)), G$1(this.events).forEach(([r, i]) => {
			if (r === "onMouseEnter" || r === "onMouseLeave" || r === "onMouseMove") return;
			let a = e.eventTypeMap[r];
			n || (i.size === 0 ? t.removeInputAction(a) : t.getInputAction(a) || t.setInputAction(this.eventCallback(r), a));
		});
	}
	getScreenSpaceEventHandler() {
		return this.sshe;
	}
	getEventCallback(e, t) {
		return t === null ? this.events[e].get(null) : this.events[e].get(t.id) || this.events[e].get(t.id?.entityCollection?.owner) || this.events[e].get(t.primitive) || this.events[e].get(t.tileset);
	}
	onMouseMove = (e) => {
		let t = this.pick(e.endPosition);
		this.hovered !== t && (this.hovered && (this.getEventCallback("onMouseLeave", this.hovered)?.(e, this.hovered), this.getEventCallback("onMouseLeave", null)?.(e, this.hovered)), t && (this.getEventCallback("onMouseEnter", t)?.(e, t), this.getEventCallback("onMouseEnter", null)?.(e, t))), t && this.getEventCallback("onMouseMove", t)?.(e, t), this.getEventCallback("onMouseMove", null)?.(e, t), this.hovered = t;
	};
	eventCallback = (e) => (t) => {
		let n = this.pick(t?.position);
		n && this.getEventCallback(e, n)?.(t, n), this.getEventCallback(e, null)?.(t, n);
	};
	pick(e) {
		if (e) return this.scene?.pick(e);
	}
}, We$1 = ({ name: e, create: t, destroy: r, provide: s, update: d, cesiumReadonlyProps: f, cesiumEventProps: p, otherProps: m, setCesiumPropsAfterCreate: h, useCommonEvent: g, useRootEvent: _ }, v, ee) => {
	let y = (0, import_react.useRef)(void 0), b = U$1(), x = (0, import_react.useRef)(s ? {} : void 0), S = (0, import_react.useRef)({}), C = (0, import_react.useRef)(Ge$1(v)), w = (0, import_react.useRef)({}), [T, te] = (0, import_react.useState)(!1), E = (0, import_react.useRef)(!1), [, ne] = (0, import_react.useReducer)((e) => e + 1, 0), D = (0, import_react.useRef)(null), O = (0, import_react.useRef)(void 0), k = b?.[J$1], A = (0, import_react.useRef)(void 0), j = (0, import_react.useRef)(void 0), M = (0, import_react.useCallback)(async (t) => {
		if (!y.current) return;
		let n = y.current, r = Object.keys(t), i = Object.keys(p || []), a = r.concat(Object.keys(w.current).filter((e) => !r.includes(e))).filter((e) => w.current[e] !== t[e]).map((e) => [
			e,
			w.current[e],
			t[e]
		]), o = [];
		for (let [e, t, r] of a) if (f?.includes(e)) o.push(e);
		else if (K$1(i, e)) {
			let i = p?.[e], a = n[i];
			a instanceof Cesium.Event && (t === void 0 ? (a.addEventListener(r), S.current[i] = r) : r === void 0 ? (a.removeEventListener(t), delete S.current[i]) : (a.removeEventListener(t), a.addEventListener(r)));
		} else e !== "children" && !Y$1.includes(e) && !m?.includes(e) && (n[e] = r);
		let s = _ ? x.current?.[J$1] : k;
		if (g && s && y.current && s.setEvents(_ ? null : y.current, t), d && E.current) {
			let e = d(y.current, t, w.current, b);
			q$1(e) && await e;
		}
		w.current = t, C.current = t, E.current && o.length > 0 && (P(), await F(), A.current = N());
	}, [b]), N = (0, import_react.useCallback)(async () => {
		await new Promise((e) => queueMicrotask(() => e(void 0)));
		let e = t?.(b, C.current, D.current), n;
		if (n = q$1(e) ? await e : e, Array.isArray(n) ? (y.current = n[0], O.current = n[1]) : y.current = n, h) await M(C.current);
		else {
			if (y.current && p) {
				let e = y.current;
				for (let t of Object.keys(C.current)) {
					let n = p[t];
					if (n) {
						let r = C.current[t], i = e[n];
						r && i instanceof Cesium.Event && i.addEventListener(r);
					}
				}
			}
			w.current = C.current;
		}
		s && y.current && (x.current = {
			...b,
			...s(y.current, b, v, O.current)
		}, ne());
		let r = _ ? x.current?.[J$1] : k;
		g && r && y.current && r.setEvents(_ ? null : y.current, C.current), j.current || te(!0);
	}, [b]), P = (0, import_react.useCallback)(() => {
		te(!1), E.current = !1;
	}, []), F = (0, import_react.useCallback)(async () => {
		await new Promise((e) => queueMicrotask(() => e(void 0))), A.current &&= (await A.current, void 0), y.current && r && r(y.current, b, D.current, O.current);
		let e = _ ? x.current?.[J$1] : k;
		if (g && e && y.current && e.clearEvents(_ ? null : y.current), y.current && !He$1(y.current)) {
			let e = Object.keys(S.current);
			for (let t of e) y.current[t]?.removeEventListener?.(S.current[t]);
		}
		S.current = {}, w.current = {}, x.current = void 0, O.current = void 0, y.current = void 0;
	}, [b]);
	return (0, import_react.useLayoutEffect)(() => ((async () => {
		j.current &&= (await j.current, void 0), A.current = N();
	})(), () => {
		P(), j.current = F();
	}), [
		N,
		F,
		P
	]), (0, import_react.useEffect)(() => {
		(async () => {
			A.current && await A.current;
			let e = Ge$1(v);
			T ? Be$1(e, w.current) || (await M(e), b.__$internal?.onUpdate?.()) : (w.current = e, C.current = e, E.current = !0);
		})();
	}, [
		b.__$internal,
		T,
		v,
		M
	]), (0, import_react.useImperativeHandle)(ee, () => ({ cesiumElement: T ? y.current : null }), [T]), [
		x.current,
		T,
		D
	];
};
function Ge$1(e) {
	let { children: t, ...n } = e;
	return n;
}
var Ke$1 = () => void 0, X$1 = ({ renderContainer: e, noChildren: n, containerProps: r, defaultProps: i, useResource: a = Ke$1, ...o }) => {
	let s = (t, s) => {
		let c = {
			...i,
			...t
		}, l = a(c), u = l ? {
			...c,
			...l
		} : c, [d, f, p] = We$1(o, u, s);
		if (n) return null;
		let m = f && "children" in u ? u.children : null, h = e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-testid": "resium-container",
			ref: p,
			...typeof r == "function" ? r(u) : ze$1(u, r),
			children: m
		}) : m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: m }) : null;
		return d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H$1.Provider, {
			value: d,
			children: h
		}) : h;
	};
	return s.displayName = o.name, (0, import_react.forwardRef)(s);
}, qe$1 = ["enabled", "selected"], Z$1 = (e) => X$1({
	name: e.name,
	create(t, n) {
		if (!t.scene) return;
		let r = e.create(n, t.scene.postProcessStages);
		return typeof n.enabled == "boolean" && (r.enabled = n.enabled), n.selected && "selected" in r && (r.selected = n.selected), e.props.forEach((t) => {
			!K$1(e.readonlyProps, t) && n[t] !== void 0 && (r.uniforms[t] = n[t]);
		}), !e.noMount && t.scene && !t.scene.isDestroyed() && t.scene.postProcessStages.add(r), r;
	},
	destroy(t, n) {
		e.noMount ? t.enabled = !1 : (n.scene && !n.scene.isDestroyed() && n.scene.postProcessStages.remove(t), t.isDestroyed() || t.destroy());
	},
	update(t, n, r) {
		e.props.forEach((i) => {
			!K$1(e.readonlyProps, i) && n[i] !== r[i] && (t.uniforms[i] = n[i]);
		});
	},
	cesiumProps: qe$1,
	cesiumReadonlyProps: e.readonlyProps,
	defaultProps: { enabled: !0 }
}), Q$1 = /* @__PURE__ */ new Map();
function Je$1(e, t) {
	if (!e) return;
	let n = Q$1.get(e);
	if (!n) {
		let r = {
			status: "pending",
			promise: Promise.resolve()
		};
		r.promise = t().then((e) => {
			r.status = "fulfilled", r.value = e;
		}, (e) => {
			r.status = "rejected", r.error = e;
		}), Q$1.set(e, r), n = r;
	}
	if (n.status === "pending") throw n.promise;
	if (n.status === "rejected") throw n.error;
	return n.value;
}
function Xe$1(e) {
	if (typeof e == "string") return e;
	if (e instanceof Cesium.Resource) return e.url;
}
function $$1(e, t, n, r) {
	let i = n.suspense ? Xe$1(t) : void 0;
	return Je$1(i ? `${e}:${n.cacheKey ?? i}` : void 0, () => r(i));
}
X$1({
	name: "Billboard",
	create(e, t) {
		return e.billboardCollection?.add(t);
	},
	destroy(e, t) {
		t.billboardCollection && !t.billboardCollection.isDestroyed() && t.billboardCollection.remove(e);
	},
	cesiumProps: [
		"alignedAxis",
		"color",
		"disableDepthTestDistance",
		"distanceDisplayCondition",
		"eyeOffset",
		"height",
		"heightReference",
		"horizontalOrigin",
		"image",
		"pixelOffset",
		"pixelOffsetScaleByDistance",
		"position",
		"rotation",
		"scale",
		"scaleByDistance",
		"show",
		"sizeInMeters",
		"splitDirection",
		"translucencyByDistance",
		"verticalOrigin",
		"width",
		"id"
	],
	useCommonEvent: !0
});
X$1({
	name: "BillboardCollection",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.BillboardCollection({
			modelMatrix: t.modelMatrix,
			debugShowBoundingVolume: t.debugShowBoundingVolume,
			scene: e.scene,
			blendOption: t.blendOption
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { billboardCollection: e };
	},
	cesiumProps: [
		"blendOption",
		"coarseDepthTestDistance",
		"debugShowBoundingVolume",
		"debugShowTextureAtlas",
		"modelMatrix",
		"show",
		"threePointDepthTestDistance"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "BillboardGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.BillboardGraphics(t);
		return e.entity.billboard = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.billboard = void 0);
	},
	cesiumProps: [
		"image",
		"show",
		"scale",
		"horizontalOrigin",
		"verticalOrigin",
		"eyeOffset",
		"pixelOffset",
		"rotation",
		"alignedAxis",
		"width",
		"height",
		"color",
		"scaleByDistance",
		"translucencyByDistance",
		"pixelOffsetScaleByDistance",
		"imageSubRegion",
		"sizeInMeters",
		"heightReference",
		"distanceDisplayCondition",
		"disableDepthTestDistance",
		"splitDirection"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "BoxGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.BoxGraphics(t);
		return e.entity.box = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.box = void 0);
	},
	cesiumProps: [
		"heightReference",
		"dimensions",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"shadows",
		"distanceDisplayCondition"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "BufferPoint",
	create(e, t) {
		if (!e.bufferPointCollection) return;
		let n = new Cesium.BufferPoint(), r = e.bufferPointCollection.add({
			show: t.show,
			position: t.position,
			material: t.material
		}, n);
		return t.featureId !== void 0 && (r.featureId = t.featureId), r;
	},
	destroy(e) {
		e.show = !1;
	},
	update(e, t, n) {
		t.position !== n.position && t.position !== void 0 && e.setPosition(t.position), t.material !== n.material && t.material !== void 0 && e.setMaterial(t.material);
	},
	cesiumProps: ["show", "featureId"],
	otherProps: ["position", "material"]
});
X$1({
	name: "BufferPointCollection",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.BufferPointCollection({
			primitiveCountMax: t.primitiveCountMax,
			modelMatrix: t.modelMatrix,
			boundingVolume: t.boundingVolume,
			blendOption: t.blendOption
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { bufferPointCollection: e };
	},
	cesiumProps: ["show", "debugShowBoundingVolume"],
	cesiumReadonlyProps: [
		"primitiveCountMax",
		"modelMatrix",
		"boundingVolume",
		"blendOption"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "BufferPolygon",
	create(e, t) {
		if (!e.bufferPolygonCollection) return;
		let n = new Cesium.BufferPolygon(), r = e.bufferPolygonCollection.add({
			show: t.show,
			positions: t.positions,
			holes: t.holes,
			triangles: t.triangles,
			material: t.material
		}, n);
		return t.featureId !== void 0 && (r.featureId = t.featureId), r;
	},
	destroy(e) {
		e.show = !1;
	},
	update(e, t, n) {
		t.positions !== n.positions && t.positions !== void 0 && e.setPositions(t.positions), t.holes !== n.holes && t.holes !== void 0 && e.setHoles(t.holes), t.triangles !== n.triangles && t.triangles !== void 0 && e.setTriangles(t.triangles), t.material !== n.material && t.material !== void 0 && e.setMaterial(t.material);
	},
	cesiumProps: ["show", "featureId"],
	otherProps: [
		"positions",
		"holes",
		"triangles",
		"material"
	]
});
X$1({
	name: "BufferPolygonCollection",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.BufferPolygonCollection({
			primitiveCountMax: t.primitiveCountMax,
			vertexCountMax: t.vertexCountMax,
			holeCountMax: t.holeCountMax,
			triangleCountMax: t.triangleCountMax,
			positionDatatype: t.positionDatatype,
			allowPicking: t.allowPicking,
			modelMatrix: t.modelMatrix,
			boundingVolume: t.boundingVolume,
			blendOption: t.blendOption
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { bufferPolygonCollection: e };
	},
	cesiumProps: ["show", "debugShowBoundingVolume"],
	cesiumReadonlyProps: [
		"primitiveCountMax",
		"vertexCountMax",
		"holeCountMax",
		"triangleCountMax",
		"positionDatatype",
		"allowPicking",
		"modelMatrix",
		"boundingVolume",
		"blendOption"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "BufferPolyline",
	create(e, t) {
		if (!e.bufferPolylineCollection) return;
		let n = new Cesium.BufferPolyline(), r = e.bufferPolylineCollection.add({
			show: t.show,
			positions: t.positions,
			material: t.material
		}, n);
		return t.featureId !== void 0 && (r.featureId = t.featureId), r;
	},
	destroy(e) {
		e.show = !1;
	},
	update(e, t, n) {
		t.positions !== n.positions && t.positions !== void 0 && e.setPositions(t.positions), t.material !== n.material && t.material !== void 0 && e.setMaterial(t.material);
	},
	cesiumProps: ["show", "featureId"],
	otherProps: ["positions", "material"]
});
X$1({
	name: "BufferPolylineCollection",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.BufferPolylineCollection({
			primitiveCountMax: t.primitiveCountMax,
			vertexCountMax: t.vertexCountMax,
			modelMatrix: t.modelMatrix,
			boundingVolume: t.boundingVolume,
			blendOption: t.blendOption
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { bufferPolylineCollection: e };
	},
	cesiumProps: ["show", "debugShowBoundingVolume"],
	cesiumReadonlyProps: [
		"primitiveCountMax",
		"vertexCountMax",
		"modelMatrix",
		"boundingVolume",
		"blendOption"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "Camera",
	create: (e) => e.scene?.camera,
	cesiumProps: [
		"position",
		"direction",
		"up",
		"right",
		"frustum",
		"defaultMoveAmount",
		"defaultLookAmount",
		"defaultRotateAmount",
		"defaultZoomAmount",
		"constrainedAxis",
		"maximumZoomFactor",
		"percentageChanged"
	],
	cesiumEventProps: {
		onChange: "changed",
		onMoveEnd: "moveEnd",
		onMoveStart: "moveStart"
	},
	setCesiumPropsAfterCreate: !0
});
W$1("CameraFlyHome", (e, { duration: t }) => {
	e.flyHome(t);
});
W$1("CameraFlyTo", (e, { onComplete: t, onCancel: n, ...r }) => {
	e.flyTo({
		...r,
		complete: t,
		cancel: n
	});
});
W$1("CameraLookAt", (e, { target: t, offset: n }) => {
	e.lookAt(t, n);
});
W$1("CameraFlyToBoundingSphere", (e, { boundingSphere: t, onComplete: n, onCancel: r, ...i }) => {
	e.flyToBoundingSphere(t, {
		...i,
		complete: n,
		cancel: r
	});
});
var pt$1 = /* @__PURE__ */ "show.modelMatrix.shadows.maximumScreenSpaceError.cullRequestsWhileMoving.cullRequestsWhileMovingMultiplier.preloadWhenHidden.preloadFlightDestinations.preferLeaves.progressiveResolutionHeightFraction.foveatedScreenSpaceError.foveatedConeSize.foveatedMinimumScreenSpaceErrorRelaxation.foveatedInterpolationCallback.foveatedTimeDelay.dynamicScreenSpaceError.dynamicScreenSpaceErrorDensity.dynamicScreenSpaceErrorFactor.dynamicScreenSpaceErrorHeightFalloff.edgeDisplayMode.skipLevelOfDetail.baseScreenSpaceError.skipScreenSpaceErrorFactor.skipLevels.immediatelyLoadDesiredLevelOfDetail.loadSiblings.clippingPlanes.clippingPolygons.lightColor.colorBlendAmount.colorBlendMode.debugFreezeFrame.debugColorizeTiles.debugWireframe.debugShowBoundingVolume.debugShowContentBoundingVolume.debugShowViewerRequestVolume.debugShowGeometricError.debugShowRenderingStatistics.debugShowMemoryUsage.debugShowUrl.style.backFaceCulling.showOutline.vectorClassificationOnly.vectorKeepDecodedPositions.splitDirection.customShader.imageBasedLighting.showCreditsOnScreen.featureIdLabel.instanceFeatureIdLabel.outlineColor.cacheBytes.maximumCacheOverflowBytes.enableCollision".split("."), mt$1 = [
	"asynchronouslyLoadImagery",
	"classificationType",
	"cullWithChildrenBounds",
	"debugHeatmapTilePropertyName",
	"ellipsoid",
	"enableDebugWireframe",
	"heightReference",
	"modelUpAxis",
	"modelForwardAxis",
	"projectTo2D",
	"enableShowOutline",
	"enablePick",
	"environmentMapOptions",
	"scene"
], ht$1 = {
	onAllTilesLoad: "allTilesLoaded",
	onInitialTilesLoad: "initialTilesLoaded",
	onLoadProgress: "loadProgress",
	onTileFailed: "tileFailed",
	onTileLoad: "tileLoad",
	onTileUnload: "tileUnload",
	onTileVisible: "tileVisible"
}, gt$1 = ["onReady", "onError"], _t = [...mt$1, "url"], vt = (e) => {
	let t = e;
	t._clippingPlanes = void 0, t._clippingPolygons = void 0;
};
X$1({
	name: "Cesium3DTileset",
	async create(e, t) {
		if (!e.primitiveCollection) return;
		let n = t.url, r;
		r = q$1(n) ? await n : n;
		let i;
		try {
			i = await Cesium.Cesium3DTileset.fromUrl(r, t), t.onReady?.(i);
		} catch (e) {
			t.onError?.(e);
			return;
		}
		return t.colorBlendAmount && (i.colorBlendAmount = t.colorBlendAmount), t.colorBlendMode && (i.colorBlendMode = t.colorBlendMode), t.style && (i.style = t.style), e.primitiveCollection.add(i), i;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || (vt(e), e.destroy());
	},
	cesiumProps: pt$1,
	cesiumReadonlyProps: _t,
	cesiumEventProps: ht$1,
	otherProps: gt$1,
	useCommonEvent: !0
});
X$1({
	name: "Cesium3DTilesetGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.Cesium3DTilesetGraphics(t);
		return e.entity.tileset = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.tileset = void 0);
	},
	cesiumProps: [
		"show",
		"uri",
		"maximumScreenSpaceError"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "Cesium3DTilesTerrainProvider",
	async create(e, t) {
		let { onReady: n, assetId: r, accessToken: i, url: a, children: o, ...s } = t, c;
		if (r !== void 0) c = await Cesium.Cesium3DTilesTerrainProvider.fromIonAssetId(r, s);
		else if (a !== void 0) c = await Cesium.Cesium3DTilesTerrainProvider.fromUrl(a, s);
		else throw Error("Cesium3DTilesTerrainProvider requires either 'url' or 'assetId' prop to be provided");
		return n && n(c), c;
	}
});
X$1({
	name: "CesiumWidget",
	create(e, t, n) {
		if (!n) return;
		let r = new Cesium.CesiumWidget(n, t);
		if (r) return typeof t.resolutionScale == "number" && (r.resolutionScale = t.resolutionScale), [r, new Ue$1(r.scene)];
	},
	destroy(e, t, n, r) {
		r && !r.isDestroyed() && r.destroy(), e.isDestroyed() || e.destroy();
	},
	provide(e, t, n, r) {
		return {
			cesiumWidget: e,
			scene: e.scene,
			camera: e.scene.camera,
			imageryLayerCollection: e.scene.globe.imageryLayers,
			primitiveCollection: e.scene.primitives,
			globe: e.scene.globe,
			__$internal: { onUpdate: n?.onUpdate },
			[J$1]: r
		};
	},
	containerProps: ({ id: e, className: t, style: n, full: r, containerProps: i }) => ({
		className: t,
		id: e,
		style: {
			...r ? {
				position: "absolute",
				bottom: "0",
				left: "0",
				right: "0",
				top: "0"
			} : {},
			...n
		},
		...i
	}),
	cesiumProps: [
		"resolutionScale",
		"useDefaultRenderLoop",
		"targetFrameRate",
		"useBrowserRecommendedResolution",
		"allowDataSourcesToSuspendAnimation",
		"trackedEntity",
		"clockTrackedDataSource",
		"terrainProvider",
		"creditDisplay"
	],
	cesiumReadonlyProps: [
		"clock",
		"shouldAnimate",
		"ellipsoid",
		"baseLayer",
		"skyBox",
		"skyAtmosphere",
		"sceneMode",
		"scene3DOnly",
		"orderIndependentTranslucency",
		"mapMode2D",
		"mapProjection",
		"globe",
		"showRenderLoopErrors",
		"automaticallyTrackDataSourceClocks",
		"contextOptions",
		"creditContainer",
		"creditViewport",
		"dataSources",
		"shadows",
		"terrainShadows",
		"terrain",
		"requestRenderMode",
		"maximumRenderTimeChange",
		"msaaSamples",
		"blurActiveElementOnCanvasFocus"
	],
	otherProps: [
		"className",
		"id",
		"style",
		"full",
		"containerProps"
	],
	renderContainer: !0,
	useCommonEvent: !0,
	useRootEvent: !0
});
X$1({
	name: "ClassificationPrimitive",
	async create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.ClassificationPrimitive(t);
		if (t.onReady) {
			let r = () => {
				n.ready && (t.onReady?.(n), e.scene?.postRender.removeEventListener(r));
			};
			e.scene?.postRender.addEventListener(r);
		}
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: [
		"classificationType",
		"debugShowBoundingVolume",
		"debugShowShadowVolume",
		"show"
	],
	cesiumReadonlyProps: [
		"allowPicking",
		"asynchronous",
		"compressVertices",
		"geometryInstances",
		"interleave",
		"releaseGeometryInstances",
		"vertexCacheOptimize",
		"appearance"
	],
	otherProps: ["onReady"],
	useCommonEvent: !0
});
X$1({
	name: "Clock",
	create: (e) => e.cesiumWidget?.clock,
	cesiumProps: [
		"canAnimate",
		"clockRange",
		"clockStep",
		"currentTime",
		"multiplier",
		"shouldAnimate",
		"startTime",
		"stopTime"
	],
	cesiumEventProps: {
		onStop: "onStop",
		onTick: "onTick"
	},
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "CloudCollection",
	create: (e) => {
		if (!e.primitiveCollection) return;
		let t = new Cesium.CloudCollection();
		return e.primitiveCollection.add(t), t;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide: (e) => ({ cloudCollection: e }),
	cesiumProps: [
		"noiseDetail",
		"noiseOffset",
		"show",
		"debugBillboards",
		"debugEllipsoids"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "CorridorGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.CorridorGraphics(t);
		return t.classificationType && (n.classificationType = t.classificationType), e.entity.corridor = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.corridor = void 0);
	},
	cesiumProps: [
		"positions",
		"width",
		"cornerType",
		"height",
		"heightReference",
		"extrudedHeight",
		"extrudedHeightReference",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"granularity",
		"shadows",
		"distanceDisplayCondition",
		"zIndex",
		"classificationType"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "CubeMapPanorama",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.CubeMapPanorama({
			sources: t.sources,
			show: t.show,
			transform: t.transform,
			credit: t.credit
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	setCesiumPropsAfterCreate: !0,
	cesiumProps: ["show", "sources"],
	cesiumReadonlyProps: ["transform", "credit"]
});
X$1({
	name: "CumulusCloud",
	create: (e, t) => e.cloudCollection?.add(t),
	destroy(e, t) {
		t.cloudCollection && !t.cloudCollection.isDestroyed() && t.cloudCollection.remove(e);
	},
	cesiumProps: [
		"show",
		"position",
		"scale",
		"maximumSize",
		"slice",
		"brightness",
		"color"
	]
});
X$1({
	name: "CustomDataSource",
	create(e, t) {
		if (!e.dataSourceCollection) return;
		let n = new Cesium.CustomDataSource(t.name);
		return t.clustering && (n.clustering = t.clustering), typeof t.show == "boolean" && (n.show = t.show), t.clock !== void 0 && (n.clock = t.clock), e.dataSourceCollection.add(n), n;
	},
	destroy(e, t) {
		t.dataSourceCollection && !t.dataSourceCollection.isDestroyed() && t.dataSourceCollection.remove(e);
	},
	provide(e) {
		return {
			entityCollection: e.entities,
			dataSource: e
		};
	},
	cesiumProps: [
		"clustering",
		"name",
		"show",
		"clock",
		"isLoading"
	],
	cesiumEventProps: {
		onChange: "changedEvent",
		onError: "errorEvent",
		onLoading: "loadingEvent"
	},
	useCommonEvent: !0
});
X$1({
	name: "CylinderGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.CylinderGraphics(t);
		return e.entity.cylinder = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.cylinder = void 0);
	},
	cesiumProps: [
		"heightReference",
		"length",
		"topRadius",
		"bottomRadius",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"numberOfVerticalLines",
		"slices",
		"distanceDisplayCondition",
		"shadows"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
var jt = ["clustering", "show"], Mt = [
	"name",
	"sourceUri",
	"credit"
], Nt = {
	onChange: "changedEvent",
	onError: "errorEvent",
	onLoading: "loadingEvent"
}, Pt = [
	"onLoad",
	"data",
	"suspense",
	"cacheKey"
], Ft = (e) => {
	let t = $$1("czml", e.data, e, (e) => Cesium.Resource.fetchJson({ url: e }));
	return t ? { data: t } : void 0;
}, It = (e, { data: t, onLoad: n, ...r }) => {
	t && e.load(t, r).then((e) => {
		n && n(e);
	});
};
X$1({
	name: "CzmlDataSource",
	create(e, t) {
		if (!e.dataSourceCollection) return;
		let n = new Cesium.CzmlDataSource(t.name);
		return t.clustering && (n.clustering = t.clustering), typeof t.show == "boolean" && (n.show = t.show), e.dataSourceCollection.add(n), t.data && It(n, t), n;
	},
	update(e, t, n) {
		t.data ? n.show !== t.show && (e.show = typeof t.show == "boolean" ? t.show : !0) : e.show = !1, t.data && (n.data !== t.data || n.sourceUri !== t.sourceUri || n.credit !== t.credit) && It(e, t);
	},
	destroy(e, t) {
		t.dataSourceCollection && !t.dataSourceCollection.isDestroyed() && t.dataSourceCollection.remove(e);
	},
	provide(e) {
		return { dataSource: e };
	},
	useResource: Ft,
	cesiumProps: jt,
	cesiumReadonlyProps: Mt,
	cesiumEventProps: Nt,
	otherProps: Pt,
	useCommonEvent: !0
});
X$1({
	name: "EllipseGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.EllipseGraphics(t);
		return e.entity.ellipse = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.ellipse = void 0);
	},
	cesiumProps: [
		"semiMajorAxis",
		"semiMinorAxis",
		"height",
		"heightReference",
		"extrudedHeight",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"numberOfVerticalLines",
		"rotation",
		"stRotation",
		"granularity",
		"shadows",
		"distanceDisplayCondition",
		"zIndex",
		"classificationType",
		"extrudedHeightReference"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "EllipsoidGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.EllipsoidGraphics(t);
		return e.entity.ellipsoid = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.ellipsoid = void 0);
	},
	cesiumProps: [
		"heightReference",
		"radii",
		"show",
		"fill",
		"innerRadii",
		"material",
		"maximumClock",
		"maximumCone",
		"minimumClock",
		"minimumCone",
		"outline",
		"outlineColor",
		"outlineWidth",
		"subdivisions",
		"stackPartitions",
		"slicePartitions",
		"shadows",
		"distanceDisplayCondition"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
var Bt = X$1({
	name: "Entity",
	create(e, t) {
		if (!e.entityCollection) return;
		let n = new Cesium.Entity(t);
		return e.viewer && t.selected && (e.viewer.selectedEntity = n), e.viewer && t.tracked && (e.viewer.trackedEntity = n), e.entityCollection.add(n), n;
	},
	destroy(e, t) {
		t.entityCollection && t.entityCollection.remove(e);
	},
	update(e, t, n, r) {
		r.viewer && (t.selected !== n.selected && (t.selected ? r.viewer.selectedEntity = e : r.viewer.selectedEntity === e && (r.viewer.selectedEntity = void 0)), t.tracked !== n.tracked && (t.tracked ? r.viewer.trackedEntity = e : r.viewer.trackedEntity === e && (r.viewer.trackedEntity = void 0)));
	},
	provide(e, t, n) {
		return {
			entity: e,
			__$internal: { onUpdate: n?.onUpdate }
		};
	},
	cesiumProps: /* @__PURE__ */ "availability.billboard.box.corridor.cylinder.description.ellipse.ellipsoid.entityCollection.label.model.name.orientation.path.plane.parent.point.polygon.polyline.polylineVolume.position.properties.rectangle.show.tileset.trackingReferenceFrame.viewFrom.wall".split("."),
	cesiumReadonlyProps: ["id"],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" },
	otherProps: ["selected", "tracked"],
	useCommonEvent: !0
});
X$1({
	name: "EquirectangularPanorama",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.EquirectangularPanorama({
			transform: t.transform,
			image: t.image,
			radius: t.radius,
			repeatHorizontal: t.repeatHorizontal,
			repeatVertical: t.repeatVertical,
			credit: t.credit
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	setCesiumPropsAfterCreate: !0,
	cesiumProps: ["show"],
	cesiumReadonlyProps: [
		"transform",
		"image",
		"radius",
		"repeatHorizontal",
		"repeatVertical",
		"credit"
	]
});
X$1({
	name: "Fog",
	create(e) {
		if (!e.scene) return;
		let t = new Cesium.Fog();
		return e.scene.fog = t, t;
	},
	destroy(e, t) {
		t.scene && !t.scene.isDestroyed() && (t.scene.fog = new Cesium.Fog());
	},
	cesiumProps: [
		"density",
		"enabled",
		"heightFalloff",
		"heightScalar",
		"maxHeight",
		"minimumBrightness",
		"renderable",
		"screenSpaceErrorFactor",
		"visualDensityScalar"
	],
	setCesiumPropsAfterCreate: !0
});
var Wt = [
	"clustering",
	"name",
	"show"
], Gt = [
	"clampToGround",
	"sourceUri",
	"credit",
	"markerSize",
	"markerSymbol",
	"markerColor",
	"stroke",
	"strokeWidth",
	"fill",
	"describe"
], Kt = {
	onChange: "changedEvent",
	onError: "errorEvent",
	onLoading: "loadingEvent"
}, qt = [
	"onLoad",
	"data",
	"suspense",
	"cacheKey"
], Jt = (e) => {
	let t = $$1("geojson", e.data, e, (e) => Cesium.Resource.fetchJson({ url: e }));
	return t ? { data: t } : void 0;
}, Yt = (e, { data: t, onLoad: n, ...r }) => {
	t && e.load(t, r).then((e) => {
		n && n(e);
	});
};
X$1({
	name: "GeoJsonDataSource",
	create(e, t) {
		if (!e.dataSourceCollection) return;
		let n = new Cesium.GeoJsonDataSource(t.name);
		return t.clustering && (n.clustering = t.clustering), typeof t.show == "boolean" && (n.show = t.show), e.dataSourceCollection.add(n), t.data && Yt(n, t), n;
	},
	update(e, t, n) {
		t.data ? n.show !== t.show && (e.show = typeof t.show == "boolean" ? t.show : !0) : e.show = !1, t.data && (n.data !== t.data || n.clampToGround !== t.clampToGround || n.sourceUri !== t.sourceUri || n.credit !== t.credit || n.markerSize !== t.markerSize || n.markerSymbol !== t.markerSymbol || n.markerColor !== t.markerColor || n.stroke !== t.stroke || n.strokeWidth !== t.strokeWidth || n.fill !== t.fill) && Yt(e, t);
	},
	destroy(e, t) {
		t.dataSourceCollection && !t.dataSourceCollection.isDestroyed() && t.dataSourceCollection.remove(e);
	},
	provide(e) {
		return { dataSource: e };
	},
	useResource: Jt,
	cesiumProps: Wt,
	cesiumReadonlyProps: Gt,
	cesiumEventProps: Kt,
	otherProps: qt,
	useCommonEvent: !0
});
X$1({
	name: "GeoJsonPrimitive",
	async create(e, t) {
		if (!e.primitiveCollection) return;
		let { url: n, data: r, ellipsoid: i, allowPicking: a, pickObjectFactory: o, show: s, onReady: c, onError: l } = t, u;
		try {
			if (n) u = await Cesium.GeoJsonPrimitive.fromUrl(n, {
				ellipsoid: i,
				allowPicking: a,
				pickObjectFactory: o,
				show: s
			});
			else if (r) u = new Cesium.GeoJsonPrimitive({
				geoJson: r,
				ellipsoid: i,
				allowPicking: a,
				pickObjectFactory: o,
				show: s
			});
			else return;
			c?.(u);
		} catch (e) {
			l?.(e);
			return;
		}
		return e.primitiveCollection.add(u), u;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e);
	},
	useResource: (e) => {
		let t = $$1("geojson-primitive", e.url ?? e.data, e, (e) => Cesium.Resource.fetchJson({ url: e }));
		return t ? {
			data: t,
			url: void 0
		} : void 0;
	},
	cesiumProps: ["show"],
	cesiumReadonlyProps: [
		"ellipsoid",
		"allowPicking",
		"pickObjectFactory",
		"url",
		"data"
	],
	otherProps: [
		"url",
		"data",
		"onReady",
		"onError",
		"suspense",
		"cacheKey"
	],
	useCommonEvent: !0
});
var Qt = X$1({
	name: "Globe",
	create: (e) => e.scene?.globe,
	update: async (e, t, n) => {
		if (t.terrainProvider === n.terrainProvider) return;
		let r = t.terrainProvider, i;
		i = q$1(r) ? await r : r, e.terrainProvider = i;
	},
	cesiumProps: /* @__PURE__ */ "atmosphereBrightnessShift.atmosphereHueShift.atmosphereSaturationShift.backFaceCulling.baseColor.clippingPlanes.depthTestAgainstTerrain.enableLighting.lightingFadeInDistance.lightingFadeOutDistance.material.maximumScreenSpaceError.nightFadeInDistance.nightFadeOutDistance.oceanNormalMapUrl.shadows.show.showGroundAtmosphere.showWaterEffect.tileCacheSize.loadingDescendantLimit.preloadAncestors.preloadSiblings.fillHighlightColor.dynamicAtmosphereLighting.dynamicAtmosphereLightingFromSun.showSkirts.cartographicLimitRectangle.translucency.undergroundColor.undergroundColorAlphaByDistance.lambertDiffuseMultiplier.atmosphereLightIntensity.atmosphereRayleighCoefficient.atmosphereMieCoefficient.atmosphereRayleighScaleHeight.atmosphereMieScaleHeight.atmosphereMieAnisotropy.vertexShadowDarkness.clippingPolygons".split("."),
	cesiumEventProps: {
		onImageryLayersUpdate: "imageryLayersUpdatedEvent",
		onTerrainProviderChange: "terrainProviderChanged",
		onTileLoadProgress: "tileLoadProgressEvent"
	},
	otherProps: ["terrainProvider"],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "Google2DImageryProvider",
	async create(e, t) {
		let { onReady: n, assetId: r, accessToken: i, key: a, children: o, ...s } = t, c;
		if (r !== void 0) {
			let e = {
				...s,
				assetId: r
			};
			i !== void 0 && (e.accessToken = i), c = await Cesium.Google2DImageryProvider.fromIonAssetId(e);
		} else {
			let e = { ...s };
			a !== void 0 && (e.key = a), c = await Cesium.Google2DImageryProvider.fromUrl(e);
		}
		return n && n(c), c;
	}
});
X$1({
	name: "GooglePhotorealistic3DTileset",
	async create(e, t) {
		if (!e.primitiveCollection) return;
		let { apiKey: n, onlyUsingWithGoogleGeocoder: r } = t, i = {};
		n !== void 0 && (i.key = n), r !== void 0 && (i.onlyUsingWithGoogleGeocoder = r);
		let a;
		try {
			a = await Cesium.createGooglePhotorealistic3DTileset(i, t), t.onReady?.(a);
		} catch (e) {
			t.onError?.(e);
			return;
		}
		return t.colorBlendAmount && (a.colorBlendAmount = t.colorBlendAmount), t.colorBlendMode && (a.colorBlendMode = t.colorBlendMode), t.style && (a.style = t.style), e.primitiveCollection.add(a), a;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: /* @__PURE__ */ "show.modelMatrix.shadows.maximumScreenSpaceError.cullRequestsWhileMoving.cullRequestsWhileMovingMultiplier.preloadWhenHidden.preloadFlightDestinations.preferLeaves.progressiveResolutionHeightFraction.foveatedScreenSpaceError.foveatedConeSize.foveatedMinimumScreenSpaceErrorRelaxation.foveatedInterpolationCallback.foveatedTimeDelay.dynamicScreenSpaceError.dynamicScreenSpaceErrorDensity.dynamicScreenSpaceErrorFactor.dynamicScreenSpaceErrorHeightFalloff.edgeDisplayMode.skipLevelOfDetail.baseScreenSpaceError.skipScreenSpaceErrorFactor.skipLevels.immediatelyLoadDesiredLevelOfDetail.loadSiblings.clippingPlanes.clippingPolygons.lightColor.colorBlendAmount.colorBlendMode.debugFreezeFrame.debugColorizeTiles.debugWireframe.debugShowBoundingVolume.debugShowContentBoundingVolume.debugShowViewerRequestVolume.debugShowGeometricError.debugShowRenderingStatistics.debugShowMemoryUsage.debugShowUrl.style.backFaceCulling.showOutline.vectorClassificationOnly.vectorKeepDecodedPositions.splitDirection.customShader.imageBasedLighting.showCreditsOnScreen.featureIdLabel.instanceFeatureIdLabel.outlineColor.cacheBytes.maximumCacheOverflowBytes.enableCollision".split("."),
	cesiumReadonlyProps: [
		"asynchronouslyLoadImagery",
		"classificationType",
		"cullWithChildrenBounds",
		"debugHeatmapTilePropertyName",
		"ellipsoid",
		"enableDebugWireframe",
		"heightReference",
		"modelUpAxis",
		"modelForwardAxis",
		"projectTo2D",
		"enableShowOutline",
		"enablePick",
		"environmentMapOptions",
		"scene"
	],
	cesiumEventProps: {
		onAllTilesLoad: "allTilesLoaded",
		onInitialTilesLoad: "initialTilesLoaded",
		onLoadProgress: "loadProgress",
		onTileFailed: "tileFailed",
		onTileLoad: "tileLoad",
		onTileUnload: "tileUnload",
		onTileVisible: "tileVisible"
	},
	otherProps: [
		"onReady",
		"onError",
		"apiKey",
		"onlyUsingWithGoogleGeocoder"
	],
	useCommonEvent: !0
});
X$1({
	name: "GroundPolylinePrimitive",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.GroundPolylinePrimitive(t);
		if (t.onReady) {
			let r = () => {
				n.ready && (t.onReady?.(n), e.scene?.postRender.removeEventListener(r));
			};
			e.scene?.postRender.addEventListener(r);
		}
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: [
		"appearance",
		"classificationType",
		"debugShowBoundingVolume",
		"debugShowShadowVolume",
		"show"
	],
	cesiumReadonlyProps: [
		"allowPicking",
		"asynchronous",
		"geometryInstances",
		"interleave",
		"releaseGeometryInstances"
	],
	otherProps: ["onReady"],
	useCommonEvent: !0
});
X$1({
	name: "GroundPrimitive",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.GroundPrimitive(t);
		if (t.onReady) {
			let r = () => {
				n.ready && (t.onReady?.(n), e.scene?.postRender.removeEventListener(r));
			};
			e.scene?.postRender.addEventListener(r);
		}
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: [
		"appearance",
		"classificationType",
		"debugShowBoundingVolume",
		"debugShowShadowVolume",
		"show"
	],
	cesiumReadonlyProps: [
		"allowPicking",
		"asynchronous",
		"compressVertices",
		"geometryInstances",
		"interleave",
		"releaseGeometryInstances",
		"vertexCacheOptimize"
	],
	otherProps: ["onReady"],
	useCommonEvent: !0
});
X$1({
	name: "GroundPrimitiveCollection",
	create: (e) => e.scene?.groundPrimitives,
	provide: (e) => ({ primitiveCollection: e }),
	cesiumProps: [
		"show",
		"destroyPrimitives",
		"primitiveAdded",
		"primitiveRemoved"
	],
	setCesiumPropsAfterCreate: !0
});
var an = X$1({
	name: "ImageryLayer",
	async create(e, t) {
		if (!e.imageryLayerCollection) return;
		let n = q$1(t.imageryProvider) ? t.imageryProvider : new Promise((e) => queueMicrotask(() => e(t.imageryProvider))), r = e.__$internal?.imageryLayerWaitingList?.slice();
		e.__$internal?.imageryLayerWaitingList && e.__$internal.imageryLayerWaitingList.push(n), r && await Promise.all(r.filter((e) => q$1(e)));
		let i = await n;
		if (e.__$internal?.imageryLayerWaitingList && (e.__$internal.imageryLayerWaitingList = e.__$internal.imageryLayerWaitingList.filter((e) => e !== n)), !i) return;
		let a = new Cesium.ImageryLayer(i, t);
		return e.imageryLayerCollection.add(a, t.index), a;
	},
	destroy(e, t) {
		t.imageryLayerCollection && t.imageryLayerCollection.remove(e);
	},
	cesiumProps: [
		"alpha",
		"brightness",
		"contrast",
		"hue",
		"saturation",
		"gamma",
		"splitDirection",
		"minificationFilter",
		"magnificationFilter",
		"cutoutRectangle",
		"show",
		"nightAlpha",
		"dayAlpha",
		"colorToAlpha",
		"colorToAlphaThreshold",
		"index"
	],
	cesiumReadonlyProps: [
		"rectangle",
		"maximumAnisotropy",
		"minimumTerrainLevel",
		"maximumTerrainLevel",
		"imageryProvider"
	]
});
X$1({
	name: "ImageryLayerCollection",
	create: (e) => e.globe?.imageryLayers,
	cesiumEventProps: {
		onLayerAdd: "layerAdded",
		onLayerMove: "layerMoved",
		onLayerRemove: "layerRemoved",
		onLayerShowOrHide: "layerShownOrHidden"
	}
});
var sn = [
	"clustering",
	"name",
	"show"
], cn = [
	"canvas",
	"camera",
	"ellipsoid",
	"clampToGround",
	"sourceUri",
	"credit",
	"screenOverlayContainer"
], ln = {
	onChange: "changedEvent",
	onError: "errorEvent",
	onLoading: "loadingEvent",
	onRefresh: "refreshEvent",
	onUnsupportedNode: "unsupportedNodeEvent"
}, un = [
	"onLoad",
	"data",
	"suspense",
	"cacheKey"
], dn = (e) => {
	let t = $$1("kml", e.data, e, (e) => Cesium.Resource.fetchBlob({ url: e }));
	return t ? { data: t } : void 0;
}, fn = (e, { data: t, onLoad: n, ...r }) => {
	t && e.load(t, r).then((e) => {
		n && n(e);
	});
};
X$1({
	name: "KmlDataSource",
	create(e, t) {
		if (!e.scene || !e.dataSourceCollection || !e.scene) return;
		let n = new Cesium.KmlDataSource({
			camera: t.camera || e.scene.camera,
			canvas: t.canvas || e.scene.canvas,
			ellipsoid: t.ellipsoid,
			credit: t.credit
		});
		return t.clustering && (n.clustering = t.clustering), typeof t.show == "boolean" && (n.show = t.show), t.name !== void 0 && (n.name = t.name), e.dataSourceCollection.add(n), t.data && fn(n, t), n;
	},
	update(e, t, n) {
		t.data ? n.show !== t.show && (e.show = typeof t.show == "boolean" ? t.show : !0) : e.show = !1, t.data && (n.data !== t.data || n.clampToGround !== t.clampToGround || n.ellipsoid !== t.ellipsoid || n.sourceUri !== t.sourceUri || n.credit !== t.credit) && fn(e, t);
	},
	destroy(e, t) {
		t.dataSourceCollection && !t.dataSourceCollection.isDestroyed() && t.dataSourceCollection.remove(e);
	},
	provide(e) {
		return { dataSource: e };
	},
	useResource: dn,
	cesiumProps: sn,
	cesiumReadonlyProps: cn,
	cesiumEventProps: ln,
	otherProps: un,
	useCommonEvent: !0
});
X$1({
	name: "Label",
	create: (e, t) => e.labelCollection?.add(t),
	destroy(e, t) {
		t.labelCollection && !t.labelCollection.isDestroyed() && t.labelCollection.remove(e);
	},
	cesiumProps: [
		"backgroundColor",
		"backgroundPadding",
		"disableDepthTestDistance",
		"distanceDisplayCondition",
		"eyeOffset",
		"fillColor",
		"font",
		"heightReference",
		"horizontalOrigin",
		"id",
		"outlineColor",
		"outlineWidth",
		"pixelOffset",
		"pixelOffsetScaleByDistance",
		"position",
		"scale",
		"scaleByDistance",
		"show",
		"showBackground",
		"style",
		"text",
		"translucencyByDistance",
		"verticalOrigin"
	],
	useCommonEvent: !0
});
X$1({
	name: "LabelCollection",
	create(e, t) {
		if (!e.scene || !e.primitiveCollection) return;
		let n = new Cesium.LabelCollection({
			scene: e.scene,
			modelMatrix: t.modelMatrix,
			blendOption: t.blendOption,
			debugShowBoundingVolume: t.debugShowBoundingVolume
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { labelCollection: e };
	},
	cesiumProps: [
		"blendOption",
		"coarseDepthTestDistance",
		"debugShowBoundingVolume",
		"modelMatrix",
		"show",
		"threePointDepthTestDistance"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "LabelGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.LabelGraphics(t);
		return e.entity.label = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.label = void 0);
	},
	cesiumProps: [
		"text",
		"font",
		"style",
		"fillColor",
		"outlineColor",
		"outlineWidth",
		"show",
		"showBackground",
		"backgroundColor",
		"backgroundPadding",
		"scale",
		"horizontalOrigin",
		"verticalOrigin",
		"eyeOffset",
		"pixelOffset",
		"translucencyByDistance",
		"pixelOffsetScaleByDistance",
		"scaleByDistance",
		"heightReference",
		"distanceDisplayCondition",
		"disableDepthTestDistance"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "Model",
	async create(e, { scene: t, url: n, colorBlendMode: r, ...i }) {
		if (!e.scene || !e.primitiveCollection || !n) return;
		let a = n, o;
		o = q$1(a) ? await a : a;
		let s;
		try {
			s = await Cesium.Model.fromGltfAsync({
				...i,
				url: o,
				colorBlendMode: r,
				scene: t || e.scene
			});
		} catch (e) {
			i.onError?.(e);
			return;
		}
		return e.primitiveCollection.add(s), s;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || (e._clippingPlanes = void 0, e._clippingPolygons = void 0, e.destroy());
	},
	cesiumEventProps: { onReady: "readyEvent" },
	cesiumProps: /* @__PURE__ */ "backFaceCulling.clampAnimations.clippingPlanes.clippingPolygons.color.colorBlendAmount.colorBlendMode.customShader.debugShowBoundingVolume.debugWireframe.distanceDisplayCondition.edgeDisplayMode.enableVerticalExaggeration.featureIdLabel.heightReference.id.imageBasedLighting.instanceFeatureIdLabel.lightColor.maximumScale.minimumPixelSize.modelMatrix.outlineColor.scale.shadows.show.showCreditsOnScreen.showOutline.silhouetteColor.silhouetteSize.splitDirection.style.pointCloudShading".split("."),
	cesiumReadonlyProps: [
		"allowPicking",
		"asynchronous",
		"basePath",
		"credit",
		"enableDebugWireframe",
		"gltf",
		"incrementallyLoadTextures",
		"scene",
		"releaseGltfJson",
		"cull",
		"opaquePass",
		"upAxis",
		"forwardAxis",
		"content",
		"enableShowOutline",
		"projectTo2D",
		"classificationType",
		"gltfCallback",
		"enablePick",
		"environmentMapOptions"
	],
	otherProps: [
		"onReady",
		"onError",
		"url"
	],
	useCommonEvent: !0
});
X$1({
	name: "ModelGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.ModelGraphics(t);
		return e.entity.model = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.model = void 0);
	},
	cesiumProps: [
		"uri",
		"show",
		"scale",
		"minimumPixelSize",
		"maximumScale",
		"incrementallyLoadTextures",
		"runAnimations",
		"clampAnimations",
		"nodeTransformations",
		"shadows",
		"heightReference",
		"distanceDisplayCondition",
		"silhouetteColor",
		"silhouetteSize",
		"color",
		"colorBlendMode",
		"colorBlendAmount",
		"clippingPlanes",
		"imageBasedLightingFactor",
		"lightColor",
		"articulations",
		"customShader",
		"enableVerticalExaggeration",
		"environmentMapOptions"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "Moon",
	create(e, t) {
		if (!e.scene) return;
		let n = new Cesium.Moon(t);
		return e.scene.moon = n, n;
	},
	destroy(e, t) {
		t.scene && !t.scene.isDestroyed() && (t.scene.moon = new Cesium.Moon());
	},
	cesiumProps: [
		"onlySunLighting",
		"show",
		"textureUrl"
	],
	cesiumReadonlyProps: ["ellipsoid"]
});
X$1({
	name: "MVTDataProvider",
	async create(e, t) {
		if (!e.primitiveCollection) return;
		let { url: n, minZoom: r, maxZoom: i, extent: a, featureIdProperty: o, onReady: s, onError: c } = t, l;
		try {
			l = await Cesium.MVTDataProvider.fromUrl(n, {
				minZoom: r,
				maxZoom: i,
				extent: a,
				featureIdProperty: o
			}), s?.(l);
		} catch (e) {
			c?.(e);
			return;
		}
		return e.primitiveCollection.add(l), l;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: ["show"],
	cesiumReadonlyProps: [
		"minZoom",
		"maxZoom",
		"extent",
		"featureIdProperty",
		"url"
	],
	otherProps: [
		"url",
		"onReady",
		"onError"
	]
});
X$1({
	name: "ParticleSystem",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.ParticleSystem({
			...t,
			updateCallback: t.onUpdate
		});
		return e.primitiveCollection.add(n), n;
	},
	update(e, t, n) {
		t.onUpdate !== n.onUpdate && (e.updateCallback = t.onUpdate);
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e);
	},
	cesiumProps: /* @__PURE__ */ "show.emitter.modelMatrix.emitterModelMatrix.emissionRate.bursts.loop.startScale.endScale.startColor.endColor.image.imageSize.minimumImageSize.maximumImageSize.speed.minimumSpeed.maximumSpeed.lifetime.particleLife.minimumParticleLife.maximumParticleLife.mass.minimumMass.maximumMass.sizeInMeters".split("."),
	cesiumEventProps: {
		onComplete: "complete",
		onUpdate: "updateCallback"
	}
});
X$1({
	name: "PathGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.PathGraphics(t);
		return e.entity.path = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.path = void 0);
	},
	cesiumProps: [
		"leadTime",
		"trailTime",
		"show",
		"width",
		"material",
		"resolution",
		"distanceDisplayCondition",
		"relativeTo"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "PlaneGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.PlaneGraphics(t);
		return e.entity.plane = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.plane = void 0);
	},
	cesiumProps: [
		"plane",
		"dimensions",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"shadows",
		"distanceDisplayCondition"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "PointGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.PointGraphics(t);
		return e.entity.point = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.point = void 0);
	},
	cesiumProps: [
		"color",
		"pixelSize",
		"outlineColor",
		"outlineWidth",
		"show",
		"scaleByDistance",
		"translucencyByDistance",
		"heightReference",
		"distanceDisplayCondition",
		"disableDepthTestDistance",
		"splitDirection"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "PointPrimitive",
	create: (e, t) => e.pointPrimitiveCollection?.add(t),
	destroy(e, t) {
		t.pointPrimitiveCollection && !t.pointPrimitiveCollection.isDestroyed() && t.pointPrimitiveCollection.remove(e);
	},
	cesiumProps: [
		"color",
		"disableDepthTestDistance",
		"distanceDisplayCondition",
		"id",
		"outlineColor",
		"outlineWidth",
		"pixelSize",
		"position",
		"scaleByDistance",
		"show",
		"splitDirection",
		"translucencyByDistance"
	],
	useCommonEvent: !0
});
X$1({
	name: "PointPrimitveCollection",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.PointPrimitiveCollection(t);
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { pointPrimitiveCollection: e };
	},
	cesiumProps: [
		"blendOption",
		"debugShowBoundingVolume",
		"modelMatrix",
		"show"
	]
});
X$1({
	name: "PolygonGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.PolygonGraphics(t);
		return e.entity.polygon = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.polygon = void 0);
	},
	cesiumProps: [
		"arcType",
		"hierarchy",
		"height",
		"heightReference",
		"extrudedHeight",
		"extrudedHeightReference",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"stRotation",
		"granularity",
		"perPositionHeight",
		"closeTop",
		"closeBottom",
		"shadows",
		"distanceDisplayCondition",
		"zIndex",
		"classificationType",
		"textureCoordinates"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "Polyline",
	create: (e, t) => {
		let n = e.polylineCollection?.add(t);
		if (n) return [n, { userMaterial: !!t.material }];
	},
	destroy(e, t, n, r) {
		if (t.polylineCollection && !t.polylineCollection.isDestroyed()) {
			if (r?.userMaterial) {
				let t = e.material;
				t && !t.isDestroyed() && (e.material = Cesium.Material.fromType(Cesium.Material.ColorType, { color: new Cesium.Color(1, 1, 1, 1) }));
			}
			t.polylineCollection.remove(e);
		}
	},
	cesiumProps: [
		"distanceDisplayCondition",
		"id",
		"loop",
		"material",
		"positions",
		"show",
		"width"
	],
	useCommonEvent: !0
});
X$1({
	name: "PolylineCollection",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.PolylineCollection({
			modelMatrix: t.modelMatrix,
			debugShowBoundingVolume: t.debugShowBoundingVolume,
			length: t.length,
			scene: e.scene
		});
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { polylineCollection: e };
	},
	cesiumProps: [
		"debugShowBoundingVolume",
		"length",
		"modelMatrix",
		"show"
	]
});
X$1({
	name: "PolylineGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.PolylineGraphics(t);
		return e.entity.polyline = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.polyline = void 0);
	},
	cesiumProps: [
		"arcType",
		"classificationType",
		"positions",
		"clampToGround",
		"width",
		"show",
		"material",
		"depthFailMaterial",
		"granularity",
		"shadows",
		"distanceDisplayCondition",
		"zIndex"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "PolylineVolumeGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.PolylineVolumeGraphics(t);
		return e.entity.polylineVolume = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.polylineVolume = void 0);
	},
	cesiumProps: [
		"positions",
		"shape",
		"cornerType",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"granularity",
		"shadows",
		"distanceDisplayCondition"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
X$1({
	name: "PostProcessStage",
	create(e, t) {
		if (!e.scene) return;
		let n = new Cesium.PostProcessStage(t);
		return typeof t.enabled == "boolean" && (n.enabled = t.enabled), t.selected && (n.selected = t.selected), e.scene.postProcessStages.add(n), n;
	},
	destroy(e, t) {
		t.scene && !t.scene.isDestroyed() && t.scene.postProcessStages.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: ["enabled", "selected"],
	cesiumReadonlyProps: [
		"clearColor",
		"forcePowerOfTwo",
		"fragmentShader",
		"name",
		"pixelDatatype",
		"pixelFormat",
		"sampleMode",
		"scissorRectangle",
		"textureScale",
		"uniforms"
	]
});
Z$1({
	name: "BlackAndWhiteStage",
	props: ["gradations"],
	create: () => Cesium.PostProcessStageLibrary.createBlackAndWhiteStage()
});
Z$1({
	name: "BrightnessStage",
	props: ["brightness"],
	create: () => Cesium.PostProcessStageLibrary.createBrightnessStage()
});
Z$1({
	name: "LensFlareStage",
	props: [
		"dirtTexture",
		"starTexture",
		"intensity",
		"distortion",
		"ghostDispersal",
		"haloWidth",
		"earthRadius"
	],
	create: () => Cesium.PostProcessStageLibrary.createLensFlareStage()
});
Z$1({
	name: "Fxaa",
	create: (e, t) => t.fxaa,
	props: []
});
Z$1({
	name: "NightVisionStage",
	props: [],
	create: () => Cesium.PostProcessStageLibrary.createNightVisionStage()
});
var zn = ["enabled", "selected"], Bn = [
	"inputPreviousStageTexture",
	"name",
	"stages",
	"uniforms"
], Vn = (e, t) => {
	let n = e, r = Array.isArray(n._stages) ? n._stages.slice() : [];
	if (n._stages = [], t) {
		t.remove(e);
		let n = t._stageNames;
		for (let e of r) {
			let t = e;
			n && typeof t.name == "string" && Reflect.deleteProperty(n, t.name), t._textureCache = void 0, t._index = void 0;
		}
	}
	e.isDestroyed() || e.destroy();
};
X$1({
	name: "PostProcessStageComposite",
	create(e, t) {
		if (!e.scene) return;
		let n = new Cesium.PostProcessStageComposite(t);
		return typeof t.enabled == "boolean" && (n.enabled = t.enabled), t.selected && (n.selected = t.selected), e.scene.postProcessStages.add(n), n;
	},
	destroy(e, t) {
		Vn(e, t.scene && !t.scene.isDestroyed() ? t.scene.postProcessStages : void 0);
	},
	cesiumProps: zn,
	cesiumReadonlyProps: Bn
});
Z$1({
	name: "AmbientOcclusion",
	create: (e, t) => t.ambientOcclusion,
	props: [
		"ambientOcclusionOnly",
		"bias",
		"delta",
		"frustumLength",
		"intensity",
		"lengthCap",
		"sigma",
		"stepSize"
	],
	noMount: !0
});
Z$1({
	name: "Bloom",
	create: (e, t) => t.bloom,
	props: [
		"brightness",
		"contrast",
		"delta",
		"glowOnly",
		"sigma",
		"stepSize"
	],
	noMount: !0
});
Z$1({
	name: "BlurStage",
	props: [
		"delta",
		"sigma",
		"stepSize"
	],
	create: () => Cesium.PostProcessStageLibrary.createBlurStage()
});
Z$1({
	name: "DepthOfFieldStage",
	props: [
		"delta",
		"focalDistance",
		"sigma",
		"stepSize"
	],
	create: () => Cesium.PostProcessStageLibrary.createDepthOfFieldStage()
});
Z$1({
	name: "EdgeDetectionStage",
	props: ["color", "length"],
	create: () => Cesium.PostProcessStageLibrary.createEdgeDetectionStage()
});
Z$1({
	name: "SilhouetteStage",
	props: ["color", "length"],
	create: () => Cesium.PostProcessStageLibrary.createSilhouetteStage()
});
X$1({
	name: "Primitive",
	create(e, t) {
		if (!e.primitiveCollection) return;
		let n = new Cesium.Primitive(t);
		if (t.onReady) {
			let r = () => {
				n.ready && (t.onReady?.(n), e.scene?.postRender.removeEventListener(r));
			};
			e.scene?.postRender.addEventListener(r);
		}
		return e.primitiveCollection.add(n), n;
	},
	destroy(e, t) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || e.destroy();
	},
	cesiumProps: [
		"appearance",
		"cull",
		"debugShowBoundingVolume",
		"depthFailAppearance",
		"modelMatrix",
		"shadows",
		"show"
	],
	cesiumReadonlyProps: [
		"allowPicking",
		"asynchronous",
		"compressVertices",
		"geometryInstances",
		"interleave",
		"releaseGeometryInstances",
		"vertexCacheOptimize"
	],
	otherProps: ["onReady"],
	useCommonEvent: !0
});
X$1({
	name: "RectangleGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.RectangleGraphics(t);
		return e.entity.rectangle = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.rectangle = void 0);
	},
	cesiumProps: [
		"classificationType",
		"coordinates",
		"height",
		"heightReference",
		"extrudedHeight",
		"extrudedHeightReference",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"rotation",
		"stRotation",
		"granularity",
		"shadows",
		"distanceDisplayCondition",
		"zIndex"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
var Zn = /* @__PURE__ */ "backgroundColor.completeMorphOnUserInput.debugShowCommands.debugShowDepthFrustum.debugShowFramesPerSecond.debugShowFrustumPlanes.debugShowFrustums.eyeSeparation.farToNearRatio.focalLength.fog.gamma.globe.highDynamicRange.invertClassification.invertClassificationColor.light.logarithmicDepthBuffer.logarithmicDepthFarToNearRatio.maximumRenderTimeChange.minimumDisableDepthTestDistance.moon.morphTime.nearToFarDistance2D.pickTranslucentDepth.requestRenderMode.rethrowRenderErrors.shadowMap.skyAtmosphere.skyBox.specularEnvironmentMaps.sphericalHarmonicCoefficients.sun.sunBloom.terrainProvider.useDepthPicking.useWebVR.msaaSamples.splitPosition.verticalExaggeration.verticalExaggerationRelativeHeight.atmosphere".split("."), Qn = {
	onMorphComplete: "morphComplete",
	onMorphStart: "morphStart",
	onPostRender: "postRender",
	onPreRender: "preRender",
	onPreUpdate: "preUpdate",
	onPostUpdate: "postUpdate",
	onRenderError: "renderError",
	onTerrainProviderChange: "terrainProviderChanged"
}, $n = [
	"mode",
	"morphDuration",
	"enableEdgeVisibility"
], er = (e, t, n) => {
	switch (t) {
		case Cesium.SceneMode.SCENE2D:
			e.morphTo2D(n);
			break;
		case Cesium.SceneMode.COLUMBUS_VIEW:
			e.morphToColumbusView(n);
			break;
		case Cesium.SceneMode.SCENE3D:
			e.morphTo3D(n);
			break;
	}
}, tr = X$1({
	name: "Scene",
	create(e, t) {
		return e.scene && (t.mode && er(e.scene, t.mode, t.morphDuration), t.enableEdgeVisibility !== void 0 && (e.scene._enableEdgeVisibility = t.enableEdgeVisibility)), e.scene;
	},
	update(e, t, n) {
		t.mode !== n.mode && t.mode && er(e, t.mode, t.morphDuration), t.enableEdgeVisibility !== n.enableEdgeVisibility && t.enableEdgeVisibility !== void 0 && (e._enableEdgeVisibility = t.enableEdgeVisibility);
	},
	cesiumProps: Zn,
	cesiumEventProps: Qn,
	otherProps: $n,
	setCesiumPropsAfterCreate: !0
}), nr = X$1({
	name: "ScreenSpaceCameraController",
	create: (e) => e.scene?.screenSpaceCameraController,
	cesiumProps: [
		"bounceAnimationTime",
		"enableCollisionDetection",
		"enableInputs",
		"enableLook",
		"enableRotate",
		"enableTilt",
		"enableTranslate",
		"enableZoom",
		"inertiaSpin",
		"inertiaTranslate",
		"inertiaZoom",
		"lookEventTypes",
		"maximumMovementRatio",
		"maximumZoomDistance",
		"minimumCollisionTerrainHeight",
		"minimumPickingTerrainHeight",
		"minimumTrackBallHeight",
		"minimumZoomDistance",
		"rotateEventTypes",
		"tiltEventTypes",
		"translateEventTypes",
		"zoomEventTypes",
		"minimumPickingTerrainDistanceWithInertia",
		"maximumTiltAngle",
		"zoomFactor"
	],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "ScreenSpaceEventHandler",
	create(e, t) {
		return t.useDefault ? e.cesiumWidget?.screenSpaceEventHandler : e.scene ? new Cesium.ScreenSpaceEventHandler(e.scene.canvas) : void 0;
	},
	destroy(e) {
		e.isDestroyed() || e.destroy();
	},
	provide(e) {
		return { screenSpaceEventHandler: e };
	}
});
X$1({
	name: "ShadowMap",
	create: (e) => e.scene?.shadowMap,
	cesiumProps: [
		"darkness",
		"fadingEnabled",
		"maximumDistance",
		"enabled",
		"normalOffset",
		"softShadows",
		"size"
	]
});
var or = X$1({
	name: "SkyAtmosphere",
	create: (e) => e.scene?.skyAtmosphere,
	cesiumProps: [
		"brightnessShift",
		"hueShift",
		"saturationShift",
		"show",
		"perFragmentAtmosphere",
		"atmosphereLightIntensity",
		"atmosphereRayleighCoefficient",
		"atmosphereMieCoefficient",
		"atmosphereRayleighScaleHeight",
		"atmosphereMieScaleHeight",
		"atmosphereMieAnisotropy"
	],
	setCesiumPropsAfterCreate: !0
}), sr = X$1({
	name: "SkyBox",
	create: (e) => e.scene?.skyBox,
	cesiumProps: ["sources", "show"],
	setCesiumPropsAfterCreate: !0
}), cr = X$1({
	name: "Sun",
	create(e) {
		if (!e.scene) return;
		let t = new Cesium.Sun();
		return e.scene.sun = t, t;
	},
	destroy(e, t) {
		t.scene && !t.scene.isDestroyed() && (t.scene.sun = new Cesium.Sun());
	},
	cesiumProps: ["glowFactor", "show"],
	setCesiumPropsAfterCreate: !0
});
X$1({
	name: "TimeDynamicPointCloud",
	create(e, t) {
		if (!e.cesiumWidget || !e.primitiveCollection || !e.cesiumWidget?.clock) return;
		let n = new Cesium.TimeDynamicPointCloud({
			...t,
			clock: t.clock ?? e.cesiumWidget.clock
		});
		if (t.onReady) {
			let e = () => {
				t.onReady?.(n), n.frameChanged.removeEventListener(e);
			};
			n.frameChanged.addEventListener(e);
		}
		return e.primitiveCollection.add(n), [n, { userClippingPlanes: !!t.clippingPlanes }];
	},
	destroy(e, t, n, r) {
		t.primitiveCollection && !t.primitiveCollection.isDestroyed() && t.primitiveCollection.remove(e), e.isDestroyed() || (r?.userClippingPlanes && (e._clippingPlanes = void 0), e.destroy());
	},
	cesiumProps: [
		"clippingPlanes",
		"maximumMemoryUsage",
		"modelMatrix",
		"shadows",
		"show",
		"style",
		"intervals"
	],
	cesiumReadonlyProps: ["clock", "shading"],
	cesiumEventProps: { onFrameChange: "frameChanged" },
	otherProps: ["onReady"],
	useCommonEvent: !0
});
var ur = X$1({
	name: "Viewer",
	async create(e, { baseLayer: t, terrainProvider: n, ...r }, i) {
		if (!i) return;
		let a;
		a = q$1(n) ? await n : n;
		let o = new Cesium.Viewer(i, {
			...r,
			terrainProvider: a,
			baseLayer: t ?? void 0
		});
		if (o) return t === !1 && o.imageryLayers.removeAll(), o && r.extend && (Array.isArray(r.extend) ? r.extend.forEach((e) => {
			o.extend(e, {});
		}) : o.extend(r.extend, {})), [o, new Ue$1(o.scene)];
	},
	destroy(e, t, n, r) {
		r && !r.isDestroyed() && r.destroy(), e.isDestroyed() || e.destroy();
	},
	provide(e, t, n, r) {
		return {
			viewer: e,
			cesiumWidget: e.cesiumWidget,
			dataSourceCollection: e.dataSources,
			entityCollection: e.entities,
			scene: e.scene,
			camera: e.scene.camera,
			imageryLayerCollection: e.scene.globe.imageryLayers,
			primitiveCollection: e.scene.primitives,
			globe: e.scene.globe,
			__$internal: {
				onUpdate: n?.onUpdate,
				imageryLayerWaitingList: []
			},
			[J$1]: r
		};
	},
	containerProps: ({ id: e, className: t, style: n, full: r, containerProps: i }) => ({
		className: t,
		id: e,
		style: {
			...r ? {
				position: "absolute",
				bottom: "0",
				left: "0",
				right: "0",
				top: "0"
			} : {},
			...n
		},
		...i
	}),
	cesiumProps: [
		"terrainShadows",
		"clockTrackedDataSource",
		"targetFrameRate",
		"useDefaultRenderLoop",
		"resolutionScale",
		"allowDataSourcesToSuspendAnimation",
		"trackedEntity",
		"selectedEntity",
		"shadows",
		"useBrowserRecommendedResolution",
		"creditDisplay"
	],
	cesiumReadonlyProps: /* @__PURE__ */ "baseLayer.animation.baseLayerPicker.fullscreenButton.vrButton.geocoder.homeButton.infoBox.sceneModePicker.selectionIndicator.timeline.navigationHelpButton.navigationInstructionsInitiallyVisible.scene3DOnly.shouldAnimate.clockViewModel.selectedImageryProviderViewModel.imageryProviderViewModels.selectedTerrainProviderViewModel.terrainProviderViewModels.ellipsoid.skyBox.skyAtmosphere.fullscreenElement.showRenderLoopErrors.automaticallyTrackDataSourceClocks.contextOptions.sceneMode.mapProjection.globe.orderIndependentTranslucency.creditContainer.creditViewport.dataSources.mapMode2D.projectionPicker.blurActiveElementOnCanvasFocus.requestRenderMode.maximumRenderTimeChange.depthPlaneEllipsoidOffset.msaaSamples.terrain".split("."),
	cesiumEventProps: {
		onSelectedEntityChange: "selectedEntityChanged",
		onTrackedEntityChange: "trackedEntityChanged"
	},
	otherProps: [
		"className",
		"id",
		"style",
		"full",
		"containerProps",
		"extend",
		"terrainProvider"
	],
	renderContainer: !0,
	useCommonEvent: !0,
	useRootEvent: !0
});
X$1({
	name: "WebMapTileServiceImageryProvider",
	create(e, t) {
		let { onReady: n, children: r, ...i } = t, a = new Cesium.WebMapTileServiceImageryProvider(i);
		return n && n(a), a;
	}
});
X$1({
	name: "WallGraphics",
	create(e, t) {
		if (!e.entity) return;
		let n = new Cesium.WallGraphics(t);
		return e.entity.wall = n, n;
	},
	destroy(e, t) {
		t.entity && (t.entity.wall = void 0);
	},
	cesiumProps: [
		"positions",
		"maximumHeights",
		"minimumHeights",
		"show",
		"fill",
		"material",
		"outline",
		"outlineColor",
		"outlineWidth",
		"granularity",
		"shadows",
		"distanceDisplayCondition"
	],
	cesiumEventProps: { onDefinitionChange: "definitionChanged" }
});
//#endregion
//#region \0virtual:starmap-private-data
var privateEditorState = {
	"schemaVersion": 2,
	"addedCountries": [
		{
			"id": "south-korea",
			"nameZh": "韩国",
			"nameEn": "South Korea",
			"countryCode": "kr",
			"centerLat": 37,
			"centerLng": 127.5,
			"region": "Asia",
			"visitedDate": "2016-06-20"
		},
		{
			"id": "thailand",
			"nameZh": "泰国",
			"nameEn": "Thailand",
			"countryCode": "th",
			"centerLat": 15,
			"centerLng": 100,
			"region": "Asia",
			"visitedDate": "2017-07-26"
		},
		{
			"id": "china",
			"nameZh": "中国",
			"nameEn": "China",
			"countryCode": "cn",
			"centerLat": 35,
			"centerLng": 105,
			"region": "Asia",
			"visitedDate": "2004-06-08"
		}
	],
	"countryOrder": [
		"china",
		"thailand",
		"south-korea"
	],
	"hiddenCountryIds": [],
	"cityOrderByCountry": {},
	"hiddenCityIds": [],
	"mediaOrderByCity": {},
	"hiddenMediaIds": [],
	"coverMediaByCity": {},
	"droneOrderByCity": {},
	"hiddenDroneMediaIds": [],
	"customRoutes": [
		{
			"id": "custom-route-1790738648118-xatzyz",
			"title": "中国-韩国",
			"type": "custom",
			"startDate": "2016-06-20",
			"endDate": "2016-06-27",
			"color": "#f28b82",
			"visible": true,
			"points": [
				{
					"lat": 35.64603042602539,
					"lng": 108.36886596679688,
					"cityId": "china__shaanxi"
				},
				{
					"lat": 35.14755821228027,
					"lng": 129.0726089477539,
					"cityId": "south-korea__busan"
				},
				{
					"lat": 37.572479248046875,
					"lng": 126.97399139404297,
					"cityId": "south-korea__seoul"
				},
				{
					"lat": 33.380001068115234,
					"lng": 126.52999877929688,
					"cityId": "south-korea__jeju-island"
				}
			]
		},
		{
			"id": "custom-route-1790738838452-dlxj5f",
			"title": "陕西西安-浙江杭州",
			"type": "custom",
			"startDate": "2022-08-15",
			"color": "#66c7a8",
			"visible": true,
			"points": [{
				"lat": 35.64603042602539,
				"lng": 108.36886596679688,
				"cityId": "china__shaanxi"
			}, {
				"lat": 29.111295700073242,
				"lng": 120.48855972290039,
				"cityId": "china__zhejiang"
			}]
		},
		{
			"id": "custom-route-1790738921130-sylrn4",
			"title": "陕西西安-广西桂林-上海-浙江杭州",
			"type": "custom",
			"startDate": "2025-08-26",
			"endDate": "2025-09-01",
			"color": "#66c7a8",
			"visible": true,
			"points": [
				{
					"lat": 35.64603042602539,
					"lng": 108.36886596679688,
					"cityId": "china__shaanxi"
				},
				{
					"lat": 23.64256477355957,
					"lng": 108.25602722167969,
					"cityId": "china__guangxi-zhuang"
				},
				{
					"lat": 31.230369567871094,
					"lng": 121.47370147705078,
					"cityId": "china__shanghai"
				},
				{
					"lat": 29.111295700073242,
					"lng": 120.48855972290039,
					"cityId": "china__zhejiang"
				}
			]
		},
		{
			"id": "custom-route-1790739022001-if5foh",
			"title": "陕西西安-重庆-浙江杭州",
			"type": "custom",
			"startDate": "2025-02-09",
			"endDate": "2025-02-12",
			"color": "#66c7a8",
			"visible": true,
			"points": [
				{
					"lat": 35.64603042602539,
					"lng": 108.36886596679688,
					"cityId": "china__shaanxi"
				},
				{
					"lat": 30.18072509765625,
					"lng": 107.7450942993164,
					"cityId": "china__chongqing"
				},
				{
					"lat": 29.111295700073242,
					"lng": 120.48855972290039,
					"cityId": "china__zhejiang"
				}
			]
		},
		{
			"id": "custom-route-1790739120542-y9dbkq",
			"title": "陕西西安-北京",
			"type": "custom",
			"startDate": "2018-09-01",
			"color": "#66c7a8",
			"visible": true,
			"points": [{
				"lat": 35.64603042602539,
				"lng": 108.36886596679688,
				"cityId": "china__shaanxi"
			}, {
				"lat": 39.907806396484375,
				"lng": 116.3975830078125,
				"cityId": "china__beijing"
			}]
		},
		{
			"id": "custom-route-1790757204883-39unrx",
			"title": "浙江杭州-江苏南京",
			"type": "custom",
			"startDate": "2024-10-01",
			"endDate": "2024-10-04",
			"color": "#66c7a8",
			"visible": true,
			"points": [{
				"lat": 29.111295700073242,
				"lng": 120.48855972290039,
				"cityId": "china__zhejiang"
			}, {
				"lat": 32.94049549102783,
				"lng": 119.15230178833008,
				"cityId": "china__jiangsu"
			}]
		},
		{
			"id": "custom-route-1790757700165-1bcugm",
			"title": "陕西西安-内蒙古阿拉善旗",
			"type": "custom",
			"startDate": "2019-07-20",
			"endDate": "2019-07-27",
			"color": "#66c7a8",
			"visible": true,
			"points": [{
				"lat": 35.64603042602539,
				"lng": 108.36886596679688,
				"cityId": "china__shaanxi"
			}, {
				"lat": 45.37083435058594,
				"lng": 111.25540161132812,
				"cityId": "china__inner-mongolia"
			}]
		},
		{
			"id": "custom-route-1791449459263-438ahx",
			"title": "中国-泰国",
			"type": "custom",
			"startDate": "2017-07-26",
			"endDate": "2017-07-30",
			"color": "#7dd3fc",
			"visible": true,
			"points": [
				{
					"lat": 35.64603042602539,
					"lng": 108.36886596679688,
					"cityId": "china__shaanxi"
				},
				{
					"lat": 13.752493858337402,
					"lng": 100.4935073852539,
					"cityId": "thailand__bangkok"
				},
				{
					"lat": 12.932854175567627,
					"lng": 100.84995651245117,
					"cityId": "thailand__pattaya-city"
				},
				{
					"lat": 7.979154825210571,
					"lng": 98.35091781616211,
					"cityId": "thailand__ko-phuket"
				}
			]
		}
	],
	"updatedAt": "2026-10-08T08:53:47.068Z"
};
var privateTravelMap = {
	"schema_version": 1,
	"generated_at": "2026-10-08T08:53:47.063Z",
	"privacy_level": "private-local",
	"intended_use": "Neutral open-source StarMap demonstration data.",
	"display": {
		"overviewTarget": {
			"lat": 64,
			"lng": -13
		},
		"hiddenCountries": [],
		"originCountries": [],
		"regionMatchers": [],
		"hiddenCityNames": [],
		"countryAliases": {},
		"countryCodes": {
			"Iceland": "is",
			"Faroe Islands": "fo"
		},
		"journeyRules": []
	},
	"safety_notes": ["Fictional itinerary assembled from public geographic facts.", "Replace this sample with generated/travel-map.local.json for personal use."],
	"records": [
		{
			"id": "manual-2004-06-08-china-shaanxi",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "陕西",
			"city_en": "Shaanxi",
			"start_date": "2004-06-08",
			"year": 2004,
			"trip_title": "中国 · 陕西",
			"type": "visit",
			"status": "visited",
			"lat": 35.64603042602539,
			"lng": 108.36886596679688,
			"source": "local-editor"
		},
		{
			"id": "manual-2016-06-20-south-korea-busan",
			"country": "韩国",
			"country_en": "South Korea",
			"country_code": "KR",
			"city": "釜山",
			"city_en": "Busan",
			"start_date": "2016-06-20",
			"year": 2016,
			"trip_title": "韩国 · 釜山",
			"type": "visit",
			"status": "visited",
			"lat": 35.14755821228027,
			"lng": 129.0726089477539,
			"source": "local-editor"
		},
		{
			"id": "manual-2016-06-22-south-korea-seoul",
			"country": "韩国",
			"country_en": "South Korea",
			"country_code": "KR",
			"city": "首尔",
			"city_en": "Seoul",
			"start_date": "2016-06-22",
			"year": 2016,
			"trip_title": "韩国 · 首尔",
			"type": "visit",
			"status": "visited",
			"lat": 37.572479248046875,
			"lng": 126.97399139404297,
			"source": "local-editor"
		},
		{
			"id": "manual-2016-06-25-south-korea-jeju-island",
			"country": "韩国",
			"country_en": "South Korea",
			"country_code": "KR",
			"city": "济州岛",
			"city_en": "Jeju Island",
			"start_date": "2016-06-25",
			"year": 2016,
			"trip_title": "韩国 · 济州岛",
			"type": "visit",
			"status": "visited",
			"lat": 33.380001068115234,
			"lng": 126.52999877929688,
			"source": "local-editor"
		},
		{
			"id": "manual-2017-07-26-thailand-bangkok",
			"country": "泰国",
			"country_en": "Thailand",
			"country_code": "TH",
			"city": "曼谷",
			"city_en": "Bangkok",
			"start_date": "2017-07-26",
			"year": 2017,
			"trip_title": "泰国 · 曼谷",
			"type": "visit",
			"status": "visited",
			"lat": 13.752493858337402,
			"lng": 100.4935073852539,
			"source": "local-editor"
		},
		{
			"id": "manual-2017-07-30-thailand-pattaya-city",
			"country": "泰国",
			"country_en": "Thailand",
			"country_code": "TH",
			"city": "芭提雅",
			"city_en": "Pattaya City",
			"start_date": "2017-07-28",
			"year": 2017,
			"trip_title": "泰国 · 芭提雅",
			"type": "visit",
			"status": "visited",
			"lat": 12.932854175567627,
			"lng": 100.84995651245117,
			"source": "local-editor"
		},
		{
			"id": "manual-2017-07-28-thailand-ko-phuket",
			"country": "泰国",
			"country_en": "Thailand",
			"country_code": "TH",
			"city": "普吉岛",
			"city_en": "Ko Phuket",
			"start_date": "2017-07-29",
			"end_date": "2017-07-30",
			"year": 2017,
			"trip_title": "泰国 · 普吉岛",
			"type": "visit",
			"status": "visited",
			"lat": 7.979154825210571,
			"lng": 98.35091781616211,
			"source": "local-editor"
		},
		{
			"id": "manual-2018-09-01-china-beijing",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "北京",
			"city_en": "Beijing",
			"start_date": "2018-09-01",
			"year": 2018,
			"trip_title": "中国 · 北京",
			"type": "visit",
			"status": "visited",
			"lat": 39.907806396484375,
			"lng": 116.3975830078125,
			"source": "local-editor"
		},
		{
			"id": "manual-2022-08-15-china-zhejiang",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "浙江",
			"city_en": "Zhejiang",
			"start_date": "2022-08-15",
			"year": 2022,
			"trip_title": "中国 · 浙江",
			"type": "visit",
			"status": "visited",
			"lat": 29.111295700073242,
			"lng": 120.48855972290039,
			"source": "local-editor"
		},
		{
			"id": "manual-2025-02-09-china-chongqing",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "重庆",
			"city_en": "Chongqing",
			"start_date": "2025-02-09",
			"end_date": "2025-02-12",
			"year": 2025,
			"trip_title": "中国 · 重庆",
			"type": "visit",
			"status": "visited",
			"lat": 30.18072509765625,
			"lng": 107.7450942993164,
			"source": "local-editor"
		},
		{
			"id": "manual-2025-08-26-china-guangxi-zhuang",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "广西",
			"city_en": "Guangxi Zhuang",
			"start_date": "2025-08-26",
			"end_date": "2025-08-29",
			"year": 2025,
			"trip_title": "中国 · 广西",
			"type": "visit",
			"status": "visited",
			"lat": 23.64256477355957,
			"lng": 108.25602722167969,
			"source": "local-editor"
		},
		{
			"id": "manual-2025-08-29-china-shanghai",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "上海",
			"city_en": "Shanghai",
			"start_date": "2025-08-29",
			"end_date": "2025-09-01",
			"year": 2025,
			"trip_title": "中国 · 上海",
			"type": "visit",
			"status": "visited",
			"lat": 31.230369567871094,
			"lng": 121.47370147705078,
			"source": "local-editor"
		},
		{
			"id": "manual-2024-10-01-china-jiangsu",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "江苏",
			"city_en": "Jiangsu",
			"start_date": "2024-10-01",
			"end_date": "2024-10-04",
			"year": 2024,
			"trip_title": "中国 · 江苏",
			"type": "visit",
			"status": "visited",
			"lat": 32.94049549102783,
			"lng": 119.15230178833008,
			"source": "local-editor"
		},
		{
			"id": "manual-2019-07-20-china-inner-mongolia",
			"country": "中国",
			"country_en": "China",
			"country_code": "CN",
			"city": "内蒙古",
			"city_en": "Inner Mongolia",
			"start_date": "2019-07-20",
			"end_date": "2019-07-27",
			"year": 2019,
			"trip_title": "中国 · 内蒙古",
			"type": "visit",
			"status": "visited",
			"lat": 45.37083435058594,
			"lng": 111.25540161132812,
			"source": "local-editor"
		}
	]
};
//#endregion
//#region src/data/editorState.ts
var emptyEditorState = {
	schemaVersion: 2,
	addedCountries: [],
	countryOrder: [],
	hiddenCountryIds: [],
	cityOrderByCountry: {},
	hiddenCityIds: [],
	mediaOrderByCity: {},
	hiddenMediaIds: [],
	coverMediaByCity: {},
	droneOrderByCity: {},
	hiddenDroneMediaIds: [],
	customRoutes: []
};
var isStringArray = (value) => Array.isArray(value) && value.every((item) => typeof item === "string");
var isStringArrayRecord = (value) => Boolean(value) && typeof value === "object" && Object.values(value).every(isStringArray);
var isStringRecord = (value) => Boolean(value) && typeof value === "object" && Object.values(value).every((item) => typeof item === "string");
var isCustomRoutePoint = (value) => {
	if (!value || typeof value !== "object") return false;
	const candidate = value;
	return typeof candidate.lat === "number" && Number.isFinite(candidate.lat) && candidate.lat >= -90 && candidate.lat <= 90 && typeof candidate.lng === "number" && Number.isFinite(candidate.lng) && candidate.lng >= -180 && candidate.lng <= 180;
};
var isCustomRoute = (value) => {
	if (!value || typeof value !== "object") return false;
	const candidate = value;
	return typeof candidate.id === "string" && typeof candidate.title === "string" && (candidate.startDate === void 0 || typeof candidate.startDate === "string") && (candidate.endDate === void 0 || typeof candidate.endDate === "string") && (candidate.date === void 0 || typeof candidate.date === "string") && (candidate.type === "flight" || candidate.type === "ferry" || candidate.type === "drive" || candidate.type === "walk" || candidate.type === "custom") && Array.isArray(candidate.points) && candidate.points.length >= 2 && candidate.points.every(isCustomRoutePoint) && (candidate.color === void 0 || typeof candidate.color === "string") && (candidate.visible === void 0 || typeof candidate.visible === "boolean");
};
var isLocalEditorCountry = (value) => {
	if (!value || typeof value !== "object") return false;
	const candidate = value;
	return typeof candidate.id === "string" && typeof candidate.nameZh === "string" && typeof candidate.nameEn === "string" && typeof candidate.countryCode === "string" && typeof candidate.centerLat === "number" && typeof candidate.centerLng === "number";
};
var parseEditorState = (value) => {
	if (!value || typeof value !== "object") return void 0;
	const candidate = value;
	if (candidate.schemaVersion !== 1 && candidate.schemaVersion !== 2) return void 0;
	return {
		schemaVersion: 2,
		addedCountries: Array.isArray(candidate.addedCountries) ? candidate.addedCountries.filter(isLocalEditorCountry) : [],
		countryOrder: isStringArray(candidate.countryOrder) ? candidate.countryOrder : [],
		hiddenCountryIds: isStringArray(candidate.hiddenCountryIds) ? candidate.hiddenCountryIds : [],
		cityOrderByCountry: isStringArrayRecord(candidate.cityOrderByCountry) ? candidate.cityOrderByCountry : {},
		hiddenCityIds: isStringArray(candidate.hiddenCityIds) ? candidate.hiddenCityIds : [],
		mediaOrderByCity: isStringArrayRecord(candidate.mediaOrderByCity) ? candidate.mediaOrderByCity : {},
		hiddenMediaIds: isStringArray(candidate.hiddenMediaIds) ? candidate.hiddenMediaIds : [],
		coverMediaByCity: isStringRecord(candidate.coverMediaByCity) ? candidate.coverMediaByCity : {},
		droneOrderByCity: isStringArrayRecord(candidate.droneOrderByCity) ? candidate.droneOrderByCity : {},
		hiddenDroneMediaIds: isStringArray(candidate.hiddenDroneMediaIds) ? candidate.hiddenDroneMediaIds : [],
		customRoutes: Array.isArray(candidate.customRoutes) ? candidate.customRoutes.filter(isCustomRoute) : [],
		updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : void 0
	};
};
var travelAtlasEditorState = parseEditorState(privateEditorState) ?? emptyEditorState;
var orderBySavedIds = (items, savedOrder) => {
	if (!savedOrder?.length) return items;
	const rank = new Map(savedOrder.map((id, index) => [id, index]));
	return [...items].sort((left, right) => {
		const leftRank = rank.get(left.id);
		const rightRank = rank.get(right.id);
		if (leftRank === void 0 && rightRank === void 0) return 0;
		if (leftRank === void 0) return 1;
		if (rightRank === void 0) return -1;
		return leftRank - rightRank;
	});
};
//#endregion
//#region src/data/mediaCatalog.ts
var isCatalog = (value) => {
	if (!value || typeof value !== "object") return false;
	const candidate = value;
	return (candidate.schemaVersion === 1 || candidate.schemaVersion === 2) && Array.isArray(candidate.items);
};
var getMediaSource = (item, variant) => item.variants?.[variant]?.src ?? item.variants?.original.src ?? item.src;
var allImportedMediaItems = isCatalog(void 0) ? (void 0).items : [];
var hiddenMediaIds = new Set([...travelAtlasEditorState.hiddenMediaIds, ...travelAtlasEditorState.hiddenDroneMediaIds]);
var importedMediaItems = allImportedMediaItems.filter((item) => !hiddenMediaIds.has(item.id));
var getCityPhotos = (cityId) => cityId ? orderBySavedIds(importedMediaItems.filter((item) => item.kind === "photo" && item.cityId === cityId && item.status === "ready"), travelAtlasEditorState.mediaOrderByCity[cityId]) : [];
var getCityCoverPhoto = (cityId) => {
	const cityPhotos = getCityPhotos(cityId);
	const savedCoverId = cityId ? travelAtlasEditorState.coverMediaByCity[cityId] : void 0;
	return cityPhotos.find((item) => item.id === savedCoverId) ?? cityPhotos.find((item) => item.isCover) ?? cityPhotos[0];
};
var droneMediaItems = Object.entries(importedMediaItems.filter((item) => (item.kind === "panorama360" || item.kind === "aerialPhoto") && item.status === "ready" && Boolean(item.cityId) && Boolean(item.date) && Boolean(item.resolution)).reduce((byCity, item) => {
	byCity[item.cityId] = [...byCity[item.cityId] ?? [], item];
	return byCity;
}, {})).flatMap(([cityId, items]) => orderBySavedIds(items, travelAtlasEditorState.droneOrderByCity[cityId])).flatMap((item) => {
	if (item.kind !== "panorama360" && item.kind !== "aerialPhoto" || !item.cityId || !item.date || !item.resolution) return [];
	return [{
		id: item.id,
		cityId: item.cityId,
		type: item.kind,
		titleZh: item.titleZh ?? item.titleEn ?? item.cityName ?? "无人机影像",
		titleEn: item.titleEn ?? item.titleZh ?? item.cityName ?? "Drone Media",
		src: getMediaSource(item, "original"),
		previewSrc: getMediaSource(item, "preview"),
		thumbSrc: getMediaSource(item, "thumb"),
		date: item.date,
		resolution: item.resolution,
		captureType: item.captureType ?? (item.kind === "panorama360" ? "Drone 360 Panorama" : "Aerial Photo"),
		fileName: item.originalFileName,
		city: item.cityName ?? item.cityId,
		country: item.countryName,
		description: item.description,
		altitudeMeters: item.altitudeMeters ?? item.position?.altitudeMeters,
		relativeAltitudeMeters: item.relativeAltitudeMeters,
		position: item.position
	}];
});
var droneMediaByCity = droneMediaItems.reduce((acc, item) => {
	acc[item.cityId] = [...acc[item.cityId] ?? [], item];
	return acc;
}, {});
var getDroneMediaForCity = (cityId) => cityId ? droneMediaByCity[cityId] ?? [] : [];
var hasDroneMedia = (cityId) => getDroneMediaForCity(cityId).length > 0;
var droneMediaById = droneMediaItems.reduce((acc, item) => {
	acc[item.id] = item;
	return acc;
}, {});
//#endregion
//#region src/data/localEditorApi.ts
var editorHeaders = {
	"content-type": "application/json",
	"x-travelatlas-local-editor": "1"
};
var parseResponse = async (response) => {
	const body = await response.json();
	if (!response.ok || !body.ok) throw new Error([body.error, body.details].filter(Boolean).join("\n") || "本地编辑操作失败。");
	return body;
};
var searchLocalCountries = async (query, signal) => {
	const search = new URLSearchParams({ q: query });
	return (await parseResponse(await fetch(`/__travelatlas/editor/catalog/countries?${search}`, {
		cache: "no-store",
		signal
	}))).results;
};
var searchLocalCities = async (query, countryCode, signal) => {
	const search = new URLSearchParams({
		q: query,
		countryCode
	});
	return (await parseResponse(await fetch(`/__travelatlas/editor/catalog/cities?${search}`, {
		cache: "no-store",
		signal
	}))).results;
};
var addLocalCountry = async (countryCode, visitedDate) => {
	return parseResponse(await fetch("/__travelatlas/editor/countries", {
		method: "POST",
		headers: editorHeaders,
		body: JSON.stringify({
			countryCode,
			visitedDate
		})
	}));
};
var readLocalEditorState = async () => {
	return (await parseResponse(await fetch("/__travelatlas/editor/state", { cache: "no-store" }))).state;
};
var updateLocalEditorState = async (update) => {
	const current = await readLocalEditorState();
	return (await parseResponse(await fetch("/__travelatlas/editor/state", {
		method: "PUT",
		headers: editorHeaders,
		body: JSON.stringify(update(current))
	}))).state;
};
var uploadLocalMedia = async (upload) => {
	const search = new URLSearchParams({
		countryId: upload.countryId,
		cityId: upload.cityId,
		kind: upload.kind,
		fileName: upload.file.name
	});
	if (upload.date) search.set("date", upload.date);
	if (upload.lat !== void 0) search.set("lat", String(upload.lat));
	if (upload.lng !== void 0) search.set("lng", String(upload.lng));
	if (upload.altitudeMeters !== void 0) search.set("altitudeMeters", String(upload.altitudeMeters));
	if (upload.relativeAltitudeMeters !== void 0) search.set("relativeAltitudeMeters", String(upload.relativeAltitudeMeters));
	if (upload.titleZh) search.set("titleZh", upload.titleZh);
	if (upload.titleEn) search.set("titleEn", upload.titleEn);
	return parseResponse(await fetch(`/__travelatlas/editor/upload?${search}`, {
		method: "POST",
		headers: {
			"content-type": upload.file.type || "application/octet-stream",
			"x-travelatlas-local-editor": "1"
		},
		body: upload.file
	}));
};
var importLocalMedia = async (sourcePaths = []) => {
	return parseResponse(await fetch("/__travelatlas/editor/import", {
		method: "POST",
		headers: editorHeaders,
		body: JSON.stringify({ sourcePaths })
	}));
};
var deleteHiddenLocalMedia = async (cityId, ids) => {
	return parseResponse(await fetch("/__travelatlas/editor/media/delete", {
		method: "POST",
		headers: editorHeaders,
		body: JSON.stringify({
			cityId,
			ids
		})
	}));
};
var deleteHiddenLocalCountries = async (ids) => {
	return parseResponse(await fetch("/__travelatlas/editor/countries/delete", {
		method: "POST",
		headers: editorHeaders,
		body: JSON.stringify({ ids })
	}));
};
var addLocalTravelRecord = async (input) => {
	return parseResponse(await fetch("/__travelatlas/editor/records", {
		method: "POST",
		headers: editorHeaders,
		body: JSON.stringify(input)
	}));
};
var reloadAfterLocalSave = () => window.location.reload();
//#endregion
//#region src/data/mapSources.ts
var cesiumIonToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6InZGQ1A2NEp1LUJDVUs3TWMiLCJqdGkiOiIyNTU0MmYyMC05ZTM2LTRhNmEtYmYwNi1mNWM5ZTI2YWUxNDgiLCJpZCI6NTA2Mzc1LCJzdWIiOiJ6c3ptIiwiaXNzIjoiaHR0cHM6Ly9hcGkuY2VzaXVtLmNvbSIsImF1ZCI6InRyYXZlbCIsImlhdCI6MTc5MDIzNDQyMH0.nPxD8oqgXqAxrMAhgdDcvfIMUrwOxWI5v4Ixwb1MNmQ".trim();
var tiandituToken = "e1203a5ed3774e73ee12982847a73471".trim();
var configuredDefault = "auto".trim().toLowerCase();
var mapSourceStorageKey = "starmap:map-source";
var tiandituSubdomains = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7"
];
var tiandituTileMatrixLabels = Array.from({ length: 18 }, (_, index) => String(index + 1));
Cesium.Ion.defaultAccessToken = cesiumIonToken;
var mapSourceOptions = [
	{
		id: "cesium",
		label: "Cesium",
		description: "Cesium ion 全球影像",
		configured: Boolean(cesiumIonToken)
	},
	{
		id: "tianditu",
		label: "天地图",
		description: "国内影像与中文注记",
		configured: Boolean(tiandituToken)
	},
	{
		id: "local",
		label: "本地低清",
		description: "无需网络与凭据",
		configured: true
	}
];
var configuredMapSourceIds = new Set(mapSourceOptions.filter((option) => option.configured).map((option) => option.id));
var isConfiguredMapSource = (value) => value !== null && configuredMapSourceIds.has(value);
var automaticMapSource = () => {
	return "cesium";
};
var getInitialMapSource = () => {
	if (typeof window !== "undefined") try {
		const storedSource = window.localStorage.getItem(mapSourceStorageKey);
		if (isConfiguredMapSource(storedSource)) return storedSource;
	} catch {}
	if (configuredDefault !== "auto" && isConfiguredMapSource(configuredDefault)) return configuredDefault;
	return automaticMapSource();
};
var rememberMapSource = (source) => {
	if (!isConfiguredMapSource(source) || typeof window === "undefined") return;
	try {
		window.localStorage.setItem(mapSourceStorageKey, source);
	} catch {}
};
var createLocalImagery = () => Cesium.TileMapServiceImageryProvider.fromUrl(Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"));
var createTiandituImagery = (layer, includeCredit = false) => new Cesium.WebMapTileServiceImageryProvider({
	url: `https://t{s}.tianditu.gov.cn/${layer}_w/wmts?tk=${encodeURIComponent(tiandituToken)}`,
	layer,
	style: "default",
	format: "tiles",
	tileMatrixSetID: "w",
	tileMatrixLabels: tiandituTileMatrixLabels,
	subdomains: tiandituSubdomains,
	maximumLevel: 17,
	enablePickFeatures: false,
	credit: includeCredit ? new Cesium.Credit("天地图") : void 0
});
var createMapSourceLayers = (source) => {
	if (source === "cesium" && cesiumIonToken) return { base: Cesium.createWorldImageryAsync().catch(createLocalImagery) };
	if (source === "tianditu" && tiandituToken) return {
		base: createTiandituImagery("img", true),
		labels: createTiandituImagery("cia")
	};
	return { base: createLocalImagery() };
};
var travel_map_sample_default = {
	schema_version: 1,
	generated_at: "2026-08-12",
	privacy_level: "public-sample",
	intended_use: "Neutral open-source StarMap demonstration data.",
	display: {
		"overviewTarget": {
			"lat": 64,
			"lng": -13
		},
		"hiddenCountries": [],
		"originCountries": [],
		"regionMatchers": [],
		"hiddenCityNames": [],
		"countryAliases": {},
		"countryCodes": {
			"Iceland": "is",
			"Faroe Islands": "fo"
		},
		"journeyRules": []
	},
	safety_notes: ["Fictional itinerary assembled from public geographic facts.", "Replace this sample with generated/travel-map.local.json for personal use."],
	records: [
		{
			"id": "sample_reykjavik",
			"country": "冰岛",
			"country_en": "Iceland",
			"country_code": "is",
			"city": "雷克雅未克",
			"city_en": "Reykjavik",
			"region": "North Atlantic",
			"start_date": "2025-06-01",
			"end_date": "2025-06-02",
			"year": 2025,
			"trip_title": "2025 North Atlantic Demo",
			"type": "city",
			"status": "visited",
			"lat": 64.1466,
			"lng": -21.9426,
			"notes": "Sample city record.",
			"source": "StarMap public sample"
		},
		{
			"id": "sample_vik",
			"country": "冰岛",
			"country_en": "Iceland",
			"country_code": "is",
			"city": "维克",
			"city_en": "Vik",
			"region": "North Atlantic",
			"start_date": "2025-06-03",
			"end_date": "2025-06-03",
			"year": 2025,
			"trip_title": "2025 North Atlantic Demo",
			"type": "daytrip",
			"status": "visited",
			"lat": 63.4186,
			"lng": -19.006,
			"notes": "Sample landscape stop.",
			"source": "StarMap public sample"
		},
		{
			"id": "sample_akureyri",
			"country": "冰岛",
			"country_en": "Iceland",
			"country_code": "is",
			"city": "阿克雷里",
			"city_en": "Akureyri",
			"region": "North Atlantic",
			"start_date": "2025-06-04",
			"end_date": "2025-06-05",
			"year": 2025,
			"trip_title": "2025 North Atlantic Demo",
			"type": "city",
			"status": "visited",
			"lat": 65.6885,
			"lng": -18.1262,
			"notes": "Sample northern city record.",
			"source": "StarMap public sample"
		},
		{
			"id": "sample_torshavn",
			"country": "法罗群岛",
			"country_en": "Faroe Islands",
			"country_code": "fo",
			"city": "托尔斯港",
			"city_en": "Torshavn",
			"region": "North Atlantic",
			"start_date": "2025-06-06",
			"end_date": "2025-06-07",
			"year": 2025,
			"trip_title": "2025 North Atlantic Demo",
			"type": "city",
			"status": "visited",
			"lat": 62.0079,
			"lng": -6.79,
			"notes": "Sample island capital record.",
			"source": "StarMap public sample"
		},
		{
			"id": "sample_gjogv",
			"country": "法罗群岛",
			"country_en": "Faroe Islands",
			"country_code": "fo",
			"city": "杰格夫",
			"city_en": "Gjogv",
			"region": "North Atlantic",
			"start_date": "2025-06-08",
			"end_date": "2025-06-08",
			"year": 2025,
			"trip_title": "2025 North Atlantic Demo",
			"type": "daytrip",
			"status": "visited",
			"lat": 62.325,
			"lng": -6.94,
			"notes": "Sample coastal village record.",
			"source": "StarMap public sample"
		}
	]
};
//#endregion
//#region src/data/geoCoordinates.ts
var normalizeGeoName = (value) => value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
var countryCoordinates = {};
var cityCoordinates = {};
var getCountryCoordinate = (name) => countryCoordinates[normalizeGeoName(name)];
var getCityCoordinate = (name) => cityCoordinates[normalizeGeoName(name)];
//#endregion
//#region src/data/travelAtlas.ts
var isTravelMapExport = (value) => {
	if (!value || typeof value !== "object") return false;
	return Array.isArray(value.records);
};
var exportData = (isTravelMapExport(privateTravelMap) ? privateTravelMap : void 0) ?? travel_map_sample_default;
var display = exportData.display ?? {};
var travelAtlasDisplay = { overviewTarget: display.overviewTarget ?? {
	lat: 20,
	lng: 0
} };
var hiddenCountries = new Set(display.hiddenCountries ?? []);
var originCountries = new Set(display.originCountries ?? []);
var regionMatchers = display.regionMatchers ?? [];
var hiddenCityNames = new Set(display.hiddenCityNames ?? []);
var normalizeRecordCountry = (record) => {
	const alias = display.countryAliases?.[record.country_en];
	if (!alias) return record;
	return {
		...record,
		country: alias.country,
		country_en: alias.country_en,
		region: alias.regionSuffix ? [record.region, alias.regionSuffix].filter(Boolean).join(" / ") : record.region
	};
};
var homeVisibleCategories = new Set([
	"destination",
	"dayTrip",
	"region"
]);
var classifyRecord = (record) => {
	if (record.travelCategory) return record.travelCategory;
	if (regionMatchers.some((matcher) => record.country_en === matcher || record.region?.includes(matcher))) return "region";
	if (hiddenCountries.has(record.country_en)) return originCountries.has(record.country_en) ? "origin" : "transit";
	if (record.type === "daytrip") return "dayTrip";
	return "destination";
};
var withDisplayCategory = (record) => {
	const travelCategory = classifyRecord(record);
	const journeyId = getJourneyId(record);
	return {
		...record,
		journeyId,
		travelCategory,
		hiddenFromHome: typeof record.hiddenFromHome === "boolean" ? record.hiddenFromHome : !homeVisibleCategories.has(travelCategory)
	};
};
function getJourneyId(record) {
	if (record.journeyId) return record.journeyId;
	const title = record.trip_title ?? "";
	const matchedRule = display.journeyRules?.find((rule) => rule.includes.some((keyword) => title.includes(keyword)));
	if (matchedRule) return matchedRule.id;
	return slugify(title || `${record.country_en}-${record.year ?? "unknown"}`);
}
var slugify = (value) => value.toLowerCase().normalize("NFKC").trim().replace(/[^\p{Letter}\p{Number}]+/gu, "-").replace(/^-|-$/g, "");
var countryKeyForRecord = (record) => slugify(record.country_en || record.country || "unknown-country");
var cityKeyForRecord = (record) => `${countryKeyForRecord(record)}__${slugify(record.city_en || record.city || record.id)}`;
var allRecords = exportData.records.filter((record) => record.status !== "planned").map(normalizeRecordCountry).map(withDisplayCategory);
var hiddenEditorCountryIds = new Set(travelAtlasEditorState.hiddenCountryIds);
var hiddenEditorCityIds = new Set(travelAtlasEditorState.hiddenCityIds);
var records = allRecords.filter((record) => !record.hiddenFromHome && !hiddenEditorCountryIds.has(countryKeyForRecord(record)) && !hiddenEditorCityIds.has(cityKeyForRecord(record)));
var formatDateRange = (items) => {
	const dates = items.flatMap((item) => [item.start_date, item.end_date]).filter((date) => Boolean(date)).sort();
	if (dates.length === 0) return "Date unknown";
	const first = dates[0] ?? "Date unknown";
	const last = dates[dates.length - 1] ?? first;
	return first === last ? first : `${first} - ${last}`;
};
var unique = (items) => [...new Set(items)];
var hasCoordinates = (item) => typeof item.lat === "number" && typeof item.lng === "number";
var coordinateForRecord = (record) => {
	if (hasCoordinates(record)) return {
		lat: record.lat,
		lng: record.lng,
		approximate: false
	};
	return getCityCoordinate(record.city_en || record.city) ?? getCityCoordinate(record.city) ?? getCountryCoordinate(record.country_en || record.country);
};
var countryAccent = (index) => {
	const accents = [
		"#66c7a8",
		"#f28b82",
		"#7dd3fc",
		"#8ecae6",
		"#c77dff",
		"#ffb703",
		"#b8c0ff",
		"#80ed99",
		"#57cc99",
		"#48cae4",
		"#e9c46a",
		"#d8b26e",
		"#f0d7a3",
		"#f07f5f",
		"#76a9d8",
		"#a7c957",
		"#90dbf4",
		"#ffafcc",
		"#bde0fe"
	];
	return accents[index % accents.length];
};
var flagEmojiForCode = (code) => code?.length === 2 ? [...code.toUpperCase()].map((character) => String.fromCodePoint(127397 + character.charCodeAt(0))).join("") : void 0;
var recordsByCountry = records.reduce((acc, record) => {
	const countryId = countryKeyForRecord(record);
	acc[countryId] = [...acc[countryId] ?? [], record];
	return acc;
}, {});
var recordsByCity = records.reduce((acc, record) => {
	const cityId = cityKeyForRecord(record);
	acc[cityId] = [...acc[cityId] ?? [], record];
	return acc;
}, {});
var travelAtlasMeta = {
	schemaVersion: exportData.schema_version,
	generatedAt: exportData.generated_at,
	privacyLevel: exportData.privacy_level,
	intendedUse: exportData.intended_use,
	totalRecords: records.length,
	importedRecords: allRecords.length,
	hiddenHomeRecords: allRecords.length - records.length,
	recordsWithCoordinates: records.filter((record) => Boolean(coordinateForRecord(record))).length,
	recordsMissingCoordinates: records.filter((record) => !coordinateForRecord(record)).length
};
allRecords.filter((record) => record.hiddenFromHome);
var recordCountries = Object.entries(recordsByCountry).map(([countryId, countryRecords], index) => {
	const first = countryRecords[0];
	const countryCoordinate = getCountryCoordinate(first.country_en || first.country);
	const coordinateRecords = countryRecords.map(coordinateForRecord).filter((coordinate) => Boolean(coordinate));
	const centerLat = countryCoordinate?.lat ?? (coordinateRecords.length > 0 ? coordinateRecords.reduce((sum, coordinate) => sum + coordinate.lat, 0) / coordinateRecords.length : null);
	const centerLng = countryCoordinate?.lng ?? (coordinateRecords.length > 0 ? coordinateRecords.reduce((sum, coordinate) => sum + coordinate.lng, 0) / coordinateRecords.length : null);
	const cityIds = unique(countryRecords.map(cityKeyForRecord));
	const cityNames = unique(countryRecords.map((record) => record.city_en || record.city)).filter(Boolean);
	const tripTitles = unique(countryRecords.map((record) => record.trip_title).filter((title) => Boolean(title)));
	const flagCode = first.country_code?.toLowerCase() ?? display.countryCodes?.[first.country_en || first.country]?.toLowerCase();
	return {
		id: countryId,
		nameZh: first.country,
		nameEn: first.country_en || first.country,
		centerLat,
		centerLng,
		visitedDateRange: formatDateRange(countryRecords),
		summary: `${cityNames.length} visited cities collected from Archive export.`,
		memory: tripTitles.length > 0 ? tripTitles.slice(0, 3).join(" / ") : "Travel memory imported from Archive export.",
		keywords: unique(countryRecords.map((record) => record.region).filter((region) => Boolean(region))).slice(0, 3),
		cityIds: orderBySavedIds(cityIds.map((id) => ({ id })), travelAtlasEditorState.cityOrderByCountry[countryId]).map(({ id }) => id),
		accent: countryAccent(index),
		flag: flagEmojiForCode(flagCode),
		flagCode,
		missingCoordinates: centerLat === null || centerLng === null,
		records: countryRecords
	};
});
var recordCountryIds = new Set(recordCountries.map((country) => country.id));
var standaloneCountries = travelAtlasEditorState.addedCountries.filter((country) => !recordCountryIds.has(country.id) && !hiddenEditorCountryIds.has(country.id)).map((country, index) => ({
	id: country.id,
	nameZh: country.nameZh,
	nameEn: country.nameEn,
	centerLat: country.centerLat,
	centerLng: country.centerLng,
	visitedDateRange: country.visitedDate ?? "Date unknown",
	summary: "Country added locally. Add the first city from City Cards when ready.",
	memory: "Awaiting the first city record.",
	keywords: country.region ? [country.region] : [],
	cityIds: [],
	accent: countryAccent(recordCountries.length + index),
	flag: flagEmojiForCode(country.countryCode),
	flagCode: country.countryCode.toLowerCase(),
	missingCoordinates: false,
	records: []
}));
var countries = orderBySavedIds([...recordCountries, ...standaloneCountries], travelAtlasEditorState.countryOrder);
var cities = Object.entries(recordsByCity).map(([cityId, cityRecords]) => {
	const first = cityRecords[0];
	const coordinate = cityRecords.map(coordinateForRecord).find(Boolean);
	const tripTitles = unique(cityRecords.map((record) => record.trip_title).filter((title) => Boolean(title)));
	const dateRange = formatDateRange(cityRecords);
	return {
		id: cityId,
		nameZh: first.city,
		nameEn: first.city_en || first.city,
		countryId: countryKeyForRecord(first),
		lat: coordinate?.lat ?? null,
		lng: coordinate?.lng ?? null,
		visitedDateRange: dateRange,
		summary: tripTitles.length > 0 ? tripTitles.slice(0, 2).join(" / ") : `Visited on ${dateRange}.`,
		memory: first.notes || void 0,
		keywords: unique(cityRecords.map((record) => record.region).filter((region) => Boolean(region))).slice(0, 3),
		missingCoordinates: !coordinate,
		records: cityRecords
	};
});
var journeyDays = records.map((record) => ({
	id: record.id,
	date: record.start_date,
	countryId: countryKeyForRecord(record),
	cityId: cityKeyForRecord(record),
	title: record.trip_title || `${record.city_en || record.city} visit`,
	journeyId: record.journeyId,
	summary: record.end_date && record.end_date !== record.start_date ? `${record.city_en || record.city}, ${record.start_date} - ${record.end_date}` : `${record.city_en || record.city}, ${record.start_date}`,
	isHighlight: Boolean(record.notes)
}));
var recordsByJourney = records.reduce((acc, record) => {
	const journeyId = record.journeyId ?? "unknown-journey";
	acc[journeyId] = [...acc[journeyId] ?? [], record];
	return acc;
}, {});
var routes = Object.entries(recordsByJourney).flatMap(([journeyId, journeyRecords]) => {
	const ordered = [...journeyRecords].sort((a, b) => `${a.start_date}-${a.id}`.localeCompare(`${b.start_date}-${b.id}`));
	return ordered.slice(1).flatMap((record, index) => {
		const previous = ordered[index];
		const fromCityId = cityKeyForRecord(previous);
		const toCityId = cityKeyForRecord(record);
		if (fromCityId === toCityId) return [];
		return [{
			id: `${journeyId}__${previous.id}__${record.id}`,
			fromCityId,
			toCityId,
			journeyId,
			type: previous.country_en === record.country_en ? "main" : "flight"
		}];
	});
});
var countryById = countries.reduce((acc, country) => {
	acc[country.id] = country;
	return acc;
}, {});
var cityById = cities.reduce((acc, city) => {
	acc[city.id] = city;
	return acc;
}, {});
var getCitiesForCountry = (countryId) => countryById[countryId]?.cityIds.map((cityId) => cityById[cityId]).filter(Boolean) ?? [];
var shouldHideCityFromNavigation = (city) => hiddenCityNames.has(city.nameEn ?? "") || hiddenCityNames.has(city.nameZh ?? "");
cities.filter((city) => city.missingCoordinates);
//#endregion
//#region src/data/meteorShower.ts
/**
* 流星雨触发信号：按钮写入请求，星空更新循环每帧消费。
* 模块级单例，跨组件（MeteorShowerButton ↔ CesiumConstellationSky）零耦合。
*/
var pendingShower = false;
/** 由流星雨按钮调用 */
var requestMeteorShower = () => {
	pendingShower = true;
};
/** 由星空更新循环调用：消费一次请求，返回是否需要开启流星雨窗口 */
var consumeMeteorShower = () => {
	if (!pendingShower) return false;
	pendingShower = false;
	return true;
};
//#endregion
//#region src/components/CesiumConstellationSky.tsx
var celestialHeight = 8e7;
var idleRotationRadiansPerSecond = Cesium.Math.toRadians(.32);
var moonDistanceFromCamera = 7e7;
var moonRadius = 1737400;
var earthOcclusionPadding = 48e3;
var moonVerticalOffset = .18;
var galaxyLatitudeShift = -7;
var auroraDistanceFromCamera = 77e6;
var auroraDriftRadiansPerSecond = .42;
var auroraBankCount = 6;
var meteorDistanceFromCamera = 9e6;
var meteorTrailSegmentCount = 9;
var constellationDefinitions = [
	{
		name: "Aries",
		longitude: -165,
		latitude: 6,
		rotation: -8,
		scale: .9,
		tone: "cyan",
		points: [
			[-4, 1],
			[-2.2, 0],
			[0, .4],
			[2.2, 1.6],
			[4, .8]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4]
		],
		brightStars: [0, 2]
	},
	{
		name: "Taurus",
		longitude: -135,
		latitude: 13,
		rotation: 10,
		scale: .84,
		tone: "violet",
		points: [
			[-5, 3.6],
			[-2.4, 1.4],
			[0, -1],
			[2.4, 1.4],
			[5, 3.6],
			[-1.2, .2],
			[1.2, .2]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[1, 5],
			[5, 6],
			[6, 3]
		],
		brightStars: [1, 3]
	},
	{
		name: "Gemini",
		longitude: -105,
		latitude: 18,
		rotation: -4,
		scale: .82,
		tone: "cyan",
		points: [
			[-2.8, 4],
			[2.8, 4],
			[-2.4, 2],
			[2.2, 2],
			[-2, 0],
			[2, 0],
			[-3, -2.8],
			[-.8, -2.8],
			[.8, -2.8],
			[3.2, -2.8]
		],
		edges: [
			[0, 1],
			[0, 2],
			[2, 4],
			[4, 6],
			[4, 7],
			[1, 3],
			[3, 5],
			[5, 8],
			[5, 9],
			[2, 3]
		],
		brightStars: [0, 1]
	},
	{
		name: "Cancer",
		longitude: -75,
		latitude: 19,
		rotation: 12,
		scale: .9,
		tone: "violet",
		points: [
			[0, 0],
			[-3.8, 2.8],
			[-1.8, 1.2],
			[2.2, 2.6],
			[1.6, -2],
			[3.8, -3.6]
		],
		edges: [
			[0, 2],
			[2, 1],
			[0, 3],
			[0, 4],
			[4, 5]
		],
		brightStars: [0, 4]
	},
	{
		name: "Leo",
		longitude: -45,
		latitude: 13,
		rotation: -10,
		scale: .86,
		tone: "cyan",
		points: [
			[-4.5, -1.6],
			[-4, 1],
			[-2.8, 3],
			[-1.2, 3.8],
			[-.2, 2.2],
			[-1.4, .4],
			[1.5, -1],
			[4.5, -2.4],
			[3.2, 1.3]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 0],
			[0, 6],
			[6, 7],
			[7, 8],
			[8, 6]
		],
		brightStars: [0, 7]
	},
	{
		name: "Virgo",
		longitude: -15,
		latitude: 4,
		rotation: 5,
		scale: .86,
		tone: "violet",
		points: [
			[-4.8, 2],
			[-2.4, 1.1],
			[0, 0],
			[2.4, 1.8],
			[4.8, 3],
			[1.5, -1.8],
			[2.6, -4],
			[-1.8, -1.8],
			[-3.5, -3.2]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[2, 5],
			[5, 6],
			[2, 7],
			[7, 8]
		],
		brightStars: [2, 6]
	},
	{
		name: "Libra",
		longitude: 15,
		latitude: -6,
		rotation: -6,
		scale: .94,
		tone: "cyan",
		points: [
			[-3.8, 1.8],
			[0, 3],
			[3.8, 1.8],
			[2.5, -2.2],
			[-2.5, -2.2],
			[0, -3.8]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 0],
			[3, 5],
			[4, 5]
		],
		brightStars: [0, 2]
	},
	{
		name: "Scorpio",
		longitude: 45,
		latitude: -15,
		rotation: -18,
		scale: .82,
		tone: "violet",
		points: [
			[-4.8, 3],
			[-3.4, 1.8],
			[-2, 2.7],
			[-1.2, .8],
			[0, -.8],
			[1.6, -2.2],
			[3.4, -2.8],
			[4.6, -1.8],
			[4, -.2],
			[2.8, .4]
		],
		edges: [
			[0, 1],
			[1, 2],
			[1, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9]
		],
		brightStars: [3, 6]
	},
	{
		name: "Sagittarius",
		longitude: 75,
		latitude: -20,
		rotation: 8,
		scale: .86,
		tone: "cyan",
		points: [
			[-4, 2.2],
			[-1.8, 3],
			[0, 1.2],
			[2.5, 2.8],
			[4.2, 1],
			[2.4, -1.8],
			[-1.6, -2.4],
			[-4.3, -.8]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 0],
			[2, 5],
			[2, 6]
		],
		brightStars: [1, 5]
	},
	{
		name: "Capricorn",
		longitude: 105,
		latitude: -18,
		rotation: -4,
		scale: .9,
		tone: "violet",
		points: [
			[-5, 1.8],
			[-2.8, 2.8],
			[0, 1],
			[3.2, 2.3],
			[5, 1],
			[2.4, -2.6],
			[-1.8, -3]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 0],
			[2, 6]
		],
		brightStars: [0, 4]
	},
	{
		name: "Aquarius",
		longitude: 135,
		latitude: -10,
		rotation: 8,
		scale: .86,
		tone: "cyan",
		points: [
			[-4.8, 2.8],
			[-3, 1.2],
			[-1.2, 2.2],
			[.6, .6],
			[2.4, 1.6],
			[4.4, 0],
			[2.8, -1.6],
			[1.2, -3.2],
			[3.6, -3.8]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
			[5, 6],
			[6, 7],
			[7, 8]
		],
		brightStars: [1, 5]
	},
	{
		name: "Pisces",
		longitude: 165,
		latitude: 0,
		rotation: -8,
		scale: .72,
		tone: "violet",
		points: [
			[-6, 2],
			[-4.8, 3.5],
			[-3, 3],
			[-2.4, 1.2],
			[-4.2, .4],
			[-1, 0],
			[1.2, -1],
			[3.2, -2.8],
			[5, -2.2],
			[6, -.4],
			[4.8, 1],
			[3, .3]
		],
		edges: [
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 0],
			[3, 5],
			[5, 6],
			[6, 7],
			[7, 8],
			[8, 9],
			[9, 10],
			[10, 11],
			[11, 7]
		],
		brightStars: [1, 7]
	}
];
var rotateOffset = ([longitude, latitude], rotation) => {
	const angle = Cesium.Math.toRadians(rotation);
	return {
		longitude: longitude * Math.cos(angle) - latitude * Math.sin(angle),
		latitude: longitude * Math.sin(angle) + latitude * Math.cos(angle)
	};
};
var constellationInstances = constellationDefinitions.map((definition) => ({
	definition,
	stars: definition.points.map((offset, starIndex) => {
		const rotatedOffset = rotateOffset(offset, definition.rotation);
		const isBrightStar = definition.brightStars.includes(starIndex);
		return {
			longitude: definition.longitude + rotatedOffset.longitude * definition.scale,
			latitude: definition.latitude + rotatedOffset.latitude * definition.scale,
			opacity: isBrightStar ? .98 : .74 + starIndex % 3 * .08,
			pixelSize: isBrightStar ? 5.6 : 3.5 + starIndex % 3 * .48,
			tone: isBrightStar || starIndex % 4 === 0 ? definition.tone : void 0
		};
	})
}));
var constellationStars = constellationInstances.flatMap(({ stars }) => stars);
var createSeededRandom = (initialSeed) => {
	let seed = initialSeed >>> 0;
	return () => {
		seed += 1831565813;
		let value = seed;
		value = Math.imul(value ^ value >>> 15, value | 1);
		value ^= value + Math.imul(value ^ value >>> 7, value | 61);
		return ((value ^ value >>> 14) >>> 0) / 4294967296;
	};
};
var random = createSeededRandom(7999909);
var gaussianSpread = () => random() + random() + random() + random() + random() + random() - 3;
var starTone = () => {
	const roll = random();
	if (roll < .035) return "violet";
	if (roll < .12) return "cyan";
};
var ambientAppearance = (layer) => {
	const brightness = Math.pow(random(), layer === "base" ? 4 : 2.6);
	const sizeFloor = layer === "base" ? 1.85 : layer === "band" ? 2.05 : 2.25;
	return {
		opacity: (layer === "base" ? .34 : layer === "band" ? .45 : .52) + brightness * .46,
		pixelSize: sizeFloor + brightness * 2.7,
		tone: starTone()
	};
};
var voids = [{
	longitude: -48,
	latitude: 37,
	longitudeRadius: 30,
	latitudeRadius: 20
}, {
	longitude: 126,
	latitude: -34,
	longitudeRadius: 26,
	latitudeRadius: 18
}];
var baseStarCount = 1600;
var galaxyBandStarCount = 2800;
var starsPerCluster = 100;
var isInsideVoid = (longitude, latitude) => voids.some((voidArea) => {
	const longitudeDistance = (longitude - voidArea.longitude) / voidArea.longitudeRadius;
	const latitudeDistance = (latitude - voidArea.latitude) / voidArea.latitudeRadius;
	return longitudeDistance * longitudeDistance + latitudeDistance * latitudeDistance < 1;
});
var baseStars = [];
while (baseStars.length < baseStarCount) {
	const longitude = random() * 360 - 180;
	const latitude = Cesium.Math.toDegrees(Math.asin(random() * 1.9 - .95));
	if (isInsideVoid(longitude, latitude) && random() < .82) continue;
	baseStars.push({
		longitude,
		latitude,
		...ambientAppearance("base")
	});
}
var galaxyBandStars = Array.from({ length: galaxyBandStarCount }, (_, index) => {
	const longitude = random() * 360 - 180;
	const bandLatitude = 20 * Math.sin(Cesium.Math.toRadians(longitude + 22));
	const spread = index < galaxyBandStarCount * .76 ? 7.5 : 16;
	return {
		longitude,
		latitude: Math.max(-78, Math.min(78, bandLatitude + gaussianSpread() * spread)),
		...ambientAppearance("band")
	};
});
var clusterStars = [
	{
		longitude: -132,
		latitude: 34
	},
	{
		longitude: -18,
		latitude: -24
	},
	{
		longitude: 72,
		latitude: 27
	},
	{
		longitude: 154,
		latitude: -8
	}
].flatMap((center) => Array.from({ length: starsPerCluster }, () => ({
	longitude: center.longitude + gaussianSpread() * 7,
	latitude: center.latitude + gaussianSpread() * 5,
	...ambientAppearance("cluster")
})));
var ambientStars = [
	...baseStars,
	...galaxyBandStars,
	...clusterStars
];
var stars = [...constellationStars, ...ambientStars];
var createGalaxyGlowPath = (latitudeOffset, phaseOffset) => Array.from({ length: 181 }, (_, index) => {
	const longitude = -180 + index * 2;
	const latitude = latitudeOffset + galaxyLatitudeShift + 13 * Math.sin(Cesium.Math.toRadians(longitude + phaseOffset)) + 3.5 * Math.sin(Cesium.Math.toRadians(longitude * 2 - 18));
	return Cesium.Cartesian3.fromDegrees(longitude, latitude, celestialHeight - 15e5);
});
var galaxyGlowLayers = [
	{
		color: Cesium.Color.fromCssColorString("#34d399").withAlpha(.064),
		latitudeOffset: 2,
		phaseOffset: 28,
		width: 244
	},
	{
		color: Cesium.Color.fromCssColorString("#67e8f9").withAlpha(.052),
		latitudeOffset: 4,
		phaseOffset: 32,
		width: 152
	},
	{
		color: Cesium.Color.fromCssColorString("#c4b5fd").withAlpha(.04),
		latitudeOffset: 6,
		phaseOffset: 36,
		width: 72
	}
];
var createGalaxyGlowMaterial = (color, layerIndex) => new Cesium.Material({ fabric: {
	source: `
      uniform vec4 color;
      czm_material czm_getMaterial(czm_materialInput materialInput)
      {
        czm_material material = czm_getDefaultMaterial(materialInput);
        float feather = sin(clamp(materialInput.st.t, 0.0, 1.0) * czm_pi);
        feather = pow(feather, 1.7);
        material.diffuse = color.rgb;
        material.emission = color.rgb * 0.72;
        material.alpha = color.a * feather;
        return material;
      }
    `,
	type: `TravelAtlasGalaxyGlow${layerIndex}`,
	uniforms: { color }
} });
var createAuroraGlowMaterial = (color, layerIndex) => new Cesium.Material({ fabric: {
	source: `
      uniform vec4 color;
      uniform float phase;
      czm_material czm_getMaterial(czm_materialInput materialInput)
      {
        czm_material material = czm_getDefaultMaterial(materialInput);
        float across = sin(clamp(materialInput.st.t, 0.0, 1.0) * czm_pi);
        float edgeFeather = pow(max(across, 0.0), 1.45);
        float along = clamp(materialInput.st.s, 0.0, 1.0);
        float endFeather = smoothstep(0.0, 0.24, along)
          * smoothstep(0.0, 0.24, 1.0 - along);
        float folds = 0.5 + 0.5 * sin(along * 54.0 + phase);
        folds = 0.54 + 0.46 * pow(folds, 3.0);
        float breathing = 0.86 + 0.14 * sin(along * 11.0 - phase * 0.38);
        material.diffuse = color.rgb;
        material.emission = color.rgb * (0.54 + folds * 0.72);
        material.alpha = color.a * edgeFeather * endFeather * folds * breathing;
        return material;
      }
    `,
	type: `TravelAtlasAuroraGlow${layerIndex}`,
	uniforms: {
		color,
		phase: 0
	}
} });
var starPosition = ({ longitude, latitude }) => Cesium.Cartesian3.fromDegrees(longitude, latitude, celestialHeight);
var starColor = (star) => {
	const color = star.tone === "violet" ? "#a5b4fc" : star.tone === "cyan" ? "#67e8f9" : "#e0f2fe";
	return Cesium.Color.fromCssColorString(color).withAlpha(star.opacity);
};
function CesiumConstellationSky({ occludeMoonWithEarth = true, overviewHeight, overviewLat, overviewLng, show }) {
	const { viewer } = U$1();
	const occludeMoonWithEarthRef = (0, import_react.useRef)(occludeMoonWithEarth);
	(0, import_react.useEffect)(() => {
		occludeMoonWithEarthRef.current = occludeMoonWithEarth;
	}, [occludeMoonWithEarth]);
	(0, import_react.useEffect)(() => {
		if (!viewer || !show) return void 0;
		const pointCollection = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection({ blendOption: Cesium.BlendOption.TRANSLUCENT }));
		const galaxyGlowCollection = viewer.scene.primitives.add(new Cesium.PolylineCollection());
		const auroraGlowCollection = viewer.scene.primitives.add(new Cesium.PolylineCollection());
		const lineCollection = viewer.scene.primitives.add(new Cesium.PolylineCollection());
		const meteorPointCollection = viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection({ blendOption: Cesium.BlendOption.TRANSLUCENT }));
		const meteorTrailCollection = viewer.scene.primitives.add(new Cesium.PolylineCollection());
		galaxyGlowLayers.forEach((layer, layerIndex) => {
			galaxyGlowCollection.add({
				material: createGalaxyGlowMaterial(layer.color, layerIndex),
				positions: createGalaxyGlowPath(layer.latitudeOffset, layer.phaseOffset),
				width: layer.width
			});
		});
		stars.forEach((star) => {
			pointCollection.add({
				color: starColor(star),
				disableDepthTestDistance: 0,
				outlineColor: Cesium.Color.fromCssColorString("#7dd3fc").withAlpha(star.opacity * .18),
				outlineWidth: 1.5,
				pixelSize: star.pixelSize,
				position: starPosition(star)
			});
		});
		constellationInstances.forEach(({ definition, stars: constellation }) => {
			const lineColor = definition.tone === "violet" ? "#a5b4fc" : "#67e8f9";
			definition.edges.forEach(([startIndex, endIndex]) => {
				lineCollection.add({
					material: Cesium.Material.fromType("Color", { color: Cesium.Color.fromCssColorString(lineColor).withAlpha(.28) }),
					positions: [starPosition(constellation[startIndex]), starPosition(constellation[endIndex])],
					width: .95
				});
			});
		});
		const meteorSlots = Array.from({ length: 34 }, () => {
			const trailMaterials = Array.from({ length: meteorTrailSegmentCount }, (_, segmentIndex) => Cesium.Material.fromType("Color", { color: Cesium.Color.fromCssColorString(segmentIndex > 5 ? "#f0f9ff" : "#67e8f9").withAlpha(0) }));
			return {
				active: false,
				duration: 1.8,
				end: new Cesium.Cartesian3(),
				headCore: meteorPointCollection.add({
					color: Cesium.Color.WHITE.withAlpha(0),
					disableDepthTestDistance: 0,
					outlineColor: Cesium.Color.fromCssColorString("#a5f3fc").withAlpha(0),
					outlineWidth: 1.5,
					pixelSize: 4.6,
					position: Cesium.Cartesian3.ZERO,
					show: false
				}),
				headGlow: meteorPointCollection.add({
					color: Cesium.Color.fromCssColorString("#67e8f9").withAlpha(0),
					disableDepthTestDistance: 0,
					outlineColor: Cesium.Color.fromCssColorString("#e0f2fe").withAlpha(0),
					outlineWidth: 2,
					pixelSize: 11,
					position: Cesium.Cartesian3.ZERO,
					show: false
				}),
				startedAt: 0,
				start: new Cesium.Cartesian3(),
				tailLength: .12,
				trailMaterials,
				trailSegments: trailMaterials.map((material, segmentIndex) => meteorTrailCollection.add({
					material,
					positions: [new Cesium.Cartesian3(), new Cesium.Cartesian3()],
					show: false,
					width: .7 + (segmentIndex + 1) / meteorTrailSegmentCount * 2.1
				}))
			};
		});
		const rotation = new Cesium.Matrix3();
		const modelMatrix = new Cesium.Matrix4();
		const moonModelMatrix = new Cesium.Matrix4();
		const earthCenterEC = new Cesium.Cartesian3();
		const earthDirectionEC = new Cesium.Cartesian3(0, 0, -1);
		let moonBaseModelMatrix;
		let moonMaterial;
		let moonPrimitive;
		const auroraMaterials = [];
		const startTime = performance.now();
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let meteorSeed = 29425646;
		const meteorRandom = () => {
			meteorSeed = meteorSeed * 1664525 + 1013904223 >>> 0;
			return meteorSeed / 4294967296;
		};
		const meteorTracks = [
			{
				down: .82,
				right: .3,
				startRight: -.56,
				startUp: .75
			},
			{
				down: 1,
				right: .36,
				startRight: -.32,
				startUp: .82
			},
			{
				down: .84,
				right: .3,
				startRight: -.05,
				startUp: .7
			},
			{
				down: .95,
				right: .28,
				startRight: .18,
				startUp: .78
			},
			{
				down: .78,
				right: .24,
				startRight: .38,
				startUp: .62
			},
			{
				down: .9,
				right: .32,
				startRight: -.68,
				startUp: .88
			},
			{
				down: .86,
				right: .26,
				startRight: -.6,
				startUp: .52
			},
			{
				down: .98,
				right: .34,
				startRight: .02,
				startUp: .92
			},
			{
				down: .8,
				right: .28,
				startRight: .52,
				startUp: .72
			},
			{
				down: .92,
				right: .3,
				startRight: .58,
				startUp: .58
			},
			{
				down: .88,
				right: .31,
				startRight: -.74,
				startUp: .64
			},
			{
				down: .94,
				right: .27,
				startRight: -.42,
				startUp: .96
			},
			{
				down: .76,
				right: .3,
				startRight: .34,
				startUp: .86
			},
			{
				down: .9,
				right: .29,
				startRight: .7,
				startUp: .66
			},
			{
				down: .96,
				right: .33,
				startRight: -.82,
				startUp: .8
			},
			{
				down: .82,
				right: .28,
				startRight: .62,
				startUp: .5
			},
			{
				down: .84,
				right: .3,
				startRight: -.9,
				startUp: .42
			},
			{
				down: .9,
				right: .32,
				startRight: -.14,
				startUp: 1
			},
			{
				down: .78,
				right: .26,
				startRight: .8,
				startUp: .78
			},
			{
				down: .86,
				right: .29,
				startRight: .46,
				startUp: .4
			},
			{
				down: .92,
				right: .31,
				startRight: -.98,
				startUp: .7
			},
			{
				down: .8,
				right: .27,
				startRight: -.26,
				startUp: .34
			},
			{
				down: .88,
				right: .33,
				startRight: .9,
				startUp: .9
			},
			{
				down: .76,
				right: .28,
				startRight: .28,
				startUp: .26
			}
		];
		let previousMeteorTrack = -1;
		let nextMeteorAt = reduceMotion ? Number.POSITIVE_INFINITY : 1.8 + meteorRandom() * 1.6;
		let showerActive = false;
		let showerEndAt = 0;
		let nextShowerSpawnAt = 0;
		const cameraRelativeDirection = (rightOffset, upOffset) => Cesium.Cartesian3.normalize(Cesium.Cartesian3.add(viewer.camera.directionWC, Cesium.Cartesian3.add(Cesium.Cartesian3.multiplyByScalar(viewer.camera.rightWC, rightOffset, new Cesium.Cartesian3()), Cesium.Cartesian3.multiplyByScalar(viewer.camera.upWC, upOffset, new Cesium.Cartesian3()), new Cesium.Cartesian3()), new Cesium.Cartesian3()), new Cesium.Cartesian3());
		const placeCelestialBodies = () => {
			if (viewer.isDestroyed()) return;
			const camera = viewer.camera;
			const overviewCameraPosition = Cesium.Cartesian3.fromDegrees(overviewLng, overviewLat, overviewHeight);
			const overviewDirection = Cesium.Cartesian3.normalize(Cesium.Cartesian3.negate(overviewCameraPosition, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const overviewRight = Cesium.Cartesian3.normalize(Cesium.Cartesian3.cross(overviewDirection, Cesium.Cartesian3.UNIT_Z, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const overviewUp = Cesium.Cartesian3.normalize(Cesium.Cartesian3.cross(overviewRight, overviewDirection, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const moonDirection = Cesium.Cartesian3.normalize(Cesium.Cartesian3.add(overviewDirection, Cesium.Cartesian3.add(Cesium.Cartesian3.multiplyByScalar(overviewRight, .28, new Cesium.Cartesian3()), Cesium.Cartesian3.multiplyByScalar(overviewUp, moonVerticalOffset, new Cesium.Cartesian3()), new Cesium.Cartesian3()), new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const moonPosition = Cesium.Cartesian3.add(overviewCameraPosition, Cesium.Cartesian3.multiplyByScalar(moonDirection, moonDistanceFromCamera, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const createAuroraPath = (rightStart, rightEnd, upBase, wavePhase, waveStrength, tilt) => Array.from({ length: 72 }, (_, index) => {
				const progress = index / 71;
				const direction = cameraRelativeDirection(rightStart + (rightEnd - rightStart) * progress, upBase + (progress - .5) * tilt + Math.sin(progress * Math.PI * 2.2 + wavePhase) * waveStrength + Math.sin(progress * Math.PI * 5.4 - wavePhase * .7) * waveStrength * .28);
				return Cesium.Cartesian3.add(camera.positionWC, Cesium.Cartesian3.multiplyByScalar(direction, auroraDistanceFromCamera, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			});
			const auroraLayerDefinitions = [
				{
					color: Cesium.Color.fromCssColorString("#34d399").withAlpha(.055),
					rightEnd: 1,
					rightStart: -1.04,
					tilt: .12,
					upBase: .09,
					wavePhase: .08,
					waveStrength: .07,
					width: 140
				},
				{
					color: Cesium.Color.fromCssColorString("#22d3ee").withAlpha(.082),
					rightEnd: 1.02,
					rightStart: -.98,
					tilt: -.1,
					upBase: .155,
					wavePhase: .46,
					waveStrength: .065,
					width: 44
				},
				{
					color: Cesium.Color.fromCssColorString("#34d399").withAlpha(.068),
					rightEnd: .98,
					rightStart: -1,
					tilt: .08,
					upBase: .22,
					wavePhase: .84,
					waveStrength: .052,
					width: 96
				},
				{
					color: Cesium.Color.fromCssColorString("#a78bfa").withAlpha(.042),
					rightEnd: .96,
					rightStart: -1.02,
					tilt: .11,
					upBase: .325,
					wavePhase: 1.72,
					waveStrength: .05,
					width: 72
				},
				{
					color: Cesium.Color.fromCssColorString("#5eead4").withAlpha(.05),
					rightEnd: 1.06,
					rightStart: -.94,
					tilt: -.08,
					upBase: .365,
					wavePhase: 2.18,
					waveStrength: .065,
					width: 50
				}
			];
			Array.from({ length: auroraBankCount }, (_, bankIndex) => {
				const bankAngle = bankIndex * Cesium.Math.TWO_PI / auroraBankCount;
				const bankRotation = Cesium.Matrix3.fromRotationZ(bankAngle, new Cesium.Matrix3());
				const bankPhaseOffset = bankIndex * .53;
				const bankHeightOffset = (bankIndex % 3 - 1) * .012;
				const bankWaveScale = .94 + bankIndex % 3 * .05;
				auroraLayerDefinitions.forEach((layer, layerIndex) => {
					const sourcePath = createAuroraPath(layer.rightStart, layer.rightEnd, layer.upBase + bankHeightOffset, layer.wavePhase + bankPhaseOffset, layer.waveStrength * bankWaveScale, layer.tilt * (bankIndex % 2 === 0 ? 1 : -1));
					const materialIndex = bankIndex * auroraLayerDefinitions.length + layerIndex;
					const material = createAuroraGlowMaterial(layer.color, materialIndex);
					auroraMaterials.push(material);
					auroraGlowCollection.add({
						material,
						positions: sourcePath.map((position) => Cesium.Matrix3.multiplyByVector(bankRotation, position, new Cesium.Cartesian3())),
						width: layer.width
					});
				});
			});
			moonBaseModelMatrix = Cesium.Matrix4.fromTranslation(moonPosition, new Cesium.Matrix4());
			moonMaterial = new Cesium.Material({ fabric: {
				source: `
            uniform sampler2D image;
            uniform vec3 earthDirectionEC;
            uniform float earthCosineLimit;
            uniform float lambertDiffuseMultiplier;
            uniform float shadowDarkness;
            czm_material czm_getMaterial(czm_materialInput materialInput)
            {
              vec3 fragmentDirectionEC = normalize(-materialInput.positionToEyeEC);
              if (dot(fragmentDirectionEC, earthDirectionEC) > earthCosineLimit) {
                discard;
              }
              czm_material material = czm_getDefaultMaterial(materialInput);
              vec4 surface = texture(image, materialInput.st);
              vec3 surfaceNormalEC = normalize(materialInput.normalEC);
              float diffuseIntensity = clamp(
                czm_getLambertDiffuse(czm_lightDirectionEC, surfaceNormalEC)
                  * lambertDiffuseMultiplier + shadowDarkness,
                0.0,
                1.0
              );
              material.diffuse = surface.rgb * czm_lightColor * diffuseIntensity;
              material.emission = vec3(0.0);
              material.alpha = 1.0;
              return material;
            }
          `,
				type: "TravelAtlasMoonSurface",
				uniforms: {
					earthCosineLimit: 2,
					earthDirectionEC,
					image: Cesium.buildModuleUrl("Assets/Textures/moonSmall.jpg"),
					lambertDiffuseMultiplier: .9,
					shadowDarkness: .48
				}
			} });
			moonPrimitive = viewer.scene.primitives.add(new Cesium.Primitive({
				appearance: new Cesium.MaterialAppearance({
					closed: true,
					faceForward: false,
					flat: true,
					material: moonMaterial,
					translucent: false
				}),
				asynchronous: false,
				modelMatrix: Cesium.Matrix4.clone(moonBaseModelMatrix),
				geometryInstances: new Cesium.GeometryInstance({ geometry: new Cesium.EllipsoidGeometry({
					radii: new Cesium.Cartesian3(moonRadius, moonRadius, moonRadius),
					vertexFormat: Cesium.MaterialAppearance.MaterialSupport.TEXTURED.vertexFormat
				}) })
			}));
			viewer.scene.requestRender();
		};
		const celestialPlacementTimer = window.setTimeout(placeCelestialBodies, 360);
		const hideMeteor = (meteor) => {
			meteor.headGlow.show = false;
			meteor.headCore.show = false;
			meteor.trailSegments.forEach((segment) => {
				segment.show = false;
			});
		};
		const beginMeteor = (meteor, elapsedSeconds) => {
			const trackOffset = 1 + Math.floor(meteorRandom() * (meteorTracks.length - 1));
			const trackIndex = (previousMeteorTrack + trackOffset) % meteorTracks.length;
			const track = meteorTracks[trackIndex];
			const startRight = track.startRight + (meteorRandom() - .5) * .1;
			const startUp = track.startUp + (meteorRandom() - .5) * .12;
			const endRight = startRight + track.right + (meteorRandom() - .5) * .06;
			const endUp = startUp - track.down + (meteorRandom() - .5) * .1;
			const pathSpan = Math.hypot(endRight - startRight, endUp - startUp);
			const cameraPosition = viewer.camera.positionWC;
			const startDirection = cameraRelativeDirection(startRight, startUp);
			const endDirection = cameraRelativeDirection(endRight, endUp);
			meteor.start = Cesium.Cartesian3.add(cameraPosition, Cesium.Cartesian3.multiplyByScalar(startDirection, meteorDistanceFromCamera, new Cesium.Cartesian3()), meteor.start);
			meteor.end = Cesium.Cartesian3.add(cameraPosition, Cesium.Cartesian3.multiplyByScalar(endDirection, meteorDistanceFromCamera, new Cesium.Cartesian3()), meteor.end);
			const visualScale = .88 + meteorRandom() * .24;
			meteor.startedAt = elapsedSeconds;
			meteor.duration = Math.min(2.8, Math.max(1.55, pathSpan / (.43 + meteorRandom() * .05)));
			meteor.tailLength = Math.min(.27, Math.max(.12, .19 / pathSpan));
			meteor.headGlow.pixelSize = 11 * visualScale;
			meteor.headCore.pixelSize = 4.6 * visualScale;
			meteor.trailSegments.forEach((segment, segmentIndex) => {
				segment.width = (.85 + (segmentIndex + 1) / meteorTrailSegmentCount * 2.45) * visualScale;
			});
			meteor.active = true;
			previousMeteorTrack = trackIndex;
		};
		const smoothstep = (start, end, value) => {
			const progress = Math.min(1, Math.max(0, (value - start) / (end - start)));
			return progress * progress * (3 - 2 * progress);
		};
		const updateMeteor = (elapsedSeconds) => {
			if (reduceMotion) return;
			if (!showerActive && consumeMeteorShower()) {
				showerActive = true;
				showerEndAt = elapsedSeconds + 3;
				nextShowerSpawnAt = elapsedSeconds;
			}
			if (showerActive) if (elapsedSeconds >= showerEndAt) {
				showerActive = false;
				nextMeteorAt = elapsedSeconds + 1.8 + meteorRandom() * 1.6;
			} else while (elapsedSeconds >= nextShowerSpawnAt) {
				const showerMeteor = meteorSlots.find((meteor) => !meteor.active);
				if (!showerMeteor) {
					nextShowerSpawnAt = elapsedSeconds + .06;
					break;
				}
				beginMeteor(showerMeteor, elapsedSeconds);
				nextShowerSpawnAt = elapsedSeconds + .015 + meteorRandom() * .025;
			}
			else if (elapsedSeconds >= nextMeteorAt) {
				const availableMeteor = meteorSlots.find((meteor) => !meteor.active);
				if (availableMeteor) {
					beginMeteor(availableMeteor, elapsedSeconds);
					nextMeteorAt = elapsedSeconds + (meteorRandom() < .46 ? .55 + meteorRandom() * .75 : 1.8 + meteorRandom() * 3.2);
				} else nextMeteorAt = elapsedSeconds + .3;
			}
			meteorSlots.forEach((meteor) => {
				if (!meteor.active) return;
				const progress = (elapsedSeconds - meteor.startedAt) / meteor.duration;
				if (progress >= 1) {
					meteor.active = false;
					hideMeteor(meteor);
					return;
				}
				const fade = smoothstep(0, .08, progress) * (1 - smoothstep(.72, 1, progress));
				const headPosition = Cesium.Cartesian3.lerp(meteor.start, meteor.end, progress, new Cesium.Cartesian3());
				meteor.headGlow.position = headPosition;
				meteor.headGlow.color = Cesium.Color.fromCssColorString("#67e8f9").withAlpha(.27 * fade);
				meteor.headGlow.outlineColor = Cesium.Color.fromCssColorString("#e0f2fe").withAlpha(.2 * fade);
				meteor.headGlow.show = true;
				meteor.headCore.position = headPosition;
				meteor.headCore.color = Cesium.Color.WHITE.withAlpha(.98 * fade);
				meteor.headCore.outlineColor = Cesium.Color.fromCssColorString("#a5f3fc").withAlpha(.74 * fade);
				meteor.headCore.show = true;
				meteor.trailSegments.forEach((segment, segmentIndex) => {
					const segmentStrength = (segmentIndex + 1) / meteorTrailSegmentCount;
					const segmentEnd = progress - meteor.tailLength * (meteorTrailSegmentCount - 1 - segmentIndex) / meteorTrailSegmentCount;
					const segmentStart = progress - meteor.tailLength * (meteorTrailSegmentCount - segmentIndex) / meteorTrailSegmentCount;
					if (segmentEnd <= 0) {
						segment.show = false;
						return;
					}
					const startPosition = Cesium.Cartesian3.lerp(meteor.start, meteor.end, Math.max(0, segmentStart), new Cesium.Cartesian3());
					const endPosition = Cesium.Cartesian3.lerp(meteor.start, meteor.end, Math.min(1, segmentEnd), new Cesium.Cartesian3());
					const trailAlpha = fade * (.068 + Math.pow(segmentStrength, 2.15) * .95);
					segment.positions = [startPosition, endPosition];
					meteor.trailMaterials[segmentIndex].uniforms.color = Cesium.Color.fromCssColorString(segmentIndex > 5 ? "#f0f9ff" : "#67e8f9").withAlpha(trailAlpha);
					segment.show = true;
				});
			});
		};
		const updateRotation = () => {
			const elapsedSeconds = (performance.now() - startTime) / 1e3;
			const angle = reduceMotion ? 0 : elapsedSeconds * idleRotationRadiansPerSecond;
			const cameraDistance = Cesium.Cartesian3.magnitude(viewer.camera.positionWC);
			const expandedEarthRadius = Cesium.Ellipsoid.WGS84.maximumRadius + earthOcclusionPadding;
			const earthAngularRadius = Math.asin(Math.min(.999, expandedEarthRadius / cameraDistance));
			const earthCosineLimit = Math.cos(earthAngularRadius);
			Cesium.Matrix4.multiplyByPoint(viewer.camera.viewMatrix, Cesium.Cartesian3.ZERO, earthCenterEC);
			Cesium.Cartesian3.normalize(earthCenterEC, earthDirectionEC);
			if (moonMaterial) moonMaterial.uniforms.earthCosineLimit = occludeMoonWithEarthRef.current ? earthCosineLimit : 2;
			Cesium.Matrix3.fromRotationZ(angle, rotation);
			Cesium.Matrix4.fromRotationTranslation(rotation, Cesium.Cartesian3.ZERO, modelMatrix);
			pointCollection.modelMatrix = Cesium.Matrix4.clone(modelMatrix, pointCollection.modelMatrix);
			galaxyGlowCollection.modelMatrix = Cesium.Matrix4.clone(modelMatrix, galaxyGlowCollection.modelMatrix);
			lineCollection.modelMatrix = Cesium.Matrix4.clone(modelMatrix, lineCollection.modelMatrix);
			auroraGlowCollection.modelMatrix = Cesium.Matrix4.clone(modelMatrix, auroraGlowCollection.modelMatrix);
			const auroraPhase = reduceMotion ? 0 : elapsedSeconds * auroraDriftRadiansPerSecond;
			auroraMaterials.forEach((material, materialIndex) => {
				material.uniforms.phase = auroraPhase + materialIndex * .82;
			});
			if (moonPrimitive && moonBaseModelMatrix) {
				Cesium.Matrix4.multiply(modelMatrix, moonBaseModelMatrix, moonModelMatrix);
				moonPrimitive.modelMatrix = Cesium.Matrix4.clone(moonModelMatrix, moonPrimitive.modelMatrix);
			}
			updateMeteor(elapsedSeconds);
		};
		viewer.scene.preRender.addEventListener(updateRotation);
		viewer.scene.requestRender();
		return () => {
			if (viewer.isDestroyed()) return;
			window.clearTimeout(celestialPlacementTimer);
			viewer.scene.preRender.removeEventListener(updateRotation);
			if (viewer.scene.primitives.contains(pointCollection)) viewer.scene.primitives.remove(pointCollection);
			if (viewer.scene.primitives.contains(galaxyGlowCollection)) viewer.scene.primitives.remove(galaxyGlowCollection);
			if (viewer.scene.primitives.contains(auroraGlowCollection)) viewer.scene.primitives.remove(auroraGlowCollection);
			if (viewer.scene.primitives.contains(lineCollection)) viewer.scene.primitives.remove(lineCollection);
			if (viewer.scene.primitives.contains(meteorPointCollection)) viewer.scene.primitives.remove(meteorPointCollection);
			if (viewer.scene.primitives.contains(meteorTrailCollection)) viewer.scene.primitives.remove(meteorTrailCollection);
			if (moonPrimitive && viewer.scene.primitives.contains(moonPrimitive)) viewer.scene.primitives.remove(moonPrimitive);
		};
	}, [
		overviewHeight,
		overviewLat,
		overviewLng,
		show,
		viewer
	]);
	return null;
}
//#endregion
//#region src/components/AtlasSidePanel.tsx
function AtlasSidePanel({ eyebrow, title, actions, className = "", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `atlas-left-panel glass-panel pointer-events-auto z-30 flex w-full max-w-[340px] flex-col p-4 text-left ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-country-panel-heading mb-4 flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-panel-body",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.24em] text-white",
					children: eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-xl font-semibold tracking-normal text-slate-950",
					children: title
				})]
			}), actions]
		}), children]
	});
}
//#endregion
//#region src/components/CesiumAtlasGlobe.tsx
var maxCesiumDevicePixelRatio = 2;
var cursorTrailMaxAgeMs = 680;
var cursorTrailMaxLength = 620;
var cursorTrailFadeDelayMs = 52;
var cursorTrailFadeDurationMs = 320;
var clamp01 = (value) => Math.min(1, Math.max(0, value));
var trimCursorTrailPoints = (points, now) => {
	if (points.length < 2) return points;
	let startIndex = points.length - 1;
	let accumulatedLength = 0;
	for (let index = points.length - 1; index > 0; index -= 1) {
		const current = points[index];
		const previous = points[index - 1];
		const segmentLength = Math.hypot(current.x - previous.x, current.y - previous.y);
		if (now - previous.time > cursorTrailMaxAgeMs || accumulatedLength + segmentLength > cursorTrailMaxLength) break;
		accumulatedLength += segmentLength;
		startIndex = index - 1;
	}
	return points.slice(startIndex);
};
var smoothCursorTrailPoints = (points) => {
	if (points.length < 3) return points;
	const smoothed = [];
	const samplesPerSegment = 4;
	for (let index = 0; index < points.length - 1; index += 1) {
		const point0 = points[Math.max(0, index - 1)];
		const point1 = points[index];
		const point2 = points[index + 1];
		const point3 = points[Math.min(points.length - 1, index + 2)];
		for (let sample = 0; sample < samplesPerSegment; sample += 1) {
			const progress = sample / samplesPerSegment;
			const progressSquared = progress * progress;
			const progressCubed = progressSquared * progress;
			const interpolate = (a, b, c, d) => .5 * (2 * b + (-a + c) * progress + (2 * a - 5 * b + 4 * c - d) * progressSquared + (-a + 3 * b - 3 * c + d) * progressCubed);
			smoothed.push({
				x: interpolate(point0.x, point1.x, point2.x, point3.x),
				y: interpolate(point0.y, point1.y, point2.y, point3.y),
				time: point1.time + (point2.time - point1.time) * progress,
				speed: point1.speed + (point2.speed - point1.speed) * progress
			});
		}
	}
	smoothed.push(points[points.length - 1]);
	return smoothed;
};
var overviewTarget = travelAtlasDisplay.overviewTarget;
var cityMarkerHeight = 600;
var cityPosition = (lng, lat) => Cesium.Cartesian3.fromDegrees(lng, lat, cityMarkerHeight);
var hasDronePosition = (item) => Boolean(item.position);
var droneMediaPosition = (item) => Cesium.Cartesian3.fromDegrees(item.position.lng, item.position.lat, (item.position.altitudeMeters ?? 0) + 45);
var dronePinImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="32" cy="32" r="22" fill="#0ea5e9" fill-opacity="0.9" filter="url(#glow)"/>
  <circle cx="32" cy="32" r="17" fill="#020617" fill-opacity="0.78"/>
  <path d="M17 27h10l3-8h4l3 8h10v5H36l-3 9h-2l-3-9H17z" fill="#e0f2fe"/>
  <circle cx="18" cy="29.5" r="3" fill="#7dd3fc"/>
  <circle cx="46" cy="29.5" r="3" fill="#7dd3fc"/>
  <circle cx="32" cy="20" r="3" fill="#7dd3fc"/>
  <circle cx="32" cy="42" r="3" fill="#7dd3fc"/>
</svg>
`)}`;
var cityHoverMarkerImageCache = /* @__PURE__ */ new Map();
var cityHoverMarkerImage = (accent, corePixelSize) => {
	const cacheKey = `${accent}:${corePixelSize}`;
	const cachedImage = cityHoverMarkerImageCache.get(cacheKey);
	if (cachedImage) return cachedImage;
	const markerPixelSize = 38;
	const coreRadius = corePixelSize * 32 / markerPixelSize;
	const image = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <radialGradient id="city-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.62"/>
          <stop offset="24%" stop-color="${accent}" stop-opacity="0.44"/>
          <stop offset="58%" stop-color="${accent}" stop-opacity="0.16"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#city-glow)"/>
      <circle
        cx="32"
        cy="32"
        r="${coreRadius}"
        fill="${accent}"
        stroke="#ffffff"
        stroke-opacity="0.94"
        stroke-width="${128 / markerPixelSize}"
      />
    </svg>
  `)}`;
	cityHoverMarkerImageCache.set(cacheKey, image);
	return image;
};
var maximumZoomDistance = 22e6;
var cameraScaleStates = {
	world: {
		rangeOrHeight: maximumZoomDistance,
		pitch: -90,
		duration: 1.2
	},
	country: {
		rangeOrHeight: 31e5,
		pitch: -62,
		duration: 1.3
	},
	city: {
		rangeOrHeight: 68e4,
		pitch: -48,
		duration: 1.35
	},
	droneGroup: {
		rangeOrHeight: 2e4,
		pitch: -42,
		duration: 1.15
	},
	drone: {
		rangeOrHeight: 9e3,
		pitch: -42,
		duration: 1
	}
};
var cameraScaleForGlobeScale = (scale) => {
	if (scale < 1.68) return "city";
	if (scale < 2.55) return "country";
	return "world";
};
var createRoutePositions = (startLng, startLat, endLng, endLat, routeType) => {
	const start = Cesium.Cartographic.fromDegrees(startLng, startLat);
	const end = Cesium.Cartographic.fromDegrees(endLng, endLat);
	const geodesic = new Cesium.EllipsoidGeodesic(start, end);
	const routeHeight = routeType === "flight" ? 24e3 : routeType === "ferry" ? 8e3 : 6e3;
	const segmentCount = Math.min(96, Math.max(32, Math.ceil(geodesic.surfaceDistance / 15e4)));
	return Array.from({ length: segmentCount + 1 }, (_, index) => {
		if (index === 0) return cityPosition(startLng, startLat);
		if (index === segmentCount) return cityPosition(endLng, endLat);
		const fraction = index / segmentCount;
		const point = geodesic.interpolateUsingFraction(fraction);
		const height = cityMarkerHeight + Math.sin(Math.PI * fraction) * (routeHeight - cityMarkerHeight);
		return Cesium.Cartesian3.fromRadians(point.longitude, point.latitude, height);
	});
};
var customRouteHeight = () => 0;
var customRouteDateRange = (route) => {
	const startDate = route.startDate ?? route.date;
	const endDate = route.endDate;
	if (!startDate && !endDate) return "日期未设置";
	if (!startDate) return `至 ${endDate}`;
	if (!endDate || endDate === startDate) return startDate;
	return `${startDate} 至 ${endDate}`;
};
var createCustomRoutePositions = (points) => points.map((point) => Cesium.Cartesian3.fromDegrees(point.lng, point.lat, customRouteHeight()));
var isPositionFacingCamera = (position, cameraPosition) => {
	const surfaceNormal = Cesium.Cartesian3.normalize(position, new Cesium.Cartesian3());
	const cameraVector = Cesium.Cartesian3.subtract(cameraPosition, position, new Cesium.Cartesian3());
	return Cesium.Cartesian3.dot(surfaceNormal, cameraVector) > -8e4;
};
var setsMatch = (left, right) => left !== null && left.size === right.size && [...right].every((item) => left.has(item));
var configureViewer = (viewer) => {
	const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
	viewer.resolutionScale = Math.min(1, maxCesiumDevicePixelRatio / devicePixelRatio);
	viewer.scene.screenSpaceCameraController.minimumZoomDistance = 120;
	viewer.scene.screenSpaceCameraController.maximumZoomDistance = maximumZoomDistance;
	viewer.scene.globe.depthTestAgainstTerrain = true;
	viewer.scene.minimumDisableDepthTestDistance = 0;
	viewer.camera.percentageChanged = .01;
	viewer.forceResize();
};
var droneLockAllowedCameraSources = new Set([
	"debug-direct-drone",
	"drone-item",
	"drone-group"
]);
function CesiumAtlasGlobe({ hoveredCountryId, imageryBrightness, imageryContrast, imagerySaturation, mapSource, selectedCountryId, selectedCityId, selectionMode, globeScale, resetVersion, isNight, showMapContent = true, showTripEditor = false, tripTimelineTarget = null, tripEditorTarget = null, activeDroneMediaCityId, activeDroneMediaItemId, onSelectCity, onSelectDroneMediaItem, onCustomRouteCountChange }) {
	const viewerRef = (0, import_react.useRef)(null);
	const globeShellRef = (0, import_react.useRef)(null);
	const cursorGlowRef = (0, import_react.useRef)(null);
	const cursorTrailRef = (0, import_react.useRef)(null);
	const cursorTrailPointsRef = (0, import_react.useRef)([]);
	const cursorTrailFrameRef = (0, import_react.useRef)(null);
	const cursorTrailDrawRef = (0, import_react.useRef)(() => void 0);
	const cursorTrailReducedMotionRef = (0, import_react.useRef)(false);
	const cursorTrailNeedsResetRef = (0, import_react.useRef)(true);
	const lastCursorPointRef = (0, import_react.useRef)(null);
	const lastCameraFocusKeyRef = (0, import_react.useRef)(void 0);
	const cameraCommandCountRef = (0, import_react.useRef)(0);
	const debugDroneCameraLockUntilRef = (0, import_react.useRef)(0);
	const [customRoutes, setCustomRoutes] = (0, import_react.useState)(() => travelAtlasEditorState.customRoutes);
	(0, import_react.useEffect)(() => {
		onCustomRouteCountChange?.(customRoutes.length);
	}, [customRoutes.length, onCustomRouteCountChange]);
	const [isDrawingCustomRoute, setIsDrawingCustomRoute] = (0, import_react.useState)(false);
	const [draftRoutePoints, setDraftRoutePoints] = (0, import_react.useState)([]);
	const [selectedRouteCityId, setSelectedRouteCityId] = (0, import_react.useState)("");
	const [draftRoutePreviewPoint, setDraftRoutePreviewPoint] = (0, import_react.useState)();
	const [customRouteTitle, setCustomRouteTitle] = (0, import_react.useState)("");
	const [customRouteStartDate, setCustomRouteStartDate] = (0, import_react.useState)("");
	const [customRouteEndDate, setCustomRouteEndDate] = (0, import_react.useState)("");
	const [customRouteColor, setCustomRouteColor] = (0, import_react.useState)("#f59e0b");
	const [customRouteNotice, setCustomRouteNotice] = (0, import_react.useState)("");
	const [customRouteBusy, setCustomRouteBusy] = (0, import_react.useState)(false);
	const [isTripEditorCollapsed, setIsTripEditorCollapsed] = (0, import_react.useState)(false);
	const [viewerReadyVersion, setViewerReadyVersion] = (0, import_react.useState)(0);
	const updateVisibleHemisphereRef = (0, import_react.useRef)(() => void 0);
	const [focusOffset, setFocusOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const [visibleCityIds, setVisibleCityIds] = (0, import_react.useState)(null);
	const [visibleRouteIds, setVisibleRouteIds] = (0, import_react.useState)(null);
	const selectedCountry = selectedCountryId ? countryById[selectedCountryId] : void 0;
	const selectedCity = selectedCityId ? cityById[selectedCityId] : void 0;
	const selectedAccent = selectedCountry?.accent ?? "#38bdf8";
	const mapSourceLayers = (0, import_react.useMemo)(() => createMapSourceLayers(mapSource), [mapSource]);
	const drawCursorTrail = (0, import_react.useCallback)((now) => {
		const canvas = cursorTrailRef.current;
		if (!canvas || cursorTrailReducedMotionRef.current) {
			cursorTrailFrameRef.current = null;
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			cursorTrailFrameRef.current = null;
			return;
		}
		const cssWidth = canvas.clientWidth;
		const cssHeight = canvas.clientHeight;
		const pixelRatio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
		const targetWidth = Math.round(cssWidth * pixelRatio);
		const targetHeight = Math.round(cssHeight * pixelRatio);
		if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
			canvas.width = targetWidth;
			canvas.height = targetHeight;
		}
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		const trimmedPoints = trimCursorTrailPoints(cursorTrailPointsRef.current, now);
		cursorTrailPointsRef.current = trimmedPoints;
		const latestPoint = trimmedPoints[trimmedPoints.length - 1];
		if (!latestPoint || trimmedPoints.length < 2) {
			cursorTrailFrameRef.current = null;
			return;
		}
		const idleTime = now - latestPoint.time;
		const idleFade = clamp01(1 - Math.max(0, idleTime - cursorTrailFadeDelayMs) / cursorTrailFadeDurationMs);
		if (idleFade <= 0) {
			cursorTrailPointsRef.current = [];
			cursorTrailFrameRef.current = null;
			return;
		}
		const points = smoothCursorTrailPoints(trimmedPoints);
		const night = isNight;
		const themeStrength = night ? 1 : .62;
		const speedLift = Math.min(1.7, latestPoint.speed * .72);
		context.globalCompositeOperation = "lighter";
		const drawRibbonPass = (widthScale, alphaScale, blur) => {
			const leftEdge = [];
			const rightEdge = [];
			points.forEach((point, index) => {
				const previous = points[Math.max(0, index - 1)];
				const next = points[Math.min(points.length - 1, index + 1)];
				const tangentX = next.x - previous.x;
				const tangentY = next.y - previous.y;
				const tangentLength = Math.max(.001, Math.hypot(tangentX, tangentY));
				const normalX = -tangentY / tangentLength;
				const normalY = tangentX / tangentLength;
				const progress = index / (points.length - 1);
				const taper = Math.pow(progress, 1.52);
				const velocity = Math.min(1.48, .76 + point.speed * .28);
				const halfWidth = (.08 + taper * (3.35 + speedLift)) * widthScale * velocity;
				leftEdge.push({
					x: point.x + normalX * halfWidth,
					y: point.y + normalY * halfWidth
				});
				rightEdge.push({
					x: point.x - normalX * halfWidth,
					y: point.y - normalY * halfWidth
				});
			});
			const firstPoint = points[0];
			const lastPoint = points[points.length - 1];
			const gradient = context.createLinearGradient(firstPoint.x, firstPoint.y, lastPoint.x, lastPoint.y);
			const alpha = alphaScale * idleFade * themeStrength;
			gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
			gradient.addColorStop(.16, `rgba(255, 255, 255, ${alpha * .08})`);
			gradient.addColorStop(.52, `rgba(255, 255, 255, ${alpha * .42})`);
			gradient.addColorStop(.84, `rgba(255, 255, 255, ${alpha * .82})`);
			gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);
			context.save();
			context.filter = blur > 0 ? `blur(${blur}px)` : "none";
			context.shadowBlur = blur * .7;
			context.shadowColor = `rgba(255, 255, 255, ${alpha * .72})`;
			context.fillStyle = gradient;
			context.beginPath();
			context.moveTo(leftEdge[0].x, leftEdge[0].y);
			leftEdge.slice(1).forEach((point) => context.lineTo(point.x, point.y));
			rightEdge.slice().reverse().forEach((point) => context.lineTo(point.x, point.y));
			context.closePath();
			context.fill();
			context.restore();
		};
		drawRibbonPass(3.35, .11, night ? 7 : 5);
		drawRibbonPass(1.75, .28, night ? 3.5 : 2.5);
		drawRibbonPass(.72, .94, 0);
		const headRadius = (night ? 8.5 : 7) + speedLift * 1.3;
		const headGlow = context.createRadialGradient(latestPoint.x, latestPoint.y, 0, latestPoint.x, latestPoint.y, headRadius);
		headGlow.addColorStop(0, `rgba(255, 255, 255, ${.98 * idleFade})`);
		headGlow.addColorStop(.22, `rgba(255, 255, 255, ${.74 * idleFade * themeStrength})`);
		headGlow.addColorStop(.58, `rgba(255, 255, 255, ${.24 * idleFade * themeStrength})`);
		headGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
		context.fillStyle = headGlow;
		context.beginPath();
		context.arc(latestPoint.x, latestPoint.y, headRadius, 0, Math.PI * 2);
		context.fill();
		cursorTrailFrameRef.current = window.requestAnimationFrame((nextFrameTime) => cursorTrailDrawRef.current(nextFrameTime));
	}, [isNight]);
	(0, import_react.useEffect)(() => {
		cursorTrailDrawRef.current = drawCursorTrail;
	}, [drawCursorTrail]);
	const requestCursorTrailFrame = (0, import_react.useCallback)(() => {
		if (cursorTrailFrameRef.current !== null || cursorTrailReducedMotionRef.current) return;
		cursorTrailFrameRef.current = window.requestAnimationFrame(drawCursorTrail);
	}, [drawCursorTrail]);
	const updateCursorGlow = (0, import_react.useCallback)((event) => {
		const shell = globeShellRef.current;
		const glow = cursorGlowRef.current;
		if (!shell || !glow) return;
		const bounds = shell.getBoundingClientRect();
		glow.style.setProperty("--cursor-x", `${event.clientX - bounds.left}px`);
		glow.style.setProperty("--cursor-y", `${event.clientY - bounds.top}px`);
		glow.dataset.active = "true";
		if (event.pointerType !== "mouse") return;
		if (!cursorTrailRef.current || cursorTrailReducedMotionRef.current) return;
		if (cursorTrailNeedsResetRef.current) {
			cursorTrailPointsRef.current = [];
			lastCursorPointRef.current = null;
			cursorTrailNeedsResetRef.current = false;
		}
		const coalescedPointerEvents = event.getCoalescedEvents?.() ?? [];
		const coalescedEvents = coalescedPointerEvents.length > 0 ? coalescedPointerEvents : [event];
		const frameTime = performance.now();
		coalescedEvents.forEach((pointerEvent, index) => {
			const x = pointerEvent.clientX - bounds.left;
			const y = pointerEvent.clientY - bounds.top;
			const time = frameTime - (coalescedEvents.length - 1 - index) * 2;
			const previous = lastCursorPointRef.current;
			if (!previous) {
				lastCursorPointRef.current = {
					x,
					y,
					time
				};
				cursorTrailPointsRef.current.push({
					x,
					y,
					time,
					speed: 0
				});
				return;
			}
			const distance = Math.hypot(x - previous.x, y - previous.y);
			const elapsed = Math.max(time - previous.time, 4);
			if (distance < .85) return;
			const speed = Math.min(3.2, distance / elapsed);
			lastCursorPointRef.current = {
				x,
				y,
				time
			};
			cursorTrailPointsRef.current.push({
				x,
				y,
				time,
				speed
			});
		});
		cursorTrailPointsRef.current = trimCursorTrailPoints(cursorTrailPointsRef.current, frameTime).slice(-96);
		requestCursorTrailFrame();
	}, [requestCursorTrailFrame]);
	const hideCursorGlow = (0, import_react.useCallback)(() => {
		if (cursorGlowRef.current) cursorGlowRef.current.dataset.active = "false";
		lastCursorPointRef.current = null;
		cursorTrailNeedsResetRef.current = true;
	}, []);
	(0, import_react.useEffect)(() => {
		window.addEventListener("pointermove", updateCursorGlow, {
			capture: true,
			passive: true
		});
		window.addEventListener("blur", hideCursorGlow);
		document.documentElement.addEventListener("pointerleave", hideCursorGlow);
		return () => {
			window.removeEventListener("pointermove", updateCursorGlow, true);
			window.removeEventListener("blur", hideCursorGlow);
			document.documentElement.removeEventListener("pointerleave", hideCursorGlow);
		};
	}, [hideCursorGlow, updateCursorGlow]);
	(0, import_react.useEffect)(() => {
		const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updateReducedMotion = () => {
			cursorTrailReducedMotionRef.current = reducedMotionQuery.matches;
			if (!reducedMotionQuery.matches) return;
			cursorTrailPointsRef.current = [];
			if (cursorTrailFrameRef.current !== null) {
				window.cancelAnimationFrame(cursorTrailFrameRef.current);
				cursorTrailFrameRef.current = null;
			}
			const canvas = cursorTrailRef.current;
			const context = canvas?.getContext("2d");
			if (canvas && context) context.clearRect(0, 0, canvas.width, canvas.height);
		};
		updateReducedMotion();
		reducedMotionQuery.addEventListener("change", updateReducedMotion);
		return () => {
			reducedMotionQuery.removeEventListener("change", updateReducedMotion);
			if (cursorTrailFrameRef.current !== null) window.cancelAnimationFrame(cursorTrailFrameRef.current);
		};
	}, []);
	const captureViewer = (0, import_react.useCallback)((component) => {
		if (viewerRef.current === component) return;
		viewerRef.current = component;
		setViewerReadyVersion((current) => current + 1);
	}, []);
	const stopCustomRouteDrawing = (0, import_react.useCallback)(() => {
		setIsDrawingCustomRoute(false);
		setDraftRoutePreviewPoint(void 0);
	}, []);
	(0, import_react.useCallback)(() => {
		setDraftRoutePoints([]);
		setSelectedRouteCityId("");
		setDraftRoutePreviewPoint(void 0);
		setCustomRouteNotice("请在地图上依次点击路线点，至少需要两个点。");
		setIsDrawingCustomRoute(true);
	}, []);
	const addCityToCustomRoute = (0, import_react.useCallback)((city) => {
		if (!isDrawingCustomRoute || city.lat === null || city.lng === null) return;
		setDraftRoutePoints((points) => {
			if (points.some((point) => point.cityId === city.id)) return points;
			return [...points, {
				cityId: city.id,
				lat: city.lat,
				lng: city.lng
			}];
		});
		setSelectedRouteCityId("");
		setCustomRouteNotice(`已加入：${city.nameEn ?? city.nameZh ?? city.id}`);
	}, [isDrawingCustomRoute]);
	const cancelCustomRouteDrawing = (0, import_react.useCallback)(() => {
		stopCustomRouteDrawing();
		setDraftRoutePoints([]);
		setCustomRouteNotice("已取消当前路线。");
	}, [stopCustomRouteDrawing]);
	const saveCustomRoute = (0, import_react.useCallback)(async () => {
		const title = customRouteTitle.trim();
		if (!title) {
			setCustomRouteNotice("请先填写路线名称。");
			return;
		}
		if (draftRoutePoints.length < 2) {
			setCustomRouteNotice("至少点击两个地图点后才能保存。");
			return;
		}
		if (customRouteStartDate && customRouteEndDate && customRouteEndDate < customRouteStartDate) {
			setCustomRouteNotice("结束日期不能早于开始日期。");
			return;
		}
		const route = {
			id: `custom-route-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
			title,
			startDate: customRouteStartDate || void 0,
			endDate: customRouteEndDate || void 0,
			type: "custom",
			color: customRouteColor,
			visible: true,
			points: draftRoutePoints
		};
		setCustomRouteBusy(true);
		try {
			const nextRoutes = [...customRoutes, route];
			setCustomRoutes((await updateLocalEditorState((current) => ({
				...current,
				customRoutes: nextRoutes
			}))).customRoutes);
			setCustomRouteTitle("");
			setCustomRouteStartDate("");
			setCustomRouteEndDate("");
			setDraftRoutePoints([]);
			stopCustomRouteDrawing();
			setCustomRouteNotice(`已保存路线“${title}”。`);
		} catch (error) {
			setCustomRouteNotice(error instanceof Error ? error.message : "路线保存失败。");
		} finally {
			setCustomRouteBusy(false);
		}
	}, [
		customRouteColor,
		customRouteEndDate,
		customRouteStartDate,
		customRouteTitle,
		customRoutes,
		draftRoutePoints,
		stopCustomRouteDrawing
	]);
	(0, import_react.useCallback)(async (routeId) => {
		const nextRoutes = customRoutes.map((route) => route.id === routeId ? {
			...route,
			visible: route.visible === false
		} : route);
		setCustomRouteBusy(true);
		try {
			setCustomRoutes((await updateLocalEditorState((current) => ({
				...current,
				customRoutes: nextRoutes
			}))).customRoutes);
		} catch (error) {
			setCustomRouteNotice(error instanceof Error ? error.message : "路线更新失败。");
		} finally {
			setCustomRouteBusy(false);
		}
	}, [customRoutes]);
	(0, import_react.useCallback)(async (routeId) => {
		const route = customRoutes.find((candidate) => candidate.id === routeId);
		if (!route || !window.confirm(`确定删除路线“${route.title}”吗？`)) return;
		const nextRoutes = customRoutes.filter((candidate) => candidate.id !== routeId);
		setCustomRouteBusy(true);
		try {
			setCustomRoutes((await updateLocalEditorState((current) => ({
				...current,
				customRoutes: nextRoutes
			}))).customRoutes);
			setCustomRouteNotice(`已删除路线“${route.title}”。`);
		} catch (error) {
			setCustomRouteNotice(error instanceof Error ? error.message : "路线删除失败。");
		} finally {
			setCustomRouteBusy(false);
		}
	}, [customRoutes]);
	(0, import_react.useEffect)(() => {}, [cancelCustomRouteDrawing, isDrawingCustomRoute]);
	const mappedCities = (0, import_react.useMemo)(() => cities.filter((city) => typeof city.lat === "number" && typeof city.lng === "number"), []);
	const journeyVisitCounts = (0, import_react.useMemo)(() => journeyDays.reduce((counts, day) => {
		counts[day.cityId] = (counts[day.cityId] ?? 0) + 1;
		return counts;
	}, {}), []);
	const mappedRoutes = (0, import_react.useMemo)(() => {
		const orderedCountryRoutes = countries.flatMap((country) => country.cityIds.slice(1).flatMap((toCityId, index) => {
			const fromCityId = country.cityIds[index];
			const from = cityById[fromCityId];
			const to = cityById[toCityId];
			if (!from || !to) return [];
			const existingRoute = routes.find((route) => route.fromCityId === fromCityId && route.toCityId === toCityId);
			const fromJourneyIds = new Set(from.records?.map((record) => record.journeyId).filter(Boolean));
			const sharedJourneyId = to.records?.map((record) => record.journeyId).find((journeyId) => journeyId && fromJourneyIds.has(journeyId));
			return [{
				id: existingRoute?.id ?? `country-order__${country.id}__${fromCityId}__${toCityId}`,
				fromCityId,
				toCityId,
				journeyId: existingRoute?.journeyId ?? sharedJourneyId,
				type: existingRoute?.type ?? "main"
			}];
		}));
		const crossCountryRoutes = routes.filter((route) => {
			const from = cityById[route.fromCityId];
			const to = cityById[route.toCityId];
			return from?.countryId && to?.countryId && from.countryId !== to.countryId;
		});
		return [...orderedCountryRoutes, ...crossCountryRoutes].flatMap((route) => {
			const from = cityById[route.fromCityId];
			const to = cityById[route.toCityId];
			if (!route.journeyId || !from || !to || typeof from.lat !== "number" || typeof from.lng !== "number" || typeof to.lat !== "number" || typeof to.lng !== "number") return [];
			return [{
				...route,
				fromLat: from.lat,
				fromLng: from.lng,
				toLat: to.lat,
				toLng: to.lng,
				fromCountryId: from.countryId,
				toCountryId: to.countryId,
				positions: createRoutePositions(from.lng, from.lat, to.lng, to.lat, route.type)
			}];
		});
	}, []);
	const mappedCustomRoutes = (0, import_react.useMemo)(() => customRoutes.map((route) => ({
		...route,
		positions: createCustomRoutePositions(route.points)
	})), [customRoutes]);
	(0, import_react.useMemo)(() => createCustomRoutePositions(draftRoutePreviewPoint ? [...draftRoutePoints, draftRoutePreviewPoint] : draftRoutePoints), [draftRoutePoints, draftRoutePreviewPoint]);
	const activeCityRouteIds = (0, import_react.useMemo)(() => new Set(mappedRoutes.filter((route) => selectedCityId && route.fromCountryId === selectedCountryId && route.toCountryId === selectedCountryId && (route.fromCityId === selectedCityId || route.toCityId === selectedCityId)).map((route) => route.id)), [
		mappedRoutes,
		selectedCityId,
		selectedCountryId
	]);
	const activeRoutePairs = mappedRoutes.filter((route) => activeCityRouteIds.has(route.id)).map((route) => `${route.fromCityId}->${route.toCityId}`).join("|");
	const activeDroneMediaItems = (0, import_react.useMemo)(() => activeDroneMediaCityId ? droneMediaItems.filter((item) => item.cityId === activeDroneMediaCityId && hasDronePosition(item)) : [], [activeDroneMediaCityId]);
	const selectedDroneMediaCandidate = activeDroneMediaItemId ? droneMediaById[activeDroneMediaItemId] : void 0;
	const selectedDroneMediaItem = selectedDroneMediaCandidate && hasDronePosition(selectedDroneMediaCandidate) ? selectedDroneMediaCandidate : void 0;
	const cameraFocus = (0, import_react.useMemo)(() => {
		if (selectedDroneMediaItem) return {
			type: "droneItem",
			id: selectedDroneMediaItem.id,
			item: selectedDroneMediaItem
		};
		if (activeDroneMediaItems.length > 0) return {
			type: "droneGroup",
			id: activeDroneMediaCityId,
			items: activeDroneMediaItems
		};
		if (selectionMode === "city" && selectedCity && typeof selectedCity.lat === "number" && typeof selectedCity.lng === "number") return {
			type: "city",
			id: selectedCity.id,
			lat: selectedCity.lat,
			lng: selectedCity.lng
		};
		if (selectionMode === "country" && selectedCountry && typeof selectedCountry.centerLat === "number" && typeof selectedCountry.centerLng === "number") return {
			type: "country",
			id: selectedCountry.id,
			lat: selectedCountry.centerLat,
			lng: selectedCountry.centerLng
		};
		return {
			type: "overview",
			id: "overview",
			lat: overviewTarget.lat,
			lng: overviewTarget.lng
		};
	}, [
		activeDroneMediaItems,
		activeDroneMediaCityId,
		selectedCity,
		selectedCountry,
		selectedDroneMediaItem,
		selectionMode
	]);
	const cameraScale = (0, import_react.useMemo)(() => {
		if (cameraFocus.type === "droneItem") return "drone";
		if (cameraFocus.type === "droneGroup") return "droneGroup";
		return cameraScaleForGlobeScale(globeScale);
	}, [cameraFocus.type, globeScale]);
	const cameraFocusKey = (0, import_react.useMemo)(() => {
		if (cameraFocus.type === "droneItem") return `drone-item:${cameraFocus.item.id}:${cameraScale}`;
		if (cameraFocus.type === "droneGroup") return `drone-group:${activeDroneMediaCityId}:${cameraFocus.items.map((item) => item.id).join("|")}:${cameraScale}`;
		if (cameraFocus.type === "city") return `city:${selectedCityId}:${cameraScale}`;
		if (cameraFocus.type === "country") return `country:${selectedCountryId}:${cameraScale}`;
		return `overview:${cameraScale}:${resetVersion}`;
	}, [
		activeDroneMediaCityId,
		cameraFocus,
		cameraScale,
		resetVersion,
		selectedCityId,
		selectedCountryId
	]);
	const cameraRuntimeRef = (0, import_react.useRef)({
		activeDroneMediaCityId,
		activeDroneMediaItemId,
		cameraFocus,
		cameraScale,
		globeScale,
		selectedCityId,
		selectedCountryId
	});
	(0, import_react.useEffect)(() => {
		cameraRuntimeRef.current = {
			activeDroneMediaCityId,
			activeDroneMediaItemId,
			cameraFocus,
			cameraScale,
			globeScale,
			selectedCityId,
			selectedCountryId
		};
	}, [
		activeDroneMediaCityId,
		activeDroneMediaItemId,
		cameraFocus,
		cameraScale,
		globeScale,
		selectedCityId,
		selectedCountryId
	]);
	(0, import_react.useEffect)(() => {}, [
		activeDroneMediaCityId,
		activeDroneMediaItemId,
		globeScale,
		selectedCityId,
		selectedCountryId
	]);
	const activateDebugDroneCameraLock = (0, import_react.useCallback)(() => {
		debugDroneCameraLockUntilRef.current = Date.now() + 3e3;
	}, []);
	const executeCameraCommand = (0, import_react.useCallback)((request) => {
		const viewer = viewerRef.current?.cesiumElement;
		if (!viewer) return false;
		const { activeDroneMediaCityId, activeDroneMediaItemId, cameraFocus, cameraScale, globeScale, selectedCityId, selectedCountryId } = cameraRuntimeRef.current;
		const now = Date.now();
		const debugLockActive = now < debugDroneCameraLockUntilRef.current;
		if (Boolean(activeDroneMediaItemId || activeDroneMediaCityId || debugLockActive) && !droneLockAllowedCameraSources.has(request.source)) {
			request.source, request.reason, debugLockActive && Math.max(0, debugDroneCameraLockUntilRef.current - now), cameraFocus.type, cameraFocus.id, request.details;
			return false;
		}
		cameraCommandCountRef.current = cameraCommandCountRef.current + 1;
		request.source, request.reason, debugLockActive && Math.max(0, debugDroneCameraLockUntilRef.current - now), { ...request.details };
		viewer.camera.cancelFlight();
		request.run(viewer);
		return true;
	}, []);
	(0, import_react.useEffect)(() => {
		const viewer = viewerRef.current?.cesiumElement;
		if (!viewer) return;
		configureViewer(viewer);
	}, [viewerReadyVersion]);
	(0, import_react.useEffect)(() => {
		if (cameraScale !== "world") return void 0;
		const viewer = viewerRef.current?.cesiumElement;
		if (!viewer) return void 0;
		const lockedPosition = new Cesium.Cartesian3();
		const positionDirection = new Cesium.Cartesian3();
		const lockedDirection = new Cesium.Cartesian3();
		const lockedUp = new Cesium.Cartesian3();
		const upProjection = new Cesium.Cartesian3();
		const normalizeLockedUp = () => {
			const upDotDirection = Cesium.Cartesian3.dot(viewer.camera.upWC, lockedDirection);
			Cesium.Cartesian3.multiplyByScalar(lockedDirection, upDotDirection, upProjection);
			Cesium.Cartesian3.subtract(viewer.camera.upWC, upProjection, lockedUp);
			if (Cesium.Cartesian3.magnitudeSquared(lockedUp) < 1e-8) {
				const zDotDirection = Cesium.Cartesian3.dot(Cesium.Cartesian3.UNIT_Z, lockedDirection);
				Cesium.Cartesian3.multiplyByScalar(lockedDirection, zDotDirection, upProjection);
				Cesium.Cartesian3.subtract(Cesium.Cartesian3.UNIT_Z, upProjection, lockedUp);
			}
			if (Cesium.Cartesian3.magnitudeSquared(lockedUp) < 1e-8) Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_Y, lockedUp);
			Cesium.Cartesian3.normalize(lockedUp, lockedUp);
		};
		const lockWorldCenter = () => {
			if (viewer.isDestroyed()) return;
			Cesium.Cartesian3.clone(viewer.camera.positionWC, lockedPosition);
			Cesium.Cartesian3.normalize(viewer.camera.positionWC, positionDirection);
			Cesium.Cartesian3.negate(positionDirection, lockedDirection);
			if (1 - Cesium.Cartesian3.dot(viewer.camera.directionWC, lockedDirection) < 1e-12) return;
			normalizeLockedUp();
			viewer.camera.setView({
				destination: lockedPosition,
				orientation: {
					direction: lockedDirection,
					up: lockedUp
				}
			});
		};
		viewer.scene.preRender.addEventListener(lockWorldCenter);
		return () => {
			if (!viewer.isDestroyed()) viewer.scene.preRender.removeEventListener(lockWorldCenter);
		};
	}, [cameraScale, viewerReadyVersion]);
	(0, import_react.useEffect)(() => {}, [
		activateDebugDroneCameraLock,
		executeCameraCommand,
		viewerReadyVersion
	]);
	(0, import_react.useEffect)(() => {
		const viewer = viewerRef.current?.cesiumElement;
		if (!viewer) return;
		const updateVisibleHemisphere = () => {
			const cameraPosition = viewer.camera.positionWC;
			const nextCityIds = new Set(mappedCities.filter((city) => isPositionFacingCamera(cityPosition(city.lng, city.lat), cameraPosition)).map((city) => city.id));
			const nextRouteIds = new Set(mappedRoutes.filter((route) => route.positions.some((position) => isPositionFacingCamera(position, cameraPosition))).map((route) => route.id));
			setVisibleCityIds((current) => setsMatch(current, nextCityIds) ? current : nextCityIds);
			setVisibleRouteIds((current) => setsMatch(current, nextRouteIds) ? current : nextRouteIds);
		};
		updateVisibleHemisphereRef.current = updateVisibleHemisphere;
		updateVisibleHemisphere();
		const updateAfterFirstRender = () => {
			updateVisibleHemisphere();
			viewer.scene.postRender.removeEventListener(updateAfterFirstRender);
		};
		viewer.scene.postRender.addEventListener(updateAfterFirstRender);
		viewer.camera.changed.addEventListener(updateVisibleHemisphere);
		viewer.camera.moveEnd.addEventListener(updateVisibleHemisphere);
		return () => {
			viewer.scene.postRender.removeEventListener(updateAfterFirstRender);
			viewer.camera.changed.removeEventListener(updateVisibleHemisphere);
			viewer.camera.moveEnd.removeEventListener(updateVisibleHemisphere);
			updateVisibleHemisphereRef.current = () => void 0;
		};
	}, [
		mappedCities,
		mappedRoutes,
		viewerReadyVersion
	]);
	(0, import_react.useEffect)(() => {
		const viewer = viewerRef.current?.cesiumElement;
		if (!viewer) return;
		if (lastCameraFocusKeyRef.current === cameraFocusKey) return;
		const { activeDroneMediaCityId, activeDroneMediaItemId, cameraFocus, cameraScale, globeScale, selectedCityId, selectedCountryId } = cameraRuntimeRef.current;
		cameraFocus.type, cameraFocus.type, cameraFocus.id;
		if (cameraFocus.type === "droneItem") {
			const cameraState = cameraScaleStates.drone;
			const targetPosition = droneMediaPosition(cameraFocus.item);
			cameraFocus.item.id, cameraFocus.item.position.lat, cameraFocus.item.position.lng, cameraFocus.item.position.altitudeMeters;
			if (executeCameraCommand({
				source: "drone-item",
				reason: "cameraIntentKey changed",
				details: {
					scale: cameraScale,
					globeScale,
					focusType: cameraFocus.type,
					selectedCityId,
					selectedCountryId,
					activeDroneMediaCityId,
					activeDroneMediaItemId,
					target: {
						itemId: cameraFocus.item.id,
						lat: cameraFocus.item.position.lat,
						lng: cameraFocus.item.position.lng,
						altitudeMeters: cameraFocus.item.position.altitudeMeters
					},
					destination: "bounding-sphere",
					rangeOrHeight: cameraState.rangeOrHeight
				},
				run: (currentViewer) => {
					currentViewer.camera.flyToBoundingSphere(new Cesium.BoundingSphere(targetPosition, 350), {
						duration: cameraState.duration,
						offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(cameraState.pitch), cameraState.rangeOrHeight),
						complete: updateVisibleHemisphereRef.current
					});
				}
			})) lastCameraFocusKeyRef.current = cameraFocusKey;
			return;
		}
		if (cameraFocus.type === "droneGroup") {
			const cameraState = cameraScaleStates.droneGroup;
			const dronePositions = cameraFocus.items.map(droneMediaPosition);
			const boundingSphere = Cesium.BoundingSphere.fromPoints(dronePositions);
			const groupRange = Math.min(28e3, Math.max(12e3, boundingSphere.radius * 7, cameraState.rangeOrHeight));
			cameraFocus.items.map((item) => item.id), Math.round(boundingSphere.radius);
			if (executeCameraCommand({
				source: "drone-group",
				reason: "cameraIntentKey changed",
				details: {
					scale: cameraScale,
					globeScale,
					focusType: cameraFocus.type,
					selectedCityId,
					selectedCountryId,
					activeDroneMediaCityId,
					activeDroneMediaItemId,
					target: {
						itemIds: cameraFocus.items.map((item) => item.id),
						radius: Math.round(boundingSphere.radius)
					},
					destination: "bounding-sphere",
					rangeOrHeight: groupRange
				},
				run: (currentViewer) => {
					currentViewer.camera.flyToBoundingSphere(boundingSphere, {
						duration: cameraState.duration,
						offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(cameraState.pitch), groupRange),
						complete: updateVisibleHemisphereRef.current
					});
				}
			})) lastCameraFocusKeyRef.current = cameraFocusKey;
			return;
		}
		const cameraState = cameraScaleStates[cameraScale];
		const targetPosition = Cesium.Cartesian3.fromDegrees(cameraFocus.lng, cameraFocus.lat, 600);
		cameraFocus.type, cameraFocus.lat, cameraFocus.lng;
		const updateFocusOffset = () => {
			const screenPosition = Cesium.SceneTransforms.worldToWindowCoordinates(viewer.scene, targetPosition);
			if (!screenPosition) return;
			setFocusOffset({
				x: Math.round(screenPosition.x - viewer.canvas.clientWidth / 2),
				y: Math.round(screenPosition.y - viewer.canvas.clientHeight / 2)
			});
			updateVisibleHemisphereRef.current();
		};
		if (cameraScale === "world") {
			const destination = Cesium.Cartesian3.fromDegrees(cameraFocus.lng, cameraFocus.lat, cameraState.rangeOrHeight);
			const direction = Cesium.Cartesian3.normalize(Cesium.Cartesian3.negate(destination, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const right = Cesium.Cartesian3.normalize(Cesium.Cartesian3.cross(direction, Cesium.Cartesian3.UNIT_Z, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			const up = Cesium.Cartesian3.normalize(Cesium.Cartesian3.cross(right, direction, new Cesium.Cartesian3()), new Cesium.Cartesian3());
			if (executeCameraCommand({
				source: cameraFocus.type,
				reason: "cameraIntentKey changed",
				details: {
					scale: cameraScale,
					globeScale,
					focusType: cameraFocus.type,
					selectedCityId,
					selectedCountryId,
					activeDroneMediaCityId,
					activeDroneMediaItemId,
					target: {
						lat: cameraFocus.lat,
						lng: cameraFocus.lng
					},
					destination: "cartesian-height",
					rangeOrHeight: cameraState.rangeOrHeight
				},
				run: (currentViewer) => {
					currentViewer.camera.flyTo({
						destination,
						duration: cameraState.duration,
						orientation: {
							direction,
							up
						},
						complete: updateFocusOffset
					});
				}
			})) lastCameraFocusKeyRef.current = cameraFocusKey;
			return;
		}
		if (executeCameraCommand({
			source: cameraFocus.type,
			reason: "cameraIntentKey changed",
			details: {
				scale: cameraScale,
				globeScale,
				focusType: cameraFocus.type,
				selectedCityId,
				selectedCountryId,
				activeDroneMediaCityId,
				activeDroneMediaItemId,
				target: {
					lat: cameraFocus.lat,
					lng: cameraFocus.lng
				},
				destination: "bounding-sphere",
				rangeOrHeight: cameraState.rangeOrHeight
			},
			run: (currentViewer) => {
				currentViewer.camera.flyToBoundingSphere(new Cesium.BoundingSphere(targetPosition, cameraScale === "country" ? 15e4 : 15e3), {
					duration: cameraState.duration,
					offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(cameraState.pitch), cameraState.rangeOrHeight),
					complete: updateFocusOffset
				});
			}
		})) lastCameraFocusKeyRef.current = cameraFocusKey;
	}, [
		cameraFocusKey,
		executeCameraCommand,
		viewerReadyVersion
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: globeShellRef,
		className: `cesium-atlas-shell absolute inset-0 h-full w-full ${isNight ? "bg-[#020817]" : "bg-sky-100"}`,
		"data-focus-offset-x": focusOffset.x,
		"data-focus-offset-y": focusOffset.y,
		"data-visible-city-count": visibleCityIds?.size ?? mappedCities.length,
		"data-visible-route-count": visibleRouteIds?.size ?? mappedRoutes.length + mappedCustomRoutes.length,
		"data-active-route-pairs": activeRoutePairs,
		"data-map-source": mapSource,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ur, {
				ref: captureViewer,
				full: true,
				animation: false,
				baseLayer: false,
				baseLayerPicker: false,
				fullscreenButton: false,
				geocoder: false,
				homeButton: false,
				infoBox: false,
				navigationHelpButton: false,
				scene3DOnly: true,
				sceneModePicker: false,
				selectionIndicator: false,
				timeline: false,
				useBrowserRecommendedResolution: false,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(an, {
						imageryProvider: mapSourceLayers.base,
						brightness: imageryBrightness,
						contrast: imageryContrast,
						saturation: imagerySaturation,
						show: showMapContent
					}, `${mapSource}-base`),
					mapSourceLayers.labels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(an, {
						imageryProvider: mapSourceLayers.labels,
						brightness: imageryBrightness,
						contrast: imageryContrast,
						saturation: imagerySaturation,
						show: showMapContent
					}, `${mapSource}-labels`) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tr, { backgroundColor: Cesium.Color.fromCssColorString(isNight ? "#010409" : "#dbeafe") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qt, {
						baseColor: Cesium.Color.fromCssColorString(isNight ? "#07111f" : "#cbd5e1"),
						dynamicAtmosphereLighting: isNight,
						enableLighting: isNight,
						show: showMapContent,
						vertexShadowDarkness: isNight ? .48 : .3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(sr, { show: !isNight }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(or, { show: showMapContent }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(cr, { show: !isNight }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(nr, {
						enableInputs: showMapContent,
						enableLook: cameraScale !== "world",
						enableRotate: true,
						enableTilt: true,
						enableTranslate: cameraScale !== "world",
						enableZoom: true,
						inertiaZoom: .72
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CesiumConstellationSky, {
						occludeMoonWithEarth: showMapContent,
						overviewHeight: cameraScaleStates.world.rangeOrHeight,
						overviewLat: overviewTarget.lat,
						overviewLng: overviewTarget.lng,
						show: isNight
					}),
					mappedRoutes.map((route) => {
						const isCityRoute = activeCityRouteIds.has(route.id);
						const isCountryRoute = selectedCountryId && (route.fromCountryId === selectedCountryId || route.toCountryId === selectedCountryId);
						const isActive = selectedCityId ? isCityRoute : Boolean(isCountryRoute);
						const isMuted = selectionMode !== "overview" && !isActive;
						const isVisible = cameraFocus.type !== "droneGroup" && cameraFocus.type !== "droneItem" && (visibleRouteIds?.has(route.id) ?? true) && (selectionMode !== "city" || isCityRoute);
						const routeColor = Cesium.Color.fromCssColorString(isActive ? selectedAccent : "#bae6fd").withAlpha(isActive ? .94 : isMuted ? .1 : .42);
						const routeOutlineColor = Cesium.Color.fromCssColorString(isActive ? "#f8fafc" : "#38bdf8").withAlpha(isActive ? .58 : isMuted ? .04 : .22);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bt, {
							name: `${route.journeyId}: ${route.fromCityId} to ${route.toCityId}`,
							show: showMapContent && isVisible,
							polyline: {
								arcType: Cesium.ArcType.NONE,
								clampToGround: false,
								material: new Cesium.PolylineOutlineMaterialProperty({
									color: routeColor,
									outlineColor: routeOutlineColor,
									outlineWidth: isActive ? 1.2 : .8
								}),
								positions: route.positions,
								width: isActive ? 4 : isMuted ? 1 : 2
							}
						}, route.id);
					}),
					mappedCustomRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bt, {
						name: route.title,
						show: showMapContent && route.visible !== false,
						polyline: {
							arcType: Cesium.ArcType.GEODESIC,
							clampToGround: true,
							material: new Cesium.PolylineOutlineMaterialProperty({
								color: Cesium.Color.fromCssColorString(route.color ?? "#f59e0b").withAlpha(.9),
								outlineColor: Cesium.Color.fromCssColorString("#fff7ed").withAlpha(.46),
								outlineWidth: 1
							}),
							positions: route.positions,
							width: 3
						}
					}, route.id)),
					null,
					mappedCities.map((city) => {
						const isSelected = city.id === selectedCityId;
						const isHoveredCountryCity = hoveredCountryId !== void 0 && city.countryId === hoveredCountryId;
						const isCountryCity = selectedCountryId !== void 0 && city.countryId === selectedCountryId;
						const accent = (city.countryId ? countryById[city.countryId] : void 0)?.accent ?? "#38bdf8";
						const visitCount = journeyVisitCounts[city.id] ?? 1;
						const isMuted = selectionMode !== "overview" && !isSelected && !isCountryCity;
						const corePixelSize = isCountryCity ? 12 : 7;
						const showHoverGlow = isHoveredCountryCity && !isSelected;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bt, {
							name: `${city.nameEn ?? city.nameZh ?? city.id} · ${visitCount} visit records`,
							show: showMapContent && (visibleCityIds?.has(city.id) ?? true),
							position: cityPosition(city.lng, city.lat),
							onClick: () => {
								if (isDrawingCustomRoute) addCityToCustomRoute(city);
								else onSelectCity(city.id);
							},
							billboard: showHoverGlow ? {
								color: Cesium.Color.WHITE,
								disableDepthTestDistance: Number.POSITIVE_INFINITY,
								height: 38,
								image: cityHoverMarkerImage(accent, corePixelSize),
								width: 38
							} : void 0,
							point: showHoverGlow ? void 0 : {
								color: Cesium.Color.fromCssColorString(accent).withAlpha(isMuted ? .28 : 1),
								disableDepthTestDistance: Number.POSITIVE_INFINITY,
								outlineColor: Cesium.Color.WHITE.withAlpha(isMuted ? .36 : .94),
								outlineWidth: isSelected ? 3 : 2,
								pixelSize: isSelected ? 18 : corePixelSize
							},
							label: {
								backgroundColor: Cesium.Color.fromCssColorString(isSelected ? accent : "#0f172a").withAlpha(isSelected ? .9 : .72),
								fillColor: Cesium.Color.WHITE,
								disableDepthTestDistance: Number.POSITIVE_INFINITY,
								font: isSelected ? "700 15px Inter, sans-serif" : "600 13px Inter, sans-serif",
								outlineColor: Cesium.Color.BLACK,
								outlineWidth: 2,
								pixelOffset: new Cesium.Cartesian2(0, -28),
								show: isSelected || isCountryCity,
								showBackground: true,
								style: Cesium.LabelStyle.FILL_AND_OUTLINE,
								text: city.nameEn ?? city.nameZh ?? city.id
							},
							ellipse: isSelected ? {
								height: 300,
								material: Cesium.Color.fromCssColorString(accent).withAlpha(.14),
								outline: true,
								outlineColor: Cesium.Color.fromCssColorString(accent).withAlpha(.88),
								semiMajorAxis: 42e3,
								semiMinorAxis: 42e3
							} : void 0
						}, city.id);
					}),
					activeDroneMediaItems.map((item, index) => {
						const isSelected = item.id === activeDroneMediaItemId;
						const itemNumber = String(index + 1).padStart(2, "0");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bt, {
							name: `${item.titleEn} ${item.fileName}`,
							show: showMapContent,
							position: droneMediaPosition(item),
							onClick: () => onSelectDroneMediaItem(item),
							billboard: {
								color: Cesium.Color.WHITE.withAlpha(isSelected ? 1 : .78),
								disableDepthTestDistance: Number.POSITIVE_INFINITY,
								height: isSelected ? 42 : 32,
								image: dronePinImage,
								scale: isSelected ? 1.08 : .92,
								width: isSelected ? 42 : 32
							},
							label: {
								backgroundColor: Cesium.Color.fromCssColorString(isSelected ? "#0ea5e9" : "#020617").withAlpha(isSelected ? .92 : .74),
								disableDepthTestDistance: Number.POSITIVE_INFINITY,
								fillColor: Cesium.Color.WHITE,
								font: isSelected ? "700 13px Inter, sans-serif" : "600 12px Inter, sans-serif",
								outlineColor: Cesium.Color.BLACK,
								outlineWidth: 2,
								pixelOffset: new Cesium.Cartesian2(0, -34),
								show: true,
								showBackground: true,
								style: Cesium.LabelStyle.FILL_AND_OUTLINE,
								text: `Drone ${itemNumber}`
							},
							point: {
								color: Cesium.Color.fromCssColorString(isSelected ? "#7dd3fc" : "#e0f2fe").withAlpha(.9),
								disableDepthTestDistance: Number.POSITIVE_INFINITY,
								outlineColor: Cesium.Color.WHITE.withAlpha(.95),
								outlineWidth: 2,
								pixelSize: isSelected ? 13 : 9
							}
						}, item.id);
					})
				]
			}),
			showTripEditor && tripTimelineTarget ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "atlas-trip-route-feed journey-view-section journey-timeline-section pointer-events-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "journey-section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "journey-kicker",
						children: "Latest first"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Trip timeline" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "journey-order-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Newest trips at the top" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "journey-timeline-rail",
					children: customRoutes.length > 0 ? [...customRoutes].sort((left, right) => (right.startDate ?? right.date ?? right.endDate ?? "").localeCompare(left.startDate ?? left.date ?? left.endDate ?? "")).map((route, index, orderedRoutes) => {
						const year = (route.startDate ?? route.date ?? route.endDate)?.slice(0, 4) ?? "未定";
						const previousRoute = orderedRoutes[index - 1];
						const previousYear = (previousRoute?.startDate ?? previousRoute?.date ?? previousRoute?.endDate)?.slice(0, 4) ?? "未定";
						const cityNames = route.points.map((point) => point.cityId ? cityById[point.cityId]?.nameEn ?? cityById[point.cityId]?.nameZh ?? point.cityId : `${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "journey-timeline-entry",
							children: [
								index === 0 || previousYear !== year ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "journey-year-marker",
									children: year
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "journey-timeline-node",
									style: { "--journey-accent": route.color ?? "#38bdf8" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "journey-timeline-card journey-timeline-card-compact",
									style: { "--journey-accent": route.color ?? "#38bdf8" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "journey-timeline-date",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: customRouteDateRange(route) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "journey-timeline-copy",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "journey-timeline-place",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: cityNames.join(" → ") })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "journey-timeline-country-line",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: route.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [route.points.length, " 个地点"] })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "journey-timeline-open",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {})
										})
									]
								})
							]
						}, `trip-card-${route.id}`);
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "atlas-trip-route-feed-empty",
						children: "保存路线后，它会按时间显示在这里。"
					})
				})]
			}), tripTimelineTarget) : null,
			showTripEditor && tripEditorTarget ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AtlasSidePanel, {
				className: `atlas-custom-route-editor atlas-trip-route-editor ${isTripEditorCollapsed ? "is-collapsed" : ""}`,
				eyebrow: `Trip · ${customRoutes.length} saved`,
				title: "自定义路线",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "atlas-local-editor-actions",
					children: [null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "atlas-trip-editor-toggle",
						type: "button",
						onClick: () => setIsTripEditorCollapsed((collapsed) => !collapsed),
						"aria-label": isTripEditorCollapsed ? "展开路线面板" : "收起路线面板",
						title: isTripEditorCollapsed ? "展开" : "收起",
						children: isTripEditorCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})]
				}),
				children: [
					isDrawingCustomRoute ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "atlas-custom-route-form",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "路线名称" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: customRouteTitle,
								onChange: (event) => setCustomRouteTitle(event.target.value),
								placeholder: "例如：东京到京都",
								disabled: customRouteBusy
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "日期范围" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "atlas-custom-route-date-range",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "开始日期",
										type: "date",
										value: customRouteStartDate,
										onChange: (event) => setCustomRouteStartDate(event.target.value),
										disabled: customRouteBusy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "至" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "结束日期",
										type: "date",
										value: customRouteEndDate,
										onChange: (event) => setCustomRouteEndDate(event.target.value),
										disabled: customRouteBusy
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "atlas-custom-route-form-row",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "颜色" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "color",
									value: customRouteColor,
									onChange: (event) => setCustomRouteColor(event.target.value),
									disabled: customRouteBusy
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "已有旅行点" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: selectedRouteCityId,
								onChange: (event) => setSelectedRouteCityId(event.target.value),
								disabled: customRouteBusy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "选择城市..."
								}), cities.filter((city) => city.lat !== null && city.lng !== null).map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: city.id,
									children: [
										city.nameEn ?? city.nameZh ?? city.id,
										" · ",
										countryById[city.countryId ?? ""]?.nameEn ?? ""
									]
								}, city.id))]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									const city = cityById[selectedRouteCityId];
									if (city) addCityToCustomRoute(city);
								},
								disabled: customRouteBusy || !selectedRouteCityId,
								children: "添加到路线"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [draftRoutePoints.length, " 个点 · 可从列表选择，或直接点击地图上的城市点"] }),
							draftRoutePoints.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "atlas-custom-route-points",
								children: draftRoutePoints.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setDraftRoutePoints((points) => points.filter((_, pointIndex) => pointIndex !== index)),
									title: "从路线移除",
									children: [
										index + 1,
										". ",
										point.cityId ? cityById[point.cityId]?.nameEn ?? cityById[point.cityId]?.nameZh ?? point.cityId : "旧坐标点",
										" ×"
									]
								}, `${point.cityId ?? `${point.lat}-${point.lng}`}-${index}`))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "atlas-custom-route-save",
								onClick: () => void saveCustomRoute(),
								disabled: customRouteBusy || draftRoutePoints.length < 2,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: customRouteBusy ? "保存中…" : "保存路线" })]
							})
						]
					}) : null,
					customRouteNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "atlas-custom-route-notice",
						role: "status",
						children: customRouteNotice
					}) : null,
					customRoutes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "atlas-custom-route-list atlas-country-list atlas-panel-body selector-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto",
						children: customRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "atlas-custom-route-row atlas-country-button",
							"data-selected": "false",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: route.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}),
									" ",
									customRouteDateRange(route)
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {}),
									" ",
									route.points.map((point) => point.cityId ? cityById[point.cityId]?.nameEn ?? cityById[point.cityId]?.nameZh ?? point.cityId : `${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}`).join(" → ")
								] })
							] }), null]
						}, route.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "atlas-custom-route-empty",
						children: "尚未保存自定义路线。"
					})
				]
			}), tripEditorTarget) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: cursorGlowRef,
				"aria-hidden": "true",
				className: "atlas-cursor-glow",
				"data-active": "false"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: cursorTrailRef,
				"aria-hidden": "true",
				className: "atlas-cursor-trail"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cesium-map-status pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-white/14 bg-slate-950/62 px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg backdrop-blur-2xl",
				children: [
					mappedCities.length,
					" mapped cities · ",
					mappedRoutes.length + mappedCustomRoutes.length,
					" route segments"
				]
			})
		]
	});
}
//#endregion
//#region src/components/LocationSearchField.tsx
function LocationSearchField({ label, placeholder, selected, search, onSelect, minQueryLength = 1, getMeta, searchOnSubmit = false }) {
	const listboxId = (0, import_react.useId)();
	const [query, setQuery] = (0, import_react.useState)(selected?.nameZh ?? "");
	const [results, setResults] = (0, import_react.useState)([]);
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const requestVersionRef = (0, import_react.useRef)(0);
	const activeControllerRef = (0, import_react.useRef)(void 0);
	const runSearch = (0, import_react.useCallback)((normalizedQuery, controller) => {
		const requestVersion = requestVersionRef.current + 1;
		requestVersionRef.current = requestVersion;
		setIsLoading(true);
		setNotice("");
		search(normalizedQuery, controller.signal).then((nextResults) => {
			if (requestVersionRef.current !== requestVersion) return;
			setResults(nextResults);
			setActiveIndex(0);
			setNotice(nextResults.length === 0 ? "没有找到匹配地点，请换一个名称或代码。" : "");
			setIsOpen(true);
		}).catch((error) => {
			if (controller.signal.aborted || requestVersionRef.current !== requestVersion) return;
			setResults([]);
			setNotice(error instanceof Error ? error.message : "地点检索暂时不可用。");
			setIsOpen(true);
		}).finally(() => {
			if (requestVersionRef.current === requestVersion) setIsLoading(false);
		});
	}, [search]);
	const submitSearch = () => {
		const normalizedQuery = query.trim();
		if (normalizedQuery.length < minQueryLength) {
			setNotice(`请至少输入 ${minQueryLength} 个字符。`);
			setIsOpen(true);
			return;
		}
		activeControllerRef.current?.abort();
		const controller = new AbortController();
		activeControllerRef.current = controller;
		runSearch(normalizedQuery, controller);
	};
	(0, import_react.useEffect)(() => {
		if (searchOnSubmit) return;
		if (selected && query === selected.nameZh) return;
		const normalizedQuery = query.trim();
		if (normalizedQuery.length < minQueryLength) return;
		activeControllerRef.current?.abort();
		const controller = new AbortController();
		activeControllerRef.current = controller;
		const timeout = window.setTimeout(() => {
			runSearch(normalizedQuery, controller);
		}, minQueryLength === 0 ? 80 : 280);
		return () => {
			window.clearTimeout(timeout);
			controller.abort();
		};
	}, [
		minQueryLength,
		query,
		runSearch,
		searchOnSubmit,
		selected
	]);
	const choose = (option) => {
		setQuery(option.nameZh);
		setResults([]);
		setNotice("");
		setIsOpen(false);
		onSelect(option);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "atlas-location-search",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: `${listboxId}-input`,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-location-search-input-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `${listboxId}-input`,
						type: "search",
						value: query,
						placeholder,
						autoComplete: "off",
						role: "combobox",
						"aria-autocomplete": "list",
						"aria-controls": listboxId,
						"aria-expanded": isOpen,
						"aria-activedescendant": isOpen && results[activeIndex] ? `${listboxId}-${results[activeIndex].id}` : void 0,
						onChange: (event) => {
							setQuery(event.target.value);
							if (event.target.value.trim().length < minQueryLength) {
								setResults([]);
								setNotice("");
								setIsLoading(false);
							}
							setIsOpen(true);
							onSelect(void 0);
						},
						onFocus: () => {
							if (results.length > 0 || notice) setIsOpen(true);
						},
						onBlur: () => window.setTimeout(() => setIsOpen(false), 100),
						onKeyDown: (event) => {
							if (event.key === "ArrowDown" && results.length > 0) {
								event.preventDefault();
								setIsOpen(true);
								setActiveIndex((index) => Math.min(index + 1, results.length - 1));
							}
							if (event.key === "ArrowUp" && results.length > 0) {
								event.preventDefault();
								setIsOpen(true);
								setActiveIndex((index) => Math.max(index - 1, 0));
							}
							if (event.key === "Enter" && isOpen && results[activeIndex]) {
								event.preventDefault();
								choose(results[activeIndex]);
							} else if (event.key === "Enter" && searchOnSubmit) {
								event.preventDefault();
								submitSearch();
							}
							if (event.key === "Escape") setIsOpen(false);
						}
					}),
					isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "atlas-location-search-spinner",
						"aria-label": "正在检索"
					}) : null,
					searchOnSubmit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "atlas-location-search-submit",
						onMouseDown: (event) => event.preventDefault(),
						onClick: submitSearch,
						children: "检索"
					}) : null
				]
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-location-search-selected",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selected.nameZh }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selected.nameEn }),
					getMeta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getMeta(selected) }) : null
				]
			}) : null,
			isOpen && (results.length > 0 || notice) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-location-search-results",
				id: listboxId,
				role: "listbox",
				children: [results.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					id: `${listboxId}-${option.id}`,
					type: "button",
					role: "option",
					"aria-selected": index === activeIndex,
					"data-active": index === activeIndex,
					onMouseDown: (event) => event.preventDefault(),
					onClick: () => choose(option),
					onMouseEnter: () => setActiveIndex(index),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "atlas-location-search-result-main",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: option.nameZh }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option.nameEn })]
					}), getMeta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "atlas-location-search-result-meta",
						children: getMeta(option)
					}) : null]
				}, option.id)), notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					children: notice
				}) : null]
			}) : null
		]
	});
}
//#endregion
//#region src/components/useFlipLayout.ts
function useFlipLayout(dependencyKey) {
	const containerRef = (0, import_react.useRef)(null);
	const previousRectsRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	(0, import_react.useLayoutEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const elements = Array.from(container.querySelectorAll("[data-flip-id]"));
		const nextRects = new Map(elements.map((element) => [element.dataset.flipId ?? "", element.getBoundingClientRect()]));
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) elements.forEach((element) => {
			const id = element.dataset.flipId ?? "";
			const previous = previousRectsRef.current.get(id);
			const next = nextRects.get(id);
			if (!previous || !next) return;
			const deltaX = previous.left - next.left;
			const deltaY = previous.top - next.top;
			if (Math.abs(deltaX) < .5 && Math.abs(deltaY) < .5) return;
			element.getAnimations().forEach((animation) => animation.cancel());
			element.animate([{ transform: `translate3d(${deltaX}px, ${deltaY}px, 0)` }, { transform: "translate3d(0, 0, 0)" }], {
				duration: 220,
				easing: "cubic-bezier(0.32, 0.72, 0, 1)"
			});
		});
		previousRectsRef.current = nextRects;
	}, [dependencyKey]);
	return containerRef;
}
//#endregion
//#region src/components/CountrySelector.tsx
function CountrySelector({ selectedCountryId, selectedCityId, activeDroneMediaCityId, globeDistance, imageryBrightness, imageryContrast, imagerySaturation, onBrightnessChange, onContrastChange, onHoverCountry, onResetImageryTuning, onSaturationChange, onSelectCountry, onSelectCity, onSelectDroneMedia, onDistanceChange, onResetView }) {
	const selectedCountry = selectedCountryId ? countries.find((country) => country.id === selectedCountryId) : void 0;
	const committedDistanceRef = (0, import_react.useRef)(globeDistance);
	const hasDraftDistanceChangeRef = (0, import_react.useRef)(false);
	const [isImageTuningOpen, setIsImageTuningOpen] = (0, import_react.useState)(false);
	const [isGlobeScaleOpen, setIsGlobeScaleOpen] = (0, import_react.useState)(true);
	const defaultCountryIds = (travelAtlasEditorState.countryOrder.length > 0 ? countries : [...countries].reverse()).map((country) => country.id);
	const [isEditingCountries, setIsEditingCountries] = (0, import_react.useState)(false);
	const [draftCountryIds, setDraftCountryIds] = (0, import_react.useState)(defaultCountryIds);
	const [draftHiddenCountryIds, setDraftHiddenCountryIds] = (0, import_react.useState)(travelAtlasEditorState.hiddenCountryIds);
	const [draggedCountryId, setDraggedCountryId] = (0, import_react.useState)();
	const [showAddCountry, setShowAddCountry] = (0, import_react.useState)(false);
	const [editorNotice, setEditorNotice] = (0, import_react.useState)("");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [selectedCountryOption, setSelectedCountryOption] = (0, import_react.useState)();
	const [countryVisitedDate, setCountryVisitedDate] = (0, import_react.useState)("");
	const countryDragPointerRef = (0, import_react.useRef)(void 0);
	const countriesById = new Map(countries.map((country) => [country.id, country]));
	const displayCountries = draftCountryIds.map((id) => countriesById.get(id)).filter(Boolean);
	const countryListRef = useFlipLayout(draftCountryIds.join("|"));
	const searchCountryOptions = (0, import_react.useCallback)(async (query, signal) => {
		return (await searchLocalCountries(query, signal)).filter((option) => !countries.some((country) => country.id === option.id));
	}, []);
	const restoreHiddenCountries = async () => {
		if (draftHiddenCountryIds.length === 0) return;
		setIsSaving(true);
		try {
			await updateLocalEditorState((current) => ({
				...current,
				hiddenCountryIds: []
			}));
			reloadAfterLocalSave();
		} catch (error) {
			setEditorNotice(error instanceof Error ? error.message : "恢复失败。");
			setIsSaving(false);
		}
	};
	const deleteHiddenCountries = async () => {
		if (draftHiddenCountryIds.length === 0) return;
		if (!window.confirm(`确定永久删除已隐藏的 ${draftHiddenCountryIds.length} 个国家吗？\n\n仅当这些国家的所有城市都没有照片或无人机影像时才能删除；已隐藏的媒体也必须先手动彻底删除。`)) return;
		setIsSaving(true);
		setEditorNotice("正在彻底删除已隐藏国家…");
		try {
			await updateLocalEditorState((current) => ({
				...current,
				hiddenCountryIds: [...new Set([...current.hiddenCountryIds, ...draftHiddenCountryIds])]
			}));
			await deleteHiddenLocalCountries(draftHiddenCountryIds);
			reloadAfterLocalSave();
		} catch (error) {
			setEditorNotice(error instanceof Error ? error.message : "删除失败。");
			setIsSaving(false);
		}
	};
	const addCountry = async (event) => {
		event.preventDefault();
		if (!selectedCountryOption) {
			setEditorNotice("请先从候选列表中选择一个国家。");
			return;
		}
		setIsSaving(true);
		setEditorNotice("正在创建国家…");
		try {
			await addLocalCountry(selectedCountryOption.countryCode, countryVisitedDate);
			reloadAfterLocalSave();
		} catch (error) {
			setEditorNotice(error instanceof Error ? error.message : "创建失败。");
			setIsSaving(false);
		}
	};
	const moveCountryAtPointer = (0, import_react.useCallback)((countryId, clientY) => {
		const container = countryListRef.current;
		if (!container) return;
		const containerRect = container.getBoundingClientRect();
		if (clientY < containerRect.top + 42) container.scrollTop -= 18;
		if (clientY > containerRect.bottom - 42) container.scrollTop += 18;
		const beforeId = Array.from(container.querySelectorAll("[data-country-sort-id]")).filter((row) => row.dataset.countrySortId !== countryId).find((row) => {
			const rect = row.getBoundingClientRect();
			return clientY < rect.top + rect.height / 2;
		})?.dataset.countrySortId;
		setDraftCountryIds((current) => {
			const next = current.filter((id) => id !== countryId);
			const targetIndex = beforeId ? next.indexOf(beforeId) : next.length;
			next.splice(targetIndex < 0 ? next.length : targetIndex, 0, countryId);
			return next.every((id, index) => id === current[index]) ? current : next;
		});
	}, [countryListRef]);
	const moveCountryByStep = (countryId, step) => {
		setDraftCountryIds((current) => {
			const currentIndex = current.indexOf(countryId);
			const nextIndex = Math.max(0, Math.min(current.length - 1, currentIndex + step));
			if (currentIndex < 0 || currentIndex === nextIndex) return current;
			const next = [...current];
			next.splice(currentIndex, 1);
			next.splice(nextIndex, 0, countryId);
			return next;
		});
	};
	(0, import_react.useEffect)(() => {
		if (!draggedCountryId) return;
		const handlePointerMove = (event) => {
			if (countryDragPointerRef.current !== event.pointerId) return;
			moveCountryAtPointer(draggedCountryId, event.clientY);
		};
		const finishPointerDrag = (event) => {
			if (countryDragPointerRef.current !== event.pointerId) return;
			countryDragPointerRef.current = void 0;
			setDraggedCountryId(void 0);
		};
		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", finishPointerDrag);
		window.addEventListener("pointercancel", finishPointerDrag);
		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", finishPointerDrag);
			window.removeEventListener("pointercancel", finishPointerDrag);
		};
	}, [draggedCountryId, moveCountryAtPointer]);
	(0, import_react.useEffect)(() => {
		committedDistanceRef.current = globeDistance;
		hasDraftDistanceChangeRef.current = false;
	}, [globeDistance]);
	const commitGlobeDistance = (distance) => {
		const hasChanged = Math.abs(distance - committedDistanceRef.current) > .001;
		if (!hasDraftDistanceChangeRef.current && !hasChanged) return;
		hasDraftDistanceChangeRef.current = false;
		committedDistanceRef.current = distance;
		onDistanceChange(distance);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AtlasSidePanel, {
		eyebrow: "Country Maps",
		title: "国家足迹",
		actions: null,
		children: [
			isEditingCountries && showAddCountry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "atlas-local-editor-form",
				onSubmit: addCountry,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "先创建国家；城市请在进入该国家后的 City Cards 中添加。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSearchField, {
						label: "国家名称",
						placeholder: "输入中文、English、CN…",
						selected: selectedCountryOption,
						search: searchCountryOptions,
						onSelect: setSelectedCountryOption,
						minQueryLength: 0,
						getMeta: (option) => `${option.countryCode}${option.region ? ` · ${option.region}` : ""}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "atlas-local-editor-date-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "首次到访日期" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "date",
							value: countryVisitedDate,
							onChange: (event) => setCountryVisitedDate(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isSaving || !selectedCountryOption,
						children: "确认添加国家"
					})
				]
			}) : null,
			isEditingCountries && draftHiddenCountryIds.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-local-editor-hidden-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "atlas-local-editor-restore",
					onClick: restoreHiddenCountries,
					disabled: isSaving,
					children: [
						"恢复已隐藏国家（",
						draftHiddenCountryIds.length,
						"）"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "atlas-local-editor-delete",
					onClick: deleteHiddenCountries,
					disabled: isSaving,
					children: "彻底删除国家"
				})]
			}) : null,
			editorNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "atlas-local-editor-notice",
				role: "status",
				children: editorNotice
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: countryListRef,
				className: "atlas-country-list atlas-panel-body selector-scrollbar min-h-0 flex-1 space-y-2 overflow-y-auto",
				children: displayCountries.map((country) => {
					if (!country) return null;
					const isSelected = country.id === selectedCountry?.id;
					const countryCities = getCitiesForCountry(country.id).filter((city) => !shouldHideCityFromNavigation(city));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-flip-id": country.id,
						"data-country-sort-id": country.id,
						className: "country-disclosure",
						"data-editing": isEditingCountries,
						"data-dragging": draggedCountryId === country.id,
						children: [
							isEditingCountries ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "atlas-local-editor-row-tools",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "atlas-local-editor-drag",
									"aria-label": `拖动${country.nameZh}排序`,
									title: "按住后直接上下拖动；方向键也可调整",
									onPointerDown: (event) => {
										if (event.button !== 0) return;
										event.preventDefault();
										countryDragPointerRef.current = event.pointerId;
										event.currentTarget.setPointerCapture(event.pointerId);
										setDraggedCountryId(country.id);
									},
									onPointerMove: (event) => {
										if (countryDragPointerRef.current !== event.pointerId) return;
										moveCountryAtPointer(country.id, event.clientY);
									},
									onPointerUp: (event) => {
										if (countryDragPointerRef.current !== event.pointerId) return;
										if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
										countryDragPointerRef.current = void 0;
										setDraggedCountryId(void 0);
									},
									onPointerCancel: () => {
										countryDragPointerRef.current = void 0;
										setDraggedCountryId(void 0);
									},
									onKeyDown: (event) => {
										if (event.key === "ArrowUp") {
											event.preventDefault();
											moveCountryByStep(country.id, -1);
										}
										if (event.key === "ArrowDown") {
											event.preventDefault();
											moveCountryByStep(country.id, 1);
										}
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "atlas-local-editor-hide",
									"aria-label": `隐藏${country.nameZh}`,
									title: "隐藏（保存前可撤销）",
									onClick: () => {
										if (!window.confirm(`从本地展示中隐藏“${country.nameZh}”？原始旅行记录不会删除。`)) return;
										setDraftCountryIds((current) => current.filter((id) => id !== country.id));
										setDraftHiddenCountryIds((current) => [...new Set([...current, country.id])]);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X$2, {})
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isSelected,
								"data-selected": isSelected,
								onClick: () => {
									if (!isEditingCountries) onSelectCountry(country.id);
								},
								onPointerEnter: (event) => {
									if (event.pointerType === "mouse") onHoverCountry(country.id);
								},
								onPointerLeave: (event) => {
									if (event.pointerType === "mouse") onHoverCountry(void 0);
								},
								style: { "--country-color": country.accent },
								className: `atlas-country-button group flex w-full items-center justify-between gap-3 rounded-full border px-3.5 py-2.5 text-left transition duration-300 ${isSelected ? "border-slate-950 bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.2)]" : "border-white/70 bg-white/55 text-slate-700 hover:-translate-y-0.5 hover:bg-white/85"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border shadow-sm ${isSelected ? "border-white/15 bg-white/12" : "border-white/80 bg-white/75"}`,
										"aria-hidden": "true",
										children: country.flagCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											alt: "",
											className: "h-full w-full object-cover",
											src: `https://flagcdn.com/w80/${country.flagCode}.png`
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base",
											children: country.flag ?? ""
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-sm font-semibold tracking-normal",
											children: country.nameZh
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: isSelected ? "block truncate text-xs text-slate-300" : "block truncate text-xs text-slate-400",
											children: country.nameEn
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-2.5 rounded-full shadow-[0_0_18px_var(--country-color)]",
									style: { backgroundColor: country.accent },
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "country-city-disclosure",
								"data-open": isSelected,
								"aria-hidden": !isSelected,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-h-0 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative ml-4 mt-2 space-y-1.5 border-l border-dashed border-slate-300/80 pb-1 pl-4 pr-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3 text-sky-600" }), "Visited cities"]
										}), countryCities.map((city, index) => {
											const isCitySelected = city.id === selectedCityId;
											const cityHasDroneMedia = hasDroneMedia(city.id);
											const isDroneMediaActive = city.id === activeDroneMediaCityId;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "country-city-item relative",
												style: { "--city-index": index },
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `absolute -left-[20px] top-1/2 size-2 -translate-y-1/2 rounded-full border shadow-sm ${isCitySelected ? "border-sky-500 bg-sky-500 shadow-[0_0_16px_rgba(14,165,233,0.48)]" : "border-white bg-slate-300"}`,
														"aria-hidden": "true"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														disabled: !isSelected,
														onClick: () => onSelectCity(city.id),
														"data-selected": isCitySelected,
														className: `atlas-city-button flex w-full items-center justify-between gap-2 rounded-full border px-3 py-2 text-left text-xs font-semibold transition duration-200 ${isCitySelected ? "border-sky-400 bg-sky-500 text-white shadow-[0_10px_26px_rgba(14,165,233,0.3)]" : "border-white/75 bg-white/64 text-slate-600 hover:border-sky-200 hover:bg-white/90 hover:text-slate-950"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "min-w-0 truncate",
															children: [
																city.nameZh,
																" ",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `atlas-city-name-en ${isCitySelected ? "text-sky-100" : "font-medium text-slate-400"}`,
																	children: city.nameEn
																})
															]
														}), cityHasDroneMedia ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "drone-city-indicator grid size-6 shrink-0 place-items-center rounded-full",
															title: "Drone media available",
															"aria-label": "Drone media available",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drone, { className: "size-3.5" })
														}) : null]
													})]
												}), isCitySelected && cityHasDroneMedia ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => onSelectDroneMedia(city.id),
													"data-active": isDroneMediaActive,
													className: "drone-media-entry ml-3 mt-1.5 flex w-[calc(100%-12px)] items-center gap-2 rounded-full border px-3 py-2 text-left text-[11px] font-semibold transition duration-200",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drone, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "truncate",
														children: `\u65e0\u4eba\u673a / Drone Media`
													})]
												}) : null]
											}, city.id);
										})]
									})
								})
							})
						]
					}, country.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-image-tuning atlas-panel-body mt-3 shrink-0 border-t",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `atlas-scale-heading flex items-center justify-between gap-3 ${isImageTuningOpen ? "mb-3" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-controls": "atlas-image-tuning-controls",
						"aria-expanded": isImageTuningOpen,
						className: "atlas-accordion-trigger flex min-w-0 flex-1 items-center justify-between gap-3 text-left",
						onClick: () => setIsImageTuningOpen((isOpen) => !isOpen),
						type: "button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-slate-500" }), "Map Tuning"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `atlas-accordion-chevron size-4 shrink-0 ${isImageTuningOpen ? "" : "rotate-180"}` })]
					}), isImageTuningOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Reset Earth image tuning",
						className: "atlas-scale-reset grid size-9 shrink-0 place-items-center rounded-lg border",
						onClick: onResetImageryTuning,
						title: "Reset Earth image tuning",
						type: "button",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "size-9 shrink-0"
					})]
				}), isImageTuningOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "atlas-accordion-content",
					id: "atlas-image-tuning-controls",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "atlas-image-control grid grid-cols-[68px_1fr_34px] items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saturation" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Earth imagery saturation",
									className: "atlas-image-slider atlas-slider w-full",
									max: "1.5",
									min: "0.5",
									step: "0.01",
									type: "range",
									value: imagerySaturation,
									onChange: (event) => onSaturationChange(Number(event.currentTarget.value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("output", { children: imagerySaturation.toFixed(2) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "atlas-image-control grid grid-cols-[68px_1fr_34px] items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contrast" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Earth imagery contrast",
									className: "atlas-image-slider atlas-slider w-full",
									max: "1.4",
									min: "0.7",
									step: "0.01",
									type: "range",
									value: imageryContrast,
									onChange: (event) => onContrastChange(Number(event.currentTarget.value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("output", { children: imageryContrast.toFixed(2) })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "atlas-image-control grid grid-cols-[68px_1fr_34px] items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brightness" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Earth imagery brightness",
									className: "atlas-image-slider atlas-slider w-full",
									max: "1.4",
									min: "0.4",
									step: "0.01",
									type: "range",
									value: imageryBrightness,
									onChange: (event) => onBrightnessChange(Number(event.currentTarget.value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("output", { children: imageryBrightness.toFixed(2) })
							]
						})
					]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-scale-panel atlas-panel-body mt-3 shrink-0 rounded-[22px] border border-white/70 bg-white/54 p-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `atlas-scale-heading flex items-center justify-between gap-3 ${isGlobeScaleOpen ? "mb-3" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-controls": "atlas-globe-scale-controls",
						"aria-expanded": isGlobeScaleOpen,
						className: "atlas-accordion-trigger flex min-w-0 flex-1 items-center justify-between gap-3 text-left",
						onClick: () => setIsGlobeScaleOpen((isOpen) => !isOpen),
						type: "button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-slate-500" }), "Globe Scale"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `atlas-accordion-chevron size-4 shrink-0 ${isGlobeScaleOpen ? "" : "rotate-180"}` })]
					}), isGlobeScaleOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Reset globe to overview",
						title: "Reset globe to overview",
						onClick: onResetView,
						className: "atlas-scale-reset grid size-9 shrink-0 place-items-center rounded-lg border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "size-9 shrink-0"
					})]
				}), isGlobeScaleOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "atlas-accordion-content",
					id: "atlas-globe-scale-controls",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						"aria-label": "Globe scale",
						className: "atlas-slider w-full",
						defaultValue: globeDistance,
						max: "3.25",
						min: "1",
						step: "0.05",
						type: "range",
						onInput: (event) => {
							const nextDistance = Number(event.currentTarget.value);
							hasDraftDistanceChangeRef.current = Math.abs(nextDistance - committedDistanceRef.current) > .001;
						},
						onKeyUp: (event) => commitGlobeDistance(Number(event.currentTarget.value)),
						onBlur: (event) => commitGlobeDistance(Number(event.currentTarget.value)),
						onPointerCancel: (event) => commitGlobeDistance(Number(event.currentTarget.value)),
						onPointerUp: (event) => commitGlobeDistance(Number(event.currentTarget.value))
					}, globeDistance), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-between text-[11px] font-medium text-slate-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "City" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Country" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "World" })
						]
					})]
				}) : null]
			})
		]
	});
}
//#endregion
//#region src/components/MeteorShowerButton.tsx
var reducedMotionQuery = "(prefers-reduced-motion: reduce)";
/**
* 底部栏「流星雨」按钮：点击触发 3 秒高密度流星（速度不变，仅数量增加）。
*/
function MeteorShowerButton() {
	const [reducedMotion, setReducedMotion] = (0, import_react.useState)(() => typeof window !== "undefined" && window.matchMedia(reducedMotionQuery).matches);
	const [justTriggered, setJustTriggered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia(reducedMotionQuery);
		const sync = (event) => setReducedMotion(event.matches);
		media.addEventListener("change", sync);
		return () => media.removeEventListener("change", sync);
	}, []);
	const trigger = () => {
		if (reducedMotion) return;
		requestMeteorShower();
		setJustTriggered(true);
		window.setTimeout(() => setJustTriggered(false), 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "atlas-dock-button atlas-meteor-shower-toggle pointer-events-auto",
		"aria-label": reducedMotion ? "流星雨（已随系统减少动态效果而禁用）" : "召唤 3 秒流星雨",
		title: reducedMotion ? "流星雨已禁用（prefers-reduced-motion）" : "召唤 3 秒流星雨",
		disabled: reducedMotion,
		"data-triggered": justTriggered ? "true" : "false",
		onClick: trigger,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "atlas-dock-button-icon",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 16 16",
				fill: "currentColor",
				stroke: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 2.6 C 9.6 6.3, 11.1 8.1, 13.5 8.1 C 11.1 8.1, 9.6 9.9, 8 13.6 C 6.4 9.9, 4.9 8.1, 2.5 8.1 C 4.9 8.1, 6.4 6.3, 8 2.6 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.0 0.3 C 3.8 2.1, 4.5 2.9, 5.6 2.9 C 4.5 2.9, 3.8 3.7, 3.0 5.5 C 2.2 3.7, 1.6 2.9, 0.4 2.9 C 1.6 2.9, 2.2 2.1, 3.0 0.3 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.6 11.1 C 3.2 12.4, 3.7 13.0, 4.5 13.0 C 3.7 13.0, 3.2 13.6, 2.6 14.9 C 2.0 13.6, 1.5 13.0, 0.7 13.0 C 1.5 13.0, 2.0 12.4, 2.6 11.1 Z" })
				]
			})
		})
	});
}
//#endregion
//#region src/components/MapSourceSwitcher.tsx
function MapSourceSwitcher({ value, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const shellRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return void 0;
		const closeOnPointerDown = (event) => {
			if (!shellRef.current?.contains(event.target)) setOpen(false);
		};
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("pointerdown", closeOnPointerDown);
		document.addEventListener("keydown", closeOnEscape);
		return () => {
			document.removeEventListener("pointerdown", closeOnPointerDown);
			document.removeEventListener("keydown", closeOnEscape);
		};
	}, [open]);
	const activeOption = mapSourceOptions.find((option) => option.id === value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: shellRef,
		className: "atlas-map-source-switcher",
		children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-map-source-menu",
			role: "menu",
			"aria-label": "选择地图图源",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "地图图源" }), mapSourceOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "menuitemradio",
				"aria-checked": option.id === value,
				"aria-disabled": !option.configured,
				"data-active": option.id === value ? "true" : "false",
				"data-configured": option.configured ? "true" : "false",
				disabled: !option.configured,
				onClick: () => {
					onChange(option.id);
					setOpen(false);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "atlas-map-source-status",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "atlas-map-source-copy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: option.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: option.configured ? option.description : "未配置 API Key" })]
					}),
					option.id === value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": "true" }) : null
				]
			}, option.id))]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "atlas-dock-button atlas-map-source-button pointer-events-auto",
			"aria-label": `切换地图图源，当前为${activeOption?.label ?? "本地低清"}`,
			"aria-expanded": open,
			title: `图源：${activeOption?.label ?? "本地低清"}`,
			onClick: () => setOpen((visible) => !visible),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { "aria-hidden": "true" })
		})]
	});
}
//#endregion
//#region src/components/MouseControlGuide.tsx
var controlCopy = {
	zh: [
		{
			action: "left",
			key: "左键",
			label: "拖动"
		},
		{
			action: "middle",
			key: "中键",
			label: "旋转"
		},
		{
			action: "wheel",
			key: "滚轮",
			label: "缩放"
		}
	],
	en: [
		{
			action: "left",
			key: "Left",
			label: "Drag"
		},
		{
			action: "middle",
			key: "Middle",
			label: "Rotate"
		},
		{
			action: "wheel",
			key: "Wheel",
			label: "Zoom"
		}
	]
};
function MouseIcon({ action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		className: "atlas-mouse-control-icon",
		viewBox: "0 0 28 36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "atlas-mouse-control-shell",
				d: "M14 2.5c-5.1 0-9 3.9-9 9v10.8c0 6.1 3.3 10.9 9 10.9s9-4.8 9-10.9V11.5c0-5.1-3.9-9-9-9Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "atlas-mouse-control-divider",
				d: "M5.4 11.6h17.2M14 2.9v8.7"
			}),
			action === "left" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "atlas-mouse-control-active",
				d: "M13.1 4.3v6H6.7c.5-3.3 3.1-5.6 6.4-6Z"
			}) : null,
			action === "middle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				className: "atlas-mouse-control-active atlas-mouse-control-wheel",
				x: "12",
				y: "5",
				width: "4",
				height: "7.5",
				rx: "2"
			}) : null,
			action === "wheel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				className: "atlas-mouse-control-active atlas-mouse-control-wheel",
				x: "12",
				y: "5",
				width: "4",
				height: "7.5",
				rx: "2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "atlas-mouse-control-motion",
				d: "m25 8 1.5-1.8L28 8M26.5 6.4v4.2m-1.5 2.1 1.5 1.8 1.5-1.8"
			})] }) : null
		]
	});
}
function MouseControlGuide({ language }) {
	const controls = controlCopy[language];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		"aria-label": language === "zh" ? "地图鼠标操作说明" : "Map mouse controls",
		className: "atlas-mouse-guide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-mouse-guide-heading",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: language === "zh" ? "鼠标操作" : "Mouse controls" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "atlas-mouse-guide-line" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "atlas-mouse-guide-grid",
			children: controls.map((control) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-mouse-guide-item",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseIcon, { action: control.action }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "atlas-mouse-guide-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: control.key }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: control.label })]
				})]
			}, control.action))
		})]
	});
}
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/starmap/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region node_modules/exifr/dist/full.esm.mjs
var e = "undefined" != typeof self ? self : global;
var t = "undefined" != typeof navigator, i = t && "undefined" == typeof HTMLImageElement, n = !("undefined" == typeof global || "undefined" == typeof process || !process.versions || !process.versions.node), s = e.Buffer, r = e.BigInt, a = !!s, o = (e) => e;
function l(e, t = o) {
	if (n) try {
		return "function" == typeof __require ? Promise.resolve(t(__require(e))) : __vitePreload(() => import(
			/* webpackIgnore: true */
			e
).then(t), []);
	} catch (t) {
		console.warn(`Couldn't load ${e}`);
	}
}
var h = e.fetch;
var u = (e) => h = e;
if (!e.fetch) {
	const e = l("http", ((e) => e)), t = l("https", ((e) => e)), i = (n, { headers: s } = {}) => new Promise((async (r, a) => {
		let { port: o, hostname: l, pathname: h, protocol: u, search: c } = new URL(n);
		const f = {
			method: "GET",
			hostname: l,
			path: encodeURI(h) + c,
			headers: s
		};
		"" !== o && (f.port = Number(o));
		const d = ("https:" === u ? await t : await e).request(f, ((e) => {
			if (301 === e.statusCode || 302 === e.statusCode) return i(new URL(e.headers.location, n).toString(), { headers: s }).then(r).catch(a);
			r({
				status: e.statusCode,
				arrayBuffer: () => new Promise(((t) => {
					let i = [];
					e.on("data", ((e) => i.push(e))), e.on("end", (() => t(Buffer.concat(i))));
				}))
			});
		}));
		d.on("error", a), d.end();
	}));
	u(i);
}
function c(e, t, i) {
	return t in e ? Object.defineProperty(e, t, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = i, e;
}
var f = (e) => p(e) ? void 0 : e, d = (e) => void 0 !== e;
function p(e) {
	return void 0 === e || (e instanceof Map ? 0 === e.size : 0 === Object.values(e).filter(d).length);
}
function g(e) {
	let t = new Error(e);
	throw delete t.stack, t;
}
function m(e) {
	return "" === (e = function(e) {
		for (; e.endsWith("\0");) e = e.slice(0, -1);
		return e;
	}(e).trim()) ? void 0 : e;
}
function S(e) {
	let t = function(e) {
		let t = 0;
		return e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048;
	}(e);
	return e.jfif.enabled && (t += 50), e.xmp.enabled && (t += 2e4), e.iptc.enabled && (t += 14e3), e.icc.enabled && (t += 6e3), t;
}
var C = (e) => String.fromCharCode.apply(null, e), y = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
function b(e) {
	return y ? y.decode(e) : a ? Buffer.from(e).toString("utf8") : decodeURIComponent(escape(C(e)));
}
var I = class I {
	static from(e, t) {
		return e instanceof this && e.le === t ? e : new I(e, void 0, void 0, t);
	}
	constructor(e, t = 0, i, n) {
		if ("boolean" == typeof n && (this.le = n), Array.isArray(e) && (e = new Uint8Array(e)), 0 === e) this.byteOffset = 0, this.byteLength = 0;
		else if (e instanceof ArrayBuffer) {
			void 0 === i && (i = e.byteLength - t);
			let n = new DataView(e, t, i);
			this._swapDataView(n);
		} else if (e instanceof Uint8Array || e instanceof DataView || e instanceof I) {
			void 0 === i && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && g("Creating view outside of available memory in ArrayBuffer");
			let n = new DataView(e.buffer, t, i);
			this._swapDataView(n);
		} else if ("number" == typeof e) {
			let t = new DataView(new ArrayBuffer(e));
			this._swapDataView(t);
		} else g("Invalid input argument for BufferView: " + e);
	}
	_swapArrayBuffer(e) {
		this._swapDataView(new DataView(e));
	}
	_swapBuffer(e) {
		this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
	}
	_swapDataView(e) {
		this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
	}
	_lengthToEnd(e) {
		return this.byteLength - e;
	}
	set(e, t, i = I) {
		return e instanceof DataView || e instanceof I ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || g("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
	}
	subarray(e, t) {
		return t = t || this._lengthToEnd(e), new I(this, e, t);
	}
	toUint8() {
		return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
	}
	getUint8Array(e, t) {
		return new Uint8Array(this.buffer, this.byteOffset + e, t);
	}
	getString(e = 0, t = this.byteLength) {
		return b(this.getUint8Array(e, t));
	}
	getLatin1String(e = 0, t = this.byteLength) {
		return C(this.getUint8Array(e, t));
	}
	getUnicodeString(e = 0, t = this.byteLength) {
		const i = [];
		for (let n = 0; n < t && e + n < this.byteLength; n += 2) i.push(this.getUint16(e + n));
		return C(i);
	}
	getInt8(e) {
		return this.dataView.getInt8(e);
	}
	getUint8(e) {
		return this.dataView.getUint8(e);
	}
	getInt16(e, t = this.le) {
		return this.dataView.getInt16(e, t);
	}
	getInt32(e, t = this.le) {
		return this.dataView.getInt32(e, t);
	}
	getUint16(e, t = this.le) {
		return this.dataView.getUint16(e, t);
	}
	getUint32(e, t = this.le) {
		return this.dataView.getUint32(e, t);
	}
	getFloat32(e, t = this.le) {
		return this.dataView.getFloat32(e, t);
	}
	getFloat64(e, t = this.le) {
		return this.dataView.getFloat64(e, t);
	}
	getFloat(e, t = this.le) {
		return this.dataView.getFloat32(e, t);
	}
	getDouble(e, t = this.le) {
		return this.dataView.getFloat64(e, t);
	}
	getUintBytes(e, t, i) {
		switch (t) {
			case 1: return this.getUint8(e, i);
			case 2: return this.getUint16(e, i);
			case 4: return this.getUint32(e, i);
			case 8: return this.getUint64 && this.getUint64(e, i);
		}
	}
	getUint(e, t, i) {
		switch (t) {
			case 8: return this.getUint8(e, i);
			case 16: return this.getUint16(e, i);
			case 32: return this.getUint32(e, i);
			case 64: return this.getUint64 && this.getUint64(e, i);
		}
	}
	toString(e) {
		return this.dataView.toString(e, this.constructor.name);
	}
	ensureChunk() {}
};
function P(e, t) {
	g(`${e} '${t}' was not loaded, try using full build of exifr.`);
}
var k = class extends Map {
	constructor(e) {
		super(), this.kind = e;
	}
	get(e, t) {
		return this.has(e) || P(this.kind, e), t && (e in t || function(e, t) {
			g(`Unknown ${e} '${t}'.`);
		}(this.kind, e), t[e].enabled || P(this.kind, e)), super.get(e);
	}
	keyList() {
		return Array.from(this.keys());
	}
};
var w = new k("file parser"), T = new k("segment parser"), A = new k("file reader");
function D(e, n) {
	return "string" == typeof e ? O(e, n) : t && !i && e instanceof HTMLImageElement ? O(e.src, n) : e instanceof Uint8Array || e instanceof ArrayBuffer || e instanceof DataView ? new I(e) : t && e instanceof Blob ? x(e, n, "blob", R) : void g("Invalid input argument");
}
function O(e, i) {
	return (s = e).startsWith("data:") || s.length > 1e4 ? v(e, i, "base64") : n && e.includes("://") ? x(e, i, "url", M) : n ? v(e, i, "fs") : t ? x(e, i, "url", M) : void g("Invalid input argument");
	var s;
}
async function x(e, t, i, n) {
	return A.has(i) ? v(e, t, i) : n ? async function(e, t) {
		return new I(await t(e));
	}(e, n) : void g(`Parser ${i} is not loaded`);
}
async function v(e, t, i) {
	let n = new (A.get(i))(e, t);
	return await n.read(), n;
}
var M = (e) => h(e).then(((e) => e.arrayBuffer())), R = (e) => new Promise(((t, i) => {
	let n = new FileReader();
	n.onloadend = () => t(n.result || /* @__PURE__ */ new ArrayBuffer()), n.onerror = i, n.readAsArrayBuffer(e);
}));
var L = class extends Map {
	get tagKeys() {
		return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
	}
	get tagValues() {
		return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
	}
};
function U(e, t, i) {
	let n = new L();
	for (let [e, t] of i) n.set(e, t);
	if (Array.isArray(t)) for (let i of t) e.set(i, n);
	else e.set(t, n);
	return n;
}
function F(e, t, i) {
	let n, s = e.get(t);
	for (n of i) s.set(n[0], n[1]);
}
var E = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = [
	"chunked",
	"firstChunkSize",
	"firstChunkSizeNode",
	"firstChunkSizeBrowser",
	"chunkSize",
	"chunkLimit"
], V = [
	"jfif",
	"xmp",
	"icc",
	"iptc",
	"ihdr"
], z = ["tiff", ...V], H = [
	"ifd0",
	"ifd1",
	"exif",
	"gps",
	"interop"
], j = [...z, ...H], W = ["makerNote", "userComment"], K = [
	"translateKeys",
	"translateValues",
	"reviveValues",
	"multiSegment"
], X = [
	...K,
	"sanitize",
	"mergeOutput",
	"silentErrors"
];
var _ = class {
	get translate() {
		return this.translateKeys || this.translateValues || this.reviveValues;
	}
};
var Y = class extends _ {
	get needed() {
		return this.enabled || this.deps.size > 0;
	}
	constructor(e, t, i, n) {
		if (super(), c(this, "enabled", !1), c(this, "skip", /* @__PURE__ */ new Set()), c(this, "pick", /* @__PURE__ */ new Set()), c(this, "deps", /* @__PURE__ */ new Set()), c(this, "translateKeys", !1), c(this, "translateValues", !1), c(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(n), this.canBeFiltered = H.includes(e), this.canBeFiltered && (this.dict = E.get(e)), void 0 !== i) if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
		else if ("object" == typeof i) {
			if (this.enabled = !0, this.parse = !1 !== i.parse, this.canBeFiltered) {
				let { pick: e, skip: t } = i;
				e && e.length > 0 && this.translateTagSet(e, this.pick), t && t.length > 0 && this.translateTagSet(t, this.skip);
			}
			this.applyInheritables(i);
		} else !0 === i || !1 === i ? this.parse = this.enabled = i : g(`Invalid options argument: ${i}`);
	}
	applyInheritables(e) {
		let t, i;
		for (t of K) i = e[t], void 0 !== i && (this[t] = i);
	}
	translateTagSet(e, t) {
		if (this.dict) {
			let i, n, { tagKeys: s, tagValues: r } = this.dict;
			for (i of e) "string" == typeof i ? (n = r.indexOf(i), -1 === n && (n = s.indexOf(Number(i))), -1 !== n && t.add(Number(s[n]))) : t.add(i);
		} else for (let i of e) t.add(i);
	}
	finalizeFilters() {
		!this.enabled && this.deps.size > 0 ? (this.enabled = !0, ee(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ee(this.pick, this.deps);
	}
};
var $ = {
	jfif: !1,
	tiff: !0,
	xmp: !1,
	icc: !1,
	iptc: !1,
	ifd0: !0,
	ifd1: !1,
	exif: !0,
	gps: !0,
	interop: !1,
	ihdr: void 0,
	makerNote: !1,
	userComment: !1,
	multiSegment: !1,
	skip: [],
	pick: [],
	translateKeys: !0,
	translateValues: !0,
	reviveValues: !0,
	sanitize: !0,
	mergeOutput: !0,
	silentErrors: !0,
	chunked: !0,
	firstChunkSize: void 0,
	firstChunkSizeNode: 512,
	firstChunkSizeBrowser: 65536,
	chunkSize: 65536,
	chunkLimit: 5
}, J = /* @__PURE__ */ new Map();
var q = class extends _ {
	static useCached(e) {
		let t = J.get(e);
		return void 0 !== t || (t = new this(e), J.set(e, t)), t;
	}
	constructor(e) {
		super(), !0 === e ? this.setupFromTrue() : void 0 === e ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : "object" == typeof e ? this.setupFromObject(e) : g(`Invalid options argument ${e}`), void 0 === this.firstChunkSize && (this.firstChunkSize = t ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
	}
	setupFromUndefined() {
		let e;
		for (e of G) this[e] = $[e];
		for (e of X) this[e] = $[e];
		for (e of W) this[e] = $[e];
		for (e of j) this[e] = new Y(e, $[e], void 0, this);
	}
	setupFromTrue() {
		let e;
		for (e of G) this[e] = $[e];
		for (e of X) this[e] = $[e];
		for (e of W) this[e] = !0;
		for (e of j) this[e] = new Y(e, !0, void 0, this);
	}
	setupFromArray(e) {
		let t;
		for (t of G) this[t] = $[t];
		for (t of X) this[t] = $[t];
		for (t of W) this[t] = $[t];
		for (t of j) this[t] = new Y(t, !1, void 0, this);
		this.setupGlobalFilters(e, void 0, H);
	}
	setupFromObject(e) {
		let t;
		for (t of (H.ifd0 = H.ifd0 || H.image, H.ifd1 = H.ifd1 || H.thumbnail, Object.assign(this, e), G)) this[t] = Z(e[t], $[t]);
		for (t of X) this[t] = Z(e[t], $[t]);
		for (t of W) this[t] = Z(e[t], $[t]);
		for (t of z) this[t] = new Y(t, $[t], e[t], this);
		for (t of H) this[t] = new Y(t, $[t], e[t], this.tiff);
		this.setupGlobalFilters(e.pick, e.skip, H, j), !0 === e.tiff ? this.batchEnableWithBool(H, !0) : !1 === e.tiff ? this.batchEnableWithUserValue(H, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, H) : "object" == typeof e.tiff && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, H);
	}
	batchEnableWithBool(e, t) {
		for (let i of e) this[i].enabled = t;
	}
	batchEnableWithUserValue(e, t) {
		for (let i of e) {
			let e = t[i];
			this[i].enabled = !1 !== e && void 0 !== e;
		}
	}
	setupGlobalFilters(e, t, i, n = i) {
		if (e && e.length) {
			for (let e of n) this[e].enabled = !1;
			let t = Q(e, i);
			for (let [e, i] of t) ee(this[e].pick, i), this[e].enabled = !0;
		} else if (t && t.length) {
			let e = Q(t, i);
			for (let [t, i] of e) ee(this[t].skip, i);
		}
	}
	filterNestedSegmentTags() {
		let { ifd0: e, exif: t, xmp: i, iptc: n, icc: s } = this;
		this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), n.enabled || e.skip.add(33723), s.enabled || e.skip.add(34675);
	}
	traverseTiffDependencyTree() {
		let { ifd0: e, exif: t, gps: i, interop: n } = this;
		n.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = H.some(((e) => !0 === this[e].enabled)) || this.makerNote || this.userComment;
		for (let e of H) this[e].finalizeFilters();
	}
	get onlyTiff() {
		return !V.map(((e) => this[e].enabled)).some(((e) => !0 === e)) && this.tiff.enabled;
	}
	checkLoadedPlugins() {
		for (let e of z) this[e].enabled && !T.has(e) && P("segment parser", e);
	}
};
function Q(e, t) {
	let i, n, s, r, a = [];
	for (s of t) {
		for (r of (i = E.get(s), n = [], i)) (e.includes(r[0]) || e.includes(r[1])) && n.push(r[0]);
		n.length && a.push([s, n]);
	}
	return a;
}
function Z(e, t) {
	return void 0 !== e ? e : void 0 !== t ? t : void 0;
}
function ee(e, t) {
	for (let i of t) e.add(i);
}
c(q, "default", $);
var te = class {
	constructor(e) {
		c(this, "parsers", {}), c(this, "output", {}), c(this, "errors", []), c(this, "pushToErrors", ((e) => this.errors.push(e))), this.options = q.useCached(e);
	}
	async read(e) {
		this.file = await D(e, this.options);
	}
	setup() {
		if (this.fileParser) return;
		let { file: e } = this, t = e.getUint16(0);
		for (let [i, n] of w) if (n.canHandle(e, t)) return this.fileParser = new n(this.options, this.file, this.parsers), e[i] = !0;
		this.file.close && this.file.close(), g("Unknown file format");
	}
	async parse() {
		let { output: e, errors: t } = this;
		return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), f(e);
	}
	async executeParsers() {
		let { output: e } = this;
		await this.fileParser.parse();
		let t = Object.values(this.parsers).map((async (t) => {
			let i = await t.parse();
			t.assignToOutput(e, i);
		}));
		this.options.silentErrors && (t = t.map(((e) => e.catch(this.pushToErrors)))), await Promise.all(t);
	}
	async extractThumbnail() {
		this.setup();
		let { options: e, file: t } = this, i = T.get("tiff", e);
		var n;
		if (t.tiff ? n = {
			start: 0,
			type: "tiff"
		} : t.jpeg && (n = await this.fileParser.getOrFindSegment("tiff")), void 0 === n) return;
		let s = await this.fileParser.ensureSegmentChunk(n), a = await (this.parsers.tiff = new i(s, e, t)).extractThumbnail();
		return t.close && t.close(), a;
	}
};
async function ie(e, t) {
	let i = new te(t);
	return await i.read(e), i.parse();
}
var ne = Object.freeze({
	__proto__: null,
	parse: ie,
	Exifr: te,
	fileParsers: w,
	segmentParsers: T,
	fileReaders: A,
	tagKeys: E,
	tagValues: B,
	tagRevivers: N,
	createDictionary: U,
	extendDictionary: F,
	fetchUrlAsArrayBuffer: M,
	readBlobAsArrayBuffer: R,
	chunkedProps: G,
	otherSegments: V,
	segments: z,
	tiffBlocks: H,
	segmentsAndBlocks: j,
	tiffExtractables: W,
	inheritables: K,
	allFormatters: X,
	Options: q
});
var se = class {
	constructor(e, t, i) {
		c(this, "errors", []), c(this, "ensureSegmentChunk", (async (e) => {
			let t = e.start, i = e.size || 65536;
			if (this.file.chunked) if (this.file.available(t, i)) e.chunk = this.file.subarray(t, i);
			else try {
				e.chunk = await this.file.readChunk(t, i);
			} catch (t) {
				g(`Couldn't read segment: ${JSON.stringify(e)}. ${t.message}`);
			}
			else this.file.byteLength > t + i ? e.chunk = this.file.subarray(t, i) : void 0 === e.size ? e.chunk = this.file.subarray(t) : g("Segment unreachable: " + JSON.stringify(e));
			return e.chunk;
		})), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = i;
	}
	injectSegment(e, t) {
		this.options[e].enabled && this.createParser(e, t);
	}
	createParser(e, t) {
		let i = new (T.get(e))(t, this.options, this.file);
		return this.parsers[e] = i;
	}
	createParsers(e) {
		for (let t of e) {
			let { type: e, chunk: i } = t, n = this.options[e];
			if (n && n.enabled) {
				let t = this.parsers[e];
				t && t.append || t || this.createParser(e, i);
			}
		}
	}
	async readSegments(e) {
		let t = e.map(this.ensureSegmentChunk);
		await Promise.all(t);
	}
};
var re = class {
	static findPosition(e, t) {
		let i = e.getUint16(t + 2) + 2, n = "function" == typeof this.headerLength ? this.headerLength(e, t, i) : this.headerLength, s = t + n, r = i - n;
		return {
			offset: t,
			length: i,
			headerLength: n,
			start: s,
			size: r,
			end: s + r
		};
	}
	static parse(e, t = {}) {
		return new this(e, new q({ [this.type]: t }), e).parse();
	}
	normalizeInput(e) {
		return e instanceof I ? e : new I(e);
	}
	constructor(e, t = {}, i) {
		c(this, "errors", []), c(this, "raw", /* @__PURE__ */ new Map()), c(this, "handleError", ((e) => {
			if (!this.options.silentErrors) throw e;
			this.errors.push(e.message);
		})), this.chunk = this.normalizeInput(e), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
	}
	translate() {
		this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
	}
	get output() {
		return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
	}
	translateBlock(e, t) {
		let i = N.get(t), n = B.get(t), s = E.get(t), r = this.options[t], a = r.reviveValues && !!i, o = r.translateValues && !!n, l = r.translateKeys && !!s, h = {};
		for (let [t, r] of e) a && i.has(t) ? r = i.get(t)(r) : o && n.has(t) && (r = this.translateValue(r, n.get(t))), l && s.has(t) && (t = s.get(t) || t), h[t] = r;
		return h;
	}
	translateValue(e, t) {
		return t[e] || t.DEFAULT || e;
	}
	assignToOutput(e, t) {
		this.assignObjectToOutput(e, this.constructor.type, t);
	}
	assignObjectToOutput(e, t, i) {
		if (this.globalOptions.mergeOutput) return Object.assign(e, i);
		e[t] ? Object.assign(e[t], i) : e[t] = i;
	}
};
c(re, "headerLength", 4), c(re, "type", void 0), c(re, "multiSegment", !1), c(re, "canHandle", (() => !1));
function ae(e) {
	return 192 === e || 194 === e || 196 === e || 219 === e || 221 === e || 218 === e || 254 === e;
}
function oe(e) {
	return e >= 224 && e <= 239;
}
function le(e, t, i) {
	for (let [n, s] of T) if (s.canHandle(e, t, i)) return n;
}
var he = class extends se {
	constructor(...e) {
		super(...e), c(this, "appSegments", []), c(this, "jpegSegments", []), c(this, "unknownSegments", []);
	}
	static canHandle(e, t) {
		return 65496 === t;
	}
	async parse() {
		await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
	}
	setupSegmentFinderArgs(e) {
		!0 === e ? (this.findAll = !0, this.wanted = new Set(T.keyList())) : (e = void 0 === e ? T.keyList().filter(((e) => this.options[e].enabled)) : e.filter(((e) => this.options[e].enabled && T.has(e))), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
	}
	async findAppSegments(e = 0, t) {
		this.setupSegmentFinderArgs(t);
		let { file: i, findAll: n, wanted: s, remaining: r } = this;
		if (!n && this.file.chunked && (n = Array.from(s).some(((e) => {
			let t = T.get(e), i = this.options[e];
			return t.multiSegment && i.multiSegment;
		})), n && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
			let t = !1;
			for (; r.size > 0 && !t && (i.canReadNextChunk || this.unfinishedMultiSegment);) {
				let { nextChunkOffset: n } = i, s = this.appSegments.some(((e) => !this.file.available(e.offset || e.start, e.length || e.size)));
				if (t = e > n && !s ? !await i.readNextChunk(e) : !await i.readNextChunk(n), void 0 === (e = this.findAppSegmentsInRange(e, i.byteLength))) return;
			}
		}
	}
	findAppSegmentsInRange(e, t) {
		t -= 2;
		let i, n, s, r, a, o, { file: l, findAll: h, wanted: u, remaining: c, options: f } = this;
		for (; e < t; e++) if (255 === l.getUint8(e)) {
			if (i = l.getUint8(e + 1), oe(i)) {
				if (n = l.getUint16(e + 2), s = le(l, e, n), s && u.has(s) && (r = T.get(s), a = r.findPosition(l, e), o = f[s], a.type = s, this.appSegments.push(a), !h && (r.multiSegment && o.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || c.delete(s)) : c.delete(s), 0 === c.size))) break;
				f.recordUnknownSegments && (a = re.findPosition(l, e), a.marker = i, this.unknownSegments.push(a)), e += n + 1;
			} else if (ae(i)) {
				if (n = l.getUint16(e + 2), 218 === i && !1 !== f.stopAfterSos) return;
				f.recordJpegSegments && this.jpegSegments.push({
					offset: e,
					length: n,
					marker: i
				}), e += n + 1;
			}
		}
		return e;
	}
	mergeMultiSegments() {
		if (!this.appSegments.some(((e) => e.multiSegment))) return;
		let e = function(e, t) {
			let i, n, s, r = /* @__PURE__ */ new Map();
			for (let a = 0; a < e.length; a++) i = e[a], n = i[t], r.has(n) ? s = r.get(n) : r.set(n, s = []), s.push(i);
			return Array.from(r);
		}(this.appSegments, "type");
		this.mergedAppSegments = e.map((([e, t]) => {
			let i = T.get(e, this.options);
			if (i.handleMultiSegments) return {
				type: e,
				chunk: i.handleMultiSegments(t)
			};
			return t[0];
		}));
	}
	getSegment(e) {
		return this.appSegments.find(((t) => t.type === e));
	}
	async getOrFindSegment(e) {
		let t = this.getSegment(e);
		return void 0 === t && (await this.findAppSegments(0, [e]), t = this.getSegment(e)), t;
	}
};
c(he, "type", "jpeg"), w.set("jpeg", he);
var ue = [
	void 0,
	1,
	1,
	2,
	4,
	8,
	1,
	1,
	2,
	4,
	8,
	4,
	8,
	4
];
var ce = class extends re {
	parseHeader() {
		var e = this.chunk.getUint16();
		18761 === e ? this.le = !0 : 19789 === e && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
	}
	parseTags(e, t, i = /* @__PURE__ */ new Map()) {
		let { pick: n, skip: s } = this.options[t];
		n = new Set(n);
		let r = n.size > 0, a = 0 === s.size, o = this.chunk.getUint16(e);
		e += 2;
		for (let l = 0; l < o; l++) {
			let o = this.chunk.getUint16(e);
			if (r) {
				if (n.has(o) && (i.set(o, this.parseTag(e, o, t)), n.delete(o), 0 === n.size)) break;
			} else !a && s.has(o) || i.set(o, this.parseTag(e, o, t));
			e += 12;
		}
		return i;
	}
	parseTag(e, t, i) {
		let { chunk: n } = this, s = n.getUint16(e + 2), r = n.getUint32(e + 4), a = ue[s];
		if (a * r <= 4 ? e += 8 : e = n.getUint32(e + 8), (s < 1 || s > 13) && g(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e}`), e > n.byteLength && g(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e} is outside of chunk size ${n.byteLength}`), 1 === s) return n.getUint8Array(e, r);
		if (2 === s) return m(n.getString(e, r));
		if (7 === s) return n.getUint8Array(e, r);
		if (1 === r) return this.parseTagValue(s, e);
		{
			let t = new (function(e) {
				switch (e) {
					case 1: return Uint8Array;
					case 3: return Uint16Array;
					case 4: return Uint32Array;
					case 5: return Array;
					case 6: return Int8Array;
					case 8: return Int16Array;
					case 9: return Int32Array;
					case 10: return Array;
					case 11: return Float32Array;
					case 12: return Float64Array;
					default: return Array;
				}
			}(s))(r), i = a;
			for (let n = 0; n < r; n++) t[n] = this.parseTagValue(s, e), e += i;
			return t;
		}
	}
	parseTagValue(e, t) {
		let { chunk: i } = this;
		switch (e) {
			case 1: return i.getUint8(t);
			case 3: return i.getUint16(t);
			case 4: return i.getUint32(t);
			case 5: return i.getUint32(t) / i.getUint32(t + 4);
			case 6: return i.getInt8(t);
			case 8: return i.getInt16(t);
			case 9: return i.getInt32(t);
			case 10: return i.getInt32(t) / i.getInt32(t + 4);
			case 11: return i.getFloat(t);
			case 12: return i.getDouble(t);
			case 13: return i.getUint32(t);
			default: g(`Invalid tiff type ${e}`);
		}
	}
};
var fe = class extends ce {
	static canHandle(e, t) {
		return 225 === e.getUint8(t + 1) && 1165519206 === e.getUint32(t + 4) && 0 === e.getUint16(t + 8);
	}
	async parse() {
		this.parseHeader();
		let { options: e } = this;
		return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
	}
	safeParse(e) {
		let t = this[e]();
		return void 0 !== t.catch && (t = t.catch(this.handleError)), t;
	}
	findIfd0Offset() {
		void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
	}
	findIfd1Offset() {
		if (void 0 === this.ifd1Offset) {
			this.findIfd0Offset();
			let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
			this.ifd1Offset = this.chunk.getUint32(t);
		}
	}
	parseBlock(e, t) {
		let i = /* @__PURE__ */ new Map();
		return this[t] = i, this.parseTags(e, t, i), i;
	}
	async parseIfd0Block() {
		if (this.ifd0) return;
		let { file: e } = this;
		this.findIfd0Offset(), this.ifd0Offset < 8 && g("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && g(`IFD0 offset points to outside of file.\nthis.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, S(this.options));
		let t = this.parseBlock(this.ifd0Offset, "ifd0");
		return 0 !== t.size ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
	}
	async parseExifBlock() {
		if (this.exif) return;
		if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
		this.file.tiff && await this.file.ensureChunk(this.exifOffset, S(this.options));
		let e = this.parseBlock(this.exifOffset, "exif");
		return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
	}
	unpack(e, t) {
		let i = e.get(t);
		i && 1 === i.length && e.set(t, i[0]);
	}
	async parseGpsBlock() {
		if (this.gps) return;
		if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
		let e = this.parseBlock(this.gpsOffset, "gps");
		return e && e.has(2) && e.has(4) && (e.set("latitude", de(...e.get(2), e.get(1))), e.set("longitude", de(...e.get(4), e.get(3)))), e;
	}
	async parseInteropBlock() {
		if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
	}
	async parseThumbnailBlock(e = !1) {
		if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
	}
	async extractThumbnail() {
		if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), void 0 === this.ifd1) return;
		let e = this.ifd1.get(513), t = this.ifd1.get(514);
		return this.chunk.getUint8Array(e, t);
	}
	get image() {
		return this.ifd0;
	}
	get thumbnail() {
		return this.ifd1;
	}
	createOutput() {
		let e, t, i, n = {};
		for (t of H) if (e = this[t], !p(e)) if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
			if ("ifd1" === t) continue;
			Object.assign(n, i);
		} else n[t] = i;
		return this.makerNote && (n.makerNote = this.makerNote), this.userComment && (n.userComment = this.userComment), n;
	}
	assignToOutput(e, t) {
		if (this.globalOptions.mergeOutput) Object.assign(e, t);
		else for (let [i, n] of Object.entries(t)) this.assignObjectToOutput(e, i, n);
	}
};
function de(e, t, i, n) {
	var s = e + t / 60 + i / 3600;
	return "S" !== n && "W" !== n || (s *= -1), s;
}
c(fe, "type", "tiff"), c(fe, "headerLength", 10), T.set("tiff", fe);
var pe = Object.freeze({
	__proto__: null,
	default: ne,
	Exifr: te,
	fileParsers: w,
	segmentParsers: T,
	fileReaders: A,
	tagKeys: E,
	tagValues: B,
	tagRevivers: N,
	createDictionary: U,
	extendDictionary: F,
	fetchUrlAsArrayBuffer: M,
	readBlobAsArrayBuffer: R,
	chunkedProps: G,
	otherSegments: V,
	segments: z,
	tiffBlocks: H,
	segmentsAndBlocks: j,
	tiffExtractables: W,
	inheritables: K,
	allFormatters: X,
	Options: q,
	parse: ie
});
var ge = {
	ifd0: !1,
	ifd1: !1,
	exif: !1,
	gps: !1,
	interop: !1,
	sanitize: !1,
	reviveValues: !0,
	translateKeys: !1,
	translateValues: !1,
	mergeOutput: !1
}, me = Object.assign({}, ge, {
	firstChunkSize: 4e4,
	gps: [
		1,
		2,
		3,
		4
	]
});
async function Se(e) {
	let t = new te(me);
	await t.read(e);
	let i = await t.parse();
	if (i && i.gps) {
		let { latitude: e, longitude: t } = i.gps;
		return {
			latitude: e,
			longitude: t
		};
	}
}
var Ce = Object.assign({}, ge, {
	tiff: !1,
	ifd1: !0,
	mergeOutput: !1
});
async function ye(e) {
	let t = new te(Ce);
	await t.read(e);
	let i = await t.extractThumbnail();
	return i && a ? s.from(i) : i;
}
async function be(e) {
	let t = await this.thumbnail(e);
	if (void 0 !== t) {
		let e = new Blob([t]);
		return URL.createObjectURL(e);
	}
}
var Ie = Object.assign({}, ge, {
	firstChunkSize: 4e4,
	ifd0: [274]
});
async function Pe(e) {
	let t = new te(Ie);
	await t.read(e);
	let i = await t.parse();
	if (i && i.ifd0) return i.ifd0[274];
}
var ke = Object.freeze({
	1: {
		dimensionSwapped: !1,
		scaleX: 1,
		scaleY: 1,
		deg: 0,
		rad: 0
	},
	2: {
		dimensionSwapped: !1,
		scaleX: -1,
		scaleY: 1,
		deg: 0,
		rad: 0
	},
	3: {
		dimensionSwapped: !1,
		scaleX: 1,
		scaleY: 1,
		deg: 180,
		rad: 180 * Math.PI / 180
	},
	4: {
		dimensionSwapped: !1,
		scaleX: -1,
		scaleY: 1,
		deg: 180,
		rad: 180 * Math.PI / 180
	},
	5: {
		dimensionSwapped: !0,
		scaleX: 1,
		scaleY: -1,
		deg: 90,
		rad: 90 * Math.PI / 180
	},
	6: {
		dimensionSwapped: !0,
		scaleX: 1,
		scaleY: 1,
		deg: 90,
		rad: 90 * Math.PI / 180
	},
	7: {
		dimensionSwapped: !0,
		scaleX: 1,
		scaleY: -1,
		deg: 270,
		rad: 270 * Math.PI / 180
	},
	8: {
		dimensionSwapped: !0,
		scaleX: 1,
		scaleY: 1,
		deg: 270,
		rad: 270 * Math.PI / 180
	}
});
var we = !0, Te = !0;
if ("object" == typeof navigator) {
	let e = navigator.userAgent;
	if (e.includes("iPad") || e.includes("iPhone")) {
		let t = e.match(/OS (\d+)_(\d+)/);
		if (t) {
			let [, e, i] = t;
			we = Number(e) + .1 * Number(i) < 13.4, Te = !1;
		}
	} else if (e.includes("OS X 10")) {
		let [, t] = e.match(/OS X 10[_.](\d+)/);
		we = Te = Number(t) < 15;
	}
	if (e.includes("Chrome/")) {
		let [, t] = e.match(/Chrome\/(\d+)/);
		we = Te = Number(t) < 81;
	} else if (e.includes("Firefox/")) {
		let [, t] = e.match(/Firefox\/(\d+)/);
		we = Te = Number(t) < 77;
	}
}
async function Ae(e) {
	let t = await Pe(e);
	return Object.assign({
		canvas: we,
		css: Te
	}, ke[t]);
}
var De = class extends I {
	constructor(...e) {
		super(...e), c(this, "ranges", new Oe()), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
	}
	_tryExtend(e, t, i) {
		if (0 === e && 0 === this.byteLength && i) {
			let e = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
			this._swapDataView(e);
		} else {
			let i = e + t;
			if (i > this.byteLength) {
				let { dataView: e } = this._extend(i);
				this._swapDataView(e);
			}
		}
	}
	_extend(e) {
		let t;
		t = a ? s.allocUnsafe(e) : new Uint8Array(e);
		let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
		return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
			uintView: t,
			dataView: i
		};
	}
	subarray(e, t, i = !1) {
		return t = t || this._lengthToEnd(e), i && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
	}
	set(e, t, i = !1) {
		i && this._tryExtend(t, e.byteLength, e);
		let n = super.set(e, t);
		return this.ranges.add(t, n.byteLength), n;
	}
	async ensureChunk(e, t) {
		this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
	}
	available(e, t) {
		return this.ranges.available(e, t);
	}
};
var Oe = class {
	constructor() {
		c(this, "list", []);
	}
	get length() {
		return this.list.length;
	}
	add(e, t, i = 0) {
		let n = e + t, s = this.list.filter(((t) => xe(e, t.offset, n) || xe(e, t.end, n)));
		if (s.length > 0) {
			e = Math.min(e, ...s.map(((e) => e.offset))), n = Math.max(n, ...s.map(((e) => e.end))), t = n - e;
			let i = s.shift();
			i.offset = e, i.length = t, i.end = n, this.list = this.list.filter(((e) => !s.includes(e)));
		} else this.list.push({
			offset: e,
			length: t,
			end: n
		});
	}
	available(e, t) {
		let i = e + t;
		return this.list.some(((t) => t.offset <= e && i <= t.end));
	}
};
function xe(e, t, i) {
	return e <= t && t <= i;
}
var ve = class extends De {
	constructor(e, t) {
		super(0), c(this, "chunksRead", 0), this.input = e, this.options = t;
	}
	async readWhole() {
		this.chunked = !1, await this.readChunk(this.nextChunkOffset);
	}
	async readChunked() {
		this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
	}
	async readNextChunk(e = this.nextChunkOffset) {
		if (this.fullyRead) return this.chunksRead++, !1;
		let t = this.options.chunkSize, i = await this.readChunk(e, t);
		return !!i && i.byteLength === t;
	}
	async readChunk(e, t) {
		if (this.chunksRead++, 0 !== (t = this.safeWrapAddress(e, t))) return this._readChunk(e, t);
	}
	safeWrapAddress(e, t) {
		return void 0 !== this.size && e + t > this.size ? Math.max(0, this.size - e) : t;
	}
	get nextChunkOffset() {
		if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
	}
	get canReadNextChunk() {
		return this.chunksRead < this.options.chunkLimit;
	}
	get fullyRead() {
		return void 0 !== this.size && this.nextChunkOffset === this.size;
	}
	read() {
		return this.options.chunked ? this.readChunked() : this.readWhole();
	}
	close() {}
};
A.set("blob", class extends ve {
	async readWhole() {
		this.chunked = !1;
		let e = await R(this.input);
		this._swapArrayBuffer(e);
	}
	readChunked() {
		return this.chunked = !0, this.size = this.input.size, super.readChunked();
	}
	async _readChunk(e, t) {
		let i = t ? e + t : void 0, s = await R(this.input.slice(e, i));
		return this.set(s, e, !0);
	}
});
var Me = Object.freeze({
	__proto__: null,
	default: pe,
	Exifr: te,
	fileParsers: w,
	segmentParsers: T,
	fileReaders: A,
	tagKeys: E,
	tagValues: B,
	tagRevivers: N,
	createDictionary: U,
	extendDictionary: F,
	fetchUrlAsArrayBuffer: M,
	readBlobAsArrayBuffer: R,
	chunkedProps: G,
	otherSegments: V,
	segments: z,
	tiffBlocks: H,
	segmentsAndBlocks: j,
	tiffExtractables: W,
	inheritables: K,
	allFormatters: X,
	Options: q,
	parse: ie,
	gpsOnlyOptions: me,
	gps: Se,
	thumbnailOnlyOptions: Ce,
	thumbnail: ye,
	thumbnailUrl: be,
	orientationOnlyOptions: Ie,
	orientation: Pe,
	rotations: ke,
	get rotateCanvas() {
		return we;
	},
	get rotateCss() {
		return Te;
	},
	rotation: Ae
});
A.set("url", class extends ve {
	async readWhole() {
		this.chunked = !1;
		let e = await M(this.input);
		e instanceof ArrayBuffer ? this._swapArrayBuffer(e) : e instanceof Uint8Array && this._swapBuffer(e);
	}
	async _readChunk(e, t) {
		let i = t ? e + t - 1 : void 0, n = this.options.httpHeaders || {};
		(e || i) && (n.range = `bytes=${[e, i].join("-")}`);
		let s = await h(this.input, { headers: n }), r = await s.arrayBuffer(), a = r.byteLength;
		if (416 !== s.status) return a !== t && (this.size = e + a), this.set(r, e, !0);
	}
});
I.prototype.getUint64 = function(e) {
	let t = this.getUint32(e), i = this.getUint32(e + 4);
	return t < 1048575 ? t << 32 | i : (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), r(t) << r(32) | r(i));
};
var Re = class extends se {
	parseBoxes(e = 0) {
		let t = [];
		for (; e < this.file.byteLength - 4;) {
			let i = this.parseBoxHead(e);
			if (t.push(i), 0 === i.length) break;
			e += i.length;
		}
		return t;
	}
	parseSubBoxes(e) {
		e.boxes = this.parseBoxes(e.start);
	}
	findBox(e, t) {
		return void 0 === e.boxes && this.parseSubBoxes(e), e.boxes.find(((e) => e.kind === t));
	}
	parseBoxHead(e) {
		let t = this.file.getUint32(e), i = this.file.getString(e + 4, 4), n = e + 8;
		return 1 === t && (t = this.file.getUint64(e + 8), n += 8), {
			offset: e,
			length: t,
			kind: i,
			start: n
		};
	}
	parseBoxFullHead(e) {
		if (void 0 !== e.version) return;
		e.version = this.file.getUint32(e.start) >> 24, e.start += 4;
	}
};
var Le = class extends Re {
	static canHandle(e, t) {
		if (0 !== t) return !1;
		let i = e.getUint16(2);
		if (i > 50) return !1;
		let n = 16, s = [];
		for (; n < i;) s.push(e.getString(n, 4)), n += 4;
		return s.includes(this.type);
	}
	async parse() {
		let e = this.file.getUint32(0), t = this.parseBoxHead(e);
		for (; "meta" !== t.kind;) e += t.length, await this.file.ensureChunk(e, 16), t = this.parseBoxHead(e);
		await this.file.ensureChunk(t.offset, t.length), this.parseBoxFullHead(t), this.parseSubBoxes(t), this.options.icc.enabled && await this.findIcc(t), this.options.tiff.enabled && await this.findExif(t);
	}
	async registerSegment(e, t, i) {
		await this.file.ensureChunk(t, i);
		let n = this.file.subarray(t, i);
		this.createParser(e, n);
	}
	async findIcc(e) {
		let t = this.findBox(e, "iprp");
		if (void 0 === t) return;
		let i = this.findBox(t, "ipco");
		if (void 0 === i) return;
		let n = this.findBox(i, "colr");
		void 0 !== n && await this.registerSegment("icc", n.offset + 12, n.length);
	}
	async findExif(e) {
		let t = this.findBox(e, "iinf");
		if (void 0 === t) return;
		let i = this.findBox(e, "iloc");
		if (void 0 === i) return;
		let n = this.findExifLocIdInIinf(t), s = this.findExtentInIloc(i, n);
		if (void 0 === s) return;
		let [r, a] = s;
		await this.file.ensureChunk(r, a);
		let o = 4 + this.file.getUint32(r);
		r += o, a -= o, await this.registerSegment("tiff", r, a);
	}
	findExifLocIdInIinf(e) {
		this.parseBoxFullHead(e);
		let t, i, n, s, r = e.start, a = this.file.getUint16(r);
		for (r += 2; a--;) {
			if (t = this.parseBoxHead(r), this.parseBoxFullHead(t), i = t.start, t.version >= 2 && (n = 3 === t.version ? 4 : 2, s = this.file.getString(i + n + 2, 4), "Exif" === s)) return this.file.getUintBytes(i, n);
			r += t.length;
		}
	}
	get8bits(e) {
		let t = this.file.getUint8(e);
		return [t >> 4, 15 & t];
	}
	findExtentInIloc(e, t) {
		this.parseBoxFullHead(e);
		let i = e.start, [n, s] = this.get8bits(i++), [r, a] = this.get8bits(i++), o = 2 === e.version ? 4 : 2, l = 1 === e.version || 2 === e.version ? 2 : 0, h = a + n + s, u = 2 === e.version ? 4 : 2, c = this.file.getUintBytes(i, u);
		for (i += u; c--;) {
			let e = this.file.getUintBytes(i, o);
			i += o + l + 2 + r;
			let u = this.file.getUint16(i);
			if (i += 2, e === t) return u > 1 && console.warn("ILOC box has more than one extent but we're only processing one\nPlease create an issue at https://github.com/MikeKovarik/exifr with this file"), [this.file.getUintBytes(i + a, n), this.file.getUintBytes(i + a + n, s)];
			i += u * h;
		}
	}
};
var Ue = class extends Le {};
c(Ue, "type", "heic");
var Fe = class extends Le {};
c(Fe, "type", "avif"), w.set("heic", Ue), w.set("avif", Fe), U(E, ["ifd0", "ifd1"], [
	[256, "ImageWidth"],
	[257, "ImageHeight"],
	[258, "BitsPerSample"],
	[259, "Compression"],
	[262, "PhotometricInterpretation"],
	[270, "ImageDescription"],
	[271, "Make"],
	[272, "Model"],
	[273, "StripOffsets"],
	[274, "Orientation"],
	[277, "SamplesPerPixel"],
	[278, "RowsPerStrip"],
	[279, "StripByteCounts"],
	[282, "XResolution"],
	[283, "YResolution"],
	[284, "PlanarConfiguration"],
	[296, "ResolutionUnit"],
	[301, "TransferFunction"],
	[305, "Software"],
	[306, "ModifyDate"],
	[315, "Artist"],
	[316, "HostComputer"],
	[317, "Predictor"],
	[318, "WhitePoint"],
	[319, "PrimaryChromaticities"],
	[513, "ThumbnailOffset"],
	[514, "ThumbnailLength"],
	[529, "YCbCrCoefficients"],
	[530, "YCbCrSubSampling"],
	[531, "YCbCrPositioning"],
	[532, "ReferenceBlackWhite"],
	[700, "ApplicationNotes"],
	[33432, "Copyright"],
	[33723, "IPTC"],
	[34665, "ExifIFD"],
	[34675, "ICC"],
	[34853, "GpsIFD"],
	[330, "SubIFD"],
	[40965, "InteropIFD"],
	[40091, "XPTitle"],
	[40092, "XPComment"],
	[40093, "XPAuthor"],
	[40094, "XPKeywords"],
	[40095, "XPSubject"]
]), U(E, "exif", [
	[33434, "ExposureTime"],
	[33437, "FNumber"],
	[34850, "ExposureProgram"],
	[34852, "SpectralSensitivity"],
	[34855, "ISO"],
	[34858, "TimeZoneOffset"],
	[34859, "SelfTimerMode"],
	[34864, "SensitivityType"],
	[34865, "StandardOutputSensitivity"],
	[34866, "RecommendedExposureIndex"],
	[34867, "ISOSpeed"],
	[34868, "ISOSpeedLatitudeyyy"],
	[34869, "ISOSpeedLatitudezzz"],
	[36864, "ExifVersion"],
	[36867, "DateTimeOriginal"],
	[36868, "CreateDate"],
	[36873, "GooglePlusUploadCode"],
	[36880, "OffsetTime"],
	[36881, "OffsetTimeOriginal"],
	[36882, "OffsetTimeDigitized"],
	[37121, "ComponentsConfiguration"],
	[37122, "CompressedBitsPerPixel"],
	[37377, "ShutterSpeedValue"],
	[37378, "ApertureValue"],
	[37379, "BrightnessValue"],
	[37380, "ExposureCompensation"],
	[37381, "MaxApertureValue"],
	[37382, "SubjectDistance"],
	[37383, "MeteringMode"],
	[37384, "LightSource"],
	[37385, "Flash"],
	[37386, "FocalLength"],
	[37393, "ImageNumber"],
	[37394, "SecurityClassification"],
	[37395, "ImageHistory"],
	[37396, "SubjectArea"],
	[37500, "MakerNote"],
	[37510, "UserComment"],
	[37520, "SubSecTime"],
	[37521, "SubSecTimeOriginal"],
	[37522, "SubSecTimeDigitized"],
	[37888, "AmbientTemperature"],
	[37889, "Humidity"],
	[37890, "Pressure"],
	[37891, "WaterDepth"],
	[37892, "Acceleration"],
	[37893, "CameraElevationAngle"],
	[40960, "FlashpixVersion"],
	[40961, "ColorSpace"],
	[40962, "ExifImageWidth"],
	[40963, "ExifImageHeight"],
	[40964, "RelatedSoundFile"],
	[41483, "FlashEnergy"],
	[41486, "FocalPlaneXResolution"],
	[41487, "FocalPlaneYResolution"],
	[41488, "FocalPlaneResolutionUnit"],
	[41492, "SubjectLocation"],
	[41493, "ExposureIndex"],
	[41495, "SensingMethod"],
	[41728, "FileSource"],
	[41729, "SceneType"],
	[41730, "CFAPattern"],
	[41985, "CustomRendered"],
	[41986, "ExposureMode"],
	[41987, "WhiteBalance"],
	[41988, "DigitalZoomRatio"],
	[41989, "FocalLengthIn35mmFormat"],
	[41990, "SceneCaptureType"],
	[41991, "GainControl"],
	[41992, "Contrast"],
	[41993, "Saturation"],
	[41994, "Sharpness"],
	[41996, "SubjectDistanceRange"],
	[42016, "ImageUniqueID"],
	[42032, "OwnerName"],
	[42033, "SerialNumber"],
	[42034, "LensInfo"],
	[42035, "LensMake"],
	[42036, "LensModel"],
	[42037, "LensSerialNumber"],
	[42080, "CompositeImage"],
	[42081, "CompositeImageCount"],
	[42082, "CompositeImageExposureTimes"],
	[42240, "Gamma"],
	[59932, "Padding"],
	[59933, "OffsetSchema"],
	[65e3, "OwnerName"],
	[65001, "SerialNumber"],
	[65002, "Lens"],
	[65100, "RawFile"],
	[65101, "Converter"],
	[65102, "WhiteBalance"],
	[65105, "Exposure"],
	[65106, "Shadows"],
	[65107, "Brightness"],
	[65108, "Contrast"],
	[65109, "Saturation"],
	[65110, "Sharpness"],
	[65111, "Smoothness"],
	[65112, "MoireFilter"],
	[40965, "InteropIFD"]
]), U(E, "gps", [
	[0, "GPSVersionID"],
	[1, "GPSLatitudeRef"],
	[2, "GPSLatitude"],
	[3, "GPSLongitudeRef"],
	[4, "GPSLongitude"],
	[5, "GPSAltitudeRef"],
	[6, "GPSAltitude"],
	[7, "GPSTimeStamp"],
	[8, "GPSSatellites"],
	[9, "GPSStatus"],
	[10, "GPSMeasureMode"],
	[11, "GPSDOP"],
	[12, "GPSSpeedRef"],
	[13, "GPSSpeed"],
	[14, "GPSTrackRef"],
	[15, "GPSTrack"],
	[16, "GPSImgDirectionRef"],
	[17, "GPSImgDirection"],
	[18, "GPSMapDatum"],
	[19, "GPSDestLatitudeRef"],
	[20, "GPSDestLatitude"],
	[21, "GPSDestLongitudeRef"],
	[22, "GPSDestLongitude"],
	[23, "GPSDestBearingRef"],
	[24, "GPSDestBearing"],
	[25, "GPSDestDistanceRef"],
	[26, "GPSDestDistance"],
	[27, "GPSProcessingMethod"],
	[28, "GPSAreaInformation"],
	[29, "GPSDateStamp"],
	[30, "GPSDifferential"],
	[31, "GPSHPositioningError"]
]), U(B, ["ifd0", "ifd1"], [[274, {
	1: "Horizontal (normal)",
	2: "Mirror horizontal",
	3: "Rotate 180",
	4: "Mirror vertical",
	5: "Mirror horizontal and rotate 270 CW",
	6: "Rotate 90 CW",
	7: "Mirror horizontal and rotate 90 CW",
	8: "Rotate 270 CW"
}], [296, {
	1: "None",
	2: "inches",
	3: "cm"
}]]);
var Ee = U(B, "exif", [
	[34850, {
		0: "Not defined",
		1: "Manual",
		2: "Normal program",
		3: "Aperture priority",
		4: "Shutter priority",
		5: "Creative program",
		6: "Action program",
		7: "Portrait mode",
		8: "Landscape mode"
	}],
	[37121, {
		0: "-",
		1: "Y",
		2: "Cb",
		3: "Cr",
		4: "R",
		5: "G",
		6: "B"
	}],
	[37383, {
		0: "Unknown",
		1: "Average",
		2: "CenterWeightedAverage",
		3: "Spot",
		4: "MultiSpot",
		5: "Pattern",
		6: "Partial",
		255: "Other"
	}],
	[37384, {
		0: "Unknown",
		1: "Daylight",
		2: "Fluorescent",
		3: "Tungsten (incandescent light)",
		4: "Flash",
		9: "Fine weather",
		10: "Cloudy weather",
		11: "Shade",
		12: "Daylight fluorescent (D 5700 - 7100K)",
		13: "Day white fluorescent (N 4600 - 5400K)",
		14: "Cool white fluorescent (W 3900 - 4500K)",
		15: "White fluorescent (WW 3200 - 3700K)",
		17: "Standard light A",
		18: "Standard light B",
		19: "Standard light C",
		20: "D55",
		21: "D65",
		22: "D75",
		23: "D50",
		24: "ISO studio tungsten",
		255: "Other"
	}],
	[37385, {
		0: "Flash did not fire",
		1: "Flash fired",
		5: "Strobe return light not detected",
		7: "Strobe return light detected",
		9: "Flash fired, compulsory flash mode",
		13: "Flash fired, compulsory flash mode, return light not detected",
		15: "Flash fired, compulsory flash mode, return light detected",
		16: "Flash did not fire, compulsory flash mode",
		24: "Flash did not fire, auto mode",
		25: "Flash fired, auto mode",
		29: "Flash fired, auto mode, return light not detected",
		31: "Flash fired, auto mode, return light detected",
		32: "No flash function",
		65: "Flash fired, red-eye reduction mode",
		69: "Flash fired, red-eye reduction mode, return light not detected",
		71: "Flash fired, red-eye reduction mode, return light detected",
		73: "Flash fired, compulsory flash mode, red-eye reduction mode",
		77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
		79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
		89: "Flash fired, auto mode, red-eye reduction mode",
		93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
		95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
	}],
	[41495, {
		1: "Not defined",
		2: "One-chip color area sensor",
		3: "Two-chip color area sensor",
		4: "Three-chip color area sensor",
		5: "Color sequential area sensor",
		7: "Trilinear sensor",
		8: "Color sequential linear sensor"
	}],
	[41728, {
		1: "Film Scanner",
		2: "Reflection Print Scanner",
		3: "Digital Camera"
	}],
	[41729, { 1: "Directly photographed" }],
	[41985, {
		0: "Normal",
		1: "Custom",
		2: "HDR (no original saved)",
		3: "HDR (original saved)",
		4: "Original (for HDR)",
		6: "Panorama",
		7: "Portrait HDR",
		8: "Portrait"
	}],
	[41986, {
		0: "Auto",
		1: "Manual",
		2: "Auto bracket"
	}],
	[41987, {
		0: "Auto",
		1: "Manual"
	}],
	[41990, {
		0: "Standard",
		1: "Landscape",
		2: "Portrait",
		3: "Night",
		4: "Other"
	}],
	[41991, {
		0: "None",
		1: "Low gain up",
		2: "High gain up",
		3: "Low gain down",
		4: "High gain down"
	}],
	[41996, {
		0: "Unknown",
		1: "Macro",
		2: "Close",
		3: "Distant"
	}],
	[42080, {
		0: "Unknown",
		1: "Not a Composite Image",
		2: "General Composite Image",
		3: "Composite Image Captured While Shooting"
	}]
]);
var Be = {
	1: "No absolute unit of measurement",
	2: "Inch",
	3: "Centimeter"
};
Ee.set(37392, Be), Ee.set(41488, Be);
var Ne = {
	0: "Normal",
	1: "Low",
	2: "High"
};
function Ge(e) {
	return "object" == typeof e && void 0 !== e.length ? e[0] : e;
}
function Ve(e) {
	let t = Array.from(e).slice(1);
	return t[1] > 15 && (t = t.map(((e) => String.fromCharCode(e)))), "0" !== t[2] && 0 !== t[2] || t.pop(), t.join(".");
}
function ze(e) {
	if ("string" == typeof e) {
		var [t, i, n, s, r, a] = e.trim().split(/[-: ]/g).map(Number), o = new Date(t, i - 1, n);
		return Number.isNaN(s) || Number.isNaN(r) || Number.isNaN(a) || (o.setHours(s), o.setMinutes(r), o.setSeconds(a)), Number.isNaN(+o) ? e : o;
	}
}
function He(e) {
	if ("string" == typeof e) return e;
	let t = [];
	if (0 === e[1] && 0 === e[e.length - 1]) for (let i = 0; i < e.length; i += 2) t.push(je(e[i + 1], e[i]));
	else for (let i = 0; i < e.length; i += 2) t.push(je(e[i], e[i + 1]));
	return m(String.fromCodePoint(...t));
}
function je(e, t) {
	return e << 8 | t;
}
Ee.set(41992, Ne), Ee.set(41993, Ne), Ee.set(41994, Ne), U(N, ["ifd0", "ifd1"], [
	[50827, function(e) {
		return "string" != typeof e ? b(e) : e;
	}],
	[306, ze],
	[40091, He],
	[40092, He],
	[40093, He],
	[40094, He],
	[40095, He]
]), U(N, "exif", [
	[40960, Ve],
	[36864, Ve],
	[36867, ze],
	[36868, ze],
	[40962, Ge],
	[40963, Ge]
]), U(N, "gps", [[0, (e) => Array.from(e).join(".")], [7, (e) => Array.from(e).join(":")]]);
var We = class extends re {
	static canHandle(e, t) {
		return 225 === e.getUint8(t + 1) && 1752462448 === e.getUint32(t + 4) && "http://ns.adobe.com/" === e.getString(t + 4, 20);
	}
	static headerLength(e, t) {
		return "http://ns.adobe.com/xmp/extension/" === e.getString(t + 4, 34) ? 79 : 33;
	}
	static findPosition(e, t) {
		let i = super.findPosition(e, t);
		return i.multiSegment = i.extended = 79 === i.headerLength, i.multiSegment ? (i.chunkCount = e.getUint8(t + 72), i.chunkNumber = e.getUint8(t + 76), 0 !== e.getUint8(t + 77) && i.chunkNumber++) : (i.chunkCount = Infinity, i.chunkNumber = -1), i;
	}
	static handleMultiSegments(e) {
		return e.map(((e) => e.chunk.getString())).join("");
	}
	normalizeInput(e) {
		return "string" == typeof e ? e : I.from(e).getString();
	}
	parse(e = this.chunk) {
		if (!this.localOptions.parse) return e;
		e = function(e) {
			let t = {}, i = {};
			for (let e of Ze) t[e] = [], i[e] = 0;
			return e.replace(et, ((e, n, s) => {
				if ("<" === n) {
					let n = ++i[s];
					return t[s].push(n), `${e}#${n}`;
				}
				return `${e}#${t[s].pop()}`;
			}));
		}(e);
		let t = Xe.findAll(e, "rdf", "Description");
		0 === t.length && t.push(new Xe("rdf", "Description", void 0, e));
		let i, n = {};
		for (let e of t) for (let t of e.properties) i = Je(t.ns, n), _e(t, i);
		return function(e) {
			let t;
			for (let i in e) t = e[i] = f(e[i]), void 0 === t && delete e[i];
			return f(e);
		}(n);
	}
	assignToOutput(e, t) {
		if (this.localOptions.parse) for (let [i, n] of Object.entries(t)) switch (i) {
			case "tiff":
				this.assignObjectToOutput(e, "ifd0", n);
				break;
			case "exif":
				this.assignObjectToOutput(e, "exif", n);
				break;
			case "xmlns": break;
			default: this.assignObjectToOutput(e, i, n);
		}
		else e.xmp = t;
	}
};
c(We, "type", "xmp"), c(We, "multiSegment", !0), T.set("xmp", We);
var Ke = class Ke {
	static findAll(e) {
		return qe(e, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(Ke.unpackMatch);
	}
	static unpackMatch(e) {
		let t = e[1], i = e[2], n = e[3].slice(1, -1);
		return n = Qe(n), new Ke(t, i, n);
	}
	constructor(e, t, i) {
		this.ns = e, this.name = t, this.value = i;
	}
	serialize() {
		return this.value;
	}
};
var Xe = class Xe {
	static findAll(e, t, i) {
		if (void 0 !== t || void 0 !== i) {
			t = t || "[\\w\\d-]+", i = i || "[\\w\\d-]+";
			var n = new RegExp(`<(${t}):(${i})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
		} else n = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
		return qe(e, n).map(Xe.unpackMatch);
	}
	static unpackMatch(e) {
		let t = e[1], i = e[2], n = e[4], s = e[8];
		return new Xe(t, i, n, s);
	}
	constructor(e, t, i, n) {
		this.ns = e, this.name = t, this.attrString = i, this.innerXml = n, this.attrs = Ke.findAll(i), this.children = Xe.findAll(n), this.value = 0 === this.children.length ? Qe(n) : void 0, this.properties = [...this.attrs, ...this.children];
	}
	get isPrimitive() {
		return void 0 !== this.value && 0 === this.attrs.length && 0 === this.children.length;
	}
	get isListContainer() {
		return 1 === this.children.length && this.children[0].isList;
	}
	get isList() {
		let { ns: e, name: t } = this;
		return "rdf" === e && ("Seq" === t || "Bag" === t || "Alt" === t);
	}
	get isListItem() {
		return "rdf" === this.ns && "li" === this.name;
	}
	serialize() {
		if (0 === this.properties.length && void 0 === this.value) return;
		if (this.isPrimitive) return this.value;
		if (this.isListContainer) return this.children[0].serialize();
		if (this.isList) return $e(this.children.map(Ye));
		if (this.isListItem && 1 === this.children.length && 0 === this.attrs.length) return this.children[0].serialize();
		let e = {};
		for (let t of this.properties) _e(t, e);
		return void 0 !== this.value && (e.value = this.value), f(e);
	}
};
function _e(e, t) {
	let i = e.serialize();
	void 0 !== i && (t[e.name] = i);
}
var Ye = (e) => e.serialize(), $e = (e) => 1 === e.length ? e[0] : e, Je = (e, t) => t[e] ? t[e] : t[e] = {};
function qe(e, t) {
	let i, n = [];
	if (!e) return n;
	for (; null !== (i = t.exec(e));) n.push(i);
	return n;
}
function Qe(e) {
	if (function(e) {
		return null == e || "null" === e || "undefined" === e || "" === e || "" === e.trim();
	}(e)) return;
	let t = Number(e);
	if (!Number.isNaN(t)) return t;
	let i = e.toLowerCase();
	return "true" === i || "false" !== i && e.trim();
}
var Ze = [
	"rdf:li",
	"rdf:Seq",
	"rdf:Bag",
	"rdf:Alt",
	"rdf:Description"
], et = new RegExp(`(<|\\/)(${Ze.join("|")})`, "g");
var tt = Object.freeze({
	__proto__: null,
	default: Me,
	Exifr: te,
	fileParsers: w,
	segmentParsers: T,
	fileReaders: A,
	tagKeys: E,
	tagValues: B,
	tagRevivers: N,
	createDictionary: U,
	extendDictionary: F,
	fetchUrlAsArrayBuffer: M,
	readBlobAsArrayBuffer: R,
	chunkedProps: G,
	otherSegments: V,
	segments: z,
	tiffBlocks: H,
	segmentsAndBlocks: j,
	tiffExtractables: W,
	inheritables: K,
	allFormatters: X,
	Options: q,
	parse: ie,
	gpsOnlyOptions: me,
	gps: Se,
	thumbnailOnlyOptions: Ce,
	thumbnail: ye,
	thumbnailUrl: be,
	orientationOnlyOptions: Ie,
	orientation: Pe,
	rotations: ke,
	get rotateCanvas() {
		return we;
	},
	get rotateCss() {
		return Te;
	},
	rotation: Ae
});
var at = l("fs", ((e) => e.promises));
A.set("fs", class extends ve {
	async readWhole() {
		this.chunked = !1, this.fs = await at;
		let e = await this.fs.readFile(this.input);
		this._swapBuffer(e);
	}
	async readChunked() {
		this.chunked = !0, this.fs = await at, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
	}
	async open() {
		void 0 === this.fh && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
	}
	async _readChunk(e, t) {
		void 0 === this.fh && await this.open(), e + t > this.size && (t = this.size - e);
		var i = this.subarray(e, t, !0);
		return await this.fh.read(i.dataView, 0, t, e), i;
	}
	async close() {
		if (this.fh) {
			let e = this.fh;
			this.fh = void 0, await e.close();
		}
	}
});
A.set("base64", class extends ve {
	constructor(...e) {
		super(...e), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
	}
	async _readChunk(e, t) {
		let i, n, r = this.input;
		void 0 === e ? (e = 0, i = 0, n = 0) : (i = 4 * Math.floor(e / 3), n = e - i / 4 * 3), void 0 === t && (t = this.size);
		let o = e + t, l = i + 4 * Math.ceil(o / 3);
		r = r.slice(i, l);
		let h = Math.min(t, this.size - e);
		if (a) {
			let t = s.from(r, "base64").slice(n, n + h);
			return this.set(t, e, !0);
		}
		{
			let t = this.subarray(e, h, !0), i = atob(r), s = t.toUint8();
			for (let e = 0; e < h; e++) s[e] = i.charCodeAt(n + e);
			return t;
		}
	}
});
var ot = class extends se {
	static canHandle(e, t) {
		return 18761 === t || 19789 === t;
	}
	extendOptions(e) {
		let { ifd0: t, xmp: i, iptc: n, icc: s } = e;
		i.enabled && t.deps.add(700), n.enabled && t.deps.add(33723), s.enabled && t.deps.add(34675), t.finalizeFilters();
	}
	async parse() {
		let { tiff: e, xmp: t, iptc: i, icc: n } = this.options;
		if (e.enabled || t.enabled || i.enabled || n.enabled) {
			let e = Math.max(S(this.options), this.options.chunkSize);
			await this.file.ensureChunk(0, e), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
		}
	}
	adaptTiffPropAsSegment(e) {
		if (this.parsers.tiff[e]) {
			let t = this.parsers.tiff[e];
			this.injectSegment(e, t);
		}
	}
};
c(ot, "type", "tiff"), w.set("tiff", ot);
var lt = l("zlib");
var ht = [
	"ihdr",
	"iccp",
	"text",
	"itxt",
	"exif"
];
var ut = class extends se {
	constructor(...e) {
		super(...e), c(this, "catchError", ((e) => this.errors.push(e))), c(this, "metaChunks", []), c(this, "unknownChunks", []);
	}
	static canHandle(e, t) {
		return 35152 === t && 2303741511 === e.getUint32(0) && 218765834 === e.getUint32(4);
	}
	async parse() {
		let { file: e } = this;
		await this.findPngChunksInRange(8, e.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
	}
	async findPngChunksInRange(e, t) {
		let { file: i } = this;
		for (; e < t;) {
			let t = i.getUint32(e), n = i.getUint32(e + 4), s = i.getString(e + 4, 4).toLowerCase(), r = t + 4 + 4 + 4, a = {
				type: s,
				offset: e,
				length: r,
				start: e + 4 + 4,
				size: t,
				marker: n
			};
			ht.includes(s) ? this.metaChunks.push(a) : this.unknownChunks.push(a), e += r;
		}
	}
	parseTextChunks() {
		let e = this.metaChunks.filter(((e) => "text" === e.type));
		for (let t of e) {
			let [e, i] = this.file.getString(t.start, t.size).split("\0");
			this.injectKeyValToIhdr(e, i);
		}
	}
	injectKeyValToIhdr(e, t) {
		let i = this.parsers.ihdr;
		i && i.raw.set(e, t);
	}
	findIhdr() {
		let e = this.metaChunks.find(((e) => "ihdr" === e.type));
		e && !1 !== this.options.ihdr.enabled && this.createParser("ihdr", e.chunk);
	}
	async findExif() {
		let e = this.metaChunks.find(((e) => "exif" === e.type));
		e && this.injectSegment("tiff", e.chunk);
	}
	async findXmp() {
		let e = this.metaChunks.filter(((e) => "itxt" === e.type));
		for (let t of e) "XML:com.adobe.xmp" === t.chunk.getString(0, 17) && this.injectSegment("xmp", t.chunk);
	}
	async findIcc() {
		let e = this.metaChunks.find(((e) => "iccp" === e.type));
		if (!e) return;
		let { chunk: t } = e, i = t.getUint8Array(0, 81), s = 0;
		for (; s < 80 && 0 !== i[s];) s++;
		let r = s + 2, a = t.getString(0, s);
		if (this.injectKeyValToIhdr("ProfileName", a), n) {
			let e = await lt, i = t.getUint8Array(r);
			i = e.inflateSync(i), this.injectSegment("icc", i);
		}
	}
};
c(ut, "type", "png"), w.set("png", ut), U(E, "interop", [
	[1, "InteropIndex"],
	[2, "InteropVersion"],
	[4096, "RelatedImageFileFormat"],
	[4097, "RelatedImageWidth"],
	[4098, "RelatedImageHeight"]
]), F(E, "ifd0", [
	[11, "ProcessingSoftware"],
	[254, "SubfileType"],
	[255, "OldSubfileType"],
	[263, "Thresholding"],
	[264, "CellWidth"],
	[265, "CellLength"],
	[266, "FillOrder"],
	[269, "DocumentName"],
	[280, "MinSampleValue"],
	[281, "MaxSampleValue"],
	[285, "PageName"],
	[286, "XPosition"],
	[287, "YPosition"],
	[290, "GrayResponseUnit"],
	[297, "PageNumber"],
	[321, "HalftoneHints"],
	[322, "TileWidth"],
	[323, "TileLength"],
	[332, "InkSet"],
	[337, "TargetPrinter"],
	[18246, "Rating"],
	[18249, "RatingPercent"],
	[33550, "PixelScale"],
	[34264, "ModelTransform"],
	[34377, "PhotoshopSettings"],
	[50706, "DNGVersion"],
	[50707, "DNGBackwardVersion"],
	[50708, "UniqueCameraModel"],
	[50709, "LocalizedCameraModel"],
	[50736, "DNGLensInfo"],
	[50739, "ShadowScale"],
	[50740, "DNGPrivateData"],
	[33920, "IntergraphMatrix"],
	[33922, "ModelTiePoint"],
	[34118, "SEMInfo"],
	[34735, "GeoTiffDirectory"],
	[34736, "GeoTiffDoubleParams"],
	[34737, "GeoTiffAsciiParams"],
	[50341, "PrintIM"],
	[50721, "ColorMatrix1"],
	[50722, "ColorMatrix2"],
	[50723, "CameraCalibration1"],
	[50724, "CameraCalibration2"],
	[50725, "ReductionMatrix1"],
	[50726, "ReductionMatrix2"],
	[50727, "AnalogBalance"],
	[50728, "AsShotNeutral"],
	[50729, "AsShotWhiteXY"],
	[50730, "BaselineExposure"],
	[50731, "BaselineNoise"],
	[50732, "BaselineSharpness"],
	[50734, "LinearResponseLimit"],
	[50735, "CameraSerialNumber"],
	[50741, "MakerNoteSafety"],
	[50778, "CalibrationIlluminant1"],
	[50779, "CalibrationIlluminant2"],
	[50781, "RawDataUniqueID"],
	[50827, "OriginalRawFileName"],
	[50828, "OriginalRawFileData"],
	[50831, "AsShotICCProfile"],
	[50832, "AsShotPreProfileMatrix"],
	[50833, "CurrentICCProfile"],
	[50834, "CurrentPreProfileMatrix"],
	[50879, "ColorimetricReference"],
	[50885, "SRawType"],
	[50898, "PanasonicTitle"],
	[50899, "PanasonicTitle2"],
	[50931, "CameraCalibrationSig"],
	[50932, "ProfileCalibrationSig"],
	[50933, "ProfileIFD"],
	[50934, "AsShotProfileName"],
	[50936, "ProfileName"],
	[50937, "ProfileHueSatMapDims"],
	[50938, "ProfileHueSatMapData1"],
	[50939, "ProfileHueSatMapData2"],
	[50940, "ProfileToneCurve"],
	[50941, "ProfileEmbedPolicy"],
	[50942, "ProfileCopyright"],
	[50964, "ForwardMatrix1"],
	[50965, "ForwardMatrix2"],
	[50966, "PreviewApplicationName"],
	[50967, "PreviewApplicationVersion"],
	[50968, "PreviewSettingsName"],
	[50969, "PreviewSettingsDigest"],
	[50970, "PreviewColorSpace"],
	[50971, "PreviewDateTime"],
	[50972, "RawImageDigest"],
	[50973, "OriginalRawFileDigest"],
	[50981, "ProfileLookTableDims"],
	[50982, "ProfileLookTableData"],
	[51043, "TimeCodes"],
	[51044, "FrameRate"],
	[51058, "TStop"],
	[51081, "ReelName"],
	[51089, "OriginalDefaultFinalSize"],
	[51090, "OriginalBestQualitySize"],
	[51091, "OriginalDefaultCropSize"],
	[51105, "CameraLabel"],
	[51107, "ProfileHueSatMapEncoding"],
	[51108, "ProfileLookTableEncoding"],
	[51109, "BaselineExposureOffset"],
	[51110, "DefaultBlackRender"],
	[51111, "NewRawImageDigest"],
	[51112, "RawToPreviewGain"]
]);
var ct = [
	[273, "StripOffsets"],
	[279, "StripByteCounts"],
	[288, "FreeOffsets"],
	[289, "FreeByteCounts"],
	[291, "GrayResponseCurve"],
	[292, "T4Options"],
	[293, "T6Options"],
	[300, "ColorResponseUnit"],
	[320, "ColorMap"],
	[324, "TileOffsets"],
	[325, "TileByteCounts"],
	[326, "BadFaxLines"],
	[327, "CleanFaxData"],
	[328, "ConsecutiveBadFaxLines"],
	[330, "SubIFD"],
	[333, "InkNames"],
	[334, "NumberofInks"],
	[336, "DotRange"],
	[338, "ExtraSamples"],
	[339, "SampleFormat"],
	[340, "SMinSampleValue"],
	[341, "SMaxSampleValue"],
	[342, "TransferRange"],
	[343, "ClipPath"],
	[344, "XClipPathUnits"],
	[345, "YClipPathUnits"],
	[346, "Indexed"],
	[347, "JPEGTables"],
	[351, "OPIProxy"],
	[400, "GlobalParametersIFD"],
	[401, "ProfileType"],
	[402, "FaxProfile"],
	[403, "CodingMethods"],
	[404, "VersionYear"],
	[405, "ModeNumber"],
	[433, "Decode"],
	[434, "DefaultImageColor"],
	[435, "T82Options"],
	[437, "JPEGTables"],
	[512, "JPEGProc"],
	[515, "JPEGRestartInterval"],
	[517, "JPEGLosslessPredictors"],
	[518, "JPEGPointTransforms"],
	[519, "JPEGQTables"],
	[520, "JPEGDCTables"],
	[521, "JPEGACTables"],
	[559, "StripRowCounts"],
	[999, "USPTOMiscellaneous"],
	[18247, "XP_DIP_XML"],
	[18248, "StitchInfo"],
	[28672, "SonyRawFileType"],
	[28688, "SonyToneCurve"],
	[28721, "VignettingCorrection"],
	[28722, "VignettingCorrParams"],
	[28724, "ChromaticAberrationCorrection"],
	[28725, "ChromaticAberrationCorrParams"],
	[28726, "DistortionCorrection"],
	[28727, "DistortionCorrParams"],
	[29895, "SonyCropTopLeft"],
	[29896, "SonyCropSize"],
	[32781, "ImageID"],
	[32931, "WangTag1"],
	[32932, "WangAnnotation"],
	[32933, "WangTag3"],
	[32934, "WangTag4"],
	[32953, "ImageReferencePoints"],
	[32954, "RegionXformTackPoint"],
	[32955, "WarpQuadrilateral"],
	[32956, "AffineTransformMat"],
	[32995, "Matteing"],
	[32996, "DataType"],
	[32997, "ImageDepth"],
	[32998, "TileDepth"],
	[33300, "ImageFullWidth"],
	[33301, "ImageFullHeight"],
	[33302, "TextureFormat"],
	[33303, "WrapModes"],
	[33304, "FovCot"],
	[33305, "MatrixWorldToScreen"],
	[33306, "MatrixWorldToCamera"],
	[33405, "Model2"],
	[33421, "CFARepeatPatternDim"],
	[33422, "CFAPattern2"],
	[33423, "BatteryLevel"],
	[33424, "KodakIFD"],
	[33445, "MDFileTag"],
	[33446, "MDScalePixel"],
	[33447, "MDColorTable"],
	[33448, "MDLabName"],
	[33449, "MDSampleInfo"],
	[33450, "MDPrepDate"],
	[33451, "MDPrepTime"],
	[33452, "MDFileUnits"],
	[33589, "AdventScale"],
	[33590, "AdventRevision"],
	[33628, "UIC1Tag"],
	[33629, "UIC2Tag"],
	[33630, "UIC3Tag"],
	[33631, "UIC4Tag"],
	[33918, "IntergraphPacketData"],
	[33919, "IntergraphFlagRegisters"],
	[33921, "INGRReserved"],
	[34016, "Site"],
	[34017, "ColorSequence"],
	[34018, "IT8Header"],
	[34019, "RasterPadding"],
	[34020, "BitsPerRunLength"],
	[34021, "BitsPerExtendedRunLength"],
	[34022, "ColorTable"],
	[34023, "ImageColorIndicator"],
	[34024, "BackgroundColorIndicator"],
	[34025, "ImageColorValue"],
	[34026, "BackgroundColorValue"],
	[34027, "PixelIntensityRange"],
	[34028, "TransparencyIndicator"],
	[34029, "ColorCharacterization"],
	[34030, "HCUsage"],
	[34031, "TrapIndicator"],
	[34032, "CMYKEquivalent"],
	[34152, "AFCP_IPTC"],
	[34232, "PixelMagicJBIGOptions"],
	[34263, "JPLCartoIFD"],
	[34306, "WB_GRGBLevels"],
	[34310, "LeafData"],
	[34687, "TIFF_FXExtensions"],
	[34688, "MultiProfiles"],
	[34689, "SharedData"],
	[34690, "T88Options"],
	[34732, "ImageLayer"],
	[34750, "JBIGOptions"],
	[34856, "Opto-ElectricConvFactor"],
	[34857, "Interlace"],
	[34908, "FaxRecvParams"],
	[34909, "FaxSubAddress"],
	[34910, "FaxRecvTime"],
	[34929, "FedexEDR"],
	[34954, "LeafSubIFD"],
	[37387, "FlashEnergy"],
	[37388, "SpatialFrequencyResponse"],
	[37389, "Noise"],
	[37390, "FocalPlaneXResolution"],
	[37391, "FocalPlaneYResolution"],
	[37392, "FocalPlaneResolutionUnit"],
	[37397, "ExposureIndex"],
	[37398, "TIFF-EPStandardID"],
	[37399, "SensingMethod"],
	[37434, "CIP3DataFile"],
	[37435, "CIP3Sheet"],
	[37436, "CIP3Side"],
	[37439, "StoNits"],
	[37679, "MSDocumentText"],
	[37680, "MSPropertySetStorage"],
	[37681, "MSDocumentTextPosition"],
	[37724, "ImageSourceData"],
	[40965, "InteropIFD"],
	[40976, "SamsungRawPointersOffset"],
	[40977, "SamsungRawPointersLength"],
	[41217, "SamsungRawByteOrder"],
	[41218, "SamsungRawUnknown"],
	[41484, "SpatialFrequencyResponse"],
	[41485, "Noise"],
	[41489, "ImageNumber"],
	[41490, "SecurityClassification"],
	[41491, "ImageHistory"],
	[41494, "TIFF-EPStandardID"],
	[41995, "DeviceSettingDescription"],
	[42112, "GDALMetadata"],
	[42113, "GDALNoData"],
	[44992, "ExpandSoftware"],
	[44993, "ExpandLens"],
	[44994, "ExpandFilm"],
	[44995, "ExpandFilterLens"],
	[44996, "ExpandScanner"],
	[44997, "ExpandFlashLamp"],
	[46275, "HasselbladRawImage"],
	[48129, "PixelFormat"],
	[48130, "Transformation"],
	[48131, "Uncompressed"],
	[48132, "ImageType"],
	[48256, "ImageWidth"],
	[48257, "ImageHeight"],
	[48258, "WidthResolution"],
	[48259, "HeightResolution"],
	[48320, "ImageOffset"],
	[48321, "ImageByteCount"],
	[48322, "AlphaOffset"],
	[48323, "AlphaByteCount"],
	[48324, "ImageDataDiscard"],
	[48325, "AlphaDataDiscard"],
	[50215, "OceScanjobDesc"],
	[50216, "OceApplicationSelector"],
	[50217, "OceIDNumber"],
	[50218, "OceImageLogic"],
	[50255, "Annotations"],
	[50459, "HasselbladExif"],
	[50547, "OriginalFileName"],
	[50560, "USPTOOriginalContentType"],
	[50656, "CR2CFAPattern"],
	[50710, "CFAPlaneColor"],
	[50711, "CFALayout"],
	[50712, "LinearizationTable"],
	[50713, "BlackLevelRepeatDim"],
	[50714, "BlackLevel"],
	[50715, "BlackLevelDeltaH"],
	[50716, "BlackLevelDeltaV"],
	[50717, "WhiteLevel"],
	[50718, "DefaultScale"],
	[50719, "DefaultCropOrigin"],
	[50720, "DefaultCropSize"],
	[50733, "BayerGreenSplit"],
	[50737, "ChromaBlurRadius"],
	[50738, "AntiAliasStrength"],
	[50752, "RawImageSegmentation"],
	[50780, "BestQualityScale"],
	[50784, "AliasLayerMetadata"],
	[50829, "ActiveArea"],
	[50830, "MaskedAreas"],
	[50935, "NoiseReductionApplied"],
	[50974, "SubTileBlockSize"],
	[50975, "RowInterleaveFactor"],
	[51008, "OpcodeList1"],
	[51009, "OpcodeList2"],
	[51022, "OpcodeList3"],
	[51041, "NoiseProfile"],
	[51114, "CacheVersion"],
	[51125, "DefaultUserCrop"],
	[51157, "NikonNEFInfo"],
	[65024, "KdcIFD"]
];
F(E, "ifd0", ct), F(E, "exif", ct), U(B, "gps", [[23, {
	M: "Magnetic North",
	T: "True North"
}], [25, {
	K: "Kilometers",
	M: "Miles",
	N: "Nautical Miles"
}]]);
var ft = class extends re {
	static canHandle(e, t) {
		return 224 === e.getUint8(t + 1) && 1246120262 === e.getUint32(t + 4) && 0 === e.getUint8(t + 8);
	}
	parse() {
		return this.parseTags(), this.translate(), this.output;
	}
	parseTags() {
		this.raw = new Map([
			[0, this.chunk.getUint16(0)],
			[2, this.chunk.getUint8(2)],
			[3, this.chunk.getUint16(3)],
			[5, this.chunk.getUint16(5)],
			[7, this.chunk.getUint8(7)],
			[8, this.chunk.getUint8(8)]
		]);
	}
};
c(ft, "type", "jfif"), c(ft, "headerLength", 9), T.set("jfif", ft), U(E, "jfif", [
	[0, "JFIFVersion"],
	[2, "ResolutionUnit"],
	[3, "XResolution"],
	[5, "YResolution"],
	[7, "ThumbnailWidth"],
	[8, "ThumbnailHeight"]
]);
var dt = class extends re {
	parse() {
		return this.parseTags(), this.translate(), this.output;
	}
	parseTags() {
		this.raw = new Map([
			[0, this.chunk.getUint32(0)],
			[4, this.chunk.getUint32(4)],
			[8, this.chunk.getUint8(8)],
			[9, this.chunk.getUint8(9)],
			[10, this.chunk.getUint8(10)],
			[11, this.chunk.getUint8(11)],
			[12, this.chunk.getUint8(12)],
			...Array.from(this.raw)
		]);
	}
};
c(dt, "type", "ihdr"), T.set("ihdr", dt), U(E, "ihdr", [
	[0, "ImageWidth"],
	[4, "ImageHeight"],
	[8, "BitDepth"],
	[9, "ColorType"],
	[10, "Compression"],
	[11, "Filter"],
	[12, "Interlace"]
]), U(B, "ihdr", [
	[9, {
		0: "Grayscale",
		2: "RGB",
		3: "Palette",
		4: "Grayscale with Alpha",
		6: "RGB with Alpha",
		DEFAULT: "Unknown"
	}],
	[10, {
		0: "Deflate/Inflate",
		DEFAULT: "Unknown"
	}],
	[11, {
		0: "Adaptive",
		DEFAULT: "Unknown"
	}],
	[12, {
		0: "Noninterlaced",
		1: "Adam7 Interlace",
		DEFAULT: "Unknown"
	}]
]);
var pt = class extends re {
	static canHandle(e, t) {
		return 226 === e.getUint8(t + 1) && 1229144927 === e.getUint32(t + 4);
	}
	static findPosition(e, t) {
		let i = super.findPosition(e, t);
		return i.chunkNumber = e.getUint8(t + 16), i.chunkCount = e.getUint8(t + 17), i.multiSegment = i.chunkCount > 1, i;
	}
	static handleMultiSegments(e) {
		return function(e) {
			return new I(function(e) {
				let t = e[0].constructor, i = 0;
				for (let t of e) i += t.length;
				let n = new t(i), s = 0;
				for (let t of e) n.set(t, s), s += t.length;
				return n;
			}(e.map(((e) => e.chunk.toUint8()))));
		}(e);
	}
	parse() {
		return this.raw = /* @__PURE__ */ new Map(), this.parseHeader(), this.parseTags(), this.translate(), this.output;
	}
	parseHeader() {
		let { raw: e } = this;
		this.chunk.byteLength < 84 && g("ICC header is too short");
		for (let [t, i] of Object.entries(gt)) {
			t = parseInt(t, 10);
			let n = i(this.chunk, t);
			"\0\0\0\0" !== n && e.set(t, n);
		}
	}
	parseTags() {
		let e, t, i, n, s, { raw: r } = this, a = this.chunk.getUint32(128), o = 132, l = this.chunk.byteLength;
		for (; a--;) {
			if (e = this.chunk.getString(o, 4), t = this.chunk.getUint32(o + 4), i = this.chunk.getUint32(o + 8), n = this.chunk.getString(t, 4), t + i > l) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
			s = this.parseTag(n, t, i), void 0 !== s && "\0\0\0\0" !== s && r.set(e, s), o += 12;
		}
	}
	parseTag(e, t, i) {
		switch (e) {
			case "desc": return this.parseDesc(t);
			case "mluc": return this.parseMluc(t);
			case "text": return this.parseText(t, i);
			case "sig ": return this.parseSig(t);
		}
		if (!(t + i > this.chunk.byteLength)) return this.chunk.getUint8Array(t, i);
	}
	parseDesc(e) {
		let t = this.chunk.getUint32(e + 8) - 1;
		return m(this.chunk.getString(e + 12, t));
	}
	parseText(e, t) {
		return m(this.chunk.getString(e + 8, t - 8));
	}
	parseSig(e) {
		return m(this.chunk.getString(e + 8, 4));
	}
	parseMluc(e) {
		let { chunk: t } = this, i = t.getUint32(e + 8), n = t.getUint32(e + 12), s = e + 16, r = [];
		for (let a = 0; a < i; a++) {
			let i = t.getString(s + 0, 2), a = t.getString(s + 2, 2), o = t.getUint32(s + 4), l = t.getUint32(s + 8) + e, h = m(t.getUnicodeString(l, o));
			r.push({
				lang: i,
				country: a,
				text: h
			}), s += n;
		}
		return 1 === i ? r[0].text : r;
	}
	translateValue(e, t) {
		return "string" == typeof e ? t[e] || t[e.toLowerCase()] || e : t[e] || e;
	}
};
c(pt, "type", "icc"), c(pt, "multiSegment", !0), c(pt, "headerLength", 18);
var gt = {
	4: mt,
	8: function(e, t) {
		return [
			e.getUint8(t),
			e.getUint8(t + 1) >> 4,
			e.getUint8(t + 1) % 16
		].map(((e) => e.toString(10))).join(".");
	},
	12: mt,
	16: mt,
	20: mt,
	24: function(e, t) {
		const i = e.getUint16(t), n = e.getUint16(t + 2) - 1, s = e.getUint16(t + 4), r = e.getUint16(t + 6), a = e.getUint16(t + 8), o = e.getUint16(t + 10);
		return new Date(Date.UTC(i, n, s, r, a, o));
	},
	36: mt,
	40: mt,
	48: mt,
	52: mt,
	64: (e, t) => e.getUint32(t),
	80: mt
};
function mt(e, t) {
	return m(e.getString(t, 4));
}
T.set("icc", pt), U(E, "icc", [
	[4, "ProfileCMMType"],
	[8, "ProfileVersion"],
	[12, "ProfileClass"],
	[16, "ColorSpaceData"],
	[20, "ProfileConnectionSpace"],
	[24, "ProfileDateTime"],
	[36, "ProfileFileSignature"],
	[40, "PrimaryPlatform"],
	[44, "CMMFlags"],
	[48, "DeviceManufacturer"],
	[52, "DeviceModel"],
	[56, "DeviceAttributes"],
	[64, "RenderingIntent"],
	[68, "ConnectionSpaceIlluminant"],
	[80, "ProfileCreator"],
	[84, "ProfileID"],
	["Header", "ProfileHeader"],
	["MS00", "WCSProfiles"],
	["bTRC", "BlueTRC"],
	["bXYZ", "BlueMatrixColumn"],
	["bfd", "UCRBG"],
	["bkpt", "MediaBlackPoint"],
	["calt", "CalibrationDateTime"],
	["chad", "ChromaticAdaptation"],
	["chrm", "Chromaticity"],
	["ciis", "ColorimetricIntentImageState"],
	["clot", "ColorantTableOut"],
	["clro", "ColorantOrder"],
	["clrt", "ColorantTable"],
	["cprt", "ProfileCopyright"],
	["crdi", "CRDInfo"],
	["desc", "ProfileDescription"],
	["devs", "DeviceSettings"],
	["dmdd", "DeviceModelDesc"],
	["dmnd", "DeviceMfgDesc"],
	["dscm", "ProfileDescriptionML"],
	["fpce", "FocalPlaneColorimetryEstimates"],
	["gTRC", "GreenTRC"],
	["gXYZ", "GreenMatrixColumn"],
	["gamt", "Gamut"],
	["kTRC", "GrayTRC"],
	["lumi", "Luminance"],
	["meas", "Measurement"],
	["meta", "Metadata"],
	["mmod", "MakeAndModel"],
	["ncl2", "NamedColor2"],
	["ncol", "NamedColor"],
	["ndin", "NativeDisplayInfo"],
	["pre0", "Preview0"],
	["pre1", "Preview1"],
	["pre2", "Preview2"],
	["ps2i", "PS2RenderingIntent"],
	["ps2s", "PostScript2CSA"],
	["psd0", "PostScript2CRD0"],
	["psd1", "PostScript2CRD1"],
	["psd2", "PostScript2CRD2"],
	["psd3", "PostScript2CRD3"],
	["pseq", "ProfileSequenceDesc"],
	["psid", "ProfileSequenceIdentifier"],
	["psvm", "PS2CRDVMSize"],
	["rTRC", "RedTRC"],
	["rXYZ", "RedMatrixColumn"],
	["resp", "OutputResponse"],
	["rhoc", "ReflectionHardcopyOrigColorimetry"],
	["rig0", "PerceptualRenderingIntentGamut"],
	["rig2", "SaturationRenderingIntentGamut"],
	["rpoc", "ReflectionPrintOutputColorimetry"],
	["sape", "SceneAppearanceEstimates"],
	["scoe", "SceneColorimetryEstimates"],
	["scrd", "ScreeningDesc"],
	["scrn", "Screening"],
	["targ", "CharTarget"],
	["tech", "Technology"],
	["vcgt", "VideoCardGamma"],
	["view", "ViewingConditions"],
	["vued", "ViewingCondDesc"],
	["wtpt", "MediaWhitePoint"]
]);
var St = {
	"4d2p": "Erdt Systems",
	AAMA: "Aamazing Technologies",
	ACER: "Acer",
	ACLT: "Acolyte Color Research",
	ACTI: "Actix Sytems",
	ADAR: "Adara Technology",
	ADBE: "Adobe",
	ADI: "ADI Systems",
	AGFA: "Agfa Graphics",
	ALMD: "Alps Electric",
	ALPS: "Alps Electric",
	ALWN: "Alwan Color Expertise",
	AMTI: "Amiable Technologies",
	AOC: "AOC International",
	APAG: "Apago",
	APPL: "Apple Computer",
	AST: "AST",
	"AT&T": "AT&T",
	BAEL: "BARBIERI electronic",
	BRCO: "Barco NV",
	BRKP: "Breakpoint",
	BROT: "Brother",
	BULL: "Bull",
	BUS: "Bus Computer Systems",
	"C-IT": "C-Itoh",
	CAMR: "Intel",
	CANO: "Canon",
	CARR: "Carroll Touch",
	CASI: "Casio",
	CBUS: "Colorbus PL",
	CEL: "Crossfield",
	CELx: "Crossfield",
	CGS: "CGS Publishing Technologies International",
	CHM: "Rochester Robotics",
	CIGL: "Colour Imaging Group, London",
	CITI: "Citizen",
	CL00: "Candela",
	CLIQ: "Color IQ",
	CMCO: "Chromaco",
	CMiX: "CHROMiX",
	COLO: "Colorgraphic Communications",
	COMP: "Compaq",
	COMp: "Compeq/Focus Technology",
	CONR: "Conrac Display Products",
	CORD: "Cordata Technologies",
	CPQ: "Compaq",
	CPRO: "ColorPro",
	CRN: "Cornerstone",
	CTX: "CTX International",
	CVIS: "ColorVision",
	CWC: "Fujitsu Laboratories",
	DARI: "Darius Technology",
	DATA: "Dataproducts",
	DCP: "Dry Creek Photo",
	DCRC: "Digital Contents Resource Center, Chung-Ang University",
	DELL: "Dell Computer",
	DIC: "Dainippon Ink and Chemicals",
	DICO: "Diconix",
	DIGI: "Digital",
	"DL&C": "Digital Light & Color",
	DPLG: "Doppelganger",
	DS: "Dainippon Screen",
	DSOL: "DOOSOL",
	DUPN: "DuPont",
	EPSO: "Epson",
	ESKO: "Esko-Graphics",
	ETRI: "Electronics and Telecommunications Research Institute",
	EVER: "Everex Systems",
	EXAC: "ExactCODE",
	Eizo: "Eizo",
	FALC: "Falco Data Products",
	FF: "Fuji Photo Film",
	FFEI: "FujiFilm Electronic Imaging",
	FNRD: "Fnord Software",
	FORA: "Fora",
	FORE: "Forefront Technology",
	FP: "Fujitsu",
	FPA: "WayTech Development",
	FUJI: "Fujitsu",
	FX: "Fuji Xerox",
	GCC: "GCC Technologies",
	GGSL: "Global Graphics Software",
	GMB: "Gretagmacbeth",
	GMG: "GMG",
	GOLD: "GoldStar Technology",
	GOOG: "Google",
	GPRT: "Giantprint",
	GTMB: "Gretagmacbeth",
	GVC: "WayTech Development",
	GW2K: "Sony",
	HCI: "HCI",
	HDM: "Heidelberger Druckmaschinen",
	HERM: "Hermes",
	HITA: "Hitachi America",
	HP: "Hewlett-Packard",
	HTC: "Hitachi",
	HiTi: "HiTi Digital",
	IBM: "IBM",
	IDNT: "Scitex",
	IEC: "Hewlett-Packard",
	IIYA: "Iiyama North America",
	IKEG: "Ikegami Electronics",
	IMAG: "Image Systems",
	IMI: "Ingram Micro",
	INTC: "Intel",
	INTL: "N/A (INTL)",
	INTR: "Intra Electronics",
	IOCO: "Iocomm International Technology",
	IPS: "InfoPrint Solutions Company",
	IRIS: "Scitex",
	ISL: "Ichikawa Soft Laboratory",
	ITNL: "N/A (ITNL)",
	IVM: "IVM",
	IWAT: "Iwatsu Electric",
	Idnt: "Scitex",
	Inca: "Inca Digital Printers",
	Iris: "Scitex",
	JPEG: "Joint Photographic Experts Group",
	JSFT: "Jetsoft Development",
	JVC: "JVC Information Products",
	KART: "Scitex",
	KFC: "KFC Computek Components",
	KLH: "KLH Computers",
	KMHD: "Konica Minolta",
	KNCA: "Konica",
	KODA: "Kodak",
	KYOC: "Kyocera",
	Kart: "Scitex",
	LCAG: "Leica",
	LCCD: "Leeds Colour",
	LDAK: "Left Dakota",
	LEAD: "Leading Technology",
	LEXM: "Lexmark International",
	LINK: "Link Computer",
	LINO: "Linotronic",
	LITE: "Lite-On",
	Leaf: "Leaf",
	Lino: "Linotronic",
	MAGC: "Mag Computronic",
	MAGI: "MAG Innovision",
	MANN: "Mannesmann",
	MICN: "Micron Technology",
	MICR: "Microtek",
	MICV: "Microvitec",
	MINO: "Minolta",
	MITS: "Mitsubishi Electronics America",
	MITs: "Mitsuba",
	MNLT: "Minolta",
	MODG: "Modgraph",
	MONI: "Monitronix",
	MONS: "Monaco Systems",
	MORS: "Morse Technology",
	MOTI: "Motive Systems",
	MSFT: "Microsoft",
	MUTO: "MUTOH INDUSTRIES",
	Mits: "Mitsubishi Electric",
	NANA: "NANAO",
	NEC: "NEC",
	NEXP: "NexPress Solutions",
	NISS: "Nissei Sangyo America",
	NKON: "Nikon",
	NONE: "none",
	OCE: "Oce Technologies",
	OCEC: "OceColor",
	OKI: "Oki",
	OKID: "Okidata",
	OKIP: "Okidata",
	OLIV: "Olivetti",
	OLYM: "Olympus",
	ONYX: "Onyx Graphics",
	OPTI: "Optiquest",
	PACK: "Packard Bell",
	PANA: "Matsushita Electric Industrial",
	PANT: "Pantone",
	PBN: "Packard Bell",
	PFU: "PFU",
	PHIL: "Philips Consumer Electronics",
	PNTX: "HOYA",
	POne: "Phase One A/S",
	PREM: "Premier Computer Innovations",
	PRIN: "Princeton Graphic Systems",
	PRIP: "Princeton Publishing Labs",
	QLUX: "Hong Kong",
	QMS: "QMS",
	QPCD: "QPcard AB",
	QUAD: "QuadLaser",
	QUME: "Qume",
	RADI: "Radius",
	RDDx: "Integrated Color Solutions",
	RDG: "Roland DG",
	REDM: "REDMS Group",
	RELI: "Relisys",
	RGMS: "Rolf Gierling Multitools",
	RICO: "Ricoh",
	RNLD: "Edmund Ronald",
	ROYA: "Royal",
	RPC: "Ricoh Printing Systems",
	RTL: "Royal Information Electronics",
	SAMP: "Sampo",
	SAMS: "Samsung",
	SANT: "Jaime Santana Pomares",
	SCIT: "Scitex",
	SCRN: "Dainippon Screen",
	SDP: "Scitex",
	SEC: "Samsung",
	SEIK: "Seiko Instruments",
	SEIk: "Seikosha",
	SGUY: "ScanGuy.com",
	SHAR: "Sharp Laboratories",
	SICC: "International Color Consortium",
	SONY: "Sony",
	SPCL: "SpectraCal",
	STAR: "Star",
	STC: "Sampo Technology",
	Scit: "Scitex",
	Sdp: "Scitex",
	Sony: "Sony",
	TALO: "Talon Technology",
	TAND: "Tandy",
	TATU: "Tatung",
	TAXA: "TAXAN America",
	TDS: "Tokyo Denshi Sekei",
	TECO: "TECO Information Systems",
	TEGR: "Tegra",
	TEKT: "Tektronix",
	TI: "Texas Instruments",
	TMKR: "TypeMaker",
	TOSB: "Toshiba",
	TOSH: "Toshiba",
	TOTK: "TOTOKU ELECTRIC",
	TRIU: "Triumph",
	TSBT: "Toshiba",
	TTX: "TTX Computer Products",
	TVM: "TVM Professional Monitor",
	TW: "TW Casper",
	ULSX: "Ulead Systems",
	UNIS: "Unisys",
	UTZF: "Utz Fehlau & Sohn",
	VARI: "Varityper",
	VIEW: "Viewsonic",
	VISL: "Visual communication",
	VIVO: "Vivo Mobile Communication",
	WANG: "Wang",
	WLBR: "Wilbur Imaging",
	WTG2: "Ware To Go",
	WYSE: "WYSE Technology",
	XERX: "Xerox",
	XRIT: "X-Rite",
	ZRAN: "Zoran",
	Zebr: "Zebra Technologies",
	appl: "Apple Computer",
	bICC: "basICColor",
	berg: "bergdesign",
	ceyd: "Integrated Color Solutions",
	clsp: "MacDermid ColorSpan",
	ds: "Dainippon Screen",
	dupn: "DuPont",
	ffei: "FujiFilm Electronic Imaging",
	flux: "FluxData",
	iris: "Scitex",
	kart: "Scitex",
	lcms: "Little CMS",
	lino: "Linotronic",
	none: "none",
	ob4d: "Erdt Systems",
	obic: "Medigraph",
	quby: "Qubyx Sarl",
	scit: "Scitex",
	scrn: "Dainippon Screen",
	sdp: "Scitex",
	siwi: "SIWI GRAFIKA",
	yxym: "YxyMaster"
}, Ct = {
	scnr: "Scanner",
	mntr: "Monitor",
	prtr: "Printer",
	link: "Device Link",
	abst: "Abstract",
	spac: "Color Space Conversion Profile",
	nmcl: "Named Color",
	cenc: "ColorEncodingSpace profile",
	mid: "MultiplexIdentification profile",
	mlnk: "MultiplexLink profile",
	mvis: "MultiplexVisualization profile",
	nkpf: "Nikon Input Device Profile (NON-STANDARD!)"
};
U(B, "icc", [
	[4, St],
	[12, Ct],
	[40, Object.assign({}, St, Ct)],
	[48, St],
	[80, St],
	[64, {
		0: "Perceptual",
		1: "Relative Colorimetric",
		2: "Saturation",
		3: "Absolute Colorimetric"
	}],
	["tech", {
		amd: "Active Matrix Display",
		crt: "Cathode Ray Tube Display",
		kpcd: "Photo CD",
		pmd: "Passive Matrix Display",
		dcam: "Digital Camera",
		dcpj: "Digital Cinema Projector",
		dmpc: "Digital Motion Picture Camera",
		dsub: "Dye Sublimation Printer",
		epho: "Electrophotographic Printer",
		esta: "Electrostatic Printer",
		flex: "Flexography",
		fprn: "Film Writer",
		fscn: "Film Scanner",
		grav: "Gravure",
		ijet: "Ink Jet Printer",
		imgs: "Photo Image Setter",
		mpfr: "Motion Picture Film Recorder",
		mpfs: "Motion Picture Film Scanner",
		offs: "Offset Lithography",
		pjtv: "Projection Television",
		rpho: "Photographic Paper Printer",
		rscn: "Reflective Scanner",
		silk: "Silkscreen",
		twax: "Thermal Wax Printer",
		vidc: "Video Camera",
		vidm: "Video Monitor"
	}]
]);
var yt = class extends re {
	static canHandle(e, t, i) {
		return 237 === e.getUint8(t + 1) && "Photoshop" === e.getString(t + 4, 9) && void 0 !== this.containsIptc8bim(e, t, i);
	}
	static headerLength(e, t, i) {
		let n, s = this.containsIptc8bim(e, t, i);
		if (void 0 !== s) return n = e.getUint8(t + s + 7), n % 2 != 0 && (n += 1), 0 === n && (n = 4), s + 8 + n;
	}
	static containsIptc8bim(e, t, i) {
		for (let n = 0; n < i; n++) if (this.isIptcSegmentHead(e, t + n)) return n;
	}
	static isIptcSegmentHead(e, t) {
		return 56 === e.getUint8(t) && 943868237 === e.getUint32(t) && 1028 === e.getUint16(t + 4);
	}
	parse() {
		let { raw: e } = this, t = this.chunk.byteLength - 1, i = !1;
		for (let n = 0; n < t; n++) if (28 === this.chunk.getUint8(n) && 2 === this.chunk.getUint8(n + 1)) {
			i = !0;
			let t = this.chunk.getUint16(n + 3), s = this.chunk.getUint8(n + 2), r = this.chunk.getLatin1String(n + 5, t);
			e.set(s, this.pluralizeValue(e.get(s), r)), n += 4 + t;
		} else if (i) break;
		return this.translate(), this.output;
	}
	pluralizeValue(e, t) {
		return void 0 !== e ? e instanceof Array ? (e.push(t), e) : [e, t] : t;
	}
};
c(yt, "type", "iptc"), c(yt, "translateValues", !1), c(yt, "reviveValues", !1), T.set("iptc", yt), U(E, "iptc", [
	[0, "ApplicationRecordVersion"],
	[3, "ObjectTypeReference"],
	[4, "ObjectAttributeReference"],
	[5, "ObjectName"],
	[7, "EditStatus"],
	[8, "EditorialUpdate"],
	[10, "Urgency"],
	[12, "SubjectReference"],
	[15, "Category"],
	[20, "SupplementalCategories"],
	[22, "FixtureIdentifier"],
	[25, "Keywords"],
	[26, "ContentLocationCode"],
	[27, "ContentLocationName"],
	[30, "ReleaseDate"],
	[35, "ReleaseTime"],
	[37, "ExpirationDate"],
	[38, "ExpirationTime"],
	[40, "SpecialInstructions"],
	[42, "ActionAdvised"],
	[45, "ReferenceService"],
	[47, "ReferenceDate"],
	[50, "ReferenceNumber"],
	[55, "DateCreated"],
	[60, "TimeCreated"],
	[62, "DigitalCreationDate"],
	[63, "DigitalCreationTime"],
	[65, "OriginatingProgram"],
	[70, "ProgramVersion"],
	[75, "ObjectCycle"],
	[80, "Byline"],
	[85, "BylineTitle"],
	[90, "City"],
	[92, "Sublocation"],
	[95, "State"],
	[100, "CountryCode"],
	[101, "Country"],
	[103, "OriginalTransmissionReference"],
	[105, "Headline"],
	[110, "Credit"],
	[115, "Source"],
	[116, "CopyrightNotice"],
	[118, "Contact"],
	[120, "Caption"],
	[121, "LocalCaption"],
	[122, "Writer"],
	[125, "RasterizedCaption"],
	[130, "ImageType"],
	[131, "ImageOrientation"],
	[135, "LanguageIdentifier"],
	[150, "AudioType"],
	[151, "AudioSamplingRate"],
	[152, "AudioSamplingResolution"],
	[153, "AudioDuration"],
	[154, "AudioOutcue"],
	[184, "JobID"],
	[185, "MasterDocumentID"],
	[186, "ShortDocumentID"],
	[187, "UniqueDocumentID"],
	[188, "OwnerID"],
	[200, "ObjectPreviewFileFormat"],
	[201, "ObjectPreviewFileVersion"],
	[202, "ObjectPreviewData"],
	[221, "Prefs"],
	[225, "ClassifyState"],
	[228, "SimilarityIndex"],
	[230, "DocumentNotes"],
	[231, "DocumentHistory"],
	[232, "ExifCameraInfo"],
	[255, "CatalogSets"]
]), U(B, "iptc", [
	[10, {
		0: "0 (reserved)",
		1: "1 (most urgent)",
		2: "2",
		3: "3",
		4: "4",
		5: "5 (normal urgency)",
		6: "6",
		7: "7",
		8: "8 (least urgent)",
		9: "9 (user-defined priority)"
	}],
	[75, {
		a: "Morning",
		b: "Both Morning and Evening",
		p: "Evening"
	}],
	[131, {
		L: "Landscape",
		P: "Portrait",
		S: "Square"
	}]
]);
//#endregion
//#region src/data/droneMetadata.ts
var finiteNumber = (value) => {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value !== "string") return void 0;
	const match = value.trim().match(/[+-]?\d+(?:\.\d+)?/);
	if (!match) return void 0;
	const parsed = Number(match[0]);
	return Number.isFinite(parsed) ? parsed : void 0;
};
var formatExifDate = (value) => {
	if (value instanceof Date && !Number.isNaN(value.getTime())) return `${String(value.getFullYear()).padStart(4, "0")}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
	if (typeof value !== "string") return void 0;
	const match = value.trim().match(/^(\d{4})[:/-](\d{2})[:/-](\d{2})/);
	return match ? `${match[1]}-${match[2]}-${match[3]}` : void 0;
};
var firstDefined = (...values) => values.find((value) => value !== void 0);
var cameraName = (metadata) => {
	return [typeof metadata.Make === "string" ? metadata.Make.trim() : "", typeof metadata.Model === "string" ? metadata.Model.trim() : ""].filter(Boolean).join(" ") || void 0;
};
async function readDroneFileMetadata(file) {
	const metadata = await tt.parse(file, true);
	if (!metadata) return {};
	const gpsAltitude = finiteNumber(metadata.GPSAltitude);
	const altitudeReference = metadata.GPSAltitudeRef;
	const isBelowSeaLevel = altitudeReference === 1 || typeof altitudeReference === "string" && /below/i.test(altitudeReference);
	const normalizedGpsAltitude = gpsAltitude === void 0 ? void 0 : isBelowSeaLevel ? -Math.abs(gpsAltitude) : gpsAltitude;
	return {
		date: firstDefined(formatExifDate(metadata.DateTimeOriginal), formatExifDate(metadata.CreateDate), formatExifDate(metadata.DateTimeDigitized), formatExifDate(metadata.ModifyDate), formatExifDate(metadata.DateTime)),
		lat: firstDefined(finiteNumber(metadata.latitude), finiteNumber(metadata.Latitude)),
		lng: firstDefined(finiteNumber(metadata.longitude), finiteNumber(metadata.Longitude)),
		altitudeMeters: firstDefined(finiteNumber(metadata.AbsoluteAltitude), normalizedGpsAltitude, finiteNumber(metadata.Altitude)),
		relativeAltitudeMeters: firstDefined(finiteNumber(metadata.RelativeAltitude), finiteNumber(metadata.FlightHeight)),
		camera: cameraName(metadata)
	};
}
//#endregion
//#region src/components/DroneMediaCard.tsx
var displayNumber = (value) => value === void 0 ? "" : String(Number(value.toFixed(7)));
var readImageDimensions = (file) => new Promise((resolve, reject) => {
	const source = URL.createObjectURL(file);
	const image = new Image();
	image.onload = () => {
		URL.revokeObjectURL(source);
		resolve({
			width: image.naturalWidth,
			height: image.naturalHeight
		});
	};
	image.onerror = () => {
		URL.revokeObjectURL(source);
		reject(/* @__PURE__ */ new Error("无法读取图片尺寸。"));
	};
	image.src = source;
});
var isLikelyEquirectangularPanorama = (width, height) => {
	if (!width || !height) return false;
	const ratio = width / height;
	return ratio >= 1.9 && ratio <= 2.1;
};
var pendingDraft = (file, index) => ({
	id: `${file.name}:${file.size}:${file.lastModified}:${index}`,
	file,
	status: "reading",
	date: "",
	lat: "",
	lng: "",
	altitudeMeters: "",
	relativeAltitudeMeters: "",
	fromFile: {
		date: false,
		lat: false,
		lng: false,
		altitudeMeters: false,
		relativeAltitudeMeters: false
	}
});
function DroneMediaCard({ cityId, activeItemId, onSelectItem, onOpenPanorama }) {
	const city = cityId ? cityById[cityId] : void 0;
	const items = (0, import_react.useMemo)(() => getDroneMediaForCity(cityId), [cityId]);
	const metadataRunRef = (0, import_react.useRef)(0);
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [showUpload, setShowUpload] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [draggedItemId, setDraggedItemId] = (0, import_react.useState)();
	const [draftItemIds, setDraftItemIds] = (0, import_react.useState)(items.map((item) => item.id));
	const [draftHiddenIds, setDraftHiddenIds] = (0, import_react.useState)(travelAtlasEditorState.hiddenDroneMediaIds);
	const [uploadForm, setUploadForm] = (0, import_react.useState)({ kind: "panorama360" });
	const [fileDrafts, setFileDrafts] = (0, import_react.useState)([]);
	const itemById = new Map(items.map((item) => [item.id, item]));
	const displayedItems = editing ? draftItemIds.map((id) => itemById.get(id)).filter(Boolean) : items;
	const droneGridRef = useFlipLayout(draftItemIds.join("|"));
	const hiddenIdsForCity = city ? draftHiddenIds.filter((id) => allImportedMediaItems.some((item) => item.id === id && item.cityId === city.id && (item.kind === "panorama360" || item.kind === "aerialPhoto"))) : [];
	const panoramaMismatchCount = uploadForm.kind === "panorama360" ? fileDrafts.filter((draft) => draft.status === "ready" && !isLikelyEquirectangularPanorama(draft.width, draft.height)).length : 0;
	const aerialPanoramaHintCount = uploadForm.kind === "aerialPhoto" ? fileDrafts.filter((draft) => draft.status === "ready" && isLikelyEquirectangularPanorama(draft.width, draft.height)).length : 0;
	if (!city || items.length === 0 && true) return null;
	const mediaTitle = `${city.nameZh}无人机影像`;
	const uploadDroneFiles = async (event) => {
		event.preventDefault();
		if (!fileDrafts.length) {
			setNotice("请先选择无人机图片。");
			return;
		}
		if (fileDrafts.some((draft) => draft.status === "reading")) {
			setNotice("文件信息仍在读取，请稍候。");
			return;
		}
		if (fileDrafts.some((draft) => !/^\d{4}-\d{2}-\d{2}$/.test(draft.date))) {
			setNotice("每个文件都必须有有效的拍摄日期。文件未记录日期时，请手动补充。");
			return;
		}
		if (panoramaMismatchCount > 0) {
			setNotice(`检测到 ${panoramaMismatchCount} 张图片不是常见的 2:1 全景比例。请改选“航拍照片”，或重新选择正确的 360 全景图。`);
			return;
		}
		setBusy(true);
		setNotice(`正在接收 ${fileDrafts.length} 个无人机文件…`);
		try {
			const uploadedSourcePaths = [];
			for (const draft of fileDrafts) {
				const lat = draft.lat.trim() ? Number(draft.lat) : void 0;
				const lng = draft.lng.trim() ? Number(draft.lng) : void 0;
				const altitudeMeters = draft.altitudeMeters.trim() ? Number(draft.altitudeMeters) : void 0;
				const relativeAltitudeMeters = draft.relativeAltitudeMeters.trim() ? Number(draft.relativeAltitudeMeters) : void 0;
				const uploaded = await uploadLocalMedia({
					countryId: city.countryId ?? "",
					cityId: city.id,
					kind: uploadForm.kind,
					file: draft.file,
					date: draft.date,
					lat,
					lng,
					altitudeMeters,
					relativeAltitudeMeters,
					titleZh: mediaTitle,
					titleEn: `${city.nameEn} Drone Media`
				});
				uploadedSourcePaths.push(uploaded.sourcePath);
			}
			setNotice("文件已进入私有投递箱，正在生成三级网页资源…");
			await importLocalMedia(uploadedSourcePaths);
			reloadAfterLocalSave();
		} catch (error) {
			setNotice(error instanceof Error ? error.message : "无人机影像导入失败。");
			setBusy(false);
		}
	};
	const readSelectedFiles = async (files) => {
		const selectedFiles = Array.from(files ?? []);
		const runId = metadataRunRef.current + 1;
		metadataRunRef.current = runId;
		const pending = selectedFiles.map(pendingDraft);
		setFileDrafts(pending);
		if (!pending.length) {
			setNotice("");
			return;
		}
		setNotice(`正在读取 ${pending.length} 个文件的日期、坐标和高度信息…`);
		const resolved = await Promise.all(pending.map(async (draft) => {
			try {
				const [metadataResult, dimensionsResult] = await Promise.allSettled([readDroneFileMetadata(draft.file), readImageDimensions(draft.file)]);
				const metadata = metadataResult.status === "fulfilled" ? metadataResult.value : {};
				const dimensions = dimensionsResult.status === "fulfilled" ? dimensionsResult.value : void 0;
				const readErrors = [metadataResult.status === "rejected" ? "无法读取 EXIF/XMP 元数据" : void 0, dimensionsResult.status === "rejected" ? "无法读取图片尺寸" : void 0].filter(Boolean);
				return {
					...draft,
					status: "ready",
					date: metadata.date ?? "",
					lat: displayNumber(metadata.lat),
					lng: displayNumber(metadata.lng),
					altitudeMeters: displayNumber(metadata.altitudeMeters),
					relativeAltitudeMeters: displayNumber(metadata.relativeAltitudeMeters),
					camera: metadata.camera,
					...dimensions,
					...readErrors.length > 0 ? { error: `${readErrors.join("；")}。` } : {},
					fromFile: {
						date: metadata.date !== void 0,
						lat: metadata.lat !== void 0,
						lng: metadata.lng !== void 0,
						altitudeMeters: metadata.altitudeMeters !== void 0,
						relativeAltitudeMeters: metadata.relativeAltitudeMeters !== void 0
					}
				};
			} catch (error) {
				return {
					...draft,
					status: "ready",
					error: error instanceof Error ? error.message : "无法读取文件信息。"
				};
			}
		}));
		if (metadataRunRef.current !== runId) return;
		setFileDrafts(resolved);
		const missingDates = resolved.filter((draft) => !draft.date).length;
		setNotice(missingDates ? `文件信息读取完成；${missingDates} 个文件没有拍摄日期，请补充日期后导入。` : "文件信息读取完成；已读取到的字段已自动锁定，缺失字段可按需补充。");
	};
	const updateFileDraft = (id, field, value) => {
		setFileDrafts((current) => current.map((draft) => draft.id === id ? {
			...draft,
			[field]: value
		} : draft));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "drone-media-card glass-panel relative z-10 w-full p-[18px] text-left",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-panel-body drone-media-card-layout",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "drone-media-card-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-8 shrink-0 place-items-center rounded-lg border border-white/55 bg-white/45 text-sky-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drone, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase leading-4 tracking-[0.22em] text-white",
								children: "Drone Media"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 truncate text-[22px] font-semibold leading-[1.15] tracking-normal text-slate-950",
								children: mediaTitle
							})]
						}),
						null
					]
				}),
				editing && showUpload ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "atlas-local-editor-form atlas-local-editor-form-dark",
					onSubmit: uploadDroneFiles,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "选择文件后会先自动读取日期、GPS 坐标、海拔和相对高度。只有文件没有记录的字段才需要补充；其中仅拍摄日期必填。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "atlas-local-editor-form-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "atlas-local-media-kind",
								value: uploadForm.kind,
								onChange: (event) => setUploadForm((form) => ({
									...form,
									kind: event.target.value
								})),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "panorama360",
									children: "360° 全景"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "aerialPhoto",
									children: "航拍照片"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "atlas-local-file-picker",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										multiple: true,
										accept: "image/jpeg,image/png,image/webp,image/avif",
										"aria-label": "无人机图片",
										onChange: (event) => void readSelectedFiles(event.target.files)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "atlas-local-file-picker-button",
										children: "选择文件"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "atlas-local-file-picker-status",
										"data-empty": fileDrafts.length === 0,
										children: fileDrafts.length === 0 ? "未选取" : fileDrafts.length === 1 ? fileDrafts[0].file.name : `已选取 ${fileDrafts.length} 个文件`
									})
								]
							})]
						}),
						panoramaMismatchCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "atlas-local-editor-warning",
							role: "alert",
							children: [
								"检测到 ",
								panoramaMismatchCount,
								" 张图片不是常见的 2:1 等距柱状全景图，强行打开会产生明显拉伸。请把类型改为“航拍照片”，或重新选择正确的 360 全景图。"
							]
						}) : aerialPanoramaHintCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "atlas-local-editor-warning",
							role: "status",
							children: [
								"检测到 ",
								aerialPanoramaHintCount,
								" 张图片接近 2:1，可能是 360 全景图。如果它能水平环绕，请改选“360 全景”；如果只是普通宽幅航拍，可以继续导入。"
							]
						}) : null,
						fileDrafts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "atlas-drone-metadata-list",
							children: fileDrafts.map((draft, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "atlas-drone-metadata-card",
								"data-status": draft.status,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										String(index + 1).padStart(2, "0"),
										" · ",
										draft.file.name
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										(draft.file.size / 1024 / 1024).toFixed(2),
										" MiB",
										draft.camera ? ` · ${draft.camera}` : ""
									] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: draft.status === "reading" ? "读取中" : "读取完成" })] }),
									draft.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"未能解析元数据：",
										draft.error,
										"。仍可补充日期后导入。"
									] }) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "atlas-drone-metadata-fields",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["拍摄日期 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: draft.fromFile.date ? "文件读取" : "缺失 · 必填" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												required: true,
												readOnly: draft.fromFile.date,
												value: draft.date,
												onChange: (event) => updateFileDraft(draft.id, "date", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["纬度 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: draft.fromFile.lat ? "文件读取" : "缺失 · 选填" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "any",
												min: "-90",
												max: "90",
												readOnly: draft.fromFile.lat,
												placeholder: "未记录，可选填写",
												value: draft.lat,
												onChange: (event) => updateFileDraft(draft.id, "lat", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["经度 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: draft.fromFile.lng ? "文件读取" : "缺失 · 选填" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "any",
												min: "-180",
												max: "180",
												readOnly: draft.fromFile.lng,
												placeholder: "未记录，可选填写",
												value: draft.lng,
												onChange: (event) => updateFileDraft(draft.id, "lng", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["海拔 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: draft.fromFile.altitudeMeters ? "文件读取" : "缺失 · 选填" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "any",
												readOnly: draft.fromFile.altitudeMeters,
												placeholder: "米，可选填写",
												value: draft.altitudeMeters,
												onChange: (event) => updateFileDraft(draft.id, "altitudeMeters", event.target.value)
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["相对高度 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: draft.fromFile.relativeAltitudeMeters ? "文件读取" : "缺失 · 选填" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "any",
												readOnly: draft.fromFile.relativeAltitudeMeters,
												placeholder: "米，可选填写",
												value: draft.relativeAltitudeMeters,
												onChange: (event) => updateFileDraft(draft.id, "relativeAltitudeMeters", event.target.value)
											})] })
										]
									})
								]
							}, draft.id))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "atlas-local-import-submit",
							type: "submit",
							disabled: busy || panoramaMismatchCount > 0,
							children: "确认导入"
						})
					]
				}) : null,
				notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "atlas-local-editor-notice atlas-local-editor-notice-dark",
					role: "status",
					children: notice
				}) : null,
				editing && hiddenIdsForCity.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "atlas-local-editor-hidden-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "atlas-local-editor-restore",
						disabled: busy,
						onClick: () => {
							setBusy(true);
							updateLocalEditorState((current) => ({
								...current,
								hiddenDroneMediaIds: current.hiddenDroneMediaIds.filter((id) => !hiddenIdsForCity.includes(id))
							})).then(reloadAfterLocalSave).catch((error) => {
								setNotice(error instanceof Error ? error.message : "恢复失败。");
								setBusy(false);
							});
						},
						children: [
							"恢复本城隐藏影像（",
							hiddenIdsForCity.length,
							"）"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "atlas-local-editor-delete",
						disabled: busy,
						onClick: () => {
							if (!window.confirm(`确定永久删除本城已隐藏的 ${hiddenIdsForCity.length} 个影像吗？\n\n这会同时删除投递箱原图、生成后的网页文件和目录记录，无法恢复。`)) return;
							setBusy(true);
							setNotice("正在彻底删除已隐藏影像…");
							updateLocalEditorState((current) => ({
								...current,
								hiddenDroneMediaIds: [...new Set([...current.hiddenDroneMediaIds, ...hiddenIdsForCity])]
							})).then(() => deleteHiddenLocalMedia(city.id, hiddenIdsForCity)).then(reloadAfterLocalSave).catch((error) => {
								setNotice(error instanceof Error ? error.message : "删除失败。");
								setBusy(false);
							});
						},
						children: "删除隐藏影像"
					})]
				}) : null,
				displayedItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "atlas-local-editor-empty",
					children: "暂无无人机影像。点击设置，再点＋即可导入。"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: droneGridRef,
					className: "drone-media-track selector-scrollbar min-w-0 flex-1",
					children: displayedItems.map((item, index) => {
						if (!item) return null;
						const itemNumber = String(index + 1).padStart(2, "0");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							"data-flip-id": item.id,
							role: "button",
							tabIndex: 0,
							draggable: editing,
							"data-editing": editing,
							"data-dragging": draggedItemId === item.id,
							"data-active": item.id === activeItemId,
							"aria-pressed": item.id === activeItemId,
							onDragStart: (event) => {
								if (!editing) return;
								setDraggedItemId(item.id);
								event.dataTransfer.effectAllowed = "move";
								event.dataTransfer.setData("text/plain", item.id);
							},
							onDragOver: (event) => {
								if (!editing || !draggedItemId || draggedItemId === item.id) return;
								event.preventDefault();
								setDraftItemIds((current) => {
									const next = current.filter((id) => id !== draggedItemId);
									next.splice(next.indexOf(item.id), 0, draggedItemId);
									return next;
								});
							},
							onDragEnd: () => setDraggedItemId(void 0),
							onClick: (event) => {
								event.stopPropagation();
								if (!editing) onSelectItem(item);
							},
							onKeyDown: (event) => {
								if (!editing && (event.key === "Enter" || event.key === " ")) {
									event.preventDefault();
									event.stopPropagation();
									onSelectItem(item);
								}
							},
							className: "drone-media-item-card drone-media-item-card-thumbnail rounded-xl border border-white/65 bg-white/52 p-2 shadow-[0_8px_18px_rgba(15,23,42,0.07)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "drone-media-thumbnail-frame",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: `${item.thumbSrc}?starmapMedia=${encodeURIComponent(item.id)}`,
											alt: `${city.nameEn} drone media ${itemNumber}`,
											loading: "lazy",
											decoding: "async"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "drone-media-thumbnail-shade",
											"aria-hidden": "true"
										}),
										item.type === "panorama360" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "drone-media-panorama-badge",
											"aria-label": "360° 全景图",
											title: "360° 全景图",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												viewBox: "0 0 24 24",
												"aria-hidden": "true",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
														cx: "12",
														cy: "12",
														rx: "9",
														ry: "4.5"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12c0-4.4 4-8 9-8s9 3.6 9 8-4 8-9 8-9-3.6-9-8Z" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m7 10-2 2 2 2M17 10l2 2-2 2" })
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "360°" })]
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "drone-media-item-number drone-media-thumbnail-number",
									children: itemNumber
								}),
								editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "atlas-local-media-tools",
									onClick: (event) => event.stopPropagation(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "atlas-local-editor-drag",
										"aria-label": "拖动无人机影像排序",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										role: "button",
										tabIndex: 0,
										"aria-label": "隐藏无人机影像",
										title: "隐藏（不删除原图）",
										onClick: () => {
											setDraftItemIds((current) => current.filter((id) => id !== item.id));
											setDraftHiddenIds((current) => [...new Set([...current, item.id])]);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X$2, {})
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: (event) => {
										event.stopPropagation();
										onOpenPanorama(item);
									},
									className: "drone-media-view-button mt-1.5 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-slate-950 px-1.5 py-1.5 font-semibold text-white transition hover:bg-sky-500 hover:text-slate-950",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { "aria-hidden": "true" }), "View"]
								})
							]
						}, item.id);
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/InfoCard.tsx
var continentRules = [
	{
		continent: "North America",
		regions: [
			"north america",
			"北美",
			"中美",
			"加勒比"
		]
	},
	{
		continent: "South America",
		regions: ["south america", "南美"]
	},
	{
		continent: "Europe",
		regions: [
			"europe",
			"欧洲",
			"北欧",
			"东欧",
			"西欧",
			"南欧",
			"欧亚"
		]
	},
	{
		continent: "Asia",
		regions: [
			"asia",
			"亚洲",
			"东亚",
			"东南亚",
			"南亚",
			"中亚",
			"西亚",
			"中东",
			"印度洋"
		]
	},
	{
		continent: "Africa",
		regions: [
			"africa",
			"非洲",
			"北非",
			"东非",
			"西非",
			"南非"
		]
	},
	{
		continent: "Oceania",
		regions: [
			"oceania",
			"大洋洲",
			"澳洲"
		]
	},
	{
		continent: "Antarctica",
		regions: ["antarctica", "南极"]
	}
];
var getContinentName = (country) => {
	const regionText = [...country?.keywords ?? [], ...country?.records?.map((record) => record.region).filter(Boolean) ?? []].join(" ").toLowerCase();
	return continentRules.find(({ regions }) => regions.some((region) => regionText.includes(region)))?.continent ?? "—";
};
function InfoCard({ mode, selectedCountryId, selectedCityId, onSelectCity, onOpenCityPhotos }) {
	const country = selectedCountryId ? countryById[selectedCountryId] : void 0;
	const city = selectedCityId ? cityById[selectedCityId] : void 0;
	const isCityMode = mode === "city" && city && country;
	const isOverview = mode === "overview" || !country;
	const memoryCities = (0, import_react.useMemo)(() => country ? getCitiesForCountry(country.id) : [], [country]);
	const isCountryGrid = mode === "country" && Boolean(country);
	const cityPhotos = (0, import_react.useMemo)(() => isCityMode ? getCityPhotos(city.id) : [], [city, isCityMode]);
	const isCityPhotoGrid = isCityMode && cityPhotos.length > 0;
	const usesMemoryGridPreview = isCountryGrid || Boolean(isCityMode);
	const memorySectionLabel = isCityMode ? "City photos" : "City cards";
	const cityCoverPhoto = (0, import_react.useMemo)(() => isCityMode ? getCityCoverPhoto(city.id) : void 0, [city, isCityMode]);
	const photoInputRef = (0, import_react.useRef)(null);
	const [cityEditing, setCityEditing] = (0, import_react.useState)(false);
	const [photoEditing, setPhotoEditing] = (0, import_react.useState)(false);
	const [showAddCity, setShowAddCity] = (0, import_react.useState)(false);
	const [editorNotice, setEditorNotice] = (0, import_react.useState)("");
	const [editorBusy, setEditorBusy] = (0, import_react.useState)(false);
	const [draggedCityId, setDraggedCityId] = (0, import_react.useState)();
	const [draggedPhotoId, setDraggedPhotoId] = (0, import_react.useState)();
	const [draftCityIds, setDraftCityIds] = (0, import_react.useState)(memoryCities.map((item) => item.id));
	const [draftHiddenCityIds, setDraftHiddenCityIds] = (0, import_react.useState)(travelAtlasEditorState.hiddenCityIds);
	const [draftPhotoIds, setDraftPhotoIds] = (0, import_react.useState)(cityPhotos.map((item) => item.id));
	const [draftHiddenPhotoIds, setDraftHiddenPhotoIds] = (0, import_react.useState)(travelAtlasEditorState.hiddenMediaIds);
	const [draftCoverPhotoId, setDraftCoverPhotoId] = (0, import_react.useState)(cityCoverPhoto?.id);
	const [selectedCityOption, setSelectedCityOption] = (0, import_react.useState)();
	const [isManualCityEntry, setIsManualCityEntry] = (0, import_react.useState)(false);
	const [manualCity, setManualCity] = (0, import_react.useState)({
		nameZh: "",
		nameEn: "",
		lat: "",
		lng: ""
	});
	const [cityVisitDates, setCityVisitDates] = (0, import_react.useState)({
		startDate: "",
		endDate: ""
	});
	const cityByDraftId = new Map(memoryCities.map((item) => [item.id, item]));
	const photoByDraftId = new Map(cityPhotos.map((item) => [item.id, item]));
	const displayedMemoryCities = cityEditing ? draftCityIds.map((id) => cityByDraftId.get(id)).filter(Boolean) : memoryCities;
	const displayedCityPhotos = photoEditing ? draftPhotoIds.map((id) => photoByDraftId.get(id)).filter(Boolean) : cityPhotos;
	const memoryGridRef = useFlipLayout(isCityMode ? draftPhotoIds.join("|") : draftCityIds.join("|"));
	const hiddenCityIdsForCountry = country ? draftHiddenCityIds.filter((id) => id.startsWith(`${country.id}__`)) : [];
	const hiddenPhotoIdsForCity = city ? draftHiddenPhotoIds.filter((id) => allImportedMediaItems.some((item) => item.id === id && item.cityId === city.id && item.kind === "photo")) : [];
	const countryCode = country?.flagCode;
	const searchCityOptions = (0, import_react.useCallback)((query, signal) => {
		if (!countryCode) return Promise.reject(/* @__PURE__ */ new Error("这个国家缺少 ISO 代码，暂时无法检索城市。"));
		return searchLocalCities(query, countryCode, signal);
	}, [countryCode]);
	const addCity = async (event) => {
		event.preventDefault();
		if (!country) return;
		if (!selectedCityOption && !isManualCityEntry) {
			setEditorNotice("请先从候选列表中选择一个城市。");
			return;
		}
		const manualLat = Number(manualCity.lat);
		const manualLng = Number(manualCity.lng);
		const cityOption = isManualCityEntry ? {
			id: `manual-${manualCity.nameEn || manualCity.nameZh}`,
			nameZh: manualCity.nameZh.trim(),
			nameEn: (manualCity.nameEn || manualCity.nameZh).trim(),
			countryCode: country.flagCode ?? "",
			lat: manualLat,
			lng: manualLng,
			detail: "手动坐标",
			provider: "manual"
		} : selectedCityOption;
		if (!cityOption?.nameZh || !cityOption.nameEn || isManualCityEntry && (!manualCity.lat.trim() || !manualCity.lng.trim()) || !Number.isFinite(cityOption.lat) || !Number.isFinite(cityOption.lng) || cityOption.lat < -90 || cityOption.lat > 90 || cityOption.lng < -180 || cityOption.lng > 180) {
			setEditorNotice("请填写城市名称及有效经纬度。");
			return;
		}
		setEditorBusy(true);
		setEditorNotice("正在创建城市…");
		try {
			await addLocalTravelRecord({
				country: country.nameZh,
				country_en: country.nameEn,
				country_code: country.flagCode,
				city: cityOption.nameZh,
				city_en: cityOption.nameEn,
				start_date: cityVisitDates.startDate,
				end_date: cityVisitDates.endDate || void 0,
				lat: cityOption.lat,
				lng: cityOption.lng
			});
			reloadAfterLocalSave();
		} catch (error) {
			setEditorNotice(error instanceof Error ? error.message : "创建失败。");
			setEditorBusy(false);
		}
	};
	const uploadPhotos = async (files) => {
		if (!files?.length || !country || !city) return;
		setEditorBusy(true);
		setEditorNotice(`正在接收 ${files.length} 张照片…`);
		try {
			const uploadedSourcePaths = [];
			for (const file of Array.from(files)) {
				const uploaded = await uploadLocalMedia({
					countryId: country.id,
					cityId: city.id,
					kind: "photo",
					file
				});
				uploadedSourcePaths.push(uploaded.sourcePath);
			}
			setEditorNotice("照片已进入私有投递箱，正在生成三级网页资源…");
			await importLocalMedia(uploadedSourcePaths);
			reloadAfterLocalSave();
		} catch (error) {
			setEditorNotice(error instanceof Error ? error.message : "照片导入失败。");
			setEditorBusy(false);
		} finally {
			if (photoInputRef.current) photoInputRef.current.value = "";
		}
	};
	const visitedCityCount = country?.cityIds.length ?? 0;
	const openCityGallery = (galleryMode, initialPhotoId) => {
		if (!isCityPhotoGrid || !city) return;
		onOpenCityPhotos?.({
			photos: cityPhotos,
			cityName: city.nameZh ?? city.nameEn ?? "City",
			initialPhotoId,
			mode: galleryMode
		});
	};
	const eyebrowLabel = isOverview ? "Overview" : isCityMode ? "City info" : "Selected country";
	const title = isOverview ? "StarMap" : isCityMode ? city.nameZh : country.nameZh;
	const continentName = getContinentName(country);
	const titleDetail = isOverview ? "Journey map overview" : isCityMode ? `${city.nameZh} / ${city.nameEn}` : `${country.nameZh} / ${country.nameEn}`;
	const dateLabel = isOverview ? "Select a country or city" : isCityMode ? city.visitedDateRange : country.visitedDateRange;
	const summary = isOverview ? "A soft overview of visited destinations, mapped routes and future story material." : isCityMode ? city.summary : country.summary;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "atlas-info-panel selector-scrollbar glass-panel pointer-events-auto relative z-10 flex w-full max-w-sm flex-col overflow-hidden p-5 text-left",
		"data-memory-layout": usesMemoryGridPreview ? "grid" : "track",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-info-header mb-5 flex shrink-0 items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-panel-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "atlas-card-eyebrow text-xs font-semibold uppercase tracking-[0.24em] text-white",
						children: eyebrowLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "atlas-card-title mt-2 text-2xl font-semibold tracking-normal text-slate-950",
						children: title
					}),
					!isOverview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium text-slate-600",
						children: isCityMode ? city.nameEn : country.nameEn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-medium text-white",
						children: isCityMode ? city.visitedDateRange : country.visitedDateRange
					})] }) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "atlas-panel-body grid size-11 place-items-center rounded-full bg-slate-950 text-white shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5" })
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-info-content atlas-panel-body flex min-h-0 flex-1 flex-col gap-4",
			children: [
				isOverview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-slate-500",
					children: dateLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-xl font-semibold tracking-normal text-slate-950",
					children: titleDetail
				})] }) : null,
				isCityMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "atlas-preview-card shrink-0 overflow-hidden rounded-[22px] border border-white/70 bg-white/50 shadow-[0_16px_50px_rgba(15,23,42,0.1)]",
					children: [cityCoverPhoto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getMediaSource(cityCoverPhoto, "thumb"),
						alt: `${city.nameEn} travel preview`,
						className: "h-24 w-full object-cover",
						loading: "lazy",
						decoding: "async"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-24 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.95),transparent_24%),linear-gradient(135deg,rgba(14,165,233,0.52),rgba(15,23,42,0.78)),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] bg-[length:auto,auto,28px_28px]",
						style: { backgroundColor: country.accent }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-400",
							children: "Preview image"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-slate-500",
							children: city.nameEn
						})]
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid shrink-0 grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "atlas-info-metric rounded-[18px] border border-white/60 bg-white/55 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: isOverview ? "Mode" : isCityMode ? "Country" : "Visited Cities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-slate-900",
							children: isOverview ? "Overview" : isCityMode ? country.nameEn : `${visitedCityCount} ${visitedCityCount === 1 ? "city" : "cities"}`
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "atlas-info-metric rounded-[18px] border border-white/60 bg-white/55 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-400",
							children: isOverview ? "Keywords" : "Continent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-slate-900",
							children: isOverview ? "Travel / Games" : continentName
						})]
					})]
				}),
				isOverview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-6 text-slate-600",
					children: summary
				}) : null,
				(isCountryGrid || isCityMode) && ((isCityMode ? cityPhotos.length > 0 : memoryCities.length > 0) || false) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `atlas-memory-panel flex min-h-0 flex-col rounded-[22px] bg-slate-950 p-3 text-white shadow-[0_18px_50px_rgba(15,23,42,0.2)] ${usesMemoryGridPreview ? "atlas-memory-panel-grid-preview" : ""}`,
					"data-photo-gallery": isCityMode ? "true" : void 0,
					onClick: isCityPhotoGrid ? () => openCityGallery("grid") : void 0,
					children: [
						isCityMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "atlas-memory-panel-heading-row mb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "atlas-memory-panel-heading flex shrink-0 items-center gap-2",
									disabled: !isCityPhotoGrid || photoEditing,
									onClick: (event) => {
										event.stopPropagation();
										openCityGallery("grid");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-sky-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-[0.18em] text-slate-400",
										children: memorySectionLabel
									})]
								}),
								null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: photoInputRef,
									className: "sr-only",
									type: "file",
									accept: "image/jpeg,image/png,image/webp,image/avif",
									multiple: true,
									onChange: (event) => void uploadPhotos(event.currentTarget.files)
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "atlas-memory-panel-heading-row mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-sky-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.18em] text-slate-400",
									children: memorySectionLabel
								})]
							}), null]
						}),
						isCountryGrid && cityEditing && showAddCity ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "atlas-local-editor-form atlas-local-editor-form-dark",
							onSubmit: addCity,
							onClick: (event) => event.stopPropagation(),
							children: [
								isManualCityEntry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "atlas-local-editor-form-grid",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "atlas-local-editor-date-field",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "城市名称" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												value: manualCity.nameZh,
												onChange: (event) => setManualCity((value) => ({
													...value,
													nameZh: event.target.value
												}))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "atlas-local-editor-date-field",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "英文名（可选）" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: manualCity.nameEn,
												onChange: (event) => setManualCity((value) => ({
													...value,
													nameEn: event.target.value
												}))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "atlas-local-editor-date-field",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "纬度（-90～90）" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "number",
												min: "-90",
												max: "90",
												step: "any",
												value: manualCity.lat,
												onChange: (event) => setManualCity((value) => ({
													...value,
													lat: event.target.value
												}))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "atlas-local-editor-date-field",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "经度（-180～180）" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "number",
												min: "-180",
												max: "180",
												step: "any",
												value: manualCity.lng,
												onChange: (event) => setManualCity((value) => ({
													...value,
													lng: event.target.value
												}))
											})]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationSearchField, {
									label: "城市名称",
									placeholder: "输入中文或 English，至少 2 个字…",
									selected: selectedCityOption,
									search: searchCityOptions,
									onSelect: setSelectedCityOption,
									minQueryLength: 2,
									searchOnSubmit: true,
									getMeta: (option) => option.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "atlas-local-editor-mode-toggle",
									onClick: () => {
										setIsManualCityEntry((value) => !value);
										setSelectedCityOption(void 0);
										setEditorNotice("");
									},
									children: isManualCityEntry ? "返回在线检索" : "搜索不到？手动填写坐标"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "atlas-local-editor-form-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "atlas-local-editor-date-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "到访日期" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "date",
											value: cityVisitDates.startDate,
											onChange: (event) => setCityVisitDates((dates) => ({
												...dates,
												startDate: event.target.value
											}))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "atlas-local-editor-date-field",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "结束日期（可选）" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											min: cityVisitDates.startDate || void 0,
											value: cityVisitDates.endDate,
											onChange: (event) => setCityVisitDates((dates) => ({
												...dates,
												endDate: event.target.value
											}))
										})]
									})]
								}),
								!isManualCityEntry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "atlas-local-editor-attribution",
									children: [
										"城市检索需要联网：优先使用 Cesium ion geocode；无权限、无结果或超时后回退",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://www.openstreetmap.org/copyright",
											target: "_blank",
											rel: "noreferrer",
											children: "© OpenStreetMap contributors"
										}),
										"。"
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: editorBusy || !isManualCityEntry && !selectedCityOption,
									children: "确认添加城市"
								})
							]
						}) : null,
						editorNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "atlas-local-editor-notice atlas-local-editor-notice-dark",
							role: "status",
							children: editorNotice
						}) : null,
						isCountryGrid && cityEditing && hiddenCityIdsForCountry.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "atlas-local-editor-restore",
							disabled: editorBusy,
							onClick: (event) => {
								event.stopPropagation();
								setEditorBusy(true);
								updateLocalEditorState((current) => ({
									...current,
									hiddenCityIds: current.hiddenCityIds.filter((id) => !id.startsWith(`${country?.id}__`))
								})).then(reloadAfterLocalSave).catch((error) => {
									setEditorNotice(error instanceof Error ? error.message : "恢复失败。");
									setEditorBusy(false);
								});
							},
							children: [
								"恢复本国已隐藏城市（",
								hiddenCityIdsForCountry.length,
								"）"
							]
						}) : null,
						isCityMode && photoEditing && hiddenPhotoIdsForCity.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "atlas-local-editor-hidden-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "atlas-local-editor-restore",
								disabled: editorBusy,
								onClick: (event) => {
									event.stopPropagation();
									setEditorBusy(true);
									updateLocalEditorState((current) => ({
										...current,
										hiddenMediaIds: current.hiddenMediaIds.filter((id) => !hiddenPhotoIdsForCity.includes(id))
									})).then(reloadAfterLocalSave).catch((error) => {
										setEditorNotice(error instanceof Error ? error.message : "恢复失败。");
										setEditorBusy(false);
									});
								},
								children: [
									"恢复本城隐藏照片（",
									hiddenPhotoIdsForCity.length,
									"）"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "atlas-local-editor-delete",
								disabled: editorBusy,
								onClick: (event) => {
									event.stopPropagation();
									if (!window.confirm(`确定永久删除本城已隐藏的 ${hiddenPhotoIdsForCity.length} 张照片吗？\n\n这会同时删除投递箱原图、生成后的网页文件和目录记录，无法恢复。`)) return;
									setEditorBusy(true);
									setEditorNotice("正在彻底删除已隐藏照片…");
									updateLocalEditorState((current) => ({
										...current,
										hiddenMediaIds: [...new Set([...current.hiddenMediaIds, ...hiddenPhotoIdsForCity])]
									})).then(() => deleteHiddenLocalMedia(city.id, hiddenPhotoIdsForCity)).then(reloadAfterLocalSave).catch((error) => {
										setEditorNotice(error instanceof Error ? error.message : "彻底删除失败。");
										setEditorBusy(false);
									});
								},
								children: "彻底删除隐藏照片"
							})]
						}) : null,
						isCityMode && displayedCityPhotos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "atlas-local-editor-empty",
							children: "暂无城市照片。点击设置，再点＋即可从本机导入。"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: memoryGridRef,
							className: `atlas-memory-track selector-scrollbar min-h-0 gap-3 overflow-auto pb-2 ${usesMemoryGridPreview ? "atlas-memory-grid-preview" : "flex snap-x"}`,
							children: isCityMode ? displayedCityPhotos.map((photo, index) => {
								if (!photo) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"data-flip-id": photo.id,
									className: "city-photo-card",
									"data-editing": photoEditing,
									"data-dragging": draggedPhotoId === photo.id,
									draggable: photoEditing,
									"aria-label": `Open ${city.nameEn} photo ${index + 1}`,
									onDragStart: (event) => {
										if (!photoEditing) return;
										setDraggedPhotoId(photo.id);
										event.dataTransfer.effectAllowed = "move";
										event.dataTransfer.setData("text/plain", photo.id);
									},
									onDragOver: (event) => {
										if (!photoEditing || !draggedPhotoId || draggedPhotoId === photo.id) return;
										event.preventDefault();
										setDraftPhotoIds((current) => {
											const next = current.filter((id) => id !== draggedPhotoId);
											next.splice(next.indexOf(photo.id), 0, draggedPhotoId);
											return next;
										});
									},
									onDragEnd: () => setDraggedPhotoId(void 0),
									onClick: (event) => {
										event.stopPropagation();
										if (!photoEditing) openCityGallery("viewer", photo.id);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: getMediaSource(photo, "thumb"),
											alt: `${city.nameEn} city photo ${index + 1}`,
											loading: "lazy",
											decoding: "async"
										}),
										photoEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "atlas-local-media-tools",
											onClick: (event) => event.stopPropagation(),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "atlas-local-editor-drag",
													"aria-label": "拖动照片排序",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													role: "button",
													tabIndex: 0,
													"data-active": draftCoverPhotoId === photo.id,
													"aria-label": "设为城市封面",
													title: "设为城市封面",
													onClick: () => setDraftCoverPhotoId(photo.id),
													onKeyDown: (event) => {
														if (event.key === "Enter" || event.key === " ") setDraftCoverPhotoId(photo.id);
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													role: "button",
													tabIndex: 0,
													"aria-label": "隐藏照片",
													title: "隐藏（不删除原图）",
													onClick: () => {
														setDraftPhotoIds((current) => current.filter((id) => id !== photo.id));
														setDraftHiddenPhotoIds((current) => [...new Set([...current, photo.id])]);
														if (draftCoverPhotoId === photo.id) setDraftCoverPhotoId(void 0);
													},
													onKeyDown: (event) => {
														if (event.key === "Enter" || event.key === " ") {
															setDraftPhotoIds((current) => current.filter((id) => id !== photo.id));
															setDraftHiddenPhotoIds((current) => [...new Set([...current, photo.id])]);
														}
													},
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X$2, {})
												})
											]
										}) : null,
										draftCoverPhotoId === photo.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "atlas-local-cover-badge",
											children: "封面"
										}) : null
									]
								}, photo.id);
							}) : displayedMemoryCities.map((memoryCity, index) => {
								if (!memoryCity) return null;
								const isActive = memoryCity.id === selectedCityId;
								const memoryCoverPhoto = getCityCoverPhoto(memoryCity.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"data-flip-id": memoryCity.id,
									"data-editing": cityEditing,
									"data-dragging": draggedCityId === memoryCity.id,
									draggable: cityEditing,
									onDragStart: (event) => {
										if (!cityEditing) return;
										setDraggedCityId(memoryCity.id);
										event.dataTransfer.effectAllowed = "move";
										event.dataTransfer.setData("text/plain", memoryCity.id);
									},
									onDragOver: (event) => {
										if (!cityEditing || !draggedCityId || draggedCityId === memoryCity.id) return;
										event.preventDefault();
										setDraftCityIds((current) => {
											const next = current.filter((id) => id !== draggedCityId);
											next.splice(next.indexOf(memoryCity.id), 0, draggedCityId);
											return next;
										});
									},
									onDragEnd: () => setDraggedCityId(void 0),
									onClick: () => {
										if (!cityEditing) onSelectCity?.(memoryCity.id);
									},
									"aria-pressed": isActive,
									className: `memory-city-card overflow-hidden rounded-[18px] border transition ${usesMemoryGridPreview ? "memory-city-card-grid-preview min-w-0" : "min-w-[154px] snap-start"} ${isActive ? "border-sky-300/90 bg-white/18 shadow-[0_0_34px_rgba(125,211,252,0.2)]" : "border-white/10 bg-white/10"}`,
									children: [
										memoryCoverPhoto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: getMediaSource(memoryCoverPhoto, "thumb"),
											alt: `${memoryCity.nameEn} travel memory`,
											className: `w-full object-cover ${usesMemoryGridPreview ? "h-[52px]" : "h-24"}`,
											loading: "lazy",
											decoding: "async"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `${usesMemoryGridPreview ? "h-[52px]" : "h-24"} bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.92),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.24),rgba(15,23,42,0.28)),linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,auto,22px_22px]`,
											style: { backgroundColor: country?.accent ?? "#38bdf8" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3",
											children: [
												isCountryGrid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "memory-city-card-heading",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "memory-city-card-title text-sm font-semibold text-white",
														children: memoryCity.nameZh
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "memory-city-card-index text-xs font-medium uppercase tracking-[0.16em] text-slate-400",
														children: String(index + 1).padStart(2, "0")
													})]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "memory-city-card-index text-xs font-medium uppercase tracking-[0.16em] text-slate-400",
													children: String(index + 1).padStart(2, "0")
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "memory-city-card-title mt-1 text-sm font-semibold text-white",
													children: memoryCity.nameZh
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "memory-city-card-subtitle text-xs text-slate-300",
													children: memoryCity.nameEn
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "memory-city-card-date mt-2 text-xs leading-5 text-slate-300",
													children: memoryCity.visitedDateRange ?? "Travel memory"
												})
											]
										}),
										cityEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "atlas-local-media-tools atlas-local-city-tools",
											onClick: (event) => event.stopPropagation(),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "atlas-local-editor-drag",
												"aria-label": "拖动城市排序",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												role: "button",
												tabIndex: 0,
												"aria-label": `隐藏${memoryCity.nameZh}`,
												title: "隐藏（不删除旅行记录）",
												onClick: () => {
													if (!window.confirm(`从本地展示中隐藏“${memoryCity.nameZh}”？原始旅行记录不会删除。`)) return;
													setDraftCityIds((current) => current.filter((id) => id !== memoryCity.id));
													setDraftHiddenCityIds((current) => [...new Set([...current, memoryCity.id])]);
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X$2, {})
											})]
										}) : null
									]
								}, memoryCity.id);
							})
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2 text-xs font-medium text-slate-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4" }),
						"Focus: ",
						isOverview ? "World overview" : isCityMode ? city.nameEn : country.nameEn
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/CityPhotoGalleryModal.tsx
function CityPhotoGalleryModal({ photos, cityName, initialPhotoId, mode: initialMode, onClose }) {
	const initialIndex = Math.max(0, photos.findIndex((photo) => photo.id === initialPhotoId));
	const [mode, setMode] = (0, import_react.useState)(initialMode);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(initialIndex);
	const activePhoto = photos[activeIndex];
	const activeThumbRef = (0, import_react.useRef)(null);
	const dialogTitleId = "city-photo-gallery-title";
	const gridPhotos = (0, import_react.useMemo)(() => photos.map((photo, index) => ({
		photo,
		index
	})), [photos]);
	(0, import_react.useEffect)(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				onClose();
				return;
			}
			if (mode !== "viewer") return;
			if (event.key === "ArrowLeft") setActiveIndex((current) => (current - 1 + photos.length) % photos.length);
			if (event.key === "ArrowRight") setActiveIndex((current) => (current + 1) % photos.length);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		mode,
		onClose,
		photos.length
	]);
	(0, import_react.useEffect)(() => {
		if (mode === "viewer") activeThumbRef.current?.scrollIntoView({
			block: "nearest",
			inline: "center"
		});
	}, [activeIndex, mode]);
	if (!activePhoto) return null;
	const showPhoto = (index) => {
		setActiveIndex(index);
		setMode("viewer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "city-photo-gallery-modal",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": dialogTitleId,
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "city-photo-gallery-window",
			"data-mode": mode,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "city-photo-gallery-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "city-photo-gallery-kicker",
							children: "City Photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: dialogTitleId,
							children: cityName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [photos.length, " photos"] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "city-photo-gallery-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "city-photo-gallery-view-toggle",
						"aria-label": mode === "grid" ? "Open single photo view" : "Open card view",
						onClick: () => setMode((current) => current === "grid" ? "viewer" : "grid"),
						children: [mode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rows3, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: mode === "grid" ? "Viewer" : "Cards" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "city-photo-gallery-close",
						"aria-label": "Close photo gallery",
						onClick: onClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X$2, { "aria-hidden": "true" })
					})]
				})]
			}), mode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "city-photo-gallery-grid selector-scrollbar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "city-photo-gallery-grid-flow",
					children: gridPhotos.map(({ photo, index }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "city-photo-gallery-grid-item",
						onClick: () => showPhoto(index),
						"aria-label": `Open ${cityName} photo ${index + 1}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getMediaSource(photo, "thumb"),
							alt: `${cityName} photo ${index + 1}`,
							width: photo.variants?.thumb?.width ?? photo.width,
							height: photo.variants?.thumb?.height ?? photo.height,
							loading: "lazy",
							decoding: "async"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") })]
					}, photo.id))
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "city-photo-gallery-viewer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "city-photo-gallery-stage",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "city-photo-gallery-nav city-photo-gallery-nav-prev",
							"aria-label": "Previous photo",
							onClick: () => setActiveIndex((current) => (current - 1 + photos.length) % photos.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { "aria-hidden": "true" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "city-photo-gallery-main-image",
							src: getMediaSource(activePhoto, "preview"),
							alt: `${cityName} photo ${activeIndex + 1}`,
							width: activePhoto.variants?.preview?.width ?? activePhoto.width,
							height: activePhoto.variants?.preview?.height ?? activePhoto.height,
							decoding: "async"
						}, activePhoto.id),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "city-photo-gallery-nav city-photo-gallery-nav-next",
							"aria-label": "Next photo",
							onClick: () => setActiveIndex((current) => (current + 1) % photos.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { "aria-hidden": "true" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "city-photo-gallery-counter",
							children: [
								String(activeIndex + 1).padStart(2, "0"),
								" / ",
								String(photos.length).padStart(2, "0")
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "city-photo-gallery-filmstrip selector-scrollbar",
					"aria-label": "Photo thumbnails",
					children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						ref: index === activeIndex ? activeThumbRef : void 0,
						className: "city-photo-gallery-thumb",
						"data-active": index === activeIndex,
						"aria-label": `Show ${cityName} photo ${index + 1}`,
						"aria-pressed": index === activeIndex,
						onClick: () => setActiveIndex(index),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: getMediaSource(photo, "thumb"),
							alt: "",
							loading: "lazy",
							decoding: "async"
						})
					}, photo.id))
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/Timeline.tsx
var orderedDays = [...journeyDays].sort((left, right) => `${right.date}-${right.id}`.localeCompare(`${left.date}-${left.id}`));
function Timeline({ selectedDayId, onSelectDay, onHoverCity }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "stories",
		className: "journey-view-section journey-timeline-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "journey-section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "journey-kicker",
					children: "Latest first"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Journey timeline" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "journey-order-note",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Newest memories at the top" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "journey-timeline-rail",
				children: orderedDays.map((day, index) => {
					const city = cityById[day.cityId];
					const country = day.countryId ? countryById[day.countryId] : void 0;
					if (!city || !country) return null;
					const isSelected = day.id === selectedDayId;
					const year = day.date.slice(0, 4);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "journey-timeline-entry",
						children: [
							index === 0 || orderedDays[index - 1]?.date.slice(0, 4) !== year ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "journey-year-marker",
								children: year
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "journey-timeline-node",
								style: { "--journey-accent": country.accent }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "journey-timeline-card journey-timeline-card-compact",
								"data-selected": isSelected,
								style: { "--journey-accent": country.accent },
								onClick: () => onSelectDay(day),
								onMouseEnter: () => onHoverCity(day.cityId),
								onMouseLeave: () => onHoverCity(void 0),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "journey-timeline-date",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day.date }), country.flagCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "journey-timeline-flag",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												alt: "",
												src: `https://flagcdn.com/w80/${country.flagCode}.png`
											})
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.flag ?? "•" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "journey-timeline-copy",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "journey-timeline-place",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: city.nameZh }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: city.nameEn })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "journey-timeline-country-line",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: country.nameZh }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.nameEn })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "journey-timeline-open",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
									})
								]
							})
						]
					}, day.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "journey-public-note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Public view · travel records are presented as concise memory notes." })]
			})
		]
	});
}
//#endregion
//#region src/components/UpdateChecker.tsx
var ReleaseMarkdown = (0, import_react.lazy)(() => __vitePreload(() => import("./ReleaseMarkdown-uc3lyqPR.js"), []));
function ReleaseUpdateButton({ active, state, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "atlas-dock-button atlas-release-button pointer-events-auto",
		"aria-label": active ? "返回上一界面" : "版本更新",
		"aria-current": active ? "page" : void 0,
		title: active ? "返回上一界面" : state.hasUnseenUpdate ? "发现新版本，查看更新" : "版本更新",
		"data-update-available": state.hasUnseenUpdate ? "true" : "false",
		onClick: onToggle,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
			"aria-hidden": "true",
			className: state.status === "checking" ? "is-spinning" : ""
		}), state.hasUnseenUpdate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "atlas-release-signal",
			"aria-hidden": "true"
		}) : null]
	});
}
function ReleaseUpdatePage({ state }) {
	const statusCopy = state.status === "checking" ? "正在检查最新版本" : state.status === "available" && state.release ? `发现新版本 ${state.release.tag_name}` : state.status === "current" ? state.message || "当前已是最新版本" : state.status === "unconfigured" ? state.message || "尚未配置 GitHub 更新源" : state.message || "等待检查版本状态";
	const announcement = state.release?.body?.trim() || `StarMap v${state.currentVersion}\n\n当前公共版包含 Map、Journey 与版本更新中心；默认中文，支持本地数据与媒体边界，并恢复了单次点击召唤的 3 秒高密度流星雨。`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "atlas-update-scroll selector-scrollbar h-full overflow-y-auto overscroll-contain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-update-shell mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "update-command-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "journey-kicker",
						children: "Release center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "版本更新" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "在不覆盖私人数据和本地修改的前提下，了解并完成 StarMap 更新。" })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "update-status-card",
					"data-status": state.status,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "update-status-light",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["当前版本 v", state.currentVersion] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: statusCopy })] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "update-content-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "update-content-card update-guide-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-card-index",
								children: "01"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-card-kicker",
								children: "Guide"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "更新指南" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "先保存或提交自己的本地修改，并确认私人照片和环境文件仍在忽略范围内。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "阅读本页的更新公告与版本说明，确认这次更新是否影响自己的定制内容。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "复制 AI 更新指令，交给能访问项目文件的 AI 以“合并”方式执行更新。" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "更新后运行 lint、build、privacy:check 和 media:check，再打开网站检查地图与照片。" })
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "update-content-card update-version-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-card-index",
								children: "02"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-card-kicker",
								children: "Version notes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "版本说明" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "当前版本" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["v", state.currentVersion] })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "最新版本" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: state.release?.tag_name ?? "尚未发布" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "发布时间" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: state.release?.published_at ? new Date(state.release.published_at).toLocaleDateString("zh-CN") : "—" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "更新方式" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "人工确认 / AI 辅助合并" })] })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-caution",
								children: "注意：更新不会自动覆盖项目。请勿替换 `.env.local`、私人旅行数据、个人媒体或未提交修改。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "update-page-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: !state.release,
									onClick: () => void state.copyUpdatePrompt(),
									children: [state.copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { "aria-hidden": "true" }), state.copied ? "已复制" : "复制 AI 更新指令"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: state.status === "checking",
									onClick: () => void state.checkForUpdates(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { "aria-hidden": "true" }), "重新检查"]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "update-content-card update-announcement-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-card-index",
								children: "03"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "update-card-kicker",
								children: "Announcement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "更新公告" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "update-release-copy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "update-release-loading",
										children: "正在排版更新公告…"
									}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseMarkdown, { source: announcement })
								})
							}),
							state.release ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "update-release-link",
								href: state.release.html_url,
								target: "_blank",
								rel: "noreferrer",
								children: ["查看 GitHub Release ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
							}) : null
						]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/JourneyViewToggle.tsx
var options = [{
	id: "yearCards",
	label: "Year Cards",
	icon: CalendarRange
}, {
	id: "timeline",
	label: "Timeline",
	icon: Rows3
}];
function JourneyViewToggle({ value, onChange, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `journey-view-toggle inline-flex items-center gap-1 rounded-full border border-white/70 bg-white/50 p-1 text-sm font-medium text-slate-500 shadow-sm backdrop-blur-xl ${className}`,
		role: "group",
		"aria-label": "Journey view",
		children: options.map((option) => {
			const Icon = option.icon;
			const isActive = value === option.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": isActive,
				onClick: () => onChange(option.id),
				className: `inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${isActive ? "bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)]" : "hover:bg-white/70 hover:text-slate-950"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), option.label]
			}, option.id);
		})
	});
}
//#endregion
//#region src/components/JourneyYearCards.tsx
var getDayEndDate = (day) => {
	const record = cityById[day.cityId]?.records?.find((item) => item.id === day.id);
	return record?.end_date || record?.start_date || day.date;
};
var buildYearGroups = () => {
	const orderedDays = [...journeyDays].sort((a, b) => `${a.date}-${a.id}`.localeCompare(`${b.date}-${b.id}`));
	const groups = /* @__PURE__ */ new Map();
	orderedDays.forEach((day) => {
		if (!day.countryId) return;
		const year = Number(day.date.slice(0, 4));
		if (!Number.isFinite(year)) return;
		const countriesForYear = groups.get(year) ?? /* @__PURE__ */ new Map();
		const countryGroup = countriesForYear.get(day.countryId) ?? {
			days: [],
			cityIds: /* @__PURE__ */ new Set()
		};
		countryGroup.days.push(day);
		countryGroup.cityIds.add(day.cityId);
		countriesForYear.set(day.countryId, countryGroup);
		groups.set(year, countriesForYear);
	});
	return [...groups.entries()].map(([year, countriesForYear]) => ({
		year,
		countries: [...countriesForYear.entries()].map(([countryId, group]) => {
			const country = countryById[countryId];
			const endDates = group.days.map(getDayEndDate).sort();
			return {
				country,
				startDate: group.days[0]?.date ?? `${year}`,
				endDate: endDates[endDates.length - 1] ?? group.days[0]?.date ?? `${year}`,
				cities: country.cityIds.filter((cityId) => group.cityIds.has(cityId)).map((cityId) => cityById[cityId]).filter((city) => Boolean(city) && !shouldHideCityFromNavigation(city))
			};
		}).filter((group) => Boolean(group.country)).sort((a, b) => a.startDate.localeCompare(b.startDate))
	})).sort((a, b) => b.year - a.year);
};
var yearGroups = buildYearGroups();
function JourneyYearCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "journey-view-section mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-[18px]",
			children: yearGroups.map((yearGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "journey-year-group p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-full border border-white/70 bg-white/55 text-slate-500 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-400",
						children: "Travel year"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl font-semibold tracking-normal text-slate-950",
						children: yearGroup.year
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "selector-scrollbar flex snap-x gap-4 overflow-x-auto pb-3",
					children: yearGroup.countries.map((countryGroup) => {
						const { country } = countryGroup;
						const dateRange = countryGroup.startDate === countryGroup.endDate ? countryGroup.startDate : `${countryGroup.startDate} - ${countryGroup.endDate}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "journey-country-card min-h-[260px] w-[290px] shrink-0 snap-start rounded-[24px] border border-white/70 bg-white/48 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/65 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "journey-year-card-flag",
											"aria-hidden": "true",
											children: country.flagCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												alt: "",
												src: `https://flagcdn.com/w80/${country.flagCode}.png`
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.flag ?? "•" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "truncate text-xl font-semibold tracking-normal text-slate-950",
												children: country.nameZh
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 truncate text-sm font-medium text-slate-500",
												children: country.nameEn
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 size-3 rounded-full shadow-[0_0_18px_var(--country-color)]",
										style: {
											backgroundColor: country.accent,
											"--country-color": country.accent
										},
										"aria-hidden": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs font-medium text-slate-400",
									children: dateRange
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 space-y-2",
									children: countryGroup.cities.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5 text-sm leading-5 text-slate-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-3.5 shrink-0 text-sky-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold",
												children: city.nameZh
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-slate-400",
												children: city.nameEn
											})
										] })]
									}, city.id))
								})
							]
						}, `${yearGroup.year}-${country.id}`);
					})
				})]
			}, yearGroup.year))
		})
	});
}
var package_default = {
	name: "starmap",
	"private": true,
	version: "0.3.2",
	type: "module",
	scripts: {
		"dev": "npm run dev:public",
		"dev:public": "vite --mode public --host 127.0.0.1 --port 5173 --strictPort",
		"dev:personal": "vite --mode personal --host 127.0.0.1 --port 5173 --strictPort",
		"build": "npm run build:public",
		"build:public": "tsc -b && vite build --mode public",
		"build:github": "tsc -b && vite build --mode github",
		"build:showcase": "tsc -b && vite build --mode showcase",
		"build:personal": "tsc -b && vite build --mode personal",
		"lint": "eslint src scripts vite.config.ts",
		"media:check": "node scripts/import-media.mjs",
		"media:import": "node scripts/import-media.mjs --apply",
		"privacy:check": "git -C .. ls-files --cached --others --exclude-standard -z | node scripts/privacy-audit.mjs --manifest-stdin",
		"release:check": "npm run privacy:check && node scripts/public-release-check.mjs",
		"preview": "vite preview"
	},
	dependencies: {
		"@photo-sphere-viewer/core": "^5.14.1",
		"@tailwindcss/vite": "^4.3.0",
		"cesium": "^1.142.0",
		"exifr": "^7.1.3",
		"lucide-react": "^1.17.0",
		"react": "^19.2.6",
		"react-dom": "^19.2.6",
		"react-globe.gl": "^2.38.0",
		"react-markdown": "^10.1.0",
		"remark-gfm": "^4.0.1",
		"resium": "^1.23.0",
		"tailwindcss": "^4.3.0",
		"three": "^0.184.0",
		"undici": "^8.10.0",
		"world-countries": "^5.1.0"
	},
	devDependencies: {
		"@eslint/js": "^10.0.1",
		"@types/node": "^24.12.3",
		"@types/react": "^19.2.14",
		"@types/react-dom": "^19.2.3",
		"@vitejs/plugin-react": "^6.0.1",
		"eslint": "^10.3.0",
		"eslint-plugin-react-hooks": "^7.1.1",
		"eslint-plugin-react-refresh": "^0.5.2",
		"globals": "^17.6.0",
		"sharp": "^0.35.3",
		"typescript": "~6.0.2",
		"typescript-eslint": "^8.59.2",
		"vite": "^8.0.12",
		"vite-plugin-cesium": "^1.2.23"
	}
};
//#endregion
//#region src/data/releaseUpdates.ts
var repository = "Aisland-SJL/StarMap".trim();
var repositoryConfigured = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository);
var currentVersion = package_default.version;
var checkIntervalMs = 720 * 60 * 1e3;
var numericVersion = (version) => {
	const match = version.trim().replace(/^v/i, "").match(/^(\d+)\.(\d+)\.(\d+)/);
	return match ? match.slice(1).map(Number) : void 0;
};
var isNewerVersion = (candidate, current) => {
	const candidateParts = numericVersion(candidate);
	const currentParts = numericVersion(current);
	if (!candidateParts || !currentParts) return candidate.trim().replace(/^v/i, "") !== current.trim().replace(/^v/i, "");
	for (let index = 0; index < candidateParts.length; index += 1) {
		if (candidateParts[index] > currentParts[index]) return true;
		if (candidateParts[index] < currentParts[index]) return false;
	}
	return false;
};
var updatePrompt = (release) => `请帮我安全更新 StarMap 到 ${release.tag_name}。

开始前先读取项目中的 AGENTS.md、README 和 Handoff（如果存在），检查我当前的 Git 状态、本地修改和私有数据边界。请从上游 Release ${release.html_url} 获取变更，先解释哪些文件会受影响，再以合并方式更新；不要覆盖我的 .env.local、私有旅行数据、个人媒体或未提交修改。若出现冲突，保留我的内容并逐项说明。完成后运行项目规定的 lint、build、privacy:check 和 media:check，并报告仍需我决定的事项。`;
function useReleaseUpdates() {
	const [status, setStatus] = (0, import_react.useState)(repositoryConfigured ? "idle" : "unconfigured");
	const [release, setRelease] = (0, import_react.useState)();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [hasUnseenUpdate, setHasUnseenUpdate] = (0, import_react.useState)(false);
	const checkForUpdates = (0, import_react.useCallback)(async (force = false) => {
		if (!repositoryConfigured) {
			setStatus("unconfigured");
			setMessage("公共 GitHub 仓库尚未配置，当前版本仍可正常使用。");
			return;
		}
		const cacheKey = `travel-atlas:update:${repository}`;
		const dismissedKey = `${cacheKey}:dismissed`;
		const applyRelease = (latestRelease) => {
			if (!latestRelease) {
				setRelease(void 0);
				setStatus("current");
				setMessage("仓库还没有发布 Release。");
				setHasUnseenUpdate(false);
				return;
			}
			const available = isNewerVersion(latestRelease.tag_name, currentVersion);
			setRelease(latestRelease);
			setStatus(available ? "available" : "current");
			setMessage("");
			setHasUnseenUpdate(available && window.localStorage.getItem(dismissedKey) !== latestRelease.tag_name);
		};
		try {
			if (!force) {
				const cachedValue = window.localStorage.getItem(cacheKey);
				if (cachedValue) {
					const cached = JSON.parse(cachedValue);
					if (Date.now() - cached.checkedAt < checkIntervalMs) {
						applyRelease(cached.release);
						return;
					}
				}
			}
			setStatus("checking");
			setMessage("");
			const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } });
			if (response.status === 404) {
				window.localStorage.setItem(cacheKey, JSON.stringify({
					checkedAt: Date.now(),
					release: null
				}));
				applyRelease(null);
				return;
			}
			if (!response.ok) throw new Error(`GitHub release request failed: ${response.status}`);
			const latestRelease = await response.json();
			window.localStorage.setItem(cacheKey, JSON.stringify({
				checkedAt: Date.now(),
				release: latestRelease
			}));
			applyRelease(latestRelease);
		} catch {
			setStatus("error");
			setMessage("暂时无法连接 GitHub，请稍后再试。");
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => {
			checkForUpdates(false);
		}, 0);
		return () => window.clearTimeout(timer);
	}, [checkForUpdates]);
	const markSeen = () => {
		setHasUnseenUpdate(false);
		if (release && status === "available") window.localStorage.setItem(`travel-atlas:update:${repository}:dismissed`, release.tag_name);
	};
	const copyUpdatePrompt = async () => {
		if (!release) return;
		await navigator.clipboard.writeText(updatePrompt(release));
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	};
	return {
		checkForUpdates,
		copied,
		copyUpdatePrompt,
		currentVersion,
		hasUnseenUpdate,
		markSeen,
		message,
		release,
		repositoryConfigured,
		status
	};
}
//#endregion
//#region src/data/viewState.ts
var viewStateKey = "starmap:view-state:v1";
var readAtlasViewState = () => {
	if (typeof window === "undefined") return {};
	try {
		const value = JSON.parse(window.sessionStorage.getItem(viewStateKey) ?? "{}");
		return value && typeof value === "object" ? value : {};
	} catch {
		return {};
	}
};
var rememberAtlasViewState = (state) => {
	if (typeof window === "undefined") return;
	try {
		window.sessionStorage.setItem(viewStateKey, JSON.stringify(state));
	} catch {}
};
//#endregion
//#region src/App.tsx
var DronePanoramaModal = (0, import_react.lazy)(() => __vitePreload(() => import("./DronePanoramaModal-H5LMIJQo.js").then((module) => ({ default: module.DronePanoramaModal })), __vite__mapDeps([0,1])));
var overviewDistance = 3.25;
var countryDistance = 1.95;
var cityDistance = 1.38;
var sidebarMediaQuery = "(min-width: 1100px)";
var imageryTuningDefaults = {
	day: {
		brightness: 1,
		contrast: 1,
		saturation: 1
	},
	night: {
		brightness: .68,
		contrast: 1.08,
		saturation: .86
	}
};
var cameraScaleForDistance = (distance) => {
	if (distance < 1.68) return "city";
	if (distance < 2.55) return "country";
	return "world";
};
function App() {
	const [tripTimelineTarget, setTripTimelineTarget] = (0, import_react.useState)(null);
	const [tripEditorTarget, setTripEditorTarget] = (0, import_react.useState)(null);
	const [customRouteCount, setCustomRouteCount] = (0, import_react.useState)(0);
	const restoredViewState = (0, import_react.useMemo)(() => readAtlasViewState(), []);
	const restoredCityId = restoredViewState.selectedCityId && cityById[restoredViewState.selectedCityId] ? restoredViewState.selectedCityId : void 0;
	const restoredCountryId = cityById[restoredCityId ?? ""]?.countryId ?? (restoredViewState.selectedCountryId && countryById[restoredViewState.selectedCountryId] ? restoredViewState.selectedCountryId : void 0);
	const restoredSelectionMode = restoredViewState.selectionMode === "city" && restoredCityId ? "city" : restoredViewState.selectionMode === "country" && restoredCountryId ? "country" : "overview";
	const restoredGlobeDistance = typeof restoredViewState.globeDistance === "number" && Number.isFinite(restoredViewState.globeDistance) && restoredViewState.globeDistance >= .8 && restoredViewState.globeDistance <= 5.5 ? restoredViewState.globeDistance : restoredSelectionMode === "city" ? cityDistance : restoredSelectionMode === "country" ? countryDistance : overviewDistance;
	const defaultSelectedDayId = [...journeyDays].sort((left, right) => `${right.date}-${right.id}`.localeCompare(`${left.date}-${left.id}`))[0]?.id ?? "";
	const restoredSelectedDayId = restoredViewState.selectedDayId && journeyDays.some((day) => day.id === restoredViewState.selectedDayId) ? restoredViewState.selectedDayId : defaultSelectedDayId;
	const restoredActivePage = [
		"map",
		"journey",
		"trip",
		"about"
	].includes(restoredViewState.activePage ?? "") ? restoredViewState.activePage : "map";
	const restoredPageBeforeUpdate = restoredViewState.pageBeforeUpdate === "journey" ? "journey" : restoredViewState.pageBeforeUpdate === "trip" ? "trip" : "map";
	const restoredJourneyViewMode = restoredViewState.journeyViewMode === "yearCards" ? "yearCards" : "timeline";
	const restoredDroneCityId = restoredViewState.activeDroneMediaCityId && cityById[restoredViewState.activeDroneMediaCityId] ? restoredViewState.activeDroneMediaCityId : void 0;
	const restoredDroneItemId = restoredViewState.activeDroneMediaItemId && droneMediaById[restoredViewState.activeDroneMediaItemId]?.cityId === restoredDroneCityId ? restoredViewState.activeDroneMediaItemId : void 0;
	const [selectedCountryId, setSelectedCountryId] = (0, import_react.useState)(restoredCountryId);
	const [selectedCityId, setSelectedCityId] = (0, import_react.useState)(restoredCityId);
	const [hoveredCountryId, setHoveredCountryId] = (0, import_react.useState)();
	const [selectedDayId, setSelectedDayId] = (0, import_react.useState)(restoredSelectedDayId);
	const [selectionMode, setSelectionMode] = (0, import_react.useState)(restoredSelectionMode);
	const [, setHoverCityId] = (0, import_react.useState)();
	const [globeDistance, setGlobeDistance] = (0, import_react.useState)(restoredGlobeDistance);
	const [globeResetVersion, setGlobeResetVersion] = (0, import_react.useState)(0);
	const [activePage, setActivePage] = (0, import_react.useState)(restoredActivePage);
	const [pageBeforeUpdate, setPageBeforeUpdate] = (0, import_react.useState)(restoredPageBeforeUpdate);
	const [imageryTuningByTheme, setImageryTuningByTheme] = (0, import_react.useState)(imageryTuningDefaults);
	const [mapSource, setMapSource] = (0, import_react.useState)(getInitialMapSource);
	const [journeyViewMode, setJourneyViewMode] = (0, import_react.useState)(restoredJourneyViewMode);
	const [activeDroneMediaCityId, setActiveDroneMediaCityId] = (0, import_react.useState)(restoredDroneCityId);
	const [activeDroneMediaItemId, setActiveDroneMediaItemId] = (0, import_react.useState)(restoredDroneItemId);
	const [panoramaModalItem, setPanoramaModalItem] = (0, import_react.useState)();
	const [cityPhotoGallery, setCityPhotoGallery] = (0, import_react.useState)();
	const [sidebarsOpen, setSidebarsOpen] = (0, import_react.useState)(() => typeof restoredViewState.sidebarsOpen === "boolean" ? restoredViewState.sidebarsOpen : typeof window === "undefined" || window.matchMedia(sidebarMediaQuery).matches);
	const releaseUpdates = useReleaseUpdates();
	const selectedCityHasDroneMedia = selectionMode === "city" && selectedCityId ? hasDroneMedia(selectedCityId) : false;
	const shouldShowDronePanel = Boolean(selectionMode === "city" && selectedCityId && (selectedCityHasDroneMedia || false));
	const activeTheme = "night";
	const imageryTuning = {
		...imageryTuningDefaults[activeTheme],
		...imageryTuningByTheme[activeTheme]
	};
	const updateImageryTuning = (property, value) => {
		setImageryTuningByTheme((current) => ({
			...current,
			[activeTheme]: {
				...current[activeTheme],
				[property]: value
			}
		}));
	};
	const resetImageryTuning = () => {
		setImageryTuningByTheme((current) => ({
			...current,
			[activeTheme]: { ...imageryTuningDefaults[activeTheme] }
		}));
	};
	const changePrimaryPage = (page) => {
		if (page !== "about") setPageBeforeUpdate(page);
		setActivePage(page);
	};
	const toggleUpdatePage = () => {
		if (activePage === "about") {
			setActivePage(pageBeforeUpdate);
			return;
		}
		releaseUpdates.markSeen();
		setPageBeforeUpdate(activePage);
		setActivePage("about");
	};
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = "zh-CN";
		const mediaQuery = window.matchMedia(sidebarMediaQuery);
		const syncSidebarVisibility = (event) => setSidebarsOpen(event.matches);
		mediaQuery.addEventListener("change", syncSidebarVisibility);
		return () => mediaQuery.removeEventListener("change", syncSidebarVisibility);
	}, []);
	(0, import_react.useEffect)(() => {
		rememberAtlasViewState({
			selectedCountryId,
			selectedCityId,
			selectedDayId,
			selectionMode,
			globeDistance,
			activePage,
			pageBeforeUpdate,
			journeyViewMode,
			activeDroneMediaCityId,
			activeDroneMediaItemId,
			sidebarsOpen
		});
	}, [
		activeDroneMediaCityId,
		activeDroneMediaItemId,
		activePage,
		globeDistance,
		journeyViewMode,
		pageBeforeUpdate,
		selectedCityId,
		selectedCountryId,
		selectedDayId,
		selectionMode,
		sidebarsOpen
	]);
	const atlasStats = (0, import_react.useMemo)(() => [
		{
			value: `${countries.length}`,
			label: "Countries / 国家"
		},
		{
			value: `${cities.length}`,
			label: "Cities / 城市"
		},
		{
			value: `${customRouteCount}`,
			label: "Trips / 行程"
		},
		{
			value: `${travelAtlasMeta.recordsWithCoordinates}`,
			label: "Mapped / 坐标"
		}
	], [customRouteCount]);
	const resetOverview = () => {
		setSelectedCountryId(void 0);
		setSelectedCityId(void 0);
		setActiveDroneMediaCityId(void 0);
		setActiveDroneMediaItemId(void 0);
		setSelectionMode("overview");
		setGlobeDistance(overviewDistance);
		setGlobeResetVersion((version) => version + 1);
	};
	const selectCountry = (countryId) => {
		if (selectedCountryId === countryId && selectionMode !== "overview") {
			resetOverview();
			return;
		}
		setSelectedCountryId(countryId);
		setSelectedCityId(void 0);
		setActiveDroneMediaCityId(void 0);
		setActiveDroneMediaItemId(void 0);
		setSelectionMode("country");
		setGlobeDistance(countryDistance);
	};
	const selectCity = (cityId) => {
		if (selectedCityId === cityId) {
			setSelectedCityId(void 0);
			setActiveDroneMediaCityId(void 0);
			setActiveDroneMediaItemId(void 0);
			setSelectionMode("country");
			setGlobeDistance(countryDistance);
			return;
		}
		const city = cityById[cityId];
		if (city.countryId) setSelectedCountryId(city.countryId);
		setSelectedCityId(cityId);
		setActiveDroneMediaCityId(void 0);
		setActiveDroneMediaItemId(void 0);
		setSelectionMode("city");
		setGlobeDistance(cityDistance);
	};
	const selectDroneMedia = (cityId) => {
		const city = cityById[cityId];
		if (!city || !hasDroneMedia(cityId)) return;
		if (activeDroneMediaCityId === cityId) {
			setActiveDroneMediaCityId(void 0);
			setActiveDroneMediaItemId(void 0);
			return;
		}
		if (city.countryId) setSelectedCountryId(city.countryId);
		setSelectedCityId(cityId);
		setActiveDroneMediaCityId(cityId);
		setActiveDroneMediaItemId(void 0);
		setSelectionMode("city");
		setGlobeDistance(cityDistance);
	};
	const selectDroneMediaItem = (item) => {
		if (!item.position) return;
		if (activeDroneMediaItemId === item.id) {
			setActiveDroneMediaItemId(void 0);
			setActiveDroneMediaCityId(void 0);
			return;
		}
		const city = cityById[item.cityId];
		if (city?.countryId && selectedCountryId !== city.countryId) setSelectedCountryId(city.countryId);
		if (selectedCityId !== item.cityId) setSelectedCityId(item.cityId);
		if (activeDroneMediaCityId !== item.cityId) setActiveDroneMediaCityId(item.cityId);
		setActiveDroneMediaItemId(item.id);
		if (selectionMode !== "city") setSelectionMode("city");
		if (globeDistance !== cityDistance) setGlobeDistance(cityDistance);
	};
	const openPanorama = (item) => {
		if (item.position && activeDroneMediaItemId !== item.id) selectDroneMediaItem(item);
		setPanoramaModalItem(item);
	};
	const changeGlobeDistance = (distance) => {
		if (Math.abs(distance - globeDistance) <= .001) return;
		const cameraScale = cameraScaleForDistance(distance);
		setActiveDroneMediaItemId(void 0);
		setActiveDroneMediaCityId(void 0);
		if (cameraScale === "city") if (selectedCityId) setSelectionMode("city");
		else if (selectedCountryId) {
			const firstCountryCity = getCitiesForCountry(selectedCountryId)[0];
			if (firstCountryCity) {
				setSelectedCityId(firstCountryCity.id);
				setSelectionMode("city");
			} else setSelectionMode("country");
		} else setSelectionMode("overview");
		else if (cameraScale === "country") setSelectionMode(selectedCountryId ? "country" : "overview");
		else setSelectionMode("overview");
		setGlobeDistance(distance);
	};
	const selectDay = (day) => {
		setSelectedDayId(day.id);
		if (day.countryId) setSelectedCountryId(day.countryId);
		setSelectedCityId(day.cityId);
		setActiveDroneMediaCityId(void 0);
		setActiveDroneMediaItemId(void 0);
		setSelectionMode("city");
		setGlobeDistance(cityDistance);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "theme-night relative h-[100dvh] overflow-hidden bg-[#010409] text-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "app-background fixed inset-0 -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "app-grid fixed inset-0 -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "star-field fixed inset-0 -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtlasHeader, {
				activePage,
				onPageChange: changePrimaryPage
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: setTripEditorTarget,
				className: "atlas-experience cesium-lab-page relative h-[100dvh] w-screen overflow-hidden",
				"data-page": activePage,
				"data-sidebars-open": sidebarsOpen,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CesiumAtlasGlobe, {
							hoveredCountryId,
							imageryBrightness: imageryTuning.brightness,
							imageryContrast: imageryTuning.contrast,
							imagerySaturation: imageryTuning.saturation,
							mapSource,
							selectedCountryId,
							selectedCityId,
							selectionMode,
							globeScale: globeDistance,
							resetVersion: globeResetVersion,
							isNight: true,
							showMapContent: activePage === "map",
							showTripEditor: activePage === "trip",
							tripTimelineTarget,
							tripEditorTarget,
							activeDroneMediaCityId,
							activeDroneMediaItemId,
							onSelectCity: selectCity,
							onSelectDroneMediaItem: selectDroneMediaItem,
							onCustomRouteCountChange: setCustomRouteCount
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "atlas-overlay-frame absolute bottom-0",
							"data-page": activePage,
							"data-sidebars-open": sidebarsOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySelector, {
								selectedCountryId,
								selectedCityId,
								activeDroneMediaCityId,
								globeDistance,
								imageryBrightness: imageryTuning.brightness,
								imageryContrast: imageryTuning.contrast,
								imagerySaturation: imageryTuning.saturation,
								onBrightnessChange: (value) => updateImageryTuning("brightness", value),
								onContrastChange: (value) => updateImageryTuning("contrast", value),
								onHoverCountry: setHoveredCountryId,
								onResetImageryTuning: resetImageryTuning,
								onSaturationChange: (value) => updateImageryTuning("saturation", value),
								onSelectCountry: selectCountry,
								onSelectCity: selectCity,
								onSelectDroneMedia: selectDroneMedia,
								onDistanceChange: changeGlobeDistance,
								onResetView: resetOverview
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `atlas-right-stack ${shouldShowDronePanel ? "atlas-right-stack-with-drone" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
										mode: selectionMode,
										selectedCountryId,
										selectedCityId,
										onSelectCity: selectCity,
										onOpenCityPhotos: setCityPhotoGallery
									}, `info-${selectionMode}-${selectedCountryId ?? "none"}-${selectedCityId ?? "none"}`),
									shouldShowDronePanel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DroneMediaCard, {
										cityId: selectedCityId,
										activeItemId: activeDroneMediaItemId,
										onSelectItem: selectDroneMediaItem,
										onOpenPanorama: openPanorama
									}, `drone-${selectedCityId ?? "none"}`) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseControlGuide, { language: "zh" })
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "atlas-map-controls",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "atlas-dock-button atlas-sidebars-toggle pointer-events-auto",
								"aria-pressed": sidebarsOpen,
								"aria-label": sidebarsOpen ? "Hide both sidebars" : "Show both sidebars",
								title: sidebarsOpen ? "隐藏侧边栏" : "显示侧边栏",
								onClick: () => setSidebarsOpen((open) => !open),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "atlas-sidebars-toggle-icons",
									"aria-hidden": "true",
									children: sidebarsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightClose, {})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightOpen, {})] })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSourceSwitcher, {
								value: mapSource,
								onChange: (source) => {
									setMapSource(source);
									rememberMapSource(source);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeteorShowerButton, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseUpdateButton, {
								active: activePage === "about",
								state: releaseUpdates,
								onToggle: toggleUpdatePage
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "atlas-journey-stage atlas-journey-main-stage absolute inset-0 z-30",
						"aria-hidden": activePage !== "journey",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "atlas-journey-scroll selector-scrollbar h-full overflow-y-auto overscroll-contain",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "atlas-journey-shell mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "journey-command-panel",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "journey-command-copy",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "journey-kicker",
													children: "Travel chronology"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Places, in the order they became memories." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A living index of visited cities, arranged from the newest journey backwards." })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "journey-command-actions",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyViewToggle, {
												value: journeyViewMode,
												onChange: setJourneyViewMode
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "journey-stats-grid",
											children: atlasStats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "journey-stat-card",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "journey-stat-value",
													children: stat.value
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "journey-stat-label",
													children: stat.label
												})]
											}, stat.label))
										})
									]
								}), journeyViewMode === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
									selectedDayId,
									onSelectDay: selectDay,
									onHoverCity: setHoverCityId
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyYearCards, {})]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "atlas-journey-stage atlas-trip-stage absolute inset-0 z-30",
						"aria-hidden": activePage !== "trip",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "atlas-journey-scroll selector-scrollbar h-full overflow-y-auto overscroll-contain",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: setTripTimelineTarget,
								className: "atlas-journey-shell mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "journey-command-panel",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "journey-command-copy",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "journey-kicker",
												children: "Route studio"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Build a trip from your visited places." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Select existing cities, arrange them in order, and save the route. The finished line remains visible on Map." })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "journey-stats-grid",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "journey-stat-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "journey-stat-value",
												children: "Trip"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "journey-stat-label",
												children: "Custom route editor"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "journey-stat-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "journey-stat-value",
												children: "Map"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "journey-stat-label",
												children: "Saved route display"
											})]
										})]
									})]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "atlas-update-stage absolute inset-0 z-30",
						"aria-hidden": activePage !== "about",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseUpdatePage, { state: releaseUpdates })
					})
				]
			}),
			panoramaModalItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DronePanoramaModal, {
					item: panoramaModalItem,
					onClose: () => setPanoramaModalItem(void 0)
				})
			}) : null,
			cityPhotoGallery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityPhotoGalleryModal, {
				...cityPhotoGallery,
				onClose: () => setCityPhotoGallery(void 0)
			}) : null
		]
	});
}
//#endregion
//#region src/main.tsx
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
export { __commonJSMin as a, require_react as i, X$2 as n, __exportAll as o, createLucideIcon as r, __toESM as s, require_jsx_runtime as t };
