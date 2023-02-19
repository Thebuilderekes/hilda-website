import React from 'react';

export default function Bills() {
  const posts = [
    {
      heading: 'Bill 1',
      details:
        'Lorem ipsum dolo sit amet consectetur adipisicing elit. Fugitdolorum ab Eos,enim. Qui ducimus ex, facilis nesciunt inventoredistinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus quibusdam tempora, facere quis ea illo ratione! Oditillo deserunt eius, ipsum praesentium itaque voluptatem temporibuseum neque veritatis sapiente quaerat!',
    },
    {
      heading: 'Bill 2',
      details:
        'Lorem ipsum dolo sit amet consectetur adipisicing elit. Fugitdolorum ab Eos,enim. Qui ducimus ex, facilis nesciunt inventoredistinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus quibusdam tempora, facere quis ea illo ratione! Oditillo deserunt eius, ipsum praesentium itaque voluptatem temporibuseum neque veritatis sapiente quaerat!',
    },
    {
      heading: 'Bill 3',
      details:
        'Lorem ipsum dolo sit amet consectetur adipisicing elit. Fugitdolorum ab Eos,enim. Qui ducimus ex, facilis nesciunt inventoredistinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus quibusdam tempora, facere quis ea illo ratione! Oditillo deserunt eius, ipsum praesentium itaque voluptatem temporibuseum neque veritatis sapiente quaerat!',
    },
    {
      heading: 'Bill 4',
      details:
        'Lorem ipsum dolo sit amet consectetur adipisicing elit. Fugitdolorum ab Eos,enim. Qui ducimus ex, facilis nesciunt inventoredistinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus quibusdam tempora, facere quis ea illo ratione! Oditillo deserunt eius, ipsum praesentium itaque voluptatem temporibuseum neque veritatis sapiente quaerat!',
    },
  ];
  return (
    <div
      id="bill"
      className=" bg-gradient-to-r from-green-700 to-transparent  px-8 py-8"
    >
      <h2 className="animate__animated animate__fadeInUp animate__delay-3s pb-2 text-center text-3xl text-red-600 md:text-left md:text-6xl md:text-white">
        Bill Proposal
      </h2>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <li className="border-1 rounded-2xl border-red-700 py-4">
            <h3 className="text-2xl text-white">{post.heading}</h3>
            <p>{post.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
