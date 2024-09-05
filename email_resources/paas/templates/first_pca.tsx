export default function setFirstPCAEmail(props: any){
    const first_pca = `
    <table style="font-size: 1rem; border-radius: 0.5rem; width: 100%; max-width: 80%; margin-left: auto; margin-right: auto; padding: 0; border-collapse: collapse;">
  <tr>
    <td style="padding: 0;">
      <table style="width: 100%; height: 4rem; border-radius: 0.5rem; background: linear-gradient(to right, #6b21a8, #06b6d4); border-collapse: collapse;">
        <tr>
          <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
            <p style="font-size: 1.125rem; font-weight: bold; color: white;">Hello, ${props.customer}</p>
          </td>
          <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
            <img style="height: 2.5rem;" src="https://hp-emailgenerator.web.app/static/hp-logo.png">
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
      <p style="color: #1f2937; text-align: justify; margin: 0;">After</p>
      <p style="color: #1f2937; text-align: justify; margin: 0;">If</p>
      <p style="color: #1f2937; text-align: justify; margin: 0;">I</p>
      <p style="color: #1f2937; text-align: justify; margin: 0;">Here: <strong>${props.case_id}</strong></p>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="width: 5.5rem;">
            <img style="height: 5.5rem;" src="https://cdn-icons-png.freepik.com/512/7555/7555460.png" alt="">
          </td>
          <td style="padding-top: 15px;">
            <p style="color: #1f2937; text-align: justify; margin: 0;"><strong>${props.user}</strong></p>
            <p style="color: #1f2937; text-align: justify; margin: 0;">HP 24/7 Pro Support | All-In Plan</p>
            <p style="color: #1f2937; text-align: justify; margin: 0;">+1 888-447-0148</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 1.25rem; padding-right: 1.25rem;">
      <p style="color: #3d434a; margin-top: 3rem; font-size: 0.875rem; text-align: center;">
        This <a style="color: #2383bd;" href="https://hpsmart.com">https://hpsmart.com</a>
      </p>
    </td>
  </tr>
</table>


    `;

    return first_pca;
}