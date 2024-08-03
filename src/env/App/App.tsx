import type { FC } from 'react';

import { Counter } from '@/lib';
import './index.css';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';

const App: FC = () => {
    return (
        <div>
            <div className="image-grid">
                <div className="image-container">
                    < Counter
                        original="https://placehold.jp/1216x832.png"
                        thumbnail="https://placehold.jp/1216x832.png"
                        width="1216"
                        height="832"
                        type="Landscape"
                    />
                </div>
                <div className="image-container">
                    <Counter
                        original="https://placehold.jp/1230x838.png"
                        thumbnail="https://placehold.jp/1230x838.png"
                        width="1230"
                        height="838"
                        type="Landscape"
                    />
                </div>

            </div>

        </div>

    );
};

// const App: FC = () => {
//     return (
//         <div>
//             <Counter
//                 originala="https://placehold.jp/832x1216.png"
//                 thumbnaila="https://placehold.jp/832x1216.png"
//                 originalb="https://placehold.jp/1216x832.png"
//                 thumbnailb="https://placehold.jp/1216x832.png"
//                 widtha="832"
//                 heighta="1216"
//                 widthb="1216"
//                 heightb="832"
//                 alta="Image a"
//                 altb="Image b"
//             />
//         </div>
//     );
// };

export default App;
