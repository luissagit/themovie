import { Card, getData } from '@themovie/base';
import { List } from '@themovie/base/presentation/components/list';
import { useEffect, useState } from 'react';

export function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function generateData() {
    try {
      setLoading(true);
      const result = await getData({
        s: 'Pitch Perfect',
      });
      if (result?.Response?.toLowerCase() === 'true') {
        setData(result?.Search ?? []);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    generateData();
  }, []);

  return (
    <List
      data={data}
      render={(item: any) => {
        return <Card title={item?.Title} image_url={item?.Poster} description={item?.Year} />;
      }}
      title="Movies List"
      loading={loading}
    />
  );
}
