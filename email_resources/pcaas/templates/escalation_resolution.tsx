export default function setEscResolutionEmail(props: any){
    const esc_resolution = `
    <div style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto;">
        <div style="margin-bottom: 0; width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #047857, #06b6d4); display: flex; justify-content: space-between; align-items: center; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
            <div><img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></div>
        </div><div style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="color: #1f2937; text-align: justify; margin:0">
            This email is just to inform you about the resolution of the most recent case you have opened with us and that was escalated a couple of days ago. This is the resolution provided by our support team:
            </p><p style="color: #1f2937; text-align: justify; margin:0; font-style: italic;">
                ${props.resolution}
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                If you still have any questions about the resolution, you can reply back to this email or you can contact us back and we will be more than happy to help you. Take care and have a wonderful day!
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                Here is your case number for future reference: <strong>${props.case_id}</strong>
            </p>
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div>
                    <img style="height: 5.5rem;" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="">
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px; padding-top: 15px;"><p style="color: #1f2937; text-align: justify; margin:0"><strong>${props.user}</strong></p><p style="color: #1f2937; text-align: justify; margin:0">HP 24/7 Pro Support | Laptop Subscription</p><p style="color: #1f2937; text-align: justify; margin:0">+1 866-204-8618</p>
                </div>
            </div>
            <p style="color: #3d434a; margin-top: 3rem; font-size: 0.875rem; text-align: center;">
                This email was sent to alert you about important updates to your HP account. You can manage your account online by going to 
                <a style="color: #2383bd;" href="https://hplaptopsubscription.hp.com/self-service/hp-my-account">https://hplaptopsubscription.hp.com/self-service/hp-my-account</a> | © Copyright 2024 HP Development Company, L.P.
            </p>
        </div>
    </div>
    `;

    return esc_resolution;
}