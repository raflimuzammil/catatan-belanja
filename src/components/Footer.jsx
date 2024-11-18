function Footer({ items }) {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {items.length === 0 ? (
        "Barang belanja masih kosong!"
      ) : (
        <>
          Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang
          sudah dibeli ({percentage}%)
        </>
      )}
    </footer>
  );
}

export default Footer;
