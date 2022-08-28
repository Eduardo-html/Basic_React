const List = () => {
  const items = [
    {
      id: 0,
      name: "Luiz",
    },
    {
      id: 1,
      name: "Eduardo",
    },
    {
      id: 2,
      name: "Pedro",
    },
  ];

  return (
    <div>
      <hr />
      <h2>Lista</h2>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
