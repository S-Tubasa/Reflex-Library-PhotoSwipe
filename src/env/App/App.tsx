import type { FC } from 'react';

import { Counter } from '@/lib';
import './index.css';
import 'photoswipe/dist/photoswipe.css';

const App: FC = () => {
    return (
        <div>
            <Counter
                originala="https://placehold.jp/832x1216.png"
                thumbnaila="https://placehold.jp/832x1216.png"
                originalb="https://placehold.jp/1216x832.png"
                thumbnailb="https://placehold.jp/1216x832.png"
                widtha="832"
                heighta="1216"
                widthb="1216"
                heightb="832"
                alta="Image a"
                altb="Image b"
            />
        </div>
    );
};

export default App;
