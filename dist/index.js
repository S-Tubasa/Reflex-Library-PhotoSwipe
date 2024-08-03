import { jsx as e } from "react/jsx-runtime";
import { Gallery as a, Item as c } from "react-photoswipe-gallery";
const n = {
  cursor: "pointer",
  objectFit: "cover",
  width: "100%",
  height: "auto",
  aspectRatio: "1216/832"
}, h = {
  cursor: "pointer",
  objectFit: "cover",
  width: "100%",
  height: "auto",
  aspectRatio: "832/1216"
}, s = (t) => {
  const i = t.type === "Landscape" ? n : h;
  return /* @__PURE__ */ e(a, { children: /* @__PURE__ */ e(
    c,
    {
      cropped: !0,
      original: t.original,
      thumbnail: t.thumbnail,
      width: t.width,
      height: t.height,
      children: ({ ref: o, open: r }) => /* @__PURE__ */ e("img", { style: i, ref: o, onClick: r, src: t.thumbnail })
    }
  ) });
};
export {
  s as Counter
};
//# sourceMappingURL=index.js.map
