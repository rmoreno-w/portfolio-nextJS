import { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    isHomePage?: boolean;
};

export function Container({ children, isHomePage }: ContainerProps) {
    const valueMarginTop = 1.5 * 16 + 80;

    return (
        <>
            <main
                className={` relative mx-4 py-6 px-6 my-6 sm:py-12 sm:px-16 sm:m-20 desktop:px-24 desktop:py-12 large:px-32 large:py-16 desktop:mx-28 desktop:my-16  
                            max-w-[1520px] largest:mx-auto
                            flex flex-col gap-6 sm:gap-12 justify-center items-center
                            bg-projectWhite/50 backdrop-blur-2xl border border-projectBlack-10
                            purple-Shadow rounded-[20px] ${
                                isHomePage ? ' desktop:flex-row-reverse desktop:py-32' : ''
                            }`}
            >
                {children}
            </main>
        </>
    );
}
