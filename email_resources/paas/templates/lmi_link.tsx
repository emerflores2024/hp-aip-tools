export default function setLMIEmail(props: any){
    const lmi_link = `
    <div style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto;">
        <div style="margin-bottom: 0; width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); display: flex; justify-content: space-between; align-items: center; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
            <div><img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png"></div>
        </div><div style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;"><p style="color: #1f2937; text-align: center; margin:0">
                As part of our troubleshooting process to help you with your device, we are required to perform a remote connection. Please click on the following button to be directed to the remote connection website, where you will be asked for a 9-digit code that I will provide you:
            </p><div style="margin-top: 30px; width: 100%; display: flex; justify-content: center;"><a href="https://hp.com/555" style="font-weight: 600; text-decoration: none; font-size: 0.875rem; display: inline-block; border: 2px solid; border-image: linear-gradient(to right, #6b21a8, #06b6d4) 1; border-radius: 0.5rem; padding: 0.75rem; color: black; width: fit-content;">
                    Click here to start the remote connection
                </a>
            </div>

            <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 100%;">
                <hr style="width: 24rem; height: 1px; margin: 2rem 0; background-color: #9ca3af; border: none;" />
                <span style="position: absolute; padding: 0 0.75rem; font-size: 0.875rem; color: #111827; transform: translateX(-50%); background-color: white; left: 50%; text-align: center;">
                    or if you are using a mobile device
                </span>
            </div>
            
            <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
                <a href="https://apps.apple.com/us/app/rescue-mobile/id661269562">
                    <img style="width: 8rem;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.logmein.rescuemobile&hl=en_US">
                    <img style="width: 8rem;" src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png" alt="" />
                </a>
            </div>
        </div>
    </div>
    `;

    return lmi_link;
}