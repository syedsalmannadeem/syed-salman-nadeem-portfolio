
<!--Exit Indent Modal Start-->
<div class="exit-intent-popup-ssn exit-intent" id="modalExitIntent">
    <div class="newsletter-ssn relative">
        <div class="absolute top-0 right-0 bg-[#87C33F] h-full md:w-[300px] w-[150px] z-[-1]"></div>
        <img src="assets/images/exit-p1.webp?v=1" class="absolute top-24 right-0 w-[100px]" alt="">
        <img src="assets/images/exit-p2.webp?v=1" class="absolute bottom-0 right-[150px] w-[200px] z-[-1]" alt="">


        <div class="grid grid-cols-12 items-center relative h-full">

            <div class="lg:col-span-7 md:col-span-6 col-span-12 md:block hidden relative h-full">
                <img src="assets/images/exit-left.webp?v=4" alt="exit-left" class="w-full h-full">
                <img src="assets/images/exit-p3.webp" class="absolute top-5 right-[-20px] w-[80px]" alt="">
                <img src="assets/images/exit-p4.webp?v=2" class="absolute bottom-24 right-[-120px] w-[200px] z-[-1]" alt="">
                <img src="assets/images/aussie-popup-girl.webp?v=2" class="absolute top-24 right-[-120px] h-full" alt="">

            </div>
            <div class="lg:col-span-5 md:col-span-6 col-span-12 z-[0]">
                <h2 class="text-[#1A1A1A] text-center unbound-medium lg:text-[20px]  leading-[1.2] text-[18px] capitalize mb-6 max-w-[400px] mx-auto">
                    further reduction: 90% off on <span class="unbound-semibold">your order</span>. Act now
                </h2>
                <div class="border border-[#000]/40 p-6 bg-[#fff] xl:w-7/12 sm:w-10/12 w-full mx-auto realtive z-[0]">
                    <form action="send.php" method="post" class="w-full">
                        <div class="grid grid-cols-12 gap-5 gap-y-5">
                            <div class="col-span-12">
                                <h2 class="text-[#1A1A1A] text-center unbound-medium lg:text-[16px]  leading-[1.2] text-[14px] uppercase">
                                    make great designs <span class="text-[#87C33F] block">that perform</span>
                                </h2>
                            </div>
                            <div class="relative col-span-12">
                                <label for="name" class="block mb-1 text-[#5D5D5D] px-2 text-[13px] bg-white absolute lg:top-[-5px] top-0 left-[20px]">Your Name</label>
                                <input id="name"
                                    class="required text-[13px] lg:mt-1 mt-2 w-full md:h-[50px] h-[40px] border-2 border-[#CCCCCC] px-4 items-center bg-white rounded-[5px] placeholder:text-[#798584]"
                                    placeholder="Robert" required="" name="name" type="text">
                            </div>
                            <div class="relative col-span-12">
                                <label for="phone_number" class="block mb-1 text-[#5D5D5D] px-2 text-[13px] bg-white absolute lg:top-[-5px] top-0 left-[20px]">Phone Number</label>
                                <input id="phone_number"
                                    class="required text-[13px] lg:mt-1 mt-2 w-full md:h-[50px] h-[40px] border-2 border-[#CCCCCC] px-4 items-center bg-white rounded-[5px] placeholder:text-[#798584]"
                                    placeholder="info@example.com" required="" name="phone_number" type="number">
                            </div>
                            <div class="relative col-span-12">
                                <label for="email" class="block mb-1 text-[#5D5D5D] px-2 text-[13px] bg-white absolute lg:top-[-5px] top-0 left-[20px]">Your Email</label>
                                <input id="email"
                                    class="required lg:mt-1 text-[13px] mt-2 w-full md:h-[50px] h-[40px] border-2 border-[#CCCCCC] px-4 items-center bg-white rounded-[5px] placeholder:text-[#798584]"
                                    placeholder="+1234567890" required="" name="email" type="email">
                            </div>
                            <div class="relative col-span-12">
                                <label for="message" class="block mb-1 text-[#5D5D5D] px-2 text-[13px] bg-white absolute lg:top-[-5px] top-0 left-[20px]">Your Message</label>
                                <textarea id="message"
                                    class="pt-3 required lg:mt-1 mt-2 text-[13px] w-full border-2 border-[#CCCCCC] px-4 items-center bg-white rounded-[5px] placeholder:text-[#798584]"
                                    cols="5" placeholder="type your message" name="message" rows="4"></textarea>
                            </div>
                            <div class="col-span-12 mx-auto">
                                <button type="submit">
                                    <span class="block group overflow-hidden relative bg-gradient-to-r from-[#87C33F] to-[#197938] text-[#fff] unbound-medium 2xl:text-[16px] text-[14px] lg:py-4 py-4 lg:px-8 px-3  rounded-full uppercase
                                                             transition-all ease-in-out duration-300">
                                        <span class="bg-[#87C33F] h-[155px] opacity-0 absolute top-[-50px] rotate-[35deg] w-[30px] left-[-50px] transition-all duration-[1200ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)] group-hover:left-[120%] group-hover:opacity-[0.5]">
                                        </span>
                                        <span class="bg-[#87C33F] h-[155px] opacity-0 absolute top-[-50px] rotate-[35deg] w-[30px] left-[-100px] transition-all duration-[1200ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)] group-hover:left-[200%] group-hover:opacity-[0.5]">
                                        </span>
                                        Submit form
                                    </span>
                                    
                                </button>
                                 <?php include("includes/hiddenfield.php"); ?> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <button class="close-ssn group flex justify-center items-center" id="closeExitIntent">
            <svg aria-hidden="true" class="w-6 h-6 text-[#fff] hover:rotate-[180deg] transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
    </div>
</div>
<!--Exit Indent Modal End-->