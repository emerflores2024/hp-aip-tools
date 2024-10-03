'use client'

import { Checkbox, Clipboard, Radio, TextInput } from "flowbite-react"
import { Datepicker } from "flowbite-react";
import { Label, Select } from "flowbite-react";
import { useState } from "react";
import { Textarea } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Notes(props: any) {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [caseType, setCaseType] = useState('');
    const [issue, setIssue] = useState('');
    const [troubleshooting, setTroubleshooting] = useState('');
    const [resolution, setResolution] = useState('');

    const [enrollmentDate, setEnrollmentDate] = useState('');

    const handleEnrollmentDateChange = (event: any) => {
        setEnrollmentDate(event.target.value);
    };

    const handleCaseTypeChange = (event: any) => {
        setCaseType(event.target.value);
    };

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

const jira_notes = 
`{START CASE SUMMARY}
|Problem Description:

${enrollmentDate}

|Frequency of failure:
|How to reproduce the failure:
|Error message:
|Windows Version:
|BIOS Version:
|Troubleshooting:



|Resolution:



|Leave blank:
{END CASE SUMMARY}`;

    return (
        <>
            <div className="flex items-end gap-2 w-full md:px-24 lg:max-w-md mx-auto lg:px-0">
                <div className="w-full rounded-lg">
                    <div className="mb-5 block">
                        <Label htmlFor="subjects" value="Case subject" />
                    </div>
                    <fieldset className="flex max-w-md flex-row gap-4 mb-5">
                        <div className="flex items-center gap-2">
                            <Radio className="focus:ring-0 focus:ring-offset-0" id="regular" name="case_type" value="" defaultChecked onChange={handleCaseTypeChange} />
                            <Label htmlFor="regular">Regular case</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio className="focus:ring-0 focus:ring-offset-0" id="jira" name="case_type" value="Jira | " onChange={handleCaseTypeChange} />
                            <Label htmlFor="jira">Jira esc</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio className="focus:ring-0 focus:ring-offset-0" id="exec" name="case_type" value="EE | " onChange={handleCaseTypeChange} />
                            <Label htmlFor="exec">Executive esc</Label>
                        </div>
                    </fieldset>
                    <Select id="subjects" required onChange={handleSubjectChange} value={selectedSubject}>
                        <option value="" disabled selected>-- Select an option --</option>
                        {props.list.map((item: string, index: number) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </Select>
                </div>
                <Clipboard valueToCopy={caseType + props.lob + selectedSubject} label="Copy" />
            </div>

            {caseType === "Jira | " && (
                <div className="flex flex-col gap-4 mt-5 justify-center w-full md:px-24 lg:max-w-md lg:px-0 mx-auto">
                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <div className="mb-2">
                                <Label htmlFor="enrollment_date" value="Enrollment date" />
                            </div>
                            <Datepicker value={enrollmentDate} onChange={handleEnrollmentDateChange} id="enrollment_date" name="enrollment_date" required />
                        </div>
                        <div className="w-1/2">
                            <div className="mb-2 block">
                                <Label htmlFor="subscription_status" value="Subscription status" />
                            </div>
                            <Select id="subscription_status" name="subscription_status" required>
                                <option>Active</option>
                                <option>Inactive</option>
                            </Select>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mb-2">
                            <Label htmlFor="cancellation_date" value="Cancellation date (if applicable)" />
                        </div>
                        <Datepicker id="cancellation_date" name="cancellation_date" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="fedex_return_url" value="If the customer has returned the printer to HP, provide a link to the FedEx tracking (if applicable)" />
                        </div>
                        <TextInput id="fedex_return_url" name="fedex_return_url" type="text" placeholder="https://fedex.com/..." required />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="jira_issue" value="Summary of the issue" />
                        </div>
                        <Textarea onChange={handleIssueChange} id="jira_issue" name="jira_issue" placeholder="Enter the customer's issue..." required rows={6} value={issue} />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="agent_actions" value="Actions taken by agent" />
                        </div>
                        <Textarea onChange={handleIssueChange} id="agent_actions" name="agent_actions" placeholder="Enter what you did on the interaction..." required rows={6} value={issue} />
                    </div>
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="error_message" value="Error messages (please ask customer to share it via email)" />
                        </div>
                        <Textarea onChange={handleIssueChange} id="error_message" name="error_message" placeholder="Enter error messages details..." required rows={6} value={issue} />
                    </div>
                    <div className="w-full mt-2 flex justify-between">
                        <Button onClick={() => resetAll()} color="light" >Reset all</Button>
                        <Clipboard valueToCopy={jira_notes} label="Copy notes" />
                    </div>
                </div>

            )}
            

            {caseType !== "Jira | "  && (
                <div className="flex flex-col gap-4 mt-5 justify-center w-full md:px-24 lg:max-w-md lg:px-0 mx-auto">
                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="issue" value="Problem description" />
                        </div>
                        <Textarea onChange={handleIssueChange} id="issue" name="issue" placeholder="Enter the customer's issue..." required rows={6} value={issue} />
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="troubleshooting" value="Troubleshooting" />
                        </div>
                        <Textarea onChange={handleTroubleshootingChange} id="troubleshooting" name="troubleshooting" placeholder="Enter the steps completed to resolve problem..." required rows={6} value={troubleshooting} />
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="resolution" value="Resolution" />
                        </div>
                        <Textarea onChange={handleResolutionChange} id="resolution" name="resolution" placeholder="Enter the resolution provided..." required rows={6} value={resolution} />
                    </div>
                    <div className="w-full mt-2 flex justify-between">
                        <Button onClick={() => resetAll()} color="light" >Reset all</Button>
                        <Clipboard valueToCopy={notes} label="Copy notes" />
                    </div>
                </div>
            )}
        </>
    )
}