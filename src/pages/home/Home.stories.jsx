import Home from "./Home";

export default {
    title: "pages/Home",
    component: Home
};

const Template = (args) => <Home {...args}/>;

export const Default = Template.bind({})