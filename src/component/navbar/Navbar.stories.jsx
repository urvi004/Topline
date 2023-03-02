import Navbar from "./Navbar";

export default {
    title: "Homepage/Navbar",
    component: Navbar,
    argTypes: {
        alert: {
            name: "alert",
          },
      },
};

const Template = (args) => <Navbar {...args}/>;


export const Default = Template.bind({})
export const Disclaimer = Template.bind({})

Default.args = {
    alert:""
 }
 
Disclaimer.args = {
   alert:"This study is now closed. For current opportunities, browse our studies page."
}
