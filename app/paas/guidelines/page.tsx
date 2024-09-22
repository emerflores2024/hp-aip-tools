import { CustomFlowbiteTheme, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { FaBriefcase } from "react-icons/fa6";

export default function Guidelines() {
    return (
        <Accordion>
            <AccordionPanel>
                <AccordionTitle className="dark:focus:ring-0 dark:text-gray-200">Case creation guidelines</AccordionTitle>
                <AccordionContent>
                    <div className="w-full overflow-x-auto">
                        <p className='text-gray-300 font-semibold mb-5 text-sm'>You can find a detailed description of each one of the resolution codes in CDAX on this Wise document: <a className="text-cyan-500" href="https://wise.hp.com/wise/DocumentDetail/ams-en?docId=ish_8858392-8858143-16&contentType=Process%20Document&selectedLangCode=en">Global Case Resolution Code Usage</a>, but here are some of the most common scenarios:</p>
                        <Table>
                            <TableHead>
                                <TableHeadCell>AIP Scenario</TableHeadCell>
                                <TableHeadCell>Resolution code / Quick case</TableHeadCell>
                            </TableHead>
                            <TableBody className="divide-y">
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Printer Shiptment. Customer calling to inquire about the printer for a new AIP subscription (recently placed online)
                                    </TableCell>
                                    <TableCell>Quick case</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Printer Shiptment. Customer calling to inquire about a CSO for a printer replacement for AIP.
                                    </TableCell>
                                    <TableCell>Quick case</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Ink shipment. Customer calling for ink tracking inquiries
                                    </TableCell>
                                    <TableCell>Quick case</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Information about Rollover Pages
                                    </TableCell>
                                    <TableCell>Non-Tech Solution</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        AIP General Information, pre enrollment requirements, Ex. Printer models available, prices, program general questions, T&C, printer&apos;s specs.
                                    </TableCell>
                                    <TableCell>Non-Tech Solution</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Billing cycle inquiry
                                    </TableCell>
                                    <TableCell>Non-Tech Solution</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Update payment method (quick call where customer releases after we mention it needs to be done online, no further help provided)
                                    </TableCell>
                                    <TableCell>Non-Tech Solution</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Customers calling inquiring about existing cases escalated via Jira with pending solution.
                                    </TableCell>
                                    <TableCell>Non-Tech Solution</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Customers calling with a no return or cancellation fee already charged and asking if they can keep the printer
                                    </TableCell>
                                    <TableCell>Non-Tech Solution</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Pre-sales calls where customers decide not to enroll at the end (Why would this be closed as Non tech if customer is not even an AIP or HP Subscriber?)
                                    </TableCell>
                                    <TableCell>Unresolved - Does not agree to pay (DNAP)</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Customer not willing pay for account already on suspended account
                                    </TableCell>
                                    <TableCell>Unresolved - Does not agree to pay (DNAP)</TableCell>
                                </TableRow>
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">
                                        Operating System Not Compaible (E.g. customers with 1 device only and having Linux or old Windows 7 / 8 version, or cellphones with old iOS / Android version)
                                    </TableCell>
                                    <TableCell>Create a case and educate the customer about product limitations and close the case as &quot;Unresolved - Not entitled for support&quot;, and recommend customers to cancel / return the device.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle className="dark:focus:ring-0 dark:text-gray-200">All-In Plan Terms & Conditions</AccordionTitle>
                <AccordionContent>
                    <p className="text-gray-200 text-sm">You can find the All-In Plan Terms & Conditions on the following link: <a className="text-cyan-500" target="_blank" href="https://www.hp.com/us-en/all-in-plan/terms.html">https://www.hp.com/us-en/all-in-plan/terms.html</a></p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle className="dark:focus:ring-0 dark:text-gray-200">Printer user guides</AccordionTitle>
                <AccordionContent>
                    <p className="text-gray-200 text-sm">It is useful for you to have printer user guides for troubleshooting or guide the customer on how to do certain steps on the printer, here are the user guide links for all the printers we currently support:</p>
                    
                    <ul className="list-disc list-inside text-gray-200 mt-5 ml-5 text-sm">
                        <li>HP Envy 6020e: <a href="https://h10032.www1.hp.com/ctg/Manual/c06584210.pdf" target="_blank" className="text-cyan-500 text-sm">https://h10032.www1.hp.com/ctg/Manual/c06584210.pdf</a></li>
                        <li>HP Envy Inspire 7258e: <a href="https://h10032.www1.hp.com/ctg/Manual/c07773132.pdf" target="_blank" className="text-cyan-500 text-sm">https://h10032.www1.hp.com/ctg/Manual/c07773132.pdf</a></li>
                        <li>HP OfficeJet Pro 9010e: <a href="https://h10032.www1.hp.com/ctg/Manual/c06940372.pdf" target="_blank" className="text-cyan-500 text-sm">https://h10032.www1.hp.com/ctg/Manual/c06940372.pdf</a></li>
                        <li>HP OfficeJet Pro 9129e: <a href="https://kaas.hpcloud.hp.com/pdf-public/pdf_6212888_en-US-1.pdf" target="_blank" className="text-cyan-500 text-sm">https://kaas.hpcloud.hp.com/pdf-public/pdf_6212888_en-US-1.pdf</a></li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}