import { Clipboard } from "flowbite-react"
import { Label, Select } from "flowbite-react";

export default function Notes(){
    return(
        <>
            <div className="grid w-full items-end max-w-[23rem] grid-cols-8 gap-2">
                <div className="col-span-6 block w-full rounded-lg">
                    <div className="mb-2 block">
                        <Label htmlFor="subjects" value="Case subject" />
                    </div>
                    <Select id="subjects" required>
                        <option value="" disabled selected>-- Select an option --</option>
                        <option>AIP - Subscription / Order cancellation</option>
                        <option>AIP - Printer setup</option>
                        <option>AIP - Technical inquiries</option>
                        <option>AIP - Printer shipment / Order status</option>
                        <option>AIP - Replacement status</option>
                        <option>AIP - Account management</option>
                        <option>AIP - General information</option>
                        <option>AIP - Place order</option>
                        <option>AIP - Ink replenishment</option>
                        <option>AIP - Fax setup</option>
                        <option>AIP - Return label request</option>
                        <option>AIP - Escalation</option>
                        <option>Non-AIP</option>
                    </Select>
                </div>
                <Clipboard valueToCopy="npm install flowbite-react" label="Copy" />
            </div>
        </>
    )
}