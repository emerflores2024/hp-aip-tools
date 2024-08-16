'use client'

import { Clipboard } from "flowbite-react"
import { Label, Select } from "flowbite-react";
import { useState } from "react";
import { Textarea } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Notes() {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [issue, setIssue] = useState('');
    const [troubleshooting, setTroubleshooting] = useState('');
    const [resolution, setResolution] = useState('');

    const handleSubjectChange = (event: any) => {
        setSelectedSubject(event.target.value);
    };

    const handleIssueChange = (event: any) => {
        setIssue(event.target.value);
    };

    const handleTroubleshootingChange = (event: any) => {
        setTroubleshooting(event.target.value);
    };

    const handleResolutionChange = (event: any) => {
        setResolution(event.target.value);
    };

    function resetAll(){
        setIssue("")
        setTroubleshooting("")
        setResolution("")
        setSelectedSubject("")
    }

    const notes = 
`{START CASE SUMMARY}
|Problem Description:

${issue}

|Frequency of failure:
|How to reproduce the failure:
|Error message:
|Windows Version:
|BIOS Version:
|Troubleshooting:

${troubleshooting}

|Resolution:

${resolution}

|Leave blank:
{END CASE SUMMARY}`;

    return (
        <>
            <div className="flex items-end gap-2 w-full md:px-24 lg:max-w-md lg:px-0">
                <div className="w-full rounded-lg">
                    <div className="mb-2 block">
                        <Label htmlFor="subjects" value="Case subject" />
                    </div>
                    <Select id="subjects" required onChange={handleSubjectChange} value={selectedSubject}>
                        <option value="" disabled selected>-- Select an option --</option>
                        <option>Subscription / Order cancellation</option>
                        <option>Printer setup</option>
                        <option>Technical inquiries</option>
                        <option>Printer shipment / Order status</option>
                        <option>Ghost call/chat</option>
                        <option>Wi-Fi 6E</option>
                        <option>Replacement status</option>
                        <option>Account management</option>
                        <option>General information</option>
                        <option>Place order</option>
                        <option>Ink replenishment</option>
                        <option>Fax setup</option>
                        <option>Return label request</option>
                        <option>Escalation</option>
                    </Select>
                </div>
                <Clipboard valueToCopy={"AIP - " + selectedSubject} label="Copy" />
            </div>

            <div className="flex flex-col gap-4 mt-5 justify-center w-full md:px-24 lg:max-w-md lg:px-0">
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="issue" value="Problem description" />
                    </div>
                    <Textarea onChange={handleIssueChange} id="issue" name="issue" placeholder="Enter the customer's issue..." required rows={4} value={issue}/>
                </div>

                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="troubleshooting" value="Troubleshooting" />
                    </div>
                    <Textarea onChange={handleTroubleshootingChange} id="troubleshooting" name="troubleshooting" placeholder="Enter the steps completed to resolve problem..." required rows={4} value={troubleshooting}/>
                </div>

                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="resolution" value="Resolution" />
                    </div>
                    <Textarea onChange={handleResolutionChange} id="resolution" name="resolution" placeholder="Enter the resolution provided..." required rows={4} value={resolution}/>
                </div>
                <div className="w-full mt-2 flex justify-between">
                    <Button onClick={() => resetAll()} color="light" >Reset all</Button>
                    <Clipboard valueToCopy={notes} label="Copy notes" />
                </div>
            </div>
        </>
    )
}