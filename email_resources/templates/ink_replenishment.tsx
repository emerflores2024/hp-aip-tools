export default function setInkReplenishmentEmail(props: any){
    const user = localStorage.getItem('user')
    const ink_replenishment = `
    <div style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto;">
        <div style="margin-bottom: 0; width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); display: flex; justify-content: space-between; align-items: center; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
            <div><img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></div>
        </div><div style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="color: #1f2937; text-align: justify; margin:0">
                Thank you for contacting us today. This email is just to inform you that we have successfully placed an order for new ink cartridge(s) for your printer. You can track your ink shipments by going to <a style="color: #2383bd;" href="https://hpsmart.com">https://hpsmart.com</a> and sign in with your HP Account.
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                If you have any questions on your order or if you require any additional assistance from us, please do not hesitate on contacting us back and we will be glad to help you!
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                Here is your case number for future reference: <strong>${props.case_id}</strong>
            </p>
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div>
                    <img style="height: 5.5rem;" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="">
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px; padding-top: 15px;"><p style="color: #1f2937; text-align: justify; margin:0"><strong>${user}</strong></p><p style="color: #1f2937; text-align: justify; margin:0">HP 24/7 Pro Support | All-In Plan</p><p style="color: #1f2937; text-align: justify; margin:0">+1 888-447-0148</p>
                </div>
            </div>
            <p style="color: #3d434a; margin-top: 3rem; font-size: 0.875rem; text-align: center;">
                This email was sent to alert you about important updates to your HP account. You can manage your account online by going to 
                <a style="color: #2383bd;" href="https://hpsmart.com">https://hpsmart.com</a> | © Copyright 2024 HP Development Company, L.P.
            </p>
        </div>
    </div>
    `;

    return ink_replenishment;
}