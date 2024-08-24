'use client'

import { Label, Select, Textarea, Alert   } from "flowbite-react";
import { FormEvent, useState, useRef, useEffect } from "react";
import { Button, TextInput } from "flowbite-react";
import setFirstPCAEmail from "@/email_resources/templates/first_pca";
import setSecondPCAEmail from "@/email_resources/templates/second_pca";
import setFinalPCAEmail from "@/email_resources/templates/final_pca";
import setEscResolutionEmail from "@/email_resources/templates/escalation_resolution";
import setReplacementOrderEmail from "@/email_resources/templates/replacement_confirmation";
import setInkReplenishmentEmail from "@/email_resources/templates/ink_replenishment";
import setLMIEmail from "@/email_resources/templates/lmi_link";
import FirstPCA from "@/email_resources/components/first_pca";
import SecondPCA from "@/email_resources/components/second_pca";
import FinalPCA from "@/email_resources/components/final_pca";
import EscalationResolution from "@/email_resources/components/escalation_resolution";
import ReplacementOrder from "@/email_resources/components/replacement_confirmation";
import InkReplenishment from "@/email_resources/components/ink_replenishment";
import LMILink from "@/email_resources/components/lmi_link";
import { HiInformationCircle } from "react-icons/hi";
import { useUser } from "@/app/context_provider";

export default function Email(this: any) {
    const formRef = useRef<HTMLFormElement>(null);
    const { userName, setUserName } = useUser();

    const [selectedTemplate, setTemplate] = useState('');
    const [case_id, setCaseId] = useState('');
    const [customer, setCustomer] = useState('');
    const [resolution, setResolution] = useState('');
    const [replacementOrder, setReplacementOrder] = useState('');
    const [tooltip, setTooltip] = useState('Copy to clipboard');
    const [isEmailVisible, setIsEmailVisible] = useState(false);
    const [isCaseVisible, setisCaseVisible] = useState(true);
    const [isResolutionVisible, setisResolutionVisible] = useState(false);
    const [isReplacementVisible, setisReplacementVisible] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleCaseInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    };

    type TemplateType = 'escalation_resolution' | 'replacement_confirmation' | 'lmi_link' | 'default';

    const handleTemplateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as TemplateType;

        const visibilityMap: Record<TemplateType, { case: boolean; resolution: boolean; replacement: boolean }> = {
            escalation_resolution: { case: true, resolution: true, replacement: false },
            replacement_confirmation: { case: true, resolution: false, replacement: true },
            lmi_link: { case: false, resolution: false, replacement: false },
            default: { case: true, resolution: false, replacement: false }
        };

        const { case: isCaseVisible, resolution: isResolutionVisible, replacement: isReplacementVisible } = visibilityMap[value] || visibilityMap.default;

        setisCaseVisible(isCaseVisible);
        setisResolutionVisible(isResolutionVisible);
        setisReplacementVisible(isReplacementVisible);
    };
    

    const formHandling = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowToast(false)
        if(userName){
            const formData = new FormData(event.currentTarget);
            setTemplate(formData.get('template') as string);
            setCustomer(formData.get('customer') as string);
            setCaseId(formData.get('case_id') as string);
            if(formData.get('resolution') as string){
                setResolution(formData.get('resolution') as string)
            }
            if(formData.get('replacement_order') as string){
                setReplacementOrder(formData.get('replacement_order') as string)
            }
            setIsEmailVisible(true);
        }
        else{
            setShowToast(true)
        }
    };

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'first_pca':
                return <FirstPCA case_id={case_id} customer={customer} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} user={userName}/>;
            case 'second_pca':
                return <SecondPCA case_id={case_id} customer={customer} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} />;
            case 'final_pca':
                return <FinalPCA case_id={case_id} customer={customer} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} />;
            case 'escalation_resolution':
                return <EscalationResolution case_id={case_id} customer={customer} resolution={resolution} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} />;
            case 'replacement_confirmation':
                return <ReplacementOrder case_id={case_id} customer={customer} order={replacementOrder} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} />;
            case 'ink_replenishment':
                return <InkReplenishment case_id={case_id} customer={customer} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} />;
            case 'lmi_link':
                return <LMILink customer={customer} copyEmail={() => copyEmail(selectedTemplate)} tooltip={tooltip} />;
        }
    };

    function copyEmail(email_template: string) {
        var email_body = ""
        const emailProps = { case_id: case_id, customer: customer, resolution: resolution, order: replacementOrder, user: userName };
        switch (email_template) {
            case 'first_pca':
                email_body = setFirstPCAEmail(emailProps)
                break
            case 'second_pca':
                email_body = setSecondPCAEmail(emailProps)
                break
            case 'final_pca':
                email_body = setFinalPCAEmail(emailProps)
                break
            case 'escalation_resolution':
                email_body = setEscResolutionEmail(emailProps)
                break
            case 'replacement_confirmation':
                email_body = setReplacementOrderEmail(emailProps)
                break
            case 'ink_replenishment':
                email_body = setInkReplenishmentEmail(emailProps)
                break
            case 'lmi_link':
                email_body = setLMIEmail(emailProps)
                break
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
            setisResolutionVisible(false);
            setisReplacementVisible(false);
            setisCaseVisible(true);
        }
    };


    return (
        <>
            <div className="flex flex-col xl:flex-row gap-4 items-start">
                <form ref={formRef} className="w-full md:w-4/5 md:mx-auto xl:w-96 flex flex-col gap-4 shrink-0" onSubmit={formHandling}>
                    {showToast && (
                        <div>
                            <Alert color="failure" icon={HiInformationCircle}>
                                <span className="font-medium">Your name is missing!</span> Please, set your name first.
                            </Alert>
                        </div> 
                    )}
                    <div className="rounded-lg">
                        <div className="mb-2 block">
                            <Label htmlFor="template" value="Email template" />
                        </div>
                        <Select id="template" name="template" required onChange={handleTemplateChange}>
                            <option value="" disabled selected>-- Select a template --</option>
                            <option value="first_pca">First follow up</option>
                            <option value="second_pca">Second follow up</option>
                            <option value="final_pca">Final follow up | Case closure</option>
                            <option value="escalation_resolution">Escalation resolution</option>
                            <option value="replacement_confirmation">Replacement confirmation</option>
                            <option value="ink_replenishment">Ink replenishment</option>
                            <option value="lmi_link">LMI Link</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="customer" value="Customer's name" />
                        </div>
                        <TextInput id="customer" name="customer" placeholder="e.g.: Jhon Doe" type="text" sizing="md" required />
                    </div>

                    {isCaseVisible && (
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="case_id" value="Case number" />
                            </div>
                            <TextInput id="case_id" name="case_id" placeholder="e.g.: 5125963258" type="text" sizing="md" maxLength={10} pattern=".{10}" onInput={handleCaseInput} required />
                        </div>
                    )}

                    {isResolutionVisible && (
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="resolution" value="Escalation resolution" />
                            </div>
                            <Textarea id="resolution" name="resolution" placeholder="Enter the escalation resolution provided..." required rows={6}/>
                        </div>
                    )}

                    {isReplacementVisible && (
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="replacement_order" value="Replacement order number" />
                            </div>
                            <TextInput id="replacement_order" name="replacement_order" placeholder="e.g.: BV5426488-01" type="text" sizing="md" required />
                        </div>
                    )}


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