import { useEffect, useState } from 'react';

export default function useWindowWidth() {
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        function resizeHandler() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', resizeHandler);
        setWidth(window.innerWidth);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return width;
}
