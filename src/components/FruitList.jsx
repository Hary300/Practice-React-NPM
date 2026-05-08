function FruitList() {
  let fruits = ['apple', 'banana', 'cherry', 'durian'];
  return (
    <div className='component-container'>
      <h2>Practice 2 - Fruit List</h2>
      <p>Instruction: Put Array Element Into Tag &lt;li&gt;</p>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
