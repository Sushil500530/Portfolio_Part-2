import Swal from "sweetalert2";
import { MdContactPhone } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_yaskyb9",
                "template_4pto5wb",
                form.current,
                "nGBs8w8pheW6v3DRU"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        title: "Congrates🎉",
                        text: "Your Information has been Sent..",
                        icon: "success",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div id="contact" className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Contect Me</h1>
            <hr className='w-44 border-b-2 border-fuchsia-600 mt-2' />
            <div className="w-full flex-col lg:flex-row flex bg-gradient-to-l from-[#40407a] to-black text-gray-400 px-6 rounded-lg py-12 items-center justify-center space-y-3 gap-10 mt-10">
                <div data-aos="fade-up" data-aos-duration="3000" className="w-full lg:w-1/2">
                    <div>
                        <img src="https://i.ibb.co/cgcYzH1/Contact-Us-png-1.png" alt="Contact" />
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="w-full lg:w-1/2">
                    <div className="form text-white">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="mb-5 space-y-3">
                                <label className="text-base font-medium">Name*</label>
                                <input type="text" name="from_name" className=" w-full h-12 bg-black px-3 text-[18px] focus:border outline-none focus:border-[#7d5fff]" placeholder='Enter Your Name....' id="name" required />
                            </div>
                            <div className="mb-5 space-y-3">
                                <label className="font-medium">Email Address*</label>
                                <input type="email" name="from_email" className="w-full h-12 bg-black px-3 text-[18px] focus:border outline-none focus:border-[#7d5fff] " placeholder='Enter Your Email....' id="email" required />
                            </div>
                            <div className="space-y-3">
                                <label className="font-medium mt-3">Message*</label>
                                <textarea placeholder="Send Message..." name="message" className="textarea textarea-bordered focus:border-[#7d5fff] textarea-md w-full bg-black px-3 text-[18px]" required ></textarea>
                            </div>
                            <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-base lg:text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'><span><MdContactPhone /></span>Contact Me</button>
                        </form>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"></div>
            </div>
        </div>
    );
};

export default Contact;