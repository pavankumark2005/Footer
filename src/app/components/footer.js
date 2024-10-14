import React from "react";
import Rect from "footer";


const Footer = () => {
    return (
                

        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                {/* Team Section */}
                <div className="flex flex-col items-start gap-2">
                    <h1 className="mb-2 font-medium">Team</h1>
                    <a href="/contact" className="inline text-black-250 hover:text-white">Contact Us</a>
                    <a href="/join-us" className="inline text-black-250 hover:text-white">Join Our Team</a>
                    <a href="/ambassador" className="inline text-black-250 hover:text-white">Become an Ambassador</a>
                </div>

                {/* Products Section */}
                <div className="flex flex-col items-start gap-2">
                    <h1 className="mb-2 font-medium">Products</h1>
                    <a href="/nomad-insurance" className="inline text-black-200 hover:text-white">Nomad Insurance</a>
                    <a href="/remote-health" className="inline text-black-200 hover:text-white">Remote Health</a>
                    <a href="/nomad-health" className="inline text-black-200 hover:text-white">Nomad Health</a>
                </div>

                {/* Legal Section */}
                <div className="flex flex-col items-start gap-2">
                    <h1 className="mb-2 font-medium">Legal</h1>
                    <a href="/terms-and-conditions" className="inline text-blue-200 hover:text-white">Terms and Conditions</a>
                    <a href="/privacy-policy" className="inline text-blue-200 hover:text-white">Privacy Policy</a>
                </div>
            </div>
                    <h1>SocialMedia</h1>
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-sm font-medium text-white min-[1100px]:text-xs">Social</h1>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/safetywing" target="_blank" aria-label="facebook" className="h-10 w-10 opacity-80 transition duration-200 hover:opacity-100 min-[1100px]:h-[30px] min-[1100px]:w-[30px]" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 153" className="h-10 w-10 min-[1100px]:h-[30px] min-[1100px]:w-[30px]">
                                <g id="Group_30" data-name="Group 30" transform="translate(0 -0.011)">
                                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="76.5" cy="76.5" r="76.5" transform="translate(0 0.011)" fill="#ffffff"></circle>
                                    <g id="Group_25" data-name="Group 25" transform="translate(49.877 30.643)">
                                        <path id="Path_57" data-name="Path 57" d="M71.307.019,59.037,0C45.252,0,36.343,8.895,36.343,22.661V33.11H24.006a1.9,1.9,0,0,0-1.929,1.879V50.127A1.9,1.9,0,0,0,24.006,52H36.343V90.2a1.9,1.9,0,0,0,1.929,1.878h16.1A1.9,1.9,0,0,0,56.3,90.2V52H70.723a1.9,1.9,0,0,0,1.929-1.878l.006-15.139a1.855,1.855,0,0,0-.565-1.328,1.957,1.957,0,0,0-1.365-.551H56.3V24.252c0-4.257,1.042-6.418,6.741-6.418l8.266,0a1.9,1.9,0,0,0,1.928-1.878V1.9A1.9,1.9,0,0,0,71.307.019Z" transform="translate(-22.077)" fill="#273c49"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="https://twitter.com/safetywing" target="_blank" aria-label="twitter" className="h-10 w-10 opacity-80 transition duration-200 hover:opacity-100 min-[1100px]:h-[30px] min-[1100px]:w-[30px]" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 153" className="h-10 w-10 min-[1100px]:h-[30px] min-[1100px]:w-[30px]">
                                <g id="Group_29" data-name="Group 29" transform="translate(-0.009 -0.011)">
                                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="76.5" cy="76.5" r="76.5" transform="translate(0.009 0.011)" fill="#ffffff"></circle>
                                    <path id="Path_58" data-name="Path 58" d="M76.827,14.819A18.924,18.924,0,0,0,57.751,33.556c0,1.939.659,3.23.659,4.518a53.69,53.69,0,0,1-38.8-19.366,14.63,14.63,0,0,0-2.637,9.036c0,6.457,3.292,11.64,8.555,16.162a33.371,33.371,0,0,1-8.555-2.59c0,9.043,6.574,16.151,15.121,18.086a14.621,14.621,0,0,1-5.263.647c-.659,0-1.981-.647-3.3-.647,2.633,7.108,9.21,12.91,17.758,12.91-6.574,4.521-15.128,7.755-23.676,7.755h-4.6a55.984,55.984,0,0,0,28.935,8.406c34.856,0,53.929-28.427,53.929-52.974v-2.59a43.88,43.88,0,0,0,9.218-9.7,36.522,36.522,0,0,1-11.181,3.237c3.944-2.579,7.233-5.813,8.544-10.334a32.3,32.3,0,0,1-11.84,4.521C87.333,16.761,82.089,14.819,76.827,14.819Z" transform="translate(17.538 23.498)" fill="#273c49"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/safetywing" target="_blank" aria-label="instagram" className="h-10 w-10 opacity-80 transition duration-200 hover:opacity-100 min-[1100px]:h-[30px] min-[1100px]:w-[30px]" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 153" className="h-10 w-10 min-[1100px]:h-[30px] min-[1100px]:w-[30px]">
                                <g id="Group_28" data-name="Group 28" transform="translate(-0.018 -0.011)">
                                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="76.5" cy="76.5" r="76.5" transform="translate(0.018 0.011)" fill="#ffffff"></circle>
                                    <path id="Path_59" data-name="Path 59" d="M31.829,6.25A25.583,25.583,0,0,0,6.25,31.829V72.752A25.583,25.583,0,0,0,31.829,98.331H72.752A25.583,25.583,0,0,0,98.331,72.752V31.829A25.583,25.583,0,0,0,72.752,6.25ZM82.984,16.482A5.115,5.115,0,1,1,77.869,21.6,5.116,5.116,0,0,1,82.984,16.482ZM52.291,26.712A25.579,25.579,0,1,1,26.712,52.291,25.583,25.583,0,0,1,52.291,26.712Zm0,10.232A15.347,15.347,0,1,0,67.637,52.291,15.346,15.346,0,0,0,52.291,36.944Z" transform="translate(24.173 24.393)" fill="#273c49"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCotagRRzqxRZ4nAECs6vASQ" target="_blank" aria-label="youtube" className="h-10 w-10 opacity-80 transition duration-200 hover:opacity-100 min-[1100px]:h-[30px] min-[1100px]:w-[30px]" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 153" className="h-10 w-10 min-[1100px]:h-[30px] min-[1100px]:w-[30px]">
                                <g id="Group_27" data-name="Group 27" transform="translate(-0.027 -0.011)">
                                    <circle id="Ellipse_9" data-name="Ellipse 9" cx="76.5" cy="76.5" r="76.5" transform="translate(0.027 0.011)" fill="#ffffff"></circle>
                                    <path id="Path_60" data-name="Path 60" d="M94.323,18.4a11.536,11.536,0,0,0-8.139-8.139C79,8.333,50.208,8.333,50.208,8.333s-28.794,0-35.976,1.925A11.542,11.542,0,0,0,6.09,18.4C4.167,25.58,4.167,45.167,4.167,45.167s0,19.585,1.923,26.767a11.542,11.542,0,0,0,8.142,8.142C21.414,82,50.208,82,50.208,82S79,82,86.184,80.076a11.528,11.528,0,0,0,8.139-8.139c1.925-7.185,1.925-26.77,1.925-26.77S96.248,25.58,94.323,18.4ZM41,61.116v-31.9L68.623,45.167Z" transform="translate(26.121 29.983)" fill="#273c49"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/safetywing" target="_blank" aria-label="linkedin" className="h-10 w-10 opacity-80 transition duration-200 hover:opacity-100 min-[1100px]:h-[30px] min-[1100px]:w-[30px]" rel="noopener">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 min-[1100px]:h-[30px] min-[1100px]:w-[30px]">
                                <g id="OUTLINE_copy_2">
                                    <g>
                                        <path fill="#ffffff" d="M16,0C7.164,0,0,7.163,0,16c0,8.836,7.164,16,16,16s16-7.164,16-16C32,7.163,24.836,0,16,0z M11.844,22.277H8.58v-9.82 h3.264V22.277z M10.212,11.116h-0.021c-1.096,0-1.804-0.755-1.804-1.697c0-0.963,0.73-1.696,1.846-1.696 c1.116,0,1.804,0.733,1.825,1.696C12.058,10.362,11.349,11.116,10.212,11.116z M23.613,22.277L23.613,22.277l-3.264,0v-5.254 c0-1.32-0.472-2.22-1.654-2.22c-0.901,0-1.438,0.607-1.674,1.194c-0.086,0.21-0.108,0.503-0.108,0.796v5.484H13.65 c0,0,0.043-8.898,0-9.82h3.264v1.391c0.433-0.669,1.209-1.622,2.942-1.622c2.147,0,3.757,1.404,3.757,4.42V22.277z"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-5 text-xs text-bluewood-200">©2024, Safety Nest, Inc. All rights reserved.</p>
                </div>
            </div>
    
        </footer>
    );
};

export default Footer;
