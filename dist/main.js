import * as e from "react";
import t, { cloneElement as n, createContext as r, isValidElement as i, useContext as a, useEffect as o, useImperativeHandle as s, useLayoutEffect as c, useRef as l, useState as u } from "react";
import { createPortal as d } from "react-dom";
import { CheckIcon as f, ChevronDownIcon as p, XIcon as m } from "lucide-react";
// \0rolldown/runtime.js
var h = Object.create, g = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, v = Object.getOwnPropertyNames, y = Object.getPrototypeOf, b = Object.prototype.hasOwnProperty, x = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), S = (e, t) => {
	let n = {};
	for (var r in e) g(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || g(n, Symbol.toStringTag, { value: "Module" }), n;
}, C = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = v(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !b.call(e, s) && s !== n && g(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = _(t, s)) || r.enumerable
	});
	return e;
}, w = (e, t, n) => (n = e == null ? {} : h(y(e)), C(t || !e || !e.__esModule || !b.call(e, "default") ? g(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), T = /* @__PURE__ */ x(((t, n) => {
	n.exports = Object.prototype.hasOwnProperty.call(e, "module.exports") ? e["module.exports"] : { ...e };
})), E = /* @__PURE__ */ x(((e) => {
	var t = T().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	e.c = function(e) {
		return t.H.useMemoCache(e);
	};
})), D = /* @__PURE__ */ x(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = T().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		e.c = function(e) {
			var n = t.H;
			return n === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), n.useMemoCache(e);
		};
	})();
})), O = (/* @__PURE__ */ x(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? E() : D();
})))(), k = {
	View: "_onyx-ui_View_-qlIB",
	tooltip: "_onyx-ui_tooltip_9QoQZ",
	fadeIn: "_onyx-ui_fadeIn_rlN6H",
	borderOnFocus: "_onyx-ui_borderOnFocus_PrGa5",
	horizontal: "_onyx-ui_horizontal_PcIrb",
	absolute: "_onyx-ui_absolute_MRtrq",
	sticky: "_onyx-ui_sticky_N5dr-",
	opacityOnPress: "_onyx-ui_opacityOnPress_kDEzd",
	zindex_1: "_onyx-ui_zindex_1_xjmHa",
	zindex_2: "_onyx-ui_zindex_2_rAZX5",
	zindex_3: "_onyx-ui_zindex_3_podrP",
	flex: "_onyx-ui_flex_0re1O",
	wrap: "_onyx-ui_wrap_qasS2",
	heavyShadow: "_onyx-ui_heavyShadow_o564H",
	shadow: "_onyx-ui_shadow_Xo0fT",
	pointer: "_onyx-ui_pointer_bdMFA"
}, A = {
	"red-0": "_onyx-ui_red-0_jhGdH",
	"red-1": "_onyx-ui_red-1_yUDwc",
	"red-2": "_onyx-ui_red-2_-VgZm",
	"red-3": "_onyx-ui_red-3_xULBD",
	"red-4": "_onyx-ui_red-4_4jQqw",
	"red-5": "_onyx-ui_red-5_BwFqi",
	"red-6": "_onyx-ui_red-6_1T5RH",
	"red-7": "_onyx-ui_red-7_C8VSh",
	"red-8": "_onyx-ui_red-8_48Ear",
	"red-9": "_onyx-ui_red-9_Ra6sk",
	"pink-0": "_onyx-ui_pink-0_KToEp",
	"pink-1": "_onyx-ui_pink-1_7KiDL",
	"pink-2": "_onyx-ui_pink-2_Uiwde",
	"pink-3": "_onyx-ui_pink-3_Ek1n7",
	"pink-4": "_onyx-ui_pink-4_pOlV3",
	"pink-5": "_onyx-ui_pink-5_0RBCx",
	"pink-6": "_onyx-ui_pink-6_pfnr7",
	"pink-7": "_onyx-ui_pink-7_XgfDW",
	"pink-8": "_onyx-ui_pink-8_1AHxd",
	"pink-9": "_onyx-ui_pink-9_6uFMp",
	"grape-0": "_onyx-ui_grape-0_37-77",
	"grape-1": "_onyx-ui_grape-1_3Drf3",
	"grape-2": "_onyx-ui_grape-2_FeM6I",
	"grape-3": "_onyx-ui_grape-3_fFwmN",
	"grape-4": "_onyx-ui_grape-4_PS8Hc",
	"grape-5": "_onyx-ui_grape-5_OXjCg",
	"grape-6": "_onyx-ui_grape-6_qvMwe",
	"grape-7": "_onyx-ui_grape-7_JMfnN",
	"grape-8": "_onyx-ui_grape-8_mOTrr",
	"grape-9": "_onyx-ui_grape-9_Upl-C",
	"violet-0": "_onyx-ui_violet-0_-eBAz",
	"violet-1": "_onyx-ui_violet-1_EPNeY",
	"violet-2": "_onyx-ui_violet-2_Gj3Id",
	"violet-3": "_onyx-ui_violet-3_zBIMB",
	"violet-4": "_onyx-ui_violet-4_H559v",
	"violet-5": "_onyx-ui_violet-5_goMrU",
	"violet-6": "_onyx-ui_violet-6_Lr7Ac",
	"violet-7": "_onyx-ui_violet-7_-UUV9",
	"violet-8": "_onyx-ui_violet-8_cLbXb",
	"violet-9": "_onyx-ui_violet-9_yPgcq",
	"indigo-0": "_onyx-ui_indigo-0_IKdhW",
	"indigo-1": "_onyx-ui_indigo-1_Gg6i0",
	"indigo-2": "_onyx-ui_indigo-2_b4Nz7",
	"indigo-3": "_onyx-ui_indigo-3_p5mug",
	"indigo-4": "_onyx-ui_indigo-4_XiJDJ",
	"indigo-5": "_onyx-ui_indigo-5_sFrUH",
	"indigo-6": "_onyx-ui_indigo-6_XJEpS",
	"indigo-7": "_onyx-ui_indigo-7_s0brS",
	"indigo-8": "_onyx-ui_indigo-8_H1PPL",
	"indigo-9": "_onyx-ui_indigo-9_dxosF",
	"blue-0": "_onyx-ui_blue-0_wYMES",
	"blue-1": "_onyx-ui_blue-1_w0CLj",
	"blue-2": "_onyx-ui_blue-2_OvAbV",
	"blue-3": "_onyx-ui_blue-3_gqH-K",
	"blue-4": "_onyx-ui_blue-4_fHrAa",
	"blue-5": "_onyx-ui_blue-5_WsXQB",
	"blue-6": "_onyx-ui_blue-6_Iy51H",
	"blue-7": "_onyx-ui_blue-7_cR8oP",
	"blue-8": "_onyx-ui_blue-8_oSJTy",
	"blue-9": "_onyx-ui_blue-9_Z-Dxm",
	"cyan-0": "_onyx-ui_cyan-0_78-8V",
	"cyan-1": "_onyx-ui_cyan-1_F0aBY",
	"cyan-2": "_onyx-ui_cyan-2_avZQd",
	"cyan-3": "_onyx-ui_cyan-3_oFaHM",
	"cyan-4": "_onyx-ui_cyan-4_uZ19N",
	"cyan-5": "_onyx-ui_cyan-5_yRZCr",
	"cyan-6": "_onyx-ui_cyan-6_UTwI3",
	"cyan-7": "_onyx-ui_cyan-7_-idvv",
	"cyan-8": "_onyx-ui_cyan-8_TuY4L",
	"cyan-9": "_onyx-ui_cyan-9_yer0z",
	"teal-0": "_onyx-ui_teal-0_AWFps",
	"teal-1": "_onyx-ui_teal-1_nIyZn",
	"teal-2": "_onyx-ui_teal-2_NPdHu",
	"teal-3": "_onyx-ui_teal-3_pNiWN",
	"teal-4": "_onyx-ui_teal-4_wSIKe",
	"teal-5": "_onyx-ui_teal-5_OwKpZ",
	"teal-6": "_onyx-ui_teal-6_pF5jP",
	"teal-7": "_onyx-ui_teal-7_zEMrF",
	"teal-8": "_onyx-ui_teal-8_ds2ug",
	"teal-9": "_onyx-ui_teal-9_ouRx0",
	"green-0": "_onyx-ui_green-0_tUSTX",
	"green-1": "_onyx-ui_green-1_3W1uD",
	"green-2": "_onyx-ui_green-2_gb9Hv",
	"green-3": "_onyx-ui_green-3_Z--vA",
	"green-4": "_onyx-ui_green-4_G1TFI",
	"green-5": "_onyx-ui_green-5_Wk-JR",
	"green-6": "_onyx-ui_green-6_LZWbv",
	"green-7": "_onyx-ui_green-7_mu6vt",
	"green-8": "_onyx-ui_green-8_CrMRP",
	"green-9": "_onyx-ui_green-9_q08eY",
	"lime-0": "_onyx-ui_lime-0_3Cthn",
	"lime-1": "_onyx-ui_lime-1_hkoQy",
	"lime-2": "_onyx-ui_lime-2_9ib1B",
	"lime-3": "_onyx-ui_lime-3_nEnqH",
	"lime-4": "_onyx-ui_lime-4_ujvjZ",
	"lime-5": "_onyx-ui_lime-5_ftGMX",
	"lime-6": "_onyx-ui_lime-6_jHREM",
	"lime-7": "_onyx-ui_lime-7_NnIVK",
	"lime-8": "_onyx-ui_lime-8_3qaPe",
	"lime-9": "_onyx-ui_lime-9_61h3B",
	"yellow-0": "_onyx-ui_yellow-0_-l-3r",
	"yellow-1": "_onyx-ui_yellow-1_Or8Om",
	"yellow-2": "_onyx-ui_yellow-2_RXXPj",
	"yellow-3": "_onyx-ui_yellow-3_tw-A4",
	"yellow-4": "_onyx-ui_yellow-4_8XYoV",
	"yellow-5": "_onyx-ui_yellow-5_1osHc",
	"yellow-6": "_onyx-ui_yellow-6_0S2aP",
	"yellow-7": "_onyx-ui_yellow-7_pHoh5",
	"yellow-8": "_onyx-ui_yellow-8_N6hG6",
	"yellow-9": "_onyx-ui_yellow-9_LliBL",
	"orange-0": "_onyx-ui_orange-0_eWWzv",
	"orange-1": "_onyx-ui_orange-1_hYzhr",
	"orange-2": "_onyx-ui_orange-2_zVcWN",
	"orange-3": "_onyx-ui_orange-3_ZWUgV",
	"orange-4": "_onyx-ui_orange-4_m-giT",
	"orange-5": "_onyx-ui_orange-5_OnRSj",
	"orange-6": "_onyx-ui_orange-6_bpZ7K",
	"orange-7": "_onyx-ui_orange-7_X-uts",
	"orange-8": "_onyx-ui_orange-8_L4-ID",
	"orange-9": "_onyx-ui_orange-9_a7P7g",
	primary: "_onyx-ui_primary_s-a4c",
	content: "_onyx-ui_content_BN7L-",
	panel: "_onyx-ui_panel_fBl9j",
	gutter: "_onyx-ui_gutter_OKVXG",
	icon: "_onyx-ui_icon_jFwkM",
	divider: "_onyx-ui_divider_fFRlb",
	selected: "_onyx-ui_selected_NKdwV",
	highlight: "_onyx-ui_highlight_fdlLN",
	black: "_onyx-ui_black_A7jCG",
	white: "_onyx-ui_white_SeOJx",
	transparent: "_onyx-ui_transparent_XGFPp",
	"gray-0": "_onyx-ui_gray-0_cNbkJ",
	"gray-1": "_onyx-ui_gray-1_SZKzT",
	"gray-2": "_onyx-ui_gray-2_3JetF",
	"gray-3": "_onyx-ui_gray-3_HFEgY",
	"gray-4": "_onyx-ui_gray-4_LOWCM",
	"gray-5": "_onyx-ui_gray-5_PuUxt",
	"gray-6": "_onyx-ui_gray-6_ck02v",
	"gray-7": "_onyx-ui_gray-7_I-f9x",
	"gray-8": "_onyx-ui_gray-8_iu9vd",
	"gray-9": "_onyx-ui_gray-9_qnZ5u"
}, j = {
	_0px: "_onyx-ui__0px_bYrmY",
	_1px: "_onyx-ui__1px_fJLSW",
	_2px: "_onyx-ui__2px_hLI9L",
	_4px: "_onyx-ui__4px_foWKi",
	_8px: "_onyx-ui__8px_ib1gh",
	_12px: "_onyx-ui__12px_4fma8",
	_16px: "_onyx-ui__16px_cqo2h",
	_24px: "_onyx-ui__24px_BBVNI",
	_32px: "_onyx-ui__32px_xH1yq",
	_0px_0px: "_onyx-ui__0px_0px_OCiFV",
	_0px_1px: "_onyx-ui__0px_1px_hNhPT",
	_0px_2px: "_onyx-ui__0px_2px_UQQc5",
	_0px_4px: "_onyx-ui__0px_4px_dRlHK",
	_0px_8px: "_onyx-ui__0px_8px_cdIC2",
	_0px_12px: "_onyx-ui__0px_12px_v4L3J",
	_0px_16px: "_onyx-ui__0px_16px_MSDYY",
	_0px_24px: "_onyx-ui__0px_24px_zcVHw",
	_0px_32px: "_onyx-ui__0px_32px_zdzFk",
	_1px_0px: "_onyx-ui__1px_0px_uZdzF",
	_1px_1px: "_onyx-ui__1px_1px_-bWfN",
	_1px_2px: "_onyx-ui__1px_2px_Ml35W",
	_1px_4px: "_onyx-ui__1px_4px_jr2jj",
	_1px_8px: "_onyx-ui__1px_8px_pgsjW",
	_1px_12px: "_onyx-ui__1px_12px_9ROkF",
	_1px_16px: "_onyx-ui__1px_16px_YZBnZ",
	_1px_24px: "_onyx-ui__1px_24px_rD-Pb",
	_1px_32px: "_onyx-ui__1px_32px_D99fO",
	_2px_0px: "_onyx-ui__2px_0px_-LWP4",
	_2px_1px: "_onyx-ui__2px_1px_WFuRp",
	_2px_2px: "_onyx-ui__2px_2px_eAXfd",
	_2px_4px: "_onyx-ui__2px_4px_jEPtn",
	_2px_8px: "_onyx-ui__2px_8px_ml3P7",
	_2px_12px: "_onyx-ui__2px_12px_-p2Cb",
	_2px_16px: "_onyx-ui__2px_16px_4XUkT",
	_2px_24px: "_onyx-ui__2px_24px_1crvU",
	_2px_32px: "_onyx-ui__2px_32px_vwsmA",
	_4px_0px: "_onyx-ui__4px_0px_ovhBh",
	_4px_1px: "_onyx-ui__4px_1px_na46Q",
	_4px_2px: "_onyx-ui__4px_2px_yejSx",
	_4px_4px: "_onyx-ui__4px_4px_xd7RB",
	_4px_8px: "_onyx-ui__4px_8px_xUfE1",
	_4px_12px: "_onyx-ui__4px_12px_0sBH7",
	_4px_16px: "_onyx-ui__4px_16px_poncj",
	_4px_24px: "_onyx-ui__4px_24px_NUZ6T",
	_4px_32px: "_onyx-ui__4px_32px_Y6y9e",
	_8px_0px: "_onyx-ui__8px_0px_ovVKE",
	_8px_1px: "_onyx-ui__8px_1px_cZe-U",
	_8px_2px: "_onyx-ui__8px_2px_oqXdV",
	_8px_4px: "_onyx-ui__8px_4px_1EWew",
	_8px_8px: "_onyx-ui__8px_8px_wUYW3",
	_8px_12px: "_onyx-ui__8px_12px_-bcrU",
	_8px_16px: "_onyx-ui__8px_16px_l9s5R",
	_8px_24px: "_onyx-ui__8px_24px_oqv5s",
	_8px_32px: "_onyx-ui__8px_32px_Dn7TZ",
	_12px_0px: "_onyx-ui__12px_0px_3V1wW",
	_12px_1px: "_onyx-ui__12px_1px_P---c",
	_12px_2px: "_onyx-ui__12px_2px_MR1RH",
	_12px_4px: "_onyx-ui__12px_4px_45t73",
	_12px_8px: "_onyx-ui__12px_8px_JDpAc",
	_12px_12px: "_onyx-ui__12px_12px_jXv0y",
	_12px_16px: "_onyx-ui__12px_16px_Ea-F1",
	_12px_24px: "_onyx-ui__12px_24px_X0y5l",
	_12px_32px: "_onyx-ui__12px_32px_gLIvJ",
	_16px_0px: "_onyx-ui__16px_0px_hJo-e",
	_16px_1px: "_onyx-ui__16px_1px_PsHmY",
	_16px_2px: "_onyx-ui__16px_2px_nm94w",
	_16px_4px: "_onyx-ui__16px_4px_A53b0",
	_16px_8px: "_onyx-ui__16px_8px_QfPuP",
	_16px_12px: "_onyx-ui__16px_12px_AV15x",
	_16px_16px: "_onyx-ui__16px_16px_Bo4v3",
	_16px_24px: "_onyx-ui__16px_24px_RgMSS",
	_16px_32px: "_onyx-ui__16px_32px_KDejT",
	_24px_0px: "_onyx-ui__24px_0px_ilg04",
	_24px_1px: "_onyx-ui__24px_1px_jwGqd",
	_24px_2px: "_onyx-ui__24px_2px_znT-O",
	_24px_4px: "_onyx-ui__24px_4px_5ll7k",
	_24px_8px: "_onyx-ui__24px_8px_9Nm7R",
	_24px_12px: "_onyx-ui__24px_12px_Nz5dW",
	_24px_16px: "_onyx-ui__24px_16px_cOBAh",
	_24px_24px: "_onyx-ui__24px_24px_njhS9",
	_24px_32px: "_onyx-ui__24px_32px_NHSdL",
	_32px_0px: "_onyx-ui__32px_0px_8woTP",
	_32px_1px: "_onyx-ui__32px_1px_MYEIV",
	_32px_2px: "_onyx-ui__32px_2px_1sNzL",
	_32px_4px: "_onyx-ui__32px_4px_Hzg7h",
	_32px_8px: "_onyx-ui__32px_8px_dpzZi",
	_32px_12px: "_onyx-ui__32px_12px_P4I-7",
	_32px_16px: "_onyx-ui__32px_16px_UzG5L",
	_32px_24px: "_onyx-ui__32px_24px_q6eBr",
	_32px_32px: "_onyx-ui__32px_32px_ga1Kr"
}, M = {
	_0px: "_onyx-ui__0px_Rv6vt",
	_1px: "_onyx-ui__1px_3FO6W",
	_2px: "_onyx-ui__2px_k48n7",
	_4px: "_onyx-ui__4px_-aSKz",
	_8px: "_onyx-ui__8px_YukcA",
	_12px: "_onyx-ui__12px_1UEph",
	_16px: "_onyx-ui__16px_CeEiq",
	_20px: "_onyx-ui__20px_IUJ5J",
	_24px: "_onyx-ui__24px_iuCg1",
	_32px: "_onyx-ui__32px_2oKG1",
	_0px_0px: "_onyx-ui__0px_0px_nPbbP",
	_0px_1px: "_onyx-ui__0px_1px_VRnqm",
	_0px_2px: "_onyx-ui__0px_2px_ys96H",
	_0px_4px: "_onyx-ui__0px_4px_TxMj2",
	_0px_8px: "_onyx-ui__0px_8px_Qmg6I",
	_0px_12px: "_onyx-ui__0px_12px_pPyHM",
	_0px_16px: "_onyx-ui__0px_16px_32lAC",
	_0px_20px: "_onyx-ui__0px_20px_ZHFXX",
	_0px_24px: "_onyx-ui__0px_24px_eyA4p",
	_0px_32px: "_onyx-ui__0px_32px_s1YJ5",
	_1px_0px: "_onyx-ui__1px_0px_6PvSm",
	_1px_1px: "_onyx-ui__1px_1px_oM3lT",
	_1px_2px: "_onyx-ui__1px_2px_cvVdz",
	_1px_4px: "_onyx-ui__1px_4px_MVgIb",
	_1px_8px: "_onyx-ui__1px_8px_eTzFf",
	_1px_12px: "_onyx-ui__1px_12px_D5JOp",
	_1px_16px: "_onyx-ui__1px_16px_k0Tr8",
	_1px_20px: "_onyx-ui__1px_20px_Zps8a",
	_1px_24px: "_onyx-ui__1px_24px_mt98o",
	_1px_32px: "_onyx-ui__1px_32px_eXmWW",
	_2px_0px: "_onyx-ui__2px_0px_MduDZ",
	_2px_1px: "_onyx-ui__2px_1px_GjOrF",
	_2px_2px: "_onyx-ui__2px_2px_2N54M",
	_2px_4px: "_onyx-ui__2px_4px_QYYul",
	_2px_8px: "_onyx-ui__2px_8px_SQv1q",
	_2px_12px: "_onyx-ui__2px_12px_BQYfe",
	_2px_16px: "_onyx-ui__2px_16px_e99RO",
	_2px_20px: "_onyx-ui__2px_20px_P7Ta4",
	_2px_24px: "_onyx-ui__2px_24px_7iH1H",
	_2px_32px: "_onyx-ui__2px_32px_CtX-2",
	_4px_0px: "_onyx-ui__4px_0px_WKw-z",
	_4px_1px: "_onyx-ui__4px_1px_cJ6L-",
	_4px_2px: "_onyx-ui__4px_2px_BXvol",
	_4px_4px: "_onyx-ui__4px_4px_JySk6",
	_4px_8px: "_onyx-ui__4px_8px_CMh8g",
	_4px_12px: "_onyx-ui__4px_12px_eX4RE",
	_4px_16px: "_onyx-ui__4px_16px_Ucu2W",
	_4px_20px: "_onyx-ui__4px_20px_Imhpf",
	_4px_24px: "_onyx-ui__4px_24px_sxrce",
	_4px_32px: "_onyx-ui__4px_32px_EWLM3",
	_8px_0px: "_onyx-ui__8px_0px_ZmcWW",
	_8px_1px: "_onyx-ui__8px_1px_ReIRZ",
	_8px_2px: "_onyx-ui__8px_2px_-1yDZ",
	_8px_4px: "_onyx-ui__8px_4px_dJO30",
	_8px_8px: "_onyx-ui__8px_8px_8IZ8-",
	_8px_12px: "_onyx-ui__8px_12px_Ff0fa",
	_8px_16px: "_onyx-ui__8px_16px_ofL2J",
	_8px_20px: "_onyx-ui__8px_20px_f44yO",
	_8px_24px: "_onyx-ui__8px_24px_ghGiC",
	_8px_32px: "_onyx-ui__8px_32px_hcB-D",
	_12px_0px: "_onyx-ui__12px_0px_0xaRD",
	_12px_1px: "_onyx-ui__12px_1px_AMQ1o",
	_12px_2px: "_onyx-ui__12px_2px_keQIu",
	_12px_4px: "_onyx-ui__12px_4px_Uw7V4",
	_12px_8px: "_onyx-ui__12px_8px_pVY-9",
	_12px_12px: "_onyx-ui__12px_12px_aWQts",
	_12px_16px: "_onyx-ui__12px_16px_ylEu1",
	_12px_20px: "_onyx-ui__12px_20px_p99hA",
	_12px_24px: "_onyx-ui__12px_24px_rpY1-",
	_12px_32px: "_onyx-ui__12px_32px_PzkrL",
	_16px_0px: "_onyx-ui__16px_0px_YsEjh",
	_16px_1px: "_onyx-ui__16px_1px_TCT6G",
	_16px_2px: "_onyx-ui__16px_2px_Jnf8Q",
	_16px_4px: "_onyx-ui__16px_4px_fhTAi",
	_16px_8px: "_onyx-ui__16px_8px_VSQgr",
	_16px_12px: "_onyx-ui__16px_12px_HLhFK",
	_16px_16px: "_onyx-ui__16px_16px_Y3S3Q",
	_16px_20px: "_onyx-ui__16px_20px_Pqbi6",
	_16px_24px: "_onyx-ui__16px_24px_VbJBB",
	_16px_32px: "_onyx-ui__16px_32px_rN74C",
	_20px_0px: "_onyx-ui__20px_0px_YkAcM",
	_20px_1px: "_onyx-ui__20px_1px_I6PoR",
	_20px_2px: "_onyx-ui__20px_2px_TEE-l",
	_20px_4px: "_onyx-ui__20px_4px_pqXt4",
	_20px_8px: "_onyx-ui__20px_8px_0CRpX",
	_20px_12px: "_onyx-ui__20px_12px_LPoyq",
	_20px_16px: "_onyx-ui__20px_16px_1GTbb",
	_20px_20px: "_onyx-ui__20px_20px_XFO-1",
	_20px_24px: "_onyx-ui__20px_24px_a0qui",
	_20px_32px: "_onyx-ui__20px_32px_KA49t",
	_24px_0px: "_onyx-ui__24px_0px_QESMd",
	_24px_1px: "_onyx-ui__24px_1px_ZjusK",
	_24px_2px: "_onyx-ui__24px_2px_FCqDV",
	_24px_4px: "_onyx-ui__24px_4px_2gTrb",
	_24px_8px: "_onyx-ui__24px_8px_8Flvi",
	_24px_12px: "_onyx-ui__24px_12px_zvVvD",
	_24px_16px: "_onyx-ui__24px_16px_lyBI2",
	_24px_20px: "_onyx-ui__24px_20px_7iS7i",
	_24px_24px: "_onyx-ui__24px_24px_qsLpl",
	_24px_32px: "_onyx-ui__24px_32px_0i09u",
	_32px_0px: "_onyx-ui__32px_0px_zl60d",
	_32px_1px: "_onyx-ui__32px_1px_g7-MA",
	_32px_2px: "_onyx-ui__32px_2px_oumfO",
	_32px_4px: "_onyx-ui__32px_4px_JvGAZ",
	_32px_8px: "_onyx-ui__32px_8px_ljVaC",
	_32px_12px: "_onyx-ui__32px_12px_zHoeQ",
	_32px_16px: "_onyx-ui__32px_16px_qIJ-m",
	_32px_20px: "_onyx-ui__32px_20px_hTWjX",
	_32px_24px: "_onyx-ui__32px_24px_RLRVU",
	_32px_32px: "_onyx-ui__32px_32px_tW-R-"
}, N = {
	top: "_onyx-ui_top_99pO4",
	negative: "_onyx-ui_negative_pu7O-",
	bottom: "_onyx-ui_bottom_Q8--x",
	left: "_onyx-ui_left_Z41Ey",
	right: "_onyx-ui_right_1VFwX",
	top_bottom: "_onyx-ui_top_bottom_1X6Pe",
	top_right_bottom_left: "_onyx-ui_top_right_bottom_left_5KilU",
	none: "_onyx-ui_none_O96-o"
}, P = {
	_max: "_onyx-ui__max_zJyU-",
	_0px: "_onyx-ui__0px_thl5s",
	_1px: "_onyx-ui__1px_tTrNE",
	_2px: "_onyx-ui__2px_-l9qL",
	_4px: "_onyx-ui__4px_DLC9z",
	_8px: "_onyx-ui__8px_Cn68V",
	_12px: "_onyx-ui__12px_iezV-",
	_16px: "_onyx-ui__16px_9hafA",
	_24px: "_onyx-ui__24px_0n-2R",
	_32px: "_onyx-ui__32px_4AJZQ",
	_48px: "_onyx-ui__48px_VJYHH"
}, F = {
	left: "_onyx-ui_left_lBtdU",
	right: "_onyx-ui_right_GIf75",
	top: "_onyx-ui_top_Qzlxt",
	bottom: "_onyx-ui_bottom_E281x",
	top_left: "_onyx-ui_top_left_HwlIc",
	top_center: "_onyx-ui_top_center_xOdXq",
	top_right: "_onyx-ui_top_right_ny-r-",
	top_justify: "_onyx-ui_top_justify_vdAjU",
	middle_left: "_onyx-ui_middle_left_g-LQe",
	middle_center: "_onyx-ui_middle_center_PR0Oh",
	middle_right: "_onyx-ui_middle_right_oiLp0",
	middle_justify: "_onyx-ui_middle_justify_g19gJ",
	bottom_left: "_onyx-ui_bottom_left_y-8dI",
	bottom_center: "_onyx-ui_bottom_center_Y83MC",
	bottom_right: "_onyx-ui_bottom_right_ZNEJQ",
	bottom_justify: "_onyx-ui_bottom_justify_-cvH-"
}, I = {
	left: "_onyx-ui_left_Rvtwr",
	right: "_onyx-ui_right_-m6bb",
	top: "_onyx-ui_top_p9hzO",
	bottom: "_onyx-ui_bottom_bSXIO",
	top_left: "_onyx-ui_top_left_QXaXK",
	top_center: "_onyx-ui_top_center_3xvSp",
	top_right: "_onyx-ui_top_right_IkhKg",
	middle_left: "_onyx-ui_middle_left_9dtae",
	middle_center: "_onyx-ui_middle_center_fWemA",
	middle_right: "_onyx-ui_middle_right_gqmaR",
	bottom_left: "_onyx-ui_bottom_left_GG3pW",
	bottom_center: "_onyx-ui_bottom_center_C80Re",
	bottom_right: "_onyx-ui_bottom_right_eusYV"
}, L = {
	"red-0": "_onyx-ui_red-0_kepoe",
	"red-1": "_onyx-ui_red-1_179Uw",
	"red-2": "_onyx-ui_red-2_bstqi",
	"red-3": "_onyx-ui_red-3_4G4-X",
	"red-4": "_onyx-ui_red-4_vPBHS",
	"red-5": "_onyx-ui_red-5_2eAj-",
	"red-6": "_onyx-ui_red-6_KfyNz",
	"red-7": "_onyx-ui_red-7_3W8GK",
	"red-8": "_onyx-ui_red-8_SSiBA",
	"red-9": "_onyx-ui_red-9_W1PPL",
	"pink-0": "_onyx-ui_pink-0_ZdKTb",
	"pink-1": "_onyx-ui_pink-1_sxwAL",
	"pink-2": "_onyx-ui_pink-2_qT3Is",
	"pink-3": "_onyx-ui_pink-3_xBmX-",
	"pink-4": "_onyx-ui_pink-4_TUHgl",
	"pink-5": "_onyx-ui_pink-5_Lfo1Y",
	"pink-6": "_onyx-ui_pink-6_gA-Jm",
	"pink-7": "_onyx-ui_pink-7_V61hY",
	"pink-8": "_onyx-ui_pink-8_XwtR6",
	"pink-9": "_onyx-ui_pink-9_JCDDa",
	"grape-0": "_onyx-ui_grape-0_RDxCn",
	"grape-1": "_onyx-ui_grape-1_wabjb",
	"grape-2": "_onyx-ui_grape-2_ZsYe-",
	"grape-3": "_onyx-ui_grape-3_b-luT",
	"grape-4": "_onyx-ui_grape-4_4xU3j",
	"grape-5": "_onyx-ui_grape-5_YpbvG",
	"grape-6": "_onyx-ui_grape-6_--8bU",
	"grape-7": "_onyx-ui_grape-7_-2thl",
	"grape-8": "_onyx-ui_grape-8_z-Lu-",
	"grape-9": "_onyx-ui_grape-9_VBknP",
	"violet-0": "_onyx-ui_violet-0_U9-f-",
	"violet-1": "_onyx-ui_violet-1_8JqDy",
	"violet-2": "_onyx-ui_violet-2_dyi6a",
	"violet-3": "_onyx-ui_violet-3_hlCMA",
	"violet-4": "_onyx-ui_violet-4_GCRiJ",
	"violet-5": "_onyx-ui_violet-5_Qzskq",
	"violet-6": "_onyx-ui_violet-6_c7A33",
	"violet-7": "_onyx-ui_violet-7_8IfrD",
	"violet-8": "_onyx-ui_violet-8_xrvIP",
	"violet-9": "_onyx-ui_violet-9_YNu09",
	"indigo-0": "_onyx-ui_indigo-0_oVDtg",
	"indigo-1": "_onyx-ui_indigo-1_DnF7-",
	"indigo-2": "_onyx-ui_indigo-2_8hu1t",
	"indigo-3": "_onyx-ui_indigo-3_oWcHc",
	"indigo-4": "_onyx-ui_indigo-4_HQ--s",
	"indigo-5": "_onyx-ui_indigo-5_m3gIL",
	"indigo-6": "_onyx-ui_indigo-6_nXAvN",
	"indigo-7": "_onyx-ui_indigo-7_JjYCn",
	"indigo-8": "_onyx-ui_indigo-8_j0j42",
	"indigo-9": "_onyx-ui_indigo-9_8I75l",
	"blue-0": "_onyx-ui_blue-0_nCFZm",
	"blue-1": "_onyx-ui_blue-1_xm8fd",
	"blue-2": "_onyx-ui_blue-2_zaQJO",
	"blue-3": "_onyx-ui_blue-3_Dj1BL",
	"blue-4": "_onyx-ui_blue-4_2S37-",
	"blue-5": "_onyx-ui_blue-5_bPCqL",
	"blue-6": "_onyx-ui_blue-6_MtODt",
	"blue-7": "_onyx-ui_blue-7_Zsi0C",
	"blue-8": "_onyx-ui_blue-8_WtggH",
	"blue-9": "_onyx-ui_blue-9_VgP8-",
	"cyan-0": "_onyx-ui_cyan-0_vKZJy",
	"cyan-1": "_onyx-ui_cyan-1_ZzYgD",
	"cyan-2": "_onyx-ui_cyan-2_LVDnF",
	"cyan-3": "_onyx-ui_cyan-3_0ax5b",
	"cyan-4": "_onyx-ui_cyan-4_d24Mt",
	"cyan-5": "_onyx-ui_cyan-5_IeVzQ",
	"cyan-6": "_onyx-ui_cyan-6_fbnu-",
	"cyan-7": "_onyx-ui_cyan-7_hYUpo",
	"cyan-8": "_onyx-ui_cyan-8_qUMZs",
	"cyan-9": "_onyx-ui_cyan-9_-tZB5",
	"teal-0": "_onyx-ui_teal-0_wsb8b",
	"teal-1": "_onyx-ui_teal-1_BY7oZ",
	"teal-2": "_onyx-ui_teal-2_eqz8A",
	"teal-3": "_onyx-ui_teal-3_i5a0k",
	"teal-4": "_onyx-ui_teal-4_WLqMz",
	"teal-5": "_onyx-ui_teal-5_HZe5J",
	"teal-6": "_onyx-ui_teal-6_1MriN",
	"teal-7": "_onyx-ui_teal-7_y-dfr",
	"teal-8": "_onyx-ui_teal-8_Q4zTb",
	"teal-9": "_onyx-ui_teal-9_kEmxZ",
	"green-0": "_onyx-ui_green-0_1hs--",
	"green-1": "_onyx-ui_green-1_y9P0k",
	"green-2": "_onyx-ui_green-2_bJ5JR",
	"green-3": "_onyx-ui_green-3_-Xq7l",
	"green-4": "_onyx-ui_green-4_hkPuz",
	"green-5": "_onyx-ui_green-5_pVYH0",
	"green-6": "_onyx-ui_green-6_X8zBj",
	"green-7": "_onyx-ui_green-7_B5L0p",
	"green-8": "_onyx-ui_green-8_Cz0Kl",
	"green-9": "_onyx-ui_green-9_9qyKt",
	"lime-0": "_onyx-ui_lime-0_1gP0o",
	"lime-1": "_onyx-ui_lime-1_DT6un",
	"lime-2": "_onyx-ui_lime-2_3p8nI",
	"lime-3": "_onyx-ui_lime-3_QzBvt",
	"lime-4": "_onyx-ui_lime-4_Kq8sS",
	"lime-5": "_onyx-ui_lime-5_qsFvQ",
	"lime-6": "_onyx-ui_lime-6_ZKOcq",
	"lime-7": "_onyx-ui_lime-7_U8sDu",
	"lime-8": "_onyx-ui_lime-8_UNQ2T",
	"lime-9": "_onyx-ui_lime-9_qGiZH",
	"yellow-0": "_onyx-ui_yellow-0_3O5fp",
	"yellow-1": "_onyx-ui_yellow-1_EcR3z",
	"yellow-2": "_onyx-ui_yellow-2_RMpuY",
	"yellow-3": "_onyx-ui_yellow-3_0DEeb",
	"yellow-4": "_onyx-ui_yellow-4_RZHRg",
	"yellow-5": "_onyx-ui_yellow-5_jhSz5",
	"yellow-6": "_onyx-ui_yellow-6_9at6E",
	"yellow-7": "_onyx-ui_yellow-7_0krUx",
	"yellow-8": "_onyx-ui_yellow-8_hw22P",
	"yellow-9": "_onyx-ui_yellow-9_dbj8F",
	"orange-0": "_onyx-ui_orange-0_f-wDw",
	"orange-1": "_onyx-ui_orange-1_ZfOu6",
	"orange-2": "_onyx-ui_orange-2_dlmBI",
	"orange-3": "_onyx-ui_orange-3_WGq1m",
	"orange-4": "_onyx-ui_orange-4_kFrOw",
	"orange-5": "_onyx-ui_orange-5_IOvRK",
	"orange-6": "_onyx-ui_orange-6_X7mDp",
	"orange-7": "_onyx-ui_orange-7_kB3UY",
	"orange-8": "_onyx-ui_orange-8_LxaM3",
	"orange-9": "_onyx-ui_orange-9_J8pIu",
	primary: "_onyx-ui_primary_Obpgx",
	panel: "_onyx-ui_panel_cDvWc",
	divider: "_onyx-ui_divider_5ZVQ9",
	gutter: "_onyx-ui_gutter_Zs0-C",
	selected: "_onyx-ui_selected_dssRO",
	highlight: "_onyx-ui_highlight_VM6hc",
	transparent: "_onyx-ui_transparent_-IhEN",
	"gray-0": "_onyx-ui_gray-0_gq2kw",
	"gray-1": "_onyx-ui_gray-1_FmiDf",
	"gray-2": "_onyx-ui_gray-2_KYZNn",
	"gray-3": "_onyx-ui_gray-3_qkCMy",
	"gray-4": "_onyx-ui_gray-4_2wOcT",
	"gray-5": "_onyx-ui_gray-5_cARjd",
	"gray-6": "_onyx-ui_gray-6_ihKbc",
	"gray-7": "_onyx-ui_gray-7_aAN3D",
	"gray-8": "_onyx-ui_gray-8_LF-5e",
	"gray-9": "_onyx-ui_gray-9_orod-"
}, R = /* @__PURE__ */ x(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), z = /* @__PURE__ */ x(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === A ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case w: return "SuspenseList";
				case O: return "Activity";
				case k: return "ViewTransition";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case S:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === _) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = j.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (M.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				F || (F = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return I[e] || (I[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: h,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d) {
			var p = n.children;
			if (p !== void 0) {
				if (o) {
					if (N(p)) {
						for (o = 0; o < p.length; o++) f(p[o]);
						Object.freeze && Object.freeze(p);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else f(p);
			}
			if (M.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", z[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), z[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = T(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.view_transition"), A = Symbol.for("react.client.reference"), j = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, N = Array.isArray, P = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var F, I = {}, L = m.react_stack_bottom_frame.bind(m, o)(), R = P(i(o)), z = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > j.recentlyCreatedOwnerStacks++;
			if (r) {
				var a = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var o = Error("react-stack-top-frame");
				Error.stackTraceLimit = a;
			} else o = L;
			return d(e, t, n, !1, o, r ? P(i(e)) : R);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > j.recentlyCreatedOwnerStacks++;
			if (r) {
				var a = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var o = Error("react-stack-top-frame");
				Error.stackTraceLimit = a;
			} else o = L;
			return d(e, t, n, !0, o, r ? P(i(e)) : R);
		};
	})();
})), B = (/* @__PURE__ */ x(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? R() : z();
})))(), ee = t.createContext({ parentFillColor: void 0 });
function V(e) {
	let t = (0, O.c)(80), n, r, i, o, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, R, z, V, H, ne, re;
	if (t[0] !== e) {
		let { ref: a, as: s, flex: c, wrap: l, horizontal: u, absolute: d, sticky: O, active: k, opacityOnPress: A, zIndex: j, shadow: M, cursor: N, padding: P, spacing: F, border: I, borderOnFocus: L, negativeBorder: B, align: ee, fillColor: te, borderColor: ie, cornerRadius: ae, tooltip: U, tooltipAnchor: oe, tooltipOffset: se, className: W, children: G, ...K } = e;
		T = a, i = s, y = c, ne = l, b = u, n = d, R = O, S = A, re = j, E = M, _ = N, C = P, D = F, o = I, p = L, x = B, r = ee, v = te, f = ie, g = ae, H = U, z = oe, V = se, h = W, m = G, w = K, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = f, t[6] = p, t[7] = m, t[8] = h, t[9] = g, t[10] = _, t[11] = v, t[12] = y, t[13] = b, t[14] = x, t[15] = S, t[16] = C, t[17] = w, t[18] = T, t[19] = E, t[20] = D, t[21] = R, t[22] = z, t[23] = V, t[24] = H, t[25] = ne, t[26] = re;
	} else n = t[1], r = t[2], i = t[3], o = t[4], f = t[5], p = t[6], m = t[7], h = t[8], g = t[9], _ = t[10], v = t[11], y = t[12], b = t[13], x = t[14], S = t[15], C = t[16], w = t[17], T = t[18], E = t[19], D = t[20], R = t[21], z = t[22], V = t[23], H = t[24], ne = t[25], re = t[26];
	let ie = z === void 0 ? "top" : z, [ae, U] = u(!1), oe = l(null), se = l(null), { parentFillColor: W } = a(ee), G;
	t[27] === H ? G = t[28] : (G = () => {
		H && U(!0);
	}, t[27] = H, t[28] = G);
	let K = G, ce;
	t[29] === H ? ce = t[30] : (ce = () => {
		H && U(!1);
	}, t[29] = H, t[30] = ce);
	let le = ce, ue;
	t[31] === Symbol.for("react.memo_cache_sentinel") ? (ue = () => oe.current, t[31] = ue) : ue = t[31], s(T, ue);
	let de, fe;
	t[32] !== ae || t[33] !== ie ? (de = () => {
		if (ae && oe.current && se.current) {
			let e = oe.current.getBoundingClientRect(), t = se.current.getBoundingClientRect();
			ie === "top" ? (se.current.style.left = `${e.left - (t.width - e.width) / 2}px`, se.current.style.top = `${e.top - t.height - 8}px`) : ie === "right" && (se.current.style.left = `${e.right + 8}px`, se.current.style.top = `${e.top - (t.height - e.height) / 2}px`);
		}
	}, fe = [ae, ie], t[32] = ae, t[33] = ie, t[34] = de, t[35] = fe) : (de = t[34], fe = t[35]), c(de, fe);
	let pe = i ?? "div", me = y && k.flex, he = ne && k.wrap, ge = n && k.absolute, _e = R && k.sticky, ve = S && k.opacityOnPress, ye = re && k[`zindex_${re}`], be = b && k.horizontal, xe = E === "heavy" ? k.heavyShadow : E && k.shadow, Se = _ && k[_], Ce = C && j[`_${C.replace(/ /, "_")}`], we = D && M[`_${D.replace(/ /, "_")}`], Te = o && N[o === !0 ? "top_right_bottom_left" : o.replace(/ /, "_")], Ee = p && k.borderOnFocus, De = x && N.negative, Oe = r && (b ? F[r.replace(/ /, "_")] : I[r.replace(/ /, "_")]), ke = v && A[v], Ae = g && P[`_${g}`], je = f && L[f], Me;
	t[36] !== h || t[37] !== ge || t[38] !== _e || t[39] !== ve || t[40] !== ye || t[41] !== be || t[42] !== xe || t[43] !== Se || t[44] !== Ce || t[45] !== we || t[46] !== Te || t[47] !== Ee || t[48] !== De || t[49] !== Oe || t[50] !== ke || t[51] !== Ae || t[52] !== je || t[53] !== me || t[54] !== he ? (Me = [
		k.View,
		me,
		he,
		ge,
		_e,
		ve,
		ye,
		be,
		xe,
		Se,
		Ce,
		we,
		Te,
		Ee,
		De,
		Oe,
		ke,
		Ae,
		je,
		h
	].filter(te), t[36] = h, t[37] = ge, t[38] = _e, t[39] = ve, t[40] = ye, t[41] = be, t[42] = xe, t[43] = Se, t[44] = Ce, t[45] = we, t[46] = Te, t[47] = Ee, t[48] = De, t[49] = Oe, t[50] = ke, t[51] = Ae, t[52] = je, t[53] = me, t[54] = he, t[55] = Me) : Me = t[55];
	let Ne = Me.join(" "), Pe = v || W, Fe;
	t[56] === Pe ? Fe = t[57] : (Fe = { parentFillColor: Pe }, t[56] = Pe, t[57] = Fe);
	let Ie = Fe, Le;
	if (t[58] !== pe || t[59] !== m || t[60] !== K || t[61] !== le || t[62] !== ae || t[63] !== w || t[64] !== H || t[65] !== Ne || t[66] !== Ie) {
		let e = document.querySelector("#overlay"), n;
		t[68] === H ? n = t[69] : (n = /* @__PURE__ */ (0, B.jsx)("div", {
			ref: se,
			className: k.tooltip,
			children: H
		}), t[68] = H, t[69] = n);
		let r = n, i;
		t[70] !== pe || t[71] !== m || t[72] !== K || t[73] !== le || t[74] !== w || t[75] !== Ne ? (i = /* @__PURE__ */ (0, B.jsx)(pe, {
			ref: oe,
			className: Ne,
			onPointerEnter: K,
			onPointerLeave: le,
			...w,
			children: m
		}), t[70] = pe, t[71] = m, t[72] = K, t[73] = le, t[74] = w, t[75] = Ne, t[76] = i) : i = t[76];
		let a;
		t[77] !== i || t[78] !== Ie ? (a = /* @__PURE__ */ (0, B.jsx)(ee, {
			value: Ie,
			children: i
		}), t[77] = i, t[78] = Ie, t[79] = a) : a = t[79], Le = /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [a, ae && e && d(r, e)] }), t[58] = pe, t[59] = m, t[60] = K, t[61] = le, t[62] = ae, t[63] = w, t[64] = H, t[65] = Ne, t[66] = Ie, t[67] = Le;
	} else Le = t[67];
	return Le;
}
function te(e) {
	return e;
}
var H = {
	Text: "_onyx-ui_Text_N3t1U",
	select: "_onyx-ui_select_ky1qN",
	light: "_onyx-ui_light_IbzVh",
	lighter: "_onyx-ui_lighter_DTRvS",
	caps: "_onyx-ui_caps_Gy2yt",
	ellipsis: "_onyx-ui_ellipsis_31RAb",
	noWrap: "_onyx-ui_noWrap_-IJTe",
	highlight: "_onyx-ui_highlight_qQTd3"
}, ne = {
	_12px: "_onyx-ui__12px_BF6bk",
	_14px: "_onyx-ui__14px_3aMJ0",
	_18px: "_onyx-ui__18px_XtZG-",
	_24px: "_onyx-ui__24px_fwBNW",
	_32px: "_onyx-ui__32px_mh4EG"
}, re = {
	_300: "_onyx-ui__300_imdej",
	_350: "_onyx-ui__350_rju-U",
	_400: "_onyx-ui__400_9-vuA",
	_500: "_onyx-ui__500_9rCUP",
	_600: "_onyx-ui__600_8vDNo",
	_700: "_onyx-ui__700_4dk7T"
}, ie = {
	"red-0": "_onyx-ui_red-0_ohhOJ",
	"red-1": "_onyx-ui_red-1_-8gTp",
	"red-2": "_onyx-ui_red-2_1RT8M",
	"red-3": "_onyx-ui_red-3_J-Lsh",
	"red-4": "_onyx-ui_red-4_ng-uw",
	"red-5": "_onyx-ui_red-5_aeTce",
	"red-6": "_onyx-ui_red-6_pRy1L",
	"red-7": "_onyx-ui_red-7_cUSb2",
	"red-8": "_onyx-ui_red-8_MNcDP",
	"red-9": "_onyx-ui_red-9_coBAk",
	"pink-0": "_onyx-ui_pink-0_2WyxE",
	"pink-1": "_onyx-ui_pink-1_VAG-V",
	"pink-2": "_onyx-ui_pink-2_O0Nps",
	"pink-3": "_onyx-ui_pink-3_6yLx-",
	"pink-4": "_onyx-ui_pink-4_psqoi",
	"pink-5": "_onyx-ui_pink-5_BqA-1",
	"pink-6": "_onyx-ui_pink-6_nBFdd",
	"pink-7": "_onyx-ui_pink-7_4Uv1o",
	"pink-8": "_onyx-ui_pink-8_0Pn9A",
	"pink-9": "_onyx-ui_pink-9_jj94-",
	"grape-0": "_onyx-ui_grape-0_2c6jt",
	"grape-1": "_onyx-ui_grape-1_xuJs5",
	"grape-2": "_onyx-ui_grape-2_6rLFx",
	"grape-3": "_onyx-ui_grape-3_qkOjE",
	"grape-4": "_onyx-ui_grape-4_Vu5AE",
	"grape-5": "_onyx-ui_grape-5_LVn5Z",
	"grape-6": "_onyx-ui_grape-6_bd5jW",
	"grape-7": "_onyx-ui_grape-7_KnWwZ",
	"grape-8": "_onyx-ui_grape-8_ECNug",
	"grape-9": "_onyx-ui_grape-9_iEcHT",
	"violet-0": "_onyx-ui_violet-0_LzfZ2",
	"violet-1": "_onyx-ui_violet-1_Qo7Ee",
	"violet-2": "_onyx-ui_violet-2_Rb1tU",
	"violet-3": "_onyx-ui_violet-3_BhXxQ",
	"violet-4": "_onyx-ui_violet-4_V-D7a",
	"violet-5": "_onyx-ui_violet-5_1-MxP",
	"violet-6": "_onyx-ui_violet-6_zpmVE",
	"violet-7": "_onyx-ui_violet-7_VwzyU",
	"violet-8": "_onyx-ui_violet-8_Mc5DJ",
	"violet-9": "_onyx-ui_violet-9_lqU8X",
	"indigo-0": "_onyx-ui_indigo-0_vMX-q",
	"indigo-1": "_onyx-ui_indigo-1_9TEc6",
	"indigo-2": "_onyx-ui_indigo-2_FI4N-",
	"indigo-3": "_onyx-ui_indigo-3_gFNc6",
	"indigo-4": "_onyx-ui_indigo-4_vZJ3E",
	"indigo-5": "_onyx-ui_indigo-5_wwsYp",
	"indigo-6": "_onyx-ui_indigo-6_o3GU8",
	"indigo-7": "_onyx-ui_indigo-7_64-eR",
	"indigo-8": "_onyx-ui_indigo-8_hwsZe",
	"indigo-9": "_onyx-ui_indigo-9_rsowW",
	"blue-0": "_onyx-ui_blue-0_e6xWd",
	"blue-1": "_onyx-ui_blue-1_QALXE",
	"blue-2": "_onyx-ui_blue-2_9hso7",
	"blue-3": "_onyx-ui_blue-3_jC4G1",
	"blue-4": "_onyx-ui_blue-4_BC6ZQ",
	"blue-5": "_onyx-ui_blue-5_t3PoA",
	"blue-6": "_onyx-ui_blue-6_d-1gM",
	"blue-7": "_onyx-ui_blue-7_6lxlV",
	"blue-8": "_onyx-ui_blue-8_zKVmw",
	"blue-9": "_onyx-ui_blue-9_X3gQe",
	"cyan-0": "_onyx-ui_cyan-0_kNzSi",
	"cyan-1": "_onyx-ui_cyan-1_tJiyg",
	"cyan-2": "_onyx-ui_cyan-2_3YTrs",
	"cyan-3": "_onyx-ui_cyan-3_Jb4p7",
	"cyan-4": "_onyx-ui_cyan-4_ewydl",
	"cyan-5": "_onyx-ui_cyan-5_dPgDT",
	"cyan-6": "_onyx-ui_cyan-6_JBOlM",
	"cyan-7": "_onyx-ui_cyan-7_aqkeU",
	"cyan-8": "_onyx-ui_cyan-8_ubmn0",
	"cyan-9": "_onyx-ui_cyan-9_DfU2l",
	"teal-0": "_onyx-ui_teal-0_E6BgF",
	"teal-1": "_onyx-ui_teal-1_AWJ-T",
	"teal-2": "_onyx-ui_teal-2_jHoty",
	"teal-3": "_onyx-ui_teal-3_JoUgq",
	"teal-4": "_onyx-ui_teal-4_0oi3v",
	"teal-5": "_onyx-ui_teal-5_0fSpW",
	"teal-6": "_onyx-ui_teal-6_vZbpw",
	"teal-7": "_onyx-ui_teal-7_pu5Or",
	"teal-8": "_onyx-ui_teal-8_voI2m",
	"teal-9": "_onyx-ui_teal-9_2OiI-",
	"green-0": "_onyx-ui_green-0_Uc9An",
	"green-1": "_onyx-ui_green-1_7oUqm",
	"green-2": "_onyx-ui_green-2_wXIee",
	"green-3": "_onyx-ui_green-3_ctgKC",
	"green-4": "_onyx-ui_green-4_Nb9c2",
	"green-5": "_onyx-ui_green-5_oAm9v",
	"green-6": "_onyx-ui_green-6_58sIS",
	"green-7": "_onyx-ui_green-7_0jI75",
	"green-8": "_onyx-ui_green-8_6s4dA",
	"green-9": "_onyx-ui_green-9_7ZTgL",
	"lime-0": "_onyx-ui_lime-0_-e9n5",
	"lime-1": "_onyx-ui_lime-1_G77e8",
	"lime-2": "_onyx-ui_lime-2_FphIV",
	"lime-3": "_onyx-ui_lime-3_H6TLo",
	"lime-4": "_onyx-ui_lime-4_vzvxh",
	"lime-5": "_onyx-ui_lime-5_ypZPK",
	"lime-6": "_onyx-ui_lime-6_D-QtP",
	"lime-7": "_onyx-ui_lime-7_77XKb",
	"lime-8": "_onyx-ui_lime-8_kVW2m",
	"lime-9": "_onyx-ui_lime-9_uLz-X",
	"yellow-0": "_onyx-ui_yellow-0_MR2nj",
	"yellow-1": "_onyx-ui_yellow-1_P-Utx",
	"yellow-2": "_onyx-ui_yellow-2_4-qEy",
	"yellow-3": "_onyx-ui_yellow-3_DpKxw",
	"yellow-4": "_onyx-ui_yellow-4_TxgEQ",
	"yellow-5": "_onyx-ui_yellow-5_1aJ4Z",
	"yellow-6": "_onyx-ui_yellow-6_Mii-H",
	"yellow-7": "_onyx-ui_yellow-7_1MLHR",
	"yellow-8": "_onyx-ui_yellow-8_zMyAk",
	"yellow-9": "_onyx-ui_yellow-9_z3-m-",
	"orange-0": "_onyx-ui_orange-0_xuha2",
	"orange-1": "_onyx-ui_orange-1_RcjZs",
	"orange-2": "_onyx-ui_orange-2_oTE83",
	"orange-3": "_onyx-ui_orange-3_MLHYk",
	"orange-4": "_onyx-ui_orange-4_vZWWW",
	"orange-5": "_onyx-ui_orange-5_1deqd",
	"orange-6": "_onyx-ui_orange-6_L9EBr",
	"orange-7": "_onyx-ui_orange-7_nDWRi",
	"orange-8": "_onyx-ui_orange-8_NlinS",
	"orange-9": "_onyx-ui_orange-9_GuTyA",
	text: "_onyx-ui_text_ir-25",
	primary: "_onyx-ui_primary_2fg9l",
	content: "_onyx-ui_content_j0S5i",
	panel: "_onyx-ui_panel_fk5GD",
	gutter: "_onyx-ui_gutter_SO5Of",
	icon: "_onyx-ui_icon_jO3Re",
	divider: "_onyx-ui_divider_FX32N",
	selected: "_onyx-ui_selected_MEcb-",
	highlight: "_onyx-ui_highlight_i7woj",
	black: "_onyx-ui_black_Kk3sT",
	white: "_onyx-ui_white_fi2iy",
	transparent: "_onyx-ui_transparent_EFDgW",
	"gray-0": "_onyx-ui_gray-0_B2s7p",
	"gray-1": "_onyx-ui_gray-1_qm8JY",
	"gray-2": "_onyx-ui_gray-2_as6tW",
	"gray-3": "_onyx-ui_gray-3_f6hVZ",
	"gray-4": "_onyx-ui_gray-4_pTthK",
	"gray-5": "_onyx-ui_gray-5_GUxiA",
	"gray-6": "_onyx-ui_gray-6_oi-dI",
	"gray-7": "_onyx-ui_gray-7_rSy7P",
	"gray-8": "_onyx-ui_gray-8_JlZRp",
	"gray-9": "_onyx-ui_gray-9_goyha"
}, ae = t.createContext({ textParent: !1 });
function U(e) {
	let t = (0, O.c)(49), n, r, i, o, s, c, l, u, d, f, p, m, h, g;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14]) : ({as: n, light: f, caps: i, bold: r, select: h, ellipsis: s, noWrap: p, fontSize: c, fontWeight: l, textColor: g, highlight: u, innerStyle: d, children: o, ...m} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = s, t[6] = c, t[7] = l, t[8] = u, t[9] = d, t[10] = f, t[11] = p, t[12] = m, t[13] = h, t[14] = g);
	let { textParent: _ } = a(ae), v = r && re._600, y = f && H.light, b = i && H.caps, x = c && ne[`_${c}`], S = l && re[`_${l}`], C = g && ie[g], w = u && H.highlight, T;
	t[15] !== v || t[16] !== y || t[17] !== b || t[18] !== x || t[19] !== S || t[20] !== C || t[21] !== w ? (T = [
		v,
		y,
		b,
		x,
		S,
		C,
		w
	].filter(se), t[15] = v, t[16] = y, t[17] = b, t[18] = x, t[19] = S, t[20] = C, t[21] = w, t[22] = T) : T = t[22];
	let E = T.join(" ");
	if (_) {
		let e = n ?? "span", r;
		return t[23] !== e || t[24] !== o || t[25] !== m || t[26] !== E ? (r = /* @__PURE__ */ (0, B.jsx)(e, {
			className: E,
			...m,
			children: o
		}), t[23] = e, t[24] = o, t[25] = m, t[26] = E, t[27] = r) : r = t[27], r;
	}
	let D = h && H.select, k = s && H.ellipsis, A = p && H.noWrap, j = f && c === "18px" ? H.lighter : f && H.light, M = i && H.caps, N = r && re._600, P = c && ne[`_${c}`] || ne._14px, F = l && re[`_${l}`], I = g && ie[g] || ie.text, L;
	t[28] !== k || t[29] !== A || t[30] !== j || t[31] !== M || t[32] !== N || t[33] !== P || t[34] !== F || t[35] !== I || t[36] !== D ? (L = [
		H.Text,
		D,
		k,
		A,
		j,
		M,
		N,
		P,
		F,
		I
	].filter(oe), t[28] = k, t[29] = A, t[30] = j, t[31] = M, t[32] = N, t[33] = P, t[34] = F, t[35] = I, t[36] = D, t[37] = L) : L = t[37];
	let R = L.join(" "), z = n, ee = R + " " + E, te;
	t[38] === Symbol.for("react.memo_cache_sentinel") ? (te = { textParent: !0 }, t[38] = te) : te = t[38];
	let U;
	t[39] === o ? U = t[40] : (U = /* @__PURE__ */ (0, B.jsx)(ae, {
		value: te,
		children: o
	}), t[39] = o, t[40] = U);
	let W;
	t[41] !== d || t[42] !== ee || t[43] !== U ? (W = /* @__PURE__ */ (0, B.jsx)("span", {
		className: ee,
		style: d,
		children: U
	}), t[41] = d, t[42] = ee, t[43] = U, t[44] = W) : W = t[44];
	let G;
	return t[45] !== m || t[46] !== z || t[47] !== W ? (G = /* @__PURE__ */ (0, B.jsx)(V, {
		as: z,
		...m,
		children: W
	}), t[45] = m, t[46] = z, t[47] = W, t[48] = G) : G = t[48], G;
}
function oe(e) {
	return e;
}
function se(e) {
	return e;
}
var W = {
	Icon: "_onyx-ui_Icon_CezUJ",
	light: "_onyx-ui_light_4wb4K",
	bleed: "_onyx-ui_bleed_Gv7vD"
};
// src/components/icon/Icon.tsx
function G(e) {
	let t = (0, O.c)(18), n, r, i, a, o, s, c;
	if (t[0] !== e) {
		let { ref: l, light: u, icon: d, color: f, size: p, bleed: m, className: h, ...g } = e;
		a = u, n = d, c = f, s = p, r = m, i = h, o = g, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c;
	} else n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7];
	let l = c === void 0 ? "text" : c, u = l && ie[l], d = a && W.light, f = r && W.bleed, p;
	t[8] !== i || t[9] !== u || t[10] !== d || t[11] !== f ? (p = [
		W.Icon,
		u,
		d,
		f,
		i
	].filter(K), t[8] = i, t[9] = u, t[10] = d, t[11] = f, t[12] = p) : p = t[12];
	let m = p.join(" "), h;
	return t[13] !== n || t[14] !== m || t[15] !== o || t[16] !== s ? (h = /* @__PURE__ */ (0, B.jsx)(n, {
		size: s,
		className: m,
		...o
	}), t[13] = n, t[14] = m, t[15] = o, t[16] = s, t[17] = h) : h = t[17], h;
}
function K(e) {
	return e;
}
var ce = {
	Button: "_onyx-ui_Button_2sngS",
	bleed: "_onyx-ui_bleed_vgtDf",
	hover: "_onyx-ui_hover_kN2-Z",
	selected: "_onyx-ui_selected_LLwtV",
	primary: "_onyx-ui_primary_b-5q5",
	solid: "_onyx-ui_solid_fI6Ci"
}, le = ({ parentFillColor: e, solid: t, primary: n, hover: r, selected: i }) => {
	switch (!0) {
		case i: return "selected";
		case !r && t && n: return "primary";
		case t: return "icon";
		case r: return;
	}
}, ue = ({ primary: e, solid: t }) => {
	switch (!0) {
		case t && e: return "white";
		case e: return "primary";
	}
	return "text";
};
function de(e) {
	let t = (0, O.c)(71), n, r, i, o, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T;
	if (t[0] !== e) {
		let { ref: a, type: s, bleed: c, solid: l, primary: E, hover: D, active: O, icon: k, iconColor: A, iconFill: j, iconSize: M, rightIcon: N, round: P, bold: F, titleColor: I, fontWeight: L, selected: R, opacityOnPress: z, className: B, children: ee, ...V } = e;
		v = a, C = s, r = c, S = l, g = E, d = D, n = O, f = k, p = A, m = j, h = M, y = N, b = P, w = F, T = I, u = L, x = R, o = B, i = ee, _ = V, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = u, t[6] = d, t[7] = f, t[8] = p, t[9] = m, t[10] = h, t[11] = g, t[12] = _, t[13] = v, t[14] = y, t[15] = b, t[16] = x, t[17] = S, t[18] = C, t[19] = w, t[20] = T;
	} else n = t[1], r = t[2], i = t[3], o = t[4], u = t[5], d = t[6], f = t[7], p = t[8], m = t[9], h = t[10], g = t[11], _ = t[12], v = t[13], y = t[14], b = t[15], x = t[16], S = t[17], C = t[18], w = t[19], T = t[20];
	let E = C === void 0 ? "button" : C, D = w === void 0 || w, k = l(null), A = (S || n) && ce.solid, j = g && ce.primary, M = d && ce.hover, N = x && ce.selected, P = r && ce.bleed, F;
	t[21] !== o || t[22] !== A || t[23] !== j || t[24] !== M || t[25] !== N || t[26] !== P ? (F = [
		ce.Button,
		A,
		j,
		M,
		N,
		P,
		o
	].filter(fe), t[21] = o, t[22] = A, t[23] = j, t[24] = M, t[25] = N, t[26] = P, t[27] = F) : F = t[27];
	let I = F.join(" "), { parentFillColor: L } = a(ee), R;
	t[28] !== d || t[29] !== L || t[30] !== g || t[31] !== x || t[32] !== S ? (R = le({
		parentFillColor: L,
		solid: S,
		primary: g,
		hover: d,
		selected: x
	}), t[28] = d, t[29] = L, t[30] = g, t[31] = x, t[32] = S, t[33] = R) : R = t[33];
	let z = R, te;
	t[34] !== d || t[35] !== g || t[36] !== x || t[37] !== S || t[38] !== T ? (te = T ?? ue({
		solid: S,
		primary: g,
		hover: d,
		selected: x
	}), t[34] = d, t[35] = g, t[36] = x, t[37] = S, t[38] = T, t[39] = te) : te = t[39];
	let H = te, ne;
	t[40] === Symbol.for("react.memo_cache_sentinel") ? (ne = () => k.current, t[40] = ne) : ne = t[40], s(v, ne);
	let re;
	t[41] === Symbol.for("react.memo_cache_sentinel") ? (re = () => {
		k.current && k.current.style.setProperty("--hover-color", "var(--icon-color)");
	}, t[41] = re) : re = t[41];
	let ie;
	t[42] !== z || t[43] !== L ? (ie = [z, L], t[42] = z, t[43] = L, t[44] = ie) : ie = t[44], c(re, ie);
	let ae = i ? "8px 12px" : "8px", oe = b ? "max" : "2px", se;
	t[45] !== i || t[46] !== f || t[47] !== p || t[48] !== m || t[49] !== h || t[50] !== H ? (se = f && /* @__PURE__ */ (0, B.jsx)(G, {
		bleed: !0,
		absoluteStrokeWidth: !0,
		strokeWidth: 1.5,
		icon: f,
		size: h ?? 16,
		color: p ?? H,
		fill: m ? "currentColor" : "none",
		style: i ? void 0 : {
			marginLeft: -1,
			marginRight: -1
		}
	}), t[45] = i, t[46] = f, t[47] = p, t[48] = m, t[49] = h, t[50] = H, t[51] = se) : se = t[51];
	let W;
	t[52] !== D || t[53] !== i || t[54] !== u || t[55] !== H ? (W = typeof i == "string" ? /* @__PURE__ */ (0, B.jsx)(U, {
		bold: !u && D,
		fontWeight: u,
		textColor: H,
		style: { textAlign: "left" },
		children: i
	}) : i, t[52] = D, t[53] = i, t[54] = u, t[55] = H, t[56] = W) : W = t[56];
	let K;
	t[57] !== i || t[58] !== y || t[59] !== H ? (K = y && /* @__PURE__ */ (0, B.jsx)(V, {
		flex: !0,
		align: "middle right",
		children: /* @__PURE__ */ (0, B.jsx)(G, {
			bleed: !0,
			icon: y,
			size: 16,
			color: H,
			strokeWidth: 2.5,
			style: {
				marginRight: i ? -3 : 0,
				justifySelf: "flex-end"
			}
		})
	}), t[57] = i, t[58] = y, t[59] = H, t[60] = K) : K = t[60];
	let de;
	return t[61] !== I || t[62] !== z || t[63] !== _ || t[64] !== ae || t[65] !== oe || t[66] !== se || t[67] !== W || t[68] !== K || t[69] !== E ? (de = /* @__PURE__ */ (0, B.jsxs)(V, {
		ref: k,
		horizontal: !0,
		as: "button",
		type: E,
		cursor: "pointer",
		padding: ae,
		spacing: "8px",
		align: "middle center",
		cornerRadius: oe,
		fillColor: z,
		className: I,
		..._,
		children: [
			se,
			W,
			K
		]
	}), t[61] = I, t[62] = z, t[63] = _, t[64] = ae, t[65] = oe, t[66] = se, t[67] = W, t[68] = K, t[69] = E, t[70] = de) : de = t[70], de;
}
function fe(e) {
	return e;
}
de.Menu = function({ solid: e, cornerRadius: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, B.jsx)(Te, {
		anchor: "bottom left",
		...r,
		children: /* @__PURE__ */ (0, B.jsx)(de, {
			solid: e,
			rightIcon: p,
			cornerRadius: t,
			children: n
		})
	});
}, de.Group = function({ children: e, ...n }) {
	let r = t.Children.toArray(e);
	return /* @__PURE__ */ (0, B.jsx)(V, {
		horizontal: !0,
		...n,
		children: r.map((e, n) => t.isValidElement(e) && t.cloneElement(e, { style: {
			...e.props.style,
			marginLeft: e.props.solid ? 1 : -1,
			borderTopLeftRadius: n > 0 ? 0 : void 0,
			borderBottomLeftRadius: n > 0 ? 0 : void 0,
			borderTopRightRadius: n < r.length - 1 ? 0 : void 0,
			borderBottomRightRadius: n < r.length - 1 ? 0 : void 0
		} }))
	});
};
var pe = {
	Input: "_onyx-ui_Input_MpxTL",
	top_right_bottom_left: "_onyx-ui_top_right_bottom_left_yZJwq",
	bottom: "_onyx-ui_bottom_LCjDK",
	borderOnFocus: "_onyx-ui_borderOnFocus_HBU4h",
	flush: "_onyx-ui_flush_4zQD9"
}, me = (e) => {
	let t = (0, O.c)(66), n, r, i, a, o, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
	if (t[0] !== e) {
		let { type: s, label: c, value: l, lines: u, border: T, flush: E, borderOnFocus: D, multiline: O, icon: k, inputRef: A, hidden: j, placeholder: M, autoFocus: N, name: P, changeOnEnter: F, innerStyle: I, onKeyDown: L, onChange: R, onValueChange: z, ...B } = e;
		w = s, h = c, n = l, C = T, o = E, i = D, g = O, f = k, m = A, d = j, x = M, r = N, _ = P, a = F, p = I, y = L, v = R, b = z, S = B, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = d, t[7] = f, t[8] = p, t[9] = m, t[10] = h, t[11] = g, t[12] = _, t[13] = v, t[14] = y, t[15] = b, t[16] = x, t[17] = S, t[18] = C, t[19] = w;
	} else n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], d = t[6], f = t[7], p = t[8], m = t[9], h = t[10], g = t[11], _ = t[12], v = t[13], y = t[14], b = t[15], x = t[16], S = t[17], C = t[18], w = t[19];
	let T = C === void 0 || C, [E, D] = u(n), [k, A] = u(n), j = l(null), M;
	t[20] === Symbol.for("react.memo_cache_sentinel") ? (M = () => j.current, t[20] = M) : M = t[20], s(m, M), n !== k && (A(E), D(n));
	let N;
	t[21] !== y || t[22] !== b || t[23] !== E ? (N = (e) => {
		y?.(e), e.key === "Enter" && E !== void 0 && b?.(E);
	}, t[21] = y, t[22] = b, t[23] = E, t[24] = N) : N = t[24];
	let P = N, F;
	t[25] !== a || t[26] !== b || t[27] !== E ? (F = (e) => {
		let t = e.currentTarget;
		a === !0 && e.key === "Enter" && E !== void 0 && (e.preventDefault(), b?.(E), t.value = "");
	}, t[25] = a, t[26] = b, t[27] = E, t[28] = F) : F = t[28];
	let I = F, L;
	t[29] === v ? L = t[30] : (L = (e) => {
		D(e.currentTarget.value), v?.(e);
	}, t[29] = v, t[30] = L);
	let R = L, z;
	t[31] !== n || t[32] !== b || t[33] !== E ? (z = () => {
		E !== void 0 && E !== n && b?.(E);
	}, t[31] = n, t[32] = b, t[33] = E, t[34] = z) : z = t[34];
	let ee = z, te;
	t[35] === g ? te = t[36] : (te = () => {
		g === !0 && j.current && (j.current.style.height = "", j.current.style.height = `${j.current.scrollHeight}px`);
	}, t[35] = g, t[36] = te), c(te);
	let H = o === !0 && pe.flush, ne = T && pe[T === !0 ? "top_right_bottom_left" : T.replace(/ /, "_")], re = i && pe.borderOnFocus, ie;
	t[37] !== re || t[38] !== H || t[39] !== ne ? (ie = [
		pe.Input,
		H,
		ne,
		re
	].filter(he), t[37] = re, t[38] = H, t[39] = ne, t[40] = ie) : ie = t[40];
	let ae = ie.join(" "), U;
	t[41] !== r || t[42] !== ee || t[43] !== R || t[44] !== P || t[45] !== I || t[46] !== p || t[47] !== g || t[48] !== _ || t[49] !== x || t[50] !== w || t[51] !== E ? (U = g === !0 ? /* @__PURE__ */ (0, B.jsx)("textarea", {
		ref: j,
		name: _,
		value: E,
		autoFocus: r,
		placeholder: x,
		style: {
			background: "transparent",
			...p
		},
		onKeyDown: I,
		onChange: R,
		onBlur: ee
	}) : /* @__PURE__ */ (0, B.jsx)("input", {
		ref: j,
		type: w,
		name: _,
		value: E,
		autoFocus: r,
		placeholder: x,
		style: {
			background: "transparent",
			...p
		},
		onKeyDown: P,
		onChange: R,
		onBlur: ee
	}), t[41] = r, t[42] = ee, t[43] = R, t[44] = P, t[45] = I, t[46] = p, t[47] = g, t[48] = _, t[49] = x, t[50] = w, t[51] = E, t[52] = U) : U = t[52];
	let oe = U, se = w === "date", W;
	t[53] === f ? W = t[54] : (W = f && /* @__PURE__ */ (0, B.jsx)(G, {
		icon: f,
		size: 16
	}), t[53] = f, t[54] = W);
	let K;
	t[55] !== T || t[56] !== ae || t[57] !== oe || t[58] !== S || t[59] !== W ? (K = /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		border: T,
		align: "middle left",
		spacing: "4px",
		className: ae,
		...S,
		children: [W, oe]
	}), t[55] = T, t[56] = ae, t[57] = oe, t[58] = S, t[59] = W, t[60] = K) : K = t[60];
	let ce;
	return t[61] !== d || t[62] !== h || t[63] !== se || t[64] !== K ? (ce = /* @__PURE__ */ (0, B.jsx)(Fe, {
		flex: !0,
		label: h,
		hidden: d,
		chevron: se,
		children: K
	}), t[61] = d, t[62] = h, t[63] = se, t[64] = K, t[65] = ce) : ce = t[65], ce;
};
function he(e) {
	return e !== !1;
}
// src/components/toggle/Toggle.tsx
function ge(e) {
	let t = (0, O.c)(14), { value: n, icon: r, iconColor: i, children: a, onValueChange: o } = e, s;
	t[0] !== o || t[1] !== n ? (s = () => {
		o?.(!n);
	}, t[0] = o, t[1] = n, t[2] = s) : s = t[2];
	let c = s, l = !n, u = n ? i : void 0, d;
	t[3] !== r || t[4] !== l || t[5] !== u ? (d = /* @__PURE__ */ (0, B.jsx)(G, {
		bleed: !0,
		light: l,
		icon: r,
		size: 14,
		color: u
	}), t[3] = r, t[4] = l, t[5] = u, t[6] = d) : d = t[6];
	let f = !n, p;
	t[7] !== a || t[8] !== f ? (p = /* @__PURE__ */ (0, B.jsx)(U, {
		light: f,
		ellipsis: !0,
		children: a
	}), t[7] = a, t[8] = f, t[9] = p) : p = t[9];
	let m;
	return t[10] !== c || t[11] !== d || t[12] !== p ? (m = /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		opacityOnPress: !0,
		spacing: "4px",
		align: "middle left",
		cursor: "pointer",
		onClick: c,
		children: [d, p]
	}), t[10] = c, t[11] = d, t[12] = p, t[13] = m) : m = t[13], m;
}
// src/components/divider/Divider.tsx
function _e(e) {
	let t = (0, O.c)(22), n, r, i;
	if (t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({size: r, style: i, ...n} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i), r) {
		let e;
		t[4] === r ? e = t[5] : (e = /* @__PURE__ */ (0, B.jsx)(V, { padding: r }), t[4] = r, t[5] = e);
		let a;
		t[6] === i ? a = t[7] : (a = {
			...i,
			minWidth: 1,
			minHeight: 1,
			alignSelf: "stretch"
		}, t[6] = i, t[7] = a);
		let o;
		t[8] !== n || t[9] !== a ? (o = /* @__PURE__ */ (0, B.jsx)(V, {
			fillColor: "divider",
			style: a,
			...n
		}), t[8] = n, t[9] = a, t[10] = o) : o = t[10];
		let s;
		t[11] === r ? s = t[12] : (s = /* @__PURE__ */ (0, B.jsx)(V, { padding: r }), t[11] = r, t[12] = s);
		let c;
		return t[13] !== e || t[14] !== o || t[15] !== s ? (c = /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [
			e,
			o,
			s
		] }), t[13] = e, t[14] = o, t[15] = s, t[16] = c) : c = t[16], c;
	}
	let a;
	t[17] === i ? a = t[18] : (a = {
		...i,
		minWidth: 1,
		minHeight: 1,
		alignSelf: "stretch"
	}, t[17] = i, t[18] = a);
	let o;
	return t[19] !== n || t[20] !== a ? (o = /* @__PURE__ */ (0, B.jsx)(V, {
		fillColor: "divider",
		style: a,
		...n
	}), t[19] = n, t[20] = a, t[21] = o) : o = t[21], o;
}
var ve = { List: "_onyx-ui_List_FXNAH" };
// src/components/list/List.tsx
function ye(e) {
	let n = (0, O.c)(8), r, i;
	n[0] === e ? (r = n[1], i = n[2]) : ({children: r, ...i} = e, n[0] = e, n[1] = r, n[2] = i);
	let a;
	n[3] === r ? a = n[4] : (a = t.Children.map(r, be), n[3] = r, n[4] = a);
	let o;
	return n[5] !== i || n[6] !== a ? (o = /* @__PURE__ */ (0, B.jsx)(V, {
		border: !0,
		spacing: "1px",
		fillColor: "divider",
		cornerRadius: "4px",
		className: ve.List,
		...i,
		children: a
	}), n[5] = i, n[6] = a, n[7] = o) : o = n[7], o;
}
function be(e, n) {
	return t.isValidElement(e) && e;
}
// src/components/popover/Popover.tsx
function xe({ ref: e, content: n, isVisible: r, anchor: i = "bottom left", offsetTop: a = 0, noPortal: o, children: u }) {
	let f = l(null), p = l(null);
	s(e, () => f.current), c(() => {
		let e = f.current?.closest("#window")?.querySelector("#overlay");
		if (o && r && f.current && p.current) {
			let t = f.current.getBoundingClientRect(), n = p.current.getBoundingClientRect(), r = e.getBoundingClientRect();
			i === "top right" ? (p.current.style.left = `${t.width}px`, p.current.style.top = `${t.top - n.top}px`) : (p.current.style.left = `${t.left + 0 - r.left}px`, p.current.style.top = `${t.bottom + 0 - r.top}px`);
		} else if (r && f.current && p.current) {
			let t = f.current.getBoundingClientRect(), n = p.current.getBoundingClientRect(), r = e.getBoundingClientRect();
			i === "top right" ? (p.current.style.left = `${t.right - r.left}px`, p.current.style.top = `${t.top - 8 - r.top + a}px`) : i === "bottom right" ? (p.current.style.left = `${t.right - n.width}px`, p.current.style.top = `${t.top + t.height + a}px`) : i === "bottom left" && (p.current.style.left = `${t.left + 0 - r.left}px`, p.current.style.top = `${t.bottom + 0 - r.top + a}px`);
		}
	}, [
		i,
		r,
		o,
		a
	]);
	let m = f.current?.closest("#window")?.querySelector("#overlay"), h = t.Children.only(u), g = /* @__PURE__ */ (0, B.jsx)(V, {
		ref: p,
		absolute: !0,
		shadow: !0,
		fillColor: "content",
		cornerRadius: "4px",
		style: { pointerEvents: "auto" },
		children: n
	});
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [
		t.isValidElement(h) && t.cloneElement(h, {
			ref: f,
			opacityOnPress: !0
		}),
		o && r && m && g,
		!o && r && m && d(g, m)
	] });
}
// src/components/menu/Menu.tsx
function Se(e) {
	let t = (0, O.c)(4), { label: n } = e, r, i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { margin: "8px 12px" }, i = {
		fontSize: 11,
		lineHeight: "17px",
		whiteSpace: "nowrap"
	}, t[0] = r, t[1] = i) : (r = t[0], i = t[1]);
	let a;
	return t[2] === n ? a = t[3] : (a = /* @__PURE__ */ (0, B.jsx)(U, {
		light: !0,
		caps: !0,
		style: r,
		innerStyle: i,
		children: n
	}), t[2] = n, t[3] = a), a;
}
function Ce() {
	let e = (0, O.c)(1), t;
	return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ (0, B.jsx)(_e, { style: { margin: "8px 12px" } }), e[0] = t) : t = e[0], t;
}
function we(e) {
	let t = (0, O.c)(19), n, r, i, a, o, s, c;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7]) : ({title: s, value: c, style: o, children: n, onClick: r, onSelect: i, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c);
	let l;
	t[8] !== r || t[9] !== i || t[10] !== c ? (l = (e) => {
		r?.(e), e.isPropagationStopped() || i?.(c);
	}, t[8] = r, t[9] = i, t[10] = c, t[11] = l) : l = t[11];
	let u = l, d;
	t[12] === o ? d = t[13] : (d = {
		whiteSpace: "nowrap",
		...o
	}, t[12] = o, t[13] = d);
	let f = s ?? n, p;
	return t[14] !== u || t[15] !== a || t[16] !== d || t[17] !== f ? (p = /* @__PURE__ */ (0, B.jsx)(de, {
		hover: !0,
		align: "middle left",
		fontWeight: "400",
		cornerRadius: "0px",
		tooltipAnchor: "right",
		style: d,
		onClick: u,
		...a,
		children: f
	}), t[14] = u, t[15] = a, t[16] = d, t[17] = f, t[18] = p) : p = t[18], p;
}
function Te(e) {
	let r = (0, O.c)(39), a, s, c, d, f, p, m, h;
	r[0] === e ? (a = r[1], s = r[2], c = r[3], d = r[4], f = r[5], p = r[6], m = r[7], h = r[8]) : ({items: d, header: c, footer: s, style: h, children: a, onItemSelect: f, onVisibilityChange: p, ...m} = e, r[0] = e, r[1] = a, r[2] = s, r[3] = c, r[4] = d, r[5] = f, r[6] = p, r[7] = m, r[8] = h);
	let [g, _] = u(!1), v = l(null), y;
	r[9] === f ? y = r[10] : (y = (e) => {
		_(!1), f?.(e);
	}, r[9] = f, r[10] = y);
	let b = y, x;
	r[11] === Symbol.for("react.memo_cache_sentinel") ? (x = (e) => {
		v.current && v.current !== e.target && !v.current?.contains(e.target) && _(!1);
	}, r[11] = x) : x = r[11];
	let S = x, C, w;
	r[12] === Symbol.for("react.memo_cache_sentinel") ? (C = () => (document.addEventListener("pointerdown", S), () => {
		document.removeEventListener("pointerdown", S);
	}), w = [S], r[12] = C, r[13] = w) : (C = r[12], w = r[13]), o(C, w);
	let T, E;
	r[14] !== g || r[15] !== p ? (T = () => {
		p?.(g);
	}, E = [g, p], r[14] = g, r[15] = p, r[16] = T, r[17] = E) : (T = r[16], E = r[17]), o(T, E);
	let D;
	r[18] === c ? D = r[19] : (D = c && /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [c, /* @__PURE__ */ (0, B.jsx)(_e, {})] }), r[18] = c, r[19] = D);
	let k;
	if (r[20] !== b || r[21] !== d) {
		let e;
		r[23] === b ? e = r[24] : (e = (e, t) => i(e) && n(e, {
			key: t,
			onSelect: (...t) => {
				let n = t;
				b(...n), e.props.onSelect?.(...n);
			}
		}), r[23] = b, r[24] = e), k = d.map(e), r[20] = b, r[21] = d, r[22] = k;
	} else k = r[22];
	let A;
	r[25] === k ? A = r[26] : (A = /* @__PURE__ */ (0, B.jsx)(V, {
		padding: "8px 0px",
		children: k
	}), r[25] = k, r[26] = A);
	let j;
	r[27] === s ? j = r[28] : (j = s && /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(_e, {}), s] }), r[27] = s, r[28] = j);
	let M;
	r[29] !== j || r[30] !== D || r[31] !== A ? (M = /* @__PURE__ */ (0, B.jsxs)(V, {
		ref: v,
		children: [
			D,
			A,
			j
		]
	}), r[29] = j, r[30] = D, r[31] = A, r[32] = M) : M = r[32];
	let N = M, P;
	if (r[33] !== a || r[34] !== g || r[35] !== N || r[36] !== m || r[37] !== h) {
		let e = t.Children.only(a);
		P = /* @__PURE__ */ (0, B.jsx)(xe, {
			isVisible: g,
			content: N,
			...m,
			children: t.isValidElement(e) && t.cloneElement(e, {
				style: {
					...e.props.style,
					...h
				},
				cursor: "pointer",
				onClick: (t) => {
					_(Ee), e.props.onClick?.(t);
				}
			})
		}), r[33] = a, r[34] = g, r[35] = N, r[36] = m, r[37] = h, r[38] = P;
	} else P = r[38];
	return P;
}
function Ee(e) {
	return !e;
}
Te.Item = we, Te.Divider = Ce, Te.Group = Se;
var De = { Checkbox: "_onyx-ui_Checkbox_KUpB2" };
// src/components/checkbox/Checkbox.tsx
function Oe(e) {
	let t = (0, O.c)(32), n, r, i, a, o, s, c, l;
	if (t[0] !== e) {
		let { ref: u, label: d, value: f, icon: p, opacityOnPress: m, fillColor: h, onValueChange: g, onClick: _, ...v } = e;
		s = u, r = d, l = f, n = p, c = h, a = g, i = _, o = v, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l;
	} else n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8];
	let u = c === void 0 ? "primary" : c, d;
	t[9] === a ? d = t[10] : (d = (e) => {
		a?.(e.currentTarget.checked);
	}, t[9] = a, t[10] = d);
	let p = d, m = l ? u : void 0, h = !l, g;
	t[11] !== p || t[12] !== o || t[13] !== l ? (g = /* @__PURE__ */ (0, B.jsx)(V, {
		absolute: !0,
		as: "input",
		type: "checkbox",
		checked: l,
		onChange: p,
		...o
	}), t[11] = p, t[12] = o, t[13] = l, t[14] = g) : g = t[14];
	let _;
	t[15] !== n || t[16] !== l ? (_ = l && /* @__PURE__ */ (0, B.jsx)(G, {
		icon: n ?? f,
		size: 20,
		color: "white"
	}), t[15] = n, t[16] = l, t[17] = _) : _ = t[17];
	let v;
	t[18] !== m || t[19] !== h || t[20] !== g || t[21] !== _ ? (v = /* @__PURE__ */ (0, B.jsxs)(V, {
		border: h,
		borderColor: "gray-4",
		fillColor: m,
		cornerRadius: "2px",
		align: "middle center",
		className: De.Checkbox,
		children: [g, _]
	}), t[18] = m, t[19] = h, t[20] = g, t[21] = _, t[22] = v) : v = t[22];
	let y;
	t[23] === r ? y = t[24] : (y = r && /* @__PURE__ */ (0, B.jsx)(U, { children: r }), t[23] = r, t[24] = y);
	let b;
	t[25] !== i || t[26] !== s || t[27] !== v || t[28] !== y ? (b = /* @__PURE__ */ (0, B.jsxs)(V, {
		ref: s,
		horizontal: !0,
		opacityOnPress: !0,
		spacing: "8px",
		align: "middle left",
		onClick: i,
		children: [v, y]
	}), t[25] = i, t[26] = s, t[27] = v, t[28] = y, t[29] = b) : b = t[29];
	let x = b;
	if (!r) return x;
	let S;
	return t[30] === x ? S = t[31] : (S = /* @__PURE__ */ (0, B.jsx)(V, {
		as: "label",
		children: x
	}), t[30] = x, t[31] = S), S;
}
// src/components/select/Select.tsx
function ke(e) {
	let t = (0, O.c)(12), n, r, i, a;
	if (t[0] !== e) {
		let { label: o, value: s, onClick: c, onSelect: l, ...u } = e;
		n = o, a = s, r = l, i = u, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a;
	} else n = t[1], r = t[2], i = t[3], a = t[4];
	let o;
	t[5] !== r || t[6] !== a ? (o = () => {
		r?.(a);
	}, t[5] = r, t[6] = a, t[7] = o) : o = t[7];
	let s = o, c;
	return t[8] !== s || t[9] !== n || t[10] !== i ? (c = /* @__PURE__ */ (0, B.jsx)(Te.Item, {
		title: n,
		onClick: s,
		...i
	}), t[8] = s, t[9] = n, t[10] = i, t[11] = c) : c = t[11], c;
}
function Ae({ label: e, value: t, options: n = [], multiple: r, flipped: i, fallback: a, onValueChange: o, ...s }) {
	let c = (e) => {
		if (r) {
			if (Array.isArray(t)) {
				let n = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
				o?.(n.length === 0 ? void 0 : n);
			} else e === void 0 ? o?.(e) : o?.([e]);
		} else e !== t && o?.(e);
	}, l = n.flatMap((e, r) => {
		switch (!0) {
			case "options" in e: return [
				e.divider && r !== 0 && /* @__PURE__ */ (0, B.jsx)(Te.Divider, {}),
				...e.label ? [/* @__PURE__ */ (0, B.jsx)(Te.Group, { label: e.label })] : [],
				...e.options.map((e) => /* @__PURE__ */ (0, B.jsx)(ke, {
					selected: Array.isArray(t) ? t.includes(e.value) : e.value === t,
					icon: e.icon,
					iconColor: e.iconColor,
					iconFill: e.iconFill,
					label: e.label,
					value: e.value,
					tooltip: e.tooltip,
					onSelect: c
				})),
				e.divider && r !== n.length - 1 && /* @__PURE__ */ (0, B.jsx)(Te.Divider, {})
			].filter((e) => e !== !1);
			default: return /* @__PURE__ */ (0, B.jsx)(ke, {
				selected: e.value === t,
				icon: e.icon,
				iconColor: e.iconColor,
				iconFill: e.iconFill,
				label: e.label,
				value: e.value,
				tooltip: e.tooltip,
				onSelect: c
			});
		}
	}).filter((e) => e !== void 0), u = n.flatMap((e) => "options" in e ? e.options : [e]).filter((e) => Array.isArray(t) ? t.includes(e.value) : e.value === t);
	return /* @__PURE__ */ (0, B.jsx)(V, { children: /* @__PURE__ */ (0, B.jsx)(Te, {
		items: l,
		offsetTop: 8,
		anchor: i ? "bottom right" : void 0,
		...s,
		children: /* @__PURE__ */ (0, B.jsx)(Fe, {
			chevron: !0,
			label: e,
			flipped: i,
			children: u.length > 0 ? /* @__PURE__ */ (0, B.jsx)(V, {
				horizontal: !0,
				spacing: "12px",
				children: u.map((e) => /* @__PURE__ */ (0, B.jsxs)(V, {
					horizontal: !0,
					spacing: "4px",
					align: "middle left",
					children: [e.icon && /* @__PURE__ */ (0, B.jsx)(G, {
						icon: e.icon,
						color: e.iconColor,
						fill: e.iconFill ? "currentColor" : "none",
						size: 14,
						style: { margin: "-2px 0" }
					}), /* @__PURE__ */ (0, B.jsx)(U, {
						noWrap: !0,
						children: e.label
					})]
				}, String(e.value)))
			}) : /* @__PURE__ */ (0, B.jsxs)(V, {
				horizontal: !0,
				spacing: "4px",
				align: "middle left",
				children: [a?.icon && /* @__PURE__ */ (0, B.jsx)(G, {
					icon: a.icon,
					color: a.iconColor,
					fill: a.iconFill ? "currentColor" : "none",
					size: 14,
					style: { margin: "-2px 0" }
				}), /* @__PURE__ */ (0, B.jsx)(U, {
					noWrap: !0,
					children: a?.label
				})]
			})
		})
	}) });
}
// src/components/form/Form.tsx
function je() {}
var Me = r({
	fields: {},
	onFieldChange: () => void 0
});
function Ne(e) {
	let n = (0, O.c)(8), { name: r, children: i } = e, { fields: o, onFieldChange: s } = a(Me), c;
	n[0] !== r || n[1] !== s ? (c = (e) => {
		s(r, e);
	}, n[0] = r, n[1] = s, n[2] = c) : c = n[2];
	let l = c, u;
	if (n[3] !== i || n[4] !== o || n[5] !== l || n[6] !== r) {
		let e = t.Children.only(i);
		u = t.isValidElement(e) && t.cloneElement(e, {
			value: o[r],
			onValueChange: l
		}), n[3] = i, n[4] = o, n[5] = l, n[6] = r, n[7] = u;
	} else u = n[7];
	return u;
}
Ne.withComponent = (e) => ({ name: t, ...n }) => /* @__PURE__ */ (0, B.jsx)(Pe.Field, {
	name: t,
	children: /* @__PURE__ */ (0, B.jsx)(e, {
		name: t,
		...n
	})
});
function Pe(e) {
	let t = (0, O.c)(14), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({fields: r, children: n, onFieldChange: a, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o = a === void 0 ? je : a, s;
	t[5] !== r || t[6] !== o ? (s = {
		fields: r,
		onFieldChange: o
	}, t[5] = r, t[6] = o, t[7] = s) : s = t[7];
	let c = s, l;
	t[8] !== n || t[9] !== i ? (l = /* @__PURE__ */ (0, B.jsx)(V, {
		as: "form",
		...i,
		children: n
	}), t[8] = n, t[9] = i, t[10] = l) : l = t[10];
	let u;
	return t[11] !== c || t[12] !== l ? (u = /* @__PURE__ */ (0, B.jsx)(Me, {
		value: c,
		children: l
	}), t[11] = c, t[12] = l, t[13] = u) : u = t[13], u;
}
Pe.Field = Ne;
// src/components/label/Label.tsx
function Fe(e) {
	let t = (0, O.c)(33), n, r, i, a, o, s, c, l, u, d, f;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10], f = t[11]) : ({flex: i, label: s, labelProps: c, chevron: n, flipped: a, hidden: o, children: r, style: f, onPointerDown: u, onClick: l, ...d} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d, t[11] = f);
	let m;
	t[12] !== n || t[13] !== a || t[14] !== s || t[15] !== c ? (m = s && /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		spacing: "4px",
		align: "middle left",
		style: a ? { flexDirection: "row-reverse" } : void 0,
		children: [/* @__PURE__ */ (0, B.jsx)(U, {
			light: !0,
			caps: !0,
			noWrap: !0,
			fontSize: "12px",
			innerStyle: {
				fontSize: 11,
				lineHeight: "17px"
			},
			...c,
			children: s
		}), n && /* @__PURE__ */ (0, B.jsx)(G, {
			icon: p,
			size: 16,
			style: {
				opacity: .6,
				margin: -4,
				strokeWidth: 1
			}
		})]
	}), t[12] = n, t[13] = a, t[14] = s, t[15] = c, t[16] = m) : m = t[16];
	let h = a ? "row-reverse" : void 0, g;
	t[17] !== f || t[18] !== h ? (g = {
		...f,
		flexDirection: h
	}, t[17] = f, t[18] = h, t[19] = g) : g = t[19];
	let _;
	t[20] !== r || t[21] !== d || t[22] !== g ? (_ = /* @__PURE__ */ (0, B.jsx)(V, {
		flex: !0,
		...d,
		style: g,
		children: r
	}), t[20] = r, t[21] = d, t[22] = g, t[23] = _) : _ = t[23];
	let v;
	return t[24] !== i || t[25] !== o || t[26] !== l || t[27] !== u || t[28] !== d.cursor || t[29] !== d.opacityOnPress || t[30] !== m || t[31] !== _ ? (v = /* @__PURE__ */ (0, B.jsxs)(V, {
		flex: i,
		spacing: "8px",
		cursor: d.cursor,
		hidden: o,
		opacityOnPress: d.opacityOnPress,
		onPointerDown: u,
		onClick: l,
		children: [m, _]
	}), t[24] = i, t[25] = o, t[26] = l, t[27] = u, t[28] = d.cursor, t[29] = d.opacityOnPress, t[30] = m, t[31] = _, t[32] = v) : v = t[32], v;
}
var Ie = {
	Image: "_onyx-ui_Image_FmDOS",
	border: "_onyx-ui_border_rttIj",
	Stack: "_onyx-ui_Stack_4xsQe",
	StackItem: "_onyx-ui_StackItem_QKBcL"
};
// src/components/avatar/Avatar.tsx
function Le(e) {
	let t = (0, O.c)(39), n, r, i, a, o, s, c, l, u, d;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10]) : ({name: l, label: c, badge: n, chevron: r, flipped: i, imageOnly: o, imageBorder: a, imageFillColor: d, imageTextColor: s, ...u} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d);
	let f = d === void 0 ? "icon" : d, m;
	t[11] === l ? m = t[12] : (m = l?.split(" ").map(ze).join(""), t[11] = l, t[12] = m);
	let h = m, g = a && Ie.border, _;
	t[13] === g ? _ = t[14] : (_ = [Ie.Image, g].filter(Re), t[13] = g, t[14] = _);
	let v = _.join(" "), y;
	t[15] === i ? y = t[16] : (y = i ? { flexDirection: "row-reverse" } : void 0, t[15] = i, t[16] = y);
	let b;
	t[17] !== s || t[18] !== h ? (b = /* @__PURE__ */ (0, B.jsx)(U, {
		fontSize: "12px",
		fontWeight: "600",
		textColor: s,
		children: h
	}), t[17] = s, t[18] = h, t[19] = b) : b = t[19];
	let x;
	t[20] === n ? x = t[21] : (x = n && /* @__PURE__ */ (0, B.jsx)(G, {
		icon: n,
		size: 14,
		color: "primary",
		fill: "white",
		style: {
			position: "absolute",
			top: -1,
			left: -1
		}
	}), t[20] = n, t[21] = x);
	let S;
	t[22] !== a || t[23] !== v || t[24] !== f || t[25] !== b || t[26] !== x ? (S = /* @__PURE__ */ (0, B.jsxs)(V, {
		border: a,
		borderColor: "primary",
		cornerRadius: "max",
		fillColor: f,
		align: "middle center",
		className: v,
		children: [b, x]
	}), t[22] = a, t[23] = v, t[24] = f, t[25] = b, t[26] = x, t[27] = S) : S = t[27];
	let C;
	t[28] !== r || t[29] !== i || t[30] !== o || t[31] !== c || t[32] !== l ? (C = !o && /* @__PURE__ */ (0, B.jsxs)(V, {
		spacing: "8px",
		align: i ? "middle right" : "middle left",
		children: [/* @__PURE__ */ (0, B.jsxs)(V, {
			horizontal: !0,
			spacing: "4px",
			align: "middle left",
			style: i ? { flexDirection: "row-reverse" } : void 0,
			children: [/* @__PURE__ */ (0, B.jsx)(U, {
				noWrap: !0,
				children: l
			}), r && /* @__PURE__ */ (0, B.jsx)(G, {
				icon: p,
				size: 16,
				style: {
					margin: -4,
					strokeWidth: 1
				}
			})]
		}), c && /* @__PURE__ */ (0, B.jsx)(U, {
			light: !0,
			noWrap: !0,
			fontSize: "12px",
			children: c
		})]
	}), t[28] = r, t[29] = i, t[30] = o, t[31] = c, t[32] = l, t[33] = C) : C = t[33];
	let w;
	return t[34] !== u || t[35] !== y || t[36] !== S || t[37] !== C ? (w = /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		spacing: "8px",
		align: "middle left",
		...u,
		style: y,
		children: [S, C]
	}), t[34] = u, t[35] = y, t[36] = S, t[37] = C, t[38] = w) : w = t[38], w;
}
function Re(e) {
	return e;
}
function ze(e) {
	return e[0].toUpperCase();
}
Le.Empty = function({ ...e }) {
	return /* @__PURE__ */ (0, B.jsx)(V, {
		cornerRadius: "max",
		className: [Ie.Image, Ie.StackItem].join(" "),
		style: { border: "1.5px dashed var(--divider-color)" },
		...e
	});
}, Le.Stack = function({ children: e, ...n }) {
	let r = t.Children.toArray(e);
	return /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		className: Ie.Stack,
		...n,
		children: [t.Children.map(e, (e) => t.isValidElement(e) && t.cloneElement(e, { className: Ie.StackItem })), r.length === 0 && /* @__PURE__ */ (0, B.jsx)(Le.Empty, {})]
	});
};
var Be = { text: "_onyx-ui_text_-bQVx" };
// src/components/chip/Chip.tsx
function Ve(e) {
	let t = (0, O.c)(48), n, r, i, a, s, c, u, d, f, p, m, h, g, _, v, y, b;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], s = t[5], c = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = t[16], b = t[17]) : ({ref: g, as: n, to: y, icon: s, fontSize: a, iconSize: d, iconColor: c, iconLight: u, fillColor: i, outlineColor: v, tooltip: b, opacityOnPress: m, children: r, style: _, onPointerDown: p, onClick: f, ...h} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = s, t[6] = c, t[7] = u, t[8] = d, t[9] = f, t[10] = p, t[11] = m, t[12] = h, t[13] = g, t[14] = _, t[15] = v, t[16] = y, t[17] = b);
	let x = v === void 0 ? "content" : v, S = l(null), C, w;
	t[18] !== i || t[19] !== x ? (C = () => {
		S.current && i && S.current.style.setProperty("--outline-color", `var(--${x}-color)`);
	}, w = [i, x], t[18] = i, t[19] = x, t[20] = C, t[21] = w) : (C = t[20], w = t[21]), o(C, w);
	let T = n, E;
	t[22] === Symbol.for("react.memo_cache_sentinel") ? (E = { textDecoration: "none" }, t[22] = E) : E = t[22];
	let D;
	t[23] !== s || t[24] !== c || t[25] !== u || t[26] !== d ? (D = s && /* @__PURE__ */ (0, B.jsx)(G, {
		bleed: !0,
		icon: s,
		size: d ?? 14,
		color: c,
		style: { opacity: u ? .6 : void 0 }
	}), t[23] = s, t[24] = c, t[25] = u, t[26] = d, t[27] = D) : D = t[27];
	let k = i ? a === "12px" ? "2px 4px" : "4px" : void 0, A = i ? a === "12px" ? "-2px 0" : "-4px 0" : void 0, j;
	t[28] !== _ || t[29] !== A ? (j = {
		margin: A,
		..._
	}, t[28] = _, t[29] = A, t[30] = j) : j = t[30];
	let M;
	t[31] !== r || t[32] !== i || t[33] !== a || t[34] !== h || t[35] !== k || t[36] !== j ? (M = /* @__PURE__ */ (0, B.jsx)(U, {
		ref: S,
		fontSize: a,
		fillColor: i,
		cornerRadius: "2px",
		padding: k,
		className: Be.text,
		style: j,
		...h,
		children: r
	}), t[31] = r, t[32] = i, t[33] = a, t[34] = h, t[35] = k, t[36] = j, t[37] = M) : M = t[37];
	let N;
	return t[38] !== f || t[39] !== p || t[40] !== m || t[41] !== g || t[42] !== M || t[43] !== T || t[44] !== D || t[45] !== y || t[46] !== b ? (N = /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		ref: g,
		as: T,
		to: y,
		spacing: "4px",
		align: "middle left",
		tooltip: b,
		style: E,
		opacityOnPress: m,
		onPointerDown: p,
		onClick: f,
		children: [D, M]
	}), t[38] = f, t[39] = p, t[40] = m, t[41] = g, t[42] = M, t[43] = T, t[44] = D, t[45] = y, t[46] = b, t[47] = N) : N = t[47], N;
}
// src/components/tabs/Tabs.tsx
function He(e) {
	let t = (0, O.c)(22), n, r, i, a, o, s;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6]) : ({index: i, badge: n, selected: s, children: r, onTabSelect: a, ...o} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s);
	let c;
	t[7] !== i || t[8] !== a ? (c = () => {
		a?.(i);
	}, t[7] = i, t[8] = a, t[9] = c) : c = t[9];
	let l = c, u = s ? "primary" : "transparent", d;
	t[10] === Symbol.for("react.memo_cache_sentinel") ? (d = {
		paddingBottom: 8,
		borderWidth: 1.5
	}, t[10] = d) : d = t[10];
	let f = !s, p;
	t[11] !== r || t[12] !== o || t[13] !== f ? (p = /* @__PURE__ */ (0, B.jsx)(U, {
		light: f,
		fontSize: "18px",
		...o,
		children: r
	}), t[11] = r, t[12] = o, t[13] = f, t[14] = p) : p = t[14];
	let m;
	t[15] === n ? m = t[16] : (m = n && /* @__PURE__ */ (0, B.jsx)(Ve, {
		bold: !0,
		fontSize: "14px",
		fillColor: "highlight",
		children: n
	}), t[15] = n, t[16] = m);
	let h;
	return t[17] !== l || t[18] !== u || t[19] !== p || t[20] !== m ? (h = /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		opacityOnPress: !0,
		spacing: "4px",
		align: "middle left",
		negativeBorder: !0,
		border: "bottom",
		borderColor: u,
		style: d,
		cursor: "pointer",
		onClick: l,
		children: [p, m]
	}), t[17] = l, t[18] = u, t[19] = p, t[20] = m, t[21] = h) : h = t[21], h;
}
function Ue(e) {
	let t = (0, O.c)(15), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({selectedTabIndex: a, children: n, onTabSelect: r, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o;
	if (t[5] !== n || t[6] !== r || t[7] !== a) {
		let e;
		t[9] !== r || t[10] !== a ? (e = (e, t) => {
			let { title: n, badge: i } = e;
			return /* @__PURE__ */ (0, B.jsx)(He, {
				index: t,
				badge: i,
				selected: t === a,
				onTabSelect: r,
				children: n
			}, t);
		}, t[9] = r, t[10] = a, t[11] = e) : e = t[11], o = n.map(e), t[5] = n, t[6] = r, t[7] = a, t[8] = o;
	} else o = t[8];
	let s;
	return t[12] !== i || t[13] !== o ? (s = /* @__PURE__ */ (0, B.jsx)(V, {
		horizontal: !0,
		spacing: "16px",
		...i,
		children: o
	}), t[12] = i, t[13] = o, t[14] = s) : s = t[14], s;
}
Ue.Panel = function({ active: e = !0, children: t, ...n }) {
	return /* @__PURE__ */ (0, B.jsx)(V, {
		style: {
			flexShrink: 0,
			flexBasis: "100%",
			overflowY: "auto",
			scrollSnapAlign: "start"
		},
		...n,
		children: e && t
	});
};
// node_modules/comma-separated-tokens/index.js
function We(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
// node_modules/estree-util-is-identifier-name/lib/index.js
var Ge = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ke = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, qe = {};
function Je(e, t) {
	return ((t || qe).jsx ? Ke : Ge).test(e);
}
// node_modules/hast-util-whitespace/lib/index.js
var Ye = /[ \t\n\f\r]/g;
function Xe(e) {
	return typeof e == "object" ? e.type === "text" && Ze(e.value) : Ze(e);
}
function Ze(e) {
	return e.replace(Ye, "") === "";
}
// node_modules/property-information/lib/util/schema.js
var Qe = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Qe.prototype.normal = {}, Qe.prototype.property = {}, Qe.prototype.space = void 0;
// node_modules/property-information/lib/util/merge.js
function $e(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Qe(n, r, t);
}
// node_modules/property-information/lib/normalize.js
function et(e) {
	return e.toLowerCase();
}
// node_modules/property-information/lib/util/info.js
var tt = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
tt.prototype.attribute = "", tt.prototype.booleanish = !1, tt.prototype.boolean = !1, tt.prototype.commaOrSpaceSeparated = !1, tt.prototype.commaSeparated = !1, tt.prototype.defined = !1, tt.prototype.mustUseProperty = !1, tt.prototype.number = !1, tt.prototype.overloadedBoolean = !1, tt.prototype.property = "", tt.prototype.spaceSeparated = !1, tt.prototype.space = void 0;
// node_modules/property-information/lib/util/types.js
var nt = /* @__PURE__ */ S({
	boolean: () => q,
	booleanish: () => J,
	commaOrSpaceSeparated: () => ot,
	commaSeparated: () => at,
	number: () => Y,
	overloadedBoolean: () => it,
	spaceSeparated: () => X
}), rt = 0, q = st(), J = st(), it = st(), Y = st(), X = st(), at = st(), ot = st();
function st() {
	return 2 ** ++rt;
}
// node_modules/property-information/lib/util/defined-info.js
var ct = Object.keys(nt), lt = class extends tt {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), ut(this, "space", r), typeof n == "number") for (; ++i < ct.length;) {
			let e = ct[i];
			ut(this, ct[i], (n & nt[e]) === nt[e]);
		}
	}
};
lt.prototype.defined = !0;
function ut(e, t, n) {
	n && (e[t] = n);
}
// node_modules/property-information/lib/util/create.js
function dt(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new lt(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[et(r)] = r, n[et(a.attribute)] = r;
	}
	return new Qe(t, n, e.space);
}
// node_modules/property-information/lib/aria.js
var ft = dt({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: J,
		ariaAutoComplete: null,
		ariaBusy: J,
		ariaChecked: J,
		ariaColCount: Y,
		ariaColIndex: Y,
		ariaColSpan: Y,
		ariaControls: X,
		ariaCurrent: null,
		ariaDescribedBy: X,
		ariaDetails: null,
		ariaDisabled: J,
		ariaDropEffect: X,
		ariaErrorMessage: null,
		ariaExpanded: J,
		ariaFlowTo: X,
		ariaGrabbed: J,
		ariaHasPopup: null,
		ariaHidden: J,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: X,
		ariaLevel: Y,
		ariaLive: null,
		ariaModal: J,
		ariaMultiLine: J,
		ariaMultiSelectable: J,
		ariaOrientation: null,
		ariaOwns: X,
		ariaPlaceholder: null,
		ariaPosInSet: Y,
		ariaPressed: J,
		ariaReadOnly: J,
		ariaRelevant: null,
		ariaRequired: J,
		ariaRoleDescription: X,
		ariaRowCount: Y,
		ariaRowIndex: Y,
		ariaRowSpan: Y,
		ariaSelected: J,
		ariaSetSize: Y,
		ariaSort: null,
		ariaValueMax: Y,
		ariaValueMin: Y,
		ariaValueNow: Y,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
// node_modules/property-information/lib/util/case-sensitive-transform.js
function pt(e, t) {
	return t in e ? e[t] : t;
}
// node_modules/property-information/lib/util/case-insensitive-transform.js
function mt(e, t) {
	return pt(e, t.toLowerCase());
}
// node_modules/property-information/lib/html.js
var ht = dt({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: at,
		acceptCharset: X,
		accessKey: X,
		action: null,
		allow: null,
		allowFullScreen: q,
		allowPaymentRequest: q,
		allowUserMedia: q,
		alpha: q,
		alt: null,
		as: null,
		async: q,
		autoCapitalize: null,
		autoComplete: X,
		autoFocus: q,
		autoPlay: q,
		blocking: X,
		capture: null,
		charSet: null,
		checked: q,
		cite: null,
		className: X,
		closedBy: null,
		colorSpace: null,
		cols: Y,
		colSpan: Y,
		command: null,
		commandFor: null,
		content: null,
		contentEditable: J,
		controls: q,
		controlsList: X,
		coords: Y | at,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: q,
		defer: q,
		dir: null,
		dirName: null,
		disabled: q,
		download: it,
		draggable: J,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: q,
		formTarget: null,
		headers: X,
		height: Y,
		hidden: it,
		high: Y,
		href: null,
		hrefLang: null,
		htmlFor: X,
		httpEquiv: X,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: q,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: q,
		itemId: null,
		itemProp: X,
		itemRef: X,
		itemScope: q,
		itemType: X,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: q,
		low: Y,
		manifest: null,
		max: null,
		maxLength: Y,
		media: null,
		method: null,
		min: null,
		minLength: Y,
		multiple: q,
		muted: q,
		name: null,
		nonce: null,
		noModule: q,
		noValidate: q,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: q,
		optimum: Y,
		pattern: null,
		ping: X,
		placeholder: null,
		playsInline: q,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: q,
		referrerPolicy: null,
		rel: X,
		required: q,
		reversed: q,
		rows: Y,
		rowSpan: Y,
		sandbox: X,
		scope: null,
		scoped: q,
		seamless: q,
		selected: q,
		shadowRootClonable: q,
		shadowRootCustomElementRegistry: q,
		shadowRootDelegatesFocus: q,
		shadowRootMode: null,
		shadowRootSerializable: q,
		shape: null,
		size: Y,
		sizes: null,
		slot: null,
		span: Y,
		spellCheck: J,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: Y,
		step: null,
		style: null,
		tabIndex: Y,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: q,
		useMap: null,
		value: J,
		width: Y,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: X,
		axis: null,
		background: null,
		bgColor: null,
		border: Y,
		borderColor: null,
		bottomMargin: Y,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: q,
		declare: q,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: Y,
		leftMargin: Y,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: Y,
		marginWidth: Y,
		noResize: q,
		noHref: q,
		noShade: q,
		noWrap: q,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: Y,
		rules: null,
		scheme: null,
		scrolling: J,
		standby: null,
		summary: null,
		text: null,
		topMargin: Y,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: Y,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		credentialless: q,
		disablePictureInPicture: q,
		disableRemotePlayback: q,
		exportParts: at,
		part: X,
		prefix: null,
		property: null,
		results: Y,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: mt
}), gt = dt({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		maskType: "mask-type",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: ot,
		accentHeight: Y,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: Y,
		amplitude: Y,
		arabicForm: null,
		ascent: Y,
		attributeName: null,
		attributeType: null,
		azimuth: Y,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: Y,
		by: null,
		calcMode: null,
		capHeight: Y,
		className: X,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: Y,
		diffuseConstant: Y,
		direction: null,
		display: null,
		dur: null,
		divisor: Y,
		dominantBaseline: null,
		download: q,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: Y,
		enableBackground: null,
		end: null,
		event: null,
		exponent: Y,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: Y,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: at,
		g2: at,
		glyphName: at,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: Y,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: Y,
		horizOriginX: Y,
		horizOriginY: Y,
		id: null,
		ideographic: Y,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: Y,
		k: Y,
		k1: Y,
		k2: Y,
		k3: Y,
		k4: Y,
		kernelMatrix: ot,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: Y,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskType: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: Y,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: Y,
		overlineThickness: Y,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: Y,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: X,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: Y,
		pointsAtY: Y,
		pointsAtZ: Y,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: ot,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: ot,
		rev: ot,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: ot,
		requiredFeatures: ot,
		requiredFonts: ot,
		requiredFormats: ot,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: Y,
		specularExponent: Y,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: Y,
		strikethroughThickness: Y,
		string: null,
		stroke: null,
		strokeDashArray: ot,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: Y,
		strokeOpacity: Y,
		strokeWidth: null,
		style: null,
		surfaceScale: Y,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: ot,
		tabIndex: Y,
		tableValues: null,
		target: null,
		targetX: Y,
		targetY: Y,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: ot,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: Y,
		underlineThickness: Y,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: Y,
		values: null,
		vAlphabetic: Y,
		vMathematical: Y,
		vectorEffect: null,
		vHanging: Y,
		vIdeographic: Y,
		version: null,
		vertAdvY: Y,
		vertOriginX: Y,
		vertOriginY: Y,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: Y,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: pt
}), _t = dt({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), vt = dt({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: mt
}), yt = dt({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), bt = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, xt = /[A-Z]/g, St = /-[a-z]/g, Ct = /^data[-\w.:]+$/i;
function wt(e, t) {
	let n = et(t), r = t, i = tt;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Ct.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(St, Et);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!St.test(e)) {
				let n = e.replace(xt, Tt);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = lt;
	}
	return new i(r, t);
}
function Tt(e) {
	return "-" + e.toLowerCase();
}
function Et(e) {
	return e.charAt(1).toUpperCase();
}
// node_modules/property-information/index.js
var Dt = $e([
	ft,
	ht,
	_t,
	vt,
	yt
], "html"), Ot = $e([
	ft,
	gt,
	_t,
	vt,
	yt
], "svg");
// node_modules/space-separated-tokens/index.js
function kt(e) {
	return e.join(" ").trim();
}
// node_modules/inline-style-parser/cjs/index.js
var At = /* @__PURE__ */ x(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g;
	function u(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, u = 1;
		function f(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf("\n");
			u = ~n ? e.length - n : u + e.length;
		}
		function p() {
			var e = {
				line: l,
				column: u
			};
			return function(t) {
				return t.position = new m(e), _(), t;
			};
		}
		function m(e) {
			this.start = e, this.end = {
				line: l,
				column: u
			}, this.source = t.source;
		}
		m.prototype.content = e;
		function h(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + u + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = u, r.source = e, !t.silent) throw r;
		}
		function g(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return f(r), e = e.slice(r.length), n;
			}
		}
		function _() {
			g(i);
		}
		function v(e) {
			var t;
			for (e ||= []; t = y();) t !== !1 && e.push(t);
			return e;
		}
		function y() {
			var t = p();
			if (e.charAt(0) == "/" && e.charAt(1) == "*") {
				for (var n = 2; e.charAt(n) != "" && (e.charAt(n) != "*" || e.charAt(n + 1) != "/");) ++n;
				if (n += 2, e.charAt(n - 1) === "") return h("End of comment missing");
				var r = e.slice(2, n - 2);
				return u += 2, f(r), e = e.slice(n), u += 2, t({
					type: "comment",
					comment: r
				});
			}
		}
		function b() {
			var e = p(), t = g(a);
			if (t) {
				if (y(), !g(o)) return h("property missing ':'");
				var r = g(s), i = e({
					type: "declaration",
					property: d(t[0].replace(n, "")),
					value: r ? d(r[0].replace(n, "")) : ""
				});
				return g(c), i;
			}
		}
		function x() {
			var e = [];
			v(e);
			for (var t; t = b();) t !== !1 && (e.push(t), v(e));
			return e;
		}
		return _(), x();
	}
	function d(e) {
		return e ? e.replace(l, "") : "";
	}
	t.exports = u;
})), jt = /* @__PURE__ */ x(((e, t, n) => {
	var r = n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = a;
	var i = r(At());
	function a(e, t) {
		let n = null;
		if (!e || typeof e != "string") return n;
		let r = (0, i.default)(e), a = typeof t == "function";
		return r.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: r, value: i } = e;
			a ? t(r, i, e) : i && (n ||= {}, n[r] = i);
		}), n;
	}
})), Mt = /* @__PURE__ */ x(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), Nt = /* @__PURE__ */ x(((e, t, n) => {
	var r = (n && n.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(jt()), i = Mt();
	function a(e, t) {
		var n = {};
		return !e || typeof e != "string" || (0, r.default)(e, function(e, r) {
			e && r && (n[(0, i.camelCase)(e, t)] = r);
		}), n;
	}
	a.default = a, t.exports = a;
})), Pt = It("end"), Ft = It("start");
function It(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function Lt(e) {
	let t = Ft(e), n = Pt(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
// node_modules/unist-util-stringify-position/lib/index.js
function Rt(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Bt(e.position) : "start" in e || "end" in e ? Bt(e) : "line" in e || "column" in e ? zt(e) : "";
}
function zt(e) {
	return Vt(e && e.line) + ":" + Vt(e && e.column);
}
function Bt(e) {
	return zt(e && e.start) + "-" + zt(e && e.end);
}
function Vt(e) {
	return e && typeof e == "number" ? e : 1;
}
// node_modules/vfile-message/lib/index.js
var Ht = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = Rt(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
Ht.prototype.file = "", Ht.prototype.name = "", Ht.prototype.reason = "", Ht.prototype.message = "", Ht.prototype.stack = "", Ht.prototype.column = void 0, Ht.prototype.line = void 0, Ht.prototype.ancestors = void 0, Ht.prototype.cause = void 0, Ht.prototype.fatal = void 0, Ht.prototype.place = void 0, Ht.prototype.ruleId = void 0, Ht.prototype.source = void 0;
// node_modules/hast-util-to-jsx-runtime/lib/index.js
var Ut = /* @__PURE__ */ w(Nt(), 1), Wt = {}.hasOwnProperty, Gt = /* @__PURE__ */ new Map(), Kt = /[A-Z]/g, qt = /* @__PURE__ */ new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Jt = /* @__PURE__ */ new Set(["td", "th"]), Yt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Xt(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = cn(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = sn(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? Ot : Dt,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Zt(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Zt(e, t, n) {
	if (t.type === "element") return Qt(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return $t(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return tn(e, t, n);
	if (t.type === "mdxjsEsm") return en(e, t);
	if (t.type === "root") return nn(e, t, n);
	if (t.type === "text") return rn(e, t);
}
function Qt(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Ot, e.schema = i), e.ancestors.push(t);
	let a = mn(e, t.tagName, !1), o = ln(e, t), s = dn(e, t);
	return qt.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e != "string" || !Xe(e);
	})), an(e, o, a, t), on(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function $t(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	hn(e, t.position);
}
function en(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	hn(e, t.position);
}
function tn(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Ot, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : mn(e, t.name, !0), o = un(e, t), s = dn(e, t);
	return an(e, o, a, t), on(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function nn(e, t, n) {
	let r = {};
	return on(r, dn(e, t)), e.create(t, e.Fragment, r, n);
}
function rn(e, t) {
	return t.value;
}
function an(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function on(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function sn(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function cn(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = Ft(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function ln(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && Wt.call(t.properties, i)) {
		let a = fn(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Jt.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function un(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") {
		if (r.data && r.data.estree && e.evaluater) {
			let t = r.data.estree.body[0];
			t.type;
			let i = t.expression;
			i.type;
			let a = i.properties[0];
			a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
		} else hn(e, t.position);
	} else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") {
			if (r.value.data && r.value.data.estree && e.evaluater) {
				let t = r.value.data.estree.body[0];
				t.type, a = e.evaluater.evaluateExpression(t.expression);
			} else hn(e, t.position);
		} else a = r.value === null || r.value;
		n[i] = a;
	}
	return n;
}
function dn(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : Gt;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Zt(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function fn(e, t, n) {
	let r = wt(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? We(n) : kt(n)), r.property === "style") {
			let t = typeof n == "object" ? n : pn(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = gn(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? bt[r.property] || r.property : r.attribute, n];
	}
}
function pn(e, t) {
	try {
		return (0, Ut.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new Ht("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = Yt + "#cannot-parse-style-attribute", r;
	}
}
function mn(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = Je(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = Je(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return Wt.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	hn(e);
}
function hn(e, t) {
	let n = new Ht("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = Yt + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function gn(e) {
	let t = {}, n;
	for (n in e) Wt.call(e, n) && (t[_n(n)] = e[n]);
	return t;
}
function _n(e) {
	let t = e.replace(Kt, vn);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function vn(e) {
	return "-" + e.toLowerCase();
}
// node_modules/html-url-attributes/lib/index.js
var yn = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, bn = {};
function xn(e, t) {
	let n = t || bn;
	return Sn(e, typeof n.includeImageAlt != "boolean" || n.includeImageAlt, typeof n.includeHtml != "boolean" || n.includeHtml);
}
function Sn(e, t, n) {
	if (wn(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Cn(e.children, t, n);
	}
	return Array.isArray(e) ? Cn(e, t, n) : "";
}
function Cn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Sn(e[i], t, n);
	return r.join("");
}
function wn(e) {
	return !!(e && typeof e == "object");
}
// node_modules/decode-named-character-reference/index.dom.js
var Tn = document.createElement("i");
function En(e) {
	let t = "&" + e + ";";
	Tn.innerHTML = t;
	let n = Tn.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
// node_modules/micromark-util-chunked/index.js
function Dn(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function On(e, t) {
	return e.length > 0 ? (Dn(e, e.length, 0, t), e) : t;
}
// node_modules/micromark-util-combine-extensions/index.js
var kn = {}.hasOwnProperty;
function An(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) jn(t, e[n]);
	return t;
}
function jn(e, t) {
	let n;
	for (n in t) {
		let r = (kn.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			kn.call(r, a) || (r[a] = []);
			let e = i[a];
			Mn(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Mn(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Dn(e, 0, 0, r);
}
// node_modules/micromark-util-decode-numeric-character-reference/index.js
function Nn(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
// node_modules/micromark-util-normalize-identifier/index.js
function Pn(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
// node_modules/micromark-util-character/index.js
var Fn = Gn(/[A-Za-z]/), In = Gn(/[\dA-Za-z]/), Ln = Gn(/[#-'*+\--9=?A-Z^-~]/);
function Rn(e) {
	return e !== null && (e < 32 || e === 127);
}
var zn = Gn(/\d/), Bn = Gn(/[\dA-Fa-f]/), Vn = Gn(/[!-/:-@[-`{-~]/);
function Z(e) {
	return e !== null && e < -2;
}
function Hn(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var Un = Gn(/\p{P}|\p{S}/u), Wn = Gn(/\s/);
function Gn(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
// node_modules/micromark-util-sanitize-uri/index.js
function Kn(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && In(e.charCodeAt(n + 1)) && In(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
// node_modules/micromark-factory-space/index.js
function $(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Q(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
function qn(e, t, n, r, i, a) {
	let o = 0;
	return s;
	function s(t) {
		return a > 0 && Q(t) ? (e.enter(r), c(t)) : l(t);
	}
	function c(t) {
		return Q(t) && o < a ? (e.consume(t), o++, c) : (e.exit(r), l(t));
	}
	function l(e) {
		return o >= i ? t(e) : n(e);
	}
}
// node_modules/micromark/lib/initialize/content.js
var Jn = { tokenize: Yn };
function Yn(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) e.consume(n);
		else return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
		else return Z(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
// node_modules/micromark-util-edit-map/index.js
var Xn = class {
	constructor() {
		this.index = /* @__PURE__ */ new Map(), this.map = [];
	}
	add(e, t, n) {
		Zn(this, e, t, n, !1);
	}
	addBefore(e, t, n) {
		Zn(this, e, t, n, !0);
	}
	consume(e) {
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0, this.index.clear();
	}
};
function Zn(e, t, n, r, i) {
	if (n === 0 && r.length === 0) return;
	let a = e.index.get(t);
	if (a) {
		a[1] += n, i ? (r.push(...a[2]), a[2] = r) : a[2].push(...r);
		return;
	}
	let o = [
		t,
		n,
		r
	];
	e.map.push(o), e.index.set(t, o);
}
// node_modules/micromark/lib/initialize/document.js
var Qn = { tokenize: er }, $n = { tokenize: tr };
function er(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			let c = new Xn();
			return c.add(a + 1, 0, t.events.slice(n)), c.add(n, s - n, []), c.consume(t.events), l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !(!i.currentConstruct || i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check($n, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt($n, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) i && v(), _(0), e.consume(n);
		else return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
		else return Z(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			let l = new Xn();
			l.add(a + 1, 0, t.events.slice(n)), l.add(n, e - n, []), l.consume(t.events);
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function tr(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
// node_modules/micromark-util-classify-character/index.js
function nr(e) {
	if (e === null || Hn(e) || Wn(e)) return 1;
	if (Un(e)) return 2;
}
// node_modules/micromark-util-resolve-all/index.js
function rr(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
// node_modules/micromark-core-commonmark/lib/attention.js
var ir = {
	name: "attention",
	resolveAll: ar,
	tokenize: or
};
function ar(e, t) {
	let n = -1, r;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		let i = n;
		for (; i--;) if (e[i][0] === "exit" && e[i][1].type === "attentionSequence" && e[i][1]._open && t.sliceSerialize(e[i][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[i][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[i][1].end.offset - e[i][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			let a = e[i][1].end.offset - e[i][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1, o = { ...e[i][1].end }, s = { ...e[n][1].start };
			sr(o, -a), sr(s, a);
			let c = {
				type: a > 1 ? "strongSequence" : "emphasisSequence",
				start: o,
				end: { ...e[i][1].end }
			}, l = {
				type: a > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: s
			}, u = {
				type: a > 1 ? "strongText" : "emphasisText",
				start: { ...e[i][1].end },
				end: { ...e[n][1].start }
			}, d = {
				type: a > 1 ? "strong" : "emphasis",
				start: { ...c.start },
				end: { ...l.end }
			};
			e[i][1].end = { ...c.start }, e[n][1].start = { ...l.end }, r = [], e[i][1].end.offset - e[i][1].start.offset && (r = On(r, [[
				"enter",
				e[i][1],
				t
			], [
				"exit",
				e[i][1],
				t
			]])), r = On(r, [
				[
					"enter",
					d,
					t
				],
				[
					"enter",
					c,
					t
				],
				[
					"exit",
					c,
					t
				],
				[
					"enter",
					u,
					t
				]
			]), r = On(r, rr(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t)), r = On(r, [
				[
					"exit",
					u,
					t
				],
				[
					"enter",
					l,
					t
				],
				[
					"exit",
					l,
					t
				],
				[
					"exit",
					d,
					t
				]
			]);
			let f = 0;
			e[n][1].end.offset - e[n][1].start.offset && (f = 2, r = On(r, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])), Dn(e, i - 1, n - i + 3, r), n = i + r.length - f - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function or(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = nr(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = nr(o), u = !l || l === 2 && i || n.includes(o) && o !== 42 && o !== 95, d = !i || i === 2 && l || n.includes(r) && r !== 42 && r !== 95;
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function sr(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
// node_modules/micromark-core-commonmark/lib/autolink.js
var cr = {
	name: "autolink",
	tokenize: lr
};
function lr(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return Fn(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || In(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || In(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || Rn(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Ln(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return In(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || In(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
// node_modules/micromark-core-commonmark/lib/blank-line.js
var ur = {
	partial: !0,
	tokenize: dr
};
function dr(e, t, n) {
	return r;
	function r(t) {
		return Q(t) ? $(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || Z(e) ? t(e) : n(e);
	}
}
// node_modules/micromark-core-commonmark/lib/block-quote.js
var fr = {
	continuation: { tokenize: mr },
	exit: hr,
	name: "blockQuote",
	tokenize: pr
};
function pr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function mr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(fr, t, n)(r);
	}
}
function hr(e) {
	e.exit("blockQuote");
}
// node_modules/micromark-core-commonmark/lib/character-escape.js
var gr = {
	name: "characterEscape",
	tokenize: _r
};
function _r(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Vn(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
// node_modules/micromark-core-commonmark/lib/character-reference.js
var vr = {
	name: "characterReference",
	tokenize: yr
};
function yr(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = In, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Bn, u) : (e.enter("characterReferenceValue"), a = 7, o = zn, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === In && !En(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
// node_modules/micromark-core-commonmark/lib/partial-non-lazy-continuation.js
var br = {
	partial: !0,
	tokenize: xr
};
function xr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
// node_modules/micromark-core-commonmark/lib/code-fenced.js
var Sr = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Cr
};
function Cr(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || Z(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(br, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || Z(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Q(t) ? $(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || Z(t) ? e.check(br, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || Z(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Q(t) ? $(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || Z(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
// node_modules/micromark-core-commonmark/lib/code-indented.js
var wr = {
	name: "codeIndented",
	tokenize: Er
}, Tr = {
	partial: !0,
	tokenize: Dr
};
function Er(e, t, n) {
	return r;
	function r(t) {
		return e.enter("codeIndented"), qn(e, i, n, "linePrefix", 4, 4)(t);
	}
	function i(t) {
		return t === null ? o(t) : Z(t) ? e.attempt(Tr, i, o)(t) : (e.enter("codeFlowValue"), a(t));
	}
	function a(t) {
		return t === null || Z(t) ? (e.exit("codeFlowValue"), i(t)) : (e.consume(t), a);
	}
	function o(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Dr(e, t, n) {
	let r = this;
	return i;
	function i(o) {
		return r.parser.lazy[r.now().line] ? n(o) : Z(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : qn(e, t, a, "linePrefix", 4, 4)(o);
	}
	function a(e) {
		return Z(e) ? i(e) : n(e);
	}
}
// node_modules/micromark-core-commonmark/lib/code-text.js
var Or = {
	name: "codeText",
	previous: Ar,
	resolve: kr,
	tokenize: jr
};
function kr(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function Ar(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function jr(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || Z(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
// node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Mr = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && Nr(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Nr(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Nr(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) {
			if (e < this.left.length) {
				let t = this.left.splice(e, Infinity);
				Nr(this.right, t.reverse());
			} else {
				let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
				Nr(this.left, t.reverse());
			}
		}
	}
};
function Nr(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
// node_modules/micromark-util-subtokenize/index.js
function Pr(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Mr(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Fr(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (o[1].type !== "linePrefix" && o[1].type !== "listItemIndent") break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Dn(e, 0, Infinity, u.slice(0)), !l;
}
function Fr(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
// node_modules/micromark-core-commonmark/lib/content.js
var Ir = {
	resolve: Rr,
	tokenize: zr
}, Lr = {
	partial: !0,
	tokenize: Br
};
function Rr(e) {
	return Pr(e), e;
}
function zr(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : Z(t) ? e.check(Lr, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Br(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || Z(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
// node_modules/micromark-factory-destination/index.js
function Vr(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || Rn(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || Z(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || Hn(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || Rn(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
// node_modules/micromark-factory-label/index.js
function Hr(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || 
		/* c8 ignore next 3 */
		l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || Z(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
// node_modules/micromark-factory-title/index.js
function Ur(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || Z(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
// node_modules/micromark-factory-whitespace/index.js
function Wr(e, t) {
	let n;
	return r;
	function r(i) {
		return Z(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
// node_modules/micromark-core-commonmark/lib/definition.js
var Gr = {
	name: "definition",
	tokenize: qr
}, Kr = {
	partial: !0,
	tokenize: Jr
};
function qr(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Hr.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Pn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return Hn(t) ? Wr(e, l)(t) : l(t);
	}
	function l(t) {
		return Vr(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Kr, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || Z(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Jr(e, t, n) {
	return r;
	function r(t) {
		return Hn(t) ? Wr(e, i)(t) : n(t);
	}
	function i(t) {
		return Ur(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Q(t) ? $(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || Z(e) ? t(e) : n(e);
	}
}
// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Yr = {
	name: "hardBreakEscape",
	tokenize: Xr
};
function Xr(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return Z(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
// node_modules/micromark-core-commonmark/lib/heading-atx.js
var Zr = {
	name: "headingAtx",
	resolve: Qr,
	tokenize: $r
};
function Qr(e, t) {
	let n = e.length - 2, r = 3;
	if (e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r) {
		let i = {
			type: "atxHeadingText",
			start: e[r][1].start,
			end: e[n][1].end
		}, a = {
			type: "chunkText",
			start: e[r][1].start,
			end: e[n][1].end,
			contentType: "text"
		};
		Dn(e, r, n - r + 1, [
			[
				"enter",
				i,
				t
			],
			[
				"enter",
				a,
				t
			],
			[
				"exit",
				a,
				t
			],
			[
				"exit",
				i,
				t
			]
		]);
	}
	return e;
}
function $r(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || Hn(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || Z(n) ? (e.exit("atxHeading"), t(n)) : Q(n) ? $(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || Hn(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
// node_modules/micromark-util-html-tag-name/index.js
var ei = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), ti = [
	"pre",
	"script",
	"style",
	"textarea"
], ni = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: ii,
	tokenize: ai
}, ri = {
	partial: !0,
	tokenize: oi
};
function ii(e) {
	let t = e.length;
	for (; t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function ai(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : I) : Fn(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : Fn(a) ? (e.consume(a), i = 4, r.interrupt ? t : I) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : I) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return Fn(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || Hn(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && ti.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : ei.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || In(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || Fn(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || In(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Q(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || Z(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || Hn(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Q(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || Z(t) ? O(t) : Q(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), M) : t === 60 && i === 1 ? (e.consume(t), N) : t === 62 && i === 4 ? (e.consume(t), L) : t === 63 && i === 3 ? (e.consume(t), I) : t === 93 && i === 5 ? (e.consume(t), F) : Z(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ri, R, k)(t)) : t === null || Z(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(br, A, R)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j;
	}
	function j(t) {
		return t === null || Z(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function M(t) {
		return t === 45 ? (e.consume(t), I) : O(t);
	}
	function N(t) {
		return t === 47 ? (e.consume(t), o = "", P) : O(t);
	}
	function P(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return ti.includes(n) ? (e.consume(t), L) : O(t);
		}
		return Fn(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), P) : O(t);
	}
	function F(t) {
		return t === 93 ? (e.consume(t), I) : O(t);
	}
	function I(t) {
		return t === 62 ? (e.consume(t), L) : t === 45 && i === 2 ? (e.consume(t), I) : O(t);
	}
	function L(t) {
		return t === null || Z(t) ? (e.exit("htmlFlowData"), R(t)) : (e.consume(t), L);
	}
	function R(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function oi(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(ur, t, n);
	}
}
// node_modules/micromark-core-commonmark/lib/html-text.js
var si = {
	name: "htmlText",
	tokenize: ci
};
function ci(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : Fn(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : Fn(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : Z(t) ? (o = d, N(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : Z(t) ? (o = h, N(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? M(t) : Z(t) ? (o = v, N(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : Z(t) ? (o = y, N(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? M(e) : y(e);
	}
	function x(t) {
		return Fn(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || In(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return Z(t) ? (o = C, N(t)) : Q(t) ? (e.consume(t), C) : M(t);
	}
	function w(t) {
		return t === 45 || In(t) ? (e.consume(t), w) : t === 47 || t === 62 || Hn(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), M) : t === 58 || t === 95 || Fn(t) ? (e.consume(t), E) : Z(t) ? (o = T, N(t)) : Q(t) ? (e.consume(t), T) : M(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || In(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : Z(t) ? (o = D, N(t)) : Q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : Z(t) ? (o = O, N(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, j) : t === null ? n(t) : Z(t) ? (o = k, N(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Hn(t) ? T(t) : (e.consume(t), A);
	}
	function j(e) {
		return e === 47 || e === 62 || Hn(e) ? T(e) : n(e);
	}
	function M(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function N(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P;
	}
	function P(t) {
		return Q(t) ? $(e, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : F(t);
	}
	function F(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
// node_modules/micromark-core-commonmark/lib/label-end.js
var li = {
	name: "labelEnd",
	resolveAll: pi,
	resolveTo: mi,
	tokenize: hi
}, ui = { tokenize: gi }, di = { tokenize: _i }, fi = { tokenize: vi };
function pi(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Dn(e, 0, e.length, n), e;
}
function mi(e, t) {
	let n = e.length, r = 0, i, a, o;
	for (; n--;) {
		let t = e[n][1];
		if (i) {
			if (t.type === "link" || t.type === "labelLink" && t._inactive) break;
			e[n][0] === "enter" && t.type === "labelLink" && (t._inactive = !0);
		} else if (a) {
			if (e[n][0] === "enter" && (t.type === "labelImage" || t.type === "labelLink") && !t._balanced && (i = n, t.type !== "labelLink")) {
				r = 2;
				break;
			}
		} else t.type === "labelEnd" && (a = n);
	}
	let s = {
		type: e[i][1].type === "labelLink" ? "link" : "image",
		start: { ...e[i][1].start },
		end: { ...e[e.length - 1][1].end }
	}, c = {
		type: "label",
		start: { ...e[i][1].start },
		end: { ...e[a][1].end }
	}, l = {
		type: "labelText",
		start: { ...e[i + r + 2][1].end },
		end: { ...e[a - 2][1].start }
	};
	return o = [[
		"enter",
		s,
		t
	], [
		"enter",
		c,
		t
	]], o = On(o, e.slice(i + 1, i + r + 3)), o = On(o, [[
		"enter",
		l,
		t
	]]), o = On(o, rr(t.parser.constructs.insideSpan.null, e.slice(i + r + 4, a - 3), t)), o = On(o, [
		[
			"exit",
			l,
			t
		],
		e[a - 2],
		e[a - 1],
		[
			"exit",
			c,
			t
		]
	]), o = On(o, e.slice(a + 1)), o = On(o, [[
		"exit",
		s,
		t
	]]), Dn(e, i, e.length, o), e;
}
function hi(e, t, n) {
	let r = this, i = r._labelStarts, a, o;
	if (i) {
		for (; i.length > 0 && i[i.length - 1]._balanced;) i.pop();
		a = i[i.length - 1];
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Pn(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(ui, u, o ? u : d)(t) : t === 91 ? e.attempt(di, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(fi, u, d)(t);
	}
	function u(e) {
		return i.pop(), t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function gi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return Hn(t) ? Wr(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Vr(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return Hn(t) ? Wr(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Ur(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return Hn(t) ? Wr(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function _i(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Hr.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Pn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function vi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
// node_modules/micromark-core-commonmark/lib/label-start-image.js
var yi = {
	name: "labelStartImage",
	resolveAll: li.resolveAll,
	tokenize: bi
};
function bi(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), o;
	}
	function o(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), i = e.exit("labelImage"), s) : n(t);
	}
	function s(e) {
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : (r._labelStarts = r._labelStarts || [], r._labelStarts.push(i), t(e));
	}
}
// node_modules/micromark-core-commonmark/lib/label-start-link.js
var xi = {
	name: "labelStartLink",
	resolveAll: li.resolveAll,
	tokenize: Si
};
function Si(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), i = e.exit("labelLink"), o;
	}
	function o(e) {
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : (r._labelStarts = r._labelStarts || [], r._labelStarts.push(i), t(e));
	}
}
// node_modules/micromark-core-commonmark/lib/line-ending.js
var Ci = {
	name: "lineEnding",
	tokenize: wi
};
function wi(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
// node_modules/micromark-core-commonmark/lib/thematic-break.js
var Ti = {
	name: "thematicBreak",
	tokenize: Ei
};
function Ei(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || Z(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Q(t) ? $(e, s, "whitespace")(t) : s(t));
	}
}
// node_modules/micromark-core-commonmark/lib/list.js
var Di = {
	continuation: { tokenize: ji },
	exit: Ni,
	name: "list",
	tokenize: Ai
}, Oi = {
	partial: !0,
	tokenize: Pi
}, ki = {
	partial: !0,
	tokenize: Mi
};
function Ai(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : zn(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Ti, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return zn(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(ur, r.interrupt ? n : u, e.attempt(Oi, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function ji(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(ur, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(ki, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(Di, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Mi(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Ni(e) {
	e.exit(this.containerState.type);
}
function Pi(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
// node_modules/micromark-core-commonmark/lib/setext-underline.js
var Fi = {
	name: "setextUnderline",
	resolveTo: Ii,
	tokenize: Li
};
function Ii(e, t) {
	let n = new Xn(), r = e.length, i, a, o;
	for (; r--;) if (e[r][0] === "enter") {
		if (e[r][1].type === "content") {
			i = r;
			break;
		}
		e[r][1].type === "paragraph" && (a = r);
	} else e[r][1].type === "content" && n.add(r, 1, []), !o && e[r][1].type === "definition" && (o = r);
	let s = {
		type: "setextHeading",
		start: { ...e[i][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[a][1].type = "setextHeadingText", o ? (n.add(a, 0, [[
		"enter",
		s,
		t
	]]), n.add(o + 1, 0, [[
		"exit",
		e[i][1],
		t
	]]), e[i][1].end = { ...e[o][1].end }) : e[i][1] = s, n.add(e.length, 0, [[
		"exit",
		s,
		t
	]]), n.consume(e), e;
}
function Li(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Q(t) ? $(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || Z(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
// node_modules/micromark/lib/initialize/flow.js
var Ri = { tokenize: zi };
function zi(e) {
	let t = this, n = e.attempt(ur, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ir, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) e.consume(r);
		else return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) e.consume(r);
		else return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
// node_modules/micromark/lib/initialize/text.js
var Bi = { resolveAll: Wi() }, Vi = Ui("string"), Hi = Ui("text");
function Ui(e) {
	return {
		resolveAll: Wi(e === "text" ? Gi : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) t.consume(e);
			else return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Wi(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : t[r] && t[r][1].type === "data" || (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Gi(e, t) {
	let n = new Xn(), r = 0;
	for (; ++r <= e.length;) if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
		let i = e[r - 1][1], a = t.sliceStream(i), o = a.length, s = -1, c = 0, l;
		for (; o--;) {
			let e = a[o];
			if (typeof e == "string") {
				for (s = e.length; e.charCodeAt(s - 1) === 32;) c++, s--;
				if (s) break;
				s = -1;
			} else if (e === -2) l = !0, c++;
			else if (e !== -1) {
				o++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && r === e.length && (c = 0), c) {
			let a = {
				type: r === e.length || l || c < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: o ? s : i.start._bufferIndex + s,
					_index: i.start._index + o,
					line: i.end.line,
					column: i.end.column - c,
					offset: i.end.offset - c
				},
				end: { ...i.end }
			};
			i.end = { ...a.start }, i.start.offset === i.end.offset ? Object.assign(i, a) : n.add(r, 0, [[
				"enter",
				a,
				t
			], [
				"exit",
				a,
				t
			]]);
		}
		r++;
	}
	return n.consume(e), e;
}
// node_modules/micromark/lib/constructs.js
var Ki = /* @__PURE__ */ S({
	attentionMarkers: () => ea,
	contentInitial: () => Ji,
	disable: () => ta,
	document: () => qi,
	flow: () => Xi,
	flowInitial: () => Yi,
	insideSpan: () => $i,
	string: () => Zi,
	text: () => Qi
}), qi = {
	42: Di,
	43: Di,
	45: Di,
	48: Di,
	49: Di,
	50: Di,
	51: Di,
	52: Di,
	53: Di,
	54: Di,
	55: Di,
	56: Di,
	57: Di,
	62: fr
}, Ji = { 91: Gr }, Yi = {
	[-2]: wr,
	[-1]: wr,
	32: wr
}, Xi = {
	35: Zr,
	42: Ti,
	45: [Fi, Ti],
	60: ni,
	61: Fi,
	95: Ti,
	96: Sr,
	126: Sr
}, Zi = {
	38: vr,
	92: gr
}, Qi = {
	[-5]: Ci,
	[-4]: Ci,
	[-3]: Ci,
	33: yi,
	38: vr,
	42: ir,
	60: [cr, si],
	91: xi,
	92: [Yr, gr],
	93: li,
	95: ir,
	96: Or
}, $i = { null: [ir, Bi] }, ea = { null: [42, 95] }, ta = { null: [] };
// node_modules/micromark/lib/create-tokenizer.js
function na(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = On(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = rr(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return ia(p(e), t);
	}
	function p(e) {
		return ra(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		for (; r._index < o.length;) {
			let e = o[r._index];
			if (typeof e == "string") {
				let t = r._index;
				for (r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === t && r._bufferIndex < e.length;) _(e.charCodeAt(r._bufferIndex));
			} else _(e);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		Z(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Dn(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function ra(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function ia(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
// node_modules/micromark/lib/parse.js
function aa(e) {
	let t = {
		constructs: An([Ki, ...(e || {}).extensions || []]),
		content: n(Jn),
		defined: [],
		document: n(Qn),
		flow: n(Ri),
		lazy: {},
		string: n(Vi),
		text: n(Hi)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return na(t, e, n);
		}
	}
}
// node_modules/micromark/lib/postprocess.js
function oa(e) {
	for (; !Pr(e););
	return e;
}
// node_modules/micromark/lib/preprocess.js
var sa = /[\0\t\n\r]/g;
function ca() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i));
		let s = [], c = 0;
		for (t = "", n &&= (i.charCodeAt(0) === 65279 && c++, void 0); c < i.length;) {
			sa.lastIndex = c;
			let n = sa.exec(i), a = n && n.index !== void 0 ? n.index : i.length, o = i.charCodeAt(a);
			if (!n) {
				t = i.slice(c);
				break;
			}
			if (o === 10 && c === a && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), c < a && (s.push(i.slice(c, a)), e += a - c), o) {
				case 0:
					s.push(65533), e++;
					break;
				case 9: {
					let t = Math.ceil(e / 4) * 4;
					for (s.push(-2); e++ < t;) s.push(-1);
					break;
				}
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			c = a + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
// node_modules/micromark-util-decode-string/index.js
var la = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ua(e) {
	return e.replace(la, da);
}
function da(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return Nn(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return En(n) || e;
}
// node_modules/mdast-util-from-markdown/lib/index.js
var fa = {}.hasOwnProperty;
function pa(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), ma(n)(oa(aa(n).document().write(ca()(e, t, !0))));
}
function ma(e) {
	let t = {
		afterExit: [],
		beforeEnter: [],
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: o(le),
			autolinkProtocol: E,
			autolinkEmail: E,
			atxHeading: o(W),
			blockQuote: o(ie),
			characterEscape: E,
			characterReference: E,
			codeFenced: o(ae),
			codeFencedFenceInfo: s,
			codeFencedFenceMeta: s,
			codeIndented: o(ae, s),
			codeText: o(U, s),
			codeTextData: E,
			data: E,
			codeFlowValue: E,
			definition: o(oe),
			definitionDestinationString: s,
			definitionLabelString: s,
			definitionTitleString: s,
			emphasis: o(se),
			hardBreakEscape: o(G),
			hardBreakTrailing: o(G),
			htmlFlow: o(K, s),
			htmlFlowData: E,
			htmlText: o(K, s),
			htmlTextData: E,
			image: o(ce),
			label: s,
			link: o(le),
			listItem: o(de),
			listItemValue: p,
			listOrdered: o(ue, f),
			listUnordered: o(ue),
			paragraph: o(fe),
			reference: B,
			referenceString: s,
			resourceDestinationString: s,
			resourceTitleString: s,
			setextHeading: o(W),
			strong: o(pe),
			thematicBreak: o(he)
		},
		exit: {
			atxHeading: l(),
			atxHeadingSequence: S,
			autolink: l(),
			autolinkEmail: re,
			autolinkProtocol: ne,
			blockQuote: l(),
			characterEscapeValue: D,
			characterReferenceMarkerHexadecimal: V,
			characterReferenceMarkerNumeric: V,
			characterReferenceValue: te,
			characterReference: H,
			codeFenced: l(_),
			codeFencedFence: g,
			codeFencedFenceInfo: m,
			codeFencedFenceMeta: h,
			codeFlowValue: D,
			codeIndented: l(v),
			codeText: l(M),
			codeTextData: D,
			data: D,
			definition: l(),
			definitionDestinationString: x,
			definitionLabelString: y,
			definitionTitleString: b,
			emphasis: l(),
			hardBreakEscape: l(k),
			hardBreakTrailing: l(k),
			htmlFlow: l(A),
			htmlFlowData: D,
			htmlText: l(j),
			htmlTextData: D,
			image: l(P),
			label: I,
			labelText: F,
			lineEnding: O,
			link: l(N),
			listItem: l(),
			listOrdered: l(),
			listUnordered: l(),
			paragraph: l(),
			referenceString: ee,
			resourceDestinationString: L,
			resourceTitleString: R,
			resource: z,
			setextHeading: l(T),
			setextHeadingLineSequence: w,
			setextHeadingText: C,
			strong: l(),
			thematicBreak: l()
		}
	};
	ga(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: [],
			position: void 0
		}, o = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: c,
			exit: u,
			buffer: s,
			resume: d,
			data: n
		}, l = [], f = [], p = -1;
		for (; ++p < e.length;) f.push(e[p]), (e[p][1].type === "listOrdered" || e[p][1].type === "listUnordered") && (e[p][0] === "enter" ? l.push(f.length - 1) : a(f, l.pop()));
		for (e = f, p = -1; ++p < e.length;) {
			let n = t[e[p][0]];
			e[p][0] === "enter" && t.beforeEnter.length > 0 && i(t.beforeEnter, {
				...o,
				sliceSerialize: e[p][2].sliceSerialize
			}, e[p][1]), fa.call(n, e[p][1].type) && n[e[p][1].type].call({
				...o,
				sliceSerialize: e[p][2].sliceSerialize
			}, e[p][1]), e[p][0] === "exit" && t.afterExit.length > 0 && i(t.afterExit, {
				...o,
				sliceSerialize: e[p][2].sliceSerialize
			}, e[p][1]);
		}
		if (o.tokenStack.length > 0) {
			let e = o.tokenStack[o.tokenStack.length - 1];
			(e[1] || va).call(o, void 0, e[0]);
		}
		for (r.position = {
			start: ha(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: ha(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, p = -1; ++p < t.transforms.length;) r = t.transforms[p](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = -1;
		for (; ++r < e.length;) e[r].call(t, n);
	}
	function a(e, t) {
		let n = e.length - 1, r = t - 1, i = -1, a = !1, o, s, c, l, u = [];
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let n = r;
					for (s = void 0; n--;) {
						let t = e[n];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = n;
						} else if (t[1].type !== "linePrefix" && t[1].type !== "blockQuotePrefix" && t[1].type !== "blockQuotePrefixWhitespace" && t[1].type !== "blockQuoteMarker" && t[1].type !== "listItemIndent") break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), u.push({
						at: s || r,
						event: [
							"exit",
							o,
							t[2]
						]
					});
				}
				if (t[1].type === "listItemPrefix") {
					let e = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = e, u.push({
						at: r,
						event: [
							"enter",
							e,
							t[2]
						]
					}), c = void 0, l = !0;
				}
			}
		}
		let d = e.splice(t), f = 0;
		for (r = -1; ++r < d.length;) {
			for (; f < u.length && u[f].at === t + r;) e.push(u[f++].event);
			e.push(d[r]);
		}
		e[t][1]._spread = a;
	}
	function o(e, t) {
		return n;
		function n(n) {
			c.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function s() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function c(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: ha(t.start),
			end: void 0
		};
	}
	function l(e) {
		return t;
		function t(t) {
			e && e.call(this, t), u.call(this, t);
		}
	}
	function u(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (!r) throw Error("Cannot close `" + e.type + "` (" + Rt({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || va).call(this, e, r[0])), n.position.end = ha(e.end);
	}
	function d() {
		return xn(this.stack.pop());
	}
	function f() {
		this.data.expectingFirstListItemValue = !0;
	}
	function p(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function h() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function g() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function v() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function y(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Pn(this.sliceSerialize(e)).toLowerCase();
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function x() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function S(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function C() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function w(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function T() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function E(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		n && n.type === "text" || (n = me(), n.position = {
			start: ha(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function D(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = ha(e.end);
	}
	function O(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = ha(e.end), this.data.atHardBreak = void 0;
		} else !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (E.call(this, e), D.call(this, e));
	}
	function k() {
		this.data.atHardBreak = !0;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function M() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function N() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function P() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function F(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = ua(t), n.identifier = Pn(t).toLowerCase();
	}
	function I() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function L() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function R() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function z() {
		this.data.inReference = void 0;
	}
	function B() {
		this.data.referenceType = "collapsed";
	}
	function ee(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Pn(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function V(e) {
		this.data.characterReferenceType = e.type;
	}
	function te(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = Nn(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = En(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function H(e) {
		let t = this.stack.pop();
		t.position.end = ha(e.end);
	}
	function ne(e) {
		D.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function re(e) {
		D.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function ie() {
		return {
			type: "blockquote",
			children: [],
			position: void 0
		};
	}
	function ae() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: "",
			position: void 0
		};
	}
	function U() {
		return {
			type: "inlineCode",
			value: "",
			position: void 0
		};
	}
	function oe() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: "",
			position: void 0
		};
	}
	function se() {
		return {
			type: "emphasis",
			children: [],
			position: void 0
		};
	}
	function W() {
		return {
			type: "heading",
			depth: 0,
			children: [],
			position: void 0
		};
	}
	function G() {
		return {
			type: "break",
			position: void 0
		};
	}
	function K() {
		return {
			type: "html",
			value: "",
			position: void 0
		};
	}
	function ce() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null,
			position: void 0
		};
	}
	function le() {
		return {
			type: "link",
			title: null,
			url: "",
			children: [],
			position: void 0
		};
	}
	function ue(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: [],
			position: void 0
		};
	}
	function de(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: [],
			position: void 0
		};
	}
	function fe() {
		return {
			type: "paragraph",
			children: [],
			position: void 0
		};
	}
	function pe() {
		return {
			type: "strong",
			children: [],
			position: void 0
		};
	}
	function me() {
		return {
			type: "text",
			value: "",
			position: void 0
		};
	}
	function he() {
		return {
			type: "thematicBreak",
			position: void 0
		};
	}
}
function ha(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function ga(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? ga(e, r) : _a(e, r);
	}
}
function _a(e, t) {
	let n;
	for (n in t) if (fa.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "afterExit":
		case "beforeEnter": {
			let r = t[n];
			r && e[n].push(r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function va(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + Rt({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Rt({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + Rt({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
// node_modules/remark-parse/lib/index.js
function ya(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return pa(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
// node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function ba(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/break.js
function xa(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
// node_modules/mdast-util-to-hast/lib/handlers/code.js
function Sa(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
// node_modules/mdast-util-to-hast/lib/handlers/delete.js
function Ca(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function wa(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function Ta(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Kn(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
// node_modules/mdast-util-to-hast/lib/handlers/heading.js
function Ea(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/html.js
function Da(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
// node_modules/mdast-util-to-hast/lib/revert.js
function Oa(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
// node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function ka(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Oa(e, t);
	let i = {
		src: Kn(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
// node_modules/mdast-util-to-hast/lib/handlers/image.js
function Aa(e, t) {
	let n = { src: Kn(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
// node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function ja(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
// node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function Ma(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Oa(e, t);
	let i = { href: Kn(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
// node_modules/mdast-util-to-hast/lib/handlers/link.js
function Na(e, t) {
	let n = { href: Kn(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
// node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function Pa(e, t, n) {
	let r = e.all(t), i = n ? Fa(n) : Ia(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function Fa(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Ia(n[r]);
	}
	return t;
}
function Ia(e) {
	return e.spread ?? e.children.length > 1;
}
// node_modules/mdast-util-to-hast/lib/handlers/list.js
function La(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
// node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function Ra(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/root.js
function za(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Ba(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/table.js
function Va(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = Ft(t.children[1]), o = Pt(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
// node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function Ha(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
// node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function Ua(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/trim-lines/index.js
var Wa = 9, Ga = 32;
function Ka(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(qa(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(qa(t.slice(i), i > 0, !1)), a.join("");
}
function qa(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Wa || t === Ga;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Wa || t === Ga;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
// node_modules/mdast-util-to-hast/lib/handlers/text.js
function Ja(e, t) {
	let n = {
		type: "text",
		value: Ka(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Ya(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
// node_modules/mdast-util-to-hast/lib/handlers/index.js
var Xa = {
	blockquote: ba,
	break: xa,
	code: Sa,
	delete: Ca,
	emphasis: wa,
	footnoteReference: Ta,
	heading: Ea,
	html: Da,
	imageReference: ka,
	image: Aa,
	inlineCode: ja,
	linkReference: Ma,
	link: Na,
	listItem: Pa,
	list: La,
	paragraph: Ra,
	root: za,
	strong: Ba,
	table: Va,
	tableCell: Ua,
	tableRow: Ha,
	text: Ja,
	thematicBreak: Ya,
	toml: Za,
	yaml: Za,
	definition: Za,
	footnoteDefinition: Za
};
function Za() {}
// node_modules/@ungap/structured-clone/esm/deserialize.js
var { defineProperty: Qa } = Object, $a = typeof self == "object" ? self : globalThis, eo = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new $a[e](t);
}, to = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) {
					let i = r(t), a = r(n);
					i === "__proto__" ? Qa(e, i, {
						value: a,
						configurable: !0,
						enumerable: !0,
						writable: !0
					}) : e[i] = a;
				}
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(typeof $a[e] == "function" ? eo(e, t) : Error(t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
			case "-0": return -0;
		}
		return n(eo(a, o), i);
	};
	return r;
}, no = (e) => to(/* @__PURE__ */ new Map(), e)(0), ro = "", { toString: io } = {}, { keys: ao, is: oo } = Object, so = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = io.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, ro];
		case "Object": return [2, ro];
		case "Date": return [3, ro];
		case "RegExp": return [4, ro];
		case "Map": return [5, ro];
		case "Set": return [6, ro];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : e instanceof Error ? [7, e.name || "Error"] : [2, n];
}, co = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), lo = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (o) => {
		if (n.has(o)) return n.get(o);
		let [s, c] = so(o);
		switch (s) {
			case 0: {
				let t = o;
				switch (c) {
					case "bigint":
						s = 8, t = o.toString();
						break;
					case "number":
						if (!o && oo(o, -0)) return r.push(["-0"]) - 1;
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + c);
						t = null;
						break;
					case "undefined": return i([-1], o);
				}
				return i([s, t], o);
			}
			case 1: {
				if (c) {
					let e = o;
					return c === "DataView" ? e = new Uint8Array(o.buffer) : c === "ArrayBuffer" && (e = new Uint8Array(o)), i([c, [...e]], o);
				}
				let e = [], t = i([s, e], o);
				for (let t of o) e.push(a(t));
				return t;
			}
			case 2: {
				if (c) switch (c) {
					case "BigInt": return i([c, o.toString()], o);
					case "Boolean":
					case "Number":
					case "String": return i([c, o.valueOf()], o);
				}
				if (t && "toJSON" in o) return a(o.toJSON());
				let n = [], r = i([s, n], o);
				for (let t of ao(o)) (e || !co(so(o[t]))) && n.push([a(t), a(o[t])]);
				return r;
			}
			case 3: return i([s, isNaN(o.getTime()) ? ro : o.toISOString()], o);
			case 4: {
				let { source: e, flags: t } = o;
				return i([s, {
					source: e,
					flags: t
				}], o);
			}
			case 5: {
				let t = [], n = i([s, t], o);
				for (let [n, r] of o) (e || !(co(so(n)) || co(so(r)))) && t.push([a(n), a(r)]);
				return n;
			}
			case 6: {
				let t = [], n = i([s, t], o);
				for (let n of o) (e || !co(so(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: l } = o;
		return i([s, {
			name: c,
			message: l
		}], o);
	};
	return a;
}, uo = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return lo(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, fo = typeof structuredClone == "function" ? 
/* c8 ignore start */
(e, t) => t && ("json" in t || "lossy" in t) ? no(uo(e, t)) : structuredClone(e) : (e, t) => no(uo(e, t));
// node_modules/mdast-util-to-hast/lib/footer.js
function po(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function mo(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function ho(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || po, r = e.options.footnoteBackLabel || mo, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Kn(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...fo(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
// node_modules/unist-util-is/lib/index.js
var go = (function(e) {
	if (e == null) return xo;
	if (typeof e == "function") return bo(e);
	if (typeof e == "object") return Array.isArray(e) ? _o(e) : vo(e);
	if (typeof e == "string") return yo(e);
	throw Error("Expected function, string, or object as test");
});
function _o(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = go(e[n]);
	return bo(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function vo(e) {
	let t = e;
	return bo(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function yo(e) {
	return bo(t);
	function t(t) {
		return t && t.type === e;
	}
}
function bo(e) {
	return t;
	function t(t, n, r) {
		return !!(So(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function xo() {
	return !0;
}
function So(e) {
	return typeof e == "object" && !!e && "type" in e;
}
// node_modules/unist-util-visit-parents/lib/color.js
function Co(e) {
	return e;
}
// node_modules/unist-util-visit-parents/lib/index.js
var wo = [];
function To(e, t, n, r) {
	if (!e || typeof e != "object") throw Error("Unexpected value `" + e + "` for `tree`, expected node");
	let i = !0, a, o, s, c;
	if (typeof n == "function" || n && typeof n == "object" ? (a = t, o = n, r && (i = !1)) : (o = t, n && (i = !1)), typeof o == "function") s = o;
	else if (o && typeof o == "object") {
		if (o.enter !== null && o.enter !== void 0) {
			if (typeof o.enter == "function") s = o.enter;
			else throw Error("Unexpected value `" + o.enter + "` for `visitors.enter`, expected optional visitor");
		}
		if (typeof o.exit == "function") c = o.exit;
		else throw Error("Unexpected value `" + o.exit + "` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)");
	} else throw Error("Unexpected value `" + o + "` for `enter` or `visitors`, expected visitor or object with visitors");
	let l = go(a), u = i ? 1 : -1;
	d(e, void 0, [])();
	function d(e, t, n) {
		let r = e && typeof e == "object" ? e : {};
		if (typeof r.type == "string") {
			let t = typeof r.tagName == "string" ? r.tagName : typeof r.name == "string" ? r.name : void 0;
			Object.defineProperty(o, "name", { value: "node (" + Co(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return o;
		function o() {
			let r = !a || l(e, t, n[n.length - 1] || void 0), o = wo;
			if (s && r && (o = Eo(s(e, n, t)), o[0] === !1)) return o;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && o[0] !== "skip") {
					let e = (i ? -1 : t.children.length) + u, r = [...n, t];
					for (; e > -1 && e < t.children.length;) {
						let n = t.children[e], i = d(n, e, r)();
						if (i[0] === !1) return i;
						e = typeof i[1] == "number" ? i[1] : e + u;
					}
				}
			}
			if (c && r) {
				let r = Eo(c(e, n, t));
				if (r[0] === "skip") throw Error("Unexpected value `" + r[0] + "` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");
				if (r[0] === !1 || typeof r[1] == "number") return r;
			}
			return o;
		}
	}
}
function Eo(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? wo : [e];
}
// node_modules/unist-util-visit/lib/index.js
function Do(e, t, n, r) {
	let i, a, o;
	typeof n == "function" || n && typeof n == "object" ? (i = t, a = n, o = r) : (a = t, o = n), typeof a == "function" ? To(e, i, ko(a), o) : To(e, i, Oo(a), o);
}
function Oo(e) {
	return !e || typeof e != "object" ? e : {
		enter: typeof e.enter == "function" ? ko(e.enter) : e.enter,
		exit: typeof e.exit == "function" ? ko(e.exit) : e.exit
	};
}
function ko(e) {
	return t;
	function t(t, n, r) {
		return e(t, r, n[n.length - 1]);
	}
}
// node_modules/mdast-util-to-hast/lib/state.js
var Ao = {}.hasOwnProperty, jo = {};
function Mo(e, t) {
	let n = t || jo, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: Po,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Xa,
			...n.handlers
		},
		one: o,
		options: n,
		patch: No,
		wrap: Io
	};
	return Do(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Ao.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = fo(n);
				return r.children = a.all(e), r;
			}
			return fo(e);
		}
		return (a.options.unknownHandler || Fo)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Lo(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Lo(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function No(e, t) {
	e.position && (t.position = Lt(e));
}
function Po(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, fo(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Fo(e, t) {
	let n = t.data || {}, r = "value" in t && !(Ao.call(n, "hProperties") || Ao.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function Io(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function Lo(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
// node_modules/mdast-util-to-hast/lib/index.js
function Ro(e, t) {
	let n = Mo(e, t), r = n.one(e, void 0), i = ho(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
// node_modules/remark-rehype/lib/index.js
function zo(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Ro(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Ro(n, {
			file: r,
			...e || t
		});
	};
}
// node_modules/bail/index.js
function Bo(e) {
	if (e) throw e;
}
// node_modules/extend/index.js
var Vo = /* @__PURE__ */ x(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
}));
// node_modules/is-plain-obj/index.js
function Ho(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
// node_modules/trough/lib/index.js
function Uo() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) r(a);
			else {
				for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
				t = o, s ? Wo(s, i)(...o) : r(null, ...o);
			}
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Wo(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
// node_modules/vfile/lib/minpath.browser.js
var Go = {
	basename: Ko,
	dirname: qo,
	extname: Jo,
	join: Yo,
	sep: "/"
};
function Ko(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	Qo(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function qo(e) {
	if (Qo(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Jo(e) {
	Qo(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
		} else n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Yo(...e) {
	let t = -1, n;
	for (; ++t < e.length;) Qo(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Xo(n);
}
function Xo(e) {
	Qo(e);
	let t = e.codePointAt(0) === 47, n = Zo(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Zo(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (i !== o - 1 && a !== 1) {
				if (i !== o - 1 && a === 2) {
					if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (c = n.lastIndexOf("/"), c !== n.length - 1) {
								c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
								continue;
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = o, a = 0;
							continue;
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
				} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			}
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function Qo(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
// node_modules/vfile/lib/minproc.browser.js
var $o = { cwd: es };
function es() {
	return "/";
}
// node_modules/vfile/lib/minurl.shared.js
function ts(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
// node_modules/vfile/lib/minurl.browser.js
function ns(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!ts(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return rs(e);
}
function rs(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
// node_modules/vfile/lib/index.js
var is = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], as = class {
	constructor(e) {
		let t;
		t = e ? ts(e) ? { path: e } : typeof e == "string" || ls(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : $o.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < is.length;) {
			let e = is[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) is.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? Go.basename(this.path) : void 0;
	}
	set basename(e) {
		ss(e, "basename"), os(e, "basename"), this.path = Go.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? Go.dirname(this.path) : void 0;
	}
	set dirname(e) {
		cs(this.basename, "dirname"), this.path = Go.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? Go.extname(this.path) : void 0;
	}
	set extname(e) {
		if (os(e, "extname"), cs(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = Go.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		ts(e) && (e = ns(e)), ss(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? Go.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		ss(e, "stem"), os(e, "stem"), this.path = Go.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new Ht(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function os(e, t) {
	if (e && e.includes(Go.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + Go.sep + "`");
}
function ss(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function cs(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function ls(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
// node_modules/unified/lib/callable-instance.js
var us = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), ds = /* @__PURE__ */ w(Vo(), 1), fs = {}.hasOwnProperty, ps = new class e extends us {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Uo();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, ds.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (gs("data", this.frozen), this.namespace[e] = t, this) : fs.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (gs("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = ys(e), n = this.parser || this.Parser;
		return ms("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), ms("process", this.parser || this.Parser), hs("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = ys(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				xs(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), ms("processSync", this.parser || this.Parser), hs("processSync", this.compiler || this.Compiler), this.process(e, r), vs("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Bo(e), n = r;
		}
	}
	run(e, t, n) {
		_s(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = ys(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), vs("runSync", "run", n), r;
		function i(e, t) {
			Bo(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = ys(t), r = this.compiler || this.Compiler;
		return hs("stringify", r), _s(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (gs("use", this.frozen), e != null) {
			if (typeof e == "function") s(e, t);
			else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") {
				if (Array.isArray(e)) {
					let [t, ...n] = e;
					s(t, n);
				} else a(e);
			} else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, ds.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) {
				if (Array.isArray(e)) for (; ++t < e.length;) {
					let n = e[t];
					i(n);
				}
				else throw TypeError("Expected a list of plugins, not `" + e + "`");
			}
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				Ho(o) && Ho(r) && (r = (0, ds.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function ms(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function hs(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function gs(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function _s(e) {
	if (!Ho(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function vs(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function ys(e) {
	return bs(e) ? e : new as(e);
}
function bs(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function xs(e) {
	return typeof e == "string" || Ss(e);
}
function Ss(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
// node_modules/react-markdown/lib/index.js
var Cs = [], ws = { allowDangerousHtml: !0 }, Ts = /^(https?|ircs?|mailto|xmpp)$/i, Es = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Ds(e) {
	let t = Os(e), n = ks(e);
	return As(t.runSync(t.parse(n), n), e);
}
function Os(e) {
	let t = e.rehypePlugins || Cs, n = e.remarkPlugins || Cs, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...ws
	} : ws;
	return ps().use(ya).use(n).use(zo, r).use(t);
}
function ks(e) {
	let t = e.children || "", n = new as();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function As(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || js;
	for (let e of Es) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Do(e, l), Xt(e, {
		Fragment: B.Fragment,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: B.jsx,
		jsxs: B.jsxs,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in yn) if (Object.hasOwn(yn, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = yn[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function js(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Ts.test(e.slice(0, t)) ? e : "";
}
var Ms = { Markdown: "_onyx-ui_Markdown_4qDhu" }, Ns = {
	h1({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(U, {
			as: "h1",
			fontSize: "32px",
			fontWeight: "300",
			children: n
		});
	},
	h2({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(U, {
			as: "h2",
			fontSize: "24px",
			fontWeight: "600",
			children: n
		});
	},
	h3({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(U, {
			as: "h2",
			fontSize: "18px",
			fontWeight: "500",
			children: n
		});
	},
	p({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(U, {
			as: "p",
			children: n
		});
	},
	ul({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(V, {
			as: "ul",
			children: n
		});
	},
	li({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(U, {
			as: "li",
			children: n
		});
	},
	code({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, B.jsx)(U, {
			border: !0,
			as: "code",
			fillColor: "panel",
			cornerRadius: "2px",
			padding: "16px",
			children: n
		});
	}
};
function Ps() {
	let e = (0, O.c)(3), [t, n] = u(), r;
	e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
		(async () => {
			let e = await fetch("https://webdav.mike-austin.com/Learning Kopi.md");
			n(await e.text());
		})();
	}, e[0] = r) : r = e[0], o(r);
	let i;
	return e[1] === t ? i = e[2] : (i = /* @__PURE__ */ (0, B.jsx)(V, {
		flex: !0,
		padding: "16px",
		className: Ms.Markdown,
		children: /* @__PURE__ */ (0, B.jsx)(Ds, {
			components: Ns,
			children: t
		})
	}), e[1] = t, e[2] = i), i;
}
// src/components/page/Page.tsx
function Fs(e) {
	let t = (0, O.c)(12), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({title: a, actions: n, children: r, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o;
	t[5] !== n || t[6] !== a ? (o = a && /* @__PURE__ */ (0, B.jsxs)(V, {
		horizontal: !0,
		align: "top justify",
		children: [/* @__PURE__ */ (0, B.jsx)(V, {
			spacing: "8px",
			children: /* @__PURE__ */ (0, B.jsx)(U, {
				as: "h1",
				fontSize: "24px",
				fontWeight: "400",
				children: a
			})
		}), /* @__PURE__ */ (0, B.jsx)(V, {
			horizontal: !0,
			spacing: "8px",
			style: {
				marginTop: 8,
				marginBottom: -8
			},
			children: n?.map(Is)
		})]
	}), t[5] = n, t[6] = a, t[7] = o) : o = t[7];
	let s;
	return t[8] !== r || t[9] !== i || t[10] !== o ? (s = /* @__PURE__ */ (0, B.jsxs)(V, {
		negativeBorder: !0,
		border: "bottom",
		padding: "8px 16px",
		spacing: "16px",
		fillColor: "panel",
		zIndex: 3,
		...i,
		children: [o, r]
	}), t[8] = r, t[9] = i, t[10] = o, t[11] = s) : s = t[11], s;
}
function Is(e, n) {
	return t.cloneElement(e, { key: n });
}
function Ls(e) {
	let t = (0, O.c)(10), n, r, i;
	t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({children: n, style: i, ...r} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i);
	let a;
	t[4] === i ? a = t[5] : (a = {
		overflowY: "auto",
		minWidth: 0,
		minHeight: 0,
		...i
	}, t[4] = i, t[5] = a);
	let o;
	return t[6] !== n || t[7] !== r || t[8] !== a ? (o = /* @__PURE__ */ (0, B.jsx)(V, {
		flex: !0,
		style: a,
		...r,
		children: n
	}), t[6] = n, t[7] = r, t[8] = a, t[9] = o) : o = t[9], o;
}
function Rs(e) {
	let t = (0, O.c)(10), n, r, i;
	t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({style: i, children: n, ...r} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i);
	let a;
	t[4] === i ? a = t[5] : (a = {
		minWidth: 0,
		minHeight: 0,
		...i
	}, t[4] = i, t[5] = a);
	let o;
	return t[6] !== n || t[7] !== r || t[8] !== a ? (o = /* @__PURE__ */ (0, B.jsx)(V, {
		style: a,
		...r,
		children: n
	}), t[6] = n, t[7] = r, t[8] = a, t[9] = o) : o = t[9], o;
}
Rs.Header = Fs, Rs.Content = Ls;
var zs = {
	Overlay: "_onyx-ui_Overlay_PTfHp",
	fadeIn: "_onyx-ui_fadeIn_TvzOT",
	close: "_onyx-ui_close_YLkg1",
	fadeOut: "_onyx-ui_fadeOut_dOzhE",
	Modal: "_onyx-ui_Modal_utwyc",
	slideIn: "_onyx-ui_slideIn_y-668",
	slideOut: "_onyx-ui_slideOut_HBdxw"
};
// src/components/modal/Modal.tsx
function Bs({ title: e, children: n, actions: r, onRequestClose: i, ...a }) {
	let o = l(null), s = l(null), c = () => {
		o.current && s.current && (o.current.classList.add(zs.close), s.current.classList.add(zs.close));
	}, u = (e) => {
		e.animationName === zs.slideOut && i?.();
	}, f = typeof e == "string" ? /* @__PURE__ */ (0, B.jsx)(U, {
		fontSize: "24px",
		children: e
	}) : e, p = document.querySelector("#overlay"), h = /* @__PURE__ */ (0, B.jsxs)(V, {
		absolute: !0,
		align: "top center",
		style: { inset: 0 },
		children: [/* @__PURE__ */ (0, B.jsx)(V, {
			absolute: !0,
			ref: o,
			className: zs.Overlay
		}), /* @__PURE__ */ (0, B.jsxs)(V, {
			ref: s,
			fillColor: "gutter",
			className: zs.Modal,
			onAnimationEnd: u,
			style: { minHeight: 0 },
			...a,
			children: [
				/* @__PURE__ */ (0, B.jsxs)(V, {
					horizontal: !0,
					align: "middle justify",
					border: "bottom",
					padding: "12px 16px",
					spacing: "16px",
					fillColor: "content",
					children: [f, /* @__PURE__ */ (0, B.jsx)(de, {
						solid: !0,
						bleed: !0,
						icon: m,
						cornerRadius: "max",
						onClick: c
					})]
				}),
				/* @__PURE__ */ (0, B.jsx)(V, {
					style: { minHeight: 0 },
					children: n
				}),
				r && /* @__PURE__ */ (0, B.jsx)(V, {
					horizontal: !0,
					padding: "12px 16px",
					align: "middle center",
					fillColor: "panel",
					border: "top",
					children: r?.map((e, n) => t.cloneElement(e, {
						key: n,
						onClick: () => (e.props.onClick(), c())
					}))
				})
			]
		})]
	});
	if (p) return d(h, p);
}
export { Le as Avatar, de as Button, Oe as Checkbox, Ve as Chip, _e as Divider, Pe as Form, G as Icon, me as Input, Fe as Label, ye as List, Ps as Markdown, Te as Menu, Bs as Modal, Rs as Page, xe as Popover, Ae as Select, Ue as Tabs, U as Text, ge as Toggle, V as View };
