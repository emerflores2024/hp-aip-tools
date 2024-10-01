import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";

export default function Notifications(){
    return(
        <div className="flex flex-col text-gray-100 gap-5 w-full">
            <div className="flex flex-row border border-gray-600 rounded-lg gap-6 p-5 items-center">
                <div>
                    <FaCircleCheck className="text-xl text-emerald-400"/>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <p className="font-bold text-emerald-500">New TCO process update!</p>
                        <p className="text-sm text-gray-300">10/01/2024</p>
                    </div>
                    <div className="mt-2 text-justify">
                        AIP now has its own TCO team as we have for II, this will help us to focus a lot more on our inbound time and calls as they will be working hard on following up on any escalations request. As a result of this change, you will see on the notes generator I have added 3 radio buttons to choose from a regular, Jira or executive escalation case subject. Please <a className="text-cyan-400" target="_blank" href="https://cnxmail.sharepoint.com/:w:/s/OPSSupport/iHUB/EetMYU1FhTBGp0n_t-6LfoYBStlON-tU9ximXWMdssjMGg?xsdata=MDV8MDJ8ZW1lcnNvbi5mbG9yZXMxQGNvbmNlbnRyaXguY29tfGU0ZGYyYmU0Y2M4OTQwNTdjM2M1MDhkY2UxYzM4NzMwfDU5OWU1MWQ2MmY4YzQzNDc4ZTU5MWY3OTVhNTFhOThjfDB8MHw2Mzg2MzM0NzcyNDQ1NDE3NTZ8VW5rbm93bnxUV0ZwYkdac2IzZDhleUpXSWpvaU1DNHdMakF3TURBaUxDSlFJam9pVjJsdU16SWlMQ0pCVGlJNklrMWhhV3dpTENKWFZDSTZNbjA9fDB8fHw%3d&sdata=YURmSG1iRTVJUU1UZTZnT2Q4SVJmMmNJZ3dzaG94MmIyUys2VWpWVEdiYz0%3d">click here</a> to review the new process for escalations on AIP subscriptions.
                    </div>
                </div>
            </div>
            <div className="flex flex-row border border-gray-600 rounded-lg gap-6 p-5 items-center">
                <div>
                    <FaCircleExclamation className="text-xl text-red-400"/>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <p className="font-bold text-red-400">Jhon Barry's information</p>
                        <p className="text-sm text-gray-300">10/01/2024</p>
                    </div>
                    <div className="mt-2 text-justify">
                        Please don't place any ink or replacement orders for a profile with the following address: 453 Highland Ave Ozark, AL 36360
                    </div>
                </div>
            </div>
        </div>

    );
}