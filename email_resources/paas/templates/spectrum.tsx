export default function setSpectrumEmail(props: any){
    const spectrum = `
    <table style="margin-top: 0!important; padding-top: 0!important; font-size: 1rem; border-radius: 0.5rem; width: 100%; max-width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse;">
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
        <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
          <p style="color: #1f2937; text-align: justify; margin: 10px 0 0 0;">During our conversation we discussed that HP is currently aware of a small issue with some Spectrum routers, that prevents from the printer to connect correctly to your Wi-Fi network. The reason behind it, is that those routers come with some specific ports disabled by default, however, your new HP printer under the All-In Plan subscription needs those ports to connect and communicate correctly with the HP Servers.</p>
          <p style="color: #1f2937; text-align: justify; margin: 0;">We kindly ask you to please contact Spectrum, so they can open the required ports on your router. Please find below the list of ports that need to be opened (you can forward this email to Spectrum so they can use it for reference when you contact them):</p>
          <ul style="text-align: justify; list-style-type: disc; list-style-position: inside;">
              <li>Incoming (UDP) ports: 137, 138, 161, 427</li>
              <li>Outgoing (TCP) ports: 137, 139, 427, 9100, 9220, 9500</li>
              <li>Web services: 80, 443, 5222, 5223</li>
          </ul>
          <p style="color: #1f2937; text-align: justify; margin: 0;">Once you contact Spectrum and they are able to open the ports, feel free to contact us back so we can help you to complete the setup of your printer.</p>
          <p style="color: #1f2937; text-align: justify; margin: 0;">Here is your case number for future reference: <strong>${props.case_id}</strong></p>
        </td>
      </tr>
      <tr>
          <td style="padding-left: 1.25rem; padding-right: 1.25rem; display: flex; align-items: center; margin-top: 50px;">
              <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                      <td style="width: 5.5rem;"><img style="height: 5.5rem;" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="">
                      </td>
                      <td style="line-height: 15px;"><p style="color: #1f2937; margin: 0;"><strong>${props.user}</strong></p>
                          <p style="color: #1f2937; margin: 0;">HP 24/7 Pro Support | All-In Plan</p>
                          <p style="color: #1f2937; margin: 0;">+1 888-447-0148</p>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr>
        <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
          <p style="color: #3d434a; margin-top: 3rem; font-size: 0.875rem; text-align: center;">
            This email was sent to alert you about important updates to your HP account. You can manage your account online by going to <a style="color: #2383bd;" href="https://hpsmart.com">https://hpsmart.com</a> | © Copyright 2024 HP Development Company, L.P.
          </p>
        </td>
      </tr>
    </table>`;

    return spectrum;
}