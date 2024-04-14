import { SearchContext } from 'src/SearchContext';
import { useContext, useEffect, useState } from 'react';

let oldState = [];

export default function SearchResults() {
  const { search } = useContext(SearchContext);

  const [results, setResults] = useState([]); // eslint-disable-line no-unused-vars

  async function getResults() {
    try {
      if (search === '') {
        return;
      }

      const response = await fetch('http://127.0.0.1:5000/similaritySearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: search, index_name: 'avalondemobucket', k: 10 }),
      });

      const data = await response.json();

      oldState = results;
      setResults(data.documents);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(
    () => {
      getResults();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

  if (search === '' || results === '') {
    return <></>;
  }

  return (
    <div
      style={{
        paddingLeft: '10%',
        paddingRight: '10%',
        marginTop: '800px',
        zIndex: '9999',
        width: '100%',
      }}
      className="text-black container my-10 bg-white rounded-lg shadow-lg dark:bg-neutral-800 dark:text-white pb-6"
    >
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-16">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-0">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Text
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Document
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results &&
                    results.map((result, index) => (
                      <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {result.document}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{result.metadata.source}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
