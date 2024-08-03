import { useRouter } from 'next/router';

function Meta({ children }: any) {
  const router = useRouter();
  console.log(router.asPath);
  const style = {
    color: router.asPath === '/tool/mamp/' ? 'red' : 'blue'
  };

  return (
    <span style={style}>
      {children}
    </span>
  );
}

export default Meta;
