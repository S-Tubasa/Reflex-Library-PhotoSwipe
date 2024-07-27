import { jsx as a, jsxs as h } from "react/jsx-runtime";
import { Gallery as r, Item as e } from "react-photoswipe-gallery";
import m from "photoswipe-dynamic-caption-plugin";
const n = {
  cursor: "pointer",
  objectFit: "cover",
  width: "300px",
  height: "300px"
}, g = (i) => /* @__PURE__ */ a(
  r,
  {
    plugins: (t) => {
      new m(t, {
        captionContent: (l) => l.data.alt
      });
    },
    children: /* @__PURE__ */ h(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 0fr)",
          gridGap: 50
        },
        children: [
          /* @__PURE__ */ a(
            e,
            {
              cropped: !0,
              original: i.originala,
              thumbnail: i.thumbnaila,
              width: i.widtha,
              height: i.heighta,
              alt: i.alta,
              children: ({ ref: t, open: l }) => (
                // <div style={smallItemStyles2}>
                /* @__PURE__ */ a(
                  "img",
                  {
                    style: n,
                    src: i.thumbnaila,
                    ref: t,
                    onClick: l
                  }
                )
              )
            }
          ),
          /* @__PURE__ */ a(
            e,
            {
              cropped: !0,
              original: i.originalb,
              thumbnail: i.thumbnailb,
              width: i.widthb,
              height: i.heightb,
              alt: i.altb,
              children: ({ ref: t, open: l }) => /* @__PURE__ */ a(
                "img",
                {
                  style: n,
                  src: i.thumbnailb,
                  ref: t,
                  onClick: l
                }
              )
            }
          )
        ]
      }
    )
  }
);
export {
  g as Counter
};
//# sourceMappingURL=index.js.map
