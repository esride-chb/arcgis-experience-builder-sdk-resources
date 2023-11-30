"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[39761,19476,23417],{19476:(e,t,n)=>{function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return i()}},n.exports),n.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}n.d(t,{n:()=>r,o:()=>a,r:()=>i})},27533:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>_,clip:()=>c,contains:()=>d,convexHull:()=>v,crosses:()=>s,cut:()=>u,densify:()=>k,difference:()=>E,disjoint:()=>g,distance:()=>f,equals:()=>l,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>q,flipVertical:()=>D,generalize:()=>j,geodesicArea:()=>L,geodesicBuffer:()=>Z,geodesicDensify:()=>C,geodesicLength:()=>N,intersect:()=>R,intersects:()=>p,isSimple:()=>m,nearestCoordinate:()=>b,nearestVertex:()=>I,nearestVertices:()=>S,offset:()=>P,overlaps:()=>A,planarArea:()=>H,planarLength:()=>J,relate:()=>x,rotate:()=>O,simplify:()=>w,symmetricDifference:()=>M,touches:()=>h,union:()=>V,within:()=>y});var r=n(7972),a=n(23417);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.a.extendedSpatialReferenceInfo(e)}function c(e,t){return r.a.clip(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.a.cut(a.hydratedAdapter,i(e),e,t)}function d(e,t){return r.a.contains(a.hydratedAdapter,i(e),e,t)}function s(e,t){return r.a.crosses(a.hydratedAdapter,i(e),e,t)}function f(e,t,n){return r.a.distance(a.hydratedAdapter,i(e),e,t,n)}function l(e,t){return r.a.equals(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.a.intersects(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.a.touches(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.a.within(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.a.disjoint(a.hydratedAdapter,i(e),e,t)}function A(e,t){return r.a.overlaps(a.hydratedAdapter,i(e),e,t)}function x(e,t,n){return r.a.relate(a.hydratedAdapter,i(e),e,t,n)}function m(e){return r.a.isSimple(a.hydratedAdapter,i(e),e)}function w(e){return r.a.simplify(a.hydratedAdapter,i(e),e)}function v(e,t=!1){return r.a.convexHull(a.hydratedAdapter,i(e),e,t)}function E(e,t){return r.a.difference(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.a.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function R(e,t){return r.a.intersect(a.hydratedAdapter,i(e),e,t)}function V(e,t=null){return r.a.union(a.hydratedAdapter,i(e),e,t)}function P(e,t,n,o,c,u){return r.a.offset(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function _(e,t,n,o=!1){return r.a.buffer(a.hydratedAdapter,i(e),e,t,n,o)}function Z(e,t,n,o,c,u){return r.a.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function b(e,t,n=!0){return r.a.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function I(e,t){return r.a.nearestVertex(a.hydratedAdapter,i(e),e,t)}function S(e,t,n,o){return r.a.nearestVertices(a.hydratedAdapter,i(e),e,t,n,o)}function z(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function O(e,t,n){var a;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(n=null!=(a=n)?a:z(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(r.a.rotate(e,t,n));return o.spatialReference=i,o}function q(e,t){var n;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(t=null!=(n=t)?n:z(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.a.flipHorizontal(e,t));return i.spatialReference=a,i}function D(e,t){var n;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(t=null!=(n=t)?n:z(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.a.flipVertical(e,t));return i.spatialReference=a,i}function j(e,t,n,o){return r.a.generalize(a.hydratedAdapter,i(e),e,t,n,o)}function k(e,t,n){return r.a.densify(a.hydratedAdapter,i(e),e,t,n)}function C(e,t,n,o=0){return r.a.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,o)}function H(e,t){return r.a.planarArea(a.hydratedAdapter,i(e),e,t)}function J(e,t){return r.a.planarLength(a.hydratedAdapter,i(e),e,t)}function L(e,t,n){return r.a.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function N(e,t,n){return r.a.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}n(47817),n(58574),n(68700)},23417:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>a});var r=n(47817);n(58574),n(68700);const a={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.q({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return a&&(o.z=e.getPointZ(t)),i&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const a=new r.x({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return a.cache._geVersion=t,a},exportPolyline:function(e,t,n){const a=new r.v({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return a.cache._geVersion=t,a},exportMultipoint:function(e,t,n){const a=new r.B({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return a.cache._geVersion=t,a},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.M({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}}}]);