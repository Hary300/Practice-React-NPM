function FruitList() {
  let fruits = ['apple', 'banana', 'cherry', 'durian'];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default FruitList;
