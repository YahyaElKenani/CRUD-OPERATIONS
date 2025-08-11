import { useContext, useState, useEffect } from "react";
import { UsersContext } from '../../Context/UsersProvider';
function EditProduct({ productId }) {
  const { updateProduct } = useContext(UsersContext);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
      const data = await res.json();
      setFormData({
        title: data.title,
        price: data.price,
        description: data.description,
      });
    };
    getProduct();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(productId, formData);
    alert("Product updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <textarea
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditProduct;
