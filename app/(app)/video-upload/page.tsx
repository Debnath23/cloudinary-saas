"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import UploadLoading from "@/public/video/UploadLoading.mp4";

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();

  const MAX_FILE_SIZE = 70 * 1024 * 1024;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast("File size is too larger!");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("originalSize", file.size.toString());

    try {
      const response = await axios.post("/api/video-upload", formData);

      if (response.status !== 200) {
        toast("Video upload failed!");
        return;
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log("Video upload failed: ", error);
      toast("Something went wrong while uploading your video!");
    } finally {
      setIsUploading(false);
    }
  };

  return isUploading ? (
    <div className="flex justify-center items-center pt-[12.5%]">
      <video
        src={UploadLoading}
        autoPlay
        muted
        loop
        className="w-[35%] h-[35%] rounded-full"
      />
    </div>
  ) : (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Video File</span>
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="file-input file-input-bordered w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isUploading}
        >
          Upload Video
          {/* {isUploading ? "Uploading..." : "Upload Video"} */}
        </button>
      </form>
    </div>
  );
}
