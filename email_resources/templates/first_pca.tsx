export default function setFirstPCAEmail(props: any){
    const first_pca = `
    <div style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto;">
        <div style="margin-bottom: 0; width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); display: flex; justify-content: space-between; align-items: center; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
            <div><img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></div>
        </div><div style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="color: #1f2937; text-align: justify; margin:0">
                After our last conversation, we have kept your case opened to give you a follow up and we have tried to contact you back via phone/email, but we have been unsuccessful.
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                If you still need assistance from us or require any further help in any other related matter, please contact us back quoting your case number or if you consider that the issue has been addressed, you can reply back to this email, so we can close your case.
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                I would like to thank you once again for your cooperation and patience throughout this process, and if there is anything else you would like me to cover for you, please contact us back and we will be more than happy to help you. Take care and have a nice day!
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                Here is your case number for future reference: <strong>${props.case_id}</strong>
            </p>
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div>
                    <img style="height: 5.5rem;" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="">
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px; padding-top: 15px;"><p style="color: #1f2937; text-align: justify; margin:0"><strong>${props.user}</strong></p><p style="color: #1f2937; text-align: justify; margin:0">HP 24/7 Pro Support | All-In Plan</p><p style="color: #1f2937; text-align: justify; margin:0">+1 888-447-0148</p>
                </div>
            </div>
            <p style="color: #3d434a; margin-top: 3rem; font-size: 0.875rem; text-align: center;">
                This email was sent to alert you about important updates to your HP account. You can manage your account online by going to 
                <a style="color: #2383bd;" href="https://hpsmart.com">https://hpsmart.com</a> | © Copyright 2024 HP Development Company, L.P.
            </p>
        </div>
    </div>
    `;

    return first_pca;
}