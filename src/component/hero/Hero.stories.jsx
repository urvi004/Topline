import Hero from "./Hero";

export default {
    title: "Homepage/Hero",
    component: Hero,
    argTypes: {
        heading: {
            name: "Heading",
          },
          description:{
            name: "description"
          },
          height:{
            name:"height"
          },
          id:{
            name:"id"
          }
      },
};

const Template = (args) => <Hero {...args}/>;

export const Default = Template.bind({});
export const small = Template.bind({});

Default.args = {
    heading: " Only 500 of the 10,000 diseases that afflict humans today have treatments",
    description: "We've mapped the world, now let's map human health.",
    height: "680px",
    id:"img-1"
  
}

small.args = {
    heading: "Together, we can invent the future of data-powered healthcare ",
    description: "",
    height: "400px",
    id:"img-2"
  
}