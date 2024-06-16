import Sidebar from './_components/Sidebar';
import Player from './_components/Player';
import TopArtists from './_components/TopArtists';
import Genres from './_components/Genres';
import TopCharts from './_components/TopCharts';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <main className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        </main>
        <Player />
      </div>
    </div>
  );
};

export default Home;
