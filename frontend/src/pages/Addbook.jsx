import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useBookStore } from "../store/bookStore";
import "../index.css"
import bgImage from "../components/addbook-bg.jpg"

const AddBook = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [review, setReview] = useState("");
  const { addBook, isLoading, error } = useBookStore();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !author || !link) {
      toast.error("Please fill in required information.");
      return;
    }

    const { message } = await addBook(
      image,
      title,
      subtitle,
      author,
      link,
      review,
    );

    toast.success(message);
    navigate("/");
  };
  return (
    <div className="min-h-screen h-full text-[#252422] bg-[#404756]/70 px-4 md:px-12 pb-16">
      
      <div className="fixed inset-0 -z-5 addbookbg"style={{backgroundImage: `url(${bgImage})`}}>
        
      
      </div>
      <div className="flex items-center pt-40">
      <div className="custom-blur mx-auto border-1 border-black/10 rounded-3xl p-5  ">
      <h2 className="text-center text-[#f5f5f5] text-xl md:text-2xl max-w-xl mx-auto">
        Add Book to Library
      </h2>
      

      <form
        onSubmit={handleSubmit}
        className="z-10 w-full max-w-xl flex flex-col justify-center items-center space-y-2 mt-5 md:mt-10"
      >
        <div className="flex flex-col">
          <label className="funnel-display font-bold text-[#f5f5f5] md:text-lg">Book Image*:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-100 px-3 py-1.5 md:py-2 text-[#252422]/50 rounded-lg bg-transparent border-0 border-b-2 border-gray-100/20 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="funnel-display font-bold text-[#f5f5f5] md:text-lg">Title*:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the book title"
            className="w-100 px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-transparent border-0 border-b-2 border-gray-100/20 appearance-none dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="funnel-display font-bold text-[#f5f5f5] md:text-lg">Subtitle (optional):</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter the book subtitle"
            className="w-100 px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="funnel-display font-bold text-[#f5f5f5] md:text-lg">Author*:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
            className="w-100 px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="funnel-display font-bold text-[#f5f5f5] md:text-lg">Link*:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link to where users can find the book"
            className="w-100 px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="funnel-display font-bold text-[#f5f5f5] md:text-lg">Personal Review (optional):</label>
          <textarea
            rows={4}
            value={review}
            placeholder="Your personal review"
            onChange={(e) => setReview(e.target.value)}
            className="w-100 px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer "
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg"
        >
          {isLoading ? "Please wait..." : "Add Book"}
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default AddBook;