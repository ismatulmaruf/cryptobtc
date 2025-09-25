import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { toast } from "react-hot-toast";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ link: "", point: "", time: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/video`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) setVideos(data.videos);
      else toast.error(data.message || "Failed to fetch videos");
    } catch (err) {
      toast.error("Error fetching videos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/video${
      editingId ? `/${editingId}` : ""
    }`;
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(editingId ? "Video updated" : "Video added");
        fetchVideos();
        resetForm();
      } else {
        toast.error(data.message || "Operation failed");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleEdit = (video) => {
    setForm({ link: video.link, point: video.point, time: video.time });
    setEditingId(video._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this video?")) return;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/video/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Video deleted");
        setVideos(videos.filter((v) => v._id !== id));
      } else toast.error(data.message || "Delete failed");
    } catch {
      toast.error("Error deleting video");
    }
  };

  const resetForm = () => {
    setForm({ link: "", point: "", time: "" });
    setEditingId(null);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4 min-h-screen text-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {editingId ? "Edit Video" : "Add New Video"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Video link (e.g. YouTube)"
            className="w-full p-3 rounded bg-gray-900 border border-gray-600"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Points"
            className="w-full p-3 rounded bg-gray-900 border border-gray-600"
            value={form.point}
            onChange={(e) => setForm({ ...form, point: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Time (in minutes)"
            className="w-full p-3 rounded bg-gray-900 border border-gray-600"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold"
            >
              {editingId ? "Update" : "Add Video"}
            </button>
            {editingId && (
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className="text-xl mt-10 font-semibold mb-4">All Videos</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {videos.map((video) => (
              <div
                key={video._id}
                className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-medium">🔗 {video.link}</p>
                  <p className="text-xs text-gray-400">
                    🎯 Points: {video.point} | ⏱ Time: {video.time} min
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    className="text-yellow-400 hover:underline"
                    onClick={() => handleEdit(video)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(video._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Videos;
