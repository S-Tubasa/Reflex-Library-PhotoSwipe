import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { Gallery as n, Item as h } from "react-photoswipe-gallery";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
const r = {
  cursor: "pointer",
  objectFit: "cover",
  width: "150px",
  height: "150px"
}, g = (i) => /* @__PURE__ */ t(n, { children: /* @__PURE__ */ a(
  "div",
  {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 0fr)",
      gridGap: 10
    },
    children: [
      /* @__PURE__ */ t(
        h,
        {
          cropped: !0,
          original: i.originala,
          thumbnail: i.thumbnaila,
          width: i.widtha,
          height: i.heighta,
          children: ({ ref: e, open: l }) => /* @__PURE__ */ t(
            "img",
            {
              style: r,
              src: i.thumbnaila,
              ref: e,
              onClick: l
            }
          )
        }
      ),
      /* @__PURE__ */ t(
        h,
        {
          cropped: !0,
          original: i.originalb,
          thumbnail: i.thumbnailb,
          width: i.widthb,
          height: i.heightb,
          children: ({ ref: e, open: l }) => /* @__PURE__ */ t(
            "img",
            {
              style: r,
              src: i.thumbnailb,
              ref: e,
              onClick: l
            }
          )
        }
      )
    ]
  }
) });
export {
  g as Counter
};
//# sourceMappingURL=index.js.map
