import LoginComp from "./LoginComp";
export default {
  title: "LoginComp",
  component: LoginComp,
};

let Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginComp },
  template: `<LoginComp/>`,
});

export let Primary = Template.bind({});

Primary.args = {
  loginData: {
    email: "",
    password: "",
  },
};
