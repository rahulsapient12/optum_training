import LearTopicsComponent from '@/components/learn/LearTopicsComponent';
import { OptumeTopicsModel } from '@/models/OptumTopicsModel';
import React from 'react';

type Props = {};
export async function getStaticProps() {
  const res = await fetch(
    'https://rahulsapient12.github.io/optum_training/data/optumtopics.json'
  );
  const Optum_Topics = (await res.json()) as OptumeTopicsModel[];
  return {
    props: {
      Optum_Topics,
    },
    revalidate: 1,
  };
}
export async function getStaticPaths() {
  const res = await fetch(
    'https://rahulsapient12.github.io/optum_training/data/optumtopics.json'
  );
  const Optum_Topics = (await res.json()) as OptumeTopicsModel[];
  const paths = Optum_Topics.map((data) => data.path.replace('learn/', ''));
  const pathWithParams = paths.map((path) => ({ params: { learnName: path } }));
  return {
    paths: pathWithParams,
    fallback: false,
  };
}

const learnTopicPage = (props: Props) => {
  return (
    <div>
      <LearTopicsComponent />
    </div>
  );
};

export default learnTopicPage;
