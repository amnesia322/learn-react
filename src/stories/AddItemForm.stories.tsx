import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLIST/AddItemForm',
  component: AddItemForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    addItem: {
      description: 'Button clicked inside form'
    },
  },
} as ComponentMeta<typeof AddItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

const TemplateWithError: ComponentStory<typeof AddItemForm> = (args) => {

  let [title, setTitle] = useState("");
  let [error, setError] = useState<string | null>(null)

  const addItem = () => {
    if (title.trim() !== "") {
      args.addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(error) {
      setError(null);
    }

    if (e.charCode === 13) {
      addItem();
    }
  }

  return <div>
    <TextField variant="outlined"
               error={!!error}
               value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               label="Title"
               helperText={error}
    />
    <IconButton color="primary" onClick={addItem}>
      <AddBox />
    </IconButton>
  </div>
};


export const AddItemFormStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddItemFormStory.args = {
  addItem: action('Button clicked inside form')
};

export const AddItemFormStoryWithError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddItemFormStoryWithError.args = {
  addItem: action('Button clicked inside form')
};


