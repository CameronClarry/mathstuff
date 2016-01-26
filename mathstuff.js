// ==UserScript==
// @name        mathstuff
// @namespace   http://localhost
// @description Makes cool characters
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include     http://play.pokemonshowdown.com/*
// @version     1.0
// @grant       none
// ==/UserScript==

var chars = {};
chars["Alpha"] = "\u0391";
chars["Beta"] = "\u0392";
chars["Gamma"] = "\u0393";
chars["Delta"] = "\u0394";
chars["Epsilon"] = "\u0395";
chars["Zeta"] = "\u0396";
chars["Eta"] = "\u0397";
chars["Theta"] = "\u0398";
chars["Iota"] = "\u0399";
chars["Kappa"] = "\u039A";
chars["Lambda"] = "\u039B";
chars["Mu"] = "\u039C";
chars["Nu"] = "\u039D";
chars["Xi"] = "\u039E";
chars["Omicron"] = "\u039F";
chars["Pi"] = "\u03A0";
chars["Rho"] = "\u03A1";
chars["Sigma"] = "\u03A3";
chars["Tau"] = "\u03A4";
chars["Upsilon"] = "\u03A5";
chars["Phi"] = "\u03A6";
chars["Chi"] = "\u03A7";
chars["Psi"] = "\u03A8";
chars["Omega"] = "\u03A9";

chars["alpha"] = "\u03B1";
chars["beta"] = "\u03B2";
chars["gamma"] = "\u03B3";
chars["delta"] = "\u03B4";
chars["epsilon"] = "\u03B5";
chars["zeta"] = "\u03B6";
chars["eta"] = "\u03B7";
chars["theta"] = "\u03B8";
chars["iota"] = "\u03B9";
chars["kappa"] = "\u03BA";
chars["lambda"] = "\u03BB";
chars["mu"] = "\u03BC";
chars["nu"] = "\u03BD";
chars["xi"] = "\u03BE";
chars["omicron"] = "\u03BF";
chars["pi"] = "\u03C0";
chars["rho"] = "\u03C1";
chars["sigma"] = "\u03C2";
chars["tau"] = "\u03C4";
chars["upsilon"] = "\u03C5";
chars["phi"] = "\u03C6";
chars["chi"] = "\u03C7";
chars["psi"] = "\u03C8";
chars["omega"] = "\u03C9";

chars["forall"] = "\u2200";
chars["2201"] = "\u2201";
chars["partial"] = "\u2202";
chars["exists"] = "\u2203";
chars["notexists"] = "\u2204";
chars["emptyset"] = "\u2205";
chars["mdelta"] = "\u2206";
chars["grad"] = "\u2207";
chars["in"] = "\u2208";
chars["notin"] = "\u2209";
chars["in2"] = "\u220A";
chars["bin"] = "\u220B";
chars["bnotin"] = "\u220C";
chars["bin2"] = "\u220D";
chars["tomb"] = "\u220E";
chars["prod"] = "\u220F";

chars["coprod"] = "\u2210";
chars["sum"] = "\u2211";
chars["min"] = "\u2212";
chars["minplus"] = "\u2213";
chars["what"] = "\u2214";
chars["frac"] = "\u2215";
chars["comp"] = "\u2216";
chars["star"] = "\u2217";
chars["circle"] = "\u2218";
chars["dot"] = "\u2219";
chars["sqrt"] = "\u221A";
chars["3rt"] = "\u221B";
chars["4rt"] = "\u221C";
chars["prop"] = "\u221D";
chars["inf"] = "\u221E";
chars["right"] = "\u221F";

chars["ang"] = "\u2220";
chars["ang2"] = "\u2221";
chars["ang3"] = "\u2222";
chars["div"] = "\u2223";
chars["notdiv"] = "\u2224";
chars["par"] = "\u2225";
chars["notpar"] = "\u2226";
chars["and"] = "\u2227";
chars["or"] = "\u2228";
chars["intersect"] = "\u2229";
chars["union"] = "\u222A";
chars["int"] = "\u222B";
chars["int2"] = "\u222C";
chars["int3"] = "\u222D";
chars["lineint"] = "\u222E";
chars["lineint2"] = "\u222F";

chars["_0"] = "\u2080";
chars["_1"] = "\u2081";
chars["_2"] = "\u2082";
chars["_3"] = "\u2083";
chars["_4"] = "\u2084";
chars["_5"] = "\u2085";
chars["_6"] = "\u2086";
chars["_7"] = "\u2087";
chars["_8"] = "\u2088";
chars["_9"] = "\u2089";

chars["^0"] = "\u2070";
chars["^1"] = "\u00B9";
chars["^2"] = "\u00B2";
chars["^3"] = "\u00B3";
chars["^4"] = "\u2074";
chars["^5"] = "\u2075";
chars["^6"] = "\u2076";
chars["^7"] = "\u2077";
chars["^8"] = "\u2078";
chars["^9"] = "\u2079";



function lookupChar(key){
  result = chars[key];
  if(result!=null){
    return result;
  }
  return "";
}

$(document).ready(function(){
  textarea = $("textarea");
  textarea.context.onkeyup = function(e){
    if(e.which==32){
      text = textarea.context.activeElement.value;
      result = text.match(/\\[^\s]*\s$/);
      if(result!=null){
        this.activeElement.value = text.replace(/\\[^\s]*\s$/, lookupChar(result[0].substring(1,result[0].length-1)));
      }
    }
  }
});

//Random12
