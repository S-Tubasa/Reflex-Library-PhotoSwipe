// import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'

// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin' // @ts-expect-error



const smallItemStylesLandscape: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    aspectRatio: '1216/832',
};

const smallItemStylesPortrait: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    aspectRatio: '832/1216',
};


// TODO: reflexでインポートすると_が何故か使えない
export interface CounterProps {
    original: string;
    thumbnail: string;
    width: string;
    height: string;
    type: string;
}

export const Counter = (props: CounterProps) => {
    const style = props.type === 'Landscape' ? smallItemStylesLandscape : smallItemStylesPortrait;
    return (
        <Gallery>
            <Item
                cropped
                original={props.original}
                thumbnail={props.thumbnail}
                width={props.width}
                height={props.height}
            >
                {({ ref, open }) => <img style={style} ref={ref} onClick={open} src={props.thumbnail} />}
            </Item>
        </Gallery >
    );
};


