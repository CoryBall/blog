import Head from 'next/head'
import { useAppSelector } from '@blog/state';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const isAuthed = useAppSelector((state) => state.users.isAuthenticated);
  const loading = useAppSelector((state) => state.app.loading)

  if (!loading){
    return (<div></div>)
  }

  return (
    <div className="container">
      <Head>
        <title>Cory Blog</title>
      </Head>
      <div>
        isAuthed:
        <span className="text-xl text-black">
        {isAuthed}
        <p>
          loading: {loading}
        </p>
        </span>
      </div>
    </div>
  )
}

export default HomePage
