import { FaPepperHot as icon } from "react-icons/fa";

export default {
  name: "topping",
  title: "Toppings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Topping Name",
      type: "string",
      description: "What is the name of topping?",
    },
    {
      name: "vegeterian",
      title: "Vegetarian",
      type: "boolean",
      description: "What is the name of topping?",
      options: { layout: "checkbox" },
    },
  ],
  preview: {
    select: {
      name: "name",
      vegeterian: "vegeterian",
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegeterian ? "🌿" : ""}`,
    }),
  },
};
