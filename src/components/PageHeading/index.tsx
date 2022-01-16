import { ReactChild } from 'react';

type PageTitleProps = {
    color?: string;
    children: ReactChild | ReactChild[];
    centered?: boolean;
};

export function PageHeading({ color, children, centered }: PageTitleProps) {
    let finalClasses = 'text-2xl md:text-3xl font-serif font-bold';
    color ? (finalClasses = finalClasses.concat(finalClasses, ` ${color}`)) : null;
    centered
        ? (finalClasses = finalClasses.concat(finalClasses, ' text-center'))
        : (finalClasses = finalClasses.concat(finalClasses, ' self-start'));

    return <h1 className={finalClasses}>{children}</h1>;
}
