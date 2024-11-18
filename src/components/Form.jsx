import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = { id: Date.now(), name, quantity, checked: false };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
  };

  const optionQuantity = Array.from({ length: 15 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));

  // const optionQuantity = [...Array(15)].map((_, i) => (
  //   <option key={i} value={i + 1}>
  //     {i + 1}
  //   </option>
  // ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {optionQuantity}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Tambah</button>
      </div>
    </form>
  );
}

export default Form;
