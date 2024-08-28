import Notes from "@/components/notes_base";

export default function AIPNotes(){
    const list = [
        'Subscription / Order cancellation',
        'Printer setup',
        'Technical inquiries: connectivity issues, paper jam, cartridges installation, etc.',
        'Printer shipment / Order status',
        'Ghost call/chat',
        'Wi-Fi 6E',
        'Replacement status',
        'Account management',
        'General information',
        'Place order',
        'Ink replenishment',
        'Fax setup',
        'Return label request',
        'Escalation'
    ];
      
    return(
        <Notes list={list} lob="AIP - "/>
    );
}