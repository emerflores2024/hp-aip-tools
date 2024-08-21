export default function setLMIEmail(props: any){
    const user = localStorage.getItem('user')
    const lmi_link = `
    <div style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto;">
        <div style="margin-bottom: 0; width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); display: flex; justify-content: space-between; align-items: center; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
            <div><img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></div>
        </div><div style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="color: #1f2937; text-align: justify; margin:0">
                As part of our troubleshooting process to help you with your device, we are required to perform a remote connection. Please click on the following button to be directed to the remote connection website, where you will be asked for a 9 digit code that I will provide you:
            </p><div><a href="https://hp.com/555" style="text-decoration: none; font-size: 0.875rem; display: inline-block; background-color: #d1d5db; border-radius: 0.5rem; padding: 0.75rem; color: black;">
                    Click here to start the remote connection
                </a>
            </div>
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

    return lmi_link;
}