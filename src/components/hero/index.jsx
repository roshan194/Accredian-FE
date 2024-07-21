import ReferralModal from '../modal'
import { useState } from 'react';

const Hero = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="flex items-center justify-center">
            <div
                className="h-10 rounded-md flex py-[8px] px-[18px] bg-[#1A73E8] gap-1 items-center w-[fit-content] cursor-pointer"
                onClick={handleOpen}
            >
                <p className="text-white font-medium text-base text-nowrap">Refer</p>
            </div>
            <ReferralModal open={open} handleClose={handleClose} />
        </div>
    );
};

export default Hero;