'use client'

import { useUser } from "@/app/context_provider";
import { Button, Tooltip } from "flowbite-react";
import { Clipboard } from "flowbite-react"

export default function Spectrum(props: any) {
    const subject = `HP All-In Plan Support: Spectrum information - Case #${props.case_id}`;

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
                        During our conversation we discussed that HP is currently aware of a small issue with some Spectrum routers, that prevents from the printer to connect correctly to your Wi-Fi network. The reason behind it, is that those routers come with some specific ports disabled by default, however, your new HP printer under the All-In Plan subscription needs those ports to connect and communicate correctly with the HP Servers.
                    </p>
                    <br></br>
                    <p className="text-white text-justify">
                        We kindly ask you to please contact Spectrum, so they can open the required ports on your router. Please find below the list of ports that need to be opened (you can forward this email to Spectrum so they can use it for reference when you contact them):
                    </p>
                    <br></br>
                    <ul className="text-white text-justify list-disc list-inside">
                        <li>Incoming (UDP) ports: 137, 138, 161, 427 </li>
                        <li>Outgoing (TCP) ports: 137, 139, 427, 9100, 9220, 9500 </li>
                        <li>Web services: 80, 443, 5222, 5223.</li>
                    </ul>
                    <br></br>
                    <p className="text-white text-justify">
                        Once you contact Spectrum and they are able to open the ports, feel free to contact us back so we can help you to complete the setup of your printer.
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
                                <strong>{props.user}</strong>
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