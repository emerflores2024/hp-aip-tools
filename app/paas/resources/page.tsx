import { CustomFlowbiteTheme, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { FaBriefcase } from "react-icons/fa6";

export default function Resources() {
    return (
        <Accordion collapseAll>
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
                <AccordionTitle className="dark:focus:ring-0 dark:text-gray-200">Printer specs / user guides</AccordionTitle>
                <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                        <Card className="w-sm text-center h-full">
                            <div className="h-32 flex justify-center">
                                <img className="h-32" src="https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/2/223N6A-1_T1678862955.png" alt="" />
                            </div>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                                HP Envy 6020e
                            </h5>
                            <div className="flex flex-col gap-2 mt-5">
                                <Button target="_blank" href="https://support.hp.com/us-en/product/setup-user-guides/hp-envy-6000e-all-in-one-printer-series/model/2100187513" color="blue">View specs</Button>
                                <Button target="_blank" href="https://h10032.www1.hp.com/ctg/Manual/c06584210.pdf" color="light">View user guide</Button>
                            </div>
                        </Card>
                        <Card className="w-sm text-center h-full">
                            <div className="h-32 flex justify-center">
                                <img className="h-32" src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08006016.png" alt="" />
                            </div>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                                HP Envy Inspire 7258e
                            </h5>
                            <div className="flex flex-col gap-2 mt-5">
                                <Button href="https://support.hp.com/us-en/product/setup-user-guides/hp-envy-inspire-7200e-series/model/2100993007" target="_blank" color="blue">View specs</Button>
                                <Button href="https://h10032.www1.hp.com/ctg/Manual/c07773132.pdf" target="_blank" color="light">View user guide</Button>
                            </div>
                        </Card>
                        <Card className="w-sm text-center h-full">
                            <div className="h-32 flex justify-center">
                                <img className="h-32" src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07145677.png" alt="" />
                            </div>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                                HP OfficeJet Pro 9010e
                            </h5>
                            <div className="flex flex-col gap-2 mt-5">
                                <Button href="https://support.hp.com/us-en/product/setup-user-guides/hp-officejet-pro-9010e-all-in-one-printer-series/38023430" target="_blank" color="blue">View specs</Button>
                                <Button href="https://h10032.www1.hp.com/ctg/Manual/c06940372.pdf" target="_blank" color="light">View user guide</Button>
                            </div>
                        </Card>
                        <Card className="w-sm text-center h-full">
                            <div className="h-32 flex justify-center">
                                <img className="h-32" src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08966759.png?impolicy=Png_Res" alt="" />
                            </div>
                            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                                HP OfficeJet Pro 9129e
                            </h5>
                            <div className="flex flex-col gap-2 mt-5">
                                <Button href="https://support.hp.com/us-en/product/setup-user-guides/hp-officejet-pro-9120e-all-in-one-series/model/2101679522" target="_blank" color="blue">View specs</Button>
                                <Button href="https://kaas.hpcloud.hp.com/pdf-public/pdf_6212888_en-US-1.pdf" target="_blank" color="light">View user guide</Button>
                            </div>
                        </Card>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    );
}