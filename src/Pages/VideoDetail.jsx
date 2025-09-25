import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { toast } from "react-hot-toast";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifiedSteps, setNotifiedSteps] = useState([]);
  const intervalRef = useRef(null);
  const watchTimeRef = useRef(0); // time in seconds

  console.log(video);

  // Fetch video data
  const fetchVideo = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/video/${id}`,
        { credentials: "include" }
      );
      const data = await res.json();
      if (data.success) {
        setVideo(data.video);
      } else {
        console.error("Video not found");
      }
    } catch (error) {
      console.error("Failed to fetch video", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [id]);

  // Extract YouTube video ID
  const getYoutubeEmbedUrl = (url) => {
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regex);
    const videoId = match ? match[1] : null;
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`
      : null;
  };

  const embedUrl = video ? getYoutubeEmbedUrl(video.link) : null;

  // Watch tracking effect
  useEffect(() => {
    if (!video) return;

    const totalSeconds = video.time * 60; // convert to seconds
    const steps = [0.25, 0.5, 0.75, 1]; // checkpoints

    intervalRef.current = setInterval(() => {
      watchTimeRef.current += 1;
      const percentageWatched = watchTimeRef.current / totalSeconds;

      steps.forEach((step) => {
        if (percentageWatched >= step && !notifiedSteps.includes(step)) {
          notifyAndSendPoints(step);
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [video, notifiedSteps]);

  const notifyAndSendPoints = async (step) => {
    const awardedPoints = video.point / 4; // fixed for each milestone

    try {
      const res = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/video/add-point`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            videoId: video._id,
            point: awardedPoints,
          }),
        }
      );

      if (res.ok) {
        toast.success(`+${awardedPoints} point awarded 🎉`);
        setNotifiedSteps((prev) => [...prev, step]);
      } else {
        toast.error("Failed to award point ❌");
      }
    } catch (err) {
      console.error("Error sending point request:", err);
      toast.error("Server error while awarding point ❌");
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4 text-gray-100 min-h-screen">
        {loading ? (
          <p className="text-center mt-10 text-gray-400">Loading video...</p>
        ) : video ? (
          <>
            <div className="w-full aspect-w-16 aspect-h-9 mb-6">
              <iframe
                className="w-full h-72 md:h-96"
                src={embedUrl}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="text-blue-300 text-sm break-all mb-2">
                🔗 {video.link}
              </p>
              <p className="text-sm text-gray-300">
                🎯 <span className="font-medium">Total Points:</span>{" "}
                {video.point}
              </p>
              <p className="text-sm text-gray-300">
                ⏱ <span className="font-medium">Time:</span> {video.time} min
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-red-400 mt-10">Video not found.</p>
        )}
      </div>
    </Layout>
  );
};

export default VideoDetail;
