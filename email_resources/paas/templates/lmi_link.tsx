export default function setLMIEmail(props: any) {
    const lmi_link = `
    <table style="font-size: 1rem; border-radius: 0.5rem; width: 100%; padding-left: 0; padding-right: 0; max-width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse;">
    <tr>
          <td style="display: flex; align-items: center; height: 60px;">
              <table style="width: 100%; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); border-collapse: collapse; height: 60px;">
                  <tr>
                      <td style="padding-left: 1.25rem;"><p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
                      </td>
                      <td style="width: 2.5rem; padding-right: 1.25rem;"><img style="width: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png" alt="">
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
    <tr>
        <td style="width: 100%; padding-left: 1.25rem; padding-right: 1.25rem;">
            <p style="color: #1f2937; text-align: center; margin:0">
                As part of our troubleshooting process to help you with your device, we are required to perform a remote connection. Please click on the following button to be directed to the remote connection website, where you will be asked for a 9-digit code that I will provide you:
            </p>
            <div style="margin-top: 30px; width: 100%; display: flex; justify-content: center; text-align: center;">
                <a href="https://hp.com/555" style="font-weight: 600; text-decoration: none; font-size: 0.875rem; display: inline-block; border: 2px solid; border-image: linear-gradient(to right, #6b21a8, #06b6d4) 1; border-radius: 0.5rem; padding: 0.75rem; color: black; width: fit-content;">
                    Click here to start the remote connection
                </a>
            </div>
        </td>
    </tr>
    <tr>
        <td style="text-align: center; padding-top: 10px; padding-bottom: 10px;">
            <span style="padding: 0 0.75rem; font-size: 0.875rem; color: #111827; background-color: white; text-align: center;">
                or if you are using a mobile device
            </span>
        </td>
    </tr>
    <tr>
    <td style="text-align: center;">
        <div style="display: flex; justify-content: center; align-items: center;">
            <a href="https://apps.apple.com/us/app/rescue-mobile/id661269562" style="margin-right: 1rem;">
                <img style="width: 8rem;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.logmein.rescuemobile&hl=en_US">
                <img style="width: 8rem;" src="https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png" alt="Get it on Google Play" />
            </a>
        </div>
    </td>
</tr>

</table>
`;

    return lmi_link;
}