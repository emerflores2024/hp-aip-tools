'use client'

import { Button, Tooltip } from "flowbite-react";
import { Clipboard } from "flowbite-react";

export default function LMILink(props: any) {
    const subject = `HP All-In Plan Support: Remote Connection Link`;
    const user = localStorage.getItem('user')

    return (
        <>
            <div className="w-full flex justify-between items-center mt-7">
                <div className="w-full xl:w-fit">
                    <Tooltip content={props.tooltip}>
                        <Button onClick={props.copyEmail} color="blue">Copy email</Button>
                    </Tooltip>
                </div>
                <div className="grid w-full xl:w-1/2 xl:order-last">
                    <div className="relative">
                        <label htmlFor="subject" className="sr-only">
                            Label
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-4 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            value={subject}
                            disabled
                            readOnly
                        />
                        <Clipboard.WithIconText valueToCopy={subject} />
                    </div>
                </div>

            </div>
            <div id="email_body" className="mt-7">
                <div className="w-full h-16 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-600 flex justify-between items-center px-5">
                    <h1 className="text-lg font-bold text-white">Hello, {props.customer}</h1>
                    <div><img className="h-10" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></img></div>
                </div>
                <div className="w-full mt-5 px-5">
                    <p className="text-white text-center">
                        As part of our troubleshooting process to help you with your device, we are required to perform a remote connection. Please click on the following button to be directed to the remote connection website, where you will be asked for a 9 digit code that I will provide you:
                    </p>
                    <br></br>
                    <div className="mt-3 w-full flex justify-center">
                        <a href="https://hp.com/555" className="text-sm w-fit border border-gray-400 rounded-lg p-3 text-gray-200">Click here to start the remote connection</a>
                    </div>
                    <br></br>
                    
                    <div className="relative flex items-center justify-center w-full">
                        <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute px-3 text-sm text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-gray-200 dark:bg-gray-800">or if you are using an smartphone</span>
                    </div>

                    
                    <br></br>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                        <a
                        href="https://apps.apple.com/us/app/rescue-mobile/id661269562"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        >
                        <svg
                            className="mr-3 h-7 w-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="apple"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            />
                        </svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">Download on the</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                        </div>
                        </a>
                        <a
                        href="https://play.google.com/store/apps/details/Rescue_Mobile_for_Android?id=com.logmein.rescuemobile"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                        >
                        <svg
                            className="mr-3 h-7 w-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google-play"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                            fill="currentColor"
                            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                            />
                        </svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">Get in on</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                        </div>
                        </a>
                    </div>
                    <p className="text-gray-300 mt-16 text-sm text-center w-full lg:w-4/5 mx-auto">
                        This email was sent to alert you about important updates to your HP account. You can manage your account online by going to <a className="text-cyan-400" href="https://hpsmart.com">https://hpsmart.com</a> | © Copyright 2024 HP Development Company, L.P.
                    </p>
                </div>
            </div>
        </>
    );
}