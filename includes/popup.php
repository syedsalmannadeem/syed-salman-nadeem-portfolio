<div id="popup-global" tabindex="-1" class="bg-[#000]/60  fixed top-0 z-[999999] left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full mx-auto flex justify-center items-center hidden">
    <div class="">
        <div class="relative w-full max-w-[850px] h-auto z-[0] mx-auto">
            <img src="assets/images/popup-p1.webp" class="sm:block hidden absolute bottom-0 left-0 w-[150px]" alt="">
            <img src="assets/images/flag-p.webp" class="sm:block hidden absolute top-0 left-0 rounded-tl-[30px] lg:w-[250px] w-[150px]" alt="">

            <button type="button" aria-label="button" class="absolute top-[-10px] right-[-10px] text-[#023047] rounded-full text-sm p-1.5 ml-auto inline-flex items-center z-[3] max-w-[30px] max-h-[30px] bg-gradient-to-r from-[#87C33F] to-[#197938]" onclick="closeModal('popup-global')">
                <svg aria-hidden="true" class="w-8 h-8 text-[#fff]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="grid grid-cols-12 bg-[#87affa] bg-[url(assets/images/popupbg2.webp?v=2)] items-center bg-no-repeat bg-[length:100%_100%] rounded-[30px] bg-center">
                <div class="sm:col-span-6 sm:block hidden h-full">

                    <img src="assets/images/popup-girl.webp" class="ml-auto w-9/12 h-full" alt="">
                </div>
                <div class="sm:col-span-6 col-span-12 relative z-[2] md:p-5 p-3">
                    <div class="bg-[#000]/40 md:border-4 border-2 border-[#fff] md:backdrop-blur-none backdrop-blur-sm bg-transparent lg:p-6 md:p-4 rounded-[30px] relative">

                        <div class="flex flex-col items-start justify-center h-full lg:px-0 md:py-0 py-5 px-3">

                            <h2 class="text-[#fff] lg:text-[20px] md:text-[18px] text-[16px] text-center mx-auto font-bold mb-5 leading-[1.1]">
                                ACTIVATE YOUR
                                COUPON
                            </h2>




                            <form action="send.php" method="post" class="w-full app_contact_form3">
                                <div class="grid grid-cols-12 gap-5 gap-y-3">
                                    <div class="col-span-12">
                                        <input type="text" class="required h-[40px] bg-[#FFFFFF] required px-3 lg:placeholder:text-[14px] placeholder:text-[12px] text-[#868686] border-[1px] border-[#CCCCCC] focus:outline-none w-full rounded-[8px]" placeholder="Name" name="name" required="">
                                    </div>
                                    <div class="col-span-12">
                                        <input type="email" class="required h-[40px] bg-[#FFFFFF] required px-3 lg:placeholder:text-[14px] placeholder:text-[12px] text-[#868686] border-[1px] border-[#CCCCCC] focus:outline-none w-full rounded-[8px]" placeholder="Email Address" name="email" required="">
                                    </div>
                                    <div class="col-span-12">
                                        <input type="tel" class="required h-[40px] bg-[#FFFFFF] required px-3 lg:placeholder:text-[14px] placeholder:text-[12px] text-[#868686] border-[1px] border-[#CCCCCC] focus:outline-none w-full rounded-[8px]" placeholder="Phone No" name="phone_number" required="">
                                    </div>
                                    <div class="col-span-12">
                                        <textarea name="message" placeholder="Message" cols="30" rows="4" class="pt-3 bg-[#FFFFFF] px-3 placeholder:text-[16px] text-[#868686] border-[1px] border-[#CCCCCC] focus:outline-none w-full rounded-[8px]"></textarea>
                                    </div>
                                    <div class="col-span-12">

                                        <a class="flex gap-2" href="mailto:<?php echo contactEmail() ?>">
                                            <img src="assets/images/map.webp" class="" alt="">
                                            <p class="lg:text-[14px] text-[12px] text-[#fff]"><?php echo contactEmail() ?></p>
                                        </a>

                                    </div>

                                    <div class="col-span-12">

                                        <button type="submit">
                                            <span class="block group overflow-hidden relative bg-gradient-to-r from-[#87C33F] to-[#197938] text-[#fff] unbound-medium 2xl:text-[16px] text-[14px] lg:py-4 py-4 lg:px-8 px-3  rounded-full uppercase
                                                         transition-all ease-in-out duration-300">
                                                <span class="bg-[#87C33F] h-[155px] opacity-0 absolute top-[-50px] rotate-[35deg] w-[30px] left-[-50px] transition-all duration-[1200ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)] group-hover:left-[120%] group-hover:opacity-[0.5]">
                                                </span>
                                                <span class="bg-[#87C33F] h-[155px] opacity-0 absolute top-[-50px] rotate-[35deg] w-[30px] left-[-100px] transition-all duration-[1200ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)] group-hover:left-[200%] group-hover:opacity-[0.5]">
                                                </span>
                                                Activate now
                                            </span>

                                        </button>
                                        <?php include("includes/hiddenfield.php"); ?>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    </div>
</div>