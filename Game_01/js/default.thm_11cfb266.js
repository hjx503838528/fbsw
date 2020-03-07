
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/CardSkin.exml'] = window.CardSkin = (function (_super) {
	__extends(CardSkin, _super);
	function CardSkin() {
		_super.call(this);
		this.skinParts = ["_cardImg","_moveClipGroup"];
		
		this.height = 142;
		this.width = 142;
		this.elementsContent = [this._cardImg_i(),this._moveClipGroup_i()];
	}
	var _proto = CardSkin.prototype;

	_proto._cardImg_i = function () {
		var t = new eui.Image();
		this._cardImg = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.source = "3_png";
		t.verticalCenter = 0;
		t.width = 142;
		return t;
	};
	_proto._moveClipGroup_i = function () {
		var t = new eui.Group();
		this._moveClipGroup = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 142;
		return t;
	};
	return CardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameCardScene.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = ["_mask","_list_1_1","_scroller_1_1","_list_1_2","_scroller_1_2","_list_2_1","_scroller_2_1","_list_2_2","_scroller_2_2","_list_3_1","_scroller_3_1","_list_3_2","_scroller_3_2","_list_4_1","_scroller_4_1","_list_4_2","_scroller_4_2","_list_5_1","_scroller_5_1","_list_5_2","_scroller_5_2","_Group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = $exmlClass1.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.source = "bg_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 750;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 545;
		t.left = 369;
		t.source = "man-r_png";
		t.top = -10;
		t.visible = false;
		t.width = 596;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 566;
		t.left = -205;
		t.source = "man-l_png";
		t.top = -10;
		t.visible = false;
		t.width = 670;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 449;
		t.horizontalCenter = 0;
		t.source = "ordi_png";
		t.touchEnabled = false;
		t.verticalCenter = -51.5;
		t.width = 770;
		return t;
	};
	_proto._Group_i = function () {
		var t = new eui.Group();
		this._Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.touchEnabled = false;
		t.width = 709.1;
		t.x = 17.88;
		t.y = 399.36;
		t.elementsContent = [this._mask_i(),this._scroller_1_1_i(),this._scroller_1_2_i(),this._scroller_2_1_i(),this._scroller_2_2_i(),this._scroller_3_1_i(),this._scroller_3_2_i(),this._scroller_4_1_i(),this._scroller_4_2_i(),this._scroller_5_1_i(),this._scroller_5_2_i()];
		return t;
	};
	_proto._mask_i = function () {
		var t = new eui.Rect();
		this._mask = t;
		t.fillAlpha = 1;
		t.height = 416;
		t.horizontalCenter = -1.0500000000000114;
		t.verticalCenter = -34;
		t.width = 709;
		return t;
	};
	_proto._scroller_1_1_i = function () {
		var t = new eui.Scroller();
		this._scroller_1_1 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 1.12;
		t.y = 9;
		t.viewport = this._list_1_1_i();
		return t;
	};
	_proto._list_1_1_i = function () {
		var t = new eui.List();
		this._list_1_1 = t;
		t.itemRendererSkinName = CardSkin;
		return t;
	};
	_proto._scroller_1_2_i = function () {
		var t = new eui.Scroller();
		this._scroller_1_2 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 1.12;
		t.y = 448;
		t.viewport = this._list_1_2_i();
		return t;
	};
	_proto._list_1_2_i = function () {
		var t = new eui.List();
		this._list_1_2 = t;
		t.itemRendererSkinName = CardSkin;
		t.touchEnabled = false;
		return t;
	};
	_proto._scroller_2_1_i = function () {
		var t = new eui.Scroller();
		this._scroller_2_1 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 143.62;
		t.y = 9;
		t.viewport = this._list_2_1_i();
		return t;
	};
	_proto._list_2_1_i = function () {
		var t = new eui.List();
		this._list_2_1 = t;
		t.itemRendererSkinName = CardSkin;
		t.y = 23;
		return t;
	};
	_proto._scroller_2_2_i = function () {
		var t = new eui.Scroller();
		this._scroller_2_2 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 143.62;
		t.y = 448;
		t.viewport = this._list_2_2_i();
		return t;
	};
	_proto._list_2_2_i = function () {
		var t = new eui.List();
		this._list_2_2 = t;
		t.itemRendererSkinName = CardSkin;
		t.touchEnabled = false;
		return t;
	};
	_proto._scroller_3_1_i = function () {
		var t = new eui.Scroller();
		this._scroller_3_1 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 286.12;
		t.y = 9;
		t.viewport = this._list_3_1_i();
		return t;
	};
	_proto._list_3_1_i = function () {
		var t = new eui.List();
		this._list_3_1 = t;
		t.itemRendererSkinName = CardSkin;
		return t;
	};
	_proto._scroller_3_2_i = function () {
		var t = new eui.Scroller();
		this._scroller_3_2 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 286.12;
		t.y = 448;
		t.viewport = this._list_3_2_i();
		return t;
	};
	_proto._list_3_2_i = function () {
		var t = new eui.List();
		this._list_3_2 = t;
		t.itemRendererSkinName = CardSkin;
		t.touchEnabled = false;
		return t;
	};
	_proto._scroller_4_1_i = function () {
		var t = new eui.Scroller();
		this._scroller_4_1 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 428.62;
		t.y = 9;
		t.viewport = this._list_4_1_i();
		return t;
	};
	_proto._list_4_1_i = function () {
		var t = new eui.List();
		this._list_4_1 = t;
		t.itemRendererSkinName = CardSkin;
		return t;
	};
	_proto._scroller_4_2_i = function () {
		var t = new eui.Scroller();
		this._scroller_4_2 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 428.62;
		t.y = 448;
		t.viewport = this._list_4_2_i();
		return t;
	};
	_proto._list_4_2_i = function () {
		var t = new eui.List();
		this._list_4_2 = t;
		t.itemRendererSkinName = CardSkin;
		t.touchEnabled = false;
		return t;
	};
	_proto._scroller_5_1_i = function () {
		var t = new eui.Scroller();
		this._scroller_5_1 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 570.62;
		t.y = 9;
		t.viewport = this._list_5_1_i();
		return t;
	};
	_proto._list_5_1_i = function () {
		var t = new eui.List();
		this._list_5_1 = t;
		t.itemRendererSkinName = CardSkin;
		return t;
	};
	_proto._scroller_5_2_i = function () {
		var t = new eui.Scroller();
		this._scroller_5_2 = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.height = 439.03;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 142;
		t.x = 570.62;
		t.y = 448;
		t.viewport = this._list_5_2_i();
		return t;
	};
	_proto._list_5_2_i = function () {
		var t = new eui.List();
		this._list_5_2 = t;
		t.itemRendererSkinName = CardSkin;
		t.touchEnabled = false;
		return t;
	};
	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameExplainScene.exml'] = window.$exmlClass2 = (function (_super) {
	__extends($exmlClass2, _super);
	function $exmlClass2() {
		_super.call(this);
		this.skinParts = ["click_btn","broadcast","start_img"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = $exmlClass2.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.click_btn_i(),this.broadcast_i(),this.start_img_i()];
		return t;
	};
	_proto.click_btn_i = function () {
		var t = new eui.Image();
		this.click_btn = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.source = "poster-bj_png";
		t.verticalCenter = 0;
		t.width = 750;
		return t;
	};
	_proto.broadcast_i = function () {
		var t = new eui.Image();
		this.broadcast = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445;
		t.horizontalCenter = 0.5;
		t.source = "poster1_png";
		t.touchEnabled = false;
		t.width = 567;
		t.y = 229.31;
		return t;
	};
	_proto.start_img_i = function () {
		var t = new eui.Image();
		this.start_img = t;
		t.anchorOffsetX = -4.32;
		t.anchorOffsetY = -20.89;
		t.height = 234;
		t.horizontalCenter = 0;
		t.source = "start_png";
		t.touchEnabled = false;
		t.width = 382;
		t.y = 907.45;
		return t;
	};
	return $exmlClass2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.$exmlClass3 = (function (_super) {
	__extends($exmlClass3, _super);
	function $exmlClass3() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = $exmlClass3.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 200;
		t.y = 41;
		return t;
	};
	return $exmlClass3;
})(eui.Skin);generateEUI.paths['resource/skins/demo.exml'] = window.demo = (function (_super) {
	__extends(demo, _super);
	function demo() {
		_super.call(this);
		this.skinParts = ["xx"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.xx_i(),this._Label1_i()];
	}
	var _proto = demo.prototype;

	_proto.xx_i = function () {
		var t = new eui.Image();
		this.xx = t;
		t.source = "SS_json.ddd";
		t.x = 6;
		t.y = 101;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "测试使用";
		t.width = 376;
		t.x = 24;
		t.y = 150;
		return t;
	};
	return demo;
})(eui.Skin);generateEUI.paths['resource/skins/xxx.exml'] = window.xxx = (function (_super) {
	__extends(xxx, _super);
	function xxx() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = xxx.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "SS_json.ddd";
		t.x = 32;
		t.y = 79;
		return t;
	};
	return xxx;
})(eui.Skin);generateEUI.paths['resource/eui_skins/wangYiLin/TipsSkin.exml'] = window.TipsSkin = (function (_super) {
	__extends(TipsSkin, _super);
	function TipsSkin() {
		_super.call(this);
		this.skinParts = ["bg_Img","ok_Btn","close_Btn","title_Lab","value_Lab"];
		
		this.height = 240;
		this.width = 463;
		this.elementsContent = [this.bg_Img_i(),this.ok_Btn_i(),this.close_Btn_i(),this.title_Lab_i(),this.value_Lab_i()];
	}
	var _proto = TipsSkin.prototype;

	_proto.bg_Img_i = function () {
		var t = new eui.Image();
		this.bg_Img = t;
		t.height = 240;
		t.horizontalCenter = 0;
		t.source = "KUANG_png";
		t.verticalCenter = 0;
		t.width = 463;
		return t;
	};
	_proto.ok_Btn_i = function () {
		var t = new eui.Image();
		this.ok_Btn = t;
		t.left = 46;
		t.source = "OKBTN_png";
		t.y = 160;
		return t;
	};
	_proto.close_Btn_i = function () {
		var t = new eui.Image();
		this.close_Btn = t;
		t.right = 46;
		t.source = "NOBTN_png";
		t.y = 160;
		return t;
	};
	_proto.title_Lab_i = function () {
		var t = new eui.Label();
		this.title_Lab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.text = "标题";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.value_Lab_i = function () {
		var t = new eui.Label();
		this.value_Lab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 157;
		t.horizontalCenter = 0;
		t.left = 0;
		t.multiline = true;
		t.size = 30;
		t.text = "提示内容ddjlddlfjld";
		t.textAlign = "center";
		t.textColor = 0xdd0b2a;
		t.verticalAlign = "middle";
		t.width = 463;
		t.y = 0;
		return t;
	};
	return TipsSkin;
})(eui.Skin);