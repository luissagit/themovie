import { Card, getData, SearchContext } from '@themovie/base';
import { List } from '@themovie/base/presentation/components/list';
import { useContext, useEffect, useState } from 'react';

export function Home() {
  const search = useContext(SearchContext);
  const searchValue = search?.value;

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>();

  async function generateData(search: string) {
    try {
      setLoading(true);
      const result = await getData({
        s: search?.length > 0 ? search : 'Pitch Perfect',
      });
      setData(result?.Search ?? []);
      // if (result?.Response?.toLowerCase() === 'true') {
      // }
      setMessage(result?.Error);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    generateData(searchValue);
  }, [searchValue]);

  return (
    <div>
      <List
        data={data}
        render={(item: any) => {
          return <Card title={item?.Title} image_url={item?.Poster} description={item?.Year} />;
        }}
        title="Movies List"
        loading={loading}
      />
      {message && <div style={{ fontSize: '1rem', color: 'white', marginLeft: 20 }}>{message}</div>}
    </div>
  );
}
