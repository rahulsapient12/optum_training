import HomeComponent from '@/components/home/HomeComponent';
import { OptumeTopicsModel } from '@/models/OptumTopicsModel';


type Props = {
  usename: string;
  Optum_Topics: OptumeTopicsModel[];
};

export async function getStaticProps() {
  const res = await fetch(
    'https://rahulsapient12.github.io/optum_training/data/optumtopics.json'
  );
  const Optum_Topics = (await res.json()) as OptumeTopicsModel[];
  return {
    props: {
      Optum_Topics,
      usename: 'Rahul',
    },
    revalidate: 1,
  };
}
export default function HomePage(props: Props) {
  return (
    <div>
      <HomeComponent Optum_Topics={props.Optum_Topics} />
    </div>
  );
}
