'use client'

import { Button, Tooltip } from "flowbite-react";
import { Clipboard } from "flowbite-react";

export default function LMILink(props: any) {
    const subject = `HP All-In Plan Support: Remote Connection Link`;

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
                        As part of our troubleshooting process to help you with your device, we are required to perform a remote connection. Please click on the following button to be directed to the remote connection website, where you will be asked for a 9-digit code that I will provide you:
                    </p>
                    <br></br>
                    <div className="mt-3 w-full flex justify-center">
                        <a href="https://hp.com/555" className="text-sm w-fit border border-gray-400 rounded-lg p-3 text-gray-200">Click here to start the remote connection</a>
                    </div>
                    <br></br>
                    
                    <div className="relative flex items-center justify-center w-full">
                        <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
                        <span className="absolute px-3 text-sm text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-gray-200 dark:bg-gray-800 text-center">or if you are using a mobile device</span>
                    </div>

                    
                    <br></br>
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://apps.apple.com/us/app/rescue-mobile/id661269562">
                            <img className="w-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.logmein.rescuemobile&hl=en_US">
                            <img className="w-40" src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}