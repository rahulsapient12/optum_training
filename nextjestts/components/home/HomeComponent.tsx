import { OptumeTopicsModel } from '@/models/OptumTopicsModel';
import Link from 'next/link';
import React from 'react';

type Props = {
  Optum_Topics: OptumeTopicsModel[];
};


const HomeComponent = (props: Props) => {
  const Optum_Topics: OptumeTopicsModel[] = props.Optum_Topics as OptumeTopicsModel[];

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
