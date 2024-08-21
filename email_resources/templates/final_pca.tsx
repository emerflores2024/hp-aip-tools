export default function setFinalPCAEmail(props: any){
    const user = localStorage.getItem('user')
    const final_pca = `
    <div style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto;">
        <div style="margin-bottom: 0; width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); display: flex; justify-content: space-between; align-items: center; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
            <div><img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></div>
        </div><div style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="color: #1f2937; text-align: justify; margin:0">
                We hope you are doing well! We have been trying to contact you, but we were unsuccessful. As we haven't heard from you, we will proceed to close your case.
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                However, if you still need assistance from us or require any further help in any other related matter, please contact us back quoting your case number, so we can take it as reference to assist you.
            </p><p style="color: #1f2937; text-align: justify; margin:0">
                Thank you for your time and for your loyalty to HP. Take care and have a nice day!
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
        </div>
    </div>
    `;

    return final_pca;
}