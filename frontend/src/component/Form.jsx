// import { useState } from 'react';
import { Form, Input, Checkbox } from 'antd';

const MyForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: '0 auto' }}
    >
      <Form.Item
        label="Your Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="number"
        rules={[
          { required: true, message: 'Please enter your number' },
          { pattern: /^\d+$/, message: 'Number must be numeric' },
        ]}
      >
        <Input placeholder="Enter your number" />
      </Form.Item>

      <Form.Item
        label="Your Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Write your messages here"
        name="message"
        rules={[{ required: true, message: 'Please enter a message' }]}
      >
        <Input.TextArea placeholder="Enter your message" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('You must agree to proceed'),
          },
        ]}
      >
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Form.Item>

      <Form.Item>
        <button>Submit</button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
