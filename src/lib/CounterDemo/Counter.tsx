// import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'
// @ts-expect-error
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'


// TODO: reflexでインポートすると_が何故か使えない
export interface CounterProps {
    originala: string;
    thumbnaila: string;
    originalb: string;
    thumbnailb: string;
    widtha: string;
    heighta: string;
    widthb: string;
    heightb: string;
    alta: string;
    altb: string;
}

const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '300px',
    height: '300px',
}

// const smallItemStyles2: React.CSSProperties = {
//     position: 'relative',
//     display: 'block',
// }


// const captionStyles: React.CSSProperties = {
//     position: 'absolute',
//     bottom: '10px',
//     right: '10px',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     color: 'white',
//     padding: '5px',
//     borderRadius: '3px',
//     fontSize: '12px',
// };

export const Counter = (props: CounterProps) => (
    <Gallery
        plugins={(pswpLightbox) => {
            // register plugin
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            new PhotoSwipeDynamicCaption(pswpLightbox, {
                captionContent: (slide: any) => slide.data.alt,
            })

            // register another plugin
            // ...
        }}
    >
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 0fr)',
                gridGap: 50,
            }}
        >
            <Item<HTMLImageElement>
                cropped
                original={props.originala}
                thumbnail={props.thumbnaila}
                width={props.widtha}
                height={props.heighta}
                alt={props.alta}
            >
                {({ ref, open }) => (
                    // <div style={smallItemStyles2}>
                    <img
                        style={smallItemStyles}
                        src={props.thumbnaila}
                        ref={ref}
                        onClick={open}
                    />
                    // <div style={captionStyles}>{props.alta}</div>
                    // </div>
                )}
            </Item>
            <Item<HTMLImageElement>
                cropped
                original={props.originalb}
                thumbnail={props.thumbnailb}
                width={props.widthb}
                height={props.heightb}
                alt={props.altb}
            >
                {({ ref, open }) => (
                    <img
                        style={smallItemStyles}
                        src={props.thumbnailb}
                        ref={ref}
                        onClick={open}
                    />
                )}
            </Item>
        </div >
    </Gallery >
)

