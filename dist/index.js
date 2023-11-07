function gn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function vn(n) {
  var i = 2.5949095;
  return (n *= 2) < 1 ? 0.5 * (n * n * ((i + 1) * n - i)) : 0.5 * ((n -= 2) * n * ((i + 1) * n + i) + 2);
}
var $n = vn;
function In(n) {
  var i = 1.70158;
  return n * n * ((i + 1) * n - i);
}
var wn = In;
function bn(n) {
  var i = 1.70158;
  return --n * n * ((i + 1) * n + i) + 1;
}
var On = bn;
function Mn(n) {
  var i = 0.36363636363636365, e = 8 / 11, o = 9 / 10, l = 4356 / 361, I = 35442 / 1805, x = 16061 / 1805, M = n * n;
  return n < i ? 7.5625 * M : n < e ? 9.075 * M - 9.9 * n + 3.4 : n < o ? l * M - I * n + x : 10.8 * n * n - 20.52 * n + 10.72;
}
var ue = Mn, Ae = ue;
function An(n) {
  return n < 0.5 ? 0.5 * (1 - Ae(1 - n * 2)) : 0.5 * Ae(n * 2 - 1) + 0.5;
}
var dn = An, xn = ue;
function yn(n) {
  return 1 - xn(1 - n);
}
var _n = yn;
function En(n) {
  return (n *= 2) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
}
var Fn = En;
function mn(n) {
  return 1 - Math.sqrt(1 - n * n);
}
var Pn = mn;
function qn(n) {
  return Math.sqrt(1 - --n * n);
}
var Rn = qn;
function Cn(n) {
  return n < 0.5 ? 4 * n * n * n : 0.5 * Math.pow(2 * n - 2, 3) + 1;
}
var Sn = Cn;
function kn(n) {
  return n * n * n;
}
var Nn = kn;
function Dn(n) {
  var i = n - 1;
  return i * i * i + 1;
}
var Tn = Dn;
function Yn(n) {
  return n < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * n) * Math.pow(2, 10 * (2 * n - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * n - 1 + 1)) * Math.pow(2, -10 * (2 * n - 1)) + 1;
}
var jn = Yn;
function Gn(n) {
  return Math.sin(13 * n * Math.PI / 2) * Math.pow(2, 10 * (n - 1));
}
var Xn = Gn;
function Un(n) {
  return Math.sin(-13 * (n + 1) * Math.PI / 2) * Math.pow(2, -10 * n) + 1;
}
var Bn = Un;
function Wn(n) {
  return n === 0 || n === 1 ? n : n < 0.5 ? 0.5 * Math.pow(2, 20 * n - 10) : -0.5 * Math.pow(2, 10 - n * 20) + 1;
}
var Ln = Wn;
function Vn(n) {
  return n === 0 ? n : Math.pow(2, 10 * (n - 1));
}
var zn = Vn;
function Jn(n) {
  return n === 1 ? n : 1 - Math.pow(2, -10 * n);
}
var Zn = Jn;
function Hn(n) {
  return n;
}
var Kn = Hn;
function Qn(n) {
  return n /= 0.5, n < 1 ? 0.5 * n * n : (n--, -0.5 * (n * (n - 2) - 1));
}
var er = Qn;
function nr(n) {
  return n * n;
}
var rr = nr;
function tr(n) {
  return -n * (n - 2);
}
var ar = tr;
function sr(n) {
  return n < 0.5 ? 8 * Math.pow(n, 4) : -8 * Math.pow(n - 1, 4) + 1;
}
var ir = sr;
function ur(n) {
  return Math.pow(n, 4);
}
var or = ur;
function fr(n) {
  return Math.pow(n - 1, 3) * (1 - n) + 1;
}
var lr = fr;
function cr(n) {
  return (n *= 2) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2);
}
var pr = cr;
function hr(n) {
  return n * n * n * n * n;
}
var gr = hr;
function vr(n) {
  return --n * n * n * n * n + 1;
}
var $r = vr;
function Ir(n) {
  return -0.5 * (Math.cos(Math.PI * n) - 1);
}
var wr = Ir;
function br(n) {
  var i = Math.cos(n * Math.PI * 0.5);
  return Math.abs(i) < 1e-14 ? 1 : 1 - i;
}
var Or = br;
function Mr(n) {
  return Math.sin(n * Math.PI / 2);
}
var Ar = Mr, dr = {
  backInOut: $n,
  backIn: wn,
  backOut: On,
  bounceInOut: dn,
  bounceIn: _n,
  bounceOut: ue,
  circInOut: Fn,
  circIn: Pn,
  circOut: Rn,
  cubicInOut: Sn,
  cubicIn: Nn,
  cubicOut: Tn,
  elasticInOut: jn,
  elasticIn: Xn,
  elasticOut: Bn,
  expoInOut: Ln,
  expoIn: zn,
  expoOut: Zn,
  linear: Kn,
  quadInOut: er,
  quadIn: rr,
  quadOut: ar,
  quartInOut: ir,
  quartIn: or,
  quartOut: lr,
  quintInOut: pr,
  quintIn: gr,
  quintOut: $r,
  sineInOut: wr,
  sineIn: Or,
  sineOut: Ar
};
const xr = /* @__PURE__ */ gn(dr);
function yr(n) {
  return {
    a: parseFloat(n.a),
    b: parseFloat(n.b),
    c: parseFloat(n.c),
    d: parseFloat(n.d),
    e: parseFloat(n.e),
    f: parseFloat(n.f)
  };
}
const _r = /^matrix\(\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*,\s*([0-9_+-.e]+)\s*\)$/i;
function Er(n) {
  const i = n.match(_r);
  if (i === null || i.length < 7)
    throw new Error(`'${n}' is not a matrix`);
  return {
    a: parseFloat(i[1]),
    b: parseFloat(i[2]),
    c: parseFloat(i[3]),
    d: parseFloat(i[4]),
    e: parseFloat(i[5]),
    f: parseFloat(i[6])
  };
}
function j(n) {
  return typeof n > "u";
}
function S(n, i = 0) {
  return {
    a: 1,
    c: 0,
    e: n,
    b: 0,
    d: 1,
    f: i
  };
}
function H(...n) {
  n = Array.isArray(n[0]) ? n[0] : n;
  const i = (e, o) => ({
    a: e.a * o.a + e.c * o.b,
    c: e.a * o.c + e.c * o.d,
    e: e.a * o.e + e.c * o.f + e.e,
    b: e.b * o.a + e.d * o.b,
    d: e.b * o.c + e.d * o.d,
    f: e.b * o.e + e.d * o.f + e.f
  });
  switch (n.length) {
    case 0:
      throw new Error("no matrices provided");
    case 1:
      return n[0];
    case 2:
      return i(n[0], n[1]);
    default: {
      const [e, o, ...l] = n, I = i(e, o);
      return H(I, ...l);
    }
  }
}
function Z(...n) {
  return H(...n);
}
const { cos: Fr, sin: mr, PI: Pr } = Math;
function _e(n, i, e) {
  const o = Fr(n), l = mr(n), I = {
    a: o,
    c: -l,
    e: 0,
    b: l,
    d: o,
    f: 0
  };
  return j(i) || j(e) ? I : H([
    S(i, e),
    I,
    S(-i, -e)
  ]);
}
function de(n, i = void 0, e = void 0) {
  return _e(n * Pr / 180, i, e);
}
function D(n, i = void 0, e = void 0, o = void 0) {
  j(i) && (i = n);
  const l = {
    a: n,
    c: 0,
    e: 0,
    b: 0,
    d: i,
    f: 0
  };
  return j(e) || j(o) ? l : H([
    S(e, o),
    l,
    S(-e, -o)
  ]);
}
function qr(n, i) {
  return {
    a: 1,
    c: n,
    e: 0,
    b: i,
    d: 1,
    f: 0
  };
}
const { tan: xe } = Math;
function Rr(n, i) {
  return {
    a: 1,
    c: xe(n),
    e: 0,
    b: xe(i),
    d: 1,
    f: 0
  };
}
function ye(n, i) {
  return Rr(n * Math.PI / 180, i * Math.PI / 180);
}
function Cr(n) {
  return `matrix(${n.a},${n.b},${n.c},${n.d},${n.e},${n.f})`;
}
function Sr(n) {
  return Array.isArray(n) ? n.map(i) : i(n);
  function i(e) {
    switch (e.type) {
      case "matrix":
        if ("a" in e && "b" in e && "c" in e && "d" in e && "e" in e && "f" in e)
          return yr(e);
        throw new Error("MISSING_MANDATORY_PARAM");
      case "translate":
        if (!("tx" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return "ty" in e ? S(e.tx, e.ty) : S(e.tx);
      case "scale":
        if (!("sx" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return "sy" in e ? D(e.sx, e.sy) : D(e.sx);
      case "rotate":
        if (!("angle" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return "cx" in e && "cy" in e ? de(e.angle, e.cx, e.cy) : de(e.angle);
      case "skewX":
        if (!("angle" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return ye(e.angle, 0);
      case "skewY":
        if (!("angle" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return ye(0, e.angle);
      case "shear":
        if (!("shx" in e && "shy" in e))
          throw new Error("MISSING_MANDATORY_PARAM");
        return qr(e.shx, e.shy);
      default:
        throw new Error("UNSUPPORTED_DESCRIPTOR");
    }
  }
}
function kr(n, i) {
  function e() {
    this.constructor = n;
  }
  e.prototype = i.prototype, n.prototype = new e();
}
function T(n, i, e, o) {
  var l = Error.call(this, n);
  return Object.setPrototypeOf && Object.setPrototypeOf(l, T.prototype), l.expected = i, l.found = e, l.location = o, l.name = "SyntaxError", l;
}
kr(T, Error);
function ie(n, i, e) {
  return e = e || " ", n.length > i ? n : (i -= n.length, e += e.repeat(i), n + e.slice(0, i));
}
T.prototype.format = function(n) {
  var i = "Error: " + this.message;
  if (this.location) {
    var e = null, o;
    for (o = 0; o < n.length; o++)
      if (n[o].source === this.location.source) {
        e = n[o].text.split(/\r\n|\n|\r/g);
        break;
      }
    var l = this.location.start, I = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(l) : l, x = this.location.source + ":" + I.line + ":" + I.column;
    if (e) {
      var M = this.location.end, b = ie("", I.line.toString().length, " "), g = e[l.line - 1], p = l.line === M.line ? M.column : g.length + 1, A = p - l.column || 1;
      i += `
 --> ` + x + `
` + b + ` |
` + I.line + " | " + g + `
` + b + " | " + ie("", l.column - 1, " ") + ie("", A, "^");
    } else
      i += `
 at ` + x;
  }
  return i;
};
T.buildMessage = function(n, i) {
  var e = {
    literal: function(g) {
      return '"' + l(g.text) + '"';
    },
    class: function(g) {
      var p = g.parts.map(function(A) {
        return Array.isArray(A) ? I(A[0]) + "-" + I(A[1]) : I(A);
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
  function o(g) {
    return g.charCodeAt(0).toString(16).toUpperCase();
  }
  function l(g) {
    return g.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(p) {
      return "\\x0" + o(p);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(p) {
      return "\\x" + o(p);
    });
  }
  function I(g) {
    return g.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(p) {
      return "\\x0" + o(p);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(p) {
      return "\\x" + o(p);
    });
  }
  function x(g) {
    return e[g.type](g);
  }
  function M(g) {
    var p = g.map(x), A, q;
    if (p.sort(), p.length > 0) {
      for (A = 1, q = 1; A < p.length; A++)
        p[A - 1] !== p[A] && (p[q] = p[A], q++);
      p.length = q;
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
  function b(g) {
    return g ? '"' + l(g) + '"' : "end of input";
  }
  return "Expected " + M(n) + " but " + b(i) + " found.";
};
function Nr(n, i) {
  i = i !== void 0 ? i : {};
  var e = {}, o = i.grammarSource, l = { transformList: ce }, I = ce, x = "matrix", M = "(", b = ")", g = "translate", p = "scale", A = "rotate", q = "skewX", G = "skewY", X = ",", U = ".", B = /^[eE]/, K = /^[+\-]/, W = /^[0-9]/, _ = /^[ \t\r\n]/, Y = m("matrix", !1), R = m("(", !1), E = m(")", !1), C = m("translate", !1), L = m("scale", !1), Q = m("rotate", !1), Fe = m("skewX", !1), me = m("skewY", !1), Pe = m(",", !1), qe = nn("fractionalConstant"), oe = m(".", !1), Re = J(["e", "E"], !1, !1), Ce = J(["+", "-"], !1, !1), Se = J([["0", "9"]], !1, !1), ke = J([" ", "	", "\r", `
`], !1, !1), Ne = function(r) {
    return r;
  }, De = function(r, t) {
    return r.concat(t);
  }, Te = function(r, t, s, u, h, f) {
    return [{ type: "matrix", a: r, b: t, c: s, d: u, e: h, f }];
  }, Ye = function(r, t) {
    var s = { type: "translate", tx: r };
    return t && (s.ty = t), [s];
  }, je = function(r, t) {
    var s = { type: "scale", sx: r };
    return t && (s.sy = t), [s];
  }, Ge = function(r, t) {
    var s = { type: "rotate", angle: r };
    return t && (s.cx = t[0], s.cy = t[1]), [s];
  }, Xe = function(r) {
    return [{ type: "skewX", angle: r }];
  }, Ue = function(r) {
    return [{ type: "skewY", angle: r }];
  }, Be = function(r) {
    return parseFloat(r.join(""));
  }, We = function(r) {
    return parseInt(r.join(""));
  }, Le = function(r) {
    return r;
  }, Ve = function(r, t) {
    return [r, t];
  }, ze = function(r) {
    return r.join("");
  }, Je = function(r, t) {
    return [r, t || null].join("");
  }, Ze = function(r, t) {
    return [r, t].join("");
  }, He = function(r, t) {
    return [r ? r.join("") : null, ".", t.join("")].join("");
  }, Ke = function(r) {
    return r.join("");
  }, Qe = function(r, t) {
    return ["e", r, t.join("")].join("");
  }, a = 0, V = [{ line: 1, column: 1 }], F = 0, ee = [], v = 0, z;
  if ("startRule" in i) {
    if (!(i.startRule in l))
      throw new Error(`Can't start parsing from rule "` + i.startRule + '".');
    I = l[i.startRule];
  }
  function m(r, t) {
    return { type: "literal", text: r, ignoreCase: t };
  }
  function J(r, t, s) {
    return { type: "class", parts: r, inverted: t, ignoreCase: s };
  }
  function en() {
    return { type: "end" };
  }
  function nn(r) {
    return { type: "other", description: r };
  }
  function fe(r) {
    var t = V[r], s;
    if (t)
      return t;
    for (s = r - 1; !V[s]; )
      s--;
    for (t = V[s], t = {
      line: t.line,
      column: t.column
    }; s < r; )
      n.charCodeAt(s) === 10 ? (t.line++, t.column = 1) : t.column++, s++;
    return V[r] = t, t;
  }
  function le(r, t, s) {
    var u = fe(r), h = fe(t), f = {
      source: o,
      start: {
        offset: r,
        line: u.line,
        column: u.column
      },
      end: {
        offset: t,
        line: h.line,
        column: h.column
      }
    };
    return s && o && typeof o.offset == "function" && (f.start = o.offset(f.start), f.end = o.offset(f.end)), f;
  }
  function w(r) {
    a < F || (a > F && (F = a, ee = []), ee.push(r));
  }
  function rn(r, t, s) {
    return new T(
      T.buildMessage(r, t),
      r,
      t,
      s
    );
  }
  function ce() {
    var r, t, s, u, h;
    for (r = a, t = [], s = c(); s !== e; )
      t.push(s), s = c();
    for (s = pe(), s === e && (s = null), u = [], h = c(); h !== e; )
      u.push(h), h = c();
    return r = Ne(s), r;
  }
  function pe() {
    var r, t, s, u;
    if (r = a, t = he(), t !== e) {
      if (s = [], u = P(), u !== e)
        for (; u !== e; )
          s.push(u), u = P();
      else
        s = e;
      s !== e ? (u = pe(), u !== e ? r = De(t, u) : (a = r, r = e)) : (a = r, r = e);
    } else
      a = r, r = e;
    return r === e && (r = he()), r;
  }
  function he() {
    var r;
    return r = tn(), r === e && (r = an(), r === e && (r = sn(), r === e && (r = un(), r === e && (r = on(), r === e && (r = fn()))))), r;
  }
  function tn() {
    var r, t, s, u, h, f, d, $, O, re, we, te, be, ae, Oe, se, Me, k;
    if (r = a, n.substr(a, 6) === x ? (t = x, a += 6) : (t = e, v === 0 && w(Y)), t !== e) {
      for (s = [], u = c(); u !== e; )
        s.push(u), u = c();
      if (n.charCodeAt(a) === 40 ? (u = M, a++) : (u = e, v === 0 && w(R)), u !== e) {
        for (h = [], f = c(); f !== e; )
          h.push(f), f = c();
        if (f = y(), f !== e)
          if (d = P(), d !== e)
            if ($ = y(), $ !== e)
              if (O = P(), O !== e)
                if (re = y(), re !== e)
                  if (we = P(), we !== e)
                    if (te = y(), te !== e)
                      if (be = P(), be !== e)
                        if (ae = y(), ae !== e)
                          if (Oe = P(), Oe !== e)
                            if (se = y(), se !== e) {
                              for (Me = [], k = c(); k !== e; )
                                Me.push(k), k = c();
                              n.charCodeAt(a) === 41 ? (k = b, a++) : (k = e, v === 0 && w(E)), k !== e ? r = Te(f, $, re, te, ae, se) : (a = r, r = e);
                            } else
                              a = r, r = e;
                          else
                            a = r, r = e;
                        else
                          a = r, r = e;
                      else
                        a = r, r = e;
                    else
                      a = r, r = e;
                  else
                    a = r, r = e;
                else
                  a = r, r = e;
              else
                a = r, r = e;
            else
              a = r, r = e;
          else
            a = r, r = e;
        else
          a = r, r = e;
      } else
        a = r, r = e;
    } else
      a = r, r = e;
    return r;
  }
  function an() {
    var r, t, s, u, h, f, d, $, O;
    if (r = a, n.substr(a, 9) === g ? (t = g, a += 9) : (t = e, v === 0 && w(C)), t !== e) {
      for (s = [], u = c(); u !== e; )
        s.push(u), u = c();
      if (n.charCodeAt(a) === 40 ? (u = M, a++) : (u = e, v === 0 && w(R)), u !== e) {
        for (h = [], f = c(); f !== e; )
          h.push(f), f = c();
        if (f = y(), f !== e) {
          for (d = ge(), d === e && (d = null), $ = [], O = c(); O !== e; )
            $.push(O), O = c();
          n.charCodeAt(a) === 41 ? (O = b, a++) : (O = e, v === 0 && w(E)), O !== e ? r = Ye(f, d) : (a = r, r = e);
        } else
          a = r, r = e;
      } else
        a = r, r = e;
    } else
      a = r, r = e;
    return r;
  }
  function sn() {
    var r, t, s, u, h, f, d, $, O;
    if (r = a, n.substr(a, 5) === p ? (t = p, a += 5) : (t = e, v === 0 && w(L)), t !== e) {
      for (s = [], u = c(); u !== e; )
        s.push(u), u = c();
      if (n.charCodeAt(a) === 40 ? (u = M, a++) : (u = e, v === 0 && w(R)), u !== e) {
        for (h = [], f = c(); f !== e; )
          h.push(f), f = c();
        if (f = y(), f !== e) {
          for (d = ge(), d === e && (d = null), $ = [], O = c(); O !== e; )
            $.push(O), O = c();
          n.charCodeAt(a) === 41 ? (O = b, a++) : (O = e, v === 0 && w(E)), O !== e ? r = je(f, d) : (a = r, r = e);
        } else
          a = r, r = e;
      } else
        a = r, r = e;
    } else
      a = r, r = e;
    return r;
  }
  function un() {
    var r, t, s, u, h, f, d, $, O;
    if (r = a, n.substr(a, 6) === A ? (t = A, a += 6) : (t = e, v === 0 && w(Q)), t !== e) {
      for (s = [], u = c(); u !== e; )
        s.push(u), u = c();
      if (n.charCodeAt(a) === 40 ? (u = M, a++) : (u = e, v === 0 && w(R)), u !== e) {
        for (h = [], f = c(); f !== e; )
          h.push(f), f = c();
        if (f = y(), f !== e) {
          for (d = ln(), d === e && (d = null), $ = [], O = c(); O !== e; )
            $.push(O), O = c();
          n.charCodeAt(a) === 41 ? (O = b, a++) : (O = e, v === 0 && w(E)), O !== e ? r = Ge(f, d) : (a = r, r = e);
        } else
          a = r, r = e;
      } else
        a = r, r = e;
    } else
      a = r, r = e;
    return r;
  }
  function on() {
    var r, t, s, u, h, f, d, $;
    if (r = a, n.substr(a, 5) === q ? (t = q, a += 5) : (t = e, v === 0 && w(Fe)), t !== e) {
      for (s = [], u = c(); u !== e; )
        s.push(u), u = c();
      if (n.charCodeAt(a) === 40 ? (u = M, a++) : (u = e, v === 0 && w(R)), u !== e) {
        for (h = [], f = c(); f !== e; )
          h.push(f), f = c();
        if (f = y(), f !== e) {
          for (d = [], $ = c(); $ !== e; )
            d.push($), $ = c();
          n.charCodeAt(a) === 41 ? ($ = b, a++) : ($ = e, v === 0 && w(E)), $ !== e ? r = Xe(f) : (a = r, r = e);
        } else
          a = r, r = e;
      } else
        a = r, r = e;
    } else
      a = r, r = e;
    return r;
  }
  function fn() {
    var r, t, s, u, h, f, d, $;
    if (r = a, n.substr(a, 5) === G ? (t = G, a += 5) : (t = e, v === 0 && w(me)), t !== e) {
      for (s = [], u = c(); u !== e; )
        s.push(u), u = c();
      if (n.charCodeAt(a) === 40 ? (u = M, a++) : (u = e, v === 0 && w(R)), u !== e) {
        for (h = [], f = c(); f !== e; )
          h.push(f), f = c();
        if (f = y(), f !== e) {
          for (d = [], $ = c(); $ !== e; )
            d.push($), $ = c();
          n.charCodeAt(a) === 41 ? ($ = b, a++) : ($ = e, v === 0 && w(E)), $ !== e ? r = Ue(f) : (a = r, r = e);
        } else
          a = r, r = e;
      } else
        a = r, r = e;
    } else
      a = r, r = e;
    return r;
  }
  function y() {
    var r, t, s, u;
    return r = a, t = a, s = ne(), s === e && (s = null), u = pn(), u !== e ? (s = [s, u], t = s) : (a = t, t = e), t !== e && (t = Be(t)), r = t, r === e && (r = a, t = a, s = ne(), s === e && (s = null), u = cn(), u !== e ? (s = [s, u], t = s) : (a = t, t = e), t !== e && (t = We(t)), r = t), r;
  }
  function ge() {
    var r, t, s;
    return r = a, t = P(), t !== e ? (s = y(), s !== e ? r = Le(s) : (a = r, r = e)) : (a = r, r = e), r;
  }
  function ln() {
    var r, t, s, u, h;
    return r = a, t = P(), t !== e ? (s = y(), s !== e ? (u = P(), u !== e ? (h = y(), h !== e ? r = Ve(s, h) : (a = r, r = e)) : (a = r, r = e)) : (a = r, r = e)) : (a = r, r = e), r;
  }
  function P() {
    var r, t, s, u, h;
    if (r = a, t = [], s = c(), s !== e)
      for (; s !== e; )
        t.push(s), s = c();
    else
      t = e;
    if (t !== e) {
      for (s = ve(), s === e && (s = null), u = [], h = c(); h !== e; )
        u.push(h), h = c();
      t = [t, s, u], r = t;
    } else
      a = r, r = e;
    if (r === e)
      if (r = a, t = ve(), t !== e) {
        for (s = [], u = c(); u !== e; )
          s.push(u), u = c();
        t = [t, s], r = t;
      } else
        a = r, r = e;
    return r;
  }
  function ve() {
    var r;
    return n.charCodeAt(a) === 44 ? (r = X, a++) : (r = e, v === 0 && w(Pe)), r;
  }
  function cn() {
    var r, t;
    return r = a, t = N(), t !== e && (t = ze(t)), r = t, r;
  }
  function pn() {
    var r, t, s;
    return r = a, t = hn(), t !== e ? (s = $e(), s === e && (s = null), r = Je(t, s)) : (a = r, r = e), r === e && (r = a, t = N(), t !== e ? (s = $e(), s !== e ? r = Ze(t, s) : (a = r, r = e)) : (a = r, r = e)), r;
  }
  function hn() {
    var r, t, s, u;
    return v++, r = a, t = N(), t === e && (t = null), n.charCodeAt(a) === 46 ? (s = U, a++) : (s = e, v === 0 && w(oe)), s !== e ? (u = N(), u !== e ? r = He(t, u) : (a = r, r = e)) : (a = r, r = e), r === e && (r = a, t = N(), t !== e ? (n.charCodeAt(a) === 46 ? (s = U, a++) : (s = e, v === 0 && w(oe)), s !== e ? r = Ke(t) : (a = r, r = e)) : (a = r, r = e)), v--, r === e && (t = e, v === 0 && w(qe)), r;
  }
  function $e() {
    var r, t, s, u;
    return r = a, B.test(n.charAt(a)) ? (t = n.charAt(a), a++) : (t = e, v === 0 && w(Re)), t !== e ? (s = ne(), s === e && (s = null), u = N(), u !== e ? r = Qe(s, u) : (a = r, r = e)) : (a = r, r = e), r;
  }
  function ne() {
    var r;
    return K.test(n.charAt(a)) ? (r = n.charAt(a), a++) : (r = e, v === 0 && w(Ce)), r;
  }
  function N() {
    var r, t;
    if (r = [], t = Ie(), t !== e)
      for (; t !== e; )
        r.push(t), t = Ie();
    else
      r = e;
    return r;
  }
  function Ie() {
    var r;
    return W.test(n.charAt(a)) ? (r = n.charAt(a), a++) : (r = e, v === 0 && w(Se)), r;
  }
  function c() {
    var r;
    return _.test(n.charAt(a)) ? (r = n.charAt(a), a++) : (r = e, v === 0 && w(ke)), r;
  }
  if (z = I(), z !== e && a === n.length)
    return z;
  throw z !== e && a < n.length && w(en()), rn(
    ee,
    F < n.length ? n.charAt(F) : null,
    F < n.length ? le(F, F + 1) : le(F, F)
  );
}
function Dr(n) {
  return Nr(n);
}
function Tr(n, i = !1, e = !1) {
  i ? e ? n = Z(n, D(-1, -1)) : n = Z(n, D(1, -1)) : e && (n = Z(n, D(-1, 1)));
  const o = n.a, l = n.b, I = n.c, x = n.d;
  let M, b, g;
  if (o !== 0 || I !== 0) {
    const p = Math.hypot(o, I);
    M = p, b = (o * x - l * I) / p;
    const A = Math.acos(o / p);
    g = I > 0 ? -A : A;
  } else if (l !== 0 || x !== 0) {
    const p = Math.hypot(l, x);
    M = (o * x - l * I) / p, b = p;
    const A = Math.acos(l / p);
    g = Math.PI / 2 + (x > 0 ? -A : A);
  } else
    M = 0, b = 0, g = 0;
  return e && (M = -M), i && (b = -b), {
    translate: { tx: n.e, ty: n.f },
    scale: { sx: M, sy: b },
    rotation: { angle: g }
  };
}
function Yr(n, i, e) {
  return Math.max(i, Math.min(n, e));
}
function jr(n, i, e) {
  return n + e * (i - n);
}
function Gr(n) {
  return n * Math.PI / 180;
}
const Xr = [
  "translateX",
  "translateY",
  "rotate",
  "scale",
  "scaleX",
  "scaleY"
], Ee = (n, i, e) => Array.isArray(n) ? n.map((o, l) => Ee(o, i[l], e)) : jr(n, i, e);
function Ur(n, { decimals: i = 3, close: e = !0 } = {}) {
  let o = "";
  for (let l = 0; l < n.length + (e ? 1 : 0); l++)
    o += l ? " L " : "M ", o += n[l % n.length][0].toFixed(i) + " " + n[l % n.length][1].toFixed(i);
  return e && (o += " Z"), o;
}
class Br {
  constructor({
    interpolations: i = {},
    loop: e = !1,
    duration: o = 0,
    frameRate: l = 60
  } = {}) {
    this.props = { interpolations: i, duration: o, frameRate: l, loop: e }, this.length = this.toFrames(o);
  }
  get interpolations() {
    return this.props.interpolations;
  }
  set interpolations(i) {
    this.props.interpolations = i;
  }
  get frameRate() {
    return this.props.frameRate;
  }
  set loop(i) {
    this.props.loop = i;
  }
  get loop() {
    return this.props.loop;
  }
  // Convert '1s', '10ms', 10 to a number of frames based on a frame rate
  toFrames(i = 0) {
    const [, e, o] = /([-+]?[0-9.]+)([a-z%]*)/.exec(i) ?? [parseFloat(i)];
    if (!o)
      return e;
    let l = 1;
    return o === "ms" && (l = 1e3), Math.floor(e / l * this.props.frameRate);
  }
  // Interpolate a specific frame and apply the whole timeline to a document
  apply(i, e = null) {
    for (const o in this.props.interpolations) {
      const l = i.querySelectorAll(o);
      if (!l)
        continue;
      let I = 0;
      const x = this.props.interpolations[o].span ? this.toFrames(this.props.interpolations[o].span ?? 0) / l.length : this.toFrames(this.props.interpolations[o].stagger ?? 0);
      for (const M of l) {
        for (let b in this.props.interpolations[o]) {
          if (b === "stagger")
            continue;
          const {
            initial: g,
            from: p,
            to: A,
            delay: q,
            duration: G,
            easing: X
          } = this.props.interpolations[o][b], U = this.toFrames(G ?? this.length), B = this.toFrames(q ?? 0) + I, K = Yr((e - B) / U, 0, 1), W = xr[X ?? "linear"];
          if (!W)
            throw new Error(`easing function '${X}' does not exist. See https://github.com/mattdesl/eases for available functions.`);
          let _ = Ee(e < B && g !== void 0 ? g : p, A, W(K));
          if (Xr.includes(b)) {
            const Y = M.getAttribute("transform") ?? "translate(0,0)", R = /^matrix/i.test(Y) ? Er(Y) : Sr(Dr(Y))[0], { translate: E, scale: C, rotation: L } = Tr(
              R ?? S(0)
            );
            switch (b) {
              case "translateX":
                E.tx = _;
                break;
              case "translateY":
                E.ty = _;
                break;
              case "scale":
                C.sx = _, C.sy = _;
                break;
              case "scaleX":
                C.sx = _;
                break;
              case "scaleY":
                C.sy = _;
                break;
              case "rotate":
                L.angle = Gr(_);
                break;
            }
            const Q = Z(
              S(E.tx ?? 0, E.ty ?? 0),
              D(C.sx ?? 1, C.sy ?? 1),
              _e(L.angle ?? 0)
            );
            b = "transform", _ = Cr(Q);
          }
          b === "d" && (_ = Ur(_)), M.setAttribute(b, _);
        }
        I += x;
      }
    }
  }
  toJSON() {
    return this.props;
  }
}
export {
  Br as SVGTimeline
};
//# sourceMappingURL=index.js.map
