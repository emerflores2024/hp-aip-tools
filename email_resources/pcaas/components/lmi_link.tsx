'use client'

import { Button, Tooltip } from "flowbite-react";
import { Clipboard } from "flowbite-react";

export default function LMILink(props: any) {
    const subject = `HP Laptop Subscription Support: Remote Connection Link`;

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
                <div className="w-full h-16 rounded-lg bg-gradient-to-r from-emerald-700 to-cyan-600 flex justify-between items-center px-5">
                    <h1 className="text-lg font-bold text-white">Hello, {props.customer}</h1>
                    <div><img className="h-10" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></img></div>
                </div>
                <div className="w-full mt-5 px-5">
                    <p className="text-white text-center">
                        As part of our troubleshooting process to help you with your laptop, we are required to perform a remote connection. Please click on the following button to be directed to the remote connection website, where you will be asked for a 9-digit code that I will provide you:
                    </p>
                    <br></br>
                    <div className="mt-3 w-full flex justify-center">
                        <a href="https://hp.com/555" className="text-sm w-fit border border-gray-400 rounded-lg p-3 text-gray-200">Click here to start the remote connection</a>
                    </div>
                    <br></br>
                </div>
            </div>
        </>
    );
}