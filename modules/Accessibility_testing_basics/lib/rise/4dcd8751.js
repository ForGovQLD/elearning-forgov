"use strict";(self.wpRiseJsonp=self.wpRiseJsonp||[]).push([["math"],{80306:function(n,A,t){t.r(A);var i=t(51864),e=t.n(i),o=t(60352),a=t.n(o)()(e());a.push([n.id,".noSelect{-webkit-user-select:none !important;-ms-user-select:none !important;user-select:none !important}.noOutline{outline:none}.cursorAuto{cursor:auto}.visually-hidden:not(:focus):not(:active){position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;padding:0 !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;clip:rect(0, 0, 0, 0) !important;clip-path:inset(50%) !important}.visually-hidden-always{position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;padding:0 !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;clip:rect(0, 0, 0, 0) !important;clip-path:inset(50%) !important}.abs-center-x{position:absolute;left:50%;transform:translateX(-50%)}.hint-content{opacity:0}.hint-btn--active+.hint-content,.hint-btn:hover+.hint-content,.hint-btn:focus+.hint-content{opacity:1;pointer-events:unset}:host{display:inline-flex;vertical-align:middle}:host .anchor>svg{flex:0 1 auto;height:auto;max-width:100%;overflow:visible;shape-rendering:geometricPrecision;transform:translateZ(0)}:host .aria{position:absolute !important;width:1px !important;height:1px !important;margin:0 !important;padding:0 !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;clip:rect(0, 0, 0, 0) !important;clip-path:inset(50%) !important}","",{version:3,sources:["webpack://./shared/styles/utils.scss","webpack://./shared/elements/math.shadow.scss"],names:[],mappings:"AAAA,UACE,mCAAA,CAAA,+BAAA,CAAA,2BAAA,CAGF,WACE,YAAA,CAGF,YACE,WAAA,CAgBF,0CAZE,4BAAA,CACA,oBAAA,CACA,qBAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,6BAAA,CACA,gCAAA,CACA,+BAAA,CAOF,wBAhBE,4BAAA,CACA,oBAAA,CACA,qBAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,6BAAA,CACA,gCAAA,CACA,+BAAA,CAWF,cACE,iBAAA,CACA,QAAA,CACA,0BAAA,CAGF,cACE,SAAA,CAOE,4FACE,SAAA,CACA,oBAAA,CC/CN,MACE,mBAAA,CACA,qBAAA,CAEA,kBACE,aAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CACA,kCAAA,CAGA,uBAAA,CAGF,YDJA,4BAAA,CACA,oBAAA,CACA,qBAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,6BAAA,CACA,gCAAA,CACA,+BAAA",sourcesContent:['.noSelect {\n  user-select: none !important;\n}\n\n.noOutline {\n  outline: none;\n}\n\n.cursorAuto {\n  cursor: auto;\n}\n\n@mixin visually-hidden {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border: none !important;\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%) !important;\n}\n\n.visually-hidden:not(:focus):not(:active) {\n  @include visually-hidden();\n}\n\n.visually-hidden-always {\n  @include visually-hidden();\n}\n\n.abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.hint-content {\n  opacity: 0;\n}\n\n.hint-btn {\n  &--active,\n  &:hover,\n  &:focus {\n    & + .hint-content {\n      opacity: 1;\n      pointer-events: unset;\n    }\n  }\n}\n\n;@import "sass-embedded-legacy-load-done:90";',"@use 'shared/styles/utils' as utils;\n\n:host {\n  display: inline-flex;\n  vertical-align: middle;\n\n  .anchor > svg {\n    flex: 0 1 auto;\n    height: auto;\n    max-width: 100%;\n    overflow: visible;\n    shape-rendering: geometricPrecision;\n\n    // Improve jagged edges on lodpi screens\n    transform: translateZ(0);\n  }\n\n  .aria {\n    @include utils.visually-hidden();\n  }\n}\n"],sourceRoot:""}]),A.default=a.toString()}}]);