import ReferralModal from '../modal'
import { useState } from 'react';

const Hero = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-black font-medium text-base text-nowrap mt-9">Refer & Earn</p>
            <img src='https://s3-alpha-sig.figma.com/img/f8bf/9271/2c05e77a4b76d26c35bb05a554cb6838?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCEL5dcPrIEYoe8w6frkh0lXLLj-Nm0SqTYpYfgaGc1Ug-HZHsr3pBBN10IkZvg9aTR3tPLFv~~zx6ElFqlyvyYS7q8qF8HWiFQ2hySDXIFL5bpZ04q8ggm822hGPfFUJ1IEGAiVvF5c7R9tRs9-TaSJLVloFXvQ9RhaVs1VxGVVwKD3AoiN8Y0Yar5zwLLJCW3zEa9WHBbn3wmJYrT0q~Lv55J7uhsSPS~nZ2wKk-N3KUljvpVa-QsCkQ8NRE69JNRXVQOCwytik1O1pvts2tOTlecyQoyKPkoif8nuQWQZlZaKhJOzbRhT1v-NnvQ8t2Ptixsbl1D0cSRhn-5MAQ__'
                style={{ height: "50vh" }}
            />

            <div
                className="h-10 rounded-md flex py-[8px] px-[18px] bg-[#1A73E8] hover:bg-[#1557b6] gap-1 items-center w-[fit-content] cursor-pointer"
                onClick={handleOpen}
            >
                <p className="text-white font-medium text-base text-nowrap">Refer</p>
            </div>
            <ReferralModal open={open} handleClose={handleClose} />
        </div>
    );
};

export default Hero;