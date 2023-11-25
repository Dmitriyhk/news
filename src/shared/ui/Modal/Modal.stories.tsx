import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores quos culpa fuga doloribus modi veniam aliquam quibusdam quae, vitae, dolor mollitia ullam maxime, voluptates molestiae odit. Minus assumenda ducimus accusamus fugiat possimus? Accusantium ullam qui consequuntur impedit corrupti est odit vel autem ea? Adipisci, sed possimus. Non cumque temporibus nobis dolore fuga iusto repellat, exercitationem quos animi distinctio ullam iste laborum ipsum rerum dolorem voluptate, vel nemo velit facilis placeat deserunt at sed veniam facere. Obcaecati nulla ea eius corporis laboriosam sed vel alias sit inventore quos incidunt libero, unde laudantium iste quibusdam architecto optio illo eligendi sint dicta!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores quos culpa fuga doloribus modi veniam aliquam quibusdam quae, vitae, dolor mollitia ullam maxime, voluptates molestiae odit. Minus assumenda ducimus accusamus fugiat possimus? Accusantium ullam qui consequuntur impedit corrupti est odit vel autem ea? Adipisci, sed possimus. Non cumque temporibus nobis dolore fuga iusto repellat, exercitationem quos animi distinctio ullam iste laborum ipsum rerum dolorem voluptate, vel nemo velit facilis placeat deserunt at sed veniam facere. Obcaecati nulla ea eius corporis laboriosam sed vel alias sit inventore quos incidunt libero, unde laudantium iste quibusdam architecto optio illo eligendi sint dicta!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
