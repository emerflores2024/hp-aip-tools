import Notes from "@/components/notes_base";

export default function PCaaSNotes(){
    const list = [
        'Subscription / Order cancellation',
        'Laptop setup',
        'Technical inquiries: connectivity issues, hardware, software, etc.',
        'Laptop cleanup',
        'Laptop shipment / Order status',
        'Ghost call/chat',
        'Replacement status',
        'Account management',
        'General information',
        'Place order',
        'Return label request',
        'Escalation'
    ];
      
    return(
        <Notes list={list} lob="PCaaS - "/>
    );
}