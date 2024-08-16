'use client'

import { Clipboard } from "flowbite-react"
import { Label, Select } from "flowbite-react";
import { useState } from "react";
import { Textarea } from "flowbite-react";
import { Button, TextInput } from "flowbite-react";

export default function Email(this: any) {
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSubjectChange = (event: any) => {
        setSelectedSubject(event.target.value);
    };

    const handleCaseInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    };

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


                    <div className="w-full mt-2"><Button className="w-full" type="submit" color="blue">Generate email</Button></div>

                </form>

                <div className="w-full xl: mpx-10 md:w-4/5 md:mx-auto">
                    <div className="w-full h-16 rounded-lg bg-gradient-to-r from-purple-700 to-cyan-600 flex justify-between items-center px-5">
                        <h1 className="text-lg font-bold text-white">Hello, Emersito</h1>
                        <div><img className="h-10" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></img></div>
                    </div>
                </div>
            </div>

        </>
    )
}