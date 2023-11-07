const j = (n) => ({
  toDataURL: async () => new Promise((s) => {
    const e = new FileReader();
    e.onload = (u) => s(u.target.result), e.readAsDataURL(n);
  }),
  toObjectURL: () => URL.createObjectURL(n),
  toImage: async () => {
    const s = j(n).toObjectURL();
    return K(s).toImage();
  }
}), ce = (n) => ({
  toBlob: async () => K(n.src).toBlob(),
  toDataURL: async () => {
    console.log(n);
    const s = await ce(n).toBlob();
    return console.log(s), j(s).toDataURL();
  },
  toObjectURL: async () => {
    const s = await ce(n).toBlob();
    return j(s).toObjectURL();
  }
}), Ee = (n) => ({
  toBlob: () => {
    const s = n.split(","), e = s[0].match(/:(.*?);/)[1], u = atob(s[1]);
    let c = u.length;
    const v = new Uint8Array(c);
    for (; c--; )
      v[c] = u.charCodeAt(c);
    return new Blob([v], { type: e });
  },
  toObjectURL: () => {
    const s = Ee(n).toBlob();
    return j(s).toObjectURL();
  }
}), K = (n) => ({
  toBlob: async () => new Promise((s) => {
    const e = new XMLHttpRequest();
    e.open("GET", n, !0), e.responseType = "blob", e.onload = () => s(e.response), e.send();
  }),
  toDataURL: async () => {
    const s = await K(n).toBlob();
    return j(s).toDataURL();
  },
  toImage: async () => new Promise((s, e) => {
    const u = new Image();
    u.error = e, u.onload = () => s(u), u.src = n;
  })
}), zt = {
  blob: j,
  image: ce,
  dataURL: Ee,
  objectURL: K
};
function wn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function In(n) {
  var s = 2.5949095;
  return (n *= 2) < 1 ? 0.5 * (n * n * ((s + 1) * n - s)) : 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
}
var On = In;
function dn(n) {
  var s = 1.70158;
  return n * n * ((s + 1) * n - s);
}
var An = dn;
function Mn(n) {
  var s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
}
var yn = Mn;
function xn(n) {
  var s = 0.36363636363636365, e = 8 / 11, u = 9 / 10, c = 4356 / 361, v = 35442 / 1805, y = 16061 / 1805, d = n * n;
  return n < s ? 7.5625 * d : n < e ? 9.075 * d - 9.9 * n + 3.4 : n < u ? c * d - v * n + y : 10.8 * n * n - 20.52 * n + 10.72;
}
var le = xn, xe = le;
function Rn(n) {
  return n < 0.5 ? 0.5 * (1 - xe(1 - n * 2)) : 0.5 * xe(n * 2 - 1) + 0.5;
}
var mn = Rn, _n = le;
function En(n) {
  return 1 - _n(1 - n);
}
var Fn = En;
function Pn(n) {
  return (n *= 2) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
}
var qn = Pn;
function Cn(n) {
  return 1 - Math.sqrt(1 - n * n);
}
var Sn = Cn;
function Dn(n) {
  return Math.sqrt(1 - --n * n);
}
var kn = Dn;
function Un(n) {
  return n < 0.5 ? 4 * n * n * n : 0.5 * Math.pow(2 * n - 2, 3) + 1;
}
var jn = Un;
function Tn(n) {
  return n * n * n;
}
var Nn = Tn;
function Ln(n) {
  var s = n - 1;
  return s * s * s + 1;
}
var Yn = Ln;
function Bn(n) {
  return n < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * n) * Math.pow(2, 10 * (2 * n - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * n - 1 + 1)) * Math.pow(2, -10 * (2 * n - 1)) + 1;
}
var Gn = Bn;
function Xn(n) {
  return Math.sin(13 * n * Math.PI / 2) * Math.pow(2, 10 * (n - 1));
}
var Wn = Xn;
function Vn(n) {
  return Math.sin(-13 * (n + 1) * Math.PI / 2) * Math.pow(2, -10 * n) + 1;
}
var zn = Vn;
function Hn(n) {
  return n === 0 || n === 1 ? n : n < 0.5 ? 0.5 * Math.pow(2, 20 * n - 10) : -0.5 * Math.pow(2, 10 - n * 20) + 1;
}
var Jn = Hn;
function Zn(n) {
  return n === 0 ? n : Math.pow(2, 10 * (n - 1));
}
var Kn = Zn;
function Qn(n) {
  return n === 1 ? n : 1 - Math.pow(2, -10 * n);
}
var et = Qn;
function nt(n) {
  return n;
}
var tt = nt;
function rt(n) {
  return n /= 0.5, n < 1 ? 0.5 * n * n : (n--, -0.5 * (n * (n - 2) - 1));
}
var at = rt;
function st(n) {
  return n * n;
}
var it = st;
function ot(n) {
  return -n * (n - 2);
}
var ut = ot;
function ct(n) {
  return n < 0.5 ? 8 * Math.pow(n, 4) : -8 * Math.pow(n - 1, 4) + 1;
}
var lt = ct;
function ft(n) {
  return Math.pow(n, 4);
}
var pt = ft;
function ht(n) {
  return Math.pow(n - 1, 3) * (1 - n) + 1;
}
var gt = ht;
function vt(n) {
  return (n *= 2) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2);
}
var $t = vt;
function bt(n) {
  return n * n * n * n * n;
}
var wt = bt;
function It(n) {
  return --n * n * n * n * n + 1;
}
var Ot = It;
function dt(n) {
  return -0.5 * (Math.cos(Math.PI * n) - 1);
}
var At = dt;
function Mt(n) {
  var s = Math.cos(n * Math.PI * 0.5);
  return Math.abs(s) < 1e-14 ? 1 : 1 - s;
}
var yt = Mt;
function xt(n) {
  return Math.sin(n * Math.PI / 2);
}
var Rt = xt, mt = {
  backInOut: On,
  backIn: An,
  backOut: yn,
  bounceInOut: mn,
  bounceIn: Fn,
  bounceOut: le,
  circInOut: qn,
  circIn: Sn,
  circOut: kn,
  cubicInOut: jn,
  cubicIn: Nn,
  cubicOut: Yn,
  elasticInOut: Gn,
  elasticIn: Wn,
  elasticOut: zn,
  expoInOut: Jn,
  expoIn: Kn,
  expoOut: et,
  linear: tt,
  quadInOut: at,
  quadIn: it,
  quadOut: ut,
  quartInOut: lt,
  quartIn: pt,
  quartOut: gt,
  quintInOut: $t,
  quintIn: wt,
  quintOut: Ot,
  sineInOut: At,
  sineIn: yt,
  sineOut: Rt
};
const _t = /* @__PURE__ */ wn(mt);
function Et(n) {
  return {
    a: parseFloat(n.a),
    b: parseFloat(n.b),
    c: parseFloat(n.c),
    d: parseFloat(n.d),
    e: parseFloat(n.e),
    f: parseFloat(n.f)
  };
}
const Ft = /^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i;
function Pt(n) {
  const s = n.match(Ft);
  if (s === null || s.length < 7)
    throw new Error(`'${n}' is not a matrix`);
  return {
    a: parseFloat(s[1]),
    b: parseFloat(s[2]),
    c: parseFloat(s[3]),
    d: parseFloat(s[4]),
    e: parseFloat(s[5]),
    f: parseFloat(s[6])
  };
}
function L(n) {
  return typeof n > "u";
}
function S(n, s = 0) {
  return {
    a: 1,
    c: 0,
    e: n,
    b: 0,
    d: 1,
    f: s
  };
}
function Q(...n) {
  n = Array.isArray(n[0]) ? n[0] : n;
  const s = (e, u) => ({
    a: e.a * u.a + e.c * u.b,
    c: e.a * u.c + e.c * u.d,
    e: e.a * u.e + e.c * u.f + e.e,
    b: e.b * u.a + e.d * u.b,
    d: e.b * u.c + e.d * u.d,
    f: e.b * u.e + e.d * u.f + e.f
  });
  switch (n.length) {
    case 0:
      throw new Error("no matrices provided");
    case 1:
      return n[0];
    case 2:
      return s(n[0], n[1]);
    default: {
      const [e, u, ...c] = n, v = s(e, u);
      return Q(v, ...c);
    }
  }
}
function Z(...n) {
  return Q(...n);
}
const { cos: qt, sin: Ct, PI: St } = Math;
function Fe(n, s, e) {
  const u = qt(n), c = Ct(n), v = {
    a: u,
    c: -c,
    e: 0,
    b: c,
    d: u,
    f: 0
  };
  return L(s) || L(e) ? v : Q([
    S(s, e),
    v,
    S(-s, -e)
  ]);
}
function Re(n, s = void 0, e = void 0) {
  return Fe(n * St / 180, s, e);
}
function U(n, s = void 0, e = void 0, u = void 0) {
  L(s) && (s = n);
  const c = {
    a: n,
    c: 0,
    e: 0,
    b: 0,
    d: s,
    f: 0
  };
  return L(e) || L(u) ? c : Q([
    S(e, u),
    c,
    S(-e, -u)
  ]);
}
function Dt(n, s) {
  return {
    a: 1,
    c: n,
    e: 0,
    b: s,
    d: 1,
    f: 0
  };
}
const { tan: me } = Math;
function kt(n, s) {
  return {
    a: 1,
    c: me(n),
    e: 0,
    b: me(s),
    d: 1,
    f: 0
  };
}
function _e(n, s) {
  return kt(n * Math.PI / 180, s * Math.PI / 180);
}
function Ut(n) {
  return `matrix(${n.a},${n.b},${n.c},${n.d},${n.e},${n.f})`;
}
function jt(n) {
  return Array.isArray(n) ? n.map(s) : s(n);
  function s(e) {
    switch (e.type) {
      case "matrix":
        if ("a" in e && "b" in e && "c" in e && "d" in e && "e" in e && "f" in e)
          return Et(e);
        throw new Error("MISSING_MANDATORY_PARAM");
      case "translate":
        if (!("tx" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return "ty" in e ? S(e.tx, e.ty) : S(e.tx);
      case "scale":
        if (!("sx" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return "sy" in e ? U(e.sx, e.sy) : U(e.sx);
      case "rotate":
        if (!("angle" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return "cx" in e && "cy" in e ? Re(e.angle, e.cx, e.cy) : Re(e.angle);
      case "skewX":
        if (!("angle" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return _e(e.angle, 0);
      case "skewY":
        if (!("angle" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return _e(0, e.angle);
      case "shear":
        if (!("shx" in e && "shy" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return Dt(e.shx, e.shy);
      default:
        throw new Error("UNSUPPORTED_DESCRIPTOR");
    }
  }
}
function Tt(n, s) {
  function e() {
    this.constructor = n;
  }
  e.prototype = s.prototype, n.prototype = new e();
}
function T(n, s, e, u) {
  var c = Error.call(this, n);
  return Object.setPrototypeOf && Object.setPrototypeOf(c, T.prototype), c.expected = s, c.found = e, c.location = u, c.name = "SyntaxError", c;
}
Tt(T, Error);
function ue(n, s, e) {
  return e = e || " ", n.length > s ? n : (s -= n.length, e += e.repeat(s), n + e.slice(0, s));
}
T.prototype.format = function(n) {
  var s = "Error: " + this.message;
  if (this.location) {
    var e = null, u;
    for (u = 0; u < n.length; u++)
      if (n[u].source === this.location.source) {
        e = n[u].text.split(/\r\n|\n|\r/g);
        break;
      }
    var c = this.location.start, v = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(c) : c, y = this.location.source + ":" + v.line + ":" + v.column;
    if (e) {
      var d = this.location.end, I = ue("", v.line.toString().length, " "), g = e[c.line - 1], p = c.line === d.line ? d.column : g.length + 1, A = p - c.column || 1;
      s += `
 --> ` + y + `
` + I + ` |
` + v.line + " | " + g + `
` + I + " | " + ue("", c.column - 1, " ") + ue("", A, "^");
    } else
      s += `
 at ` + y;
  }
  return s;
};
T.buildMessage = function(n, s) {
  var e = {
    literal: function(g) {
      return '"' + c(g.text) + '"';
    },
    class: function(g) {
      var p = g.parts.map(function(A) {
        return Array.isArray(A) ? v(A[0]) + "-" + v(A[1]) : v(A);
      });
      return "[" + (g.inverted ? "^" : "") + p.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(g) {
      return g.description;
    }
  };
  function u(g) {
    return g.charCodeAt(0).toString(16).toUpperCase();
  }
  function c(g) {
    return g.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(p) {
      return "\\x0" + u(p);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(p) {
      return "\\x" + u(p);
    });
  }
  function v(g) {
    return g.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(p) {
      return "\\x0" + u(p);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(p) {
      return "\\x" + u(p);
    });
  }
  function y(g) {
    return e[g.type](g);
  }
  function d(g) {
    var p = g.map(y), A, P;
    if (p.sort(), p.length > 0) {
      for (A = 1, P = 1; A < p.length; A++)
        p[A - 1] !== p[A] && (p[P] = p[A], P++);
      p.length = P;
    }
    switch (p.length) {
      case 1:
        return p[0];
      case 2:
        return p[0] + " or " + p[1];
      default:
        return p.slice(0, -1).join(", ") + ", or " + p[p.length - 1];
    }
  }
  function I(g) {
    return g ? '"' + c(g) + '"' : "end of input";
  }
  return "Expected " + d(n) + " but " + I(s) + " found.";
};
function Nt(n, s) {
  s = s !== void 0 ? s : {};
  var e = {}, u = s.grammarSource, c = { transformList: ge }, v = ge, y = "matrix", d = "(", I = ")", g = "translate", p = "scale", A = "rotate", P = "skewX", Y = "skewY", B = ",", G = ".", X = /^[eE]/, ee = /^[+\-]/, W = /^[0-9]/, R = /^[ \t\r\n]/, N = E("matrix", !1), q = E("(", !1), m = E(")", !1), C = E("translate", !1), V = E("scale", !1), ne = E("rotate", !1), qe = E("skewX", !1), Ce = E("skewY", !1), Se = E(",", !1), De = sn("fractionalConstant"), fe = E(".", !1), ke = J(["e", "E"], !1, !1), Ue = J(["+", "-"], !1, !1), je = J([["0", "9"]], !1, !1), Te = J([" ", "	", "\r", `
`], !1, !1), Ne = function(t) {
    return t;
  }, Le = function(t, r) {
    return t.concat(r);
  }, Ye = function(t, r, i, o, h, l) {
    return [{ type: "matrix", a: t, b: r, c: i, d: o, e: h, f: l }];
  }, Be = function(t, r) {
    var i = { type: "translate", tx: t };
    return r && (i.ty = r), [i];
  }, Ge = function(t, r) {
    var i = { type: "scale", sx: t };
    return r && (i.sy = r), [i];
  }, Xe = function(t, r) {
    var i = { type: "rotate", angle: t };
    return r && (i.cx = r[0], i.cy = r[1]), [i];
  }, We = function(t) {
    return [{ type: "skewX", angle: t }];
  }, Ve = function(t) {
    return [{ type: "skewY", angle: t }];
  }, ze = function(t) {
    return parseFloat(t.join(""));
  }, He = function(t) {
    return parseInt(t.join(""));
  }, Je = function(t) {
    return t;
  }, Ze = function(t, r) {
    return [t, r];
  }, Ke = function(t) {
    return t.join("");
  }, Qe = function(t, r) {
    return [t, r || null].join("");
  }, en = function(t, r) {
    return [t, r].join("");
  }, nn = function(t, r) {
    return [t ? t.join("") : null, ".", r.join("")].join("");
  }, tn = function(t) {
    return t.join("");
  }, rn = function(t, r) {
    return ["e", t, r.join("")].join("");
  }, a = 0, z = [{ line: 1, column: 1 }], _ = 0, te = [], $ = 0, H;
  if ("startRule" in s) {
    if (!(s.startRule in c))
      throw new Error(`Can't start parsing from rule "` + s.startRule + '".');
    v = c[s.startRule];
  }
  function E(t, r) {
    return { type: "literal", text: t, ignoreCase: r };
  }
  function J(t, r, i) {
    return { type: "class", parts: t, inverted: r, ignoreCase: i };
  }
  function an() {
    return { type: "end" };
  }
  function sn(t) {
    return { type: "other", description: t };
  }
  function pe(t) {
    var r = z[t], i;
    if (r)
      return r;
    for (i = t - 1; !z[i]; )
      i--;
    for (r = z[i], r = {
      line: r.line,
      column: r.column
    }; i < t; )
      n.charCodeAt(i) === 10 ? (r.line++, r.column = 1) : r.column++, i++;
    return z[t] = r, r;
  }
  function he(t, r, i) {
    var o = pe(t), h = pe(r), l = {
      source: u,
      start: {
        offset: t,
        line: o.line,
        column: o.column
      },
      end: {
        offset: r,
        line: h.line,
        column: h.column
      }
    };
    return i && u && typeof u.offset == "function" && (l.start = u.offset(l.start), l.end = u.offset(l.end)), l;
  }
  function w(t) {
    a < _ || (a > _ && (_ = a, te = []), te.push(t));
  }
  function on(t, r, i) {
    return new T(
      T.buildMessage(t, r),
      t,
      r,
      i
    );
  }
  function ge() {
    var t, r, i, o, h;
    for (t = a, r = [], i = f(); i !== e; )
      r.push(i), i = f();
    for (i = ve(), i === e && (i = null), o = [], h = f(); h !== e; )
      o.push(h), h = f();
    return t = Ne(i), t;
  }
  function ve() {
    var t, r, i, o;
    if (t = a, r = $e(), r !== e) {
      if (i = [], o = F(), o !== e)
        for (; o !== e; )
          i.push(o), o = F();
      else
        i = e;
      i !== e ? (o = ve(), o !== e ? t = Le(r, o) : (a = t, t = e)) : (a = t, t = e);
    } else
      a = t, t = e;
    return t === e && (t = $e()), t;
  }
  function $e() {
    var t;
    return t = un(), t === e && (t = cn(), t === e && (t = ln(), t === e && (t = fn(), t === e && (t = pn(), t === e && (t = hn()))))), t;
  }
  function un() {
    var t, r, i, o, h, l, M, b, O, ae, de, se, Ae, ie, Me, oe, ye, D;
    if (t = a, n.substr(a, 6) === y ? (r = y, a += 6) : (r = e, $ === 0 && w(N)), r !== e) {
      for (i = [], o = f(); o !== e; )
        i.push(o), o = f();
      if (n.charCodeAt(a) === 40 ? (o = d, a++) : (o = e, $ === 0 && w(q)), o !== e) {
        for (h = [], l = f(); l !== e; )
          h.push(l), l = f();
        if (l = x(), l !== e)
          if (M = F(), M !== e)
            if (b = x(), b !== e)
              if (O = F(), O !== e)
                if (ae = x(), ae !== e)
                  if (de = F(), de !== e)
                    if (se = x(), se !== e)
                      if (Ae = F(), Ae !== e)
                        if (ie = x(), ie !== e)
                          if (Me = F(), Me !== e)
                            if (oe = x(), oe !== e) {
                              for (ye = [], D = f(); D !== e; )
                                ye.push(D), D = f();
                              n.charCodeAt(a) === 41 ? (D = I, a++) : (D = e, $ === 0 && w(m)), D !== e ? t = Ye(l, b, ae, se, ie, oe) : (a = t, t = e);
                            } else
                              a = t, t = e;
                          else
                            a = t, t = e;
                        else
                          a = t, t = e;
                      else
                        a = t, t = e;
                    else
                      a = t, t = e;
                  else
                    a = t, t = e;
                else
                  a = t, t = e;
              else
                a = t, t = e;
            else
              a = t, t = e;
          else
            a = t, t = e;
        else
          a = t, t = e;
      } else
        a = t, t = e;
    } else
      a = t, t = e;
    return t;
  }
  function cn() {
    var t, r, i, o, h, l, M, b, O;
    if (t = a, n.substr(a, 9) === g ? (r = g, a += 9) : (r = e, $ === 0 && w(C)), r !== e) {
      for (i = [], o = f(); o !== e; )
        i.push(o), o = f();
      if (n.charCodeAt(a) === 40 ? (o = d, a++) : (o = e, $ === 0 && w(q)), o !== e) {
        for (h = [], l = f(); l !== e; )
          h.push(l), l = f();
        if (l = x(), l !== e) {
          for (M = be(), M === e && (M = null), b = [], O = f(); O !== e; )
            b.push(O), O = f();
          n.charCodeAt(a) === 41 ? (O = I, a++) : (O = e, $ === 0 && w(m)), O !== e ? t = Be(l, M) : (a = t, t = e);
        } else
          a = t, t = e;
      } else
        a = t, t = e;
    } else
      a = t, t = e;
    return t;
  }
  function ln() {
    var t, r, i, o, h, l, M, b, O;
    if (t = a, n.substr(a, 5) === p ? (r = p, a += 5) : (r = e, $ === 0 && w(V)), r !== e) {
      for (i = [], o = f(); o !== e; )
        i.push(o), o = f();
      if (n.charCodeAt(a) === 40 ? (o = d, a++) : (o = e, $ === 0 && w(q)), o !== e) {
        for (h = [], l = f(); l !== e; )
          h.push(l), l = f();
        if (l = x(), l !== e) {
          for (M = be(), M === e && (M = null), b = [], O = f(); O !== e; )
            b.push(O), O = f();
          n.charCodeAt(a) === 41 ? (O = I, a++) : (O = e, $ === 0 && w(m)), O !== e ? t = Ge(l, M) : (a = t, t = e);
        } else
          a = t, t = e;
      } else
        a = t, t = e;
    } else
      a = t, t = e;
    return t;
  }
  function fn() {
    var t, r, i, o, h, l, M, b, O;
    if (t = a, n.substr(a, 6) === A ? (r = A, a += 6) : (r = e, $ === 0 && w(ne)), r !== e) {
      for (i = [], o = f(); o !== e; )
        i.push(o), o = f();
      if (n.charCodeAt(a) === 40 ? (o = d, a++) : (o = e, $ === 0 && w(q)), o !== e) {
        for (h = [], l = f(); l !== e; )
          h.push(l), l = f();
        if (l = x(), l !== e) {
          for (M = gn(), M === e && (M = null), b = [], O = f(); O !== e; )
            b.push(O), O = f();
          n.charCodeAt(a) === 41 ? (O = I, a++) : (O = e, $ === 0 && w(m)), O !== e ? t = Xe(l, M) : (a = t, t = e);
        } else
          a = t, t = e;
      } else
        a = t, t = e;
    } else
      a = t, t = e;
    return t;
  }
  function pn() {
    var t, r, i, o, h, l, M, b;
    if (t = a, n.substr(a, 5) === P ? (r = P, a += 5) : (r = e, $ === 0 && w(qe)), r !== e) {
      for (i = [], o = f(); o !== e; )
        i.push(o), o = f();
      if (n.charCodeAt(a) === 40 ? (o = d, a++) : (o = e, $ === 0 && w(q)), o !== e) {
        for (h = [], l = f(); l !== e; )
          h.push(l), l = f();
        if (l = x(), l !== e) {
          for (M = [], b = f(); b !== e; )
            M.push(b), b = f();
          n.charCodeAt(a) === 41 ? (b = I, a++) : (b = e, $ === 0 && w(m)), b !== e ? t = We(l) : (a = t, t = e);
        } else
          a = t, t = e;
      } else
        a = t, t = e;
    } else
      a = t, t = e;
    return t;
  }
  function hn() {
    var t, r, i, o, h, l, M, b;
    if (t = a, n.substr(a, 5) === Y ? (r = Y, a += 5) : (r = e, $ === 0 && w(Ce)), r !== e) {
      for (i = [], o = f(); o !== e; )
        i.push(o), o = f();
      if (n.charCodeAt(a) === 40 ? (o = d, a++) : (o = e, $ === 0 && w(q)), o !== e) {
        for (h = [], l = f(); l !== e; )
          h.push(l), l = f();
        if (l = x(), l !== e) {
          for (M = [], b = f(); b !== e; )
            M.push(b), b = f();
          n.charCodeAt(a) === 41 ? (b = I, a++) : (b = e, $ === 0 && w(m)), b !== e ? t = Ve(l) : (a = t, t = e);
        } else
          a = t, t = e;
      } else
        a = t, t = e;
    } else
      a = t, t = e;
    return t;
  }
  function x() {
    var t, r, i, o;
    return t = a, r = a, i = re(), i === e && (i = null), o = $n(), o !== e ? (i = [i, o], r = i) : (a = r, r = e), r !== e && (r = ze(r)), t = r, t === e && (t = a, r = a, i = re(), i === e && (i = null), o = vn(), o !== e ? (i = [i, o], r = i) : (a = r, r = e), r !== e && (r = He(r)), t = r), t;
  }
  function be() {
    var t, r, i;
    return t = a, r = F(), r !== e ? (i = x(), i !== e ? t = Je(i) : (a = t, t = e)) : (a = t, t = e), t;
  }
  function gn() {
    var t, r, i, o, h;
    return t = a, r = F(), r !== e ? (i = x(), i !== e ? (o = F(), o !== e ? (h = x(), h !== e ? t = Ze(i, h) : (a = t, t = e)) : (a = t, t = e)) : (a = t, t = e)) : (a = t, t = e), t;
  }
  function F() {
    var t, r, i, o, h;
    if (t = a, r = [], i = f(), i !== e)
      for (; i !== e; )
        r.push(i), i = f();
    else
      r = e;
    if (r !== e) {
      for (i = we(), i === e && (i = null), o = [], h = f(); h !== e; )
        o.push(h), h = f();
      r = [r, i, o], t = r;
    } else
      a = t, t = e;
    if (t === e)
      if (t = a, r = we(), r !== e) {
        for (i = [], o = f(); o !== e; )
          i.push(o), o = f();
        r = [r, i], t = r;
      } else
        a = t, t = e;
    return t;
  }
  function we() {
    var t;
    return n.charCodeAt(a) === 44 ? (t = B, a++) : (t = e, $ === 0 && w(Se)), t;
  }
  function vn() {
    var t, r;
    return t = a, r = k(), r !== e && (r = Ke(r)), t = r, t;
  }
  function $n() {
    var t, r, i;
    return t = a, r = bn(), r !== e ? (i = Ie(), i === e && (i = null), t = Qe(r, i)) : (a = t, t = e), t === e && (t = a, r = k(), r !== e ? (i = Ie(), i !== e ? t = en(r, i) : (a = t, t = e)) : (a = t, t = e)), t;
  }
  function bn() {
    var t, r, i, o;
    return $++, t = a, r = k(), r === e && (r = null), n.charCodeAt(a) === 46 ? (i = G, a++) : (i = e, $ === 0 && w(fe)), i !== e ? (o = k(), o !== e ? t = nn(r, o) : (a = t, t = e)) : (a = t, t = e), t === e && (t = a, r = k(), r !== e ? (n.charCodeAt(a) === 46 ? (i = G, a++) : (i = e, $ === 0 && w(fe)), i !== e ? t = tn(r) : (a = t, t = e)) : (a = t, t = e)), $--, t === e && (r = e, $ === 0 && w(De)), t;
  }
  function Ie() {
    var t, r, i, o;
    return t = a, X.test(n.charAt(a)) ? (r = n.charAt(a), a++) : (r = e, $ === 0 && w(ke)), r !== e ? (i = re(), i === e && (i = null), o = k(), o !== e ? t = rn(i, o) : (a = t, t = e)) : (a = t, t = e), t;
  }
  function re() {
    var t;
    return ee.test(n.charAt(a)) ? (t = n.charAt(a), a++) : (t = e, $ === 0 && w(Ue)), t;
  }
  function k() {
    var t, r;
    if (t = [], r = Oe(), r !== e)
      for (; r !== e; )
        t.push(r), r = Oe();
    else
      t = e;
    return t;
  }
  function Oe() {
    var t;
    return W.test(n.charAt(a)) ? (t = n.charAt(a), a++) : (t = e, $ === 0 && w(je)), t;
  }
  function f() {
    var t;
    return R.test(n.charAt(a)) ? (t = n.charAt(a), a++) : (t = e, $ === 0 && w(Te)), t;
  }
  if (H = v(), H !== e && a === n.length)
    return H;
  throw H !== e && a < n.length && w(an()), on(
    te,
    _ < n.length ? n.charAt(_) : null,
    _ < n.length ? he(_, _ + 1) : he(_, _)
  );
}
function Lt(n) {
  return Nt(n);
}
function Yt(n, s = !1, e = !1) {
  s ? e ? n = Z(n, U(-1, -1)) : n = Z(n, U(1, -1)) : e && (n = Z(n, U(-1, 1)));
  const u = n.a, c = n.b, v = n.c, y = n.d;
  let d, I, g;
  if (u !== 0 || v !== 0) {
    const p = Math.hypot(u, v);
    d = p, I = (u * y - c * v) / p;
    const A = Math.acos(u / p);
    g = v > 0 ? -A : A;
  } else if (c !== 0 || y !== 0) {
    const p = Math.hypot(c, y);
    d = (u * y - c * v) / p, I = p;
    const A = Math.acos(c / p);
    g = Math.PI / 2 + (y > 0 ? -A : A);
  } else
    d = 0, I = 0, g = 0;
  return e && (d = -d), s && (I = -I), {
    translate: { tx: n.e, ty: n.f },
    scale: { sx: d, sy: I },
    rotation: { angle: g }
  };
}
function Bt(n, s, e) {
  return Math.max(s, Math.min(n, e));
}
function Gt(n, s, e) {
  return n + e * (s - n);
}
function Xt(n) {
  return n * Math.PI / 180;
}
const Wt = [
  "translateX",
  "translateY",
  "rotate",
  "scale",
  "scaleX",
  "scaleY"
], Pe = (n, s, e) => Array.isArray(n) ? n.map((u, c) => Pe(u, s[c], e)) : Gt(n, s, e);
function Vt(n, { decimals: s = 3, close: e = !0 } = {}) {
  let u = "";
  for (let c = 0; c < n.length + (e ? 1 : 0); c++)
    u += c ? " L " : "M ", u += n[c % n.length][0].toFixed(s) + " " + n[c % n.length][1].toFixed(s);
  return e && (u += " Z"), u;
}
class Ht {
  constructor({
    interpolations: s = {},
    loop: e = !1,
    duration: u = 0,
    frameRate: c = 60
  } = {}) {
    this.props = { interpolations: s, duration: u, frameRate: c, loop: e }, this.length = this.toFrames(u);
  }
  get interpolations() {
    return this.props.interpolations;
  }
  set interpolations(s) {
    this.props.interpolations = s;
  }
  get frameRate() {
    return this.props.frameRate;
  }
  set loop(s) {
    this.props.loop = s;
  }
  get loop() {
    return this.props.loop;
  }
  // Convert '1s', '10ms', 10 to a number of frames based on a frame rate
  toFrames(s = 0) {
    const [, e, u] = /([-+]?[0-9.]+)([a-z%]*)/.exec(s) ?? [parseFloat(s)];
    if (!u)
      return e;
    let c = 1;
    return u === "ms" && (c = 1e3), Math.floor(e / c * this.props.frameRate);
  }
  // Interpolate a specific frame and apply the whole timeline to a document
  apply(s, e = null) {
    for (const u in this.props.interpolations) {
      const c = s.querySelectorAll(u);
      if (!c)
        continue;
      let v = 0;
      const y = this.props.interpolations[u].span ? this.toFrames(this.props.interpolations[u].span ?? 0) / c.length : this.toFrames(this.props.interpolations[u].stagger ?? 0);
      for (const d of c) {
        for (let I in this.props.interpolations[u]) {
          if (I === "stagger")
            continue;
          const {
            initial: g,
            from: p,
            to: A,
            delay: P,
            duration: Y,
            easing: B
          } = this.props.interpolations[u][I], G = this.toFrames(Y ?? this.length), X = this.toFrames(P ?? 0) + v, ee = Bt((e - X) / G, 0, 1), W = _t[B ?? "linear"];
          if (!W)
            throw new Error(`easing function '${B}' does not exist. See https://github.com/mattdesl/eases for available functions.`);
          let R = Pe(e < X && g !== void 0 ? g : p, A, W(ee));
          if (Wt.includes(I)) {
            const N = d.getAttribute("transform") ?? "translate(0,0)", q = /^matrix/i.test(N) ? Pt(N) : jt(Lt(N))[0], { translate: m, scale: C, rotation: V } = Yt(
              q ?? S(0)
            );
            switch (I) {
              case "translateX":
                m.tx = R;
                break;
              case "translateY":
                m.ty = R;
                break;
              case "scale":
                C.sx = R, C.sy = R;
                break;
              case "scaleX":
                C.sx = R;
                break;
              case "scaleY":
                C.sy = R;
                break;
              case "rotate":
                V.angle = Xt(R);
                break;
            }
            const ne = Z(
              S(m.tx ?? 0, m.ty ?? 0),
              U(C.sx ?? 1, C.sy ?? 1),
              Fe(V.angle ?? 0)
            );
            I = "transform", R = Ut(ne);
          }
          I === "d" && (R = Vt(R)), d.setAttribute(I, R);
        }
        v += y;
      }
    }
  }
  toJSON() {
    return this.props;
  }
}
export {
  zt as Convert,
  Ht as SVGTimeline
};
//# sourceMappingURL=index.js.map
