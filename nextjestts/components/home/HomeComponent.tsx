import Link from 'next/link';
import React from 'react';

type Props = {};
interface OptumeTopics {
  icon: string;
  title: string;
  desc: string;
  path: string;
}

const HomeComponent = (props: Props) => {
  const Optum_Topics: OptumeTopics[] = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      title: 'JavaScript',
      desc: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.',
      path: 'learn/javacript',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
      title: 'TypeScript',
      desc: "TypeScript permits specifying the categories of the data type being used among the codebase and has the power to report errors once the types don't match. For example, TypeScript can report a slip-up in the codebase when writing a string in a function that expects an integer or Boolean. JavaScript will not do this.",
      path: 'learn/typescript',
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuU0M5LODBbgWVAYYrz6zjUA8tdvarOkRJDA&usqp=CAU',
      title: 'HTML & CSS',
      desc: 'HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.',
      path: 'learn/htmlcss',
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
      title: 'React JS',
      desc: 'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. It aims to allow developers to create fast user interfaces for websites and applications alike easily. The main concept of React. js is virtual DOM.',
      path: 'learn/reactjs',
    },
    {
      icon: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png',
      title: 'Next JS',
      desc: 'Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.',
      path: 'learn/nextjs',
    },
    {
      icon: 'https://mui.com/static/logo.png',
      title: 'Material UI',
      desc: `Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.`,
      path: 'learn/materialui',
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq35wIe6UgRB_eZ-p84XKMippCgl0KobVGA&usqp=CAU',
      title: 'Redux & Redux Saga',
      desc: `Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.`,
      path: 'learn/redux',
    },
    {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHXt8mVorv2IktJFXvmh7sqwo9lBKGpzubMzKz8Arw01X_2-PG-1R_Lw4KTnOqOOaG6A&usqp=CAU',
      title: 'Jest',
      desc: `Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.`,
      path: 'learn/jest',
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Web Components',
      desc: `Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.`,
      path: 'learn/webcomponents',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      title: 'GitHub',
      desc: `GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.`,
      path: 'learn/github',
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Tailwind CSS',
      desc: `Tailwind CSS creates small utilities with a defined set of options enabling easy integration of existing classes directly into the HTML code. Custom styling can be provided to the components with the help of this framework.`,
      path: 'learn/tailwind',
    },
    {
      icon: 'data:image/png;base64,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',
      title: 'Bootstrap',
      desc: `Bootstrap is a free front-end framework for faster and easier web development. Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins.`,
      path: 'learn/bootstrap',
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Optum_logo_2021.svg/2560px-Optum_logo_2021.svg.png"
            alt="Optum"
          />
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-3xl">
            The fastest way to Learn For Optum Project
          </h3>
          <p className="mt-3">
            Optum, Inc. is an American healthcare services provider with
            business interests encompassing technology and related services,
            pharmacy care services and various direct healthcare services. It
            has been a subsidiary of UnitedHealth Group since 2011.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {Optum_Topics.map((item, idx) => (
              <li key={idx} className="hover:shadow-2xl p-3">
                <Link href={item.path} className="space-y-3 m-3">
                  <div className="w-12 h-12 mx-auto text-indigo-600 rounded-full flex items-center justify-center">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
