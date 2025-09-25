import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const BlogPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all videos from backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_URL}/video`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.success) {
          setVideos(data.videos);
        }
      } catch (err) {
        console.error("Failed to load videos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Extract YouTube video ID from URL
  const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Get YouTube thumbnail
  const getYoutubeThumbnail = (url) => {
    const id = getYoutubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🎥 Video Library
        </h1>

        {loading ? (
          <p className="text-center">Loading videos...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => {
              const thumbnail = getYoutubeThumbnail(video.link);
              return (
                <Link to={`/video/${video._id}`} key={video._id}>
                  <div className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                    <img
                      src={thumbnail}
                      alt="Thumbnail"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = "/fallback.jpg"; // Optional fallback
                      }}
                    />
                    <div className="p-4">
                      <p className="text-sm text-blue-400 truncate">
                        {video.link}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        🎯 Points: {video.point} ⏱ Time: {video.time} min
                      </p>
                      <p className="text-blue-500 mt-2 text-sm hover:underline">
                        ▶ Watch Now
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
