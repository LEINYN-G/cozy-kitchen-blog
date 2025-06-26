export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/page/1',
      permanent: false
    }
  };
}

export default function Index() {
  return null;
}
