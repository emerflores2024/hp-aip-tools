'use client'

import { useUser } from "@/app/context_provider";
import { Button, Tooltip } from "flowbite-react";
import { Clipboard } from "flowbite-react"

export default function EscalationResolution(props: any) {
    const subject = `HP All-In Plan Support: Escalation resolution - Case #${props.case_id}`;
    const { userName, setUserName } = useUser();

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
                    <p className="text-white text-justify">
                        This email is just to inform you about the resolution of the most recent case you have opened with us and that was escalated a couple of days ago. This is the resolution provided by our support team:
                    </p>
                    <br></br>
                    <p className="text-white text-justify italic">
                        {props.resolution}
                    </p>
                    <br></br>
                    <p className="text-white text-justify">
                        If you still have any questions about the resolution, you can reply back to this email or you can contact us back and we will be more than happy to help you. Take care and have a wonderful day!
                    </p>
                    <br></br>
                    <p className="text-white text-justify">
                        Here is your case number for future reference: <strong>{props.case_id}</strong>
                    </p>
                    <br></br>
                    <br></br>
                    <div className="flex flex-row items-center">
                        <div>
                            <img className="h-20" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white text-justify">
                                <strong>{userName}</strong>
                            </p>
                            <p className="text-white text-justify">
                                HP 24/7 Pro Support | All-In Plan
                            </p>
                            <p className="text-white text-justify">
                                +1 888-447-0148
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-300 mt-16 text-sm text-center w-full lg:w-4/5 mx-auto">
                        This email was sent to alert you about important updates to your HP account. You can manage your account online by going to <a className="text-cyan-400" href="https://hpsmart.com">https://hpsmart.com</a> | © Copyright 2024 HP Development Company, L.P.
                    </p>
                </div>
            </div>
        </>
    );
}