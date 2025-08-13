import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../Context/UsersProvider";

function EditProduct() {
  const { id } = useParams(); // جلب الـ id من الـ URL
  const { updateProduct } = useContext(UsersContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setFormData({
        title: data.title,
        description: data.description,
        price: data.price,
        category: data.category?.name || "",
        image: data.images?.[0] || "",
      });
    };
    getProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, formData);
    alert("Product updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-yellow-500 pl-3">
        Edit Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block font-semibold mb-1">Categories</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="Clothes">Clothes</option>
            <option value="Shoes">Shoes</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
        >
          EDIT A PRODUCT
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
