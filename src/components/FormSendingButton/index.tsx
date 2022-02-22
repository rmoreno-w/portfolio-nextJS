type FormSendingButtonProps = {
    sendingStatus: string;
    sendEmail: (e: any) => void;
    resetStatus: (e: any) => void;
    resetForm: (e: any) => void;
};
export function FormSendingButton({ resetStatus, resetForm, sendEmail, sendingStatus }: FormSendingButtonProps) {
    return (
        (sendingStatus == 'stale' && (
            <button
                className='bg-projectPurple text-projectWhite p-2 desktop:p-3 rounded-md transition duration-300 font-bold hover:brightness-90 mt-4 focus:ring focus:ring-projectPurple/70 focus:ring-offset-2 focus:ring-offset-projectWhite'
                onClick={sendEmail}
                type='submit'
            >
                Send your message
            </button>
        )) ||
        (sendingStatus == 'loading' && (
            <button
                className='bg-projectPurple text-projectWhite font-bold p-2 desktop:p-3 rounded-md mt-4 flex gap-4 justify-center content-center cursor-default'
                onClick={(e) => e.preventDefault()}
            >
                Sending e-mail...
                <div className='border-4 animate-spin border-projectWhite/30 border-t-projectGreen border-b-projectGreen rounded-[50%] h-6 w-6'></div>
            </button>
        )) ||
        (sendingStatus == 'sent' && (
            <>
                <button
                    className='border-2 border-projectGreen text-projectBlack font-bold p-2 desktop:p-3 rounded-md mt-4 cursor-default'
                    onClick={resetForm}
                >
                    Message sent! <span className='text-projectGreen font-bold text-lg '>✓</span>
                </button>
                <span className='flex justify-center text-sm'>Click the button to reset the form</span>
            </>
        )) || (
            <button
                className='bg-projectRed text-projectWhite font-bold p-2 desktop:p-3 rounded-md mt-4'
                onClick={resetStatus}
            >
                Error, click to try again
            </button>
        )
    );
}
