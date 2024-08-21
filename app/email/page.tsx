'use client'

import { Label, Select } from "flowbite-react";
import { FormEvent, useState, useRef, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import setFirstPCAEmail from "@/email_resources/templates/first_pca";
import setSecondPCAEmail from "@/email_resources/templates/second_pca";
import setFinalPCAEmail from "@/email_resources/templates/final_pca";
import FirstPCA from "@/email_resources/components/first_pca";
import SecondPCA from "@/email_resources/components/second_pca";
import FinalPCA from "@/email_resources/components/final_pca";

export default function Email(this: any) {
    const formRef = useRef<HTMLFormElement>(null);

    const [selectedTemplate, setTemplate] = useState('');
    const [case_id, setCaseId] = useState('');
    const [customer, setCustomer] = useState('');
    const [tooltip, setTooltip] = useState('Copy to clipboard');
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    const handleCaseInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    };

    const formHandling = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setTemplate(formData.get('template') as string);
        setCustomer(formData.get('customer') as string);
        setCaseId(formData.get('case_id') as string);
        setIsEmailVisible(true);
    };

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'first_pca':
                return <FirstPCA case_id={case_id} customer={customer} copyEmail={() => copyEmail("first_pca")} tooltip={tooltip} />;
            case 'second_pca':
                return <SecondPCA case_id={case_id} customer={customer} copyEmail={() => copyEmail("second_pca")} tooltip={tooltip} />;
            case 'final_pca':
                return <FinalPCA case_id={case_id} customer={customer} copyEmail={() => copyEmail("final_pca")} tooltip={tooltip} />;
        }
    };

    function copyEmail(email_template: string) {
        var email_body = ""
        const emailProps = { case_id: case_id, customer: customer };
        switch (email_template) {
            case 'first_pca':
                email_body = setFirstPCAEmail(emailProps)
            case 'second_pca':
                email_body = setSecondPCAEmail(emailProps)
            case 'final_pca':
                email_body = setFinalPCAEmail(emailProps)
        }
        if (email_body) {
            const blob = new Blob([email_body], { type: 'text/html' });
            const clipboardItem = new window.ClipboardItem({ 'text/html': blob });
            navigator.clipboard.write([clipboardItem]).then(() => {
                setTooltip("Copied");
                setTimeout(() => {
                    setTooltip("Copy to clipboard");
                }, 5000);
            });
        }
    }

    const resetAll = () => {
        if (formRef.current) {
            formRef.current.reset();
            setIsEmailVisible(false);
        }
    };


    return (
        <>
            <div className="flex flex-col xl:flex-row gap-4 items-start">
                <form ref={formRef} className="w-full md:w-4/5 md:mx-auto xl:w-96 flex flex-col gap-4 shrink-0" onSubmit={formHandling}>
                    <div className="rounded-lg">
                        <div className="mb-2 block">
                            <Label htmlFor="template" value="Email template" />
                        </div>
                        <Select id="template" name="template" required>
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
                        <TextInput id="customer" name="customer" placeholder="e.g.: Jhon Doe" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="case_id" value="Case number" />
                        </div>
                        <TextInput id="case_id" name="case_id" placeholder="e.g.: 5125963258" type="text" sizing="md" maxLength={10} pattern=".{10}" onInput={handleCaseInput} required />
                    </div>


                    <div className="w-full mt-2"><Button className="w-full" type="submit" color="blue">Generate email</Button></div>
                    <div className="w-full"><Button className="w-full" onClick={resetAll} color="light">Reset all</Button></div>

                </form>

                <div className={`flex flex-col w-full px-0 xl:px-10 md:w-4/5 md:mx-auto ${isEmailVisible ? 'block' : 'hidden'}`}>
                    {renderTemplate()}
                </div>
            </div>
        </>
    )
}