import Blog from "./Blog";

export default {
    title: "pages/Blog",
    component: Blog
};

const Template = (args) => <Blog {...args}/>;

export const Default = Template.bind({})