import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
};

export function Container({ children }: ContainerProps) {
    const valueMarginTop = 1.5 * 16 + 80;

    return (
        <>
            <main
                // style={{ marginTop: valueMarginTop }}
                className={`mx-4 py-6 px-6 mt-6 sm:py-12 sm:px-16 sm:m-20 desktop:px-32 desktop:py-[6.5rem] desktop:mx-32 desktop:my-16  
            flex flex-col desktop:flex-row-reverse gap-6 justify-center items-center
            bg-projectWhite-[50] backdrop-blur-2xl border border-projectBlack-10
            purple-Shadow rounded-[20px]`}
            >
                {children}
            </main>
        </>
    );
}
