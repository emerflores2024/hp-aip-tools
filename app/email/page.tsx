'use client'

import { Clipboard } from "flowbite-react"
import { Label, Select } from "flowbite-react";
import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import first_pca from "@/email_templates/first_pca";

export default function Email(this: any) {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubjectChange = (event: any) => {
        setSelectedSubject(event.target.value);
    };

    const handleCaseInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    };

    function copyEmail(){
        const email_body = first_pca;
        if(email_body){
            const blob = new Blob([email_body], { type: 'text/html' });
            const clipboardItem = new window.ClipboardItem({ 'text/html': blob });
            navigator.clipboard.write([clipboardItem]).then(
                () => setSuccess(true),
            );
        }
       
    }

    return (
        <>
            <div className="flex flex-col xl:flex-row gap-4 items-start">
                <form className="w-full md:w-4/5 md:mx-auto xl:w-96 flex flex-col gap-4 shrink-0">
                    <div className="rounded-lg">
                        <div className="mb-2 block">
                            <Label htmlFor="subjects" value="Email template" />
                        </div>
                        <Select id="subjects" required onChange={handleSubjectChange} value={selectedSubject}>
                            <option value="" disabled selected>-- Select a template --</option>
                            <option value="replacement_confirmation">Replacement confirmation</option>
                            <option value="ink_replenishment">Cartridges sent</option>
                            <option value="lmi_link">LMI Link</option>
                            <option value="escalation_resolution">Escalation resolution</option>
                            <option value="first_pca">First follow up</option>
                            <option value="second_pca">Second follow up</option>
                            <option value="final_pca">Final follow up | Case closure</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="customer" value="Customer's name" />
                        </div>
                        <TextInput id="customer" placeholder="e.g.: Jhon Doe" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="case" value="Case number" />
                        </div>
                        <TextInput id="case" placeholder="e.g.: 5125963258" type="text" sizing="md" maxLength={10} pattern=".{10}" onInput={handleCaseInput} required />
                    </div>


                    <div className="w-full mt-2"><Button className="w-full" onClick={copyEmail} color="blue">Generate email</Button></div>

                </form>

                <div id="email_body" className="w-full px-0 xl:px-10 md:w-4/5 md:mx-auto">
                    <div className="w-full h-16 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-600 flex justify-between items-center px-5">
                        <h1 className="text-lg font-bold text-white">Hello, Emersito</h1>
                        <div><img className="h-10" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></img></div>
                    </div>
                    <div className="w-full mt-5 px-5">
                        <p className="text-white text-justify">
                            After our last conversation, we have kept your case opened to give you a follow up and we have tried to contact you back via phone/email, but we have been unsuccessful.
                        </p>
                        <br></br>
                        <p className="text-white text-justify">
                            If you still need assistance from us or require any further help in any other related matter, please contact us back quoting your case number or if you consider that the issue has been addressed, you can reply back to this email, so we can close your case.
                        </p>
                        <br></br>
                        <p className="text-white text-justify">
                            I would like to thank you once again for your cooperation and patience throughout this process, and if there is anything else you would like me to cover for you, please contact us back and we will be more than happy to help you. Take care and have a nice day!
                        </p>
                        <br></br>
                        <p className="text-white text-justify">
                            Here is your case number for future reference: <strong>5151231321</strong>
                        </p>
                        <br></br>
                        <br></br>
                        <div className="flex flex-row items-center">
                            <div>
                                <img className="h-20" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-justify">
                                    <strong>Emerson</strong>
                                </p>
                                <p className="text-white text-justify">
                                    HP 24/7 Pro Support | All-In Plan
                                </p>
                                <p className="text-white text-justify">
                                    +1 888-447-0148
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}